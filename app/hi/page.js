// app/hi/page.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
 
import {
  Heart,
  MessageCircle,
  Handshake,
  Users,
  Star,
  Sparkles,
  Coffee,
  Smile,
  ThumbsUp,
  Gift,
  Rocket,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Calendar,
  CheckCircle,
  Award,
  Zap,
  Globe,
  Code,
  Smartphone,
  Cloud,
  Cpu,
  Briefcase,
  Target,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MessageSquare,
  UserPlus,
  UsersRound,
  PartyPopper,
  Crown,
  Gem,
  Diamond,
  Medal,
  Trophy,
  Coffee as CoffeeIcon,
  Pizza,
  Beer,
  Music,
  Camera,
  Video,
  Headphones,
  Mic,
  BookOpen,
  PenTool,
  Palette,
  HeartHandshake,
  HandHeart,
  HeartPulse,
  Sparkle,
  Stars,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudSun,
  CloudMoon,
  Wind,
  Leaf,
  Flower,
  TreePine,
 
  Waves,
  Sunset as SunsetIcon,
  Sunrise as SunriseIcon,
  Compass,
  Map,
  Navigation,
  Ship,
  Anchor,
  Sailboat,
  Umbrella,
  Tent,
  Campfire,
  Binoculars,
  Backpack,
  Luggage,
  Plane,
  Train,
  Bus,
  Car,
  Bike,
  Footprints,
  Dog,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Turtle,
  Butterfly,
  Bug,
  Bee,
  Ladybug,
  Apple,
  Orange,
  Banana,
  Grape,
  Watermelon,
  Cherry,
  Strawberry,
  Lemon,
  Cookie,
  Candy,
  IceCream,
  Cake,
  Cupcake,
  Donut,
  Croissant,
  Bread,
  Sandwich,
  Hamburger,
  Pizza as PizzaIcon,
  Taco,
  Burrito,
  Sushi,
  Rice,
  Noodles,
  Soup,
  Salad,
  Egg,
  Milk,
  Coffee as CoffeeCup,
  Tea,
  Wine,
  Beer as BeerIcon,
  Cocktail,
  Juice,
  Soda,
  Bottle,
  CupSoda,
  Mug,
  Thermometer,
  Droplet,
  Flame,
  Fire,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning as CloudLightningIcon,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  MountainSnow,
  Trees,
  Palmtree,
  Cactus,
  Flower2,
  Sprout,
  Seedling,
  Wheat,
  Grass,
  Clover,
  LeafyGreen,
  Salad as SaladIcon,
  Apple as AppleIcon,
  Cherry as CherryIcon,
  Strawberry as StrawberryIcon,
  Grape as GrapeIcon,
  Citrus,
  Banana as BananaIcon,
  Pineapple,
  Coconut,
  Kiwi,
  Tomato,
  Avocado,
  Eggplant,
  Onion,
  Garlic,
  Pepper,
  Chili,
  Corn,
  Pumpkin,
  Mushroom,
  Bread as BreadIcon,
  Croissant as CroissantIcon,
  Bagel,
  Pretzel,
  Pancakes,
  Waffle,
  Cake as CakeIcon,
  Cupcake as CupcakeIcon,
  Pie,
  Tart,
  Cookie as CookieIcon,
  Candy as CandyIcon,
  Chocolate,
  Lollipop,
  IceCream as IceCreamIcon,
  Milkshake,
  Smoothie,
  Coffee as CoffeeIcon2,
  Tea as TeaIcon,
  Matcha,
  BubbleTea,
  Beer as BeerIcon2,
  Wine as WineIcon,
  Champagne,
  Cocktail as CocktailIcon,
  Martini,
  Whiskey,
  Vodka,
  Rum,
  Gin,
  Tequila,
  BeerOff,
  CoffeeOff,
  DrinkOff,
  GlassWater,
  Glass,
  Cup,
  Bottle as BottleIcon,
  Flask,
  Beaker,
  TestTube,
  Microscope,
  Telescope,
  Dna,
  Atom,
  Brain,
  HeartPulse as HeartPulseIcon,

  Clock as ClockIcon,

  Mic as MicIcon,
 
  Video as VideoIcon,
 
  Camera as CameraIcon,

  Binoculars as BinocularsIcon,
  Microscope as MicroscopeIcon,
  Telescope as TelescopeIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Globe as GlobeIcon,

  Sailboat as SailboatIcon,
  Ship as ShipIcon,
  Anchor as AnchorIcon,
  Lighthouse,
  Buoy,
  Fish as FishIcon,

  Turtle as TurtleIcon,

  Bone as BoneIcon,
  Dog as DogIcon,
  Cat as CatIcon,
  Bird as BirdIcon,
  Rabbit as RabbitIcon,

  Kiwi as KiwiBird,

  Swallow as SwallowIcon,
 
  Butterfly as ButterflyIcon,
  Moth,
  Bee as BeeIcon,
  
  Ladybug as LadybugIcon,
 
  Jellyfish as JellyfishIcon,
   
  Snail as SnailIcon,
  Octopus as OctopusIcon,
  Squid as SquidIcon,
 
  Lobster as LobsterIcon,
  Crab as CrabIcon,
  Shrimp as ShrimpIcon,
  
} from 'lucide-react'

// Service data with friendly icons
const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: <Code className="w-8 h-8" />,
    description: 'We build beautiful, fast, and responsive websites that your users will love.',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Content Management Systems',
      'Single Page Applications',
      'Performance Optimization'
    ],
    color: 'from-blue-500 to-cyan-500',
    emoji: '🌐',
    funFact: 'We once built a website that loads faster than a cat video!'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    icon: <Smartphone className="w-8 h-8" />,
    description: 'Native and cross-platform mobile apps that feel right at home on any device.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'Flutter Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    color: 'from-purple-500 to-pink-500',
    emoji: '📱',
    funFact: 'Our apps have been downloaded more times than there are people in New York!'
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    icon: <Cloud className="w-8 h-8" />,
    description: 'Scalable cloud infrastructure that grows with your business, not your budget.',
    features: [
      'AWS/Azure/GCP Setup',
      'Serverless Architecture',
      'Database Management',
      'DevOps & CI/CD',
      'Container Orchestration',
      'Cloud Migration'
    ],
    color: 'from-orange-500 to-red-500',
    emoji: '☁️',
    funFact: 'We\'ve saved clients enough server costs to buy a small island!'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Smart solutions that learn from your data and make your business smarter.',
    features: [
      'Custom AI Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants'
    ],
    color: 'from-green-500 to-emerald-500',
    emoji: '🤖',
    funFact: 'Our AI can predict what you want for lunch with 90% accuracy!'
  },
  {
    id: 5,
    title: 'UI/UX Design',
    icon: <Palette className="w-8 h-8" />,
    description: 'Beautiful designs that don\'t just look good—they feel good to use.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems'
    ],
    color: 'from-pink-500 to-rose-500',
    emoji: '🎨',
    funFact: 'We\'ve designed interfaces that users actually enjoy using (yes, it\'s possible)!'
  },
  {
    id: 6,
    title: 'Digital Marketing',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Get found by the right people at the right time with our marketing expertise.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Email Marketing',
      'PPC Advertising',
      'Analytics & Reporting'
    ],
    color: 'from-yellow-500 to-amber-500',
    emoji: '📈',
    funFact: 'We\'ve helped clients go from "who?" to "how did we not know about them?"'
  }
]

// Team members with friendly personalities
const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Tech Wizard & Co-founder',
    emoji: '🧙‍♂️',
    expertise: ['Full Stack', 'Cloud', 'AI'],
    funFact: 'Can debug code in his sleep',
    favorite: '☕ Coffee',
    personality: 'The friendly genius who explains complex tech like it\'s a story'
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Design Magician',
    emoji: '✨',
    expertise: ['UI/UX', 'Branding', 'Animation'],
    funFact: 'Dreams in hex colors',
    favorite: '🎨 Art supplies',
    personality: 'Makes pixels dance and users smile'
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Mobile App Guru',
    emoji: '📱',
    expertise: ['iOS', 'Android', 'React Native'],
    funFact: 'Has built 50+ apps, still uses a flip phone sometimes',
    favorite: '📱 New gadgets',
    personality: 'Can talk about mobile apps for hours (and we love it)'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Cloud Captain',
    emoji: '☁️',
    expertise: ['AWS', 'DevOps', 'Security'],
    funFact: 'Can deploy to production without breaking anything (most days)',
    favorite: '🚀 Rocket coffee',
    personality: 'Keeps our heads in the clouds (the good kind)'
  },
  {
    id: 5,
    name: 'Vikram Sharma',
    role: 'AI Whisperer',
    emoji: '🤖',
    expertise: ['Machine Learning', 'Python', 'Data Science'],
    funFact: 'Trained a model to predict cricket scores',
    favorite: '📊 Data snacks',
    personality: 'Makes machines smarter than humans (but still humble)'
  },
  {
    id: 6,
    name: 'Anjali Patel',
    role: 'Project Happiness Manager',
    emoji: '😊',
    expertise: ['Project Management', 'Client Success', 'Agile'],
    funFact: 'Has never missed a deadline (we checked)',
    favorite: '📋 Checklist',
    personality: 'The reason clients keep coming back with smiles'
  }
]

// Client success stories with friendly vibes
const successStories = [
  {
    id: 1,
    client: 'TechStart Solutions',
    industry: 'SaaS',
    project: 'Project Management Platform',
    challenge: 'Needed a platform that didn\'t make people want to pull their hair out',
    solution: 'Built a beautiful, intuitive interface that actually makes planning fun',
    result: '3x user engagement, 50% less support tickets',
    testimonial: 'They didn\'t just build software—they built a tool we actually enjoy using every day!',
    clientName: 'Rajesh Mehta',
    clientRole: 'CEO',
    emoji: '🎯',
    rating: 5
  },
  {
    id: 2,
    client: 'HealthAI',
    industry: 'Healthcare',
    project: 'Patient Monitoring System',
    challenge: 'Doctors were spending more time with computers than patients',
    solution: 'Created a voice-first interface that doctors actually love',
    result: '40% more patient time, 90% doctor satisfaction',
    testimonial: 'Finally, technology that works for us, not against us!',
    clientName: 'Dr. Priya Nair',
    clientRole: 'Medical Director',
    emoji: '🏥',
    rating: 5
  },
  {
    id: 3,
    client: 'EcoShop',
    industry: 'E-commerce',
    project: 'Sustainable Marketplace',
    challenge: 'Needed a platform that didn\'t hurt the planet',
    solution: 'Built a carbon-neutral e-commerce platform with green hosting',
    result: '50K+ products sold, carbon negative operations',
    testimonial: 'They helped us prove that business can be both profitable and sustainable.',
    clientName: 'Arun Kumar',
    clientRole: 'Founder',
    emoji: '🌱',
    rating: 5
  }
]

// Fun stats with personality
const funStats = [
  { number: '250+', label: 'Happy Clients', icon: <Users className="w-6 h-6" />, emoji: '😊' },
  { number: '500+', label: 'Projects Delivered', icon: <Rocket className="w-6 h-6" />, emoji: '🚀' },
  { number: '50K+', label: 'Cups of Coffee', icon: <Coffee className="w-6 h-6" />, emoji: '☕' },
  { number: '100+', label: 'Team Birthdays', icon: <Cake className="w-6 h-6" />, emoji: '🎂' },
  { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" />, emoji: '🎧' },
  { number: '∞', label: 'Fun Guaranteed', icon: <Smile className="w-6 h-6" />, emoji: '✨' }
]

// FAQ with friendly answers
const faqs = [
  {
    question: 'How do we start working together?',
    answer: 'Easy! Just reach out via phone, WhatsApp, or our contact form. We\'ll grab a virtual coffee (or real coffee if you\'re in Karnal) and chat about your ideas. No pressure, just friendly conversation!',
    emoji: '☕'
  },
  {
    question: 'How long does it take to build something?',
    answer: 'It depends on what you want to build! A simple website might take 2-3 weeks, while a complex app could take 3-6 months. But we\'ll always keep you updated and deliver in small, usable chunks so you can see progress along the way.',
    emoji: '⏱️'
  },
  {
    question: 'What if I don\'t know exactly what I want?',
    answer: 'No problem at all! Most of our best projects started with a vague idea and lots of brainstorming. We\'ll help you figure out what you need, what\'s possible, and what makes sense for your budget.',
    emoji: '💡'
  },
  {
    question: 'Do you only work with big companies?',
    answer: 'Absolutely not! We love working with startups, small businesses, and even individuals with big ideas. Some of our favorite projects came from people with just a dream and a notebook.',
    emoji: '🌟'
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We treat you like a friend, not just a client. We don\'t use confusing jargon, we don\'t overcharge, and we genuinely care about your success. Plus, we have way more fun than any tech company should!',
    emoji: '💝'
  },
  {
    question: 'Can we visit your office?',
    answer: 'Of course! We\'re in Sector 7, Karnal. Come by anytime between 9 AM and 6 PM (but maybe text first so we can have chai ready!). We love meeting our clients in person.',
    emoji: '🏢'
  }
]

// Contact methods with personality
const contactMethods = [
  {
    method: 'Call Us',
    value: '+91-7027944324',
    icon: <Phone className="w-6 h-6" />,
    emoji: '📞',
    action: 'tel:+917027944324',
    description: 'Talk to a real human (no robots, we promise!)',
    availability: '24/7 - We don\'t sleep much'
  },
  {
    method: 'WhatsApp',
    value: '+91-7027944324',
    icon: <MessageCircle className="w-6 h-6" />,
    emoji: '💬',
    action: 'https://wa.me/917027944324',
    description: 'Text us like you would text a friend',
    availability: 'Usually reply in minutes'
  },
  {
    method: 'Email',
    value: 'hello@techmintlab.com',
    icon: <Mail className="w-6 h-6" />,
    emoji: '📧',
    action: 'mailto:hello@techmintlab.com',
    description: 'Send us your thoughts (we actually read them)',
    availability: 'Reply within 2 hours'
  },
  {
    method: 'Visit Us',
    value: 'Sector 7, Karnal',
    icon: <MapPin className="w-6 h-6" />,
    emoji: '📍',
    action: '#',
    description: 'Come for chai, stay for the conversation',
    availability: 'Mon-Fri, 9AM-6PM'
  },
  {
    method: 'Instagram',
    value: '@techmintlab',
    icon: <Instagram className="w-6 h-6" />,
    emoji: '📸',
    action: 'https://instagram.com/techmintlab',
    description: 'See our team photos and behind-the-scenes',
    availability: 'Always posting memes'
  },
  {
    method: 'LinkedIn',
    value: 'TechMintLab',
    icon: <Linkedin className="w-6 h-6" />,
    emoji: '💼',
    action: 'https://linkedin.com/company/techmintlab',
    description: 'Connect professionally (but still friendly)',
    availability: 'Updated weekly'
  }
]

// Fun facts about the team
const funFacts = [
  { fact: 'We have a team member who can solve a Rubik\'s cube in under a minute', emoji: '🧩' },
  { fact: 'Our office has a "No Bad Day" policy - we bring snacks if someone\'s grumpy', emoji: '🍪' },
  { fact: 'We once coded an entire project while eating pizza (it was delicious)', emoji: '🍕' },
  { fact: 'Two team members met at a hackathon and now they\'re married', emoji: '💑' },
  { fact: 'Our cat, "Debug", is the unofficial office mascot', emoji: '🐱' },
  { fact: 'We have a board game night every Friday (you\'re invited!)', emoji: '🎲' }
]

export default function HiPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(false)
  const [muted, setMuted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    // Reset after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <>
      {/* Floating Welcome Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white z-50 lg:hidden safe-bottom">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Heart className="w-5 h-5 mr-2 fill-current animate-pulse" />
            <span className="text-sm font-medium">Let's be friends! 👋</span>
          </div>
          <a 
            href="https://wa.me/917027944324"
            className="flex items-center bg-white text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Say Hi
          </a>
        </div>
      </div>

      {/* Hero Section - Super Friendly */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">👋</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse">💝</div>
          <div className="absolute top-20 right-20 text-4xl animate-spin-slow">✨</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-float">🌟</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Welcome Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Heart className="w-5 h-5 text-red-500 mr-2 fill-current animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">We're so happy you're here!</span>
              <Sparkles className="w-5 h-5 text-yellow-500 ml-2" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Be{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Friends
              </span>
              <br />Who Build Awesome Stuff
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're not just developers—we're your tech buddies who love turning ideas into reality. 
              No complicated jargon, no hidden agendas, just good people building great things together.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/917027944324"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Say Hi on WhatsApp
              </a>
              
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 border-2 border-gray-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send a Message
              </button>
            </div>

            {/* Friendly Stats */}
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
              <span className="flex items-center bg-white/80 px-4 py-2 rounded-full">
                <Smile className="w-4 h-4 mr-1 text-green-500" /> 100% Friendly
              </span>
              <span className="flex items-center bg-white/80 px-4 py-2 rounded-full">
                <Coffee className="w-4 h-4 mr-1 text-brown-500" /> Coffee Always Ready
              </span>
              <span className="flex items-center bg-white/80 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 mr-1 text-red-500 fill-current" /> Client Love Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {funStats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-2 animate-bounce-slow">{stat.emoji}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Video/Message Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-3xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-5xl shadow-lg animate-float">
                  👋
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">A Personal Note From Our Team</h2>
                  <p className="text-gray-700 mb-4">
                    "Hey there! We're so glad you found us. Whether you have a clear vision or just a spark of an idea, 
                    we'd love to hear about it. We believe the best projects come from genuine connections and real friendships. 
                    So consider us your tech buddies—we're here to help, guide, and build something amazing together."
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Team"
                      className="w-10 h-10 rounded-full border-2 border-white -mr-2"
                    />
                    <img
                      src="/api/placeholder/40/40"
                      alt="Team"
                      className="w-10 h-10 rounded-full border-2 border-white -mr-2"
                    />
                    <img
                      src="/api/placeholder/40/40"
                      alt="Team"
                      className="w-10 h-10 rounded-full border-2 border-white -mr-2"
                    />
                    <img
                      src="/api/placeholder/40/40"
                      alt="Team"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <span className="ml-3 text-sm text-gray-600">+ the rest of the gang!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - With Personality */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 inline mr-1" />
              What We Can Build Together
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services That Come With a{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Smile
              </span>
            </h2>
            <p className="text-gray-600">
              We don't just write code—we create experiences, solve problems, and make your life easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 ${
                  selectedService === service.id ? 'ring-4 ring-pink-500' : ''
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className="text-2xl">{service.emoji}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {selectedService === service.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <h4 className="font-semibold mb-2">What's included:</h4>
                    <ul className="space-y-2 mb-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm bg-yellow-50 p-3 rounded-lg">
                      <span className="font-semibold">Fun fact:</span> {service.funFact}
                    </p>
                  </div>
                )}
                
                <button className="mt-4 text-pink-600 font-semibold flex items-center group">
                  {selectedService === service.id ? 'Show less' : 'Learn more'}
                  <ChevronRight className={`w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 ${
                    selectedService === service.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Like Friends */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4 inline mr-1" />
              Meet The Gang
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Future{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tech Buddies
              </span>
            </h2>
            <p className="text-gray-600">
              We're not just colleagues—we're friends who love what we do. And we'd love to be friends with you too!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                    {member.emoji}
                  </div>
                  <span className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {member.favorite}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 mb-3 italic">
                  "{member.personality}"
                </p>
                
                <div className="text-xs bg-yellow-50 p-2 rounded-lg">
                  <span className="font-semibold">🎯 Fun fact:</span> {member.funFact}
                </div>
              </div>
            ))}
          </div>

          {/* Team Fun Facts */}
          <div className="mt-12 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎉 Fun Things About Us</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start bg-white/80 rounded-xl p-4">
                  <span className="text-2xl mr-3">{fact.emoji}</span>
                  <p className="text-sm">{fact.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Happy Clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4 inline mr-1 fill-current" />
              Friends Who Became Family
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Happy{' '}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Client Stories
              </span>
            </h2>
            <p className="text-gray-600">
              We don't just build projects—we build relationships that last.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{story.emoji}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{story.client}</h3>
                <p className="text-sm text-gray-500 mb-3">{story.industry}</p>
                
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 mb-1">Challenge:</div>
                  <p className="text-sm text-gray-600 mb-2">{story.challenge}</p>
                  
                  <div className="text-xs font-semibold text-gray-500 mb-1">Solution:</div>
                  <p className="text-sm text-gray-600 mb-2">{story.solution}</p>
                  
                  <div className="text-xs font-semibold text-gray-500 mb-1">Result:</div>
                  <p className="text-sm font-semibold text-green-600">{story.result}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm italic mb-2">"{story.testimonial}"</p>
                  <p className="text-sm font-semibold">- {story.clientName}, {story.clientRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - Let's Chat */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Let's Start a Conversation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tell Us{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Your Story
                </span>
              </h2>
              <p className="text-gray-600">
                No pressure, no obligations—just a friendly chat about your ideas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Say Hello!</h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-gray-500">{method.method}</p>
                        <p className="font-semibold">{method.value}</p>
                        <p className="text-xs text-gray-400 mt-1">{method.description}</p>
                        <p className="text-xs text-green-600 mt-1">{method.availability}</p>
                      </div>
                      <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {method.emoji}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm font-semibold mb-4">Follow our adventures:</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PartyPopper className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent! 🎉</h4>
                    <p className="text-gray-600 mb-4">Thanks for reaching out! We'll get back to you faster than you can say "hello".</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Coffee className="w-4 h-4" />
                      <span>Grab a coffee while you wait!</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Rahul or 'The Cool Person'"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@awesome.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What brings you here? <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select one...</option>
                        <option value="website">I need a website</option>
                        <option value="app">I need a mobile app</option>
                        <option value="cloud">Cloud stuff</option>
                        <option value="ai">AI/Machine Learning</option>
                        <option value="design">Design help</option>
                        <option value="consulting">Just want to chat</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Budget range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select...</option>
                          <option value="small">₹50K - ₹2L</option>
                          <option value="medium">₹2L - ₹10L</option>
                          <option value="large">₹10L+</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select...</option>
                          <option value="urgent">ASAP (yesterday!)</option>
                          <option value="soon">Next 1-2 months</option>
                          <option value="planning">Just planning</option>
                          <option value="flexible">No rush</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us more <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="What's on your mind? Dreams? Ideas? Even just a hello!"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Send Message with Love 💝
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      By sending this, you're basically agreeing to be friends. No take-backs! 😊
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Friendly Answers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Curious Minds Want to Know
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  (Fun) Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                      {faq.emoji}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🎉</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse">💫</div>
          <div className="absolute top-20 right-20 text-4xl animate-spin-slow">✨</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Our Friendship?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No contracts, no commitments—just a friendly conversation about your ideas. 
            We promise it'll be the best chat you've had all week!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Say Hi on WhatsApp
            </a>
            
            <a
              href="tel:+917027944324"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Give Us a Call
            </a>
          </div>

          {/* Office Hours */}
          <div className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Coffee className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white">Office hours: Whenever you need us (we're always here for friends!)</span>
          </div>
        </div>
      </section>

      {/* Floating Emojis Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}