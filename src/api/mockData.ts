import type { Course, Testimonial, FaqItem } from "@/types";

/**
 * Placeholder catalogue data. All content here is original filler —
 * replace with your own course data or wire the API client to a real backend.
 */
export const courses: Course[] = [
  {
    id: "c1",
    slug: "data-science",
    title: "Online M.Sc. in Data Science",
    category: "Data & AI",
    level: "Advanced",
    durationMonths: 24,
    mode: "Online",
    priceInr: 170000,
    rating: 4.7,
    learners: 12400,
    summary:
      "A postgraduate program covering statistics, machine learning, and data engineering with hands-on capstone projects.",
    highlights: [
      "Live and recorded sessions",
      "Industry capstone project",
      "Placement assistance",
      "Flexible weekend schedule",
    ],
    syllabus: [
      { module: "Foundations", topics: ["Python", "Statistics", "Linear Algebra"] },
      { module: "Machine Learning", topics: ["Supervised", "Unsupervised", "Model Tuning"] },
      { module: "Data Engineering", topics: ["SQL", "Pipelines", "Cloud Basics"] },
      { module: "Capstone", topics: ["Problem Framing", "Deployment", "Presentation"] },
    ],
    featured: true,
  },
  {
    id: "c2",
    slug: "business-analytics",
    title: "PG Certificate in Business Analytics",
    category: "Data & AI",
    level: "Intermediate",
    durationMonths: 11,
    mode: "Online",
    priceInr: 95000,
    rating: 4.6,
    learners: 8600,
    summary:
      "Turn raw data into business decisions with analytics tooling, visualization, and storytelling.",
    highlights: ["Case-based learning", "Dashboarding tools", "Mentor support"],
    syllabus: [
      { module: "Analytics Basics", topics: ["Excel", "Descriptive Stats"] },
      { module: "Visualization", topics: ["Dashboards", "Storytelling"] },
      { module: "Applied Projects", topics: ["Marketing", "Operations"] },
    ],
    featured: true,
  },
  {
    id: "c3",
    slug: "mba-online",
    title: "Online MBA",
    category: "Management",
    level: "Intermediate",
    durationMonths: 24,
    mode: "Online",
    priceInr: 165000,
    rating: 4.5,
    learners: 21000,
    summary:
      "A flexible, UGC-style structured MBA with electives across finance, marketing, and operations.",
    highlights: ["Multiple electives", "Peer cohorts", "Career services"],
    syllabus: [
      { module: "Core", topics: ["Finance", "Marketing", "Strategy"] },
      { module: "Electives", topics: ["Analytics", "HR", "Operations"] },
    ],
    featured: true,
  },
  {
    id: "c4",
    slug: "full-stack-development",
    title: "Certificate in Full-Stack Development",
    category: "Software",
    level: "Beginner",
    durationMonths: 9,
    mode: "Hybrid",
    priceInr: 78000,
    rating: 4.4,
    learners: 5300,
    summary:
      "Build and ship web applications end-to-end with a modern JavaScript stack.",
    highlights: ["Project portfolio", "Code reviews", "Interview prep"],
    syllabus: [
      { module: "Frontend", topics: ["HTML/CSS", "React", "TypeScript"] },
      { module: "Backend", topics: ["Node", "APIs", "Databases"] },
    ],
  },
  {
    id: "c5",
    slug: "digital-marketing",
    title: "PG Certificate in Digital Marketing",
    category: "Marketing",
    level: "Beginner",
    durationMonths: 8,
    mode: "Online",
    priceInr: 62000,
    rating: 4.3,
    learners: 4100,
    summary:
      "Performance marketing, SEO, and content strategy with live campaign simulations.",
    highlights: ["Live campaigns", "Tool certifications", "Portfolio reviews"],
    syllabus: [
      { module: "Acquisition", topics: ["SEO", "Paid Ads"] },
      { module: "Retention", topics: ["Email", "Analytics"] },
    ],
  },
  {
    id: "c6",
    slug: "cloud-computing",
    title: "Certificate in Cloud Computing",
    category: "Software",
    level: "Advanced",
    durationMonths: 10,
    mode: "Online",
    priceInr: 88000,
    rating: 4.6,
    learners: 3700,
    summary:
      "Design, deploy, and operate cloud-native systems with reliability and cost in mind.",
    highlights: ["Hands-on labs", "Architecture reviews", "Certification track"],
    syllabus: [
      { module: "Foundations", topics: ["Networking", "Compute", "Storage"] },
      { module: "Operations", topics: ["CI/CD", "Monitoring", "Security"] },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Data Analyst",
    quote:
      "The weekend schedule let me upskill without pausing my job. The capstone gave me something real to show in interviews.",
    avatarColor: "#2f52f5",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Product Manager",
    quote:
      "Clear structure, responsive mentors, and projects that mirror actual work. It paid off within a few months.",
    avatarColor: "#ff9a1f",
  },
  {
    id: "t3",
    name: "Rahul Verma",
    role: "Software Engineer",
    quote:
      "I liked that everything was practical. The code reviews alone were worth it.",
    avatarColor: "#16a34a",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "Are these programs fully online?",
    answer:
      "Most programs are delivered fully online with live and recorded sessions. A few are hybrid — check each course page for details.",
  },
  {
    id: "f2",
    question: "Do I get placement assistance?",
    answer:
      "Selected programs include career services such as resume reviews, mock interviews, and hiring partner referrals.",
  },
  {
    id: "f3",
    question: "Can I pay in installments?",
    answer:
      "Flexible payment options are typically available. Reach out through the enquiry form for current plans.",
  },
  {
    id: "f4",
    question: "What are the eligibility requirements?",
    answer:
      "Requirements vary by program and level. Beginner tracks usually need no prior experience; advanced ones may expect a relevant background.",
  },
];
