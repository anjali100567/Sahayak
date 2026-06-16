// Centralized mock data for Sahayak
// This file serves as the single source of truth for all mock data.
// When Supabase is connected, replace these with database queries.

export const WORKERS = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    category: 'electrician',
    categoryLabel: 'Electrician',
    bio: 'Certified electrician with 5 years of residential and commercial experience. Specializing in wiring, panel upgrades, and smart home installations.',
    yearsExperience: 5,
    rating: 4.8,
    reviewCount: 120,
    avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 20,
    phone: '+91 98765 43210',
    location: 'Green Park, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi', 'English'],
    skills: ['Wiring', 'Panel Upgrades', 'Smart Home', 'Lighting']
  },
  {
    id: '2',
    name: 'Sunita Sharma',
    category: 'maid',
    categoryLabel: 'Maid',
    bio: 'Experienced house maid with 8 years of service. Expert in deep cleaning, laundry, and kitchen organization. Known for punctuality and thoroughness.',
    yearsExperience: 8,
    rating: 4.9,
    reviewCount: 205,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 15,
    phone: '+91 98765 43211',
    location: 'Lajpat Nagar, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi', 'Punjabi'],
    skills: ['Deep Cleaning', 'Laundry', 'Cooking', 'Organization']
  },
  {
    id: '3',
    name: 'Ahmed Khan',
    category: 'plumber',
    categoryLabel: 'Plumber',
    bio: 'Master plumber with 12 years of expertise. Handles everything from minor leak repairs to complete bathroom renovations.',
    yearsExperience: 12,
    rating: 4.7,
    reviewCount: 89,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 25,
    phone: '+91 98765 43212',
    location: 'Saket, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi', 'Urdu', 'English'],
    skills: ['Leak Repair', 'Pipe Installation', 'Bathroom Renovation', 'Water Heater']
  },
  {
    id: '4',
    name: 'Priya Patel',
    category: 'tutor',
    categoryLabel: 'Tutor',
    bio: 'Mathematics and Science tutor with 4 years of tutoring experience. B.Tech from IIT Delhi. Helped 50+ students improve their grades significantly.',
    yearsExperience: 4,
    rating: 5.0,
    reviewCount: 45,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 30,
    phone: '+91 98765 43213',
    location: 'Vasant Kunj, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi', 'English', 'Gujarati'],
    skills: ['Mathematics', 'Physics', 'Chemistry', 'JEE Prep']
  },
  {
    id: '5',
    name: 'Deepak Verma',
    category: 'cook',
    categoryLabel: 'Cook',
    bio: 'Professional chef with 7 years of experience in North Indian and Continental cuisine. Previously worked at 5-star hotels.',
    yearsExperience: 7,
    rating: 4.6,
    reviewCount: 78,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 22,
    phone: '+91 98765 43214',
    location: 'Dwarka, Delhi',
    availability: 'busy',
    verified: true,
    languages: ['Hindi', 'English'],
    skills: ['North Indian', 'Continental', 'Chinese', 'Baking']
  },
  {
    id: '6',
    name: 'Meera Reddy',
    category: 'maid',
    categoryLabel: 'Maid',
    bio: 'Dedicated cleaning professional with 6 years of experience. Specializes in eco-friendly cleaning solutions and allergen-free environments.',
    yearsExperience: 6,
    rating: 4.5,
    reviewCount: 134,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 12,
    phone: '+91 98765 43215',
    location: 'Nehru Place, Delhi',
    availability: 'available',
    verified: false,
    languages: ['Hindi', 'Telugu'],
    skills: ['Eco-Cleaning', 'Mopping', 'Dusting', 'Window Cleaning']
  },
  {
    id: '7',
    name: 'Vikram Singh',
    category: 'plumber',
    categoryLabel: 'Plumber',
    bio: 'Reliable plumber specializing in emergency repairs. Available 24/7 for urgent plumbing issues. Fast response time guaranteed.',
    yearsExperience: 9,
    rating: 4.4,
    reviewCount: 67,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 28,
    phone: '+91 98765 43216',
    location: 'Rohini, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi'],
    skills: ['Emergency Repair', 'Drain Cleaning', 'Gas Lines', 'Sewer']
  },
  {
    id: '8',
    name: 'Ananya Gupta',
    category: 'tutor',
    categoryLabel: 'Tutor',
    bio: 'English and Literature tutor with an M.A. from JNU. Specializes in IELTS, TOEFL preparation, and creative writing workshops.',
    yearsExperience: 3,
    rating: 4.9,
    reviewCount: 32,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 35,
    phone: '+91 98765 43217',
    location: 'South Extension, Delhi',
    availability: 'available',
    verified: true,
    languages: ['Hindi', 'English', 'French'],
    skills: ['IELTS', 'TOEFL', 'Creative Writing', 'Grammar']
  }
];

export const REVIEWS = [
  { id: 'r1', workerId: '1', userName: 'Amit Sharma', rating: 5, comment: 'Excellent work! Fixed all the wiring issues in my house within 2 hours. Very professional.', createdAt: '2024-03-15' },
  { id: 'r2', workerId: '1', userName: 'Neha Gupta', rating: 4, comment: 'Good work, arrived on time. Slightly expensive but worth it for the quality.', createdAt: '2024-02-20' },
  { id: 'r3', workerId: '2', userName: 'Ravi Kumar', rating: 5, comment: 'Sunita is amazing! Our house has never been this clean. She is very thorough and organized.', createdAt: '2024-03-10' },
  { id: 'r4', workerId: '2', userName: 'Pooja Mehta', rating: 5, comment: 'Very trustworthy and hardworking. She goes above and beyond every time.', createdAt: '2024-01-28' },
  { id: 'r5', workerId: '3', userName: 'Sanjay Puri', rating: 5, comment: 'Fixed a major leak that other plumbers could not handle. True expert.', createdAt: '2024-03-01' },
  { id: 'r6', workerId: '3', userName: 'Kavita Jain', rating: 4, comment: 'Good plumber, reasonable rates. Would recommend for basic plumbing work.', createdAt: '2024-02-14' },
  { id: 'r7', workerId: '4', userName: 'Ramesh Agarwal', rating: 5, comment: 'My son\'s math grades went from C to A+ in just 3 months! Priya is an exceptional tutor.', createdAt: '2024-03-18' },
  { id: 'r8', workerId: '5', userName: 'Deepika Roy', rating: 5, comment: 'The food Deepak prepares is restaurant quality. Our family dinners have become special thanks to him.', createdAt: '2024-02-25' },
];

export const BOOKINGS = [];

export const CATEGORIES = [
  { name: 'Maid', value: 'maid', icon: '🏠', color: '#10b981' },
  { name: 'Plumber', value: 'plumber', icon: '🔧', color: '#3b82f6' },
  { name: 'Electrician', value: 'electrician', icon: '⚡', color: '#f59e0b' },
  { name: 'Cook', value: 'cook', icon: '🍳', color: '#ef4444' },
  { name: 'Tutor', value: 'tutor', icon: '📚', color: '#8b5cf6' },
  { name: 'More', value: 'more', icon: '📋', color: '#6366f1' },
];

// $2b$10$kA76AjB4SMSSaUmaLx4si.Jk9Fp2D41tl.kw/YeWgYXleD1ceG9wm is bcrypt for "password123"
export const USERS = [
  {
    id: 'u1',
    name: 'Super Admin',
    email: 'admin@sahayak.in',
    phone: '9999999999',
    password: '$2b$10$kA76AjB4SMSSaUmaLx4si.Jk9Fp2D41tl.kw/YeWgYXleD1ceG9wm',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'u2',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '9876543210',
    password: '$2b$10$kA76AjB4SMSSaUmaLx4si.Jk9Fp2D41tl.kw/YeWgYXleD1ceG9wm',
    role: 'worker',
    workerId: '1',
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: 'u3',
    name: 'Rahul Verma',
    email: 'rahul@example.com',
    phone: '8888888888',
    password: '$2b$10$kA76AjB4SMSSaUmaLx4si.Jk9Fp2D41tl.kw/YeWgYXleD1ceG9wm',
    role: 'user',
    createdAt: '2024-02-15T00:00:00Z'
  }
];
