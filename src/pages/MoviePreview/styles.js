import styled from "styled-components";

export const Container = styled.div`
  .content {
    padding: 40px 123px;
  
    > a {
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
        gap: 3px;
        align-items: center;

        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        .user {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      .dateTime {
        display: flex;
        gap: 3px;
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