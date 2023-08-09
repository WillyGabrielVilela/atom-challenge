import styled from "styled-components";

export const CategoriesContainer = styled.div`
background: ${({ theme }) => theme.colors["white"]};
border-bottom: 6px solid ${({ theme }) => theme.colors.green};


.categories {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
}

figure {
  cursor: pointer;
}

h2 {
  color: ${({ theme }) => theme.colors["purple-bg"]};
  
  cursor: pointer;
}

h2:hover {
  text-decoration: underline;
}

  p {
  margin-top: 8px;
  width: 370px;
  height: 76px;
  cursor: pointer;
}

figure:hover {
  transition: 0.3s;
  transform: scale(0.9);
}

p:hover {
  text-decoration: underline;
}

.categorie-box {
  width: 370px;
  height: 458px;
}

`