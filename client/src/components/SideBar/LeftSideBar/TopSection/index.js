import React,{ useContext } from 'react';
import BurgerButton from '../BurgerButton';
import './style.scss';
import { LeftSideBarContext } from '../index'

const TopSection = () => {
  const { setIsShowSidebar} = useContext(LeftSideBarContext)
  return (
    <div className="LeftSidear_TopSection">
      <BurgerButton 
        onClick={() => setIsShowSidebar(true)}
      />
    </div>
  )
}
export default TopSection