import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatPrice} from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  const listProducts = products.map(product => (
    <Product product={product} key={product.id} />
  ));

  function Product({product}) {
    return (
      <ProductWrapper>
        <ProductImage source={{uri: product.image}} />
        <ProductText>{product.title}</ProductText>
        <ProductPrice>{product.priceFormatted}</ProductPrice>
        <ProductAdd onPress={() => handleAddProduct(product.id)}>
          <CartQuantity>
            <Icon name="add-shopping-cart" color="#fff" size={16} />
            <CartQuantityText>{amount[product.id] || 0}</CartQuantityText>
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
