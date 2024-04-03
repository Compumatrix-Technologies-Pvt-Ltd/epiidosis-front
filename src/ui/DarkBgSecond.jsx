/* eslint-disable react/prop-types */

import ButtonPrimaryUi from "./ButtonPrimaryUi"


const DarkBgSecond = ({data}) => {
  
  return (
    <div className="bg-bgsecond">
    <div className="container  mx-auto grid md:grid-cols-2 justify-between justify-items-center items-center p-5 ">
      <div className="text-white md:flex md:gap-5 flex flex-col mt-10 mb-10">
        <p className="text-xl md:text-2xl">
         {data?.title}
        </p>
        <p className="md:text-lg  ">
          {data?.subTitle}
        </p>
      </div>
      <div className="mt-5 md:mt-0">
        <ButtonPrimaryUi><span className="text-sm md:text-lg ">{data?.buttonText}</span></ButtonPrimaryUi>
      </div>
    </div>
  </div>
  )
}

export default DarkBgSecond
