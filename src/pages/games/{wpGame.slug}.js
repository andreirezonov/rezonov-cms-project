import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"

const GamePage = ({ data: { wpGame: { monsterHunter : game, platforms: { nodes : platforms }}}}) => {
    const image = getImage(game.cover.localFile)
    return (
        <Layout pageTitle="Home">
            <section>
                <GatsbyImage image={image}/>

                <h1>{game.title}</h1>
                <p>{game.description}</p>

                <p>Platform(s):
                <div>
                    {platforms.map((platform, i) => (
                    <span key={i}>
                        {platform.name} {i + 1 < platforms.length && "- "}
                    </span>
                    ))}
                </div>
                </p>
            </section>
            <section>
                <p><span>Publisher(s):</span> {game.publishers}</p>
                <p><span>Developer(s):</span> {game.developers}</p>
                <p><span>Initial Release Date:</span> {game.initialReleaseDate}</p>
                <p><span>Director(s):</span> {game.directors}</p>
                <p><span>Composer(s):</span> {game.composers}</p>
                <p><span>Genre(s):</span> {game.genres}</p>
                <p><span>Flagship Monster:</span> {game.flagshipMonster}</p>
                <p><span>Large Monsters:</span> {game.largeMonsters}</p>
                <p><span>Small Monsters:</span> {game.smallMonsters}</p>
                <p><span>Hunting Locations:</span> {game.huntingLocations}</p>
                <p><span>Town Locations:</span> {game.townLocations}</p>
                <p><span>Generation:</span> {game.generation}</p>
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
                        gatsbyImageData(height: 350)
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
