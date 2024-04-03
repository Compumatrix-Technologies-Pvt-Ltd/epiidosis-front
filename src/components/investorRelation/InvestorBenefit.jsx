import ownershiplogo from '/img/investorRelation/ownershiplogo.png'
import liquiditylogo from '/img/investorRelation/liquiditylogo.png'
import taxlogo from '/img/investorRelation/taxlogo.png'
import investorBenifits from '/img/investorRelation/investorBenefits.png'
import CardImgLeftRightContent from '../../ui/CardImgLeftRightContent';
const EligibillyCardData = {
    img: investorBenifits,
    titleOne: "Investor Benefits",
    titleTwo:"Unlocking Value and Opportunity",
    subsetion: [
      {
        logo: liquiditylogo,
        title: "Liquidity",
        subTitle:
          "Investing in stocks or equity securities grants investors partial ownership in the underlying companies, allowing",
      },
      {
        logo: ownershiplogo,
        title: "Ownership Stake",
        subTitle:
          "Lenders typically offer a loan-to-value ratio, indicating the maximum percentage of the stock's value that can be borrowed",
      },
      {
        logo: taxlogo,
        title: "Tax Benefits",
        subTitle:
          "Many investments offer tax advantages, such as tax-deferred growth, capital gains tax treatment, or tax-deductible contributions",
      },
    ],
  };
const InvestorBenefit = () => {
  return (
    <>
     <CardImgLeftRightContent data={EligibillyCardData} />
    </>
  )
}

export default InvestorBenefit
