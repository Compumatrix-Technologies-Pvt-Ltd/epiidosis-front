import { CardHeader, CardBody } from "@material-tailwind/react";
import target from '/img/aboutus/target.png'
import eye from '/img/aboutus/eye.png'
import donate from '/img/aboutus/donate.png'

const CompanyOverview = () => {
  return (
    <div className="container mt-12 mb-12 mx-auto flex flex-col items-center justify-center w-full p-5 ">
      <div className="text-xl md:text-4xl font-semibold text-center">
        <span>Company overview</span>
        <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
      </div>

      <div className=" w-full  flex  justify-center items-center h-[25%]">
        <div className=" flex flex-col  md:flex-row gap-5 p-5">
          <div className="flex relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={target}  />
              </CardHeader>
              <CardBody>
                <p className="text-lg font-semibold mb-2">Our mission</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam
                  sed egestas mattis. Pulvinar leo vitae lacus in quis.
                </p>
              </CardBody>
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={eye}  />
           
              </CardHeader>
              <CardBody>
                <p className="text-lg font-semibold mb-2">Our vision</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam
                  sed egestas mattis. Pulvinar leo vitae lacus in quis.
                </p>
              </CardBody>
            </div>
          </div>
          <div className="flex relative md:max-w-[20rem]  overflow-hidden border shadow-2xl bg-white z-10">
            <div className="bg-darkyellow    md:h-full w-4"></div>
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="ml-6 p-5 rounded-none bg-yellow-100 w-[5rem] h-[5rem] flex justify-center items-center"
              >
                <img alt="logos" src={donate}  />
              </CardHeader>
              <CardBody>
                <p className="text-lg font-semibold mb-2">Core Values</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam
                  sed egestas mattis. Pulvinar leo vitae lacus in quis.
                </p>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
