import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setDiseaseCategory, sortSet } from '../../redux/filter/filterSlice';
import { selectDiseaseCategory, selectSort } from '../../redux/selectors';
import { FiltersContainer, FilterTitle, FilterWrapper } from './Filters.styled';

export const Filters = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const diseaseCategory = useSelector(selectDiseaseCategory);

  const sortOptions = [
    { value: 'all', label: 'Unsorted data' },
    { value: 'price', label: 'Sort by price' },
    { value: 'alphabet', label: 'Sort by alphabet' },
  ];

  const diseaseCategoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'fever', label: 'Fever & Pain' },
    { value: 'cough', label: 'Cough & Cold' },
    { value: 'allergy', label: 'Allergies' },
    { value: 'dental', label: 'Dental Care' },
    { value: 'digestive', label: 'Digestive Health' },
    { value: 'skin', label: 'Skin Care' },
    { value: 'eye', label: 'Eye Care' },
    { value: 'vitamins', label: 'Vitamins & Supplements' },
    { value: 'firstaid', label: 'First Aid' },
    { value: 'diabetes', label: 'Diabetes Care' },
  ];

  return (
    <FiltersContainer>
      <FilterWrapper>
        <FilterTitle>Sort Products</FilterTitle>
        <Select
          onChange={selectedOption => dispatch(sortSet(selectedOption))}
          options={sortOptions}
          placeholder="Sort by"
          value={sort}
        />
      </FilterWrapper>

      <FilterWrapper>
        <FilterTitle>Filter by Category</FilterTitle>
        <Select
          onChange={selectedOption =>
            dispatch(setDiseaseCategory(selectedOption))
          }
          options={diseaseCategoryOptions}
          placeholder="Select Category"
          value={diseaseCategory}
        />
      </FilterWrapper>
    </FiltersContainer>
  );
};
