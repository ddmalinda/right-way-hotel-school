import SmallTitle from '../../../common/titles/SmallTitle';
import SingleSvgImage from './SingleSvgImage'

type FillItems={
  fill:string;
  d:string;
}

type FooterLink = {
  link: string;
  text: string;
  icon?: string | FillItems[];
};

type FooterIcons = {
  title: string;
  links: FooterLink[];
};
type Props = {
  footerDataIcons: FooterIcons[];
}

export default function FooterDataIcons({footerDataIcons}: Props) {
  return (
    <>
    {footerDataIcons.map((val, key) => {
              return (
                <div key={key}>
                  {val.title == 'Contact Info' ? (
                    <>
                      <SmallTitle title={val.title} />
                      {val.links.map((items, idx) => (
                        <div className="flex mx-auto space-x-3" key={idx}>
                          <div>
                            <SingleSvgImage iconData={items.icon}/>
                          </div>
                          <div>{items.text}</div>
                        </div>
                      ))}
                    </>
                  )
                    : (
                      <>
                        <SmallTitle title={val.title} />
                        < div className="flex lg:w-1/2">
                          {val.links.map((items, key) => (
                            <div className="flex mx-auto space-x-3" key={key}>
                              <div>
                              <SingleSvgImage iconData={items.icon}/>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                </div>
              )
            })}
    </>
  )
}