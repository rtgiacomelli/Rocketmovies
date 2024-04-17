import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Content = styled.div`
  width: 100%;
  padding: 0 123px;
  margin-top: 50px;
  margin-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  

  > h1 {
      font-size: 32px;
      font-weight: 400;
    }
`;

export const NewMovie = styled(Link)`
  > Button {
      width: 207px;
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  .tags {
    display: inline-flex;
  }

  .scroll {
  position: relative;
  overflow-y: auto;
  }

  .scroll::-webkit-scrollbar {
    width: 5px;
    border-radius: 9px;
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #FF859B;
    border-radius: 9px;
    height: 30px;
  }

  .scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .scroll::-webkit-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
`; 