import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DefaultDocumentIProps
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../components/styles/GlobalStyle";

interface StyledDocument extends DefaultDocumentIProps {
  styleTags: React.ReactElement<{}>;
}

export default class MyDocument extends Document<StyledDocument> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
