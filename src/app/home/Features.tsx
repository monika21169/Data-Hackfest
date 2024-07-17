import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureinclSrc from "public/assets/heart.svg";
import featurenegotiateSrc from "public/assets/feature-privacy.svg";
import featurejobSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free and Easy to Use",
    text: "Our website can be used by anyone without any issues, its easy to use user-friendly design helps you navigate better",
  },
  {
    src: featureinclSrc,
    title: "Inclusive and Accessible",
    text: "We support diversity and that's why all our features are designed in such a way that it supports every gender and is accessible to everyone",
  },
  {
    src: featurenegotiateSrc,
    title: "Assist in Negotiation",
    text: "We help form a customise email that you can use to negotiate your salary from the employee, so that you get the salary you deserve",
  },
  {
    src: featurejobSrc,
    title: "Unique Job Search",
    text: (
      <>
        Search for the job according to your gender, skillset, level of experience, and intersts and get an insight of the company at one place
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
