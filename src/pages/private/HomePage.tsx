import backgroundImg from "../../assets/images/home-background.png";
import { ImgSlider, MovieCategory, Viewers } from "../../components";
import { useHome } from "../../hooks";

export const HomePage = () => {
  const {
    //state
    moviesCategories,
    //methods
    //functions
  } = useHome();

  return (
    <main className="relative min-h-[calc(100vh-250px)] overflow-x-hidden block top-[64px] p-0 px-[calc(3.5vw+5px)]">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed opacity-100 z-[-1]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <ImgSlider />
      <Viewers />
      {moviesCategories.map((category) => (
        <MovieCategory
          key={category.id}
          movies={category.movies}
          title={category.title}
        />
      ))}
    </main>
  );
};
