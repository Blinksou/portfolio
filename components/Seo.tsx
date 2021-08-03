import Head from 'next/head';

type SeoProps = {
  title?: string;
  description: string;
};

const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE || "My portfolio";

const Seo: React.FC<SeoProps> = (props) => {
  return (
    <Head>
      <title>
        {APP_TITLE} {props?.title && "- " + props.title}
      </title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
