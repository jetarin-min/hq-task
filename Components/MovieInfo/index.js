import React from 'react';
import moment from 'moment-timezone';

import styled from 'styled-components';
import Rating from '../Rating';
import Gallery from '../Gallery';

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

const OrderButton = styled.div`
  height: 51px;
  width: 200px;
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  font-weight: 500;
  display: block;
  text-align: center;
  box-sizing: border-box;
  padding: 16px;
  margin: 20px 0 0;
  cursor: pointer;
  @media (max-width: 700px) {
    height: 39px;
    padding: 10px;
    width: 180px;
    margin: 20px auto 0;
  }
`;

const ReleaseDate = styled.p`
  color: ${props => props.theme.borderGray};
`;

const MovieInfo = (props) => {
  const { type, title, description, cover, rating, releaseDate, seat, isSeatLoading } = props;
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
        {isSeatLoading && 'Loading seat...'}
        {!isSeatLoading && seat.types && seat.types.length > 0
          ? seat.types.map(s => <OrderButton key={s.title}>{`${s.title} - ${s.amount} ${s.currency}`}</OrderButton>)
          : <h4>No seat available right now :(</h4>
        }
      </ContentContainer>
    </MainContainer>
  );
};

export default MovieInfo;
