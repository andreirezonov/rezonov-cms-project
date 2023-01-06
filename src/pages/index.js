import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

import Game from "../components/game"

const IndexPage = ({ data: { wpPage: { homePage }}}) => {
    const image = getImage(homePage.picture.localFile)
    return (
        <Layout pageTitle="Home">
            <section>
                <GatsbyImage image={image}/>

                <h1>{homePage.title}</h1>
                <p>{homePage.description}</p>

                <h2>Featured Games</h2>
                {homePage.featuredGames.map(game => {
                    return <Game slug={`games/${game.slug}`} key={game.id} game={game} />
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
query {
    wpPage(slug: {eq: "home"}) {
        homePage {
            featuredGames {
                ... on WpGame {
                    slug
                    monsterHunter {
                        title
                        cover {
                            localFile {
                                childImageSharp {
                                gatsbyImageData(height: 200)
                                }
                            } 
                        }
                    }
                }
            }
            title
            description
            picture {
                localFile {
                    childImageSharp {
                        gatsbyImageData(height: 300)
                    }
                }
            }
        }
    }
}`

export default IndexPage
