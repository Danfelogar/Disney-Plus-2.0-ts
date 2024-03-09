import img1 from "../../assets/images/cta-logo-one.svg";
import img2 from "../../assets/images/cta-logo-two.png";
import imgBackGround from "../../assets/images/login-background.jpg";

export const WelcomePage = () => {
  return (
    <section className="overflow-hidden flex flex-col text-center h-screen">
      <div className="mb-[10vw] w-full relative min-h-screen box-border flex justify-center items-center flex-col p-20 h-full">
        <div className="max-w-[650px] w-full flex items-center flex-col">
          <img
            className="mb-3 max-w-[600px] min-h-[1px] block w-full"
            src={img1}
            alt="logo1"
          />
          <a className="font-bold text-white bg-blue-600 mb-3 w-full tracking-wide text-lg py-4 border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
            GET ALL THERE
          </a>
          <p className="text-gray-500 text-xs mb-6 leading-tight tracking-wide">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/24, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img
            className="max-w-[600px] mb-5 inline-block align-bottom w-full"
            src={img2}
            alt="logo2"
          />
        </div>
        <div
          className="h-full w-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0 z-[-1]"
          style={{ backgroundImage: `url(${imgBackGround})` }}
        />
      </div>
    </section>
  );
};
