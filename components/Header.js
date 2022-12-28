import { PrismicLink, PrismicText } from "@prismicio/react";
import { React } from "react";
import Profile from "./Profile";

const Header = ({ navigation, settings }) => {
    console.log('==================================== navigation.data.homepageLabel');
    console.log(navigation.data.homepagelabel);
    console.log('====================================');
    return (
        <>
            <div className="grid grid-cols-1 justify-items-center gap-20">
                <nav>
                    <ul className="flex flex-wrap justify-center gap-10">
                        <li className="font-semibold tracking-tight text-slate-800">
                            <PrismicLink href="/">
                                <PrismicText field={navigation.data.homepagelabel} />
                            </PrismicLink>
                        </li>
                        {navigation.data?.links.map((item, index) => (
                            <li key={index} className="font-semibold tracking-tight text-slate-800">
                                <PrismicLink field={item.link}>
                                    <PrismicText field={item.label} />
                                </PrismicLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Profile 
                    name={settings.data.name}
                    description={settings.data.description}
                    profilePicture={settings.data.profilePicture}
                />
            </div>
        </>
    );

}
export default Header;