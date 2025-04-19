import { useDispatch, useSelector } from "react-redux";
import { selectAllMedicines } from "../../redux/selectors.js";
import { filterMedicineByShopSet } from "../../redux/filter/filterSlice.js";
import { generateID, makeUniquePharmacies } from "service/serviceFunc.js";
import { useEffect } from "react";
import { getAllMedicinesThunk } from "../../redux/medicine/medicineThanks.js";
import { Button, PharmacyBlock, PharmacyItem, PharmacyListStyled } from "./PharmacyList.styled.js";

export const PharmacyList = () => {
    const dispatch = useDispatch();
    const allMedicines = useSelector(selectAllMedicines);

    useEffect(() => {
        dispatch(getAllMedicinesThunk())
    }, [dispatch]);

    const uniquePharmacies = makeUniquePharmacies(allMedicines);

    const onClickPharmacy = (pharmacy) => {
        const filterMedicineByPharmacy = allMedicines.filter(item => item.pharmacy === pharmacy);
        dispatch(filterMedicineByShopSet(filterMedicineByPharmacy));
    }

    return (
        <PharmacyBlock>
            <h2>Pharmacies</h2>
            <PharmacyListStyled>
                {uniquePharmacies?.length > 0 && uniquePharmacies.map(pharmacy =>
                    <PharmacyItem key={generateID()} onClick={() => onClickPharmacy(pharmacy)}>
                        <Button type="button">{pharmacy}</Button>
                    </PharmacyItem>
                )}
            </PharmacyListStyled>
        </PharmacyBlock>
    )
};