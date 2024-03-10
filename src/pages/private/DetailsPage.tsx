import { IoMdCloseCircleOutline } from "react-icons/io";

import { useDetails } from "../../hooks";
import player from "../../assets/images/play-icon-black.png";
import trailer from "../../assets/images/play-icon-white.png";
import groupWatch from "../../assets/images/group-icon.png";

export const DetailsPage = () => {
  const {
    //state
    movieDetails,
    isModalOpen,
    //methods
    //functions
    changeShowModal,
  } = useDetails();

  if (!movieDetails) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          aria-valuetext="Loading..."
          role="progressbar"
          className="animate-spin h-16 w-16 border-t-4 border-b-4 border-purple-500 rounded-full"
        ></div>
      </div>
    );
  }
  return (
    <div className="relative min-h-[calc(100vh-250px)] overflow-x-hidden block top-[72px] p-0 px-[calc(3.5vw+5px)] pt-16">
      <div className="fixed top-0 left-0 right-0 bottom-0 inset-0 z-[-1] opacity-80">
        <img
          className="w-screen h-screen object-cover"
          src={movieDetails?.backgroundImgFront}
          alt={`${movieDetails?.titleFront}-background`}
        />
      </div>
      <div className="title-img justify-start h-[30vw] min-h-[170px] w-full items-end flex mx-auto my-0 pb-6">
        <img
          className="max-w-[600px] min-w-[200px] w-[35vw]"
          src={movieDetails?.titleImgFront}
          alt={`${movieDetails?.titleFront}-title`}
        />
      </div>
      <div className="max-w-[874px]">
        <div
          className="items-center flex min-h-[56px] gap-2 mx-0 my-6"
          style={{
            flexFlow: "row wrap",
          }}
        >
          <button className=" md:h-14 rounded cursor-pointer flex items-center justify-center tracking-[1.8px] gap-1 uppercase ml-0 mr-[2px] my-0 md:px-6 py-0 border-[none] bg-[#F9F9F9] hover:bg-[#C6C6C6] h-[45px]  md:ml-0 md:mr-2.5 md:my-0 px-3 md:py-0">
            <img className="w-[25px] md:w-[32px]" alt="player" src={player} />
            <span className="text-xs md:text-[15px]">Play</span>
          </button>
          <button
            onClick={changeShowModal}
            className="border-[#F9F9F9] border border-solid #F9F9F9 bg-[#4D000000] md:h-14 rounded cursor-pointer flex items-center justify-center tracking-[1.8px] gap-1 uppercase ml-0 mr-[2px] my-0 md:px-6 py-0 border-[none] hover:bg-[#C6C6C6] h-[45px]  md:ml-0 md:mr-2.5 md:my-0 px-3 md:py-0"
          >
            <img className="w-[25px] md:w-[32px]" alt="trailer" src={trailer} />
            <span className="text-xs md:text-[15px] text-[#F9F9F9]">
              Trailer
            </span>
          </button>
          <div className="h-11 w-11 flex justify-center items-center bg-[rgba(0,0,0,0.6)] cursor-pointer md:mr-4 rounded-[50%] border-2 border-solid border-[white]">
            <span className="bg-[rgb(249,249,249)] inline-block first:h-0.5 first:translate-x-px first:translate-y-0 first:rotate-0 first:w-4" />

            <span className="bg-[rgb(249,249,249)] inline-block  first:translate-y-0 first:rotate-0  h-4 -translate-x-2 rotate-0 w-0.5" />
          </div>
          <div className="h-11 w-11 flex justify-center items-center cursor-pointer rounded-[50%] bg-white">
            <div className="h-10 w-10 rounded-[50%] bg-[rgba(0,0,0)]">
              <img alt="groupWatch" src={groupWatch} className="w-full" />
            </div>
          </div>
        </div>
        <div className="text-[rgb(249,249,249)] text-xs md:text-[15px] min-h-[20px]">
          {movieDetails?.subTitleFront}
        </div>
        <div className="leading-[1.4] text-sm md:text-xl text-[rgb(249,249,249)] px-0 py-4">
          {movieDetails?.descriptionFront}
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              onClick={changeShowModal}
              className="fixed inset-0 bg-black opacity-50"
            ></div>
            <div className="bg-white w-[96%] md:w-[70%] h-[90%] md:h-[70%] rounded-lg p-2 md:p-14 relative">
              <button
                onClick={changeShowModal}
                className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900"
              >
                <IoMdCloseCircleOutline color="rgb(55 65 81)" size={30} />
              </button>
              <iframe
                className="w-full h-full"
                src={movieDetails?.urlTrailerFront}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
