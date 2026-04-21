//@ts-nocheck

import  { useState } from 'react';
import CounselingModal from './CouselingModal';
 // Modal Component টি ইম্পোর্ট করুন

const CounselingSection = () => {
    // স্টেট যা মোডালের খোলা/বন্ধ অবস্থা নিয়ন্ত্রণ করে
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    // ডামি বাটন স্টাইল
    const buttonStyle = {
        padding: '10px 20px', 
        backgroundColor: '#5b21b6', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px', 
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>বিনামূল্যে কাউন্সেলিং এর জন্য বুক করুন</h1>
            <p>আপনার সিঙ্গেল পেজের একটি অংশ</p>
            
            {/* মোডাল খোলার বাটন */}
            <button 
                onClick={handleOpenModal} 
                style={buttonStyle}
            >
                কাউন্সেলিং সেশন বুক করুন
            </button>
            
            {/* মোডাল কম্পোনেন্ট ব্যবহার করা হচ্ছে, প্রপস পাস করা হচ্ছে */}
            <CounselingModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default CounselingSection;