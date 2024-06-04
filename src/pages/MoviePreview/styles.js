import styled from "styled-components";

export const Container = styled.div`
  .content {
    padding: 40px 123px;
  
    > button {
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

    .title {
      display: flex;
      align-items: center;
      text-align: center;
      gap: 19px;
      margin-bottom: 24px;

      h1 {
        font-size: 36px;
        font-weight: 600;
        font-family: 'Roboto Slab', sans-serif;
      }
    }

    .userInfo {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-bottom: 40px;

      .username {
        display: flex;
        gap: 6px;
        align-items: center;

        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        button {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          border: none;
          background-color: transparent;
        }
      }

      .dateTime {
        display: flex;
        gap: 6px;
        align-items: center;
        
        .clock {
          color: ${({ theme }) => theme.COLORS.PINK};
        }

        .date {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
        }
      }

    }

    .delete {
      display: flex;
      gap: 40px;

      margin-top: 40px;
      margin-bottom: 16px;

      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    .tags {
      margin-bottom: 40px;
    }

    .movieDescription {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      font-weight: 400;

      text-align: justify;
    }
  }
`

export const RatingContainer = styled.div`
  svg {
    font-size: 24px;
  }
`;