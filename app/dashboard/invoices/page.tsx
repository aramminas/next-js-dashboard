import { Metadata } from 'next';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/basic/search';
import Table from '@/app/ui/invoices/table';
import { PageProps } from '@/app/lib/types';
import { CreateButton } from '@/app/ui/basic/button';
import { fetchInvoicesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/basic/pagination';
import { InvoicesTableSkeleton } from '@/app/ui/basic/skeletons';

export const metadata: Metadata = {
  title: {
    template: '%s | Invoices',
    default: 'Invoices',
  },
};

export default async function Invoices({ searchParams }: PageProps) {
  const { query = '', page = '1' } = searchParams;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateButton subPath={'invoices'} title={'Create Invoice'} />
      </div>
      <Suspense key={query + page} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={+page} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
