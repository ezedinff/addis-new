The Link component enables client-side navigation between two pages in the same Next.js app.
```
import Link from 'next/link'
    <Link href="/">
        <a>Back to home</a>
    </Link>
```

## Assets
Next.js can serve static files, like images, under the top-level public directory. Files inside **public** can be referenced from the root of the application similar to pages.
```
<img src="/vercel.svg" alt="Vercel Logo" className="logo" />
```
The **public** directory is also useful for robots.txt, Google Site Verification, and any other static assets. 

## Metadata
What if we wanted to modify the metadata of the page, such as the <title> HTML tag?

```
import Head from 'next/head'
    <Head>
       <title>First Post</title>
    </Head>
```
## Adding CSS to a component
the CSS file name must end with .module.css. eg layout.module.css.
```
import styles from './layout.module.css'
<div className={styles.container}>{children}</div>
```
we can also use style-jsx
```
<style jsx>{`
  …
`}</style>
```
### Global Styles
To load global CSS files, create a file called _app.js under pages

Using classnames library to toggle classes

classnames is a simple library that lets you toggle class names easily. You can install it using npm install classnames or yarn add classnames.

```
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
```
## Pre-rendering and Data Fetching
Static Generation with Data using **getStaticProps**
getStaticProps runs only on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. 

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

If you need to fetch data at request time instead of at build time, you can try Server-side Rendering:

Using getServerSideProps
```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

### Client-side Rendering
If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
    - Statically generate (pre-render) parts of the page that do not require external data.
    - When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.
[https://swr.vercel.app/](SWR) highly recommend it if you’re fetching data on the client side.


## How to Statically Generate Pages with Dynamic Routes
```
import Layout from '../../components/layout'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
 const paths = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
  return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
```