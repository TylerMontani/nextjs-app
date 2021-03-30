import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <h1>Home</h1>
      </main>

      <footer>
        <a
          href="https://github.com/acidical"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acidical
        </a>
      </footer>
    </div>
  );
};

export default Home;
