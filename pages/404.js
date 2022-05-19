import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="page__container">
      <h1>Ooooops....</h1>
      <p>That page cannot be found</p>
      <Link href="/">
        <a className="btn">Go back</a>
      </Link>
    </div>
  );
};

export default NotFound;
