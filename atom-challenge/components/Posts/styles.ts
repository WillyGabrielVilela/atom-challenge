import styled from "styled-components";

export const PostsContainer = styled.main`
    display: flex;
    justify-content: space-evenly;
    gap: 130px;
    padding-top: 60px;

   background: ${({ theme }) => theme.colors["white"]};


.figure h2, section h2, .posts-back h2 {
  
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: ${({ theme }) => theme.colors["purple-bg"]};

  margin: 16px 0;
}

.figure p, .figure figcaption, section p, .posts-back p {
  
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 569px;

  color: #000;
}

.figure p {
  line-height: 24px;
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

export const PostsContent = styled.div`
background: ${({ theme }) => theme.colors["white"]};
border-bottom: 6px solid ${({ theme }) => theme.colors.green};

  .post {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  }

  h2 {
  color: ${({ theme }) => theme.colors["purple-bg"]};

  }

  p {
  margin-top: 8px;
  width: 370px;
  height: 76px;

}

.post1, .post2, .post3, .post4 {
  width: 370px;
  height: 458px;
}

`