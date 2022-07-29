import MOVIELIST from "../mocks/top5MoviesAssessement.json";

const list = JSON.parse(JSON.stringify(MOVIELIST));
const movieData = list?.components[1]?.items;
const sortedData = movieData.sort((a, b) => {
  return a.rank - b.rank > 0 ? 1 : -1;
});

export default sortedData;
