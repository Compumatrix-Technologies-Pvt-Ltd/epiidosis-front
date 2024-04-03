import HeroSectionUi from "../../ui/HeroSectionUI";
import heroasset from '/img/assetmonetization/heroasset.png'
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
    title: "ASSET MONETIZATION ",
    link: "/assetmonetization",
  }
];

const heroTextData = {
    title:"Unlock the Value of Your Assets with Epiidosis Investments",
    desc:"Monetize Your Assets for Financial Growth",
    buttonText:"Explore Asset Monetization"
}
const HeroSectionAssetMonetization = () => {
  return (
    <div>
      <HeroSectionUi beradcrumbs={beradcrumbs} heroTextData={heroTextData} heroasset={heroasset} />
    </div>
  );
};

export default HeroSectionAssetMonetization;
