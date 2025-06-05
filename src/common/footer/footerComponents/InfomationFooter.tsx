
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
    <div className=" bg-[#2E3A5F] text-white p-5">
      <div className="container mx-auto sm:grid lg:flex ">
        <div className="w-1/3 mx-auto justify-items-center">
          <img className="sm:w-auto md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 rounded-3" src="/assets/logo2.png" alt="Logo" />
        </div>
        <div className="w-2/3 mx-auto lg:flex ">
          <FooterDataLinks footerDataLinks={footerDataLinks} />
          <div className="w-1/2 mx-auto">
            <FooterDataIcons footerDataIcons={footerDataIcons} />
          </div>
        </div>
      </div>
    </div>
  )
}
