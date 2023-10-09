'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const User = async ({ User }: { User: () => Promise<string> }) => {
  const [name, setName] = useState<string>();
  return (
    <div>
      <Button
        onClick={async () => {
          setName(await User());
        }}
      >
        User?
      </Button>
      {name && <div>Hello, 🦊 {name}</div>}
    </div>
  );
};

export default User;
