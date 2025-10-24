
import { Facebook, Link, Linkedin, Twitter, Youtube } from "lucide-react"
import footerBg from "../assets/Images/footerBgpng.png"


const Footer = () => {
  return (
    <>
      <footer className="pt-8" style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center',height: '100%' }}>
         <h4 className="capitalize text-white text-4xl text-center font-bold">cosmic chemistry</h4> 

          <ul className="flex flex-wrap justify-center gap-8 mt-8">
                <li>
                    <Link to="/"  className="!text-white text-center flex items-center justify-center gap-2 mt-4">
                        Home                       
                    </Link>
                </li>
                              
                 <li>
                    <Link to="/" className="!text-white text-center flex items-center justify-center gap-2 mt-4">
                        Get Started                        
                    </Link>
                </li>
                 <li>
                    <Link to="/"  className="!text-white text-center flex items-center justify-center gap-2 mt-4">
                        Features                       
                    </Link>
                </li>
                 <li>
                    <Link to="/matches"  className="!text-white text-center flex items-center justify-center gap-2 mt-4">
                        Matches                       
                    </Link>
                </li>
            </ul>  
            <ul className="flex flex-wrap justify-center gap-8 mt-16">
                <li>

                    <a href="" className="min-w-[40px] max-h-[40px] flex justify-center items-center bg-[#191970] hover:bg-[#03142A] rounded-full p-2">
                        <Facebook className="!text-white text-center flex items-center justify-center gap-2  mx-auto"/>
                    </a>
                </li>
                 <li>

                    <a href="" className="min-w-[40px] max-h-[40px] flex justify-center items-center bg-[#191970] hover:bg-[#03142A] rounded-full p-2">
                        <Twitter className="!text-white text-center flex items-center justify-center gap-2  mx-auto"/>
                    </a>
                </li>
                 <li>

                    <a href="" className="min-w-[40px] max-h-[40px] flex justify-center items-center bg-[#191970] hover:bg-[#03142A] rounded-full p-2">
                        <Linkedin className="!text-white text-center flex items-center justify-center gap-2  mx-auto"/>
                    </a>
                </li>
                 <li>

                    <a href="" className="min-w-[40px] max-h-[40px] flex justify-center items-center bg-[#191970] hover:bg-[#03142A] rounded-full p-2">
                        <Youtube className="!text-white text-center flex items-center justify-center gap-2  mx-auto"/>
                    </a>
                </li>
            </ul>
            <div className="flex justify-end items-center gap-4  max-w-[1200px] mx-auto border-t border-solid border-t-[#ffffff3d] pt-[15px] pb-[15px] mt-[30px] text-center text-white">
                <a href="" className="block !text-white hover:underline">Terms Of Service</a>
                <a href="" className="block  !text-white hover:underline">Privacy Policy</a>
            </div>

        </footer>   
    </>
  )
}

export default Footer
