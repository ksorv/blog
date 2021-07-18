import { Button } from '@chakra-ui/react';
import { Meta } from 'components/Meta';
import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Meta title="Saurav Khdoolia" />
      <div className="flex flex-col items-center justify-center max-w-2xl h-full relative mx-auto">
        <h1 className="text-2xl mb-4 text-black dark:text-white text-center">
          I&#39;m being worked on...
        </h1>
        <h4 className="text-lg mb-4 text-green-500 dark:text-white text-center">
          Thanks for checking me out :)
        </h4>
        <Link href="/twitter" prefetch={false} passHref>
          <Button variant="ghost" size="xl" padding="4px">
            Check Mate
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
