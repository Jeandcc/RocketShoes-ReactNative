import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  /*   flex: 1; */
  border-color: #eee;
  align-content: center;
  font-family: 'Roboto';
`;

export const ProductsList = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'stretch',
  },
}))`
  flex-direction: row;
`;

export const ProductWrapper = styled.View`
  background-color: #fff;
  min-height: 358px;
  width: 220px;
  border-radius: 4px;
  margin-right: 15px;
  padding: 10px;
  flex-shrink: 1;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: #333;
  margin-bottom: 5px;
  margin-left: 10px;
`;
export const ProductPrice = styled.Text`
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 14px;
  margin-left: 10px;
`;
export const ProductAdd = styled(RectButton)`
  flex-direction: row;
  width: 100%;
  background-color: ${colors.primary};
  color: white;
  justify-content: space-between;
  border-radius: 4px;
  margin-top: auto;
`;
export const CartQuantity = styled.View`
  padding: 13px 12px;
  background-color: #5a497a;
  flex-direction: row;
  border-radius: 4px;
`;
export const CartQuantityText = styled.Text`
  margin-left: 5px;
  color: white;
`;
export const CartText = styled.Text`
  color: white;
  margin: auto;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;
