import innovative from "/img/investorRelation/innovative.png";
import transparency from "/img/investorRelation/transperancy.png";
import proventrack from "/img/investorRelation/proventrack.png";
import robust from "/img/investorRelation/robust.png";

const dataCard = [
  {
    img: proventrack,
    title: "Proven Track Record",
    desc: "Epiidosis Finance Company boasts a proven track record of delivering consistent and competitive returns to investors over the years.",
  },
  {
    img: transparency,
    title: "Transparency and Accountability",
    desc: "Epiidosis prioritizes transparency and accountability, providing clear and comprehensive information about investment options, performance, and fees.",
  },
  {
    img: robust,
    title: "Robust Risk Management",
    desc: "Epiidosis employs robust risk management practices to safeguard investor capital and minimize downside risk, ensuring a prudent approach to investing.",
  },
  {
    img: innovative,
    title: "Innovative Approach",
    desc: "Epiidosis continually seeks innovative investment opportunities and strategies to adapt to changing market conditions and capitalize on emerging trends.",
  },
];
const WhyInvestWithEpiidosis = () => {
  return (
    <div className="bg-bgprimary">
      <div className="container mx-auto p-5 flex flex-col items-center justify-center">
        <div className="text-xl md:text-3xl font-semibold ">
          <span>Why Invest with Epiidosis</span>
          <div className="bg-primary h-1 ml-2 mt-2  w-[10rem] "></div>
        </div>
        <p className="text-center pl-8 pr-8 mt-4 ">
          Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed
          egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc
          turpis lacus laoreet dignissim turpis lacus ornare tristique.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
          {/* {cardData} */}
          {dataCard.map((item, index) => {
            return (
              <div key={index}>
                <div className="bg-white flex gap-5 p-5 items-center">
                  <div className="bg-bgprimary p-5 w-auto h-auto">
                    <img alt="logo" src={item?.img} className="w-[5rem] h-auto" />
                  </div>

                  <div>
                    <p>{item?.title}</p>
                    <p>{item?.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyInvestWithEpiidosis;
