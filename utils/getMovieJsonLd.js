import getMedia from './getMedia';

const getMovieJsonLd = (movie, seat) => {
  const price = (seat.types && seat.types.length > 0 && seat.types[0].amount) || 120;
  const priceCurrency = (seat.types && seat.types.length > 0 && seat.types[0].currency) || 'THB';
  const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    name: movie.title,
    image: getMedia(movie.cover, 'cardCover'),
    description: movie.description,
    offers: {
      '@type': 'Offer',
      priceCurrency,
      price,
      availability: 'http://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: movie.rating,
      reviewCount: '10', // just mockup data
    },
  };
  return JSON.stringify(jsonLd);
};

export default getMovieJsonLd;
