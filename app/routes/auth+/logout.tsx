import { ActionFunctionArgs } from "@remix-run/node";

import { auth } from "~/lib/auth/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  await auth.logout(request, { redirectTo: "/auth/login" });
};
