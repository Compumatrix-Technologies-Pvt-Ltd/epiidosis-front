import HeroSectionUi from "../../ui/HeroSectionUI";
import heroloanagainst from '/img/loanagainstlistedstocks/heroloanagainst.png'
const beradcrumbs = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "OUR SERVICES",
      link: "#",
    },
    {
      title: "INVESTOR RELATIONS ",
      link: "/investorrelation",
    }
  ];

  const heroTextData = {
    title:"Invest with Confidence in Epiidosis Investments",
    desc:"Unlock Opportunities, Maximize Returns",
    buttonText:"Explore Investment Opportunities"
}
const HeroInvestorRelations = () => {
  return (
    <div>
           <HeroSectionUi beradcrumbs={beradcrumbs} heroTextData={heroTextData} heroasset={heroloanagainst} />

    </div>
  )
}

export default HeroInvestorRelations
