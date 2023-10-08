import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@/server';

export const serverClient = appRouter.createCaller({
  link: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});
