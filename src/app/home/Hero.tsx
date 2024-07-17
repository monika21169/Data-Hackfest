import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Get the Pay
          <br />
          you deserve
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          Elevate your career: Resume scanning, Negotiate salary, and Job matches !!!
        </p>
        <Link href="/resume-parser" className="btn-primary mt-6 lg:mt-14">
          Upload Resume <span aria-hidden="true">→</span>
        </Link>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          We provides a customised email for every user
        </p>
        <p className="mt-2 text-xl text-gray-600 lg:mt-20">
          Looking for a job that suits your profile?{" "}
          <Link href="http://localhost:3001" className="underline underline-offset-2">
            Find Job
          </Link>
        </p>
      </div>
      
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
      <Image
          src="https://img.freepik.com/premium-vector/vector-illustration-girl-working-white-background_911949-815.jpg"
          width={500} 
          height={400} 
        />
      </div>
    </section>
  );
};
