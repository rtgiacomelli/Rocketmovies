import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.TAG_BG};
  color: ${({ theme }) => theme.COLORS.GRAY};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
`;