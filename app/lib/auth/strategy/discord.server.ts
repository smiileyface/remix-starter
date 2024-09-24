import { eq } from "drizzle-orm";
import { DiscordStrategy } from "remix-auth-discord";

import db from "~/db";
import { accounts, users } from "~/db/schema";
import { User } from "~/db/schema/users";
import { env } from "~/lib/env/server";

export const discordStrategy = new DiscordStrategy(
  {
    clientID: env.DISCORD_CLIENT_ID,
    clientSecret: env.DISCORD_CLIENT_SECRET,
    callbackURL: `${env.AUTH_URL}/auth/discord/callback`,
    scope: ["identify", "email"],
  },
  async ({
    accessToken,
    refreshToken,
    extraParams,
    profile,
  }): Promise<User> => {
    let user = await db
      .select()
      .from(users)
      .where(eq(users.email, profile.emails![0].value))
      .limit(1);

    if (user.length === 0) {
      const image = profile.photos
        ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.photos[0].value}.png`
        : null;
      user = await db
        .insert(users)
        .values({
          name: profile.displayName,
          email: profile.emails![0].value,
          image,
        })
        .returning();
    }

    await db
      .insert(accounts)
      .values({
        userId: user[0].id,
        provider: "discord",
        providerAccountId: profile.id,
        accessToken,
        refreshToken,
        expiresAt: Math.floor(Date.now() / 1000) + extraParams.expires_in,
        tokenType: extraParams.token_type,
      })
      .onConflictDoUpdate({
        target: [accounts.provider, accounts.providerAccountId],
        set: {
          accessToken,
          refreshToken,
          expiresAt: Math.floor(Date.now() / 1000) + extraParams.expires_in,
        },
      });

    return user[0];
  }
);
