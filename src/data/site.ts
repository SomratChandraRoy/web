const defaultSiteUrl =
  import.meta.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const site = {
  name: "Building Design Studio",
  legalName: "Building Design Studio",
  tagline: "Interior & Building Design in Bangladesh",
  logo: "/logo.png",
  keywords: [
    "building design Bangladesh",
    "interior design Dhaka",
    "architecture studio Bangladesh",
    "residential interior design",
    "commercial interior design",
    "hospitality design",
    "custom furniture Bangladesh",
  ],
  description:
    "Building Design Studio is a Dhaka-based interior and architectural design practice creating bespoke residential, commercial, and hospitality spaces across Bangladesh.",
  shortDescription:
    "A Dhaka-based studio delivering bespoke interior and building design across Bangladesh.",
  url: defaultSiteUrl,
  locale: "en_US",
  themeColor: "#B85E44",
  email: "info.nextgenarchitect@gmail.com",
  phone: "01323-273110",
  whatsapp: "+880 1323-273110",
  address: {
    street: "konakhola Upozila, Keraniganj",
    area: "Dhaka",
    city: "Dhaka",
    postalCode: "1310",
    country: "Bangladesh",
    serviceArea: "Dhaka, Dhaka Division, Bangladesh",
  },
  social: {
    facebook: "https://www.facebook.com/buildingdesigninbangladesh",
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
    whatsapp: "https://wa.me/8801323273110",
  },
  ogImage:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=90",
  schemaType: "ProfessionalService",
};
