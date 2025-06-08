
import { Link } from 'react-router-dom';
import SmallTitle from '../../../common/titles/SmallTitle';

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
   <div className="lg:x-auto :w-1/2">
               {footerDataLinks.map((val, key) => {
                 return (
                   <div key={key}>
                     <SmallTitle title={val.title} />
                     {val.links.map((items,key) => {
                       return (
                         <div key={key} className='hover:'>
                          <Link to={items.link} style={{ textDecoration: 'none', color: 'inherit' ,marginRight:'10px'}}>
                           {items.text}
                          </Link>
                         </div>
                       )
                     })}
                   </div>
                 )
               })}
             </div>
  )
}
