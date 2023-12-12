import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSpecialityDataByNameOfSpec} from "../../store";

const Specialities = () => {
    const {specialities, status} = useSelector(( state => state.specialityReducer))
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSpecialityDataByNameOfSpec({'name_of_spec': 'Дошкільна освіта'}))

    }, [dispatch]);
    
    {console.log(specialities)}
    return (
        <div className='specialities-grid'>

        </div>
    );
};

export default Specialities;