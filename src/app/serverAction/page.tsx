import { getServerSession } from 'next-auth';
import User from './User';

const ServerActionPage = () => {
  const session = async () => {
    'use server';
    const session = await getServerSession();
    return session?.user?.name || 'Not Login In';
  };
  return (
    <div>
      <User User={session} />
    </div>
  );
};

export default ServerActionPage;
