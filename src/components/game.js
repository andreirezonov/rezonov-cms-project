import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
                <p>
                    {game.monsterHunter.title}
                </p>
            </article>
        </Link>
    )
}
  
export default Game
