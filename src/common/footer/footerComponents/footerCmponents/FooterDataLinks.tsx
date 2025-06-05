import SmallTitle from "../../../titles/SmallTitle";

type Props={
    footerDataLinks: FooterSection[];
}
type FooterSection = {
  title: string;
  links: FooterLink[];
};
type FooterLink = {
  link: string;
  text: string;
};


export default function FooterDataLinks({footerDataLinks}:Props) {
  return (
   <div className="w-1/2 mx-auto">
               {footerDataLinks.map((val, key) => {
                 return (
                   <div key={key}>
                     <SmallTitle title={val.title} />
                     {val.links.map((items) => {
                       return (
                         <div>
                           {items.text}
                         </div>
                       )
                     })}
                   </div>
                 )
               })}
             </div>
  )
}
