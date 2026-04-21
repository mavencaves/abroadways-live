import React, { useEffect, useMemo, useState } from 'react';
import { Users, Calendar, BarChart3, Star, ChevronDown, Clock, MapPin } from 'lucide-react';
import { eventsApi } from "@/lib/api";

// ডেটার জন্য TypeScript ইন্টারফেস
interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ElementType;
}

interface Event {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
  participants: string;
}

// মক ডেটা
const stats: Stat[] = [
  { id: 1, value: '৩,০০,০০০+', label: 'উপস্থিত শিক্ষার্থী', icon: Users },
  { id: 2, value: '৫০০+', label: 'আয়োজিত ইভেন্ট', icon: Calendar },
  { id: 3, value: '৫.৯/৫', label: 'শিক্ষার্থীদের রেটিং', icon: Star },
  { id: 4, value: '#১', label: 'ক্যাম্পাস এনগেজমেন্ট', icon: BarChart3 },
];

const mockEvents: Event[] = [
  {
    id: "m-1",
    title: 'অস্ট্রেলিয়া, বাংলাদেশ থেকে ইউএসএ',
    subtitle: 'ইভেন্ট ডিটেইলস',
    imageUrl: 'https://i.ibb.co.com/F4z2kvRH/attractive-successful-business-professional-holding-microphone-against-colored-background.jpg',
    date: '১০ জুলাই, ২০২৫',
    time: 'রাত ৮:০০ - রাত ৯:৩০',
    location: '১০০০+ রেজিস্ট্রেশন করেছেন',
    participants: '৪.৮ রেটিং',
  },
  {
    id: "m-2",
    title: 'গ্লোবাল স্টুডেন্ট জার্নি',
    subtitle: 'ওয়ার্কশপ',
    imageUrl: 'https://i.ibb.co.com/7tks6dpv/Getty-Images-1645070623-b65de84f8be543549c66c73fd28f41ab.jpg',
    date: '৩০ জুলাই, ২০২৫',
    time: 'সকাল ১০:০০ - দুপুর ১:০০',
    location: '৩০০+ রেজিস্ট্রেশন করেছেন',
    participants: '৫.০ রেটিং',
  },
  {
    id: "m-3",
    title: 'গ্লোবাল স্টাডি এক্সপো ২০২৩',
    subtitle: 'সেমিনার',
    imageUrl: 'https://i.ibb.co.com/zhqCCbbq/Image-2.webp',
    date: '১৫ আগস্ট, ২০২৫',
    time: 'দুপুর ২:০০ - রাত ৪:৩০',
    location: '২০০+ রেজিস্ট্রেশন করেছেন',
    participants: '৪.৯ রেটিং',
  },
  
];


// ড্রপডাউন কম্পোনেন্ট
interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<DropdownProps> = ({ label, value, onChange }) => (
  <div className="relative w-full md:w-auto flex-1 md:flex-initial">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none block w-full bg-white border border-gray-300 rounded-xl py-3 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent text-gray-700 transition duration-150 ease-in-out cursor-pointer shadow-sm hover:border-violet-400"
    >
      <option value="">{label}</option>
      {/* এখানে ফিল্টারের অপশনগুলো যোগ হবে */}
      <option value="option1">অপশন ১</option>
      <option value="option2">অপশন ২</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <ChevronDown className="w-4 h-4" />
    </div>
  </div>
);


// ইভেন্ট কার্ড কম্পোনেন্ট
const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
    {/* ইভেন্ট ইমেজ */}
    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="object-cover w-full h-full transition duration-500 ease-in-out transform hover:scale-105"
        //@ts-ignore
        onError={(e: any) => e.target.src = 'https://placehold.co/400x250/ccc/333?text=Image+Not+Found'} 
      />
     
    </div>

    {/* কার্ড বডি */}
    <div className="p-5 sm:p-6 flex flex-col justify-between h-auto">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
          {event.title}
        </h3>
        <p className="text-sm font-medium text-violet-600 mb-4">{event.subtitle}</p>

        {/* ইভেন্টের তথ্য */}
        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-violet-500 flex-shrink-0" />
            <span className="font-semibold">{event.date}</span>
          </p>
          <p className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-violet-500 flex-shrink-0" />
            <span className="font-semibold">{event.time}</span>
          </p>
          <p className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-violet-500 flex-shrink-0" />
            {event.location}
          </p>
        </div>
      </div>
      
      {/* বুকিং বাটন */}
      <button
        onClick={() => console.log(`Booking for event ${event.id}`)}
        className="mt-6 w-full bg-violet-700 text-white font-semibold py-3 rounded-xl hover:bg-violet-800 transition duration-150 ease-in-out shadow-lg shadow-violet-500/50 transform hover:scale-[1.01]"
      >
        আপনার ফ্রি টিকিট বুক করুন এখনি!
      </button>
    </div>
  </div>
);


// প্রধান কম্পোনেন্ট
const UpcomingEvent: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        const response = await eventsApi.getAll();
        const data = Array.isArray(response.data) ? response.data : [];
        if (!isMounted) {
          return;
        }

        const formatted: Event[] = data.map((event) => ({
          id: event._id,
          title: event.title,
          subtitle: event.description ? event.description.slice(0, 60) + (event.description.length > 60 ? "..." : "") : 'ইভেন্ট ডিটেইলস',
          imageUrl: event.image || 'https://placehold.co/400x250/ccc/333?text=Event',
          date: event.date
            ? new Date(event.date).toLocaleDateString("bn-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : 'তারিখ নির্ধারিত হয়নি',
          time: event.time || 'সময় নির্ধারিত হয়নি',
          location: event.location || 'স্থান নির্ধারিত হয়নি',
          participants: event.location ? `${event.location} থেকে নির্বাচিত` : 'নিবন্ধন চলমান',
        }));

        if (formatted.length === 0) {
          setEvents(mockEvents);
          return;
        }

        setEvents([...formatted, ...mockEvents]);
      } catch (error) {
        console.error("Failed to fetch events. Using fallback events.", error);
        if (isMounted) {
          setEvents(mockEvents);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCountry = selectedCountry ? event.location.includes(selectedCountry) : true;
      const matchesProgram = selectedProgram ? event.subtitle.includes(selectedProgram) : true;
      const matchesSubject = selectedSubject ? event.title.includes(selectedSubject) : true;
      return matchesCountry && matchesProgram && matchesSubject;
    });
  }, [events, selectedCountry, selectedProgram, selectedSubject]);

  return (
    <div className="font-['Inter'] min-h-screen bg-gray-50 pb-16">
      {/* ১. পরিসংখ্যান বার */}
      <div className="bg-violet-700 py-6 md:py-8 lg:py-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-3 sm:p-4 bg-violet-800/80 rounded-xl flex flex-col items-center justify-center space-y-1 transform hover:bg-violet-800 transition duration-300"
              >
                <stat.icon className="w-6 h-6 text-white mb-1 hidden sm:block" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-violet-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ২. মূল কন্টেন্ট সেকশন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        
        {/* Call to Action */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-10 md:mb-16">
          আসন্ন ইভেন্টগুলো দেখে যোগ দিন আমাদের সাথে!
        </h2>

        {/* ৩. ফিল্টার/ড্রপডাউন সেকশন */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 md:mb-20">
          <FilterDropdown
            label="সকল দেশ"
            value={selectedCountry}
            onChange={setSelectedCountry}
          />
          <FilterDropdown
            label="সকল প্রোগ্রাম"
            value={selectedProgram}
            onChange={setSelectedProgram}
          />
          <FilterDropdown
            label="সকল বিষয়"
            value={selectedSubject}
            onChange={setSelectedSubject}
          />
        </div>

        {/* ৪. ইভেন্ট কার্ড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="col-span-full text-center text-gray-500">ইভেন্ট লোড হচ্ছে...</p>
          ) : filteredEvents.length ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">কোনো ইভেন্ট পাওয়া যায়নি</p>
          )}
        </div>
        
        {/* লোড মোর বাটন (ঐচ্ছিক) */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-3 bg-white border border-violet-700 text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition duration-150 ease-in-out shadow-md"
          >
            আরো ইভেন্ট দেখুন
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpcomingEvent;
