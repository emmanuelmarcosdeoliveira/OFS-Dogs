import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos Dogs"
        description="Dogs, uma rede social par cachorros desenvolvida por Emmanuel Marcos de Oliveira"
      />

      <Feed />
    </section>
  );
};

export default Home;
