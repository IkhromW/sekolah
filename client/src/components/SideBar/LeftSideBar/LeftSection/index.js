import React,{ useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import { Link } from 'react-router-dom';

import './style.scss';

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar} = useContext(LeftSideBarContext)
  return(
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? "show" : "hide"}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick = {() => setIsShowSidebar(false)}
        />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li> 
            <Link
              className="LeftSideBar__LeftSection__link" 
              to="/murid"
            >
              Murid
            </Link>
        </li>
        <li>
            <Link 
              to="/subject"
              className="LeftSideBar__LeftSection__link" 
            >
            Mata Pelajaran
            </Link>
        </li>
        <li>
            <Link 
              to="/AllData"
              className="LeftSideBar__LeftSection__link" 
            >
            All Data
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default LeftSection