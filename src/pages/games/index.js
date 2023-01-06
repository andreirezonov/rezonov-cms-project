import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout"

const GamesPage = ({ data: { allWpGame: { edges }}}) => {
    return (
        <Layout pageTitle="All Games">
            <section>
                <h1>Games</h1>

                {edges.map (title => {
                    const game = title.node.monsterHunter
                    const slug = title.node.slug

                    return (
                        <Link key={title.node.id} to={`/games/${slug}`}>
                            <p>{game.title}</p>
                        </Link>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
query NewQuery {
    allWpGame {
        edges {
            node {
                monsterHunter {
                    title
                    description
                    publishers
                    cover {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                slug
                id
            }
        }
    }
}
`

export default GamesPage
