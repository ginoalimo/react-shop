import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext  from '@context/AppContext';
import icons from '@icons/bt_add_to_cart.svg';
import iconClose from '@icons/bt_added_to_cart.svg';	


const ProductItem = ({ product }) => {
	const { addToCart,removeFromCart } = useContext(AppContext);
	const [addedToCart,setAddedToCart] = useState(false);
	

	const handleAdd = item => {
		addToCart(item);
		setAddedToCart(true);
		document.getElementById('addToCart').style.display = 'none';
		document.getElementById('addedToCart').style.display = 'block';
	}
	const handleRemove= item => {
		removeFromCart(item);
		setAddedToCart(false);
		document.getElementById('addToCart').style.display = 'block';
		document.getElementById('addedToCart').style.display = 'none';
		
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{!addedToCart ? 
				<figure onClick={() => handleAdd(product)} >
					<img src={icons} alt="add to cart" id="addToCart"/>
					<img src={iconClose} alt="added to cart" id="addedToCart" style={{display: 'none'}}/>
					
				</figure> 
				:
				<figure onClick={() => handleRemove(product)} >
					<img src={icons} alt="add to cart" id="addToCart" style={{display: 'none'}}/>
					<img src={iconClose} alt="added to cart" id="addedToCart"/>
				</figure> 
				}
			</div>
		</div>
	);
}

export default ProductItem;
