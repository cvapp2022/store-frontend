import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head />
        <body className='bg-gradient'>
          <Main />
          <NextScript />
        </body> 
      </Html>
    )
  }
}

export default MyDocument
