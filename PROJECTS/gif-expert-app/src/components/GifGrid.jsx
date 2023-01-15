import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
	const { gifs, isLoading } = useFetchGifs(category);
	
	return (
		<>
			<h3>{category}</h3>
			{ isLoading 
				? <h1>Cargando</h1>
				: (
					<div className="card-grid">
						{gifs.map((gif) => (
							<GifItem key={gif.id} {...gif}/>
						))}
					</div>
				)}
		</>
	)
}