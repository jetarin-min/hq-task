import styled from 'styled-components';
import getMedia from '../../utils/getMedia';

const MainContainer = styled.div`
  padding-right: 30px;
  @media (max-width: 700px) {
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const ActiveImageContainer = styled.div`
  cursor: pointer;
  height: 500px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(206, 206, 206, 0.5);
  @media (max-width: 700px) {
    height: 200px;
  }
  position: relative;
  >img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const Gallery = ({ cover, alt }) => (
  <MainContainer>
    <ActiveImageContainer>
      {cover && <img src={getMedia(cover, 'detailCover')} alt={alt} />}
    </ActiveImageContainer>
  </MainContainer>
);

export default Gallery;
