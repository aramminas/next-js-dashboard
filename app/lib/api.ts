'use server';

import { z } from 'zod';
import { limit, dateValidation } from '@/app/constants';
import { API_TYPES, initPublishedData, SearchState } from './api-types';
import {
  getRandomPagesArray,
  setDate,
  definePublishedDate,
  multipleParams,
} from './utils';

const API_URL = process.env.apo_url;
const API_TOKEN = process.env.api_token;

function apiUrl(
  type: string = API_TYPES.ALL,
  params: string = '',
  page: number = 1,
  search: string = '',
  language: string = '',
  categories: string = '',
  publishedDate = initPublishedData,
) {
  const published = setDate(publishedDate);

  if (type === API_TYPES.UUID) {
    return `${API_URL}/${type}/${params}?api_token=${API_TOKEN}`;
  }

  if (type === API_TYPES.SIMILAR) {
    return `${API_URL}/${type}/${params}?api_token=${API_TOKEN}&language=${language}&${published}`;
  }

  if (type === API_TYPES.ALL && search) {
    let restParams = '';
    if (language) {
      restParams += `&language=${language}`;
    }

    if (categories) {
      restParams += `&categories=${categories}`;
    }

    return `${API_URL}/${type}?api_token=${API_TOKEN}&search=${search}&page=${page}${published}${restParams}`;
  }

  return `${API_URL}/${type}?api_token=${API_TOKEN}&language=${language}&page=${page}&limit=${limit}${params}${published}`;
}

const SearchFormSchema = z.object({
  search: z
    .string()
    .trim()
    .min(3, { message: 'The search field must be filled in!' }),
  languages: z.array(z.string()),
  categories: z.array(z.string()),
  published: z.string().superRefine((val, ctx) => {
    if (val !== '' && !val.match(dateValidation)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid date format!',
      });
    }
  }),
});

export async function searchAllNews(
  page: number,
  prevState: SearchState,
  formData: FormData,
) {
  try {
    const validatedFields = SearchFormSchema.safeParse({
      search: formData.get('search'),
      languages: formData.getAll('languages'),
      categories: formData.getAll('categories'),
      published: formData.get('published'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Invalid data entered. Couldn't find news!",
      };
    }

    const {
      search,
      languages,
      categories,
      published = '',
    } = validatedFields.data;

    const searchByLanguages = multipleParams(languages);
    const searchByCategories = multipleParams(categories);
    const searchByPublishedDate = definePublishedDate(published);

    const res = await fetch(
      apiUrl(
        API_TYPES.ALL,
        '',
        page,
        search,
        searchByLanguages,
        searchByCategories,
        searchByPublishedDate,
      ),
    );
    const data = await res.json();

    return { ...data, search, latest: Date.now() };
  } catch (err) {
    console.log(err);
  }
}

export async function getSources(page = 1) {
  try {
    const res = await fetch(apiUrl(API_TYPES.SOURCES, '', page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getNewsByCategory(category: string, page = 1) {
  try {
    const res = await fetch(apiUrl(API_TYPES.ALL, '', page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getTopStories(page: number) {
  try {
    const res = await fetch(apiUrl(API_TYPES.TOP, '', page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getNewsByUUID(uuid: string) {
  try {
    const res = await fetch(apiUrl(API_TYPES.UUID, uuid));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSimilarNews(uuid: string) {
  try {
    const res = await fetch(apiUrl(API_TYPES.SIMILAR, uuid));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllNews(page: number, q: string) {
  try {
    const res = await fetch(apiUrl(API_TYPES.ALL, '', page, q));
    const data = await res.json();

    return { ...data, latest: Date.now() };
  } catch (err) {
    console.log(err);
  }
}

export async function getDailyNews(count = 3, maxCount = 10, search = '') {
  try {
    const today = new Date().toLocaleString();
    const randomArray = getRandomPagesArray(count, maxCount);

    const allRandomNews = await Promise.all(
      randomArray.map(
        async (item) =>
          await (
            await fetch(
              apiUrl(API_TYPES.ALL, '', item, search, '', '', {
                publishedOn: today,
              }),
            )
          ).json(),
      ),
    );

    return allRandomNews.map((response) => response.data).flat();
  } catch (err) {
    console.log(err);
  }
}
