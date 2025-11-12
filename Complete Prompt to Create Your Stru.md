# 🎯 Complete Prompt to Create Your Structured Cabling Website

Copy and paste this prompt to any AI assistant (Claude, ChatGPT, etc.) or give to a developer:

---

## **Project Brief: In-Suite Structured Cabling Landing Page**

Create a modern, high-converting landing page for a structured cabling company based in Kamloops, BC. The website should target developers, property managers, and homeowners who need professional in-suite network cabling services.

### **Company Information:**
- **Business Name:** Sequoia Services (or "In-Suite Structured Cabling by Sequoia Services")
- **Phone:** 250-574-7110
- **Email:** FiberOptics@sequoiaservices.ca
- **Location:** Kamloops, BC, Canada
- **Service Area:** Kamloops and surrounding areas

### **Services Offered:**
1. **Cable Pulling & Routing**
   - CAT5e, CAT6, CAT6a, CAT7 cable installation
   - Coaxial cable runs
   - Fiber optic cabling
   - Running cables from suite entry point/panel to all rooms (living room, bedrooms, office, etc.)

2. **Cable Termination & Labeling**
   - Professional termination on wall plates and keystone jacks
   - Patch panel termination
   - Complete labeling system for easy identification and troubleshooting

3. **Testing & Certification**
   - Signal integrity verification with professional cable testers
   - Detailed test reports for developers and property managers
   - Certification documentation

4. **Connectivity Setup**
   - Wall plate and jack installations (single/dual ports for internet, phone, TV)
   - Flush-mount or surface-mount options for finished units
   - Patch panel setup in communication cabinets

5. **Smart Home Pre-Wiring**
   - Audio system wiring
   - Home automation infrastructure
   - Network backbone for smart home devices

### **Target Audiences:**
1. **Developers** - Building future-ready properties that attract premium tenants
2. **Property Managers** - Reducing connectivity complaints and maintenance calls
3. **Homeowners** - Creating the ultimate smart home with reliable wired networks

### **Design Requirements:**

#### **Visual Style:**
- Modern, professional, tech-forward aesthetic
- Color Palette:
  - Primary: Deep Blue (#0052CC)
  - Secondary: Professional Teal (#00A896)
  - Accent: Emerald Green (#17C964) for success states
  - Background: Dark slate (#0F172A, #1E293B)
  - Use subtle glassmorphism effects (backdrop-blur)
- Typography: Bold, clean sans-serif (Inter, Geist, or similar)
- Hero headlines: 60-80px
- Body text: 16-18px

#### **Page Structure:**

**1. Sticky Header**
- Logo with cable icon
- Navigation: Services | Process | Projects | FAQ | Contact
- Phone number (clickable tel: link)
- Primary CTA button: "Get Free Quote"

**2. Hero Section (Asymmetric Bento Grid)**
- Left side (60% width):
  - H1: "Future-Ready In-Suite Structured Cabling—Certified, Labeled, Ready to Go"
  - Subheading: Professional CAT5e/6/6a/7, Coax & Fiber installations for residential and commercial units in Kamloops, BC
  - Primary CTA: "Get Free Consultation"
  - Secondary CTA: "Call (250) 574-7110"
  - Trust indicators: "Certified Testing • Full Labeling • Test Reports"
- Right side (40% width):
  - 2x2 mini cards showing:
    - Cable Pulling (CAT5e-CAT7, Fiber)
    - Termination & Labeling
    - Testing & Certification
    - Smart Home Pre-Wiring
- Background: Gradient mesh with subtle spotlight effect
- Badge: "Serving Kamloops, BC"

**3. Trust Bar**
- Horizontal bar with badges/certifications:
  - "Certified Testing"
  - "Bonded & Insured"
  - "10+ Years Experience"
  - "Kamloops, BC Local"

**4. Problem → Solution Section**
- Two-column layout:
  - **Left (Problem):**
    - Icon: WiFi with warning
    - Headline: "Stop Buffering. Start Connecting."
    - Text: "Tired of WiFi dead spots, lagging video calls, and slow downloads? WiFi is convenient, but it can't beat the speed and reliability of a dedicated wired network."
  - **Right (Solution):**
    - Icon: Network cables
    - Headline: "The Wired Advantage."
    - Text: "We build the digital backbone for your building, ensuring flawless performance for smart homes, 8K streaming, and critical business operations. Guaranteed speed, zero interference."

**5. Who We Serve**
- Three-column cards:
  - **Developers:** "Build Future-Ready Units" - Add significant value with certified networks
  - **Property Managers:** "Minimize Tenant Issues" - Reduce connectivity complaints
  - **Homeowners:** "Ultimate Smart Home" - Flawless speed in every room

**6. Services Bento Grid**
- Mixed-size cards showcasing:
  - Cable Pulling (large card)
  - Termination & Labeling
  - Testing & Certification
  - Wall Plates & Jacks
  - Patch Panel Setup
  - Smart Home Pre-Wiring
- Each card: icon, title, 2-3 bullet points
- Hover effects: subtle lift, border glow

**7. Professional Process (3 Steps)**
- Vertical timeline with numbered steps:
  - **01 - Consultation & Design:** Assess needs, review blueprints, plan cable routes
  - **02 - Professional Installation:** Pull, terminate, and label every cable to industry standards
  - **03 - Test & Certify:** Test every connection, provide certification reports
- Visual: Progress line connecting steps
- Animation: Reveal on scroll

**8. Why Choose Us / Trust Builders**
- Grid of benefits:
  - Certified cable testing
  - Complete labeling system
  - Test reports provided
  - Clean, professional terminations
  - Future-proof installations
  - Local Kamloops service

**9. Before/After Project Gallery** (Optional)
- 2-3 project cards showing:
  - Organized patch panels
  - Clean wall plate installations
  - Labeled cable runs
- Slider or grid layout

**10. FAQ Section**
- Accordion with common questions:
  - "Do you work in finished units?"
  - "How long does installation take?"
  - "Do you provide testing reports?"
  - "What's the difference between CAT6 and CAT6a?"
  - "Can you work around my schedule?"
  - "Do you label every cable?"
- Smooth expand/collapse animations

**11. Final CTA Section**
- Split layout:
  - Left (60%): 
    - Headline: "Ready to Upgrade Your In-Suite Connectivity?"
    - Subtext: Contact us for a free consultation
    - Contact info with icons:
      - Phone: (250) 574-7110
      - Email: FiberOptics@sequoiaservices.ca
  - Right (40%):
    - Service Area card: "Kamloops, BC & surrounding areas"
    - Business Hours card
    - Quick contact form (Name, Email, Phone, Message, Submit)

**12. Footer**
- Company name with cable icon
- Copyright notice
- "Serving Kamloops, BC with pride"
- Links: Services | Process | FAQ | Contact
- Social media icons (if applicable)

### **Animation Requirements:**
- Use Framer Motion (motion.dev) or similar library
- Scroll-triggered reveals (whileInView)
- Staggered entrance animations for cards
- Hover effects: scale, lift, subtle glow
- FAQ accordion with smooth height transitions
- Progress bar tracking scroll position
- Respect `prefers-reduced-motion` for accessibility
- Mobile: Simplified animations

### **Technical Stack:**
- **Framework:** React with Next.js (or React + Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Components:** shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form (optional)

### **Performance Requirements:**
- Largest Contentful Paint (LCP) under 2.5 seconds
- Mobile-first, responsive design
- Lazy loading for images
- Optimized animations (GPU-accelerated transforms only)
- Accessible (WCAG 2.1 AA compliant)

### **SEO Requirements:**
- LocalBusiness JSON-LD schema with:
  - Name: Sequoia Services
  - Phone: 250-574-7110
  - Email: FiberOptics@sequoiaservices.ca
  - Address: Kamloops, BC
  - Service area: Kamloops and surrounding areas
- FAQ schema markup
- Proper heading hierarchy (H1, H2, H3)
- Meta tags for title and description
- Alt text for all images

### **Key Messages/Copy:**
- **Value Proposition:** "Future-ready structured cabling with certified testing and complete labeling"
- **Differentiators:** 
  - Professional testing with reports
  - Complete labeling system
  - Clean, organized installations
  - Local Kamloops expertise
- **Call to Action:** "Get Free Consultation" / "Call (250) 574-7110"

### **Deliverables:**
1. Fully functional, responsive landing page
2. Production-ready code
3. All animations implemented
4. Contact form with validation
5. SEO-optimized markup
6. Mobile and desktop tested

### **Optional Enhancements:**
- Contact form backend integration
- Google Maps embed showing service area
- Testimonials slider
- Pricing calculator
- Blog/resources section
- Case studies page

---

## **Design Inspiration:**
- Modern SaaS landing pages (Linear, Vercel, Stripe)
- Bento grid layouts (Apple, Notion)
- Glassmorphism UI (iOS, Windows 11)
- Smooth Framer Motion animations (Aceternity UI, Magic UI)

---

**This website should feel premium, trustworthy, and tech-forward while being clear and conversion-focused. The goal is to attract high-value B2B clients (developers, property managers) while also appealing to homeowners who want professional service.**

---

## 📋 **Quick Version (TL;DR Prompt):**

```
Create a modern React landing page for Sequoia Services, a structured cabling company in Kamloops, BC.

Contact: (250) 574-7110, FiberOptics@sequoiaservices.ca

Services: CAT5e/6/6a/7, Coax, Fiber optic cable installation, termination, testing & certification for residential/commercial suites.

Target: Developers, property managers, homeowners.

Design: Dark theme, blue/teal/emerald colors, glassmorphism, Framer Motion animations, asymmetric bento grid hero, 3-step process timeline, FAQ accordion, before/after gallery.

Include: Sticky header, trust bar, problem/solution section, services bento grid, who we serve (3 audiences), professional process, FAQ, final CTA with contact form.

Tech: React, Tailwind CSS, Framer Motion, shadcn/ui, Lucide icons. Mobile-first, accessible, SEO-optimized with LocalBusiness schema.
```

---

Copy either the full detailed prompt or the quick version and you'll get a production-ready website! 🚀