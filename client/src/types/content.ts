export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  accent: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  schedule: string;
  participants: string;
  duration: string;
  accent: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  spots: number;
  accent: string;
}

export interface ServicesData {
  services: Service[];
  events: Event[];
}

export interface HomeStat {
  number: string;
  label: string;
}

export interface HomeFeature {
  iconName: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    stats: HomeStat[];
  };
  features: {
    heading: string;
    headingHighlight: string;
    subheading: string;
    items: HomeFeature[];
  };
  cta: {
    heading: string;
    headingHighlight: string;
    subtext: string;
  };
}

export interface AboutValue {
  iconName: string;
  title: string;
  description: string;
  accent: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  accent: string;
  imageUrl: string;
}

export interface AboutStat {
  number: string;
  label: string;
  accent: string;
}

export interface AboutOffering {
  title: string;
  accent: string;
  items: string[];
}

export interface AboutContent {
  mission: {
    heading: string;
    headingHighlight: string;
    paragraphs: string[];
  };
  values: AboutValue[];
  team: TeamMember[];
  stats: AboutStat[];
  offerings: AboutOffering[];
}

export interface WellnessResource {
  id: string;
  iconName: string;
  title: string;
  description: string;
  count: string;
  accent: string;
}

export interface WellnessArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  accent: string;
}

export interface DailyTipSection {
  id: string;
  title: string;
  accent: string;
  tips: string[];
}

export interface WellnessContent {
  resources: WellnessResource[];
  articles: WellnessArticle[];
  dailyTips: DailyTipSection[];
}

export interface ContactCard {
  iconName: string;
  title: string;
  content: string;
  subtext: string;
  accent: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface ContactContent {
  cards: ContactCard[];
  whyContactUs: string[];
  faq: FaqItem[];
}

export interface SiteContent {
  siteName: string;
  logo: string;
  tagline: string;
  footerText: string;
  navigation: { label: string; href: string }[];
}

export interface ContactSubmission {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}
