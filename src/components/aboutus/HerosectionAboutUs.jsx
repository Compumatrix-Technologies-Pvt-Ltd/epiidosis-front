import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import heroSectionAboutUs from "/img/aboutus/aboutherosection.png";


const beradcrumbs = [{
  title:'Home',
  link:'/'
},
{
  title:'About Us',
  link:'/aboutus'
}]
const HerosectionAboutUs = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroSectionAboutUs})` }}
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[350px]"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
       
          <BreadcrumbsDefault data = {beradcrumbs} />
          <p className="text-white mt-5 text-xl md:text-center md:text-3xl">
            Discover Our Financial Excellence
          </p>
          <p className=" text-left p-3 md:w-[56%] md:m-5 md:text-lg  text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
            egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
            turpis lacus laoreet dignissim turpis lacus ornare tristique. Eget
            porttitor tortor fames neque aenean mauris adipiscing metus.
          </p>
        </div>
      </div>
    </>
  );
};

export default HerosectionAboutUs;
