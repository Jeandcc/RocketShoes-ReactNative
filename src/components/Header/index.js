import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Header,
  HomeButton,
  RocketShoesLogo,
  Cart,
  CartQuantity,
  CartQuantityText,
} from './styles';

const Home = ({navigation}) => (
  <Header>
    <HomeButton onPress={() => navigation.navigate('Home')}>
      <RocketShoesLogo />
    </HomeButton>

    <Cart onPress={() => navigation.navigate('Cart')}>
      <Icon name="shopping-basket" size={24} color="#FFF" />
      <CartQuantity>
        <CartQuantityText>3</CartQuantityText>
      </CartQuantity>
    </Cart>
  </Header>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
