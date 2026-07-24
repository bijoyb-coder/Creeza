import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="max-w-md text-center">
        <div className="mono text-xs tracking-[0.14em] text-[color:var(--steel)]">404</div>
        <h1 className="mt-6 font-serif text-4xl">The pane is not here.</h1>
        <p className="mt-4 text-sm text-[color:var(--steel)]">
          The page you sought has been moved, retired, or was never cast.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-solid">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">This page did not load.</h1>
        <p className="mt-3 text-sm text-[color:var(--steel)]">
          Something failed on our end. You may try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-solid">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CREEZA SAFETY GLASS WORKS PVT.LTD | Master Glaziers for Architecture, Mobility & Solar" },
      { name: "description", content: "CREEZA SAFETY GLASS WORKS PVT.LTD crafts float, coated, laminated and tempered glass of uncommon precision — for architecture, mobility and energy. Eleven ateliers, forty-four nations, certified to the world's most exacting standards." },
      { name: "author", content: "CREEZA SAFETY GLASS WORKS PVT.LTD AG" },
      { property: "og:site_name", content: "CREEZA SAFETY GLASS WORKS PVT.LTD" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
