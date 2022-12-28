import { PrismicLink } from "@prismicio/react";
import React from "react";
import SignUpForm from "./SignUpForm";

const Footer = ({withSignUpForm = true, settings}) => {

    return (
    <>
       <div className="grid grid-cols-1 justify-items-center gap-24">
       {withSignUpForm && <SignUpForm settings={settings} />}
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Proudly published using{" "}
          <PrismicLink href="https://prismic.io" className="text-slate-700">
            Prismic
          </PrismicLink>
        </div>
      </div>
    </>
    );
}
export default Footer;