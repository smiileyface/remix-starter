import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { auth } from "~/lib/auth/auth.server";
import strategies from "~/lib/auth/strategy";
import { toTitleCase } from "~/lib/utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await auth.isAuthenticated(request, {
    successRedirect: "/",
  });

  const providers = Object.entries(strategies).map(([_, strategy]) => ({
    name: strategy.name,
    label: toTitleCase(strategy.name),
  }));

  return { providers };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.clone().formData();

  return await auth.authenticate(body.get("provider") as string, request, {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  });
};

export default function Login() {
  const { providers } = useLoaderData<typeof loader>();

  return (
    <main className="min-w-screen grid min-h-screen place-items-center">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription className="text-lg">
            Choose a provider to login with:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="flex flex-col items-center gap-2">
            {providers.map(({ name, label }) => (
              <Button
                key={name}
                type="submit"
                name="provider"
                value={name}
                className="w-1/2"
              >
                {label}
              </Button>
            ))}
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
