import React from "react";
import type { UpdateData } from "../../types/DashBoardTypes";

interface Props {
  updates: UpdateData[];
}

const UpdatesTable: React.FC<Props> = ({ updates }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-2xl border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">সর্বশেষ আপডেটসমূহ</h3>
        <button className="text-sm text-indigo-600 hover:underline">সব দেখুন</button>
      </div>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3">প্রকার</th>
            <th className="p-3">শিরোনাম</th>
            <th className="p-3">তারিখ</th>
            <th className="p-3 text-center">অবস্থা</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{item.type}</td>
              <td className="p-3">{item.title}</td>
              <td className="p-3">{item.date}</td>
              <td className="p-3 text-center">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                  {item.status}
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
