import Link from 'next/link';
import styled from 'styled-components';
import getMedia from '../../utils/getMedia';
import Rating from '../Rating';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.borderGray};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .3);
  &:hover {
    .more-detail {
      color: ${props => props.theme.yellow};
    }
  }
`;

const ImageContainer = styled.div`
  background-color: ${props => props.theme.lightGray};
  height: 0;
  padding-bottom: 130%;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  padding: 0 12px 12px;
  >a {
    text-align: right;
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.gray};
  text-align: center;
  margin: 12px 0;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 56px;
  display: -webkit-box;
  overflow: hidden;
  @media (max-width: 700px) {
    font-size: 18px;
    max-height: 42px;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.gray};
  margin: 12px 0;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 48px;
  display: -webkit-box;
  overflow: hidden;
  @media (max-width: 700px) {
    font-size: 12px;
    max-height: 42px;
  }
`;

const RatingContainer = styled.div`
  text-align: center;
`;

const Image = styled.img.attrs({
  src: props => props.cover,
  alt: props => props.alt,
})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: auto;
`;

const MoreDetail = styled.p.attrs({
  className: 'more-detail',
})`
  colors: ${props => props.theme.borderGray};
  transition: color .4s;
  text-align: right;
  margin: 12px 0 0;
`;

const MovieCard = props => {
  const { title, id, description, cover, rating } = props;
  return (
    <Link
      href={{ pathname: '/movie', query: { id } }}
      as={`/movie/${id}`}
    >
      <a>
        <Container>
          <ImageContainer>
            <Image cover={getMedia(cover, 'cardCover')} alt={title} />
          </ImageContainer>
          <ContentContainer>
            <Title>{title || 'Undefined'}</Title>
            <RatingContainer>
              <Rating rating={rating} />
            </RatingContainer>
            <Description>{description || 'Undefined'}</Description>
            <MoreDetail>More Detail</MoreDetail>
          </ContentContainer>
        </Container>
      </a>
    </Link>
  );
};
export default MovieCard;
