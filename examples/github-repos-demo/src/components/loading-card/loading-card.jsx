import styled from 'styled-components';

const LoadingCard = styled.div`
  width: 33.33%;
  padding: 20px;

  > .content{
    display: flex;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    flex-direction: column;

    .row{
      margin-bottom: 5px;

      &:last-child{
        margin-bottom: 0;
      }

    }

  }
`;

export default LoadingCard;
