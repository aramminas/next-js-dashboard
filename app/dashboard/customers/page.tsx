import { Metadata } from 'next';
import { Suspense } from 'react';
import { PageProps } from '@/app/lib/types';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { CustomersTableSkeleton } from '@/app/ui/basic/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Customers({ searchParams }: PageProps) {
  const { query = '', page = '1' } = searchParams;
  const customers = await fetchFilteredCustomers(query, +page);

  return (
    <Suspense key={query + page} fallback={<CustomersTableSkeleton />}>
      <CustomersTable customers={customers} query={query} />
    </Suspense>
  );
}
