import type { LoaderFunctionArgs } from "@remix-run/node";

import { auth } from "~/lib/auth/auth.server";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  if (!params.provider) {
    return { status: 400, redirect: "/auth/login" };
  }
  return auth.authenticate(params.provider, request, {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  });
};
