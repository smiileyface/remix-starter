import { Authenticator } from "remix-auth";

import { User } from "~/types/user";

import { sessionStorage } from "./session.server";
import { discordStrategy } from "./strategy/discord.server";

export const auth = new Authenticator<User>(sessionStorage);

auth.use(discordStrategy, "discord");
