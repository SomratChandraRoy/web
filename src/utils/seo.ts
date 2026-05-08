import { site } from "@/data/site";

type MetaOptions = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const stripTrailingSlash = (value: string) =>
  value.endsWith("/") ? value.slice(0, -1) : value;

const ensureLeadingSlash = (value: string) =>
  value.startsWith("/") ? value : `/${value}`;

const toAbsoluteUrl = (value: string | undefined, baseUrl: string) => {
  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${baseUrl}${ensureLeadingSlash(value)}`;
};

export const buildCanonicalUrl = (pathname?: string) => {
  const baseUrl = stripTrailingSlash(site.url || "https://example.com");
  if (!pathname) return baseUrl;
  return `${baseUrl}${ensureLeadingSlash(pathname)}`;
};

export const buildPageTitle = (title?: string) => {
  if (!title) {
    return `${site.name} | ${site.tagline}`;
  }
  return `${title} | ${site.name}`;
};

export const buildMeta = ({
  title,
  description,
  image,
  url,
}: MetaOptions = {}) => {
  const metaTitle = buildPageTitle(title);
  const metaDescription = description || site.description;
  const baseUrl = stripTrailingSlash(site.url || "https://example.com");
  const metaUrl = url || baseUrl;
  const metaImage = toAbsoluteUrl(image || site.ogImage, baseUrl);
  const keywords = Array.isArray(site.keywords) ? site.keywords.join(", ") : "";

  const meta = [
    { title: metaTitle },
    { name: "description", content: metaDescription },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { name: "theme-color", content: site.themeColor },
    { name: "robots", content: "index, follow" },
    { name: "author", content: site.legalName },
    { property: "og:type", content: "website" },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:url", content: metaUrl },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: site.locale },
    ...(metaImage ? [{ property: "og:image", content: metaImage }] : []),
    ...(metaImage ? [{ property: "og:image:alt", content: metaTitle }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:description", content: metaDescription },
    ...(metaImage ? [{ name: "twitter:image", content: metaImage }] : []),
    ...(metaImage ? [{ name: "twitter:image:alt", content: metaTitle }] : []),
  ];

  return meta;
};

const cleanObject = (value: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) =>
      Array.isArray(entry)
        ? entry.length > 0
        : entry !== undefined && entry !== null && entry !== "",
    ),
  );
};

export const buildOrganizationSchema = () => {
  const baseUrl = stripTrailingSlash(site.url || "https://example.com");
  const sameAs = Object.values(site.social).filter(Boolean);
  const address = cleanObject({
    "@type": "PostalAddress",
    streetAddress: site.address?.street,
    addressLocality: site.address?.city,
    addressRegion: site.address?.area,
    postalCode: site.address?.postalCode,
    addressCountry: site.address?.country,
  });

  const schema = cleanObject({
    "@context": "https://schema.org",
    "@type": site.schemaType,
    name: site.legalName,
    url: baseUrl,
    description: site.description,
    image: toAbsoluteUrl(site.ogImage, baseUrl),
    logo: toAbsoluteUrl(site.logo, baseUrl),
    telephone: site.phone,
    email: site.email,
    address: Object.keys(address).length > 1 ? address : undefined,
    sameAs,
  });

  return JSON.stringify(schema);
};
