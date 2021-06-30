import { View } from 'react-native';
import React, { useState, useMemo } from 'react';
import formatValue from '../../utils/formatValue';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
	Product,
	Container,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ActionButton,
	SubTotalValue,
	TotalContainer,
	ProductQuantity,
	ActionContainer,
	ProductContainer,
	TotalProductsText,
	ProductSinglePrice,
	ProductPriceContainer,
	ProductTitleContainer,
	TotalProductsContainer,
} from './styles';

export default function Cart() {
	const [products, setProducts] = useState([
		{
			id: '1',
			title: 'Assinatura Mensal',
			image_url:
				'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
			quantity: 2,
			price: 50,
		},
		{
			id: '2',
			title: 'Assinatura Trimestral',
			image_url:
				'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
			quantity: 2,
			price: 150,
		},
	]);

	//Quantidade de itens no carrinho
	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	//Quantidade total do preço do carrinho
	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((accumulator, product) => {
			const totalPrice = accumulator + product.price * product.quantity;
			return totalPrice;
		}, 0);
		return formatValue(cartAmount);
	}, [products]);

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
							<ProductTitleContainer>
								<ProductTitle>{item.title}</ProductTitle>
								<ProductPriceContainer>
									<ProductSinglePrice>
										{formatValue(item.price)}
									</ProductSinglePrice>
									<TotalContainer>
										<ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
										<ProductPrice>
											{formatValue(item.price * item.quantity)}
										</ProductPrice>
									</TotalContainer>
								</ProductPriceContainer>
							</ProductTitleContainer>
							<ActionContainer>
								<ActionButton onPress={() => {}}>
									<FeatherIcon name="plus" color="#e83f5b" size={16} />
								</ActionButton>
								<ActionButton onPress={() => {}}>
									<FeatherIcon name="minus" color="#e83f5b" size={16} />
								</ActionButton>
							</ActionContainer>
						</Product>
					)}
				/>
			</ProductContainer>
			<TotalProductsContainer>
				<FeatherIcon name="shopping-cart" color="#fff" size={24} />
				<TotalProductsText>
					{cartSize} {cartSize == 1 ? 'item' : 'itens'}
				</TotalProductsText>
				<SubTotalValue>{cartTotal}</SubTotalValue>
			</TotalProductsContainer>
		</Container>
	);
}
