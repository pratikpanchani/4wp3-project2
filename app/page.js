import Link from "next/link";

export default async function Posts() {
  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Pratik Panchani - 4WP3 Project 2 (Winter 2025)</h2>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/collection" className="btn btn-success">
            View Collection
          </Link>
          <Link href="/admin" className="btn btn-dark">
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
