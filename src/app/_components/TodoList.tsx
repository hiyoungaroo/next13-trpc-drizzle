'use client';

import { useState } from 'react';
import { trpc } from '../_trpc/client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { serverClient } from '../_trpc/serverClient';

const TodoList = ({
  initialTodos,
}: {
  initialTodos: Awaited<ReturnType<(typeof serverClient)['getTodos']>>;
}) => {
  const getTodos = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
  });
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const deleteTodo = trpc.deleteTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const [content, setContent] = useState('');
  return (
    <div className="">
      <div className="flex pb-4 items-center ">
        <Input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          variant="outline"
          className="ml-4"
          onClick={() => {
            if (content.length) {
              addTodo.mutate(content);
              setContent('');
            }
          }}
        >
          Add
        </Button>
      </div>

      <div className="flex flex-col">
        {getTodos.data?.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center space-x-2 space-y-2 text-2xl border-b-2 border-blue-400 pb-2"
          >
            <div className="items-center justify-center">
              <Checkbox id="terms" />
              <Label className="ml-4">{todo.content}</Label>
            </div>

            <Button
              onClick={() => {
                const del = deleteTodo.mutate({ id: todo.id });
                console.log(del);
              }}
              variant="outline"
            >
              delete
            </Button>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-400 pt-20">
        {JSON.stringify(getTodos.data)}
      </div>
    </div>
  );
};

export default TodoList;
