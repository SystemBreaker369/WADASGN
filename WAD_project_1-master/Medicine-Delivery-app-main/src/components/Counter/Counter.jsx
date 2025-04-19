import { useDispatch } from 'react-redux';
import { updateShoppingCart } from '../../redux/shoppingCart/shoppingCartSlice';
import { CounterWrapper, CounterButton, InputQuantity } from './Counter.styled';

export const Counter = ({ drug }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = parseInt(e.target.value) || 1;
    updateQuantity(value);
  };

  const handleIncrement = () => {
    updateQuantity(drug.quantity + 1);
  };

  const handleDecrement = () => {
    if (drug.quantity > 1) {
      updateQuantity(drug.quantity - 1);
    }
  };

  const updateQuantity = quantity => {
    dispatch(updateShoppingCart({ quantity, id: drug.id }));
  };

  return (
    <CounterWrapper>
      <CounterButton
        type="button"
        onClick={handleDecrement}
        disabled={drug.quantity <= 1}
        aria-label="Decrease quantity"
      >
        -
      </CounterButton>

      <InputQuantity
        type="number"
        value={drug.quantity}
        onChange={handleChange}
        min="1"
        max="99"
        aria-label="Product quantity"
      />

      <CounterButton
        type="button"
        onClick={handleIncrement}
        aria-label="Increase quantity"
      >
        +
      </CounterButton>
    </CounterWrapper>
  );
};
