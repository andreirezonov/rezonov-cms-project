import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../../components/layout"

import {
    gamePageBackground,
    gamePageSection,
    gamePageCover,
    gamePageSpecs,
} from "../../page.module.css"

const GamePage = ({ data: { wpGame: { monsterHunter : game, platforms: { nodes : platforms }}}}) => {
    const image = getImage(game.cover.localFile)
    return (
        <Layout>
            <GatsbyImage class={gamePageBackground} image={image}/>
            <section class={gamePageSection}>
                <GatsbyImage class={gamePageCover} image={image}/>

                <h1>{game.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: game.description }}/>

                <div className={gamePageSpecs}>
                    <p>Platform(s)
                        <li>
                        { platforms.map (( platform, i ) => (
                            <span key={i}>
                                {platform.name} {i + 1 < platforms.length && "- "}
                            </span>
                            ))}
                        </li>
                    </p>
                    <p>Publisher(s)
                        <li>{game.publishers}</li>
                    </p>
                    <p>Developer(s)
                        <li>{game.developers}</li> 
                    </p>
                    <p>Initial Release Date
                        <li>{game.initialReleaseDate}</li>
                    </p>
                    <p>Director(s)
                        <li>{game.directors}</li>
                    </p>
                    <p>Composer(s)
                        <li>{game.composers}</li>
                    </p>
                    <p>Genre(s)
                        <li>{game.genres}</li>
                    </p>
                    <p>Flagship Monster
                        <li>{game.flagshipMonster}</li>
                    </p>
                    <p>Monster Count
                        <li>Large Monsters: {game.largeMonsters}</li>
                        <li>Small Monsters: {game.smallMonsters}</li>
                    </p>
                    <p>Locations
                        <li>Hunting Locations: {game.huntingLocations}</li>
                        <li>Town Locations: {game.townLocations}</li>
                    </p>
                    <p>Generation
                        <li>{game.generation}</li>
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query ($slug: String) {
    wpGame(slug: {eq: $slug}) {
        monsterHunter {
            title
            description
            publishers
            developers
            initialReleaseDate
            directors
            composers
            genres
            flagshipMonster
            largeMonsters
            smallMonsters
            huntingLocations
            townLocations
            generation
            cover {
                localFile {
                    childImageSharp {
                        gatsbyImageData(height: 400)
                    }
                }
            }
        }
        platforms {
            nodes {
                name
            }
        }
    }
}`

export default GamePage
