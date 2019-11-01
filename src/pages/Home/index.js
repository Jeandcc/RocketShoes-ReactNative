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
  const [productsList, editProducts] = useState(serverContent.products);
  const [cartItems, editCart] = useState([]);
  const [addingProduct, editButton] = useState(false);

  const listProducts = productsList.map(product => (
    <Product product={product} key={product.id} />
  ));

  function addToCart(productId) {
    editButton(true);
    function isOnCart(object) {
      return object.product === productId;
    }
    const isPresent = cartItems.findIndex(isOnCart);
    console.log(isPresent);

    if (isPresent !== -1) {
      const cartContent = [...cartItems];
      cartContent[isPresent].amount += 1;
      editCart(cartContent);
      const addedProducts = [...productsList];
      addedProducts[productId - 1].amountOnCart += 1;
      editProducts(addedProducts);
      console.log(cartItems, addedProducts);
    } else {
      const cartContent = [...cartItems, {product: productId, amount: 1}];
      editCart(cartContent);
      const addedProducts = [...productsList];
      addedProducts[productId - 1].amountOnCart = 1;
      editProducts(addedProducts);
      console.log(cartItems, addedProducts);
    }
  }

  useEffect(() => {
    const formattedProducts = productsList.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    editProducts(formattedProducts);
  }, []);

  useEffect(() => {
    editButton(false);
  }, [cartItems]);

  function Product({product}) {
    return (
      <ProductWrapper>
        <ProductImage source={{uri: product.image}} />
        <ProductText>{product.title}</ProductText>
        <ProductPrice>{product.priceFormatted}</ProductPrice>
        <ProductAdd
          disabled={addingProduct}
          onPress={() => addToCart(product.id)}>
          <CartQuantity>
            <Icon name="add-shopping-cart" color="#fff" size={16} />
            <CartQuantityText>{product.amountOnCart || '0'}</CartQuantityText>
          </CartQuantity>
          <CartText>Add</CartText>
        </ProductAdd>
      </ProductWrapper>
    );
  }
  return (
    <Container>
      <ProductsList horizontal>{listProducts}</ProductsList>
    </Container>
  );
}
