import type { MetaFunction } from "@remix-run/node";
import Header from "~/common/header";
import IndexHero from "~/components/index/hero";
import IndexIntro from "~/components/index/intro";

export const meta: MetaFunction = () => {
  return [
    { title: "XavWeb" },
    { name: "description", content: "Welcome to XavWeb" },
  ];
};

export default function IndexPage() {
  return (
    <>
      <Header />
      <IndexHero />
      <IndexIntro />
    </>
  );
}
