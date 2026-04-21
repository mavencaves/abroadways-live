import React from 'react';
 // Assuming react-router-dom for routing
import {
  FaHome,
  FaUserFriends,
  FaGraduationCap,
  FaGlobe,
  FaBookmark,
  FaFileAlt,
} from 'react-icons/fa'; // Using react-icons for a modern look
import { Link } from 'react-router';

// Define the structure for a menu item
interface MenuItem {
  text: string;
  icon: React.ElementType; // Type for the icon component
  route: string; // The path for routing
  highlight?: boolean; // Optional flag to highlight the item
}

// Menu items based on the provided image (in Bengali)
const menuItems: MenuItem[] = [
  { text: 'হোম', icon: FaHome, route: '/counsellor-home', highlight: true },
  { text: 'বন্ধুকে রেফার করুন', icon: FaUserFriends, route: '/counsellor-referral' },
  { text: 'আমার বিশ্ববিদ্যালয়সমূহ', icon: FaGraduationCap, route: '/counsellor-modal' },
  { text: 'ভিসা সহায়তা', icon: FaGlobe, route: '/visa-help' },
  { text: 'বুকমার্কস', icon: FaBookmark, route: '/bookmarks' },
  { text: 'IELTS পরীক্ষার সম্পর্কে', icon: FaFileAlt, route: '/about-ielts' },
];

// Component for a single menu item
interface SidebarItemProps extends MenuItem {
  // You could add logic here for active state if needed (e.g., active: boolean)
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon: Icon, route, highlight }) => {
  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    cursor: 'pointer',
    marginBottom: '8px',
    borderRadius: '4px',
    color: highlight ? '#5b21b6' : '#4b5563', // Highlight color (purple)
    backgroundColor: highlight ? '#f5f3ff' : 'transparent', // Highlight background (light purple)
    fontWeight: highlight ? '600' : '400',
    transition: 'background-color 0.2s, color 0.2s',
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '12px',
    fontSize: '20px',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
  };

  return (
    <Link to={route} style={{ textDecoration: 'none' }}>
      <div style={itemStyle} onMouseOver={(e) => { if (!highlight) e.currentTarget.style.backgroundColor = '#f3f4f6'; }} onMouseOut={(e) => { if (!highlight) e.currentTarget.style.backgroundColor = 'transparent'; }}>
        <Icon style={iconStyle} />
        <span style={textStyle}>{text}</span>
      </div>
    </Link>
  );
};

// Main Sidebar Component
const Sidebar: React.FC = () => {
  const sidebarStyle: React.CSSProperties = {
    width: '250px', // Adjust as needed
    padding: '16px 8px',
    height: '100vh',
    boxSizing: 'border-box',
    borderRight: '1px solid #e5e7eb', // Optional separator
  };

  return (
    <div style={sidebarStyle}>
      {menuItems.map((item) => (
        <SidebarItem key={item.route} {...item} />
      ))}
    </div>
  );
};

export default Sidebar;