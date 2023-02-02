import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatas } from '../modules/special';
import SpecialOffer from '../pages/SpecialOffer';

const SpecialContainer = () => {
    const { loading, data, error } = useSelector(state=>state.special.specials);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDatas())
    },[dispatch])
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러 발생!!!!</div>
    if(!data) return <div>데이터가 없음!!!!</div> 
    return (
        <SpecialOffer data={data}/> 
    );
};

export default SpecialContainer;