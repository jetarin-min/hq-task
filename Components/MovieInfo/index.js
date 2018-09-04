import React from 'react';
import moment from 'moment-timezone';

import styled from 'styled-components';
import Rating from '../Rating';
import Gallery from '../Gallery';
import Spinner from '../Spinner';
import { Button } from '../Global';

moment.tz.setDefault('Asia/Bangkok');

const MainContainer = styled.div`
  display: flex;
  margin: 30px 0;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 20px 0; 
  }
  padding: 0 0 20px;
  border-bottom: 1px solid ${props => props.theme.borderGray};
`;

const GalleryContainer = styled.div`
  min-width: 50%;
  max-width: 50%;
  @media (max-width: 700px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  min-width: 50%;
  max-width: 50%;
  @media (max-width: 700px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Type = styled.h4`
  color: ${props => props.theme.borderGray};
  margin: 0 0 10px;
`;

const Header = styled.h1`
  margin: 10px 0;
`;
const Detail = styled.p`
  margin: 10px 0 20px;
  >span {
    white-space: pre-line;
  }
`;

const ReleaseDate = styled.p`
  color: ${props => props.theme.borderGray};
`;

const SpinnerContainer = styled.div`
  position: relative;
  height: 300px;
`;

const MovieInfo = (props) => {
  const { type, title, description, cover, rating, releaseDate, seat, isSeatLoading, onPurchase, isLoading } = props;
  if (isLoading) {
    return (
      <SpinnerContainer><Spinner /></SpinnerContainer>
    );
  }
  return (
    <MainContainer>
      <GalleryContainer>
        <Gallery cover={cover} alt={title} />
      </GalleryContainer>
      <ContentContainer>
        <Type>{type}</Type>
        <Header>{title}</Header>
        <Rating rating={rating} />
        <ReleaseDate>
          <span>
            {`Release: ${moment(releaseDate).format('LLL')}`}
          </span>
        </ReleaseDate>
        <Detail>
          <span>{description}</span>
        </Detail>
        {isSeatLoading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        {!isSeatLoading && seat.types
          && seat.types.map(s => <Button key={s.title} onClick={() => onPurchase(s.id)}>{`${s.title} - ${s.amount} ${s.currency}`}</Button>)
        }
        {!isSeatLoading
          && seat.types && seat.types.length <= 0 && <h4>No seat available right now :(</h4>
        }
      </ContentContainer>
    </MainContainer>
  );
};

export default MovieInfo;
