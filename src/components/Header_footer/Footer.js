import React from 'react'
import { CityLogo } from '../ui/icons'


export default function Footer() {
	return (
		<footer className="bck_blue">
			<div className="footer_logo">
				<CityLogo
					width="70px"
					height="70px"
					link={true}
					linkTo="/"
				/>
			</div>
			<div className="footer_discl">
				Manchester city {new Date().getFullYear().toString()}. All rights reserved.
				Creted by Maksim Kobria
                                Support tel: +380 (44) 468 85 45 
			</div>
		</footer>
	)
}
