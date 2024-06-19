import styled from 'styled-components';

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 0;

  .current__weather--basic {
    width: 55%;
  }

  .current__weather--summary {
    width: 35%;
  }

  .current__weather {
    img {
      max-width: 50px;
    }

    .current__weather--city {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      font-size: 1.2rem;
      padding: 0 0 10px 0;

      p {
        font-weight: 600;
      }

      span {
        font-size: 0.95rem;
        color: #999;
      }
    }

    .current__weather--details {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      .current__weather--temperature {
        font-size: 2.5rem;
      }

      .current__weather--details--conditions {
        .current__weather--conditions {
          font-size: 1.25rem;
          color: #999;
        }
      }
    }

    .current__weather--footer {
      font-size: 0.9rem;
      color: #505050;
    }
  }

  .current__weather--summary--details {
    .current__weather--summary--element {
      display: flex;
      flex-flow: row wrap;
      justify-content: start;
      align-items: center;

      img {
        max-width: 50px;
      }
    }

    .current__weather--summary--image {
      width: 90px;
    }

    .current__weather--summary--element--details {
      .name {
        font-size: 1.5rem;
        color: #737171;
      }

      .value {
        font-size: 1.3rem;
        color: #2a2525;
      }
    }
  }
`;
