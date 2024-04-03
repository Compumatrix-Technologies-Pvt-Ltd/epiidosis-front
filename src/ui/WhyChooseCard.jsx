/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";
// eslint-disable-next-line react/prop-types
const WhyChooseCard = ({ data }) => {
  console.log(data);

  const cardData = data?.cardData?.map((items, index) => {
    console.log(items);
    return (
      <div key={index}>
        <div className="bg-primary p-6 rounded-lg flex flex-col items-center justify-center">
          <Avatar
            size="xxl"
            src={items?.icon}
            className="  bg-white object-contain p-5"
            alt="Placeholder Image"
          />
          <h2 className="text-lg font-semibold text-center mt-5 text-lightyellow">
            {items?.subtitle}
          </h2>
          <p className="text-sm text-center text-white mt-2">{items?.subdesc}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container mx-auto p-5 flex flex-col items-center justify-center">
        <div className="text-xl md:text-3xl font-semibold ">
          <span>{data?.title} </span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
        <p className="text-center pl-8 pr-8 mt-4 ">{data?.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
          {cardData}
        </div>
      </div>
    </>
  );
};

export default WhyChooseCard;
