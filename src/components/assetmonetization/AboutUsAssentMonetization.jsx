import dolloricon from '/img/assetmonetization/dolloricon.png'
import handhome from '/img/assetmonetization/handhome.png'
import laptopicon from '/img/assetmonetization/laptopicon.png'
import aboutasset from '/img/assetmonetization/aboutasset.png'
import AboutOurCardUi from '../../ui/AboutOurCardUi'
const aboutUsData ={
  mainImg:aboutasset,
  title:"About Asset Monetization",
  desc:"Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.",
  iconPlusData:[
    {
      subtitle:"Reasons for Monetization",
      subDesc:"Companies may pursue asset monetization for various reasons, including raising capital for business expansion",
      icon:dolloricon
    },
    {
      subtitle:"Real Estate Monetization",
      subDesc:"Real estate assets can be monetized through sale-leaseback transactions",
      icon:handhome
    },
    {
      subtitle:"Equipment Monetization",
      subDesc:"Equipment assets can be monetized through sale, lease, or equipment financing arrangements",
      icon:laptopicon
    },
  ]
}



const AboutUsAssentMOnetization = () => {
  return (
    <>

      <AboutOurCardUi data={aboutUsData}/>
    </>
  )
}

export default AboutUsAssentMOnetization
