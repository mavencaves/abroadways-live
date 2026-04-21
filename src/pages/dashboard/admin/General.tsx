import React, { useState } from 'react';

// ইন্টারফেস (Interface) ব্যবহার করে ফর্ম ডেটার টাইপ ডিফাইন করা হয়েছে
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  darkMode: boolean;
  autoSave: boolean;
  division: string;
  dob: string;
}

const General: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    darkMode: false,
    autoSave: true,
    division: 'ঢাকা',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // ইনপুট টাইপ চেক করে টগল বা সাধারণ ইনপুট হ্যান্ডেল করা হয়েছে
    if (type === 'checkbox') {
        setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
        setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', form);
    // এখানে আপনার ফর্ম সাবমিশনের লজিক লিখুন
  };

  // টগল সুইচের জন্য একটি কাস্টম কম্পোনেন্ট
  const ToggleSwitch: React.FC<{ label: string; name: keyof FormState; checked: boolean; onChange: typeof handleChange }> = ({ label, name, checked, onChange }) => (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-700 font-medium">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name as string}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-indigo-600"></div>
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-xl rounded-lg">
        
        {/* টপ ন্যাভিগেশন */}
        <div className="flex space-x-4 border-b pb-4 mb-6">
          <button className="px-4 py-2 text-sm font-medium border-b-2 border-indigo-600 text-indigo-600">লগইন</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">অ্যাডমিন প্যানেল</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">পাসওয়ার্ড</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-indigo-600">প্রোফাইল</button>
        </div>

        <form onSubmit={handleSubmit}>

          {/* সেকশন ১: ব্যক্তিগত তথ্য */}
          <div className="mb-8">
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4">
              <span className="mr-2 text-indigo-600">👤</span>
              ব্যক্তিগত তথ্য
            </h3>
            <p className="text-sm text-gray-500 mb-4">আপনার ব্যক্তিগত তথ্যগুলো সঠিকভাবে পূরণ করুন।</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  প্রথম নাম
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="আপনার প্রথম নাম দিনুন"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  শেষ নাম
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="আপনার শেষ নাম দিনুন"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="আপনার কার্যকর ইমেইল দিনুন"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  ঠিকানা
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  placeholder="আপনার বর্তমান ঠিকানা দিনুন"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                পরবর্তী ধাপে যান
              </button>
              <button
                type="button"
                className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ফর্ম বাতিল করুন
              </button>
            </div>
          </div>

          <hr className="my-8" />

          {/* সেকশন ২: যোগাযোগ এবং সেটিং */}
          <div className="mb-8">
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4">
              <span className="mr-2 text-indigo-600">⚙️</span>
              যোগাযোগ সেটিং
            </h3>
            <p className="text-sm text-gray-500 mb-4">অন্যান্য সেটিং পরিবর্তন করার জন্য নিচে ক্লিক করুন।</p>
            
            <ToggleSwitch
              label="ডার্ক মোড"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1 ml-6 mb-4">স্বয়ংক্রিয়ভাবে রাতের মোড পরিবর্তন হবে।</p>
            
            <ToggleSwitch
              label="স্বয়ংক্রিয় সেভ"
              name="autoSave"
              checked={form.autoSave}
              onChange={handleChange}
            />
          </div>

          <hr className="my-8" />

          {/* সেকশন ৩: অতিরিক্ত সেটিং */}
          <div>
            <h3 className="flex items-center text-lg font-bold text-gray-800 mb-4">
              <span className="mr-2 text-indigo-600">🌐</span>
              অতিরিক্ত সেটিং
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
                  বিভাগ
                </label>
                <select
                  id="division"
                  name="division"
                  value={form.division}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>ঢাকা</option>
                  <option>চট্টগ্রাম</option>
                  <option>রাজশাহী</option>
                  <option>খুলনা</option>
                  <option>সিলেট</option>
                </select>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                  জন্ম তারিখ
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  placeholder="MM/DD/YYYY"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;