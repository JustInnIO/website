import clsx from "clsx";
import React from "react";
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BackToTopButton from "@theme/BackToTopButton";
import type { Props } from "@theme/BlogListPage";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogLayout from "@theme/BlogLayout";
import MyLayout from "../MyLayout";
import BlogPostGridItems from "../BlogPostGridItems";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const { blogDescription } = metadata;

  return (
    <>
      <PageMetadata title={`Blog`} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props) {
  const { metadata, items } = props;

  return (
    <MyLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-sm">
          <div className="text-left mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Blog
            </h2>
            <p className="font-normal text-gray-500 text-xl dark:text-gray-400">
              Stay informed with our latest blog updates, where we share expert analyses and practical guides on leveraging Microsoft 365 for optimal productivity and seamless automation.
            </p>
          </div>
        </div>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        <BlogPostGridItems items={items} />
      </div>
      <div className="mt-4">
        <BlogListPaginator metadata={metadata} />
      </div>
      <BackToTopButton />
    </MyLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
