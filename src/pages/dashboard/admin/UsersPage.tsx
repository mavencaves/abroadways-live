import React, { useEffect, useState } from 'react';
import { adminApi } from '@/lib/api';
import { toast } from 'sonner';

export type UserType = {
  _id: string;
  name: string;
  email: string;
  country?: string;
  avatarUrl?: string;
  status: 'active' | 'inactive';
  role: 'user' | 'course-manager' | 'content-manager';
  createdAt?: string;
};

const PAGE_SIZE = 10;

const STATUS_LABELS: Record<UserType['status'], string> = {
  active: 'সক্রিয়',
  inactive: 'নিষ্ক্রিয়',
};

const ROLE_LABELS: Record<UserType['role'], string> = {
  user: 'ব্যবহারকারী',
  'course-manager': 'কোর্স ম্যানেজার',
  'content-manager': 'কনটেন্ট ম্যানেজার',
};

const STATUS_FILTER_OPTIONS = [
  { value: 'all', label: 'অবস্থা' },
  { value: 'active', label: 'সক্রিয়' },
  { value: 'inactive', label: 'নিষ্ক্রিয়' },
] as const;

const ROLE_OPTIONS = [
  { value: 'user', label: 'ব্যবহারকারী' },
  { value: 'course-manager', label: 'কোর্স ম্যানেজার' },
  { value: 'content-manager', label: 'কনটেন্ট ম্যানেজার' },
] as const;

type FormState = {
  name: string;
  email: string;
  country: string;
  role: UserType['role'];
  status: UserType['status'];
  avatarUrl: string;
};

const DEFAULT_FORM: FormState = {
  name: '',
  email: '',
  country: '',
  role: 'user',
  status: 'active',
  avatarUrl: '',
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [refreshToken, setRefreshToken] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showMenuId, setShowMenuId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const params: Record<string, any> = {
          page,
          limit: PAGE_SIZE,
        };
        if (query) params.q = query;
        if (statusFilter !== 'all') params.status = statusFilter;

        const response = await adminApi.getUsers(params);
        if (!isMounted) return;

        const data = response.data;
        setUsers(data.users || []);
        setTotal(data.meta?.total || 0);
      } catch (error: any) {
        if (!isMounted) return;
        const message = error?.response?.data?.message || 'ব্যবহারকারীর তথ্য লোড করতে ব্যর্থ হয়েছে।';
        toast.error(message);
        setUsers([]);
        setTotal(0);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();
    return () => {
      isMounted = false;
    };
  }, [page, query, statusFilter, refreshToken]);
  
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPage(1);
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value as 'all' | 'active' | 'inactive');
    setPage(1);
  }

  // --- 3. EXPORT CSV FUNCTIONALITY ---
  function escapeCsv(text: string | number | undefined) {
    if (text == null) return '';
    const str = String(text);
    const shouldQuote = /[",\n,]/.test(str);
    return shouldQuote ? `"${str.replace(/"/g, '""')}"` : str;
  }

  function exportCSV() {
    if (!users.length) {
      toast.error('Export করার জন্য কোনো ব্যবহারকারী নেই।');
      return;
    }

    const headers = ['Name', 'Email', 'Country', 'SignUp Date', 'Status', 'Role'];
    const rows = users.map(u => [
      escapeCsv(u.name),
      escapeCsv(u.email),
      escapeCsv(u.country || 'N/A'),
      escapeCsv(u.createdAt ? new Date(u.createdAt).toLocaleDateString('bn-BD') : ''),
      escapeCsv(STATUS_LABELS[u.status]),
      escapeCsv(ROLE_LABELS[u.role]),
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-page-${page}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CSV সফলভাবে ডাউনলোড হয়েছে!');
  }
  
  // --- 4. ADD NEW USER FUNCTIONALITY (API Integration Point) ---
  const resetForm = () => {
    setForm(DEFAULT_FORM);
    setEditingUser(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (user: UserType) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      email: user.email,
      country: user.country || '',
      role: user.role,
      status: user.status,
      avatarUrl: user.avatarUrl || '',
    });
    setShowModal(true);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('অনুগ্রহ করে নাম এবং ইমেইল দিন।');
      return;
    }

    try {
      setSubmitting(true);
      if (editingUser) {
        await adminApi.updateUser(editingUser._id, form);
        toast.success('ব্যবহারকারী আপডেট হয়েছে।');
      } else {
        await adminApi.createUser(form);
        toast.success('নতুন ব্যবহারকারী যোগ করা হয়েছে।');
      }

      setShowModal(false);
      resetForm();
      setPage(1);
      setRefreshToken(token => token + 1);
    } catch (error: any) {
      const message = error?.response?.data?.message || 'ব্যবহারকারী সংরক্ষণ করা যায়নি।';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  // --- 5. Action Handlers (Delete, Edit, etc.) ---
  async function handleDelete(userId: string) {
    if (!confirm('আপনি কি নিশ্চিত যে এই ব্যবহারকারীকে মুছে ফেলতে চান?')) return;
    setShowMenuId(null);
    setDeletingId(userId);
    try {
      await adminApi.deleteUser(userId);
      toast.success('ব্যবহারকারী মুছে ফেলা হয়েছে।');
      setRefreshToken(token => token + 1);
    } catch (error: any) {
      const message = error?.response?.data?.message || 'ব্যবহারকারী মুছে ফেলা সম্ভব হয়নি।';
      toast.error(message);
    } finally {
      setDeletingId(null);
    }
  }
  
  function handleEdit(user: UserType) {
    setShowMenuId(null);
    openEditModal(user);
  }

  // --- 6. PAGINATION AND UI CALCULATIONS ---
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-blue-800 mb-6">ব্যবহারকারীরা</h1>

        {/* --- Header and Action Buttons --- */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={exportCSV}
              className="flex items-center px-4 py-2 bg-white text-blue-700 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 10.586V3a1 1 0 10-2 0v7.586L6.707 7.707z" clipRule="evenodd" />
              </svg>
              এক্সপোর্ট CSV ফাইল
            </button>
            <button
              onClick={openCreateModal}
              className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              ব্যবহারকারী যোগ করুন
            </button>
          </div>

          {/* --- Search and Filter Bar --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={handleSearchChange}
                placeholder=" সার্চ করুন"
                className="w-full md:w-96 border border-gray-300 pl-10 pr-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="relative w-full md:w-48">
                <select value={statusFilter} onChange={handleStatusChange} className="w-full border border-gray-300 px-4 py-2 rounded-lg appearance-none bg-white pr-10">
                    {STATUS_FILTER_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
          </div>

          {/* --- Table --- */}
          <div className="overflow-x-auto min-h-[300px]">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase text-gray-700 bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 min-w-[200px]">ব্যবহারকারী</th>
                  <th className="px-4 py-3 min-w-[200px]">ইমেইল</th>
                  <th className="px-4 py-3 min-w-[120px]">পছন্দের দেশ</th>
                  <th className="px-4 py-3 min-w-[120px]">ভূমিকা</th>
                  <th className="px-4 py-3 min-w-[150px]">সাইন-আপ তারিখ</th>
                  <th className="px-4 py-3 min-w-[100px]">অবস্থা</th>
                  <th className="px-4 py-3 min-w-[80px]">কার্যক্রম</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">ডেটা লোড হচ্ছে...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">কোনো ব্যবহারকারী পাওয়া যায়নি</td>
                  </tr>
                ) : (
                  users.map(user => (
                    <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 flex items-center">
                        <img 
                          src={user.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover mr-3 flex-shrink-0 bg-indigo-50"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`;
                          }}
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{user.email}</td>
                      <td className="px-4 py-3">{user.country || 'অনির্ধারিত'}</td>
                      <td className="px-4 py-3">{ROLE_LABELS[user.role]}</td>
                      <td className="px-4 py-3">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString('bn-BD') : 'N/A'}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {STATUS_LABELS[user.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 relative">
                        {/* More/Ellipsis Button (কার্যক্রম) */}
                        <button
                          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
                          onClick={() => setShowMenuId(showMenuId === user._id ? null : user._id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        
                        {/* Action Dropdown Menu */}
                        {showMenuId === user._id && (
                            <div 
                                className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border z-20 overflow-hidden"
                                onMouseLeave={() => setShowMenuId(null)} // Hide on mouse leave
                            >
                                <button 
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                                    onClick={() => handleEdit(user)}
                                >
                                    সম্পাদনা করুন
                                </button>
                                <button 
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-60"
                                    onClick={() => handleDelete(user._id)}
                                    disabled={deletingId === user._id}
                                >
                                    {deletingId === user._id ? 'মুছছে...' : 'মুছে ফেলুন'}
                                </button>
                            </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* --- Pagination Footer --- */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
                {total === 0 ? '০টি আইটেম' : `সর্বমোট ${total}টি রেকর্ডের মধ্যে ${showingFrom}-${showingTo}টি দেখানো হচ্ছে।`}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1 || loading}
                className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                পূর্ববর্তী
              </button>
              <div className="mx-2 text-sm text-gray-700 font-medium">পেজ {page} / {totalPages}</div>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page >= totalPages || loading}
                // Use blue-700 for the Next button as per the screenshot's style (next page button)
                className="px-4 py-2 border border-blue-700 rounded-lg bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Add New User Modal --- */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => { setShowModal(false); resetForm(); }} />
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 z-10 transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-medium mb-5 text-gray-800">
              {editingUser ? 'ব্যবহারকারী সম্পাদনা করুন' : 'নতুন ব্যবহারকারী যোগ করুন'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                <input 
                  value={form.name} 
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700" 
                  placeholder="ব্যবহারকারীর পুরো নাম"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input 
                  type="email"
                  value={form.email} 
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700" 
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">দেশ</label>
                <input
                  value={form.country}
                  onChange={e => setForm(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700"
                  placeholder="বাংলাদেশ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">প্রোফাইল ছবি URL</label>
                <input
                  value={form.avatarUrl}
                  onChange={e => setForm(prev => ({ ...prev, avatarUrl: e.target.value }))}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ভূমিকা</label>
                  <select
                    value={form.role}
                    onChange={e => setForm(prev => ({ ...prev, role: e.target.value as UserType['role'] }))}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700 bg-white"
                  >
                    {ROLE_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">অবস্থা</label>
                  <select
                    value={form.status}
                    onChange={e => setForm(prev => ({ ...prev, status: e.target.value as UserType['status'] }))}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700 bg-white"
                  >
                    {STATUS_FILTER_OPTIONS.filter(option => option.value !== 'all').map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }} 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  বাতিল
                </button>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 disabled:opacity-50 transition"
                >
                  {submitting ? 'সংরক্ষণ হচ্ছে...' : editingUser ? 'আপডেট করুন' : 'যোগ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}