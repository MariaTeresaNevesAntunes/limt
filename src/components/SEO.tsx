import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEO = ({ 
  title, 
  description, 
  canonical,
  type = "website" 
}: SEOProps) => {
  const siteTitle = "MTNA – Matemática Sem Limites";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
