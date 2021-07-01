import { View } from 'react-native';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import React, { useState, useEffect } from 'react';
import FloatingCart from '../../components/FloatingCart';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
	Container,
	ProductContainer,
	ProductList,
	Product,
	ProductImage,
	ProductTitle,
	PriceContainer,
	ProductPrice,
	ProductButton,
	ProductButtonText,
} from './styles';

export default function Catalog() {
	const [products, setProducts] = useState([]);
	async function loadProducts() {
		const { data } = await api.get('/products');

		setProducts(data);
	}
	loadProducts();
	useEffect(() => {}, []);

	return (
		<Container>
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item) => item.id}
					ListFooterComponent={<View />}
					ListFooterComponentStyle={{
						height: 80,
					}}
					renderItem={({ item }) => (
						<Product>
							<ProductImage source={{ uri: item.image_url }} />
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{formatValue(item.price)}</ProductPrice>
								<ProductButton onPress={() => {}}>
									<ProductButtonText>adicionar</ProductButtonText>
									<FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
								</ProductButton>
							</PriceContainer>
						</Product>
					)}
				/>
			</ProductContainer>
			<FloatingCart />
		</Container>
	);
}
