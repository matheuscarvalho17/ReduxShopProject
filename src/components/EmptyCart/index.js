import React from 'react';
import { Container, EmptyCartText } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function EmpytCard() {
	return (
		<Container>
			<FeatherIcon name="slash" size={38} color="#f3f9ff" />
			<EmptyCartText>Seu carrinho está vazio :(</EmptyCartText>
		</Container>
	);
}
