import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import React from "react";
import * as prismicH from '@prismicio/helpers'

const Profile = ({name, description, profilePicture}) => {

    return (
        <>
            <div className="px-4">
                <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
                    <PrismicLink href="/" tabIndex="-1">
                        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
                            {prismicH.isFilled.image(profilePicture) && (
                                <PrismicNextImage
                                    field={profilePicture}
                                    fill={true}
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </PrismicLink>
                    {(prismicH.isFilled.richText(name) ||
                        prismicH.isFilled.richText(description)) && (
                            <div className="grid grid-cols-1 gap-2 text-center">
                                {prismicH.isFilled.richText(name) && (
                                    <div>
                                        <PrismicLink href="/">
                                            <PrismicText field={name} />
                                        </PrismicLink>
                                    </div>
                                )}
                                {prismicH.isFilled.richText(description) && (
                                    <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                                        <PrismicText field={description} />
                                    </p>
                                )}
                            </div>
                        )}
                </div>
            </div>
        </>
    );
}
export default Profile;