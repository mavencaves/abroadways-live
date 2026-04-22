import React from "react";
import type { UpdateData } from "../../types/DashBoardTypes";

interface Props {
  updates: UpdateData[];
}

const TYPE_LABEL_MAP: Record<string, string> = {
  'ব্যবহারকারী': 'User',
  'ম্যানেজার': 'Manager',
  'কন্টেন্ট ম্যানেজার': 'Content Manager',
  'কোর্স ম্যানেজার': 'Course Manager',
};

const STATUS_LABEL_MAP: Record<string, string> = {
  'সক্রিয়': 'Active',
  'নিষ্ক্রিয়': 'Inactive',
};

const normalizeLabel = (value: string, dictionary: Record<string, string>) => dictionary[value] || value;

const UpdatesTable: React.FC<Props> = ({ updates }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Latest updates</h3>
        <button className="text-sm text-indigo-600 hover:underline">View all</button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3">Type</th>
            <th className="p-3">Title</th>
            <th className="p-3">Date</th>
            <th className="p-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{normalizeLabel(item.type, TYPE_LABEL_MAP)}</td>
              <td className="p-3">{item.title}</td>
              <td className="p-3">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td className="p-3 text-center">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  {normalizeLabel(item.status, STATUS_LABEL_MAP)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdatesTable;
