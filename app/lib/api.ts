'use server';

import { API_TYPES } from './apiTypes';

const API_URL = process.env.apo_url;
const API_TOKEN = process.env.api_token;

function apiUrl(
  type: string = API_TYPES.ALL,
  params: string = '',
  limit: number = 10,
  page: number = 1,
  language: string = 'en',
) {
  return `${API_URL}/${type}?api_token=${API_TOKEN}&language=${language}&page=${page}&limit=${limit}${params}`;
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
    const res = await fetch(apiUrl(API_TYPES.ALL, '', 10, page));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
