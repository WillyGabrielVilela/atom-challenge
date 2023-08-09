import styled from "styled-components";

interface ButtonScrollContainerProps {
    isVisible: boolean;
  }

export const ButtonScrollContainer = styled.button<ButtonScrollContainerProps>`
  position: fixed;
  bottom: 25px;
  right: 25px;
  padding: 10px;
  font-size: 16px;
  background-color:${({ theme }) => theme.colors["button-bg"]};
  color: ${({ theme }) => theme.colors["white"]};
  border: none;
  border-radius: 99%;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
`;