import AboutOurCardUi from '../../ui/AboutOurCardUi';
import empowermenticon from '/img/investorRelation/empowermenticon.png';
import heroinvestor from '/img/investorRelation/heroinvestor.png'
import integrity from '/img/investorRelation/integrity.png'
import trusticon from '/img/investorRelation/trusticon.png'

const aboutUsData ={
  mainImg:heroinvestor,
  title:"About Loan Against Listed Stocks",
  desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
  iconPlusData:[
    {
      subtitle:"Empowerment",
      subDesc:"Enabling individuals and businesses to achieve financial success through innovative solutions",
      icon:empowermenticon
    },
    {
      subtitle:"Integrity",
      subDesc:"Conducting business with honesty, transparency, and ethical principles",
      icon:integrity
    },
    {
      subtitle:"Trust",
      subDesc:"Building strong, long-lasting relationships with clients based on reliability and integrity",
      icon:trusticon
    },
  ]
}

const AboutUsInvestorRelation = () => {
  return (
    <>
     <AboutOurCardUi data={aboutUsData} />
    </>
  )
}

export default AboutUsInvestorRelation
