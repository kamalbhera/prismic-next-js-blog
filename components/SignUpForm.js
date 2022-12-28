import { PrismicRichText, PrismicText } from "@prismicio/react";
import React from "react";
import * as prismicH from '@prismicio/helpers'
const SignUpForm = ({ settings }) => {
    return (
      <div className="px-4">
        <form
          action="/api/sign-up"
          method="post"
          className="grid w-full max-w-xl grid-cols-1 gap-6"
        >
          {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <div className="text-center font-serif tracking-tight text-slate-500">
              <PrismicRichText
                field={settings.data.newsletterDescription}
                components={{
                  heading1: ({ children }) => (
                    <div as="h2" className="mb-4 last:mb-0">
                      {children}
                    </div>
                  ),
                  paragraph: ({ children }) => (
                    <p className="mb-4 italic last:mb-0">{children}</p>
                  ),
                }}
              />
            </div>
          )}
          <div className="grid grid-cols-1 gap-2">
            <div className="relative">
              <label>
                <span className="sr-only">Email address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane.doe@example.com"
                  required={true}
                  className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
                />
              </label>
              <button
                type="submit"
                className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
              >
                <span className="sr-only">Submit</span>
                <span aria-hidden={true}>&rarr;</span>
              </button>
            </div>
            {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
              <p className="text-center text-xs tracking-tight text-slate-500">
                <PrismicText field={settings.data.newsletterDisclaimer} />
              </p>
            )}
          </div>
        </form>
      </div>
    );
}
export default SignUpForm
  