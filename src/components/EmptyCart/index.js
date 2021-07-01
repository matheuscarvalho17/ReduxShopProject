import React from 'react';
import LottieView from 'lottie-react-native';
import emptyCartAnimation from '../../../EmptyCartAnimation.json';
import { Container, EmptyCartContainer, EmptyCartText } from './styles';

export default function EmpytCard() {
	return (
		<Container>
			<EmptyCartContainer>
				<LottieView source={emptyCartAnimation} resizeMode="contain" autoPlay />
			</EmptyCartContainer>
			<EmptyCartText>Seu carrinho tá sem nada, compra algo aí</EmptyCartText>
		</Container>
	);
}
