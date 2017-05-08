import styled from 'styled-components';

import UserPlaceholder from './loading-user-bg.jpg';
import RepoPlaceholder from './loading-repo-bg.jpg';

const LoadingCard = styled.div`
  width: ${props => (props.userPlaceholder ? '100%' : '33.33%')};
  padding: 20px;

  @media (max-width: 375px){
    width: 100%;
  }

  @media (max-width: 667px){
    width: 100%;
  }

  > .content{
    display: flex;
    background-image: ${props => (props.userPlaceholder ? `url(${UserPlaceholder})` : `url(${RepoPlaceholder})`)};
    background-position: ${props => (props.userPlaceholder ? `left center` : `url(${RepoPlaceholder})`)};
    background-repeat: no-repeat;
    background-size: contains;
    min-height: ${props => (props.userPlaceholder ? `200px` : `250px`)};
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    flex-direction: column;

    @media (max-width: 375px){
      border-radius: 0;
    }

    @media (max-width: 667px){
      border-radius: 0;
    }

    .row{
      margin-bottom: 5px;

      &:last-child{
        margin-bottom: 0;
      }

    }

  }
`;

export default LoadingCard;
