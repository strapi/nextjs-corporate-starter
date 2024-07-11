import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Testimonial {
  text: string;
  authorName: string;
  picture: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
      };
    };
  };
}

interface TestimonialsProps {
  data: {
    id: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}

function Testimonial({ text, authorName, picture }: Readonly<Testimonial>) {
  const imageUrl = getStrapiMedia(picture.data?.attributes.url);
  return (
    <div className="flex flex-col items-center mx-12 lg:mx-0">
      <div className="flex items-center">
        <div className="my-6">
          <Image
            src={imageUrl ?? ""}
            alt={picture.data?.attributes.alternativeText || "none provided"}
            className="inline-block h-32 w-32 rounded-full"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="relative text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        </svg>
        <p className="px-6 py-1 text-lg italic">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
        >
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        </svg>
      </div>
      <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
      <p>{authorName}</p>
    </div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100  m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h1 className="text-4xl font-semibold leading-none text-center">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-center">{data.description}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        {data.testimonials.map((testimonial: Testimonial, index: number) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
