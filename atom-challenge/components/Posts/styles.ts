import styled from "styled-components";

export const PostsContainer = styled.main`
    display: flex;
    justify-content: space-evenly;
    gap: 130px;
    padding-top: 60px;

   background: ${({ theme }) => theme.colors["white"]};


.figure h2, section h2 {
  
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: ${({ theme }) => theme.colors["purple-bg"]};

  margin: 16px 0;
  cursor: pointer;
}

h2:hover {
  text-decoration: underline;
}

.figure p, section p {
  
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 569px;

  color: #000;
  cursor: pointer;
}

p:hover {
  text-decoration: underline;
}

.figure p {
  line-height: 24px;
}

figure:hover {
  transition: 0.3s;
  transform: scale(0.9);
}

section+section {
  width: 472px;
  height: 414px;
}

section h2 {
  width: 467px;
  height: 108px;

  margin: 8px 0;
}

section p {
  width: 471px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 49px;
}

`

