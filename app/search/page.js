// app/search/page.js
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  Search,
  Code2,
  Database,
  Cloud,
  Lock,
  Zap,
  Smartphone,
  Globe,
  Server,
  GitBranch,
  Box,
  Cpu,
  Shield,
  Rocket,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  MessageCircle,
  Headphones,
  Calendar,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Figma,
  Chrome,
  Terminal,
  Package,
  CloudLightning,
  Layers,
  PenTool,
  Eye,
  Settings,
  Wrench,
  FileCode,
  Braces,
  Code,
  Command,
  Cpu as CpuIcon,
  HardDrive,
  Network,
  Share2,
  Layers as StackIcon,
  BookOpen,
  TrendingUp as TrendingIcon,
  ShoppingCart,
  BarChart,
  Briefcase,
  Target,
  ZapOff,
  Wind,
  Sun,
  Moon,
  Star as StarIcon,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Info,
  AlertCircle,
  Loader2,
  X,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  Clock as ClockIcon,
  DollarSign,
  Users as UsersIcon,
  Bookmark,
  Share2 as ShareIcon,
  Download,
  Copy,
  ExternalLink,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Home,
  Menu
} from 'lucide-react'
import Image from 'next/image'

// Comprehensive technology database
const technologiesDatabase = [
  // Frontend Frameworks & Libraries
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend Development',
    subCategory: 'JavaScript Library',
    icon: '⚛️',
    description: 'A powerful JavaScript library for building user interfaces, developed and maintained by Meta. React allows developers to create large web applications that can change data, without reloading the page.',
    longDescription: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components". React uses a virtual DOM to optimize rendering and provides excellent performance even for complex applications.',
    level: 'Expert',
    experience: '5+ years',
    projects: 50,
    rating: 4.9,
    reviews: 1250,
    certifications: 12,
    company: 'Meta (Facebook)',
    releaseYear: 2013,
    latestVersion: '18.2.0',
    license: 'MIT',
    website: 'https://react.dev',
    github: 'https://github.com/facebook/react',
    docs: 'https://react.dev/docs',
    tutorials: 'https://react.dev/learn',
    features: [
      'Component-Based Architecture',
      'Virtual DOM for Performance',
      'JSX Syntax Extension',
      'Hooks for State Management',
      'Server-Side Rendering with Next.js',
      'Mobile Development with React Native',
      'Strong Community Support',
      'Rich Ecosystem of Libraries'
    ],
    pros: [
      'Reusable components save development time',
      'Excellent performance with virtual DOM',
      'Strong community and ecosystem',
      'SEO-friendly with server-side rendering',
      'Great developer tools'
    ],
    cons: [
      'Steep learning curve for beginners',
      'JSX can be confusing initially',
      'Frequent updates require constant learning',
      'Only covers the UI layer'
    ],
    useCases: [
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)',
      'E-commerce Platforms',
      'Social Media Applications',
      'Dashboard and Analytics Tools',
      'Content Management Systems'
    ],
    companies: ['Facebook', 'Instagram', 'Netflix', 'Airbnb', 'Uber', 'Twitter'],
    salary: {
      entry: '₹6-8 LPA',
      mid: '₹12-18 LPA',
      senior: '₹20-30 LPA'
    },
    learningTime: '3-6 months',
    difficulty: 'Intermediate',
    popularity: '#1 Most Used',
    marketShare: '40.5%',
    jobDemand: 'High',
    alternatives: ['Vue.js', 'Angular', 'Svelte', 'Preact'],
    relatedTools: ['Next.js', 'Redux', 'React Router', 'Material-UI', 'Gatsby'],
    certifications: [
      'Meta Front-End Developer Professional Certificate',
      'React Certification by Scrimba',
      'Advanced React by Meta'
    ],
    books: [
      'Learning React by Alex Banks',
      'React Up & Running by Stoyan Stefanov',
      'Fullstack React by Accomazzo'
    ],
    courses: [
      'The Complete React Developer Course (Udemy)',
      'React - The Complete Guide (Udemy)',
      'Epic React by Kent C. Dodds'
    ],
    interviewQuestions: [
      'What is the virtual DOM and how does it work?',
      'Explain the difference between props and state',
      'What are React hooks and why were they introduced?',
      'How do you optimize performance in React?',
      'Explain the component lifecycle methods'
    ],
    roadmap: [
      'Learn JavaScript fundamentals',
      'Understand ES6+ features',
      'Master React basics (components, props, state)',
      'Learn hooks (useState, useEffect, useContext)',
      'Explore state management (Redux, Context API)',
      'Learn routing with React Router',
      'Build projects and portfolio'
    ]
  },
  
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend Development',
    subCategory: 'React Framework',
    icon: '▲',
    description: 'The React Framework for Production - Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.',
    longDescription: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. It\'s a production-ready framework that allows developers to build fast and SEO-friendly applications with minimal configuration.',
    level: 'Expert',
    experience: '4+ years',
    projects: 35,
    rating: 4.9,
    reviews: 850,
    certifications: 8,
    company: 'Vercel',
    releaseYear: 2016,
    latestVersion: '14.0.4',
    license: 'MIT',
    website: 'https://nextjs.org',
    github: 'https://github.com/vercel/next.js',
    docs: 'https://nextjs.org/docs',
    tutorials: 'https://nextjs.org/learn',
    features: [
      'Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'Incremental Static Regeneration (ISR)',
      'API Routes',
      'File-based Routing',
      'Automatic Code Splitting',
      'Built-in CSS and Sass Support',
      'Fast Refresh'
    ],
    pros: [
      'Excellent SEO capabilities',
      'Zero configuration setup',
      'Automatic code splitting',
      'Built-in image optimization',
      'Great developer experience'
    ],
    cons: [
      'Can be overkill for simple SPAs',
      'Learning curve for server concepts',
      'Vercel lock-in for some features',
      'Build times can be long for large sites'
    ],
    useCases: [
      'E-commerce Websites',
      'Blogs and Content Sites',
      'Marketing Pages',
      'SaaS Applications',
      'Portfolio Websites',
      'Documentation Sites'
    ],
    companies: ['Vercel', 'TikTok', 'Twitch', 'Hulu', 'Netflix', 'Notion'],
    salary: {
      entry: '₹7-10 LPA',
      mid: '₹15-22 LPA',
      senior: '₹25-35 LPA'
    },
    learningTime: '2-4 months',
    difficulty: 'Intermediate',
    popularity: 'Fastest Growing',
    marketShare: '28.3%',
    jobDemand: 'Very High',
    alternatives: ['Gatsby', 'Nuxt.js', 'Remix', 'Astro'],
    relatedTools: ['React', 'Vercel', 'Tailwind CSS', 'TypeScript', 'Prisma'],
    certifications: [
      'Vercel Certified Professional',
      'Next.js Developer Certification',
      'Advanced Next.js by Vercel'
    ],
    books: [
      'The Next.js Handbook by Flavio Copes',
      'Real-World Next.js by Michele Riva',
      'Fullstack Next.js by Ryan Chenkie'
    ],
    courses: [
      'Next.js 14 & React - The Complete Guide (Udemy)',
      'Mastering Next.js (Udemy)',
      'Next.js for Professionals (Pluralsight)'
    ],
    interviewQuestions: [
      'What is the difference between SSR and SSG?',
      'How does Next.js handle routing?',
      'Explain ISR and its benefits',
      'How do you optimize images in Next.js?',
      'What are API routes and when to use them?'
    ],
    roadmap: [
      'Master React fundamentals',
      'Understand SSR vs SSG concepts',
      'Learn Next.js routing system',
      'Explore data fetching methods',
      'Implement authentication',
      'Deploy to Vercel',
      'Optimize for production'
    ]
  },

  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend Development',
    subCategory: 'JavaScript Framework',
    icon: '🟢',
    description: 'The Progressive JavaScript Framework - Vue.js is designed from the ground up to be incrementally adoptable. The core library focuses on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.',
    longDescription: 'Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, making it easy to pick up and integrate with other libraries or existing projects.',
    level: 'Advanced',
    experience: '3+ years',
    projects: 20,
    rating: 4.8,
    reviews: 650,
    certifications: 5,
    company: 'Evan You',
    releaseYear: 2014,
    latestVersion: '3.3.8',
    license: 'MIT',
    website: 'https://vuejs.org',
    github: 'https://github.com/vuejs/vue',
    docs: 'https://vuejs.org/guide',
    tutorials: 'https://vuejs.org/tutorial',
    features: [
      'Progressive Framework',
      'Virtual DOM',
      'Component-Based',
      'Reactive Data Binding',
      'Composition API',
      'Single-File Components',
      'Built-in Transitions',
      'DevTools Integration'
    ],
    pros: [
      'Gentle learning curve',
      'Excellent documentation',
      'Flexible and adaptable',
      'Great performance',
      'Strong ecosystem'
    ],
    cons: [
      'Smaller community than React',
      'Less job opportunities',
      'Plugin quality varies',
      'Chinese documentation sometimes ahead'
    ],
    useCases: [
      'Single Page Applications',
      'Progressive Web Apps',
      'Interactive Web Interfaces',
      'Prototyping',
      'Enterprise Applications'
    ],
    companies: ['Alibaba', 'Xiaomi', 'Baidu', 'GitLab', 'Adobe', 'NASA'],
    salary: {
      entry: '₹5-8 LPA',
      mid: '₹10-16 LPA',
      senior: '₹18-25 LPA'
    },
    learningTime: '2-3 months',
    difficulty: 'Beginner to Intermediate',
    popularity: '#2 Most Used',
    marketShare: '18.7%',
    jobDemand: 'Moderate',
    alternatives: ['React', 'Angular', 'Svelte', 'Alpine.js'],
    relatedTools: ['Vuex', 'Pinia', 'Vue Router', 'Nuxt.js', 'Vite'],
    certifications: [
      'Vue.js Certified Developer',
      'Vue School Certification',
      'Advanced Vue.js Developer'
    ],
    books: [
      'The Majesty of Vue.js by Alex Kyriakidis',
      'Vue.js Up & Running by Callum Macrae',
      'Fullstack Vue by Hassan Djirdeh'
    ],
    courses: [
      'Vue - The Complete Guide (Udemy)',
      'Vue.js Essentials (Vue School)',
      'Mastering Vue 3 (Udemy)'
    ],
    interviewQuestions: [
      'Explain Vue\'s reactivity system',
      'What is the composition API?',
      'How does v-bind differ from v-model?',
      'Explain Vue lifecycle hooks',
      'When to use computed properties vs methods?'
    ],
    roadmap: [
      'Learn HTML, CSS, JavaScript',
      'Understand Vue basics',
      'Master directives and templates',
      'Learn component communication',
      'Explore state management',
      'Build projects'
    ]
  },

  // Backend Technologies
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend Development',
    subCategory: 'JavaScript Runtime',
    icon: '🟢',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.',
    longDescription: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser.',
    level: 'Expert',
    experience: '5+ years',
    projects: 55,
    rating: 4.9,
    reviews: 1100,
    certifications: 14,
    company: 'OpenJS Foundation',
    releaseYear: 2009,
    latestVersion: '20.10.0',
    license: 'MIT',
    website: 'https://nodejs.org',
    github: 'https://github.com/nodejs/node',
    docs: 'https://nodejs.org/docs',
    tutorials: 'https://nodejs.dev/learn',
    features: [
      'Asynchronous and Event-Driven',
      'Non-Blocking I/O',
      'Single-Threaded with Event Loop',
      'NPM (Node Package Manager)',
      'Cross-Platform',
      'Large Ecosystem',
      'Built-in HTTP Server',
      'Stream Support'
    ],
    pros: [
      'Fast execution with V8 engine',
      'Huge package ecosystem',
      'JavaScript everywhere',
      'Great for real-time apps',
      'Strong community'
    ],
    cons: [
      'Not suitable for CPU-intensive tasks',
      'Callback hell (though promises help)',
      'Unstable API at times',
      'Debugging can be challenging'
    ],
    useCases: [
      'REST APIs',
      'Real-time Applications',
      'Microservices',
      'Serverless Functions',
      'CLI Tools',
      'IoT Applications'
    ],
    companies: ['Netflix', 'LinkedIn', 'Uber', 'PayPal', 'eBay', 'Walmart'],
    salary: {
      entry: '₹6-9 LPA',
      mid: '₹12-20 LPA',
      senior: '₹22-32 LPA'
    },
    learningTime: '3-4 months',
    difficulty: 'Intermediate',
    popularity: '#1 Backend',
    marketShare: '42.5%',
    jobDemand: 'Very High',
    alternatives: ['Deno', 'Bun', 'Python', 'Java', 'Go'],
    relatedTools: ['Express.js', 'Nest.js', 'Socket.io', 'PM2', 'Mongoose'],
    certifications: [
      'OpenJS Node.js Application Developer',
      'OpenJS Node.js Services Developer',
      'Node.js Certified Developer'
    ],
    books: [
      'Node.js Design Patterns by Mario Casciaro',
      'Node.js in Action by Alex Young',
      'Practical Node.js by Azat Mardan'
    ],
    courses: [
      'The Complete Node.js Developer Course (Udemy)',
      'Node.js - The Complete Guide (Udemy)',
      'Advanced Node.js (Pluralsight)'
    ],
    interviewQuestions: [
      'Explain the event loop in Node.js',
      'What is non-blocking I/O?',
      'How do you handle errors in Node.js?',
      'Explain streams and their types',
      'What is the difference between process.nextTick and setImmediate?'
    ],
    roadmap: [
      'Learn JavaScript fundamentals',
      'Understand asynchronous programming',
      'Master Node.js core modules',
      'Learn Express.js framework',
      'Work with databases',
      'Build REST APIs',
      'Learn testing and debugging'
    ]
  },

  {
    id: 'python',
    name: 'Python',
    category: 'Backend Development',
    subCategory: 'Programming Language',
    icon: '🐍',
    description: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.',
    longDescription: 'Python is a versatile programming language that lets you work quickly and integrate systems more effectively. It supports multiple programming paradigms, including structured, object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.',
    level: 'Expert',
    experience: '5+ years',
    projects: 45,
    rating: 5.0,
    reviews: 1500,
    certifications: 12,
    company: 'Python Software Foundation',
    releaseYear: 1991,
    latestVersion: '3.12.0',
    license: 'Python Software Foundation License',
    website: 'https://python.org',
    github: 'https://github.com/python/cpython',
    docs: 'https://docs.python.org',
    tutorials: 'https://docs.python.org/tutorial',
    features: [
      'Easy to Learn and Read',
      'Interpreted Language',
      'Dynamically Typed',
      'Large Standard Library',
      'Cross-Platform',
      'Extensive Third-Party Modules',
      'Object-Oriented',
      'Functional Programming Support'
    ],
    pros: [
      'Beginner-friendly syntax',
      'Huge ecosystem and libraries',
      'Versatile use cases',
      'Strong community support',
      'Excellent for prototyping'
    ],
    cons: [
      'Slower than compiled languages',
      'Memory intensive',
      'GIL limits threading',
      'Not ideal for mobile dev'
    ],
    useCases: [
      'Web Development (Django/Flask)',
      'Data Science & Analytics',
      'Machine Learning & AI',
      'Automation & Scripting',
      'Scientific Computing',
      'Education'
    ],
    companies: ['Google', 'NASA', 'Netflix', 'Spotify', 'Dropbox', 'Instagram'],
    salary: {
      entry: '₹5-8 LPA',
      mid: '₹10-18 LPA',
      senior: '₹20-30 LPA'
    },
    learningTime: '2-3 months',
    difficulty: 'Beginner',
    popularity: '#1 Language',
    marketShare: '48.2%',
    jobDemand: 'Very High',
    alternatives: ['Ruby', 'Java', 'JavaScript', 'Go', 'Rust'],
    relatedTools: ['Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy', 'TensorFlow'],
    certifications: [
      'PCAP - Certified Associate in Python Programming',
      'PCPP - Certified Professional in Python Programming',
      'Python Institute Certifications'
    ],
    books: [
      'Python Crash Course by Eric Matthes',
      'Automate the Boring Stuff with Python',
      'Fluent Python by Luciano Ramalho'
    ],
    courses: [
      'Complete Python Bootcamp (Udemy)',
      'Python for Everybody (Coursera)',
      'Core Python (Pluralsight)'
    ],
    interviewQuestions: [
      'Explain Python\'s memory management',
      'What are decorators and how to use them?',
      'Difference between list and tuple',
      'Explain GIL in Python',
      'What are generators and yield?'
    ],
    roadmap: [
      'Learn Python basics',
      'Understand OOP concepts',
      'Master data structures',
      'Learn standard library',
      'Choose a specialization',
      'Build projects',
      'Learn frameworks'
    ]
  },

  // Cloud Platforms
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud & DevOps',
    subCategory: 'Cloud Platform',
    icon: '☁️',
    description: 'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.',
    longDescription: 'AWS provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide various services related to networking, compute, storage, middleware, IoT and other processing capacity, as well as software tools via AWS server farms.',
    level: 'Advanced',
    experience: '4+ years',
    projects: 35,
    rating: 4.9,
    reviews: 980,
    certifications: 9,
    company: 'Amazon',
    releaseYear: 2006,
    latestVersion: 'N/A',
    license: 'Proprietary',
    website: 'https://aws.amazon.com',
    github: 'https://github.com/aws',
    docs: 'https://docs.aws.amazon.com',
    tutorials: 'https://aws.amazon.com/training',
    features: [
      'Compute (EC2, Lambda)',
      'Storage (S3, EBS)',
      'Databases (RDS, DynamoDB)',
      'Networking (VPC, Route 53)',
      'Machine Learning (SageMaker)',
      'Analytics (Redshift, EMR)',
      'Security (IAM, KMS)',
      'DevOps Tools'
    ],
    pros: [
      'Market leader with most services',
      'Global infrastructure',
      'Enterprise-grade security',
      'Pay-as-you-go pricing',
      'Strong ecosystem'
    ],
    cons: [
      'Complex pricing structure',
      'Steep learning curve',
      'Documentation can be overwhelming',
      'Some services are expensive'
    ],
    useCases: [
      'Web Hosting',
      'Big Data Analytics',
      'Backup & Storage',
      'Disaster Recovery',
      'Enterprise Applications',
      'IoT Applications'
    ],
    companies: ['Netflix', 'Airbnb', 'Uber', 'Salesforce', 'Capital One', 'NASA'],
    salary: {
      entry: '₹8-12 LPA',
      mid: '₹15-25 LPA',
      senior: '₹28-40 LPA'
    },
    learningTime: '4-6 months',
    difficulty: 'Advanced',
    popularity: '#1 Cloud Provider',
    marketShare: '32%',
    jobDemand: 'Very High',
    alternatives: ['Azure', 'Google Cloud', 'DigitalOcean', 'Linode'],
    relatedTools: ['Terraform', 'CloudFormation', 'Docker', 'Kubernetes', 'Jenkins'],
    certifications: [
      'AWS Certified Solutions Architect',
      'AWS Certified Developer',
      'AWS Certified DevOps Engineer',
      'AWS Certified SysOps Administrator'
    ],
    books: [
      'AWS in Action by Andreas Wittig',
      'AWS Certified Solutions Architect Study Guide',
      'The AWS Book by Kevin Kelly'
    ],
    courses: [
      'AWS Certified Solutions Architect (Udemy)',
      'AWS Essentials (Coursera)',
      'Advanced AWS (Pluralsight)'
    ],
    interviewQuestions: [
      'Explain VPC and its components',
      'What is the difference between S3 and EBS?',
      'How do you handle auto-scaling?',
      'Explain IAM roles and policies',
      'What is the difference between EC2 and Lambda?'
    ],
    roadmap: [
      'Learn cloud fundamentals',
      'Understand core services',
      'Get hands-on with free tier',
      'Learn security best practices',
      'Study for certification',
      'Build projects',
      'Master advanced services'
    ]
  },

  // Mobile Development
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile Development',
    subCategory: 'Cross-Platform Framework',
    icon: '📱',
    description: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or create a whole new app from scratch.',
    longDescription: 'React Native is an open-source mobile application framework created by Meta. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. It uses the same design as React, letting you compose a rich mobile UI from declarative components.',
    level: 'Expert',
    experience: '4+ years',
    projects: 30,
    rating: 4.9,
    reviews: 720,
    certifications: 8,
    company: 'Meta (Facebook)',
    releaseYear: 2015,
    latestVersion: '0.72.6',
    license: 'MIT',
    website: 'https://reactnative.dev',
    github: 'https://github.com/facebook/react-native',
    docs: 'https://reactnative.dev/docs',
    tutorials: 'https://reactnative.dev/docs/tutorial',
    features: [
      'Cross-Platform Development',
      'Hot Reloading',
      'Native Components',
      'Large Community',
      'Reusable Code',
      'Third-Party Plugins',
      'Performance Near Native',
      'Declarative UI'
    ],
    pros: [
      'Code once, use on both platforms',
      'Fast development with hot reload',
      'Large ecosystem',
      'Strong community support',
      'Good performance'
    ],
    cons: [
      'Performance issues for complex apps',
      'Debugging can be tricky',
      'Native modules require native knowledge',
      'Larger app size'
    ],
    useCases: [
      'Mobile Applications',
      'MVP Development',
      'E-commerce Apps',
      'Social Media Apps',
      'Business Applications',
      'Cross-Platform Solutions'
    ],
    companies: ['Instagram', 'Facebook', 'Shopify', 'Walmart', 'Uber', 'Tesla'],
    salary: {
      entry: '₹6-10 LPA',
      mid: '₹12-20 LPA',
      senior: '₹22-32 LPA'
    },
    learningTime: '3-5 months',
    difficulty: 'Intermediate',
    popularity: '#1 Cross-Platform',
    marketShare: '38%',
    jobDemand: 'High',
    alternatives: ['Flutter', 'Ionic', 'Xamarin', 'NativeScript'],
    relatedTools: ['Expo', 'React Navigation', 'Redux', 'TypeScript', 'NativeBase'],
    certifications: [
      'Meta React Native Specialization',
      'React Native Certified Developer',
      'Advanced React Native by Meta'
    ],
    books: [
      'React Native in Action by Nader Dabit',
      'Fullstack React Native by Accomazzo',
      'React Native Cookbook by Ward'
    ],
    courses: [
      'The Complete React Native Course (Udemy)',
      'React Native - The Practical Guide (Udemy)',
      'Meta React Native Specialization (Coursera)'
    ],
    interviewQuestions: [
      'How does React Native differ from React?',
      'Explain the bridge in React Native',
      'How do you handle navigation?',
      'What is the difference between React Native and Flutter?',
      'How do you optimize performance?'
    ],
    roadmap: [
      'Learn React fundamentals',
      'Understand mobile development basics',
      'Set up React Native environment',
      'Master components and APIs',
      'Learn navigation',
      'Handle state management',
      'Build and deploy apps'
    ]
  },

  // Database Technologies
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database Technologies',
    subCategory: 'NoSQL Database',
    icon: '🍃',
    description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    longDescription: 'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.',
    level: 'Expert',
    experience: '5+ years',
    projects: 50,
    rating: 4.9,
    reviews: 890,
    certifications: 11,
    company: 'MongoDB Inc.',
    releaseYear: 2009,
    latestVersion: '7.0',
    license: 'Server Side Public License',
    website: 'https://mongodb.com',
    github: 'https://github.com/mongodb/mongo',
    docs: 'https://docs.mongodb.com',
    tutorials: 'https://university.mongodb.com',
    features: [
      'Document-Oriented',
      'Flexible Schema',
      'High Scalability',
      'Indexing',
      'Aggregation Pipeline',
      'Replication',
      'Sharding',
      'ACID Transactions'
    ],
    pros: [
      'Flexible schema design',
      'Easy to scale horizontally',
      'Fast development cycles',
      'Rich query language',
      'Great for hierarchical data'
    ],
    cons: [
      'Limited joins',
      'Memory intensive',
      'No transactions initially (added in v4.0)',
      'Document size limit (16MB)'
    ],
    useCases: [
      'Content Management',
      'Real-Time Applications',
      'Mobile Applications',
      'Catalogs',
      'User Profiles',
      'IoT Data Storage'
    ],
    companies: ['Uber', 'eBay', 'Google', 'SAP', 'Adobe', 'Coinbase'],
    salary: {
      entry: '₹5-8 LPA',
      mid: '₹10-16 LPA',
      senior: '₹18-26 LPA'
    },
    learningTime: '1-2 months',
    difficulty: 'Beginner to Intermediate',
    popularity: '#1 NoSQL',
    marketShare: '24.5%',
    jobDemand: 'High',
    alternatives: ['Cassandra', 'CouchDB', 'DynamoDB', 'Firebase'],
    relatedTools: ['Mongoose', 'Compass', 'Atlas', 'Studio 3T', 'Robo 3T'],
    certifications: [
      'MongoDB Certified Developer',
      'MongoDB Certified DBA',
      'MongoDB University Certifications'
    ],
    books: [
      'MongoDB: The Definitive Guide',
      'MongoDB in Action',
      'Practical MongoDB'
    ],
    courses: [
      'MongoDB University Courses',
      'The Complete MongoDB Course (Udemy)',
      'MongoDB Essentials (Pluralsight)'
    ],
    interviewQuestions: [
      'What is MongoDB and its features?',
      'Explain document structure',
      'What are indexes and how do they work?',
      'Explain aggregation pipeline',
      'When to use MongoDB vs SQL?'
    ],
    roadmap: [
      'Understand NoSQL concepts',
      'Learn CRUD operations',
      'Master indexing strategies',
      'Learn aggregation framework',
      'Understand replication and sharding',
      'Study performance optimization',
      'Get certified'
    ]
  },

  // DevOps Tools
  {
    id: 'docker',
    name: 'Docker',
    category: 'Cloud & DevOps',
    subCategory: 'Containerization',
    icon: '🐳',
    description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files.',
    longDescription: 'Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.',
    level: 'Expert',
    experience: '4+ years',
    projects: 40,
    rating: 4.9,
    reviews: 760,
    certifications: 10,
    company: 'Docker Inc.',
    releaseYear: 2013,
    latestVersion: '24.0',
    license: 'Apache License 2.0',
    website: 'https://docker.com',
    github: 'https://github.com/docker',
    docs: 'https://docs.docker.com',
    tutorials: 'https://docs.docker.com/get-started',
    features: [
      'Containerization',
      'Image Management',
      'Docker Hub Registry',
      'Docker Compose',
      'Volume Management',
      'Network Configuration',
      'Multi-Stage Builds',
      'Swarm Orchestration'
    ],
    pros: [
      'Consistent environments',
      'Lightweight vs VMs',
      'Fast deployment',
      'Version control for environments',
      'Microservices ready'
    ],
    cons: [
      'Steep learning curve',
      'Security concerns',
      'Complex networking',
      'Data persistence challenges'
    ],
    useCases: [
      'Microservices',
      'DevOps Automation',
      'CI/CD Pipelines',
      'Development Environments',
      'Application Isolation',
      'Cloud Migration'
    ],
    companies: ['Netflix', 'Twitter', 'Uber', 'Spotify', 'PayPal', 'eBay'],
    salary: {
      entry: '₹6-9 LPA',
      mid: '₹12-20 LPA',
      senior: '₹22-32 LPA'
    },
    learningTime: '1-2 months',
    difficulty: 'Intermediate',
    popularity: '#1 Container',
    marketShare: '82%',
    jobDemand: 'Very High',
    alternatives: ['Podman', 'LXC', 'containerd', 'CRI-O'],
    relatedTools: ['Kubernetes', 'Docker Compose', 'Portainer', 'Harbor', 'Rancher'],
    certifications: [
      'Docker Certified Associate',
      'Docker Certified Professional',
      'Docker Security Certification'
    ],
    books: [
      'Docker Deep Dive by Nigel Poulton',
      'The Docker Book by James Turnbull',
      'Kubernetes and Docker by McKendrick'
    ],
    courses: [
      'Docker Mastery (Udemy)',
      'Docker for Beginners (Pluralsight)',
      'Advanced Docker (LinkedIn Learning)'
    ],
    interviewQuestions: [
      'What is containerization?',
      'Explain Docker architecture',
      'Difference between CMD and ENTRYPOINT',
      'How do you manage data in Docker?',
      'Explain Docker networking modes'
    ],
    roadmap: [
      'Understand container concepts',
      'Install Docker',
      'Learn basic commands',
      'Create Dockerfiles',
      'Use Docker Compose',
      'Learn image optimization',
      'Master Docker Swarm'
    ]
  }
]

// Helper function to get icon component
const getIconComponent = (iconName) => {
  const iconMap = {
    '⚛️': '⚛️',
    '▲': '▲',
    '🟢': '🟢',
    '🐍': '🐍',
    '☁️': '☁️',
    '📱': '📱',
    '🍃': '🍃',
    '🐳': '🐳',
    '🔷': '🔷',
    '🌊': '🌊',
    '🔄': '🔄',
    '🎨': '🎨',
    '🅱️': '🅱️',
    '💅': '💅',
    '📦': '📦',
    '🐘': '🐘',
    '🎸': '🎸',
    '⚡': '⚡',
    '🐙': '🐙',
    '🤖': '🤖',
    '🧠': '🧠',
    '🔥': '🔥',
    '🔍': '🔍'
  }
  return iconMap[iconName] || '💻'
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTech, setSelectedTech] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [sortBy, setSortBy] = useState('relevance') // relevance, rating, popularity
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterLevel, setFilterLevel] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState([])
  const [popularSearches, setPopularSearches] = useState([
    'React.js', 'Python', 'Node.js', 'AWS', 'Docker', 'MongoDB'
  ])

  // Load search history from localStorage
  useEffect(() => {
    const history = localStorage.getItem('techSearchHistory')
    if (history) {
      setSearchHistory(JSON.parse(history))
    }
  }, [])

  // Save search to history
  const saveToHistory = (query) => {
    if (!query.trim()) return
    const newHistory = [query, ...searchHistory.filter(h => h !== query)].slice(0, 10)
    setSearchHistory(newHistory)
    localStorage.setItem('techSearchHistory', JSON.stringify(newHistory))
  }

  // Search function
  const performSearch = useCallback((query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      const results = technologiesDatabase.filter(tech => {
        const searchTerm = query.toLowerCase()
        return (
          tech.name.toLowerCase().includes(searchTerm) ||
          tech.category.toLowerCase().includes(searchTerm) ||
          tech.subCategory.toLowerCase().includes(searchTerm) ||
          tech.description.toLowerCase().includes(searchTerm) ||
          tech.features.some(f => f.toLowerCase().includes(searchTerm)) ||
          tech.useCases.some(u => u.toLowerCase().includes(searchTerm)) ||
          tech.companies.some(c => c.toLowerCase().includes(searchTerm))
        )
      })

      // Apply filters
      let filteredResults = [...results]
      
      if (filterCategory !== 'all') {
        filteredResults = filteredResults.filter(t => t.category === filterCategory)
      }
      
      if (filterLevel !== 'all') {
        filteredResults = filteredResults.filter(t => t.level === filterLevel)
      }

      // Apply sorting
      switch (sortBy) {
        case 'rating':
          filteredResults.sort((a, b) => b.rating - a.rating)
          break
        case 'popularity':
          filteredResults.sort((a, b) => b.reviews - a.reviews)
          break
        default:
          // relevance is default
          break
      }

      setSearchResults(filteredResults)
      setIsLoading(false)
      
      if (results.length > 0) {
        saveToHistory(query)
      }
    }, 500)
  }, [filterCategory, filterLevel, sortBy])

  // Get suggestions based on input
  const getSuggestions = (query) => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    const matches = technologiesDatabase
      .filter(tech => 
        tech.name.toLowerCase().includes(query.toLowerCase()) ||
        tech.category.toLowerCase().includes(query.toLowerCase())
      )
      .map(tech => tech.name)
      .slice(0, 5)

    setSuggestions(matches)
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    getSuggestions(value)
    setShowSuggestions(true)
  }

  // Handle search submit
  const handleSearch = (e) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      performSearch(searchQuery)
      setShowSuggestions(false)
      // Update URL with search query
      const url = new URL(window.location)
      url.searchParams.set('q', searchQuery)
      window.history.pushState({}, '', url)
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    performSearch(suggestion)
    setShowSuggestions(false)
  }

  // Handle tech selection
  const handleTechSelect = (tech) => {
    setSelectedTech(tech)
    // Scroll to details
    document.getElementById('tech-details')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setSelectedTech(null)
    const url = new URL(window.location)
    url.searchParams.delete('q')
    window.history.pushState({}, '', url)
  }

  // Get unique categories for filter
  const categories = ['all', ...new Set(technologiesDatabase.map(t => t.category))]
  const levels = ['all', ...new Set(technologiesDatabase.map(t => t.level))]

  // Copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // Could add toast notification here
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-blue-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-400">Search Technologies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Search{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Find detailed information about any technology - frameworks, languages, tools, and platforms
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search for any technology (e.g., React, Python, AWS)..."
                  className="w-full px-6 py-4 pl-14 pr-24 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg text-base sm:text-lg"
                  autoComplete="off"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  Search
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-6 py-3 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-gray-500 mr-2">Popular:</span>
              {popularSearches.map((term, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(term)
                    performSearch(term)
                  }}
                  className="px-3 py-1 bg-white rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {searchQuery && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {isLoading ? 'Searching...' : `${searchResults.length} Results`}
                </h2>
                {!isLoading && searchResults.length > 0 && (
                  <span className="text-sm text-gray-500">
                    for "{searchQuery}"
                  </span>
                )}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-3">
                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    showFilters ? 'bg-blue-50 border-blue-300 text-blue-600' : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filters</span>
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="rating">Sort by: Rating</option>
                  <option value="popularity">Sort by: Popularity</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filter Results</h3>
                  <button
                    onClick={() => {
                      setFilterCategory('all')
                      setFilterLevel('all')
                      performSearch(searchQuery)
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear Filters
                  </button>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={filterCategory}
                      onChange={(e) => {
                        setFilterCategory(e.target.value)
                        performSearch(searchQuery)
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat === 'all' ? 'All Categories' : cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expertise Level
                    </label>
                    <select
                      value={filterLevel}
                      onChange={(e) => {
                        setFilterLevel(e.target.value)
                        performSearch(searchQuery)
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {levels.map(level => (
                        <option key={level} value={level}>
                          {level === 'all' ? 'All Levels' : level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <p className="text-gray-600">Searching technologies...</p>
              </div>
            )}

            {/* No Results */}
            {!isLoading && searchResults.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">No technologies found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any technologies matching "{searchQuery}"
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">Suggestions:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => {
                        setSearchQuery('React.js')
                        performSearch('React.js')
                      }}
                      className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Try React.js
                    </button>
                    <button
                      onClick={() => {
                        setSearchQuery('Python')
                        performSearch('Python')
                      }}
                      className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Try Python
                    </button>
                    <button
                      onClick={() => {
                        setSearchQuery('Node.js')
                        performSearch('Node.js')
                      }}
                      className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Try Node.js
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Results Grid/List */}
            {!isLoading && searchResults.length > 0 && (
              <div className={viewMode === 'grid' 
                ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
                : 'space-y-4'
              }>
                {searchResults.map((tech, index) => (
                  <div
                    key={tech.id}
                    onClick={() => handleTechSelect(tech)}
                    className={`cursor-pointer transition-all ${
                      viewMode === 'grid'
                        ? 'bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100'
                        : 'bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 flex items-start gap-4'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-4xl">{tech.icon}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            tech.level === 'Expert' ? 'bg-green-100 text-green-700' :
                            tech.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {tech.level}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tech.description}</p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tech.category}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tech.subCategory}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-semibold">{tech.rating}</span>
                            <span className="text-gray-400 ml-1">({tech.reviews})</span>
                          </div>
                          <span className="text-gray-600">{tech.projects}+ projects</span>
                        </div>
                      </>
                    ) : (
                      // List View
                      <>
                        <span className="text-3xl flex-shrink-0">{tech.icon}</span>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-bold">{tech.name}</h3>
                              <p className="text-sm text-gray-600">{tech.category} • {tech.subCategory}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              tech.level === 'Expert' ? 'bg-green-100 text-green-700' :
                              tech.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {tech.level}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{tech.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="ml-1 font-semibold">{tech.rating}</span>
                            </div>
                            <span>{tech.projects}+ projects</span>
                            <span>{tech.experience} experience</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Search History Section */}
      {!searchQuery && searchHistory.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-500" />
                  Recent Searches
                </h2>
                <button
                  onClick={() => {
                    setSearchHistory([])
                    localStorage.removeItem('techSearchHistory')
                  }}
                  className="text-sm text-gray-500 hover:text-red-600"
                >
                  Clear History
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(term)
                      performSearch(term)
                    }}
                    className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Details Section */}
      {selectedTech && (
        <section id="tech-details" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => setSelectedTech(null)}
                className="flex items-center text-gray-600 hover:text-blue-600 mb-6 group"
              >
                <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to results
              </button>

              {/* Technology Header */}
              <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <span className="text-5xl">{selectedTech.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedTech.name}</h2>
                      <p className="text-gray-600">{selectedTech.category} • {selectedTech.subCategory}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedTech.level === 'Expert' ? 'bg-green-100 text-green-700' :
                      selectedTech.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedTech.level}
                    </span>
                    <button
                      onClick={() => copyToClipboard(selectedTech.name)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Copy name"
                    >
                      <Copy className="w-5 h-5 text-gray-500" />
                    </button>
                    <button
                      onClick={() => window.open(selectedTech.website, '_blank')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Visit website"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-bold">{selectedTech.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({selectedTech.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Projects</div>
                    <div className="font-bold">{selectedTech.projects}+</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Experience</div>
                    <div className="font-bold">{selectedTech.experience}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600">Job Demand</div>
                    <div className="font-bold text-green-600">{selectedTech.jobDemand}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{selectedTech.longDescription}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedTech.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Pros</h3>
                    <ul className="space-y-2">
                      {selectedTech.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <ThumbsUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-red-600">Cons</h3>
                    <ul className="space-y-2">
                      {selectedTech.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <ThumbsDown className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Common Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.useCases.map((useCase, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Companies Using */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Companies Using This Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.companies.map((company, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Release Year</div>
                    <div className="font-semibold">{selectedTech.releaseYear}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Latest Version</div>
                    <div className="font-semibold">{selectedTech.latestVersion}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">License</div>
                    <div className="font-semibold">{selectedTech.license}</div>
                  </div>
                </div>

                {/* Salary Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Salary Range in India</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-green-600 mb-1">Entry Level</div>
                      <div className="font-bold text-green-700">{selectedTech.salary.entry}</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-blue-600 mb-1">Mid Level</div>
                      <div className="font-bold text-blue-700">{selectedTech.salary.mid}</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-purple-600 mb-1">Senior Level</div>
                      <div className="font-bold text-purple-700">{selectedTech.salary.senior}</div>
                    </div>
                  </div>
                </div>

                {/* Learning Resources */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Recommended Books</h3>
                    <ul className="space-y-2">
                      {selectedTech.books.map((book, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpen className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
                    <ul className="space-y-2">
                      {selectedTech.courses.map((course, index) => (
                        <li key={index} className="flex items-start">
                          <Bookmark className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.certifications.map((cert, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interview Questions */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Common Interview Questions</h3>
                  <ul className="space-y-2">
                    {selectedTech.interviewQuestions.map((question, index) => (
                      <li key={index} className="text-sm bg-gray-50 p-3 rounded-lg">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Roadmap */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Learning Roadmap</h3>
                  <div className="space-y-2">
                    {selectedTech.roadmap.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t">
                  <a
                    href={selectedTech.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Official Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href={selectedTech.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                  >
                    Documentation
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href={selectedTech.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Related Technologies */}
              {selectedTech.alternatives && (
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Alternative Technologies</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedTech.alternatives.map((alt, index) => {
                      const altTech = technologiesDatabase.find(t => t.name === alt)
                      return altTech ? (
                        <button
                          key={index}
                          onClick={() => handleTechSelect(altTech)}
                          className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group"
                        >
                          <span className="text-3xl mr-3">{altTech.icon}</span>
                          <div className="text-left">
                            <h4 className="font-semibold group-hover:text-blue-600">{altTech.name}</h4>
                            <p className="text-sm text-gray-600">{altTech.category}</p>
                          </div>
                        </button>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* No Search State - Show Popular Technologies */}
      {!searchQuery && !selectedTech && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Popular Technologies</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {technologiesDatabase.slice(0, 6).map((tech, index) => (
                  <button
                    key={tech.id}
                    onClick={() => {
                      setSearchQuery(tech.name)
                      performSearch(tech.name)
                    }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border border-gray-100"
                  >
                    <span className="text-4xl mb-3 block">{tech.icon}</span>
                    <h3 className="font-bold mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{tech.category}</p>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{tech.rating}</span>
                      <span className="text-gray-400 ml-2">({tech.reviews} reviews)</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Technology?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert advice from our technical team. Free 30-minute consultation!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-7027944324
            </a>
            
            <a
              href="https://wa.me/917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}