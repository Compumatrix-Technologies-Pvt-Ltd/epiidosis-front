import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
const beradcrumbs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Our Services",
    link: "/aboutus",
  },
  {
    title: "Fundrasing",
    link: "/aboutus",
  },
];
const HeroSectionFundRaising = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${herosectionfundraising})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[350px]"
      >
        <div className="absolute inset-0 flex flex-col container mx-auto">
          <BreadcrumbsDefault data={beradcrumbs} />
          <div className="ml-12">
          <p className="text-white mt-5 text-xl md:text-start md:text-3xl">
            Empower Your Vision With  
          </p>
          <p className="text-white mt-1 text-xl md:text-start md:text-3xl">
             Epiidosis Investments
          </p>
          <p className="  md:w-[56%]  md:text-lg  text-gray-400 mt-3">
            Unlock Funding Opportunities for Your Project
          </p>
          <div className="w-fit mt-6">
            <ButtonPrimaryUi>
              {" "}
              <span className="flex  items-center gap-2 ">
                {" "}
                Get Started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>{" "}
            </ButtonPrimaryUi>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionFundRaising;
