// import { Html, Head, Main, NextScript } from 'next/document'
// import Header from './header'
// import { AuthProvider } from "./authContext"

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Header />
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

// _document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
