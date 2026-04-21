//@ts-nocheck

import { FaCheckCircle, FaTimes } from 'react-icons/fa'; // আইকন ব্যবহারের জন্য

// ডামি ইমেজ সোর্স (আপনার আসল ইমেজের সোর্স দিন)
// const ILLUSTRATION_SRC = "../../../";
const image1 = '/images/Bristy/8848686.jpg'

// isOpen এবং onClose প্রপস গ্রহণ করছে (এটি আবশ্যক)
const CounselingModal = ({ isOpen, onClose }) => {
  // Modal বন্ধ করার ফাংশন, যদি isOpen false হয় তবে রেন্ডার হবে না
  if (!isOpen) return null;

  
  const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // হালকা ডার্ক ব্যাকগ্রাউন্ড
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const MODAL_STYLE = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '32px',
    width: '90%',
    maxWidth: '650px',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  };

  const HEADER_STYLE = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1f2937',
    lineHeight: '1.2',
    marginBottom: '16px',
  };

  const CLOSE_BUTTON_STYLE = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#9ca3af',
  };

  const CHECK_ITEM_STYLE = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
    color: '#374151',
  };

  const BUTTON_STYLE = {
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#5b21b6', // পার্পল কালার
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={OVERLAY_STYLE}>
      <div style={MODAL_STYLE}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={CLOSE_BUTTON_STYLE}
          aria-label="বন্ধ করুন"
        >
          <FaTimes />
        </button>

        {/* Modal Content - বাম এবং ডান ভাগ */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* বাম দিক: টেক্সট ও ফর্ম */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h2 style={HEADER_STYLE}>বিনামূল্যে কাউন্সেলিং সেশন বুক করুন</h2>
            <p style={{ color: '#6b7280', marginBottom: '16px', fontWeight: '500' }}>
              আজই বুক করুন:
            </p>

            {/* চেকলিস্ট */}
            <div style={{ marginBottom: '20px' }}>
              <div style={CHECK_ITEM_STYLE}>
                <FaCheckCircle style={{ color: '#5b21b6', marginRight: '10px', fontSize: '18px' }} />
                <span>তাৎক্ষণিক ভর্তি যোগ্যতা যাচাই</span>
              </div>
              <div style={CHECK_ITEM_STYLE}>
                <FaCheckCircle style={{ color: '#5b21b6', marginRight: '10px', fontSize: '18px' }} />
                <span>আপনার জন্য স্কলারশিপের বিকল্প</span>
              </div>
              <div style={CHECK_ITEM_STYLE}>
                <FaCheckCircle style={{ color: '#5b21b6', marginRight: '10px', fontSize: '18px' }} />
                <span>স্বীকৃতিপ্রাপ্ত বিশ্ববিদ্যালয়সমূহের সংক্ষিপ্ত তালিকা</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                // ফর্ম সাবমিশন লজিক যোগ করা যেতে পারে
                alert('চালিয়ে যান বাটনে ক্লিক করা হয়েছে!');
                onClose(); // মোডাল বন্ধ
              }}
              style={BUTTON_STYLE}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4c1d95'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5b21b6'}
            >
              চালিয়ে যান
            </button>
          </div>

          {/* ডান দিক: ইলাস্ট্রেশন */}
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <img
              src={image1}
              alt="বিদেশ পড়াশোনার ইলাস্ট্রেশন"
              style={{
                width: '200px',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselingModal;