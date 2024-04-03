import AboutOurCardUi from '../../ui/AboutOurCardUi'
import aboutloanhero from '/img/loanagainstlistedstocks/aboutloanhero.png'
import dollarloanicon from '/img/loanagainstlistedstocks/dollarloanicon.png'
import houseicon from '/img/loanagainstlistedstocks/houseicon.png'
import statloan from '/img/loanagainstlistedstocks/statloan.png'

const aboutUsData ={
    mainImg:aboutloanhero,
    title:"About Loan Against Listed Stocks",
    desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
    iconPlusData:[
      {
        subtitle:"Interest Rates",
        subDesc:"Interest rates for loans against listed stocks tend to be lower compared to unsecured loans or credit cards",
        icon:dollarloanicon
      },
      {
        subtitle:"Loan-to-Value Ratio (LTV)",
        subDesc:"Lenders typically offer a loan-to-value ratio, indicating the maximum percentage of the stock's value that can be borrowed",
        icon:houseicon
      },
      {
        subtitle:"Margin Calls",
        subDesc:"Lenders may issue margin calls if the value of the pledged stocks falls below a certain threshold",
        icon:statloan
      },
    ]
  }
  
const AboutUsLoanAgainstStock = () => {
  return (
    <>
      <AboutOurCardUi data={aboutUsData} />
    </>
  )
}

export default AboutUsLoanAgainstStock
