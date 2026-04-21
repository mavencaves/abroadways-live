import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock3, Gift, MapPin, Mic2, Video } from "lucide-react";
import { Link } from "react-router";
import ComingSoonSection from "@/components/coming-soon.tsx";
import { eventsApi } from "@/lib/api";

const image1 = "/images/Bristy/Event455318Img-min-1024x615.jpg";

type EventRecord = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

const benefits = [
  {
    title: "Live guidance",
    text: "Join sessions designed for students who want better clarity on higher education abroad, exams, and visa planning.",
    icon: Video,
  },
  {
    title: "Expert speakers",
    text: "Hear from experienced advisors and guest voices with insight into study destinations, applications, and student outcomes.",
    icon: Mic2,
  },
  {
    title: "Useful takeaways",
    text: "Get practical advice, structured next steps, and event follow-up resources that help you act with confidence.",
    icon: Gift,
  },
];

const fallbackEvents: EventRecord[] = [
  {
    _id: "fallback-1",
    title: "Study Abroad Planning Session for Students and Parents",
    description:
      "A practical information session covering destination selection, application strategy, scholarships, and visa planning.",
    date: "2026-05-15T00:00:00.000Z",
    time: "6:30 PM",
    location: "Dhaka",
    image: image1,
  },
  {
    _id: "fallback-2",
    title: "UK and Europe Admissions Guidance Webinar",
    description:
      "Understand university shortlisting, documents, timelines, and student-ready pathways for competitive applications.",
    date: "2026-05-28T00:00:00.000Z",
    time: "7:00 PM",
    location: "Online",
    image: image1,
  },
  {
    _id: "fallback-3",
    title: "LanguageCert, IELTS, and PTE Decision Workshop",
    description:
      "Compare English language tests and choose the right exam pathway based on destination, deadlines, and profile strength.",
    date: "2026-06-07T00:00:00.000Z",
    time: "5:00 PM",
    location: "Chattogram",
    image: image1,
  },
];

const EventPage: React.FC = () => {
  const [events, setEvents] = useState<EventRecord[]>(fallbackEvents);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadEvents = async () => {
      try {
        const response = await eventsApi.getAll();
        const data = Array.isArray(response.data) ? response.data : [];

        if (!isMounted) {
          return;
        }

        if (data.length > 0) {
          setEvents(data);
        }
      } catch {
        if (isMounted) {
          setEvents(fallbackEvents);
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

  const featuredEvents = useMemo(() => {
    const sorted = [...events].sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();
      return first - second;
    });

    return sorted.slice(0, 3);
  }, [events]);

  const formatEventDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <section className="border-b border-gray-100 bg-white px-4 py-12 sm:px-6 lg:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:pr-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Abroadways Events</p>
            <h1 className="mb-6 mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Premium live sessions for students planning to study abroad from Bangladesh.
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Explore upcoming seminars, information sessions, and student-focused events covering universities,
              scholarships, visa guidance, and test preparation.
            </p>

            <div className="mb-10 flex flex-col gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-red-100 p-2 text-xs font-bold text-red-600 shadow-lg">LIVE</span>
                <p className="text-gray-700">Real-time guidance from the Abroadways team and invited experts</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-yellow-100 p-2 text-xs font-bold text-yellow-600 shadow-lg">FREE</span>
                <p className="text-gray-700">Student-friendly sessions with practical takeaways</p>
              </div>
            </div>

            <Button asChild size="xl" className="rounded-full bg-blue-700 px-8 hover:bg-blue-800">
              <Link to="/contact">Reserve Your Interest</Link>
            </Button>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-2xl sm:h-96 lg:h-[450px]">
            <img src={image1} alt="Abroadways event" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why Attend</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Events that create clarity before you make major academic decisions
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="mt-3 text-gray-600">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Upcoming Events</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
                Live student events powered by the admin content system
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-600">
                This section now reads from the event backend when event data is available, while keeping a clean
                fallback if the API is empty or temporarily unavailable.
              </p>
            </div>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link to="/contact">Request Event Support</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {isLoading ? (
              <div className="col-span-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                Loading upcoming events...
              </div>
            ) : (
              featuredEvents.map((event) => (
                <article
                  key={event._id}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image || image1}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-8 text-slate-950">{event.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {event.description || "More event details will be shared soon."}
                    </p>

                    <div className="mt-5 space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-blue-700" />
                        <span>{formatEventDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-blue-700" />
                        <span>{event.time || "Time to be announced"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-700" />
                        <span>{event.location || "Venue to be announced"}</span>
                      </div>
                    </div>

                    <Button asChild className="mt-6 w-full rounded-full bg-blue-700 hover:bg-blue-800">
                      <Link to="/contact">Reserve Your Interest</Link>
                    </Button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                <CalendarDays className="h-4 w-4" />
                Event Updates
              </div>
              <h2 className="mt-3 text-3xl font-semibold">Stay ready for the next Abroadways event</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                Join our update list to hear about upcoming webinars, information sessions, and destination-focused
                events for students and parents.
              </p>
            </div>
            <Button asChild size="xl" className="rounded-full bg-white px-8 text-slate-950 hover:bg-blue-50">
              <Link to="/contact">Get Event Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      <ComingSoonSection />
    </div>
  );
};

export default EventPage;
