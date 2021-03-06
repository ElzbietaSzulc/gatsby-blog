import React from "react"
import { Card, CardBody } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = () => (
  <Layout pageTitle="Kontakt">
    <SEO title="Tags page" keywords={[`gatsby`, `application`, `react`]} />
    <Card style={{ minHeight: "10%" }}>
      <CardBody>Wszelkie oferty współpracy proszę kierować na adres : elzszulc@gmail.com</CardBody>
    </Card>
  </Layout>
)

export default Tags
