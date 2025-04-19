import { Filters } from "components/Filters/Filters";
import { Container, PharmacyMedicineWrap, Section } from "./Page.styled";
import { PharmacyList } from "components/PharmacyList/PharmacyList";
import { MedicineList } from "MedicineList/MedicineList";
import { useSelector } from "react-redux";
import { selectFilterMedicineByShop } from "../redux/selectors";

const Pharmacies = () => {
    const filterMedicineByShop = useSelector(selectFilterMedicineByShop);

    return (
        <>
            <Section>
                <Container>
                    {filterMedicineByShop.length !== 0 && <Filters />}
                </Container>
            </Section>
            <Section>
                <Container>
                    <PharmacyMedicineWrap>
                        <PharmacyList />
                        <MedicineList />
                    </PharmacyMedicineWrap>
                </Container>
            </Section>
        </>
    )
};

export default Pharmacies;