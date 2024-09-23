import type { MetaFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Starter" },
    { name: "description", content: "A basic starter for Remix.run" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto p-2 text-center">
      <Button>Hello World!</Button>
    </div>
  );
}
