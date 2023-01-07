import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
    gameLink,
    gameSection,
    gameCover,
    gameSpecs,
} from "./game.module.css"

const Game = ({ game, slug }) => {
    const cover = getImage(game.monsterHunter.cover.localFile)
    return (
        <Link className={gameLink} to={slug}>
            <section className={gameSection}>
                <div className={gameCover}>
                    <GatsbyImage image={cover} alt={game.monsterHunter.cover.altText}/>
                </div>
                <div className={gameSpecs}>
                    <h1>{game.monsterHunter.title}</h1>
                    <p>{game.monsterHunter.initialReleaseDate}</p>
                </div>
            </section>
        </Link>
    )
}

export default Game
