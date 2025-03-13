import axios from "axios";

const base = "https://api.themoviedb.org/3";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmYyZmI5MDk3M2Q0Y2M0ODlhNTEyODRjNWVhNzQ5MyIsIm5iZiI6MTc0MTcxNTEzOC4wMTEwMDAyLCJzdWIiOiI2N2QwNzZjMmQ0Zjc0MTM3MzI2MDcxMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FNR7mIr_wskkNECiMrtXuXpvOqAy2AhZGH4dsGisuOI";

export const getDataFromTMBD = async (path: string) => {
  const response = await axios.get(base + path, {
    headers: {
      Authorization: token,
    },
  });
  const result = response.data.results;
  return result;
};

export const getTrailerLink = async (id: number) => {
  const result: VideoType[] = await getDataFromTMBD(`/movie/${id}/videos`);
  let key = result[0].key;
  result.forEach((video) => {
    if (video.type === "Trailer") {
      key = video.key;
    }
  });
  return key;
};
