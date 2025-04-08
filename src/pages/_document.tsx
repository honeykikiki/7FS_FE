import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ScriptTag />
        <Main />
        <NextScript />
        <div id="root-alert-portal"></div>
        <div id="root-bottom-sheet-portal"></div>
        <div id="root-loader-portal"></div>
        <div id="root-portal"></div>
      </body>
    </Html>
  );
}

const ScriptTag = () => {
  const codeToRunOnClient = `(function() {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
