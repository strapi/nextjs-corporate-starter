import Link from "next/link";
import Image from "next/image";
import { renderButtonStyle } from "../utils/render-button-style";
import HighlightedText from "./HighlightedText";

export default function LangRedirect() {
  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <HighlightedText
            text="There is no content available in your language."
            tag="h1"
            className="text-5xl font-bold leading-none sm:text-4xl mb-8"
            color="dark:text-violet-400"
          />

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/en" className={renderButtonStyle("primary")}>
              Back To English
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg"
            alt="city view"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
