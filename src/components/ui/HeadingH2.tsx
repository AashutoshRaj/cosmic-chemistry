import { Button } from '@/components/ui/button';

interface HeadingProps {
  title: string;
  subTitle: React.ReactNode;
   subLine: React.ReactNode;
  button: React.ReactNode;

}

const HeadingH2: React.FC<HeadingProps> = ({ title, subTitle, subLine, button}) => {
  return (
    <div  >
      <span className="text-[#210226] block font-bold text-[16px] leading-[30px] tracking-[0] capitalize">{title}</span>  {/* Blue text */}
      <h2 className="text-[#191970] mb-5 mt-0 text-white block font-extrabold text-[48px] leading-[62px] tracking-[0] capitalize">{subTitle}</h2>     {/* Red text */}
      <p className="text-[#424242] mb-[30px] text-white block font-normal text-[20px] leading-[29px] tracking-[0]">{subLine}</p>       {/* Gray text */}
    {button && (
        <Button className="bg-[#191970] h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0]">
          {button}
        </Button>
      )}
    </div>
  );
};

export default HeadingH2;
