
import FooterDataIcons from "./footerCmponents/FooterDataIcons";
import FooterDataLinks from "./footerCmponents/FooterDataLinks";


type FillItems = {
  fill: string;
  d: string;
}

type FooterLink = {
  link: string;
  text: string;
  icon?: string | FillItems[];
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterIcons = {

  title: string;
  links: FooterLink[];
};
type Props = {
  footerDataLinks: FooterSection[];
  footerDataIcons: FooterIcons[];
}
export default function InfomationFooter({ footerDataLinks, footerDataIcons }: Props) {
  return (
    <div className=" bg-[#2E3A5F] text-white">
      <div className="container pt-5 mx-auto lg:flex ">
        <div className="py-2 mx-auto lg:w-1/3 lg:justify-items-center">
          <img className="sm:w-auto md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded-3" src="/assets/logo2.png" alt="Logo" />
        </div>
        <div className="space-y-5 sm:p-2 lg:mx-auto lg:w-1/2 lg:flex">
          <FooterDataLinks footerDataLinks={footerDataLinks} />
          <div className="mx-auto lg:w-2/3 ">
            <FooterDataIcons footerDataIcons={footerDataIcons} />
          </div>
        </div>
      </div>
    </div>
  )
}
