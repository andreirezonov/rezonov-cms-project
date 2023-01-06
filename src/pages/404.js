import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <h1>404: Not Found</h1>
        <p>Try using a paintball to find the monster!</p>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
