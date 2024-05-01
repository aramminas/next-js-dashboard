'use server';

import { setDate } from './utils';
import { API_TYPES, initPublishedData } from './apiTypes';

const API_URL = process.env.apo_url;
const API_TOKEN = process.env.api_token;
const limit = 3; // the allowed limit of the free plan

function apiUrl(
  type: string = API_TYPES.ALL,
  params: string = '',
  limit: number = 10,
  page: number = 1,
  language: string = 'en',
  publishedDate = initPublishedData,
) {
  const published = setDate(publishedDate);

  if (type === API_TYPES.UUID) {
    return `${API_URL}/${type}/${params}?api_token=${API_TOKEN}`;
  }

  if (type === API_TYPES.SIMILAR) {
    return `${API_URL}/${type}/${params}?api_token=${API_TOKEN}&language=${language}&${published}`;
  }

  return `${API_URL}/${type}?api_token=${API_TOKEN}&language=${language}&page=${page}&limit=${limit}${params}${published}`;
}

export async function getSources(page = 1) {
  try {
    const res = await fetch(apiUrl(API_TYPES.SOURCES, '', 50, page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getNewsByCategory(category: string, page = 1) {
  try {
    const res = await fetch(apiUrl(API_TYPES.ALL, '', limit, page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getTopStories(page: number) {
  try {
    const res = await fetch(apiUrl(API_TYPES.TOP, '', limit, page));
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
