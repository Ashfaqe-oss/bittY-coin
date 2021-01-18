import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>BittY !</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
