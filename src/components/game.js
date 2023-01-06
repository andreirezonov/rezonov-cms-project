import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*
import {

} from "../game.module.css"
*/
const Game = ({ game, slug }) => {
    const cover = getImage(game.monsterHunter.cover.localFile)
    return (
        <Link to={slug}>
            <GatsbyImage
                image={cover}
                alt={game.monsterHunter.cover.altText}
            />
            <article>
                {game.monsterHunter.artistName && <p>{game.monsterHunter.title}</p>}
                <h3>{game.monsterHunter.title}</h3>
                <p>{game.monsterHunter.initialReleaseDate}</p>
            </article>
        </Link>
    )
}
  
export default Game
