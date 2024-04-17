import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  margin-right: 123px;
  margin-left: 123px;

  padding: 32px;

  height: 240px;
  border-radius: 16px;

  background-color: rgba(255, 192, 203, 0.05);

  > h1 {
    color: ${({ theme }) => theme.COLORS.OFFWHITE_1};

    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.TAG_TXT};

    font-size: 16px;
    font-weight: 400;

    text-align: justify;

    margin: 15px 0 15px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.TAG_TXT2};
    }

  border-radius: 16px;
`;