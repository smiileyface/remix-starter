import {
  type LoaderFunctionArgs,
  type MetaFunction,
  json,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import { auth } from "~/lib/auth/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Starter" },
    { name: "description", content: "A basic starter for Remix.run" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await auth.isAuthenticated(request, {
    failureRedirect: "/auth/login",
  });

  return json({ user });
};

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto p-2 text-center">
      <h1>Hello, {user.name}!</h1>
      <Form method="post" action="/auth/logout">
        <Button type="submit" variant="destructive">
          Log Out
        </Button>
      </Form>

      <hr />

      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
}
