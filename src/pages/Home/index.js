import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductWrapper,
  ProductsList,
  ProductImage,
  ProductText,
  ProductPrice,
  ProductAdd,
  CartQuantity,
  CartQuantityText,
  CartText,
} from './styles';

const tennis = require('../../assets/tenis1.png');

function Product() {
  return (
    <ProductWrapper>
      <ProductImage source={tennis} />
      <ProductText>Tênis de Caminhada Leve Confortável</ProductText>
      <ProductPrice>R$ 179,90</ProductPrice>
      <ProductAdd>
        <CartQuantity>
          <Icon name="shopping-cart" color="#fff" size={16} />
          <CartQuantityText>3</CartQuantityText>
        </CartQuantity>
        <CartText>Add</CartText>
      </ProductAdd>
    </ProductWrapper>
  );
}

export default function Home() {
  return (
    <Container>
      <ProductsList horizontal>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsList>
    </Container>
  );
}
