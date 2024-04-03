
import CardImgLeftRightContent from "../../ui/CardImgLeftRightContent";
import assetmonetization from "/img/assetmonetization/assetmonetization.png";
import baglogo from "/img/loanagainstlistedstocks/baglogo.png";
import speedmetorlogo from "/img/loanagainstlistedstocks/speedmetrologo.png";

const EligibillyCardData = {
  img: assetmonetization,
  titleOne: "Eligibility Criteria",
  titleTwo:"Key Points of Eligibility Criteria",
  subsetion: [
    {
      logo: baglogo,
      title: "Credit Score",
      subTitle:
        "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
    },
    {
      logo: baglogo,
      title: "Credit Score",
      subTitle:
        "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
    },
    {
      logo: speedmetorlogo,
      title: "Credit Score",
      subTitle:
        "Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
    },
  ],
};
const EligibilityCriteris = () => {
  return (
    <>
    
      <CardImgLeftRightContent data={EligibillyCardData} />
    </>
  );
};

export default EligibilityCriteris;
