export enum API_TYPES {
  TOP = 'top',
  ALL = 'all',
  UUID = 'uuid',
  SOURCES = 'sources',
  SIMILAR = 'similar',
  HEADLINES = 'headlines',
}

export type SourceType = {
  source_id: string;
  domain: string;
  language: string;
  locale: string;
  categories: string[];
};

export type NewsType = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: null | string;
};

export type NewsData = {
  meta: MetaData;
  data: NewsType[];
  error?: NewsError;
};

export type NewsError = {
  code: string;
  message: string;
};

export type MetaData = {
  found: number;
  returned: number;
  limit: number;
  page: number;
};

export type PublishedDate = {
  publishedOn?: string;
  publishedAfter?: string;
  publishedBefore?: string;
};

export const initPublishedData: PublishedDate = {
  publishedOn: '',
  publishedAfter: '',
  publishedBefore: '',
};

export type SearchState = {
  errors?: {
    search?: string[];
  };
  message?: string | null;
  search?: string | null;
  latest?: number;
} & Partial<Exclude<NewsData, 'errors'>>;
