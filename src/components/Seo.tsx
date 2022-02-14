import React from 'react';
import Head from 'next/head';
import {withRouter, Router} from 'next/router';

export interface SeoProps {
  isHomePage: boolean;
  title: string;
  description?: string;
  image?: string;
  // jsonld?: JsonLDType | Array<JsonLDType>;
  children?: React.ReactNode;
}

const Seo = withRouter(
  ({
    isHomePage,
    title,
    description = '',
    image = '/logo-og.png',
    router,
    children,
  }: SeoProps & {router: Router}) => (
    <Head>
      {/* DEFAULT */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* TITLE */}
      {title != null && (
        <title key="title">
          {isHomePage
            ? 'Layer0 Documentation'
            : `${title} | Layer0 Documentation`}
        </title>
      )}

      {/* DESCRIPTION */}
      {description != null && (
        <meta name="description" key="description" content={description} />
      )}

      {/* <link rel="icon" type="image/x-icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />  @todo favicon */}
      {/* <meta property="fb:app_id" content="623268441017527" /> */}

      {/* OPEN GRAPH */}
      {/* <meta property="og:type" key="og:type" content="website" />
			<meta
				property="og:url"
				key="og:url"
				content={`https://beta.reactjs.org${router.pathname}`}
			/>
			{title != null && (
				<meta property="og:title" content={title} key="og:title" />
			)}
			{description != null && (
				<meta
					property="og:description"
					key="og:description"
					content={description}
				/>
			)}

			<meta
				property="og:image"
				key="og:image"
				content={`https://beta.reactjs.org${image}`}
			/> */}

      {/* TWITTER */}
      {/* <meta
				name="twitter:card"
				key="twitter:card"
				content="summary_large_image"
			/>
			<meta name="twitter:site" key="twitter:site" content="@reactjs" />
			<meta name="twitter:creator" key="twitter:creator" content="@reactjs" />
			{title != null && (
				<meta name="twitter:title" key="twitter:title" content={title} />
			)}
			{description != null && (
				<meta
					name="twitter:description"
					key="twitter:description"
					content={description}
				/>
			)}

			<meta
				name="twitter:image"
				key="twitter:image"
				content={`https://beta.reactjs.org${image}`}
			/> */}

      {children}
    </Head>
  )
);

export default Seo;
