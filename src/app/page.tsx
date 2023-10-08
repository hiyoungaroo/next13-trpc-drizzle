import TodoList from './_components/TodoList';

export default function Home() {
  return (
    <div className="flex-1 py-8 px-2">
      <h1 className="text-2xl font-bold">My Dev Stacks</h1>
      <p className="text-lg">
        Hello Next13.5, TRPC, ShadCn Ui, Drizzle, Neon Tech (PostgreSQL),
        TailwindCSS, TanStack Query, NextAuth,
      </p>
      <h2 className="py-4 font-bold">Test Area</h2>
      <TodoList />
    </div>
  );
}
