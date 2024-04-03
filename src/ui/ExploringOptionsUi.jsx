/* eslint-disable react/prop-types */

import ButtonPrimaryUi from "./ButtonPrimaryUi"
const ExploringOptionsUi = ({data}) => {
    console.log(data)
  return (
    <div className="bg-bgprimary">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="w-[80%]">
            <img alt="exploring" src={data?.img} />
          </div>
          <div>
            <div className="text-xl md:text-3xl font-semibold ">
              <span>{data?.titleOne}</span>
              <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
            </div>
            <p className="text-lg mt-5">
             {data?.titleTwo}
            </p>
            <div className="flex gap-5 mt-5">
              <div>🔵</div>
              <div>
                <p className="text-lg font-semibold">{data?.subtTitleOne}</p>
                <p>
                  {data?.subDescOne}
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5 mb-5">
              <div>🔵</div>
              <div>
                <p className="text-lg font-semibold">{data?.subTitleTwo}</p>
                <p>
                  {data?.subDescTwo}
                </p>
              </div>
            </div>
            <ButtonPrimaryUi>View More</ButtonPrimaryUi>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploringOptionsUi
