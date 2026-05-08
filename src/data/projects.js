// Premium Interior Design Projects Data
// Replace image URLs with actual project photography

export const projects = [
  {
    id: "modern-banani-residence",
    title: "Modern Banani Residence",
    category: "Residential",
    location: "Banani, Dhaka",
    client: "Private Client",
    year: "2024",
    scope: "Full Interior Design",
    heroImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=90",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90",
    ],
    problem:
      "The clients, a young professional couple, sought a sanctuary that balanced the vibrancy of Dhaka with moments of tranquility. The existing 2,400 sq ft apartment lacked character and suffered from poor natural light distribution.",
    solution:
      "We reimagined the space as a series of flowing vignettes—each room distinct yet harmoniously connected. By removing a non-structural wall, we created an open living-dining axis flooded with southern light. Custom-designed jute and brass light fixtures pay homage to Bangladeshi craft traditions while maintaining a contemporary edge. The material palette—terrazzo, teak, and hand-troweled lime plaster—brings warmth and textural richness.",
    featured: true,
  },
  {
    id: "corporate-headquarters-gulshan",
    title: "Corporate Headquarters",
    category: "Corporate",
    location: "Gulshan 2, Dhaka",
    client: "Tech Startup",
    year: "2023",
    scope: "Workplace Strategy & Design",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=90",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=90",
    ],
    problem:
      "A rapidly scaling fintech company needed a workspace that could accommodate 120+ employees while fostering innovation, collaboration, and well-being in Dhaka's competitive talent market.",
    solution:
      "We crafted a biophilic office ecosystem with abundant greenery, natural materials, and adaptive zones. Open collaboration areas dissolve into focused quiet pods. Locally sourced cane and bamboo partitions provide acoustic privacy without visual heaviness. The result is a workspace that feels more like a creative studio than a traditional office.",
    featured: true,
  },
  {
    id: "dhanmondi-townhouse",
    title: "Heritage Townhouse",
    category: "Residential",
    location: "Dhanmondi, Dhaka",
    client: "Private Client",
    year: "2023",
    scope: "Restoration & Interior Design",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=90",
    ],
    problem:
      "A 1970s townhouse rich in architectural bones but trapped in outdated interiors. The challenge was to honor its heritage while meeting contemporary living standards.",
    solution:
      "Selective restoration preserved original terrazzo floors and teak joinery. We introduced a muted palette of whites and earth tones, allowing architectural details to breathe. Custom-designed furniture blends mid-century silhouettes with traditional Bangladeshi joinery techniques.",
    featured: true,
  },
  {
    id: "baridhara-penthouse",
    title: "Baridhara Penthouse",
    category: "Residential",
    location: "Baridhara DOHS, Dhaka",
    client: "Private Client",
    year: "2024",
    scope: "Full Interior & Custom Furniture",
    heroImage:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=90",
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&q=90",
    ],
    problem:
      "An expansive 3,800 sq ft penthouse with panoramic city views risked feeling cold and impersonal.",
    solution:
      "Layered textures—linen, velvet, aged leather—create intimate zones within the grand volume. Floor-to-ceiling sheer curtains soften the urban skyline. Every piece of furniture was custom-designed to the space's unique proportions.",
    featured: false,
  },
  {
    id: "boutique-hotel-cox-bazar",
    title: "Boutique Beach Resort",
    category: "Hospitality",
    location: "Cox's Bazar",
    client: "Hotel Group",
    year: "2023",
    scope: "Full Interior & FF&E",
    heroImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=90",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=90",
    ],
    problem:
      "A new 24-room resort needed to stand out in Cox's Bazar's crowded hospitality landscape.",
    solution:
      "Inspired by traditional fishing villages, we used woven rattan, driftwood accents, and natural stone. Each room feels like a private retreat with handcrafted details and locally sourced textiles.",
    featured: true,
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export const categories = ["All", "Residential", "Corporate", "Hospitality"];
