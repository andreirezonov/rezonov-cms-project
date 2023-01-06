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
            <section>
                <form name="contact" method="POST" data-netlify="true">
                    <label>First Name:</label>
                    <input type="text" name="first-name" required={true} />

                    <label>Last Name:</label>
                    <input type="text" name="last-name" required={true} />   

                    <label>Email:</label>
                    <input type="email" name="email" required={true} />

                    <label>Subject:</label>
                    <input type="text" name="subject" required={true} />

                    <label>Message:</label>
                    <textarea name="message" required={true}></textarea>

                    <input type="hidden" name="form-name" value="contact" />
                    <button type="submit">Send</button>
                </form>
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
                                gatsbyImageData(height: 300)
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
