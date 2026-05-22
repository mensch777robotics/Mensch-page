export interface Product {
    id: string;
    slug: string;
    category: string;
    name: string;
    tagline: string;
    shortDescription: string;
    image: string;
    specs: Array<{ label: string; value: string }>;
    features: Array<{ title: string; desc: string }>;
    accent: string;
    bgAccent: string;
    gradient: string;
}

export const products: Product[] = [
    {
        id: "01",
        slug: "reception-guidance",
        category: "Service & Hospitality",
        name: "Reception & Guidance Robot",
        tagline: "First Impressions, Powered by AI",
        shortDescription: "Intelligent host delivering exceptional customer experiences with autonomous navigation and personalized interactions.",
        image: "/Reception-Guidance.jpeg",
        specs: [
            { label: "Height", value: "5 feet" },
            { label: "Battery", value: "12 Hr" }
        ],
        features: [
            { title: "Smart Customer Service", desc: "Handles enquiries and provides information like a professional receptionist." },
            { title: "Autonomous Navigation", desc: "Safely guides visitors to their destinations with obstacle avoidance." },
            { title: "Personalized Responses", desc: "Learns preferences and offers tailored suggestions." }
        ],
        accent: "text-blue-500",
        bgAccent: "bg-blue-500",
        gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
        id: "02",
        slug: "teaching-assistant",
        category: "Education",
        name: "Teaching Assistant Robot",
        tagline: "Your Partner in Modern Education",
        shortDescription: "Personalized AI tutor adapting to each student's learning pace with visual explanations and progress tracking.",
        image: "/deployments/Robi_childrens.jpeg",
        specs: [
            { label: "Focus", value: "K-12 Education" },
            { label: "Display", value: "10\" Touch Screen" }
        ],
        features: [
            { title: "Adaptive Learning", desc: "Explains concepts tailored to student's grade and understanding level." },
            { title: "Visual Teaching", desc: "Integrates videos and visual aids for better comprehension." },
            { title: "Teacher Support", desc: "Provides progress insights and supports classroom learning." }
        ],
        accent: "text-emerald-500",
        bgAccent: "bg-emerald-500",
        gradient: "from-emerald-500/20 to-emerald-600/20"
    },
    {
        id: "03",
        slug: "research-education",
        category: "Research & Development",
        name: "Educational & Research Robot",
        tagline: "Build. Learn. Innovate.",
        shortDescription: "Modular platform for hands-on STEM and AI learning, empowering students to explore and create.",
        image: "/MAX_Robot.png",
        specs: [
            { label: "OS", value: "Ubuntu/ROS2" }
        ],
        features: [
            { title: "Modular Design", desc: "Students reconfigure components for custom applications." },
            { title: "STEM & AI Focus", desc: "Hands-on learning in robotics, coding, and artificial intelligence." },
            { title: "Multiple Variants", desc: "Automatic and autonomous versions for different skill levels." }
        ],
        accent: "text-purple-500",
        bgAccent: "bg-purple-500",
        gradient: "from-purple-500/20 to-purple-600/20"
    }
];
