import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Game from "../components/game"

import {
    headerSection,
    headerImage,
    featuredSection,
    featuredTitle,
    formSection,
    formContainer,
} from "../page.module.css"

const IndexPage = ({ data: { wpPage: { homePage }}}) => {
    const image = getImage(homePage.picture.localFile)
    return (
        <Layout>
            <section className={headerSection}>
                <div className={headerImage}>
                    <GatsbyImage image={image}/>
                </div>
                
                <h1>The Monster Hunter Franchise</h1>
                <p dangerouslySetInnerHTML={{ __html: homePage.description }}/>
            </section>
            <section className={featuredSection}>
                <h1>Featured Games</h1>
                <div className={featuredTitle}>
                    {homePage.featuredGames.map(game => {
                    return <Game slug={`games/${game.slug}`} key={game.id} game={game} />
                    })}
                </div>
            </section>
            <section className={formSection}>
                <h1>Give Us Feedback!</h1>
                <form className={formContainer} name="contact" method="POST" data-netlify="true">
                    <label>First Name</label>
                    <input type="text" name="first-name" required={true} placeholder="e.g: John"/>

                    <label>Last Name</label>
                    <input type="text" name="last-name" required={true} placeholder="e.g: Hunter"/>   

                    <label>Email</label>
                    <input type="email" name="email" required={true} placeholder="e.g: john.hunter@gmail.com"/>

                    <label>Subject</label>
                    <input type="text" name="subject" required={true} placeholder="e.g: S.O.S"/>

                    <label>Message</label>
                    <textarea rows="7" name="message" required={true} placeholder="e.g: You could add X and Y perhaps?"></textarea>

                    <input type="hidden" name="form-name" value="contact" />
                    <button type="submit">Send In</button>
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
                        cover {
                            localFile {
                                childImageSharp {
                                gatsbyImageData(height: 500)
                                }
                            } 
                        }
                        title
                        initialReleaseDate
                    }
                }
            }
            title
            description
            picture {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
}`

export default IndexPage
