import HeadingH2 from "@/components/ui/HeadingH2"
import bgImageDiff from "../assets/Images/whyDeff.png"

const WhyDifferent = () => {
  return (
    <>
       <div className="text-center py-[76px] max-w-[1300px] mx-auto rounded-[50px] my-[41px] mx-auto bg-black" style={{ backgroundImage: `url(${bgImageDiff})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <HeadingH2
         
          title=""
          subTitle={
            <div className="text-white">Why We’re Different</div>
          }
          subLine={
            <div className="w-full max-w-[1040px] mx-auto">
              <p className="text-lg text-white">
                Other dating apps stop at sun signs. Cosmic Chemistry unlocks your entire chart — rising, moon, aspects, and more — to create connections on a soul-deep level.
              </p>
              
            </div>
          }
          button="Join Now!"
        />
       </div>
    </>
  )
}

export default WhyDifferent
