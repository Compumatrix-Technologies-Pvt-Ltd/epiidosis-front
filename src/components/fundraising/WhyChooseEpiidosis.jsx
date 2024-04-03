import WhyChooseCard from '../../ui/WhyChooseCard';
import grid1 from '/img/fundraising/grid1.png'
import grid2 from '/img/fundraising/grid2.png'
import grid3 from '/img/fundraising/grid3.png'

const whyChooseData = {
  title:"Why Choose Epiidosis for Fundraising",
  desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
  cardData:[
    {
      icon:grid1,
      subtitle:"Expertise and Experience",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid2,
      subtitle:"Tailored Solutions",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
    {
      icon:grid3,
      subtitle:"Fast and Efficient Service",
      subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
    },
  ]
}

const WhyChooseEpiidosis = () => {
  return (
    // <div className="container mx-auto p-5 flex flex-col items-center justify-center">
    //   <div className="text-xl md:text-3xl font-semibold ">
    //     <span>Why Choose Epiidosis for Fundraising</span>
    //     <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
    //   </div>
    //   <p className="text-center pl-8 pr-8 mt-4 ">
    //     Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas
    //     mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus
    //     laoreet dignissim turpis lacus ornare tristique.
    //   </p>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
    //     <div className="bg-primary p-6 rounded-lg flex flex-col items-center justify-center">
    //       <img
    //         src={grid1}
    //         className="w-15 h-15 mb-4"
    //         alt="Placeholder Image"
    //       />
    //       <h2 className="text-lg font-semibold text-center text-lightyellow">Expertise and Experience</h2>
    //       <p className="text-sm text-center text-white">
    //       Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis.
    //       </p>
    //     </div>
    //     <div className="bg-primary p-6 rounded-lg flex flex-col items-center justify-center">
    //       <img
    //         src={grid2}
    //         className="w-15 h-15 mb-4"
    //         alt="Placeholder Image"
    //       />
    //       <h2 className="text-lg font-semibold text-center text-lightyellow">Tailored Solutions</h2>
    //       <p className="text-sm text-center text-white">
    //       Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis.
    //       </p>
    //     </div>
    //     <div className="bg-primary p-6 rounded-lg  flex flex-col items-center justify-center">
    //       <img
    //         src={grid3}
    //         className="w-15 h-15 mb-4"
    //         alt="Placeholder Image"
    //       />
    //       <h2 className="text-lg font-semibold text-center text-lightyellow">Fast and Efficient Service</h2>
    //       <p className="text-sm text-center text-white">
    //       Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <WhyChooseCard data={whyChooseData}/>
    </>
  );
};

export default WhyChooseEpiidosis;
