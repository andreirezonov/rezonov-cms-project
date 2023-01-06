import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../../components/layout"

const GamesPage = ({ data: { allWpGame: { edges }}}) => {

    return (
        <Layout pageTitle="All Games">
            
            <section>
                <h1>Games</h1>

                {edges.map (title => {
                    const game = title.node.monsterHunter
                    const slug = title.node.slug
                    const image = getImage(title.node.monsterHunter.cover.localFile)

                    return (
                        <Link key={title.node.id} to={`/games/${slug}`}>
                            <GatsbyImage
                                image={image}
                                alt={title.node.monsterHunter.cover.altText}
                            />
                            <p>{game.title}</p>
                        </Link>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
query {
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
                                gatsbyImageData(height: 200)
                            }
                        }
                        altText
                    }
                }
                slug
                id
            }
        }
    }
}`

export default GamesPage
