import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "description", content: "Welcome to XavWeb" },
    { name: "og:title", content: "Blog" }
  ];
};

export default function IndexPage() {
  return (
    <>

    </>
  );
}
