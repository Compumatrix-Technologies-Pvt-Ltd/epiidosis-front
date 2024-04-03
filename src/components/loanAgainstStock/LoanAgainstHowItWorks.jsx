import click from '/img/loanagainstlistedstocks/click.png'
import application from '/img/loanagainstlistedstocks/application.png'
import documentation from '/img/loanagainstlistedstocks/documentation.png'
import { Typography } from '@material-tailwind/react';
import HowItWorksCard from '../../ui/HowItWorksCard';
const cardData = [
    {
      no: "1",
      title: "Application",
      img: application,
      desc: "Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra temp",
    },
    {
      no: "2",
      title: "Review and Pre-Approval",
      img: click,
      desc: "Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra temp",
    },
    {
      no: "3",
      title: "Documentation",
      img: documentation,
      desc: "Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra temp",
    },
  ];
const LoanAgainstHowItWorks = () => {
  return (
    <div className="relative max-h-auto sm:min-h-[58rem] md:min-h-[33rem] 2xl:min-h-[75rem] ">
      <div className="relative bg-green h-fit md:h-full w-full">
        <div className="w-full   container mx-auto p-12">
          <Typography className="text-lg md:text-2xl text-center text-white">
            How it works
          </Typography>

          <p className="mt-2 text-lg text-white mb-10 md:mb-10 ">
            Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
            egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
            turpis lacus laoreet dignissim turpis lacus ornare tristique. Eget
            porttitor tortor fames neque aenean mauris adipiscing metus.
          </p>
        </div>
      </div>
      <div className="absolute md:absolute w-full flex justify-center items-center  md:h-[40%]">
        <div className="flex flex-wrap justify-center">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="ml-1 p-2 w-full md:w-auto md:flex-none md:ml-0 md:p-0 md:px-2 "
            >
              <HowItWorksCard data={item} />
            </div>
          ))}
        </div>

   
      </div>
    </div>
  )
}

export default LoanAgainstHowItWorks
