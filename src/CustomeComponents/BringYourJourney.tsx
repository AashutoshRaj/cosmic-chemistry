import { Button } from '@/components/ui/button'
import earthBg from "../assets/Images/image 83.png"
import shadowImg from "../assets/Images/image 86.png"

const BringYourJourney = () => {
  return (
    <div className='relative text-center py-[76px]  mx-auto bg-black' style={{ backgroundImage: `url(${earthBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className='text-white text-base max-w-[694px] mx-auto mb-43px'>The universe has already written your story — let’s help you find the one who completes your cosmic equation.</p>
         <Button className="border-[#ffffff] max-w-[400px] border-solid border-[1px] bg-[#191970] w-full mx-auto h-[52px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] mt-[20px]">
              Begin Your Cosmic Journey
            </Button>
        <img src={shadowImg} alt="shadow" className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full  h-full'/>
    </div>
  )
}

export default BringYourJourney
