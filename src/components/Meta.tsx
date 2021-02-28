import Head from 'next/head';
// import { GA_TRACKING_ID } from 'lib/gtag';

interface LayoutProps {
  title: string;
  description: string;
  canonical: string;
  postImage?: string;
  schemaData?: string;
}

export const Meta: React.FC<LayoutProps> = ({
  title,
  description,
  canonical,
  postImage,
  schemaData,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{title} | Tepnology LLC</title>
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Patrick Tep" />
      <link rel="publisher" href="https://tepnology.com" />

      <link rel="canonical" href={`https://tepnology.com/${canonical}`} />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link rel="preconnect" href="https://cdn.usefathom.com" crossOrigin="" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color="#4a9885"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* opengraph - blog posts and portfolio */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://tepnology.com${canonical}`} />
      <meta property="og:image" content={postImage || ''} />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="article:author" content="Eric David Smith" />
      <meta property="fb:app_id" content="2054368228145418" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tepnology" />
      <meta name="twitter:creator" content="@tepnology" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={postImage || ''} />

      {/* structured data, careers, and company */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaData,
        }}
      />

      {/* google analytics */}
      {/* <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      /> */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js" /> */}

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});`,
        }}
      /> */}
      {/* google adsense */}
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      /> */}
    </Head>
  );
};
