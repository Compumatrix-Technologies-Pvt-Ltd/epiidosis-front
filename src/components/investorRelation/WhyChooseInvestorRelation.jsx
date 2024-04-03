import handwithbulb from '/img/investorRelation/handwithbulbicon.png'
import profilecheckicon from '/img/investorRelation/profilecheckicon.png'
import profileicon from '/img/investorRelation/profileicon.png'
import WhyChooseCard from '../../ui/WhyChooseCard'
import DarkBgSecond from '../../ui/DarkBgSecond'
const DarkBgSecondData = {
  title: "Encourage investors to log in for personalized insights",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur. Egestas sit id varius tellus commodo congue ut. Maecenas nec facilisis massa diam.",
  buttonText: "Log In to Your Investor Dashboard",
};
const whyChooseData = {
    title:"Why Choose Epiidosis for Your Investment",
    desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
    cardData:[
      {
        icon:profilecheckicon,
        subtitle:"Expertise",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:handwithbulb,
        subtitle:"Innovative Solutions",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:profileicon,
        subtitle:"Flexibility",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
    ]
  }

const WhyChooseInvestorRelation = () => {
  return (
    <>
      <WhyChooseCard data={whyChooseData} />
      <DarkBgSecond data={DarkBgSecondData} />
    </>
  )
}

export default WhyChooseInvestorRelation
