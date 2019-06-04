import React from 'react'
import PromotionAnimation from './Animation'
import Enroll from './Enroll'

export default function Promotion() {
	return (
		<div className="promotion_wrapper" style={{background: '#fff'}}>
			<div className="container">
				<PromotionAnimation />
				<Enroll />
			</div>
		</div>
	)
}
