import AboutUs from "@/CustomeComponents/AboutUs"
import AmazingFeatures from "@/CustomeComponents/AmazingFeatures"
import BringYourJourney from "@/CustomeComponents/BringYourJourney"
import BannerHero from "@/CustomeComponents/Heading/Banner/BannerHero"
import HowItWork from "@/CustomeComponents/HowItWork"
import MembershipTiers from "@/CustomeComponents/MembershipTiers"
import WhyDifferent from "@/CustomeComponents/WhyDifferent"


const HomePage = () => {
  return (
    <>
        
        <BannerHero/>
        <AboutUs/>
        <HowItWork/>
        <WhyDifferent/>
        <AmazingFeatures/>
        <MembershipTiers/>
        <BringYourJourney/>
        
    </>
  )
}

export default HomePage
