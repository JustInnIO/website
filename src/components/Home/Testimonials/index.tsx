import React from "react";
import TestimonialCard from "../../TestimonialCard";

export default function Testimonials() {
  return (
    <div className="relative py-16 lg:py-24 px-4 mx-auto max-w-screen-xl container">
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto max-w-screen-sm md:text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extra-bold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="font-regular text-[20px] text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-y-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        <TestimonialCard
          title="Solid foundation for any project"
          quote="This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind."
          name="Bonnie Green"
          role="Web developer @themesberg"
          imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        />
        <TestimonialCard
          title="Amazing tool for developers"
          quote="Using these components has accelerated our development time significantly. The integration with Tailwind makes it incredibly easy to use."
          name="John Doe"
          role="Senior Developer @examplecorp"
          imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        />
        <TestimonialCard
          title="Highly recommend for any team"
          quote="The flexibility and design quality are unmatched. It has become a staple in our workflow, enabling us to deliver projects faster."
          name="Jane Smith"
          role="Lead Designer @designhub"
          imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        />
      </div>
      <div className="flex justify-center mt-16">
        <button
          type="button"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-solid border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full lg:w-auto"
        >
          View more
        </button>
      </div>
    </div>
  );
}
