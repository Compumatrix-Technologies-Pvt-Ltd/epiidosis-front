/* eslint-disable react/prop-types */
import { Badge,CardHeader,CardBody } from "@material-tailwind/react"

const HowItWorksCard = ({data}) => {
    console.log(data)
  return (
    <div className="relative flex flex-col align-middle items-center ">
    <Badge
      withBorder
      placement="top"
      color="white"
      content={data?.no}
      className="absolute  w-12 font-bold h-12 text-lg top-0 transform  z-[12] from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
    />
    <div className=" flex flex-col justify-center   md:flex-row ">
      <div className=" relative md:max-w-[20rem] flex flex-col justify-center w-auto  overflow-hidden border shadow-2xl bg-white z-10 ">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="ml-6 rounded-none   flex justify-center items-center"
        >
          <img alt="logos" src={data?.img} className="mt-5 object-fill w-10 h-10  md:w-[10rem] md:h-[10rem]" />
        </CardHeader>
        <CardBody>
          <p className="md:text-lg text-sm font-semibold mb-2">{data?.title}</p>
          <p className="text-xs">
            {data?.desc}
          </p>
        </CardBody>
      </div>
    </div>
  </div>
  )
}

export default HowItWorksCard;
