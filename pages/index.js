import Head from "next/head";
import DataTable from "../src/views/Table";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataTable />
    </div>
  );
}
