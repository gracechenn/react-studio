// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem(item) {

	return (
		<div>
            <h1>{item.name}</h1>
            <img src={item.image}/>
            <p> {item.description}</p>
            <h2>{item.price} </h2>
        </div>
	);
}
