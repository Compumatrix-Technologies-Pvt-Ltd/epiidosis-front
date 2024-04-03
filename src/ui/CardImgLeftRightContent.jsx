/* eslint-disable react/prop-types */
import ButtonPrimaryUi from "./ButtonPrimaryUi";

const CardImgLeftRightContent = ({ data }) => {
 
  return (
    <div className="bg-bgprimary">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 gap-4 p-5 items-center ">
          <div className="w-[80%]">
            <img alt="exploring" src={data?.img} />
          </div>
          <div>
            <div className="text-xl md:text-3xl font-semibold ">
              <span>{data?.titleOne}</span>
              <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
            </div>
            <p className="text-lg mt-5">{data?.titleTwo}</p>
            {data?.subsetion.map((items, index) => {
            
              return (
                <div key={index}>
                  <div className="flex gap-5 mt-5 mb-6 items-center">
                    <div className="bg-[#339FDE1A] p-5">
                      <img alt="logo" src={items?.logo} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        {items?.title}
                      </p>
                      <p>{items?.subTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="flex gap-5 mt-5 mb-5">
            <div>🔵</div>
            <div>
              <p className="text-lg font-semibold">{data?.subTitleTwo}</p>
              <p>
                {data?.subDescTwo}
              </p>
            </div>
          </div> */}
            <ButtonPrimaryUi>View More</ButtonPrimaryUi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImgLeftRightContent;
