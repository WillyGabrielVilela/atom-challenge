import styled from "styled-components";

export const HeaderContainer = styled.header`
    line-height: 32px;
    border-bottom: 6px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors["purple-bg"]};
    padding-top: 64px;
    padding-bottom: 64px;
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 64px;

h1 {
    font-style: normal;
    font-size: 36px;
    line-height: 54px;

    width: 569px;
    height: 162px;

    color: ${({ theme }) => theme.colors["button-bg"]};
    cursor: pointer

}
h1:hover {
  text-decoration: underline;
}
p {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors["white"]};

  width: 469px;
  height: 82px;
  margin: 16px 0 24px 0;

  cursor: pointer;
}

p:hover {
  text-decoration: underline;
}

a {

text-decoration: none;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: ${({ theme }) => theme.colors["button-bg"]};

cursor: pointer;

transition: .3s;


&:hover {
  color: #9052bd;
}
}


.figure:hover {
  transition: 0.3s;
  transform: scale(1.1);
  cursor: pointer;
}

.look-more {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.text-content {
  width: 570px;
  height: 311px;
}

`