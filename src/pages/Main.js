import React  from 'react';
import SpecialContainer from '../containers/SpecialContainer';
import Promotion from './Promotion';
import VisualSlider from './VisualSlider';
const Main = () => {
    return (
        <div>
           <VisualSlider/>
           <SpecialContainer ismain={true}/>
           <Promotion/>
        </div>
    );
};
export default Main;