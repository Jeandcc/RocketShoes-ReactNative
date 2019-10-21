import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

const logo = require('../../assets/logo.png');

export const Header = styled.View`
  flex-direction: row;
  background-color: ${colors.dark};
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const RocketShoesLogo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const HomeButton = styled(RectButton)``;

export const Cart = styled(RectButton)`
  width: 40px;
  padding: 5px;
`;

export const CartImage = styled.View``;

export const CartQuantity = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: ${colors.primary};
`;

export const CartQuantityText = styled.Text`
  color: white;
  font-size: 12px;
  align-content: center;
  text-align: center;
`;
