import { useEffect, useState } from "react";
import { ButtonScrollContainer } from "./styles";
import { ArrowUp } from "@phosphor-icons/react";

export const ButtonScroll: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <ButtonScrollContainer isVisible={isVisible} onClick={scrollToTop}>
        <ArrowUp size={24} />
      </ButtonScrollContainer>
    );
  };