//@ts-nocheck

// নতুন আইকন ইম্পোর্ট করা হলো: FaUniversity, FaFileContract, FaBookOpen, FaSearch, FaPlay, FaCalendarAlt, FaClock
import { FaPlay, FaCalendarAlt, FaClock, FaUniversity, FaFileContract, FaBookOpen, FaSearch } from 'react-icons/fa'; 
import Sidebar from './Sidebar'; 
const image1 = '/images/Bristy/entrepreneurs-meeting-office.jpg'
const image2 = '/images/Bristy/front-view-smiley-man-holding-paper.jpg'
const image3 = '/images/Bristy/portrait-smiling-male-student-holding-books.jpg'
const image4 = '/images/Bristy/attractive-successful-business-professional-holding-microphone-against-colored-background.jpg'

// --- উপ-কম্পোনেন্ট: ১. ফিচার কার্ড ---

const FeatureCard = ({ title, description, buttonText, route }) => {
  // কার্ডের ডাটা হিসেবে React Icon ব্যবহার
  let IconComponent;
  let iconColor = '#5b21b6'; // পার্পল কালার

  switch (buttonText) {
    case 'আরও দেখুন →':
      IconComponent = FaUniversity; // ইউনিভার্সিটি/বিল্ডিং আইকন
      break;
    case 'শুরু করুন →':
      IconComponent = FaFileContract; // কন্ট্রাক্ট/ডকুমেন্ট আইকন
      break;
    case 'পড়ুন →':
      IconComponent = FaBookOpen; // বই/গাইড আইকন
      break;
    case 'ট্র্যাক করুন →':
    default:
      IconComponent = FaSearch; // সার্চ/ট্র্যাক আইকন
      break;
  }

  const cardStyle = {
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    color: '#5b21b6', // পার্পল টেক্সট
    fontWeight: '600',
    marginTop: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: '16px' }}>
        {/* React Icon ব্যবহার */}
        <IconComponent style={{ fontSize: '32px', color: iconColor }} /> 
        
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '12px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>{description}</p>
      </div>
      <a href={route} style={buttonStyle}>
        {buttonText}
      </a>
    </div>
  );
};

// --- উপ-কম্পোনেন্ট: ২. ইভেন্ট/লেকচার কার্ড ---

const EventCard = ({ imageSrc, title, date, time, route }) => {
  const cardStyle = {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    backgroundColor: 'white',
    // maxWidth: '500px', // আনুমানিক সাইজ - removed for flex growth
    flex: '1 1 300px', // 2 কার্ডের জন্য রেসপনসিভ ফ্লেক্স
  };

  const infoStyle = {
    padding: '16px',
  };

  const metaStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '8px',
  };

  const buttonStyle = {
    backgroundColor: '#5b21b6',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '4px',
    fontWeight: '500',
    marginTop: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={cardStyle}>
      <img
        src={imageSrc} // ছবিতে ইমেজ সোর্স ব্যবহার করতে হবে
        alt={title}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <div style={infoStyle}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>{title}</h4>
        <div style={metaStyle}>
          <FaCalendarAlt style={{ marginRight: '8px' }} /> {date}
        </div>
        <div style={metaStyle}>
          <FaClock style={{ marginRight: '8px' }} /> {time}
        </div>
        <a href={route} style={buttonStyle}>
          আপনার সিট বুক করুন এখনই
        </a>
      </div>
    </div>
  );
};

// --- উপ-কম্পোনেন্ট: ৩. ভিডিও গ্যালারি আইটেম ---

const VideoGalleryItem = ({ imageSrc, route }) => {
  const itemStyle = {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    maxWidth: '250px', // আনুমানিক সাইজ
  };

  const playButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(91, 33, 179, 0.9)', // সেমি-ট্রান্সপারেন্ট পার্পল
    borderRadius: '50%',
    padding: '12px',
    color: 'white',
    fontSize: '24px',
    transition: 'background-color 0.2s',
  };

  return (
    <a href={route} style={itemStyle} aria-label="ভিডিও দেখুন">
      <img
        src={imageSrc}
        alt="ভিডিও থাম্বনেইল"
        style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
      />
      <div style={playButtonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(76, 29, 149, 0.9)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(91, 33, 179, 0.9)'}>
        <FaPlay />
      </div>
    </a>
  );
};

// --- মূল কম্পোনেন্ট: CounsellorHomePage ---

const CounsellorHomePage = () => {
  
  // হোমপেজ কন্টেন্ট এরিয়া স্টাইল
  const pageStyle = {
    padding: '32px 16px', 
    backgroundColor: '#f9fafb',
    fontFamily: 'sans-serif',
    flexGrow: 1, // **গুরুত্বপূর্ণ পরিবর্তন:** বাকি জায়গাটি নিয়ে নেবে
  };

  const containerStyle = {
    maxWidth: '100%', // কন্টেইনারের পুরো চওড়া ব্যবহার করবে
    margin: '0 auto',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#5b21b6',
    marginTop: '40px',
    marginBottom: '20px',
    borderBottom: '3px solid #5b21b6', 
    display: 'inline-block',
    paddingBottom: '5px',
  };

  // ফিচার কার্ডের গ্রিড স্টাইল
  const cardGridStyle = {
    display: 'grid',
    // বড় স্ক্রিনে ৪ কলাম, ছোট স্ক্রিনে কম কলাম
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
    gap: '20px',
  };
    
  return (
    // **গুরুত্বপূর্ণ পরিবর্তন:** মেইন div তে flex সেট করা হলো
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      
      {/* ১. সাইডবার */}
      <Sidebar />
      
      {/* ২. মূল কন্টেন্ট (হোমপেজ) */}
      <div style={pageStyle}>
        <div style={containerStyle}>
          {/* টপ হিরো সেকশন */}
          <header style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#5b21b6', marginBottom: '8px' }}>
              আপনার বিদেশ পড়াশোনার যাত্রা শুরু করুন এখান থেকেই
            </h1>
            <p style={{ fontSize: '16px', color: '#5b21b6' }}>
              বাংলাদেশ বিশ্বের সেরা গন্তব্যে উচ্চশিক্ষার সুযোগ দিচ্ছে, আপনি আপনার প্রয়োজন অনুসারে সেরা দিক-নির্দেশনা পেতে পারেন।
            </p>
          </header>

          {/* ৪টি কার্ডের সেকশন */}
          <div style={cardGridStyle}>
            <FeatureCard
              title="বিদেশি বিশ্ববিদ্যালয়সমূহ অনুসন্ধান করুন"
              description="বিশাল সংখ্যক ভেরিফাইড ও র্যাঙ্ক করা ইউনিভার্সিটি ও কোর্স খুঁজে নিন।"
              buttonText="আরও দেখুন →"
              route="/search-universities"
            />
            <FeatureCard
              title="ভিসা অ্যাপ্লিকেশন প্রক্রিয়া শুরু করুন"
              description="ভিসা প্রক্রিয়াটি একটি গাইডসহ সহজে সম্পন্ন করুন।"
              buttonText="শুরু করুন →"
              route="/start-visa-application"
            />
            <FeatureCard
              title="আপনার অ্যাপ্লিকেশন স্ট্যাটাস দেখুন"
              description="আপনার বিশ্ববিদ্যালয়ের অ্যাপ্লিকেশনের স্ট্যাটাস রিয়েল-টাইমে ট্র্যাক করুন।"
              buttonText="ট্র্যাক করুন →"
              route="/track-application"
            />
            <FeatureCard
              title="IELTS পরীক্ষা প্রস্তুতি গাইড"
              description="IELTS পরীক্ষার জন্য প্রয়োজনীয় রিসোর্স ও টিপস পড়ুন।"
              buttonText="পড়ুন →"
              route="/ielts-guide"
            />
          </div>

          {/* ইভেন্টস সেকশন */}
          <h2 style={sectionTitleStyle}>ইভেন্টসে যোগদান করুন</h2>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap', 
              justifyContent: 'flex-start',
            }}
          >
            <EventCard
              imageSrc={image1} 
              title="প্রস্তুতিতে বাংলাদেশ ব্লক ইভেন্টস"
              date="২৫ অক্টোবর, ২০২৫"
              time="সকাল ১০:০০ - দুপুর ১:০০"
              route="/event-bangladesh"
            />
            <EventCard
              imageSrc={image2}
              title="গ্লোবাল স্টাডি ফেয়ার"
              date="৩০ অক্টোবর, ২০২৫"
              time="বিকাল ৪:০০ - সন্ধ্যা ৬:০০"
              route="/global-study-fair"
            />
          </div>

          {/* ভিডিও গ্যালারি সেকশন */}
          <h2 style={sectionTitleStyle}>সর্বশেষ স্টাডি অ্যাব্রড আপডেটসসমূহ</h2>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap', 
              justifyContent: 'flex-start',
            }}
          >
            <VideoGalleryItem
              imageSrc={image3}
              route="/video/update-1"
            />
            <VideoGalleryItem
              imageSrc={image4} 
              route="/video/update-2"
            />
            {/* আরও ভিডিও আইটেম যোগ করুন */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CounsellorHomePage;