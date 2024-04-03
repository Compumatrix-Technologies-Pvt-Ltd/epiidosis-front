import ExploringOptionsUi from '../../ui/ExploringOptionsUi'
import assetmonetization from '/img/assetmonetization/assetmonetization.png'


const ExploringData = {
  img:assetmonetization,
  titleOne:"Exploring Asset Monetization Options",
  titleTwo:"Key Points to Consider When Exploring Asset Monetization Options",
  subtTitleOne:"Asset Assessment",
  subDescOne:"Begin by conducting a thorough assessment of your assets to determine their market value, condition, and potential for monetization",
subTitleTwo:"Strategic Objectives",
subDescTwo:"Clarify your strategic objectives and financial goals for asset monetization."
}
const ExploringAssetMonetization = () => {
  return (
    <>
      <ExploringOptionsUi data={ExploringData}/>
    </>
  )
}

export default ExploringAssetMonetization
