import React from 'react'
import { Tag } from '../../ui/misc'
import Blocks from '../matches/Blocks'

export default function MatchesHome() {
	return (
		<div className="home_matches_wrapper">
			<div className="container">
				<Tag 
					bck="#0e1731"
					size="50px"
					color="#fff"
				>Matches</Tag>

				<Blocks />

				<Tag
					bck="#fff"
					size="22px"
					color="#0e1731"
					link={true}
					linkto="/THE_MATCHES"
				>See more matches</Tag>

			</div>
		</div>
	)
}
