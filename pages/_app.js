import Head from 'next/head';


function GlobalStyle() {
    return (
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: #212931; 
        border-radius: 10px;
      }
       
      ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px;
      }
      /* ./App fit Height */ 
    `}</style>
    );
};

const Page = (props) => (
    <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
    </>
);

export default function CustomApp({ Component, pageProps }) {
    return (
        <>
            <Page />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}