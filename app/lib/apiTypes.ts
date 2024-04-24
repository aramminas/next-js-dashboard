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

export type CategoryType = {
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
