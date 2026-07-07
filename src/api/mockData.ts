import type { Course, Testimonial, FaqItem } from "@/types";

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
      "Live and recorded sessions by industry experts",
      "Industry capstone project with real datasets",
      "Dedicated placement assistance and career coaching",
      "Flexible weekend schedule for working professionals",
      "AWS and Azure cloud lab environments included",
      "Peer cohort learning with study groups",
    ],
    syllabus: [
      { module: "Foundations", topics: ["Python", "Statistics", "Linear Algebra", "Probability"] },
      { module: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Model Tuning", "Feature Engineering"] },
      { module: "Deep Learning", topics: ["Neural Networks", "CNNs", "RNNs", "NLP"] },
      { module: "Data Engineering", topics: ["SQL", "ETL Pipelines", "Cloud Basics", "Data Warehousing"] },
      { module: "MLOps & Deployment", topics: ["Docker", "CI/CD", "Model Serving", "Monitoring"] },
      { module: "Capstone", topics: ["Problem Framing", "End-to-End Pipeline", "Deployment", "Presentation"] },
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
    highlights: [
      "Case-based learning from real companies",
      "Dashboarding with Tableau and Power BI",
      "1:1 mentor support every week",
      "Business simulation projects",
    ],
    syllabus: [
      { module: "Analytics Basics", topics: ["Excel", "Descriptive Stats", "Data Cleaning"] },
      { module: "Visualization", topics: ["Dashboards", "Storytelling", "Tableau", "Power BI"] },
      { module: "Applied Projects", topics: ["Marketing Analytics", "Operations", "Finance"] },
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
      "A flexible, structured MBA with electives across finance, marketing, and operations.",
    highlights: [
      "Multiple elective specialisations",
      "Peer cohort learning",
      "Career services and alumni network",
      "Industry guest lectures every month",
    ],
    syllabus: [
      { module: "Core", topics: ["Finance", "Marketing", "Strategy", "Economics"] },
      { module: "Electives", topics: ["Analytics", "HR", "Operations", "Entrepreneurship"] },
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
    highlights: [
      "Project portfolio with 5+ deployable apps",
      "Code reviews from senior engineers",
      "Interview preparation and mock rounds",
      "GitHub profile optimisation",
    ],
    syllabus: [
      { module: "Frontend", topics: ["HTML/CSS", "React", "TypeScript", "Tailwind"] },
      { module: "Backend", topics: ["Node.js", "REST APIs", "Databases", "Auth"] },
      { module: "DevOps", topics: ["Git", "Docker", "CI/CD", "Deployment"] },
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
    highlights: [
      "Live campaign simulations with real budgets",
      "Google and Meta ad certifications",
      "Portfolio reviews by agency leads",
      "Analytics and attribution deep dives",
    ],
    syllabus: [
      { module: "Acquisition", topics: ["SEO", "Paid Ads", "Social Media", "Content"] },
      { module: "Retention", topics: ["Email", "CRM", "Analytics", "Attribution"] },
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
    highlights: [
      "Hands-on labs on AWS, Azure, and GCP",
      "Architecture review sessions",
      "Certification preparation tracks",
      "Infrastructure-as-code with Terraform",
    ],
    syllabus: [
      { module: "Foundations", topics: ["Networking", "Compute", "Storage", "IAM"] },
      { module: "Architecture", topics: ["Microservices", "Serverless", "Containers"] },
      { module: "Operations", topics: ["CI/CD", "Monitoring", "Security", "Cost Optimisation"] },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Data Analyst → Senior Data Scientist at Flipkart",
    quote:
      "The weekend schedule let me upskill without pausing my job. The capstone project gave me something real to show in interviews — I got three offers within two months of graduating. The mentor support was incredible.",
    avatarColor: "#2f52f5",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Business Analyst → Product Manager at Razorpay",
    quote:
      "Clear structure, responsive mentors, and projects that mirror actual work. The career coaching helped me transition from analytics to product management. Best investment I've made in my career.",
    avatarColor: "#ff9a1f",
  },
  {
    id: "t3",
    name: "Rahul Verma",
    role: "Junior Dev → Cloud Engineer at Amazon",
    quote:
      "I came in knowing basic Python and left with AWS certifications and a portfolio of deployed projects. The code reviews alone were worth the entire fee. Landed my dream role in 4 months.",
    avatarColor: "#16a34a",
  },
  {
    id: "t4",
    name: "Sneha Gupta",
    role: "Fresher → ML Engineer at Microsoft",
    quote:
      "As a recent graduate, I was worried about competing with experienced professionals. The structured curriculum and hands-on projects gave me the confidence and skills to land a role at Microsoft.",
    avatarColor: "#7c3aed",
  },
  {
    id: "t5",
    name: "Karthik Iyer",
    role: "Manual Tester → DevOps Engineer at Infosys",
    quote:
      "Transitioning from manual testing to DevOps seemed impossible until I joined the cloud computing track. The Terraform and Kubernetes labs were exactly what interviewers asked about.",
    avatarColor: "#06b6d4",
  },
  {
    id: "t6",
    name: "Ananya Sharma",
    role: "Marketing Exec → Growth Lead at a Series B Startup",
    quote:
      "The digital marketing program didn't just teach theory — we ran live campaigns with real budgets. That hands-on experience is what got me promoted to lead growth for the entire company.",
    avatarColor: "#e11d48",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "Are these programs fully online?",
    answer:
      "Most programs are delivered fully online with live weekend sessions and recorded lectures you can access anytime. A few programs offer optional hybrid components — check each course page for specifics.",
  },
  {
    id: "f2",
    question: "Do I get placement assistance?",
    answer:
      "Yes. Selected programs include dedicated career services: resume reviews, mock interviews, portfolio feedback, and referrals to our network of 200+ hiring partners across industries and geographies.",
  },
  {
    id: "f3",
    question: "Can I pay in installments?",
    answer:
      "Absolutely. We offer flexible EMI options through partner banks and NBFCs. Interest-free plans are available for select programs. Reach out through the enquiry form for current payment plans.",
  },
  {
    id: "f4",
    question: "What are the eligibility requirements?",
    answer:
      "Requirements vary by program. Beginner-level certificates need no prior experience. Intermediate and advanced programs may expect a relevant degree or work background. We'll help you find the right fit during your advisory call.",
  },
  {
    id: "f5",
    question: "How much time do I need to commit each week?",
    answer:
      "Most programs are designed for working professionals and require 8–12 hours per week. Live sessions typically happen on weekends, and all recordings are available for asynchronous learning.",
  },
  {
    id: "f6",
    question: "Will I get a certificate on completion?",
    answer:
      "Yes. Every program awards a verified digital certificate on successful completion. Degree programs award accredited postgraduate qualifications. Several tracks also prepare you for industry certifications (AWS, Azure, Google Cloud).",
  },
  {
    id: "f7",
    question: "Can I switch programs after enrolling?",
    answer:
      "We offer a switch window during the first two weeks of any program. If you realise a different track suits you better, our advisors will help you transition seamlessly at no extra cost.",
  },
  {
    id: "f8",
    question: "Is there a refund policy?",
    answer:
      "We offer a 14-day no-questions-asked refund policy from your programme start date. If you're not satisfied with the learning experience, we'll process a full refund within 7 business days.",
  },
];
