import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

import { todos } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todos).orderBy(desc(todos.id));
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db.insert(todos).values({ content: opts.input, done: false });
    return true;
  }),
  deleteTodo: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async (opts) => {
      const del = await db
        .delete(todos)
        .where(eq(todos.id, opts.input.id))
        .returning({ deletedId: todos.id });
      console.log(del);
    }),
  setDone: publicProcedure
    .input(z.object({ id: z.number(), done: z.boolean() }))
    .mutation(async (opts) => {
      await db
        .update(todos)
        .set({ done: opts.input.done })
        .where(eq(todos.id, opts.input.id));
    }),
});
export type AppRouter = typeof appRouter;
