import { Button } from '@/components/ui/button';

interface HeadingProps {
  title: string;
  subTitle: string;
  subLine: string;
  button: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ title, subTitle, subLine, button }) => {
  return (
    <>
      <span className="text-white block font-bold text-[16px] leading-[62px] tracking-[0] capitalize">{title}</span>  {/* Blue text */}
      <h1 className="text-red-600 mb-5 text-white block font-extrabold text-[52px] leading-[62px] tracking-[0] capitalize">{subTitle}</h1>     {/* Red text */}
      <p className="text-gray-300 mb-[30px] text-white block font-normal text-[20px] leading-[29px] tracking-[0]">{subLine}</p>       {/* Gray text */}
      <Button className='bg-[#191970] h-[52px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0]'>{button}</Button>
    </>
  );
};

export default Heading;
