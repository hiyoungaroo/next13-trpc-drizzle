import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>Hi🐈 Youngaroo</div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default SignIn;
