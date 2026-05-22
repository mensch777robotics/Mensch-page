export interface CareerPosition {
    slug: string;
    title: string;
    department: string;
    type: string;
    teaser: string;
    overview: string;
    responsibilities: string[];
    requirements: string[];
}

export const careerPositions: CareerPosition[] = [
    {
        slug: 'robotics-engineer',
        title: 'Robotics Engineer',
        department: 'Hardware & Engineering',
        type: 'Full-Time',
        teaser:
            'CAD design, fabrication and assembly of robots. Hands-on experience with Jetson Nano, Raspberry Pi, and ROS hardware projects.',
        overview:
            'We are looking for a hands-on Robotics Engineer to bridge the gap between digital intelligence and physical execution. You will be responsible for the mechanical design, prototyping, and hardware integration of our robotic systems.',
        responsibilities: [
            'Lead the CAD design, fabrication, and physical assembly of complex robotic structures.',
            'Integrate and test embedded hardware and single-board computers.',
            'Bring virtual designs to life through rapid hardware prototyping and iterative testing.',
        ],
        requirements: [
            'Proven hands-on experience with hardware platforms like NVIDIA Jetson Nano, Raspberry Pi, and microcontrollers.',
            'Practical, foundational experience implementing ROS / ROS 2 in hardware-centric projects.',
            'Strong problem-solving skills when working with custom molds, materials, and mechanical assemblies.',
        ],
    },
    {
        slug: 'software-engineer',
        title: 'Software Engineer',
        department: 'Software & AI',
        type: 'Full-Time',
        teaser:
            'Curious & adaptable, strong communication, and experience in fast iteration and app deployment from scratch.',
        overview:
            'We need a versatile Software Engineer who thrives in a fast-paced environment. You will be building robust architectures from scratch, deploying applications rapidly, and helping our robots think, learn, and communicate effectively.',
        responsibilities: [
            'Design, build, and deploy applications and API integrations from the ground up.',
            'Iterate rapidly on features based on real-world deployment data and user feedback.',
            'Collaborate across hardware and AI teams to ensure seamless system integration.',
        ],
        requirements: [
            'A curious, highly adaptable mindset—you love learning new stacks and solving ambiguous problems.',
            'Strong communication skills and a team-first attitude.',
            'Demonstrated experience in fast iteration cycles and taking apps completely from concept to live deployment.',
        ],
    },
    {
        slug: 'operations-manager',
        title: 'Operations Manager',
        department: 'Growth & Operations',
        type: 'Full-Time',
        teaser:
            'Fundraising, strategy, compliance, marketing, and more. Highly adaptable pragmatist and people person.',
        overview:
            'Behind every great robot is a finely-tuned operational engine. We are seeking a dynamic Operations Manager to work directly with the leadership team, engaging with everything from startup compliance to market strategy and fundraising initiatives.',
        responsibilities: [
            'Assist in preparing strategy documents, pitch decks, and materials for fundraising/grants.',
            'Support company compliance, administrative tasks, and daily operational workflows.',
            'Contribute to marketing campaigns, community outreach, and brand positioning.',
        ],
        requirements: [
            'A highly adaptable pragmatist who figures out how to get things done, no matter the task.',
            'A natural "people person" with excellent interpersonal and relationship-building skills.',
            'Strong organizational skills with a keen interest in startup ecosystems, business strategy, and execution.',
        ],
    },
];

const slugAliases: Record<string, string> = {
    'operations-manager-intern': 'operations-manager',
};

export const getCareerBySlug = (slug: string): CareerPosition | undefined => {
    const resolved = slugAliases[slug] ?? slug;
    return careerPositions.find((position) => position.slug === resolved);
};
