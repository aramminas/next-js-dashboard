import { Metadata } from 'next';
import { fetchCustomerById } from '@/app/lib/data';
import EditForm from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function EditCustomer({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const customer = await fetchCustomerById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: '/dashboard/customers/edit',
            active: true,
          },
        ]}
      />
      <EditForm customer={customer} />
    </main>
  );
}
