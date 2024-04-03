import finacial from "/img/aboutus/finacial.png";
import ButtonPrimaryUi from '../../ui/ButtonPrimaryUi'
import ButtonSecondaryUi from "../../ui/ButtonSecondaryUi";
const FinancialExperties = () => {
  return (
    <div className="bg-bgcream mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="p-12">
          <img alt="finacial" src={finacial} className="w-[80%]" />
        </div>
        <div className="p-12">
          <div className="text-3xl">Financial Expertise</div>
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
            mauris cras quis. In posuere tellus eget blandit in. Velit placerat
            rhoncus phasellus dictum iaculis pulvinar ipsum sed. Aliquet{" "}
          </p>
          <div className="mt-8 text-gray-500">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#339FDE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
                
              </svg>
              Lorem ipsum dolor sit amet consectetur. Gravida
            </span>{" "}
          </div>
          <div className="mt-2 text-gray-500">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#339FDE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
                
              </svg>
              Lorem ipsum dolor sit amet consectetur. Gravida
            </span>{" "}
          </div>
          <div className="mt-2 text-gray-500">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#339FDE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
                
              </svg>
              Lorem ipsum dolor sit amet consectetur. Gravida
            </span>{" "}
            <div className="flex gap-2 mt-5 md:mt-8 ">
            <ButtonPrimaryUi>Dashbaord</ButtonPrimaryUi>
            <ButtonSecondaryUi>
              <span className="flex items-center gap-2">
                See More{" "}
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
              </span>
            </ButtonSecondaryUi>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default FinancialExperties;
