import { Button } from 'components/PharmacyList/PharmacyList.styled';
import {
  CategoryBadge,
  DescriptionWrap,
  Img,
  MedicineItemStyle,
  Price,
  PriceQuantityWrap,
} from './MedicineItem.styled';
import {
  addShoppingCart,
  deleteShoppingCart,
} from '../../redux/shoppingCart/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBasket } from '../../redux/selectors';

export const MedicineItem = ({ drug, children }) => {
  const dispatch = useDispatch();
  const inBasket = useSelector(selectBasket);

  const { img, medicine, description, price, id, diseaseCategory } = drug;
  const [inCart, setInCart] = useState(false);

  // Map disease categories to user-friendly names
  const categoryLabels = {
    fever: 'Fever & Pain',
    cough: 'Cough & Cold',
    allergy: 'Allergies',
    dental: 'Dental Care',
    digestive: 'Digestive Health',
    skin: 'Skin Care',
    eye: 'Eye Care',
    vitamins: 'Vitamins & Supplements',
    firstaid: 'First Aid',
    diabetes: 'Diabetes Care',
  };

  useEffect(() => {
    if (inBasket?.some(item => item.id === id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [inBasket, id]);

  const onClickCard = () => {
    const newDrugObj = Object.assign({ quantity: 1 }, drug);
    inCart
      ? dispatch(deleteShoppingCart(id))
      : dispatch(addShoppingCart(newDrugObj));
    setInCart(!inCart);
  };

  return (
    <MedicineItemStyle>
      {diseaseCategory && (
        <CategoryBadge>
          {categoryLabels[diseaseCategory] || diseaseCategory}
        </CategoryBadge>
      )}
      <Img
        src={
          img
            ? img
            : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
        }
        alt={medicine}
      />
      <DescriptionWrap>
        <h3>{medicine}</h3>
        <p>{description}</p>
      </DescriptionWrap>
      <PriceQuantityWrap>
        <Price>{price} €</Price>
        {children}
      </PriceQuantityWrap>
      <Button onClick={onClickCard}>
        {inCart ? 'Delete from Cart' : 'Add to Cart'}
      </Button>
    </MedicineItemStyle>
  );
};
