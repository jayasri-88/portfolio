

# Jayasri Munnaluri — Developer Portfolio Website

## Overview
A visually stunning, recruiter-ready personal portfolio website for a 3rd-year engineering student specializing in Full Stack Development and Machine Learning. The site will be a fully static React app with a modern SaaS-inspired design, dark/light mode, glassmorphism UI, and smooth scroll animations.

---

## Design System
- **Color palette**: Deep navy/dark backgrounds with vibrant blue → cyan → purple gradients for accents
- **UI style**: Glassmorphism cards with frosted-glass effect and soft shadows
- **Typography**: Clean, professional sans-serif (Inter or similar)
- **Dark + Light mode**: Toggle switch in the navbar, dark mode as default
- **Animations**: Smooth fade-in, slide-up, and scale animations on scroll using Framer Motion
- **Layout**: Responsive grid with max-width container, mobile-first design

---

## Sections & Features

### 1. Sticky Navbar
- Logo/name on the left
- Navigation links: About, Skills, Projects, Experience, Contact
- Dark/Light mode toggle
- Active section highlighting on scroll
- Mobile hamburger menu
- Transparent background with blur effect

### 2. Hero Section
- Large animated greeting with name: **Jayasri Munnaluri**
- Role title: *Full Stack Developer & Machine Learning Engineer*
- Tagline: *"Building intelligent web applications using modern web technologies and AI"*
- Profile photo placeholder (circular, with gradient border)
- Two CTA buttons with gradient styling: **View Projects** | **Download Resume**
- Subtle animated background (gradient mesh or particles)

### 3. About Me
- Professional summary based on the resume: AI/ML enthusiast, B.Tech IT student with hands-on experience in ML, deep learning, and Generative AI systems
- Key stats/highlights (e.g., 500+ DSA problems, hackathon finalist, 3 internships)
- Clean two-column layout with text and decorative elements

### 4. Skills Section
- Organized in categorized glassmorphism cards:
  - **Languages**: Python, Java, JavaScript, SQL
  - **Frontend**: HTML, CSS, React, Tailwind CSS
  - **Backend**: Node.js, Express.js, Django, Flask, FastAPI
  - **ML/DL**: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Keras
  - **Generative AI**: LLMs, Prompt Engineering, NLP, Computer Vision, Model Fine-tuning
  - **Tools & Cloud**: Git, Streamlit, Jupyter, Linux, AWS, Docker
- Each skill shown as a badge/chip with subtle hover effects

### 5. Projects Section
Four modern project cards, each featuring:
- Project title and short description
- Tech stack badges
- GitHub link button + Live Demo placeholder button
- Hover animation with card lift effect

**Projects:**
1. **Waste Classifier** — CNN-based image classification for waste categorization (Python, CNN, Streamlit)
2. **Nutrition Label Analyzer** — ML system analyzing food nutrition labels from images (Python, CNN, OCR)
3. **Ambulance Routing Optimization** — Smart routing using ML-driven optimization, 23% response time reduction (MERN Stack, Maps API, ML)
4. **Generative Knowledge Web** — AI-powered knowledge retrieval using LLMs with 92% relevance accuracy (React, Node.js, Generative AI)

### 6. Experience Section
Timeline-style layout showing:
- **AI/ML Intern** at Harsha Perfect Solutions (May–Jul 2025)
- **Web Developer Intern** at GOATek (Jan–Mar 2025)
- **AI Intern** at Brainwave Matrix Solutions (Sep 2024–Jan 2025)

Each with role highlights and key achievements.

### 7. Education & Certifications
- **Education**: B.Tech in Information Technology, MVGR College of Engineering (2023–2027), GPA: 8.42/10
- **Certifications**: Google Cloud, Intel AI, IBM AI & Deep Learning, AWS, Udemy ML, Kaggle GenAI, Hugging Face LLMs, Andrew Ng Deep Learning, GeeksforGeeks CV — displayed as badge cards

### 8. Achievements & Activities
- 500+ DSA problems solved (LeetCode & GeeksforGeeks)
- 160 Days of DSA Challenge completed
- National hackathon finalist (×2)
- YouTube content creator (DSA, Python, ML)
- Active in AI/ML communities, Swecha Linux Club core member

### 9. Contact Section
- Clean contact form with fields: Name, Email, Message
- Form will use a static email service (e.g., Formspree or mailto link) — no backend needed
- Social media links alongside the form
- Gradient submit button with loading state

### 10. Footer
- Social icons with links: GitHub, LinkedIn, YouTube
- Copyright notice
- Quick navigation links
- "Built with ❤️" tagline

---

## Technical Features
- **Resume download**: PDF available directly from the Hero section button (uploaded resume embedded in the project)
- **Scroll animations**: Framer Motion for fade-in and slide-up effects on each section
- **SEO optimized**: Proper meta tags, title, and Open Graph data
- **Responsive**: Mobile-first design, fully responsive across all devices
- **Fast loading**: Lazy-loaded sections and optimized assets
- **Section scroll spy**: Active nav link updates based on visible section
- **GitHub export**: Connect to GitHub for Vercel deployment

