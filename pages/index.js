import Layout from "../components/Layout/Layout"
import Carrousel from "../components/Carrousel"
import Presentation from "../components/Presentation"
import TitleLine from "../components/Layout/TitleLine"
import CardImage from "../components/CardImage"
import Card from "../components/Card/Card"

export default function Home({ result }) {

  const { Logo, Nosotros, services, card, Carrousel:carrouselItems } = result;

  return (
    <Layout>
      <Carrousel items={carrouselItems} />
      <Presentation logo={Logo} text={Nosotros} />
      <TitleLine />
      <CardImage data={card[0]} />
      <div
        style={{
          marginTop: '10rem'
        }}
      >
        <Card fullFilter={result.full_service.Filter_Size === "fullFilter" ? true : false} data={result.full_service} size='full' />
      </div>
      <div className="order-cards">
        {
          services.map((cards, i) => {
            return (
              <Card key={i} fullFilter={cards.Filter_Size === "fullFilter" ? true : false} data={cards} size='middle' />
            )
          })
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `https://uribequiromasajes-dev.herokuapp.com/inicio`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    props: {
      result
    }
  }
}
