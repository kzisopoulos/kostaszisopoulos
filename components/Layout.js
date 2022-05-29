import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta
          name="Description"
          content="This is the personal portfolio of Konstantinos Zisopoulos an aspiring web developer and infrastructure engineer. It contains information about knowledge and latest projects plus a way of contact."
        ></meta>
        <title>Kostas Zisopoulos | Web & IT</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
