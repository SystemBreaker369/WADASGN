import { useSelector } from 'react-redux';
import {
  selectDiseaseCategory,
  selectFilterMedicineByShop,
  selectSort,
} from '../redux/selectors';
import {
  CategoryTitle,
  MedicineBlock,
  MedicineListStyled,
  MedicineSectionTitle,
  NoResultsMessage,
} from './MedicineList.styled';
import { MedicineItem } from 'components/MedicineItem/MedicineItem';
import { EmptyPage } from 'pages/Page.styled';

export const MedicineList = () => {
  const filterMedicineByShop = useSelector(selectFilterMedicineByShop);
  const { pharmacy } = filterMedicineByShop[0] || '';
  const sortMethod = useSelector(selectSort);
  const diseaseCategory = useSelector(selectDiseaseCategory);

  let visibleMedicines = [...filterMedicineByShop];

  // Apply disease category filter
  if (diseaseCategory && diseaseCategory.value !== 'all') {
    visibleMedicines = visibleMedicines.filter(
      med => med.diseaseCategory === diseaseCategory.value
    );
  }

  // Apply sorting
  if (sortMethod?.value === 'price') {
    visibleMedicines.sort((a, b) => a.price - b.price);
  }

  if (sortMethod?.value === 'alphabet') {
    visibleMedicines.sort((a, b) => a.medicine.localeCompare(b.medicine));
  }

  if (sortMethod?.value === 'all') {
    visibleMedicines =
      diseaseCategory && diseaseCategory.value !== 'all'
        ? visibleMedicines
        : [...filterMedicineByShop];
  }

  // Group medicines by disease category
  const getCategoryMedicines = category => {
    return [...filterMedicineByShop].filter(
      med => med.diseaseCategory === category
    );
  };

  const diseaseCategoryList = [
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

  const renderCategorySection = category => {
    const categoryMedicines = getCategoryMedicines(category.value);
    if (categoryMedicines.length === 0) return null;

    return (
      <div key={category.value}>
        <CategoryTitle>{category.label}</CategoryTitle>
        <MedicineListStyled>
          {categoryMedicines.map(medicine => (
            <MedicineItem key={medicine.id} drug={medicine} />
          ))}
        </MedicineListStyled>
      </div>
    );
  };

  return (
    <MedicineBlock>
      {filterMedicineByShop?.length > 0 ? (
        <>
          <MedicineSectionTitle>Drugs in {pharmacy}</MedicineSectionTitle>

          {diseaseCategory && diseaseCategory.value !== 'all' ? (
            visibleMedicines.length > 0 ? (
              <>
                <CategoryTitle>{diseaseCategory.label}</CategoryTitle>
                <MedicineListStyled>
                  {visibleMedicines.map(medicine => (
                    <MedicineItem key={medicine.id} drug={medicine} />
                  ))}
                </MedicineListStyled>
              </>
            ) : (
              <NoResultsMessage>
                No medicines found in the {diseaseCategory.label} category
              </NoResultsMessage>
            )
          ) : (
            diseaseCategoryList.map(category => renderCategorySection(category))
          )}
        </>
      ) : (
        <MedicineListStyled>
          <EmptyPage>
            <p>Please, select pharmacy.</p>
          </EmptyPage>
        </MedicineListStyled>
      )}
    </MedicineBlock>
  );
};
