import * as prismicH from "@prismicio/helpers";
import { PrismicRichText, PrismicText } from "@prismicio/react";
PrismicRichText
import { Bounded } from "../../components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className="font-serif text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          <br></br>
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <p className="text-sm"> &mdash; {slice.primary.source}</p>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;
