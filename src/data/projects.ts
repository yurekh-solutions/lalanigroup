import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

export interface Project {
  id: number;
  slug: string;
  name: string;
  location: string;
  area: string;
  rera: string;
  reraNumber2?: string;
  type: string;
  status: "Ongoing" | "Ready Possession" | "Upcoming";
  category: "residential" | "commercial" | "completed";
  price: string;
  possession: string;
  image: string;
  images?: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  specifications?: {
    title: string;
    details: string[];
  }[];
  configuration?: {
    type: string;
    area: string;
    price: string;
  }[];
  nearbyLocations?: {
    name: string;
    distance: string;
  }[];
}

export const projects: Project[] = [
  // LALANI GOODWILL - Ongoing Project
  {
    id: 1,
    slug: "lalani-goodwill",
    name: "Lalani Goodwill",
    location: "J.B. Nagar, Andheri (E)",
    area: "Andheri East",
    rera: "P51800079065",
    reraNumber2: "P51800078852",
    type: "1BHK, 2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "₹85 Lakhs Onwards",
    possession: "December 2025",
    image: project1,
    images: [project1, hero1, hero2],
    description: "Lalani Goodwill is a premium residential project offering meticulously designed 1BHK, 2BHK & 3BHK apartments in the heart of Andheri East. With modern amenities and strategic location near J.B. Nagar metro station, it offers the perfect blend of luxury and convenience for Mumbai's urban lifestyle.",
    highlights: [
      "MahaRERA Approved - P51800079065 & P51800078852",
      "Prime Location near J.B. Nagar Metro Station",
      "Walking distance to shopping malls and commercial hubs",
      "Well-connected to Western Express Highway",
      "Close to reputed schools and hospitals",
      "Modern architecture with spacious layouts",
      "40+ years of Lalani Group legacy",
      "Earthquake resistant RCC framed structure"
    ],
    amenities: [
      "24/7 Security with CCTV Surveillance",
      "Modern Fitness Center & Gym",
      "Landscaped Gardens & Kids Play Area",
      "Clubhouse with Indoor Games",
      "Swimming Pool",
      "Covered Car Parking",
      "Power Backup for Common Areas",
      "Intercom Facility",
      "Rainwater Harvesting",
      "Fire Fighting Systems",
      "High-Speed Elevators",
      "Jogging Track"
    ],
    specifications: [
      {
        title: "Living & Dining",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint finish",
          "Large windows for natural light"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite platform with stainless steel sink",
          "Ceramic wall tiles up to 2 feet above platform",
          "Provision for water purifier and exhaust fan"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Premium quality ceramic wall and floor tiles",
          "Designer sanitary fittings",
          "Provision for geysers"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "450-500 sq.ft",
        price: "₹85 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "650-750 sq.ft",
        price: "₹1.15 Cr onwards"
      },
      {
        type: "3 BHK",
        area: "950-1100 sq.ft",
        price: "₹1.65 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "J.B. Nagar Metro Station", distance: "5 min walk" },
      { name: "Andheri Railway Station", distance: "10 min" },
      { name: "Phoenix Market City", distance: "8 min" },
      { name: "International Airport", distance: "15 min" },
      { name: "Western Express Highway", distance: "5 min" },
      { name: "Powai Lake", distance: "20 min" }
    ]
  },

  // LALANI BUSINESS PARK - Ongoing Commercial Project
  {
    id: 2,
    slug: "lalani-business-park",
    name: "Lalani Business Park",
    location: "Khar (W)",
    area: "Khar West",
    rera: "P51800033063",
    type: "Commercial Spaces",
    status: "Ongoing",
    category: "commercial",
    price: "₹1.2 Cr Onwards",
    possession: "June 2026",
    image: project2,
    images: [project2, hero1, project3],
    description: "Lalani Business Park is a premium commercial development in the heart of Khar West. Offering state-of-the-art office spaces with modern infrastructure, this project is ideal for businesses looking for a prestigious address in Mumbai's prime business district.",
    highlights: [
      "MahaRERA Approved - P51800033063",
      "Prime commercial location in Khar",
      "Close to Khar Railway Station",
      "Modern office spaces",
      "High-speed elevators",
      "Ample parking space",
      "24/7 power backup",
      "Central air conditioning provision"
    ],
    amenities: [
      "High-Speed Elevators",
      "24/7 Security",
      "CCTV Surveillance",
      "Basement Parking",
      "Power Backup",
      "Fire Fighting Systems",
      "Modern Lobby",
      "Cafeteria",
      "Conference Rooms",
      "High-Speed Internet Ready"
    ],
    specifications: [
      {
        title: "Office Spaces",
        details: [
          "Flexible floor plans",
          "False ceiling ready",
          "Provision for AC",
          "Ample natural light"
        ]
      }
    ],
    configuration: [
      {
        type: "Office Space",
        area: "500-2000 sq.ft",
        price: "₹1.2 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Khar Railway Station", distance: "5 min" },
      { name: "Linking Road", distance: "3 min" },
      { name: "Bandra-Kurla Complex", distance: "15 min" },
      { name: "International Airport", distance: "20 min" }
    ]
  },

  // VELENTINE APARTMENT - Ready Possession
  {
    id: 3,
    slug: "velentine-apartment",
    name: "Velentine Apartment 1 - Wing D",
    location: "Malad (E)",
    area: "Malad East",
    rera: "P51800028866",
    type: "1BHK & 2BHK Residences",
    status: "Ready Possession",
    category: "completed",
    price: "₹75 Lakhs Onwards",
    possession: "Ready to Move - OC Received",
    image: project3,
    images: [project3, hero2, project1],
    description: "Velentine Apartment Wing D offers ready-to-move-in 1BHK and 2BHK apartments in Malad East. With OC received, these homes are perfect for immediate possession. The project features modern amenities and is strategically located with excellent connectivity to major landmarks.",
    highlights: [
      "Ready Possession - OC Received",
      "MahaRERA Approved - P51800028866",
      "Move-in ready apartments",
      "Near Malad Railway Station",
      "Close to schools, hospitals & shopping centers",
      "Well-planned residential complex",
      "Excellent connectivity to Western Express Highway",
      "Family-friendly neighborhood"
    ],
    amenities: [
      "24/7 Security",
      "CCTV Surveillance",
      "Covered Parking",
      "Power Backup",
      "Lift Facility",
      "Children's Play Area",
      "Landscaped Gardens",
      "Intercom System",
      "Water Storage & Pump",
      "Fire Safety Equipment"
    ],
    specifications: [
      {
        title: "Flooring",
        details: [
          "Vitrified tiles in living and dining",
          "Anti-skid ceramic tiles in bathrooms",
          "Kitchen with ceramic tiles"
        ]
      },
      {
        title: "Doors & Windows",
        details: [
          "Main door with premium finish",
          "Internal doors flush type",
          "UPVC/Aluminum windows with mosquito mesh"
        ]
      },
      {
        title: "Electrical",
        details: [
          "Concealed copper wiring",
          "Modular switches",
          "Sufficient light and power points"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "400-480 sq.ft",
        price: "₹75 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "600-700 sq.ft",
        price: "₹1.05 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Malad Railway Station", distance: "10 min" },
      { name: "Inorbit Mall", distance: "12 min" },
      { name: "Infiniti Mall", distance: "15 min" },
      { name: "Link Road", distance: "5 min" },
      { name: "Western Express Highway", distance: "8 min" },
      { name: "Schools & Hospitals", distance: "5-10 min" }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.status === "Ongoing").slice(0, 3);
};
