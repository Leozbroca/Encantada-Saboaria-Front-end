import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
import { BsArrowUpSquare } from "react-icons/bs";

import { HiOutlineChevronDoubleUp, HiOutlineArrowNarrowUp } from "react-icons/hi";

  
const ScrollTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
      setVisible(true)
    } 
    else if (scrolled <= 500){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop} >
     <HiOutlineArrowNarrowUp 
     style={{display: visible ? 'inline' : 'none'}} 
     size="1.6rem"/>
    </Button>
  );
}
  
export default ScrollTop;