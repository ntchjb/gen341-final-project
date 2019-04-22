
import Header from '../components/Header';

const title = "Ban Kanan";
const meta = {
  description: "The Phuket local food receipes from Ban Kanan",
  tags: [
    "food",
    "Ban Kanan",
    "recipes",
    "Phuket"
  ]
};

const Index = () => (
  <div>
    <Header title={title} subtitle="Home" meta={meta} />
  </div>
)

export default Index