import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../context"
import Title from '../components/Title'

const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))]
};

export default function RoomsFilter({rooms}) {
	const context = useContext(RoomContext);
	const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;
	//get unique types
	let types = getUnique(rooms, 'type');
	//add type 'all'
	types = ['all', ...types];
	// map to jsx
	types = types.map((item, index)=>{
		return <option value={item} key={index}>{item}</option>
	});
	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) =>{
		if (item > 0) {
			return <option key={index} value={item}>{item}</option>
		}
	});

	return (
		<section className="filter-container">
			<Title title="search rooms"/>
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
						{types}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
						{people}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="price">Room price $ {price}</label>
					<input type="range" name="price" id="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="size">Room size</label>
					<div className="size-inputs">
						<input type="number" name="minSize" id="minSize" className="size-input" onChange={handleChange} value={minSize}/>
						<input type="number" name="maxSize" id="maxSize" className="size-input" onChange={handleChange} value={maxSize}/>
					</div>
				</div>
				<div className="form-group">
					<div className="single-extra">
						<input type="checkbox" name="breakfast" id="breakfast" onChange={handleChange} checked={breakfast}/>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input type="checkbox" name="pets" id="pets" onChange={handleChange} checked={pets}/>
						<label htmlFor="pets">pets</label>
					</div>

				</div>

			</form>
		</section>
	)
}