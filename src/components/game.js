import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
    gameSection,
} from "./game.module.css"

const Game = ({ game, slug }) => {
    const cover = getImage(game.monsterHunter.cover.localFile)
    return (
        <Link to={slug}>
            <section className={gameSection}>
                <GatsbyImage
                    image={cover}
                    alt={game.monsterHunter.cover.altText}
                />
                <div>
                    <h3>{game.monsterHunter.title}</h3>
                    <p>Released: {game.monsterHunter.initialReleaseDate}</p>
                </div>
            </section>
        </Link>
    )
}

export default Game
