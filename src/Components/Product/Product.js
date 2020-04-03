import React from './node_modules/react';
import axios from './node_modules/axios';
import { Link } from './node_modules/react-router-dom';

export default function Product(props) {
	return (
		<div className="product-box">
			<img src={props.currentProduct.image_url} alt={props.currentProduct.name} className="product-image" />
			<div className="product-information">
				<div className="name-price">
					<p>{props.currentProduct.name}</p>
					<p>${props.currentProduct.price} </p>
				</div>

				<div className="button-container">
					<button
						className="product-button"
						onClick={() => {
							axios.delete('/api/inventory/' + props.currentProduct.product_id).then(() => {
								props.getItemList();
							});
						}}
					>
						{' '}
						Delete
					</button>
					<Link to={"/edit-product-form/" + props.currentProduct.product_id}>
						<button className="product-button">Edit</button>
					</Link>
				</div>
			</div>
		</div>
	);
}