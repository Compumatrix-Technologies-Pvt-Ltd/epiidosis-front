import finacial from "/img/aboutus/finacial.png";
import ButtonPrimaryUi from '../../ui/ButtonPrimaryUi'


const MediaAndPress = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="p-12">
          <img alt="finacial" src={finacial}  className="w-[80%]"/>
        </div>
        <div className="p-12">
        
        <div className="text-xl md:text-3xl font-semibold ">
          <span>Media and Press</span>
          <div className="bg-darkyellow h-1 ml-2 mt-2  w-[8rem] "></div>
       
     </div>
        
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
            mauris cras quis. In posuere tellus eget blandit in. Velit placerat
            rhoncus phasellus dictum iaculis pulvinar ipsum sed. Aliquet{" "}
          </p>
          <p className="mt-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu
            mauris cras quis. In posuere tellus eget blandit in. Velit placerat
            rhoncus phasellus dictum iaculis pulvinar ipsum sed. Aliquet{" "}
          </p>
          
         
          <div className="mt-2 text-gray-500">
           
            <div className="flex gap-2 mt-5 md:mt-8 ">
            <ButtonPrimaryUi>Read More</ButtonPrimaryUi>
           
          </div>
          </div>
        
        </div>
      </div>
  )
}

export default MediaAndPress