import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function Home() {
  return (
    <Layout noFooter={true} wrapperClassName="nilai-home">
      <Head>
        <title>尼来 nilai</title>
        <link
          rel="dwebapp"
          href="https://source.dwebdapp.com/dweb-browser-apps/dweb-apps/nilai/3-1.0.27/metadata.json"
        />
        <meta name="color-scheme" content="light dark" />
      </Head>

      <div className="container">
        <header>
          <h1 id="banner">
            <small>尼来</small> 未来已来
          </h1>
        </header>
        <main>
          <blockquote>站点即将上线，敬请期待 💗</blockquote>
          <div className="links">
            <button className="link">
              <a href="https://docs.dweb-browser.org/" target="_blank">
                Dweb Browser
              </a>
            </button>
            <button className="link">
              <a href="https://dweb.ni-lai.com/" target="_blank">
                Nilai Dweb Metaverse
              </a>
            </button>
            <button className="link">
              <a href="/docs/privacy/privacy_policy">
                Nilai Privacy Policy
              </a>
            </button>
          </div>
        </main>
        <footer>
          <a
            id="beian"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            className="link"
          >
            粤ICP备2025376698号
          </a>
        </footer>
      </div>

      <style>{`
        nav[class*="navbar"] {
          display: none !important;
        }
        div[class*="navbar"] {
          display: none !important;
        }
        .nilai-home {
          height: 100%;
          display: flex;
          padding: 1rem;
          background-color: #e1bee7;
          justify-content: center;
        }
        .container {
          flex: 1;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          max-width: 68rem;
          background: linear-gradient(316deg, #9c27b0, transparent);
          overflow: hidden;
          border-radius: 4rem;
        }
        * {
          box-sizing: border-box;
        }
        header {
          min-height: max(10rem, 30%);
          padding: 2rem 4rem;
        }
        header h1 {
          font-size: 5rem;
        }
        blockquote {
          border-left: 0.5rem solid #e91e63;
          padding: 0.25rem 0.8rem;
          margin: 0;
        }
        main {
          flex-grow: 1;
          padding: 0 4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2rem;
        }
        .links {
          display: flex;
          gap: 1em;
          flex-wrap: wrap;
        }
        .link {
          background: linear-gradient(270deg, #e91e63, transparent);
          border: 0;
          display: inline-block;
          color: #fff;
          padding: 0.8rem;
          border-radius: 0 1.6rem 1.6rem;
        }
        .link a {
          color: inherit;
          text-decoration: none;
        }
        footer {
          flex-shrink: 0;
          padding: 2rem 4rem;
          display: flex;
          justify-content: flex-end;
        }
        #beian {
          text-decoration: none;
          font-size: 0.9rem;
        }
      `}</style>
    </Layout>
  );
}
