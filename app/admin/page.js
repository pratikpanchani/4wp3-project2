import Link from 'next/link';

export default async function AdminPage() {

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Admin Dashboard</h1>
      <Link href="/admin/create">Create New</Link>
    </div>
  );
}
