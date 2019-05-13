import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
	state = {
		services : [
			{
				icon: <FaCocktail/>,
				title: 'free coctails',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sed?'
			},
			{
				icon: <FaHiking/>,
				title: 'Endless Hiking',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sed?'
			},
			{
				icon: <FaShuttleVan/>,
				title: 'free shuttle',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sed?'
			},
			{
				icon: <FaBeer/>,
				title: 'Strongest beer',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sed?'
			}
		]
	}
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item,index) => {
						return (
						<article key={index} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
						)
					})}
				</div>
			</section>
		)
	}
}