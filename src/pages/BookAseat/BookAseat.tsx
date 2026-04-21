import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Mic, Users, Zap, Check, MapPin, Globe, BookOpen } from 'lucide-react';

import image2 from '../../../public/images/Bristy/cta.png';

// --- 1. TYPESCRIPT INTERFACES ---

interface Benefit {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface Event {
  id: number;
  title: string;
  country: string;
  program: string;
  topic: string;
  date: string;
  time: string;
  registered: number;
  hostName: string;
  hostImage: string;
  image: string;
  isFillingFast: boolean;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// --- 2. MOCK DATA ---
// এই ডেটা পরে ব্যাকএন্ড API থেকে ফেচ করা যেতে পারে।

const mockBenefits: Benefit[] = [
  { id: 1, icon: Check, title: "Personalized Guidance", description: "Get customized study abroad recommendations from experienced counselors." },
  { id: 2, icon: Check, title: "Application Fee Waivers", description: "₹3000 vouchers for on-the-spot university applications." },
  { id: 3, icon: Check, title: "Admission Assistance", description: "Receive On-the-spot Admission Help for selected universities." },
  { id: 4, icon: Check, title: "Finance and Scholarships", description: "Explore financial aid and scholarship opportunities." },
];

const mockUpcomingEvents: Event[] = [
  {
    id: 101,
    title: "Ireland Masterclass",
    country: "Ireland",
    program: "Masters",
    topic: "Admissions Roadmap",
    date: "14 Nov",
    time: "6:00PM - 6:00PM",
    registered: 502,
    hostName: "Riya Shah",
    hostImage: "https://i.ibb.co.com/R43ZJ9yZ/businessman-with-glasses-holding-book.jpg",
    image: "https://i.ibb.co.com/R43ZJ9yZ/businessman-with-glasses-holding-book.jpg",
    isFillingFast: false,
  },
  {
    id: 102,
    title: "UK Masterclass",
    country: "UK",
    program: "Masters",
    topic: "Admissions & Visa",
    date: "14 Nov",
    time: "6:00PM - 7:00PM",
    registered: 505,
    hostName: "Fiona Remu",
    hostImage: "https://i.ibb.co.com/8gn4JS4s/beautiful-woman-holding-clipboard.jpg",
    image: "https://i.ibb.co.com/8gn4JS4s/beautiful-woman-holding-clipboard.jpg",
    isFillingFast: false,
  },
  {
    id: 103,
    title: "US SOP Writing",
    country: "USA",
    program: "Undergrad",
    topic: "Application",
    date: "20 Nov",
    time: "7:00PM - 8:00PM",
    registered: 310,
    hostName: "Alex Joy",
    hostImage: "https://i.ibb.co.com/R43ZJ9yZ/businessman-with-glasses-holding-book.jpg",
    image: "https://i.ibb.co.com/5WrRTVxJ/handsome-man-posing-fireplace-books.jpg",
    isFillingFast: true,
  },
];

const mockFAQs: FAQ[] = [
  {
    id: 1,
    question: "Are all these events free of cost?",
    answer: "We at Leap believe in democratizing study abroad education and reducing the information gap in your study abroad journey to help you make an informed decision, that's why all the events are absolutely FREE.",
  },
  {
    id: 2,
    question: "How will I join the session?",
    answer: "The session link will be sent to your registered email and phone number 24 hours before the event. Most sessions are hosted over Zoom.",
  },
  {
    id: 3,
    question: "How will I get access to giveaways for any event?",
    answer: "Giveaways and prizes are announced live during the event. You must attend the entire session to be eligible for the draw.",
  },
];

// --- 3. HELPER COMPONENTS ---

// একক ইভেন্টের কার্ড (Upcoming Events Section-এর জন্য)
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col w-full">
      {/* Event Image & Host */}
      <div className="relative h-40">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://placehold.co/500x300/1e293b/ffffff?text=Event+Image')} />
        <div className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">

          {event.hostName}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>

        {/* Date and Time */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
          <span>{event.date} • {event.time}</span>
        </div>

        {/* Registered Count */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-2 text-indigo-500" />
          <span>{event.registered}+ Registered</span>
        </div>

        <div className="mt-auto">
          <button className="w-full bg-[#7c3aed] text-white py-3 rounded-xl font-bold transition duration-200">
            Register for free
          </button>
        </div>
      </div>
    </div>
  );
};

// FAQ আইটেম (Accordion)
const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      <div className={`mt-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm">{faq.answer}</p>
      </div>
    </div>
  );
};

// --- 4. MAIN SECTION COMPONENTS ---

// Hero Section (Screenshot 2025-11-14 103332.jpg)
const HeroSection: React.FC = () => {
  const mainEvent = {
    title: "Online Study Abroad Fair",
    date: "Fri 05 Dec",
    time: "10:30 - 12:30 am",
    host: "ZOOM",
    registered: 261,
    details: "Connect 1:1 with 12+ Uni Reps from UK, US & UAE",
    dates: ["6th DEC", "10am - 12pm"],
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:py-32 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Side: Event Banner */}
          <div className="relative w-full lg:w-3/5 p-6 bg-white rounded-3xl shadow-2xl shadow-indigo-200/50 min-h-[350px] overflow-hidden">
            {/* Abstract Background Shape - adapted from the image */}
            <div className="absolute top-0 left-0 w-full h-full opacity-80 z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* The prominent blue shape */}
                <polygon points="50,10 90,80 10,80" fill="url(#blueGradient)" className="opacity-90 transform translate-x-1/2 translate-y-1/2" />
                {/* Grid Pattern */}
                {[...Array(10)].map((_, i) => (
                  <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#e0e7ff" strokeWidth="0.5" />
                ))}
                {[...Array(10)].map((_, i) => (
                  <line key={i} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#e0e7ff" strokeWidth="0.5" />
                ))}
              </svg>
            </div>

            {/* Content & Image Overlay */}
            <div className="relative z-10 flex flex-col justify-between h-full text-white">
              <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                <Mic className='w-6 h-6 text-white' />
              </div>

              {/* <div className="flex-1 h-48"> 
    <img
      src={image1}
      alt="Global Fair"
      className="w-1/2 h-1/2 object-cover rounded-lg opacity-80"
    />
  </div> */}

              <div className='mt-8 text-gray-900'>
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  Online Study Abroad Fair
                </h1>
                <div className="flex space-x-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-bold rounded-full">{mainEvent.dates[0]}</span>
                  <span className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-bold rounded-full">{mainEvent.dates[1]}</span>
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  {mainEvent.details}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Card */}
          <div className="w-full lg:w-2/5 p-6 bg-white rounded-3xl shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Study Abroad Fair</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">{mainEvent.date} · {mainEvent.time}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">Hosted Over {mainEvent.host}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">{mainEvent.registered} people have registered</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-red-100 text-red-600 font-bold py-3 px-6 rounded-xl flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 mr-2" />
                Filling fast
              </button>
              <button className="flex-1 bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition duration-200 shadow-lg shadow-indigo-500/50">
                Book a Free Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About and Benefits Section (Screenshot 2025-11-14 103433.png)
const AboutSection: React.FC<{ benefits: Benefit[] }> = ({ benefits }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Side: About Text and Benefits */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Event</h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Here you will be connecting with 15+ University Reps from UK & USA.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">What you'll get:</h3>

          <div className="space-y-5">
            {benefits.map(benefit => (
              <div key={benefit.id} className="flex items-start">
                <benefit.icon className="w-6 h-6 mt-1 mr-4 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{benefit.title}:</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Booking Card (Repeated for context in the screenshot) */}
        {/* In a real SPA, this would likely be a sticky/fixed card, but here we place it for layout representation */}
        <div className="w-full lg:w-2/5 hidden lg:block">
          <div className="p-6 bg-white rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Study Abroad Fair</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">Fri 05 Dec · 10:30 - 12:30 am</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">Hosted Over ZOOM</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-indigo-500" />
                <span className="font-medium">261 people have registered</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <button className="bg-red-100 text-red-600 font-bold py-3 px-6 rounded-xl flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 mr-2" />
                Filling fast
              </button>
              <button className="bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/50"> Book a Free Seat </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Upcoming Events Section (Screenshot 2025-11-14 103452.png)
const UpcomingEventsSection: React.FC<{ events: Event[] }> = ({ events }) => {
  const [filters, setFilters] = useState({ country: 'All', program: 'All', topic: 'All' });

  // Define a type for the keys that produce string values and are used for filtering
  type FilterableStringKey = 'country' | 'program' | 'topic';

  // Mock filtering function (in a real app, filtering might happen on the backend)
  const filteredEvents = events.filter(event => {
    return (
      (filters.country === 'All' || event.country === filters.country) &&
      (filters.program === 'All' || event.program === filters.program) &&
      (filters.topic === 'All' || event.topic === filters.topic)
    );
  });

  // Explicitly defining the return type as string[] solves the array assignment error
  const getUniqueValues = (key: FilterableStringKey): string[] => {
    // When key is restricted to FilterableStringKey, event[key] is inferred as string.
    const values = events.map(event => event[key]);

    // We logically know all elements are strings, so we assert the return type.
    return ['All', ...Array.from(new Set(values))] as string[];
  };

  const countries = getUniqueValues('country');
  const programs = getUniqueValues('program');
  const topics = getUniqueValues('topic');

  // Simple Accordion for mobile view
  const FilterAccordion: React.FC<{ title: string; options: string[]; filterKey: keyof typeof filters }> = ({ title, options, filterKey }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (value: string) => {
      setFilters(prev => ({ ...prev, [filterKey]: value }));
      setIsOpen(false); // Close after selection on mobile
    };

    return (
      <div className="border-b border-gray-100 py-3">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className="font-semibold text-gray-700">{title}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pt-2' : 'max-h-0'}`}>
          <div className='flex flex-wrap gap-2'>
            {options.map(option => (
              <button
                key={option} // Removed 'as string' - now correctly typed as string
                onClick={() => handleChange(option)}
                className={`px-3 py-1 text-sm rounded-full transition duration-150 ${filters[filterKey] === option
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <MapPin className="w-8 h-8 mr-3 text-red-500 fill-red-100" />
          <h2 className="text-3xl font-bold text-gray-900">Upcoming events</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side: Filters */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-4 hidden lg:block">Filter by</h3>

            {/* Mobile/Small Screen Filters (Accordion) */}
            <div className='lg:hidden'>
              <FilterAccordion title="Countries" options={countries} filterKey="country" />
              <FilterAccordion title="Programs" options={programs} filterKey="program" />
              <FilterAccordion title="Topics" options={topics} filterKey="topic" />
            </div>


            {/* Desktop Filters (Static List) */}
            <div className='hidden lg:block space-y-6'>
              <div className='space-y-2'>
                <h4 className='font-semibold text-gray-700 flex justify-between items-center'>Countries <ChevronDown className='w-4 h-4' /></h4>
                <div className='flex flex-wrap gap-2'>
                  {countries.map(c => (
                    <button
                      key={c} // Removed 'as string' - now correctly typed as string
                      onClick={() => setFilters({ ...filters, country: c })}
                      className={`px-3 py-1 text-sm rounded-full transition duration-150 ${filters.country === c
                          ? 'bg-indigo-600 text-white font-medium'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className='space-y-2'>
                <h4 className='font-semibold text-gray-700 flex justify-between items-center'>Programs <ChevronDown className='w-4 h-4' /></h4>
                <div className='flex flex-wrap gap-2'>
                  {programs.map(p => (
                    <button
                      key={p} // Removed 'as string' - now correctly typed as string
                      onClick={() => setFilters({ ...filters, program: p })}
                      className={`px-3 py-1 text-sm rounded-full transition duration-150 ${filters.program === p
                          ? 'bg-indigo-600 text-white font-medium'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className='space-y-2'>
                <h4 className='font-semibold text-gray-700 flex justify-between items-center'>Topics <ChevronDown className='w-4 h-4' /></h4>
                <div className='flex flex-wrap gap-2'>
                  {topics.map(t => (
                    <button
                      key={t} // Removed 'as string' - now correctly typed as string
                      onClick={() => setFilters({ ...filters, topic: t })}
                      className={`px-3 py-1 text-sm rounded-full transition duration-150 ${filters.topic === t
                          ? 'bg-indigo-600 text-white font-medium'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Event Cards */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => <EventCard key={event.id} event={event} />)
              ) : (
                <div className="md:col-span-2 xl:col-span-3 text-center p-12 bg-white rounded-xl shadow-lg">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">Sorry, no events found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section (Screenshot 2025-11-14 103600.png)
const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 font-medium">Got questions?</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Find your answers here</h2>
        </div>

        <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
          {faqs.map(faq => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section (Ready to take the leap?) (Screenshot 2025-11-14 103629.png)
const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-200">
      <div className="container mx-auto px-4">
        <div className="relative bg-indigo-50 rounded-2xl p-6 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between">
          {/* Image on the left (simulated with a placeholder image with the required look) */}
          <div className='absolute left-0 bottom-0 top-0 w-1/3 md:static md:w-auto h-full md:h-auto z-10'>
            <img
              src={image2}
              alt="Ready to take the leap?"
              className="h-full w-full md:h-auto md:w-64 object-cover object-left rounded-l-2xl md:rounded-l-none"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x500/f3f4ff/4f46e5?text=Smiling+Man+on+Phone')}
            />
          </div>

          {/* Content on the right */}
          <div className="md:ml-16 w-full md:w-3/4 py-8 px-4 md:p-0 relative z-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ready to take the leap?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Connect with India's finest counsellors and biggest study abroad community.
            </p>
            <button className="bg-[#7c3aed] text-white font-bold py-3 px-8 rounded-xl hover:bg-indigo-700 transition duration-200 shadow-lg shadow-indigo-500/50">
              Talk to a counsellor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- 5. MAIN APP COMPONENT ---

const BookAseat: React.FC = () => {
  // Use state to potentially manage data fetching status (e.g., loading, error)
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  // Mock data fetching effect
  useEffect(() => {
    // In a real application, you would replace this with:
    // fetch('/api/data').then(res => res.json()).then(data => { setEvents(data.events); ... });
    setLoading(true);
    setTimeout(() => { // Simulate API delay
      setEvents(mockUpcomingEvents);
      setBenefits(mockBenefits);
      setFaqs(mockFAQs);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-xl font-medium text-indigo-600">Loading Content...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section (Includes the main event card) */}
      <HeroSection />

      {/* About the Event & What you'll get */}
      <AboutSection benefits={benefits} />

      {/* Upcoming Events & Filters */}
      <UpcomingEventsSection events={events} />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Banner */}
      <CTASection />



    </div>
  );
};

export default BookAseat;