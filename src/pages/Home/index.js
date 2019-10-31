import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import serverContent from '../../../store';
import {formatPrice} from '../../util/format';

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

export default function Home() {
  function Product({product}) {
    return (
      <ProductWrapper>
        <ProductImage source={{uri: product.image}} />
        <ProductText>{product.title}</ProductText>
        <ProductPrice>{product.priceFormatted}</ProductPrice>
        <ProductAdd>
          <CartQuantity>
            <Icon name="add-shopping-cart" color="#fff" size={16} />
            <CartQuantityText>3</CartQuantityText>
          </CartQuantity>
          <CartText>Add</CartText>
        </ProductAdd>
      </ProductWrapper>
    );
  }
  // eslint-disable-next-line no-unused-vars
  const [productsList, editProducts] = useState(serverContent.products);

  const listProducts = productsList.map(product => (
    <Product product={product} key={product.id} />
  ));

  useEffect(() => {
    const formattedProducts = productsList.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    editProducts(formattedProducts);
  }, []);

  return (
    <Container>
      <ProductsList horizontal>{listProducts}</ProductsList>
    </Container>
  );
}
