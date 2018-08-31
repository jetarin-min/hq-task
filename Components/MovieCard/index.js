import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h4`
  color: green;
  font-size: 20px;
`;

const MovieCard = props => {
  const { title, id, description } = props;
  return (
    <div>
      <Title>{title || 'Undefined'}</Title>
      <p>{description}</p>
      <Link
        href={{ pathname: '/movie', query: { id } }}
        as={`/movie/${id}`}
      >
        <a>More Detail</a>
      </Link>
    </div>
  );
};
export default MovieCard;
