import React, { useState } from 'react';
import { Settings, Plug, Key, Link } from 'lucide-react'; // আইকন ব্যবহারের জন্য lucide-react ব্যবহার করা হয়েছে

// API সেটিংস ডেটা কাঠামোর জন্য TypeScript ইন্টারফেস
interface APISettings {
  apiKey: string;
  webhookUrl: string;
}

const IntegrationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ইন্টিগ্রেশন');
  const [apiData, setApiData] = useState<APISettings>({
    apiKey: '**********************', // ডেমো কী
    webhookUrl: 'https://your-domain.com/webhook',
  });

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiData(prev => ({ ...prev, apiKey: e.target.value }));
  };

  const handleWebhookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiData(prev => ({ ...prev, webhookUrl: e.target.value }));
  };

  const handleRegenerateKey = () => {
    // API কী পুনরায় জেনারেট করার লজিক
    alert('নতুন API কী জেনারেট করা হলো।');
    // বাস্তব ক্ষেত্রে এখানে একটি API কল করা হবে
    const newKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiData(prev => ({ ...prev, apiKey: newKey }));
  };

  const IntegrationCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex justify-between items-center p-4 mb-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="text-indigo-600 mr-4">
          {icon}
        </div>
        <div>
          <h4 className="text-md font-bold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button className="px-5 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
        সংযোগ করুন
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-xl rounded-lg">
        
        {/* প্রধান হেডিং */}
        <div className="text-lg font-bold text-gray-800 mb-1 flex items-center">
          <Settings className="w-5 h-5 mr-2 text-indigo-600" />
          সেটিংস
        </div>
        <p className="text-sm text-gray-500 mb-6 border-b pb-4">
          আপনার অ্যাকাউন্ট সেটিংস এবং কর্মক্ষমতা কনফিগারেশন পরিবর্তন করুন
        </p>

        {/* ন্যাভিগেশন বার */}
        <div className="flex space-x-2 border-b-2 border-gray-200 mb-8">
          {['প্রোফাইল', 'নোটিফিকেশন', 'নিরাপত্তা', 'ইন্টিগ্রেশন'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg'
                  : 'text-gray-500 hover:text-indigo-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- API সেটিংস সেকশন --- */}
        <div className="mb-10">
          <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <Key className="w-5 h-5 mr-2 text-indigo-600" />
            API সেটিংস
          </h3>
          <p className="text-sm text-gray-500 mb-6">এই API কী এবং ইন্টিগ্রেশন সেটিংসগুলি পরিবর্তন করুন</p>

          {/* API কী ইনপুট */}
          <div className="mb-6">
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              API কী
            </label>
            <div className="flex space-x-3">
              <input
                type="password" // নিরাপত্তা নিশ্চিত করতে password টাইপ ব্যবহার
                id="apiKey"
                name="apiKey"
                value={apiData.apiKey}
                onChange={handleApiKeyChange}
                placeholder="আপনার API কী লিখুন"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleRegenerateKey}
                className="px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 transition-colors"
              >
                পুনরায় জেনারেট করুন
              </button>
            </div>
          </div>

          {/* ওয়েববুক ইউআরএল ইনপুট */}
          <div className="mb-6">
            <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700 mb-1">
              ওয়েববুক ইউআরএল
            </label>
            <input
              type="url"
              id="webhookUrl"
              name="webhookUrl"
              value={apiData.webhookUrl}
              onChange={handleWebhookChange}
              placeholder="https://your-domain.com/webhook"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* বাটন */}
          <button
            type="button"
            className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            নতুন API কী সেভ করুন
          </button>
        </div>

        {/* --- থার্ড-পার্টি ইন্টিগ্রেশন সেকশন --- */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
            <Plug className="w-5 h-5 mr-2 text-indigo-600" />
            তৃতীয়-পক্ষের ইন্টিগ্রেশনসমূহ
          </h3>
          <p className="text-sm text-gray-500 mb-6">অন্যান্য সেটিং পরিবর্তন করুন</p>
          
          {/* ইন্টিগ্রেশন কার্ডগুলো */}
          <IntegrationCard
            icon={<Link className="w-6 h-6" />}
            title="গুগল অ্যানালিটিক্স"
            description="ওয়েবসাইট বিশ্লেষণ এবং ট্র্যাকিং সক্ষম করুন"
          />
          
          <IntegrationCard
            icon={<Settings className="w-6 h-6" />}
            title="মেইলচিম্প"
            description="ইমেইল মার্কেটিং পরিচালনা করুন"
          />

          <IntegrationCard
            icon={<Plug className="w-6 h-6" />}
            title="স্ট্রাইপ"
            description="পেমেন্ট গেটওয়ে"
          />
        </div>

      </div>
    </div>
  );
};

export default IntegrationPage;