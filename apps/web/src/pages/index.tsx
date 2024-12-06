import type { CustomIncomingMessage } from "@/middlewares/type";
import type { ServerResponse } from "http";

import { ArrowUpDownIcon, HomeIcon, PencilIcon } from "lucide-react";
import { createRouter } from "next-connect";

import { makeGetServerSideProps } from "@/middlewares/common/makeGetServerSideProps";
import { pipe } from "@/middlewares/utils/pipe";
import { middleware } from "@/pages-src/index";
import { Button } from "@/shad-cn/components/ui/button";
import { Dock, DockIcon } from "@/shad-cn/components/ui/dock";
import { Separator } from "@/shad-cn/components/ui/separator";
import { cn } from "@/utils/tailwind";

const router = createRouter<CustomIncomingMessage, ServerResponse>();
router.get(pipe(middleware));

export const getServerSideProps = makeGetServerSideProps(router);

export default function HomePage() {
  return (
    <div
      className={cn(
        "grid",
        "grid-rows-[20px_1fr_20px]",
        "items-center",
        "justify-items-center",
        "min-h-screen",
        "p-8",
        "pb-20",
        "gap-16",
        "sm:p-20",
        "font-[family-name:var(--font-geist-sans)]",
      )}
    >
      <main
        className={cn(
          "flex",
          "flex-col",
          "gap-4",
          "row-start-2",
          "items-center",
          "justify-center",
          "max-w-80",
          "w-full",
        )}
      >
        <section
          className={cn(
            "flex",
            "gap-4",
            "items-center",
            "justify-center",
            "max-w-80",
            "w-full",
          )}
        >
          <h2>홈 페이지</h2>
        </section>
        <section
          className={cn(
            "flex",
            "gap-4",
            "items-center",
            "justify-center",
            "max-w-80",
            "w-full",
          )}
        >
          <Dock direction="middle" className={cn("bg-white")}>
            <DockIcon>
              <Button
                variant="ghost"
                size="icon"
                className={cn("rounded-full")}
              >
                <HomeIcon className={cn("text-slate-800")} />
              </Button>
            </DockIcon>
            <DockIcon>
              <Button
                variant="ghost"
                size="icon"
                className={cn("rounded-full")}
              >
                <PencilIcon className={cn("text-slate-800")} />
              </Button>
            </DockIcon>
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
              <Button
                variant="ghost"
                size="icon"
                className={cn("rounded-full")}
              >
                <ArrowUpDownIcon className={cn("text-slate-800")} />
              </Button>
            </DockIcon>
          </Dock>
        </section>
      </main>
    </div>
  );
}
