import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 500px;
    margin-top: 64px;
    margin-bottom: 64px;
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${({ theme }) => theme.colors["light-purple"]};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }

`
export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    a {
        transition: 0.2s ease-in;
        filter: brightness(0.9);
    }

    a:hover {
        margin-bottom: 10px;
        filter: brightness(1.1);

    }
`
