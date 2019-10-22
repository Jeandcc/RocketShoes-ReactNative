import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';

import {
  Container,
  CartContainer,
  CartItem,
  CartList,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemTextHolder,
  ItemPricing,
  ItemFinalPrice,
  ItemQuantityWrapper,
  QuantityInput,
  CartFinalPrice,
  TotalPrice,
  TotalText,
  FinishOrderWrapper,
  FinishOrderText,
} from './styles';

const tennis = require('../../assets/tenis1.png');

const products = [
  {
    Name: 'Tênis de Caminhada Leve Confortável',
    Price: '179.90',
    Image: tennis,
    id: '1',
  },
  {
    Name: 'Tênis de Caminhada Pesado',
    Price: '179.90',
    Image: tennis,
    id: '2',
  },
  {
    Name: 'Tênis de Caminhada Leve Desconfortável',
    Price: '179.90',
    Image: tennis,
    id: '3',
  },
];

function Product({product}) {
  return (
    <CartItem>
      <ItemInfo>
        <ItemImage source={product.Image} />
        <ItemTextHolder>
          <ItemName>{product.Name}</ItemName>
          <ItemPrice>{product.Price}</ItemPrice>
        </ItemTextHolder>
        <Icon name="add-shopping-cart" color={Colors.primary} size={18} />
      </ItemInfo>
      <ItemPricing>
        <ItemQuantityWrapper>
          <Icon name="remove-circle-outline" color={Colors.primary} size={18} />
          <QuantityInput value="3" />
          <Icon name="add-circle-outline" color={Colors.primary} size={18} />
        </ItemQuantityWrapper>
        <ItemFinalPrice>R$539,70</ItemFinalPrice>
      </ItemPricing>
    </CartItem>
  );
}

export default function Cart() {
  return (
    <Container>
      <CartContainer>
        <CartList
          data={products}
          renderItem={({item}) => <Product product={item} />}
          keyExtractor={item => item.id}
        />
        <CartFinalPrice>
          <TotalText>Total</TotalText>
          <TotalPrice>R$1619,10</TotalPrice>
        </CartFinalPrice>
        <FinishOrderWrapper>
          <FinishOrderText>Finish Order</FinishOrderText>
        </FinishOrderWrapper>
      </CartContainer>
    </Container>
  );
}
