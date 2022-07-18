/** @format */

import React from "react"
const Card = ({ pokemon, loading, infoPokemon }) => {
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				pokemon.map((item) => {
					return (
						<>
							<div
								className='card'
								key={item.id}
								onClick={() => infoPokemon(item)}
							>
								<p>{item.id}</p>
								<img src={item.sprites.front_default} alt='' />
								<p>{item.name}</p>
							</div>
						</>
					)
				})
			)}
		</>
	)
}
export default Card
