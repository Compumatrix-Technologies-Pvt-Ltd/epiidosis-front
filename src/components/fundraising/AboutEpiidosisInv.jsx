import investment from "/img/fundraising/investment.png";
import callgirl from "/img/fundraising/callgirl.png";
import hand from '/img/fundraising/hand.png';
import paper from '/img/fundraising/paper.png' 
import AboutOurCardUi from "../../ui/AboutOurCardUi";

const aboutUsData ={
  mainImg:investment,
  title:"About Epiidosis Investments",
  desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
  iconPlusData:[
    {
      subtitle:"Core Services",
      subDesc:"Finance companies typically offer a range of financial services such as lending.",
      icon:callgirl
    },
    {
      subtitle:"Regulation and Compliance",
      subDesc:"Finance companies are subject to regulatory oversight by government agencies to ensure consumer protection.",
      icon:paper
    },
    {
      subtitle:"Risk Management",
      subDesc:"Managing risks inherent in financial activities is crucial for finance companies.",
      icon:hand
    },
  ]
}
const AboutEpiidosisInv = () => {
  return (
  <>
    <AboutOurCardUi data ={aboutUsData} />
    </>
  );
};

export default AboutEpiidosisInv;
