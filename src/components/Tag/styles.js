import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  border-radius: 8px;
  margin-right: 8px;
  padding: 5px 16px;
  
  background-color: ${({ theme }) => theme.COLORS.TAG_BG2};
  
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;

`;