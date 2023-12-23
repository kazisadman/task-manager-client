import paperfly from "../assets/Image/Plane Element.svg";
import image from "../assets/Image/Illustration 1.png";

const Banner = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:justify-center">
        <div>
          <div className="flex justify-around items-end mt-10">
            <h1 className="max-w-[494px] text-5xl font-bold">
              New Home for Task Organisation
            </h1>
            <img className="max-w-[190px]" src={paperfly} alt="" />
          </div>
          <p className="text-xl  max-w-[494px] text-[#5F5A6E] my-4">
            The online collaborative whiteboard platform to bring teams
            together, anytime, anywhere.
          </p>
          <button className="px-7 py-4 bg-[#76B1A6] text-white rounded-xl font-semibold">
            Let&apos;s Explore
          </button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
