/** @format */

import React from "react"

const PokemonDetails = ({ data }) => {
	return (
		<>
			{!data ? (
				""
			) : (
				<>
					<h2 style={{ color: "#fff" }}>{data.name}</h2>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
						alt=''
					/>
					<div className='abilities'>
						{data.abilities.map((poke) => {
							return (
								<>
									<div className='group' style={{ background: "#fff" }}>
										<h2>{poke.ability.name}</h2>
									</div>
								</>
							)
						})}
					</div>
					<div className='base-stat' style={{ color: "#fff" }}>
						{data.stats.map((poke) => {
							return (
								<>
									<h3>
										{poke.stat.name}:{poke.base_stat}
									</h3>
								</>
							)
						})}
					</div>
				</>
			)}
		</>
	)
}
export default PokemonDetails
