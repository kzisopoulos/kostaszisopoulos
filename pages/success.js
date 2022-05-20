import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="page__container">
      <h1>Form successfully submitted!</h1>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>
      <Link href="/">
        <a className="btn">
          <h2>Go back</h2>
        </a>
      </Link>
    </div>
  );
};

export default Success;
