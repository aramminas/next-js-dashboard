'use client';

import { useState, useRef } from 'react';
import { useFormState } from 'react-dom';
import { NewsType } from '@/app/lib/api-types';
import { searchAllNews } from '@/app/lib/api';
import { initDate, DateType } from '@/app/lib/types';
import EmptyResult from '@/app/ui/basic/empty-result';
import SearchField from '@/app/ui/components/all-news/form/search-field';
import AllNewsFilters from '@/app/ui/components/all-news/all-news-filters';
import AllNewsContent from '@/app/ui/components/all-news/all-news-content';

export default function AllNewsForm({
  page,
  data,
  totalPages,
  latest,
}: {
  page: number;
  data: NewsType[];
  totalPages: number;
  latest: number;
}) {
  const initialState = { search: null };
  const ref = useRef<HTMLFormElement | null>(null);
  const [date, setDate] = useState<DateType>(initDate);
  const [showFilter, setShowFilter] = useState(false);

  const searchAllNewsWithPage = searchAllNews.bind(null, page);
  const [state, dispatch] = useFormState(searchAllNewsWithPage, initialState);
  const {
    search = '',
    data: searchData,
    meta: searchMeta,
    latest: searchLatest,
  } = state;

  const searchTotalPages = Math.floor(searchMeta?.found / searchMeta?.limit);
  const currentData = latest > (searchLatest || 0) ? data : searchData;

  function toggleFilter() {
    setShowFilter((prevState) => !prevState);
    if (showFilter) {
      ref.current?.reset();
      setDate(initDate);
    }
  }

  return (
    <>
      <form ref={ref} action={dispatch} className="w-full">
        <SearchField
          state={state}
          show={showFilter}
          toggleFilter={toggleFilter}
        />
        <AllNewsFilters date={date} setDate={setDate} show={showFilter} />
      </form>
      {currentData.length ? (
        <AllNewsContent
          data={currentData}
          totalPages={searchTotalPages || totalPages}
          search={search}
        />
      ) : (
        <EmptyResult />
      )}
    </>
  );
}
