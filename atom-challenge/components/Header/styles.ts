import styled from "styled-components";

export const HeaderContainer = styled.header`
    line-height: 32px;
    border-bottom: 6px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors["purple-bg"]};
    padding-top: 64px;
    padding-bottom: 64px;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 0;
  gap: 1s00px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["purple-bg"]};
  position: fixed;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  z-index: 1;

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

}
  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors["white"]};

    cursor: pointer;
}


li {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}

a:focus {
  font-weight: 700;
  border-left: 2px solid ${({ theme }) => theme.colors.green};
}
`

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;

  .searchInput {
  width: 230px;
  height: 44px;

  background: ${({ theme }) => theme.colors["dark-bg"]};
  border-radius: 4px 0px 0px 4px;
  padding: 14px;

  border-style: none;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

  color: ${({ theme }) => theme.colors["white"]};

}

.searchInput::placeholder {
  color: ${({ theme }) => theme.colors["light-purple"]};

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

}

`
export const ButtonSearch = styled.button`

  width: 70px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors["button-bg"]};
  border-radius: 0px 4px 4px 0px;
  border-style: none;

  cursor: pointer;
  transition: .3s;


&:hover {
  background: #9052bd;
}
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

}
p {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors["white"]};

  width: 469px;
  height: 82px;
  margin: 16px 0 24px 0;
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