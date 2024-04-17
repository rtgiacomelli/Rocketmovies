import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 0;
  border-radius: 10px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`;