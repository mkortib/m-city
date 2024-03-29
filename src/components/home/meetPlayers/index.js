import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../ui/misc'
import Reveal from 'react-reveal/Reveal'
import HomeCards from './cards'

export default class MeetPlayers extends Component {

	state = {
		show: false
	}

	render() {
		return (
			<Reveal
				fraction={0.7}
				onReveal={() => {
					this.setState({
						show: true
					})
				}}
			>
				<div 
					className="home_meetplayers"
					style={{ background: `#fff url(${Stripes})` }}
				>
					<div className="container">
						<div className="home_meetplayers_wrapper">
							<div className="home_card_wrapper">
								<HomeCards 
									show={this.state.show}
								/>
							</div>
							<div className="home_text_wrapper">
								<Tag
									bck="#0e1732"
									size="100px"
									color="#fff"
									clsRespnsive="tag_responsive"
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}
								>Meet</Tag>
								<Tag
									bck="#0e1732"
									size="100px"
									color="#fff"
									clsRespnsive="tag_responsive"
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}
								>The</Tag>
									<Tag
									bck="#0e1732"
									size="100px"
									color="#fff"
									clsRespnsive="tag_responsive"
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}
								>Players</Tag>
								<Tag
									bck="#fff"
									size="27px"
									color="#0e1732"
									link={true}
									linkto="/the_team"
									add={{
										display: 'inline-block',
										marginBottom: '27px',
										border: '1px solid #0e1731'
									}}
								>Meet them here</Tag>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
		)
	}
}
