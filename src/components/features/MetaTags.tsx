import Head from 'next/head';

interface MetaTagsInterface {
  pageTitle: string;
  pageDescription: string;
  currentUrl: string;
  image?: string;
}

export default function MetaTags(props: MetaTagsInterface) {
  const { pageTitle, pageDescription, currentUrl, image } = props;
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl.replace('www.', '')} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl.replace('www.', '')} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={image} />

      <link rel="canonical" href={currentUrl.replace('www.', '')} />
    </Head>
  );
}
