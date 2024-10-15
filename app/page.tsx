import Accordion from "@/components/Accordion";
import Image from "next/image";
export default function Home() {
  return (
    <article className="flex flex-col-reverse md:flex-row w-3/4 justify-end md:w-8/12 md:space-x-10">
      <section className="flex flex-col items-center  w-full md:w-8/12">
        <h3 className="text-2xl">welcome to my website</h3>
        <h2 className="text-blue-400 text-3xl">Personal Information</h2>
        <p className="text-lg">Date Of Birth: 1991</p>
        <div>
          <p className="text-lg">Education :</p>
          <ol className="text-lg list-disc pl-5">
            <li>
              Information technology bachelor's degree from Iran's University of
              Applied Science and Technology{" 2019"}
            </li>
          </ol>
          <p className="text-lg">Languages:</p>
          <ol className="flex flex-row text-lg list-disc space-x-10 pl-5">
            <li>Persian: Native</li>
            <li>English</li>
          </ol>
        </div>

        <Accordion />
      </section>
      <section className="w-full md:w-4/12 pb-10 md:pb-0">
        <div className="relative">
          <Image
            width={500}
            height={0}
            src="/personal-picture.jpg"
            alt="Amin Sadeghi's picture"
            className="w-full aspect-square rounded-lg"
          />
          <div className="w-full bg-blue-900 aspect-square absolute -z-10 left-5  top-5 rounded-br-lg"></div>
          <div className="w-full bg-blue-600 aspect-square absolute -z-10 -left-5 -top-5 rounded-tl-lg"></div>
        </div>
      </section>
    </article>
  );
}
