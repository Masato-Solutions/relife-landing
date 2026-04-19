# Re:Life Health Website Revamp - Developer Specification

## Executive Summary

This document provides a comprehensive specification for the complete revamp of the relife.health website. The revamp introduces a modern, user-centric design with seven key pages, each serving a distinct purpose in the customer journey. The design philosophy emphasizes warmth, accessibility, and organic visual flow while maintaining professional credibility.

---

## Project Overview

### Objectives

The relife.health website revamp aims to:

1. **Establish clear value proposition** through an improved home page that guides users to relevant sections
2. **Showcase wellness products** (sleeping boxes, poppy pads, etc.) with e-commerce integration capability
3. **Promote community programs** including CSR events, seminars, and mental health initiatives
4. **Highlight technology solutions** through dedicated application promotion pages
5. **Maintain trust and credibility** with refined About Us, Wellness Center, and Contact Us sections
6. **Streamline user onboarding** with a clear "Register Now" call-to-action linking to the webapp

### Target Audience

- Individuals seeking mental health support (18-65 years old)
- Corporate clients interested in CSR programs
- Wellness enthusiasts looking for premium products
- Healthcare professionals seeking collaboration opportunities

---

## Design Philosophy: Warm Minimalism with Organic Curves

### Core Design Principles

The website follows a **Warm Minimalism** design approach that combines:

1. **Clarity First**: Generous whitespace and purposeful typography guide users intuitively through the site
2. **Organic Flow**: Curved dividers, rounded elements, and asymmetric layouts create visual warmth
3. **Emotional Safety**: Soft colors and gentle transitions evoke trust and care
4. **Progressive Disclosure**: Information reveals naturally as users scroll, avoiding cognitive overload

### Color Palette

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Primary | Sage Green | #A8B8A0 | Buttons, links, primary CTAs, accents |
| Secondary | Terracotta | #D4A89A | Secondary accents, highlights |
| Accent | Lavender | #C4B5D4 | Tertiary accents, subtle highlights |
| Background | Off-white | #F9F7F4 | Page backgrounds, neutral areas |
| Text | Charcoal | #2C2C2C | Primary text content |
| Borders | Light Gray | #E8E6E1 | Card borders, dividers |
| Muted | Light Gray | #6B6B6B | Secondary text, muted content |

### Typography System

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| H1 (Page Titles) | Poppins | 700 | 48px | 1.2 |
| H2 (Section Titles) | Poppins | 700 | 36px | 1.2 |
| H3 (Subsections) | Poppins | 700 | 24px | 1.3 |
| Body Text | Inter | 400 | 16px | 1.6 |
| Small Text | Inter | 400 | 14px | 1.5 |
| Button Text | Inter | 500 | 16px | 1.2 |

**Font Import**: Google Fonts (Poppins 600,700 and Inter 400,500,600)

### Spacing & Layout

- **Container**: Max-width 1280px with responsive padding (16px mobile, 24px tablet, 32px desktop)
- **Grid System**: 12-column grid for desktop, 1-column for mobile, 2-column for tablet
- **Spacing Scale**: 8px, 16px, 24px, 32px, 48px (multiples of 8px)
- **Border Radius**: 12px for most elements, 24px for larger cards
- **Shadows**: Subtle shadows for depth (0 1px 2px for small, 0 4px 6px for medium, 0 10px 15px for large)

### Interactive Elements

- **Hover Effects**: Smooth 200-300ms transitions with color and transform changes
- **Button States**: 
  - Default: Primary color background
  - Hover: Darker shade with slight lift (transform: translateY(-2px))
  - Active: Pressed state with inset shadow
  - Disabled: Reduced opacity (50%)
- **Links**: Underline on hover, color transition to primary
- **Cards**: Border color change to primary on hover, shadow enhancement

---

## Page Specifications

### 1. Home Page (`/`)

**Purpose**: Introduce Re:Life's value proposition and guide users to key sections

**Key Sections**:

1. **Navigation Bar** (Sticky)
   - Logo with text "Re:Life"
   - Navigation links: Home, Products, Services, Application, Wellness Center, About Us, Contact Us
   - "Register Now" CTA button
   - Mobile hamburger menu for screens < 768px

2. **Hero Section**
   - Headline: "Your Mental Health & Wellness Journey Starts Here"
   - Subheadline: Brief description of the platform
   - Two CTAs: "Explore Products" and "Join Our Programs"
   - Background: Gradient from primary/10 to accent/10 with icon

3. **Features Overview** (4-column grid)
   - Premium Products
   - Community Programs
   - Wellness Center
   - Mobile App
   - Each card includes icon, title, description, and link

4. **Call-to-Action Section**
   - Headline: "Ready to Transform Your Wellness?"
   - Subheadline: Encouraging message
   - CTA: "Get Started Now"

5. **Footer**
   - Logo and tagline
   - Quick links organized by category
   - Copyright information

**Design Notes**:
- Use organic SVG dividers between sections
- Implement parallax scrolling on hero background (subtle)
- Fade-in animations as elements enter viewport

---

### 2. Products Page (`/products`)

**Purpose**: Showcase wellness products and enable e-commerce integration

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on product quality and benefits

2. **Product Grid** (3-column desktop, 1-column mobile)
   - Product cards with:
     - Product image placeholder (gradient background with icon)
     - Product name and category
     - Brief description
     - Star rating and review count
     - Feature list (3 key features)
     - Price and "Add to Cart" button
   - Hover effect: Border color change, shadow enhancement

3. **Product Details** (Per Card)
   - Name: Product title
   - Category: Product type
   - Price: Displayed prominently
   - Rating: 5-star system with review count
   - Features: Bulleted list of key benefits
   - CTA: "Add to Cart" button

4. **Call-to-Action Section**
   - Headline: "Ready to Invest in Your Wellness?"
   - Description: Mention satisfaction guarantee and free shipping
   - CTA: "Shop All Products"

5. **Footer**

**Products to Display**:
- Premium Sleeping Box ($299.99, 4.8 rating)
- Poppy Pad Comfort ($149.99, 4.9 rating)
- Wellness Bundle ($399.99, 4.7 rating)
- Meditation Cushion ($79.99, 4.6 rating)
- Sleep Wellness Tea Set ($49.99, 4.8 rating)
- Aromatherapy Diffuser ($89.99, 4.7 rating)

**Integration Notes**:
- "Add to Cart" buttons should integrate with payment gateway (Stripe/POS system)
- Product images should be uploaded via CDN
- Price and inventory should be managed via backend API

---

### 3. Services Page (`/services`)

**Purpose**: Promote CSR events, seminars, and mental health programs

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on community and support

2. **Services Overview** (2-column grid)
   - Mental Health Seminars
   - Support Group Programs
   - Wellness Workshops
   - Corporate CSR Programs
   - Each card includes icon, title, description, schedule, participant count, and duration

3. **Upcoming Events** (3-column grid)
   - Event cards with:
     - Event title
     - Date and time
     - Location (virtual or physical)
     - Available spots
     - "Register Now" button

4. **Why Join Section** (4-column grid)
   - Expert Guidance
   - Community Support
   - Practical Tools
   - Flexible Access

5. **Footer**

**Upcoming Events** (Sample Data):
- Stress Management Masterclass (April 25, 2026, 6-8 PM, Virtual, 45 spots)
- Mindfulness & Meditation Workshop (May 2, 2026, 10 AM-1 PM, Dambulla, 30 spots)
- Mental Health Awareness Seminar (May 9, 2026, 7-9 PM, Virtual, 60 spots)

**Integration Notes**:
- "Register Now" buttons should link to registration system
- Event data should be managed via backend API
- Calendar integration for event management

---

### 4. Application Page (`/application`)

**Purpose**: Promote web and mobile applications

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on accessibility and convenience

2. **Web Application Section** (2-column layout)
   - Headline: "Web Application"
   - Description: Full platform access
   - Feature list (6 features):
     - AI-powered mental health chatbot
     - Appointment scheduling
     - Personal wellness tracking
     - Community resources
     - Prescription management
     - Secure video conferencing
   - CTA: "Launch Web App"
   - Background: Gradient with icon

3. **Mobile Application Section** (2-column layout, reversed)
   - Headline: "Mobile Application"
   - "Coming Soon" badge
   - Description: Mobile app in development
   - Feature list (6 features):
     - Push notifications
     - Offline access
     - Biometric authentication
     - Native performance
     - Seamless sync
     - Emergency resources
   - CTA: "Notify Me When Available"
   - Background: Gradient with icon

4. **Features Comparison Table**
   - Rows: Feature list
   - Columns: Web App, Mobile App
   - Checkmarks for available features

5. **Download Section**
   - Headline: "Get Started Today"
   - Two CTAs: "Launch Web App" and "Download Mobile (Coming Soon)"

6. **Footer**

**Integration Notes**:
- "Launch Web App" button should link to webapp URL
- "Notify Me" button should capture email for notification list
- Mobile app links should be updated when app is available

---

### 5. Wellness Center Page (`/wellness-center`)

**Purpose**: Provide resources, guides, and community support

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on resources and guidance

2. **Resources Overview** (4-column grid)
   - Wellness Guides (24 guides)
   - Expert Tips (100+ tips)
   - Community Stories (50+ stories)
   - Progress Tracking (Unlimited)
   - Each card includes icon, title, description, and count

3. **Latest Articles & Resources** (2-column grid)
   - Article cards with:
     - Category badge
     - Article title
     - Date published
     - Read time estimate
   - Hover effect: Title color change to primary

4. **Daily Wellness Tips** (3-column grid)
   - Morning Routine
   - During the Day
   - Evening Routine
   - Each section includes 3 tips

5. **Call-to-Action Section**
   - Headline: "Start Your Wellness Journey"
   - CTA: "Explore Wellness Center"

6. **Footer**

**Sample Articles**:
- Understanding Anxiety: A Comprehensive Guide
- 5 Meditation Techniques for Beginners
- Sleep Hygiene: Tips for Better Rest
- Building Resilience in Daily Life
- Nutrition and Mental Health Connection
- Workplace Stress Management Strategies

**Integration Notes**:
- Article content should be managed via CMS
- Search functionality for articles (future enhancement)
- User-generated content for community stories

---

### 6. About Us Page (`/about-us`)

**Purpose**: Build trust and credibility through company mission and values

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on mission and vision

2. **Mission Section** (2-column layout)
   - Headline: "Our Mission"
   - Description: Company mission and founding story
   - CTA: "Learn More"
   - Background: Gradient with icon

3. **Core Values** (4-column grid)
   - Compassion
   - Excellence
   - Community
   - Innovation
   - Each value includes icon, title, and description

4. **What We Offer** (2x2 grid)
   - Comprehensive Platform
   - Community & Support
   - Wellness Products
   - Technology Solutions
   - Each section includes bulleted list

5. **Team Section** (3-column grid)
   - Team member cards with:
     - Avatar placeholder
     - Name
     - Role
     - Bio
   - Sample team: Founder, CMO, CTO

6. **Stats Section** (4-column grid)
   - 50K+ Active Users
   - 500+ Mental Health Professionals
   - 1000+ Success Stories
   - 24/7 Support Available

7. **Call-to-Action Section**
   - Headline: "Join Our Mission"
   - CTA: "Get Started Now"

8. **Footer**

**Integration Notes**:
- Team member information should be editable via CMS
- Stats should be updated from backend API
- Social media links should be added to team profiles

---

### 7. Contact Us Page (`/contact-us`)

**Purpose**: Facilitate customer communication and support

**Key Sections**:

1. **Hero Section**
   - Page title and description
   - Emphasis on accessibility

2. **Contact Information** (4-column grid)
   - Email: hello@relife.health (24-hour response)
   - Phone: +94 (0) 123 456 789 (Mon-Fri, 9 AM-6 PM)
   - Location: Dambulla, Sri Lanka
   - Support Hours: 24/7 Available

3. **Contact Form & Info** (2-column layout)
   - Form fields:
     - Full Name (text input)
     - Email Address (email input)
     - Subject (text input)
     - Message (textarea)
     - Submit button
   - Info box with reasons to contact
   - Quick response time notice

4. **FAQ Section** (2-column grid)
   - 6 frequently asked questions with answers
   - Expandable/collapsible design (optional)

5. **Footer**

**Form Validation**:
- All fields required
- Email format validation
- Message length: minimum 10 characters
- Success message after submission

**Integration Notes**:
- Form submissions should be sent to backend API
- Email notifications to support team
- Auto-reply email to user
- Form data should be stored in database

---

## Technical Architecture

### Frontend Stack

- **Framework**: React 19 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui (pre-built accessible components)
- **Icons**: Lucide React
- **Animations**: Framer Motion (optional for advanced animations)
- **Build Tool**: Vite

### Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Services.tsx
│   │   ├── Application.tsx
│   │   ├── WellnessCenter.tsx
│   │   ├── AboutUs.tsx
│   │   ├── ContactUs.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (other shadcn/ui components)
│   │   └── ErrorBoundary.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── favicon.ico
│   └── robots.txt
└── index.html
```

### Key Files

| File | Purpose |
|------|---------|
| `client/src/index.css` | Global styles and design tokens |
| `client/index.html` | HTML entry point with Google Fonts |
| `client/src/App.tsx` | Main app component with routing |
| `client/src/components/Navigation.tsx` | Shared navigation component |
| `client/src/pages/*.tsx` | Individual page components |

---

## Implementation Guidelines

### Design Token Usage

All styling should use the predefined design tokens in `client/src/index.css`:

```css
/* Colors */
--primary: #A8B8A0
--secondary: #D4A89A
--accent: #C4B5D4
--background: #F9F7F4
--foreground: #2C2C2C

/* Spacing */
--radius: 0.75rem
```

### Component Development

1. **Use shadcn/ui Components**: Leverage pre-built components for consistency
2. **Extend with Tailwind**: Add custom styling using Tailwind utilities
3. **Maintain Accessibility**: Ensure keyboard navigation and ARIA labels
4. **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px

### Animations & Interactions

- **Page Transitions**: Fade in/out (300ms)
- **Hover Effects**: Color and transform changes (200ms)
- **Scroll Animations**: Fade-in as elements enter viewport
- **Button States**: Visual feedback for all interaction states

### Image & Media Handling

- **Product Images**: Upload to CDN via `manus-upload-file --webdev`
- **Placeholder Images**: Use gradient backgrounds with icons
- **Responsive Images**: Use `srcset` for different screen sizes
- **Optimization**: Compress images before upload

---

## Integration Points

### Backend API Integration

The following endpoints should be created for full functionality:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/products` | GET | Fetch product list |
| `/api/products/:id` | GET | Fetch product details |
| `/api/cart` | POST | Add product to cart |
| `/api/services` | GET | Fetch services and events |
| `/api/services/:id/register` | POST | Register for event |
| `/api/contact` | POST | Submit contact form |
| `/api/articles` | GET | Fetch wellness articles |
| `/api/team` | GET | Fetch team information |

### Payment Gateway Integration

- **Stripe Integration**: For online product purchases
- **POS System Integration**: For in-store transactions
- **Cart Management**: Session-based or user-account based

### Email Notifications

- **Contact Form**: Confirmation email to user, notification to support
- **Event Registration**: Confirmation with event details
- **Newsletter**: Subscription management for wellness tips

---

## Performance Optimization

### Best Practices

1. **Code Splitting**: Lazy load pages using React.lazy()
2. **Image Optimization**: Use WebP format with fallbacks
3. **Caching**: Implement browser caching for static assets
4. **Minification**: Minify CSS and JavaScript in production
5. **CDN**: Serve static assets from CDN

### Metrics to Monitor

- **Lighthouse Score**: Target > 90
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Page Load Time**: Target < 3 seconds
- **Time to Interactive**: Target < 5 seconds

---

## SEO & Accessibility

### SEO Requirements

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media preview tags
- **Structured Data**: Schema.org markup for products and services
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper indexing rules

### Accessibility (WCAG 2.1 AA)

- **Color Contrast**: Minimum 4.5:1 for text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus rings on all interactive elements
- **Alt Text**: Descriptive alt text for all images

---

## Testing Checklist

### Functional Testing

- [ ] All navigation links work correctly
- [ ] Forms submit and validate properly
- [ ] Buttons trigger correct actions
- [ ] Images load and display correctly
- [ ] Responsive design works on all breakpoints

### Cross-Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing

- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors or warnings
- [ ] Smooth animations and transitions

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators visible

---

## Deployment Checklist

- [ ] All pages created and tested
- [ ] Design tokens properly applied
- [ ] Images optimized and uploaded to CDN
- [ ] Forms integrated with backend
- [ ] Analytics tracking implemented
- [ ] SEO meta tags added
- [ ] Accessibility audit completed
- [ ] Performance optimized
- [ ] Security review completed
- [ ] Staging environment tested
- [ ] Production deployment

---

## Future Enhancements

1. **E-commerce**: Full shopping cart and checkout flow
2. **User Accounts**: User registration and profile management
3. **Search**: Full-text search for products and articles
4. **Recommendations**: AI-powered product recommendations
5. **Reviews**: User reviews and ratings for products
6. **Blog**: Dedicated blog section for wellness content
7. **Mobile App**: Native iOS and Android applications
8. **Community Forum**: User discussion and support forum
9. **Appointment Booking**: Integration with calendar system
10. **Multi-language**: Support for multiple languages

---

## Support & Maintenance

### Regular Maintenance Tasks

- Update content and product information
- Monitor performance metrics
- Review and respond to user feedback
- Update security patches
- Backup database regularly

### Support Contacts

- **Technical Issues**: development@relife.health
- **Content Updates**: content@relife.health
- **General Inquiries**: hello@relife.health

---

## Conclusion

This specification provides a comprehensive guide for developing the revamped relife.health website. The design emphasizes warmth, accessibility, and user-centric navigation while maintaining professional credibility. By following these guidelines and maintaining consistent design principles, the website will effectively communicate Re:Life's value proposition and support user engagement across all key sections.

For questions or clarifications, please contact the project team.
