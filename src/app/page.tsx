import MovieArea from "@/components/movie-area";
import MovieHeader from "@/components/movie-header";
import MovieMain from "@/components/movie-main";

export default function Home() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieArea path="now_playing" title="Now Playing" />
      <MovieArea path="popular" title="Popular" />
      <MovieArea path="top_rated" title="Top Rated" />
    </>
  );
}
