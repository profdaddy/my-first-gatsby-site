import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this with Gatsby.</p>
      <StaticImage
        alt="Clifford"
        src="../images/clifford.webp" />
    </Layout>
  )
}

export default IndexPage