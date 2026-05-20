interface Data {
    email: string,
    linkedin: string,
    resume: string
    github: string,
    leetcode: string,
    CGPA: number
}

export interface Projects {
    image?: string,
    caption?: string,
    name?: string,
    link?: string,
    github?: string,
    description?: string,
    features?: string[],
    technologies?: string[],
}

export const myData: Data = {
    email: 'vinayakch22@gmail.com',
    linkedin: 'vinayak-chakka',
    resume: 'https://drive.google.com/file/d/1vpE1VMeofQ5IQKpfqSdy-OlatZPShcMV',
    github: 'vinayakch22',
    leetcode: 'vinayak_ch_12',
    CGPA: 7.01
}

export const projects: Projects[] = [
    {
        image: 'PubliShelf.png', // Replace with your image
        caption: 'An online marketplace for books and collectible magazines featuring real-time antique auctions.',
        name: 'PubliShelf',
        link: 'https://publishelf.vercel.app',
        github: 'https://github.com/vinayakch22/PubliShelf', 
        description: 'PubliShelf is a comprehensive online marketplace designed for book and magazine enthusiasts. It features a robust real-time auction system for antique and collectible items, ensuring state consistency and conflict-free bidding for hundreds of concurrent users.',
        features: [
            'Real-time antique auction system supporting 500+ concurrent bidders.',
            'Live state updates across user sessions to minimize bid conflicts.',
            'Role-based dashboards for Buyers, Publishers, and Admins.',
            'Efficient management of over 1000 product listings and user transactions.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    },
    {
        image: 'hop-lynk.png',
        caption: 'A full-stack URL Shortener featuring per-link analytics, QR code generation, and custom aliases.',
        name: 'Hop Lynk',
        link: '#',
        github: 'https://github.com/vinayakch22/Hop-lynk',
        description: 'Hop Lynk is a production-ready MERN stack URL Shortener. It features secure JWT authentication, comprehensive per-link analytics with visual charts, QR code generation, and secure tracking without storing IP addresses.',
        features: [
            'Secure JWT authentication with HTTP-only cookies and bcrypt password hashing.',
            'URL management with custom aliases, expiration dates, and active/inactive toggles.',
            'Advanced per-link analytics tracking browsers, OS, devices, and countries.',
            'Responsive UI including dark/light mode, toast notifications, and skeleton loaders.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        image: 'iot.png', // Replace with your image
        caption: 'An IoT-based industrial safety and predictive maintenance solution to monitor machine health.',
        name: 'IoT Smart Safety Monitoring System',
        link: '#',
        github: 'https://github.com/vinayakch22/Smart-Safety-System',
        description: 'This IoT Smart Safety Monitoring System is built to ensure industrial workplace safety and enable predictive maintenance. By utilizing a network of sensors and microcontrollers, it continuously monitors machine conditions and alerts personnel to potential hazards using machine learning risk-score models.',
        features: [
            'Continuous multi-sensor monitoring using ESP32, ADXL345, DHT11, and sound sensors.',
            'Machine learning-based risk scoring for predictive maintenance.',
            'WiFi-enabled anomaly detection and alerts via Raspberry Pi.',
            'Capable of significantly reducing anomaly detection time during 24/7 cycles.'
        ],
        technologies: ['IoT', 'ESP32', 'Raspberry Pi', 'Machine Learning']
    }
]

export const featuredProjects: Projects[] = [
    {
        image: 'PubliShelf.png', // Replace with your image
        caption: 'An online marketplace for books and collectible magazines featuring real-time antique auctions.',
        name: 'PubliShelf',
        link: '#',
        github: 'https://github.com/vinayakch22/PubliShelf',
        description: 'PubliShelf is a comprehensive online marketplace designed for book and magazine enthusiasts. It features a robust real-time auction system for antique and collectible items, ensuring state consistency and conflict-free bidding for hundreds of concurrent users.',
        features: [
            'Real-time antique auction system supporting 500+ concurrent bidders.',
            'Live state updates across user sessions to minimize bid conflicts.',
            'Role-based dashboards for Buyers, Publishers, and Admins.',
            'Efficient management of over 1000 product listings and user transactions.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    },
    {
        image: 'hop-lynk.png',
        caption: 'A full-stack URL Shortener featuring per-link analytics, QR code generation, and custom aliases.',
        name: 'Hop Lynk',
        link: '#',
        github: 'https://github.com/vinayakch22/Hop-lynk',
        description: 'Hop Lynk is a production-ready MERN stack URL Shortener. It features secure JWT authentication, comprehensive per-link analytics with visual charts, QR code generation, and secure tracking without storing IP addresses.',
        features: [
            'Secure JWT authentication with HTTP-only cookies and bcrypt password hashing.',
            'URL management with custom aliases, expiration dates, and active/inactive toggles.',
            'Advanced per-link analytics tracking browsers, OS, devices, and countries.',
            'Responsive UI including dark/light mode, toast notifications, and skeleton loaders.'
        ],
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        image: 'iot.png', // Replace with your image
        caption: 'An IoT-based industrial safety and predictive maintenance solution to monitor machine health.',
        name: 'IoT Smart Safety Monitoring System',
        link: '#',
        github: 'https://github.com/vinayakch22/Smart-Safety-System',
        description: 'This IoT Smart Safety Monitoring System is built to ensure industrial workplace safety and enable predictive maintenance. By utilizing a network of sensors and microcontrollers, it continuously monitors machine conditions and alerts personnel to potential hazards using machine learning risk-score models.',
        features: [
            'Continuous multi-sensor monitoring using ESP32, ADXL345, DHT11, and sound sensors.',
            'Machine learning-based risk scoring for predictive maintenance.',
            'WiFi-enabled anomaly detection and alerts via Raspberry Pi.',
            'Capable of significantly reducing anomaly detection time during 24/7 cycles.'
        ],
        technologies: ['IoT', 'ESP32', 'Raspberry Pi', 'Machine Learning']
    }
];