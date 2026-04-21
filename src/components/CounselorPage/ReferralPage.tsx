//@ts-nocheck
import  { useState } from 'react';
import { FaPlane, FaUserFriends, FaPercent, FaHeadset, FaStar } from 'react-icons/fa';
import Sidebar from './Sidebar';

// Referral Page-এর সুবিধার তালিকা
const benefits = [
  { icon: FaPlane, text: 'বিনামূল্যে আপনার কলেজ টিকিট জেতার সুযোগ' },
  { icon: FaUserFriends, text: 'আপনার বন্ধু একই কাউন্সেলরের সঙ্গে যুক্ত হবে' },
  { icon: FaPercent, text: 'আপনার অ্যাপ্লিকেশনে ডিসকাউন্ট পান' },
  { icon: FaHeadset, text: 'নথিপত্র প্রক্রিয়া সম্পূর্ণ সহজে পান' },
  { icon: FaStar, text: 'ভিসা প্রক্রিয়া অগ্রাধিকার ভিত্তিক বিবেচনা পান' },
];

// Referral Benefit Card Component
const BenefitCard = ({ icon: Icon, text }) => {
  const cardStyle = {
    textAlign: 'center',
    padding: '20px 15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    flex: '1 1 150px', // রেসপনসিভ লেআউটের জন্য
    minWidth: '150px',
  };

  const iconStyle = {
    fontSize: '32px',
    color: '#5b21b6', // পার্পল
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <Icon style={iconStyle} />
      <p style={{ fontSize: '14px', color: '#374151' }}>{text}</p>
    </div>
  );
};

// Main Referral Page Component
const ReferralPage = () => {
  // Referral Form-এর স্টেট
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  const [referrals, setReferrals] = useState([]); // রেফারেল ট্র্যাকিং এর জন্য

  const handleReferral = (e) => {
    e.preventDefault();
    if (friendName.trim() && friendPhone.trim()) {
      const newReferral = {
        name: friendName,
        phone: friendPhone,
        date: new Date().toLocaleDateString('bn-BD'),
        status: 'পেন্ডিং',
      };
      
      // ডামি সেভিং লজিক
      setReferrals([...referrals, newReferral]);

      // ফর্ম রিসেট
      setFriendName('');
      setFriendPhone('');

      alert(`সাফল্যের সাথে রেফার করা হয়েছে: ${friendName}`);
    } else {
      alert('দয়া করে নাম ও ফোন নম্বর দিন।');
    }
  };

  // --- স্টাইলিং কনস্ট্যান্টস ---
  const pageStyle = {
    padding: '24px',
    backgroundColor: '#f9fafb',
    flexGrow: 1,
    fontFamily: 'sans-serif',
  };

  const headerStyle = {
    backgroundColor: '#5b21b6', // পার্পল ব্যাকগ্রাউন্ড
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const formContainerStyle = {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const inputGroupStyle = {
    flex: '1 1 300px', // বাম দিকের অংশ (ফর্ম)
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  };

  const ctaButtonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#5b21b6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.2s',
  };
  
  const emptyReferralStyle = {
      flex: '1 1 300px', // ডান দিকের অংশ (স্ট্যাটাস)
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#6b7280',
  }

  return (
   <div className='flex'>

    <div>
        <Sidebar></Sidebar>
    </div>
     <div style={pageStyle}>
      {/* Header Section (বেগুনি স্ট্রিপ) */}
      <div style={headerStyle}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 5px 0' }}>
          বন্ধুদের রেফার করুন, ফ্লাইট টিকেট জেতার সুযোগ পান
        </h2>
        <p style={{ fontSize: '14px', margin: 0 }}>
          ২,০০০ শিক্ষার্থী ২.০ কোটি টাকার পুরস্কার অর্জন করেছে
        </p>
      </div>

      {/* Referral Form & Status Section */}
      <div style={formContainerStyle}>
        
        {/* Referral Input (বাম দিক) */}
        <form onSubmit={handleReferral} style={inputGroupStyle}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>আপনার বন্ধুর বিস্তারিত লিখুন</h3>
          
          <label style={{ fontSize: '14px', color: '#6b7280', display: 'block' }}>নাম দিন</label>
          <input 
            type="text" 
            placeholder="" 
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            style={inputStyle} 
            required
          />
          
          <label style={{ fontSize: '14px', color: '#6b7280', display: 'block' }}>মোবাইল নম্বর দিন</label>
          <input 
            type="tel" 
            placeholder="" 
            value={friendPhone}
            onChange={(e) => setFriendPhone(e.target.value)}
            style={inputStyle} 
            required
          />
          
          <button 
            type="submit" 
            style={ctaButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4c1d95'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5b21b6'}
          >
            একজনকে রেফার করুন
          </button>
        </form>

        {/* Referral Status (ডান দিক) */}
        {referrals.length === 0 ? (
          <div style={emptyReferralStyle}>
            <FaUserFriends style={{ fontSize: '40px', color: '#d1d5db', marginBottom: '10px' }} />
            <p style={{ fontWeight: '600', color: '#4b5563' }}>আপনি এখনও কোনো রেফারেল করেননি</p>
            <p style={{ fontSize: '14px' }}>আপনার বন্ধুর নাম যোগ করে রেফার শুরু করুন</p>
          </div>
        ) : (
             // ঐচ্ছিক: রেফারেল থাকলে তালিকা দেখান
            <div style={emptyReferralStyle}>
                <h3 style={{ fontWeight: '600', color: '#4b5563', marginBottom: '15px' }}>আপনার রেফারেল তালিকা</h3>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                    {referrals.map((ref, index) => (
                        <li key={index} style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px 0', fontSize: '14px' }}>
                            <span style={{ fontWeight: '600' }}>{ref.name}</span> - {ref.phone} ({ref.status})
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </div>

      {/* Benefits Section */}
      <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: '#1f2937' }}>রেফারেলের সুবিধা</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>

      {/* Terms & Conditions */}
      <div style={{ marginTop: '40px' }}>
        <a href="/terms" style={{ fontSize: '16px', fontWeight: '600', color: '#5b21b6', textDecoration: 'none' }}>
          শর্তাবলী →
        </a>
      </div>
    </div>
    
   </div>
  );
};

export default ReferralPage;