import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import React from "react";
import * as prismicH from '@prismicio/helpers';
import { Heading } from "./Heading";
const getExcerpt = (slices) => {
    const text = slices.filter((slice) => slice.slice_type === "text")
      .map((slice) => prismicH.asText(slice.primary.text))
      .join(" ");
  
    const excerpt = text.substring(0, 300);
    if (text.length > 300) {
      return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
    } else {
      return excerpt;
    }
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});
  
const findFirstImage = (slices) => {
   
    const imageSlice = slices.find((slice) => slice.slice_type === "image");
    if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
      return imageSlice.primary.image;
    }
};
const Article = ({ article }) => {
    const featuredImage = (prismicH.isFilled.image(article.data.featuredImage) && article.data.featuredImage) || findFirstImage(article.data.slices);
    const date = prismicH.asDate(article.data.publishDate || article.first_publication_date);
    const excerpt = getExcerpt(article.data.slices);
  
    return (
      <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
        <PrismicLink document={article} tabIndex="-1">
          <div className="relative h-56 overflow-hidden rounded-md bg-slate-300">
                {prismicH.isFilled.image(featuredImage) && (
                    <PrismicNextImage
                        field={featuredImage}
                        fill={true}
                        className="object-cover"
                        alt={featuredImage.alt}
                    />
                )}
            </div>
        </PrismicLink>
        <div className="grid grid-cols-1 gap-3 md:col-span-2">
          <Heading as="h2">
            <PrismicLink document={article}>
              <PrismicText field={article.data.title} />
            </PrismicLink>
          </Heading>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
          {excerpt && (
            <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>
      </li>
    );
  }
  export default Article;