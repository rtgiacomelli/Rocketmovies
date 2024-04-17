import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  text-align: left;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.OFFWHITE_2};
  }

  > a {
    display: flex;
    justify-content: center;

    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    align-items: center;
    text-align: center;
  
    gap: 3px;

    svg {
      font-size: 16px;
    }

    p {
      font-size: 16px;
      font-family: 'Roboto Slab', sans-serif;
    }
  }

  Button {
    margin-top: 16px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  opacity: 0.4;
  background-size: cover;
`;