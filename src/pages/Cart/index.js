import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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
  UpdateAmountButton,
  QuantityInput,
  CartFinalPrice,
  TotalPrice,
  TotalText,
  FinishOrderWrapper,
  FinishOrderText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartContainer>
        <CartList>
          {cart.map(product => (
            <CartItem>
              <ItemInfo>
                <ItemImage source={product.image} />
                <ItemTextHolder>
                  <ItemName>{product.name}</ItemName>
                  <ItemPrice>{product.price}</ItemPrice>
                </ItemTextHolder>
                <Icon
                  name="add-shopping-cart"
                  color={Colors.primary}
                  size={18}
                />
              </ItemInfo>
              <ItemPricing>
                <ItemQuantityWrapper>
                  <UpdateAmountButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      color={Colors.primary}
                      size={18}
                    />
                  </UpdateAmountButton>
                  <QuantityInput value={product.amount} />
                  <UpdateAmountButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      color={Colors.primary}
                      size={18}
                    />
                  </UpdateAmountButton>
                </ItemQuantityWrapper>
                <ItemFinalPrice>R$539,70</ItemFinalPrice>
              </ItemPricing>
            </CartItem>
          ))}
        </CartList>
        <CartFinalPrice>
          <TotalText>Total</TotalText>
          <TotalPrice>{total}</TotalPrice>
        </CartFinalPrice>
        <FinishOrderWrapper>
          <FinishOrderText>Finish Order</FinishOrderText>
        </FinishOrderWrapper>
      </CartContainer>
    </Container>
  );
}
