import type { Middleware, CustomIncomingMessage } from "@/middlewares/type";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { pipe } from "@/middlewares/utils/pipe";

type Req = CustomIncomingMessage;

const prefetch: Middleware<Req> = async () => {
  const queryClient = new QueryClient();
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export const middleware = pipe<Req>(prefetch);
