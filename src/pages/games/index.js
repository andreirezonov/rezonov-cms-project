import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../../components/layout"

import {
    gamesSection,
    gamesContainer,
    gamesCover,
    gamesSpecs,
} from "../../page.module.css"

const GamesPage = ({ data: { allWpGame: { edges }}}) => {

    return (
        <Layout>
            
            <section className={gamesSection}>
                {edges.map (title => {
                    const game = title.node.monsterHunter
                    const slug = title.node.slug
                    const image = getImage(title.node.monsterHunter.cover.localFile)

                    return (
                        <Link className={gamesContainer} key={title.node.id} to={`/games/${slug}`}>
                            <GatsbyImage className={gamesCover} image={image} alt={title.node.monsterHunter.cover.altText}/>
                            <div className={gamesSpecs}>
                                <h1>{game.title}</h1>
                                <p>{game.initialReleaseDate}</p>
                                <h2>{game.generation}</h2>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
{
    allWpGame(sort: {fields: monsterHunter___generationNumber, order: DESC}) {
        edges {
            node {
                monsterHunter {
                    title
                    initialReleaseDate
                    generation
                    cover {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(height: 300)
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
