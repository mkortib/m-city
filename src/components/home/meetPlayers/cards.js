import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import Otamendi from '../../../Resources/images/players/Otamendi.png'
import PlayerCard from '../../ui/playerCard'


export default class HomeCards extends Component {

	state = {
		show: this.props.show,
		cards: [
			{
				bottom: 90,
				left: 300
			},
			{
				bottom: 60,
				left: 200
			},
			{
				bottom: 30,
				left: 100
			},
			{
				bottom: 0,
				left: 0
			}
		]
	}

	// componentDidMount() {
	// 	let cardAmount = window.innerWidth > 768 ?  this.state.cards : this.state.cards.splice(0, 2);
	// 	this.setState({
	// 		cards: this.state.cards
	// 	})
	// }

	showAnimateCards = () => (
		this.state.cards.map((card, i) => (
			<Animate
				key={i}
				show={this.props.show}
				start={{
					left: 0,
					bottom: 0
				}}
				enter={{
					left: [card.left],
					bottom: [card.bottom],
					timing: { duration: 500, ease: easePolyOut }
				}}
			>
				{
					({ left, bottom }) => {
						return (
							<div
								style={{
									position: 'absolute',
									left,
									bottom
								}}
							>
								<PlayerCard 
									number="30"
									name="Nicolas"
									lastname="Otamendi"
									bck={Otamendi}
								/>
							</div>
						)
					}
				}
			</Animate>
		))
	)

	render() {
		return (
			<div>
				{this.showAnimateCards()}
			</div>
		)
	}
}
