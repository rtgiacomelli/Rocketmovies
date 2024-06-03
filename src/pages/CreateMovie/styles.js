import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 123px;

  > .voltar {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background-color: transparent;

    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 24px;
  }

  > h1 {
    font-size: 36px;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.OFFWHITE_1};

    margin-bottom: 40px;
  }

  .inputArea {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 40px;
  }

  .observations {
    margin-top: 90px;
    height: 274px;
    transform: translateY(-40%);
}

  > h2 {
    margin-bottom: 24px;
  }

  .tags {
    display: flex;
    align-items: center;
    text-align: center;

    padding: 16px;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    border-radius: 8px;
  }

  .buttons {
    display: flex;
    gap: 40px;

    margin-top: 40px;
    margin-bottom: 16px;
  }

  .delete {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`