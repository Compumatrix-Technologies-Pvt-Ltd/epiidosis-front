
import {AccordionCustomIcon} from '../../ui/AccordionCustomIcon'
const GrowthaccordionData = [
    {
      title: "What is the difference between stocks and bonds?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is a mutual fund ?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is the difference between a traditional IRA and a Roth IRA?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is the difference between stocks and bonds?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is diversification ?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is the difference between a bull market and a bear market?",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },
    {
      title: "What is the Federal Reserve??",
      content: "Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis ultrices venenatis. In pulvinar et senectus non eu. Integer semper ullamcorper dignissim in aenean mattis nulla elit semper.",
    },

  ];
const AboutUsFAQ = () => {
  return (
    <div className='mb-12 container mx-auto mt-12'>
    <p className='md:text-center md:text-3xl font-semibold'>Frequently asked questions</p>
    <AccordionCustomIcon data = {GrowthaccordionData} />
    </div>
  )
}

export default AboutUsFAQ