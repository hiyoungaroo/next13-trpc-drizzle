'use client';

import { useState } from 'react';
import { trpc } from '../_trpc/client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const [content, setContent] = useState('');
  return (
    <div>
      <div className="flex pb-4">
        <Input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          variant="outline"
          onClick={() => {
            if (content.length) {
              addTodo.mutate(content);
              setContent('');
            }
          }}
        >
          Button
        </Button>
      </div>
      {/* <div>{JSON.stringify(getTodos.data)}</div> */}
      <div>
        {getTodos.data?.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center space-x-2 space-y-2 text-2xl"
          >
            <Checkbox id="terms" />
            <Label>{todo.content}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
