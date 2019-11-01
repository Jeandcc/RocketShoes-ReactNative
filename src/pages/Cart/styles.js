import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  margin: 20px;
  flex: 1;
  border-color: #eee;
  align-content: center;
  font-family: 'Roboto';
`;

export const CartContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 22px 15px 10px 15px;
`;

export const CartList = styled.FlatList`
  max-height: 260px;
`;

export const CartItem = styled.View``;

export const ItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;
export const ItemTextHolder = styled.View`
  margin: auto 0px;
  color: #333;
  display: flex;
  width: 0;
  flex-grow: 1;
  flex: 1;
  margin-right: 10px;
`;
export const ItemName = styled.Text`
  flex-shrink: 1;
  font-size: 14px;
  line-height: 18px;
`;
export const ItemPrice = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
`;

export const ItemPricing = styled.View`
  border-radius: 4px;
  background-color: #eee;
  /* height: 40px; */
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 7px;
`;

export const ItemQuantityWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UpdateAmountButton = styled(RectButton)``;

export const QuantityInput = styled.TextInput`
  color: ${colors.primary};
  background-color: #ddd;
  border-radius: 4px;
  margin: auto 10px;
  padding: 0px 10px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ItemFinalPrice = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

export const CartFinalPrice = styled.View`
  margin: 30px auto;
  align-items: center;
  flex-shrink: 0;
`;

export const TotalText = styled.Text`
  font-weight: 700;
  color: #999;
  font-size: 16;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  font-weight: 700;
  color: #000;
  font-size: 30;
  text-transform: uppercase;
  letter-spacing: -1.6px;
`;

export const FinishOrderWrapper = styled(RectButton)`
  background-color: ${colors.primary};
  border-radius: 4px;
`;

export const FinishOrderText = styled.Text`
  text-transform: uppercase;
  color: white;
  margin: 13px auto;
  font-size: 14px;
  font-weight: bold;
`;
