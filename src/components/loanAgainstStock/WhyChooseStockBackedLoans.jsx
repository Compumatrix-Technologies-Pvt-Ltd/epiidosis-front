import WhyChooseCard from "../../ui/WhyChooseCard"
import stockicon from '/img/loanagainstlistedstocks/stockicon.png'
import dollarloanicon from '/img/loanagainstlistedstocks/dollarloanicon.png'
import handdollaricon from '/img/loanagainstlistedstocks/handdollaricon.png'

const whyChooseData = {
    title:"Why Choose Epiidosis for Stock-Backed Loans",
    desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
    cardData:[
      {
        icon:handdollaricon,
        subtitle:"Maintain Investment Position",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:stockicon,
        subtitle:"Lower Interest Rates",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
      {
        icon:dollarloanicon,
        subtitle:"Quick Access to Funds",
        subdesc:"Lorem ipsum dolor sit amet consectetur. Euismod sed phasellus odio ultrices. Diam diam pretium porttitor eu pharetra tempor felis. Vulputate lectus pharetra cursus donec orci turpis."
      },
    ]
  }
  

const WhyChooseStockBackedLoans = () => {
  return (
    <>
     <WhyChooseCard data ={whyChooseData} /> 
    </>
  )
}

export default WhyChooseStockBackedLoans
