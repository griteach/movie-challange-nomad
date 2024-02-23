import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const json = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    ).then((json) => json.json());
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <img src={movie?.medium_cover_image} alt={movie?.title} />
          <h1>{movie?.title}</h1>
          <h2>{movie?.title_long}</h2>
        </div>
      )}
    </div>
  );
}
export default Detail;
