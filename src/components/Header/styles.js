import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.STROKE};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;

  gap: 64px;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin: 0;
`;


export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 100%;
  
    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY};
      background-color: transparent;
      border: none;
      text-align: right;
    }

    a {
      white-space: nowrap;

      font-family: 'Roboto Slab ', sans-serif;
      font-size: 14px;
      font-weight: 700;
      
      color: ${({ theme }) => theme.COLORS.OFFWHITE_1};
    }
  }
`