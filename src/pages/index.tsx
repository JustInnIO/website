import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import LatestDocs from "../components/Home/LatestDocs";
import ServicesOverview from "../components/Home/ServicesOverview";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Turning Vision into Innovation"
    >
      <Hero />
      <LatestPosts />
      {/* <ServicesOverview /> */}
      <LatestDocs />
      {/* <Testimonials /> */}
    </Layout>
  );
}
