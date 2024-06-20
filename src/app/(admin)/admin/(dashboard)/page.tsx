import { authorizeAdminRoute } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function Admin() {
  await authorizeAdminRoute();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <Link
              href="/admin/add-problem"
              className="block text-center text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Add Problems
            </Link>
          </li>
          <li>
            <Link
              href="/admin/all-problems"
              className="block text-center text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              View All Problems
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
