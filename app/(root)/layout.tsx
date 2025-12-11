import type { PropsWithChildren } from "react";

import { StreamClientProvider } from "@/providers/stream-client-provider";
import { syncCurrentUserToDb } from "@/actions/user.actions";

const RootLayout = async ({ children }: PropsWithChildren) => {
  await syncCurrentUserToDb();

  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
};

export default RootLayout;
