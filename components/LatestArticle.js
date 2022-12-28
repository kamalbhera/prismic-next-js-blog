import React from "react";
import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicText } from "@prismicio/react";

const LatestArticle = ({article}) => {
    const date = prismicH.asDate(
        article.data.publishDate || article.first_publication_date
      );
      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    return (
        <>
            <li>
            <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                <PrismicLink document={article}>
                <PrismicText field={article.data.title} />
                </PrismicLink>
            </h1>
            <p className="font-serif italic tracking-tighter text-slate-500">
                {dateFormatter.format(date)}
            </p>
            </li>
        </>
    );
}
export default LatestArticle;