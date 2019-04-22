import Header from '../components/Header'

const title = "Ban Kanan";
const subtitle = "About";
const meta = {
  description: "The history of Ban Kanan, local wisdom, and Phuket local food",
  tags: [
    "food",
    "Ban Kanan",
    "recipes",
    "Phuket",
    "History"
  ]
};

const About = () => (
  <div>
  <Header title={title} subtitle={subtitle} meta={meta} />
  <section className="section">
    <div className="container">
      <p>This is about page</p>
    </div>  
  </section>
  </div>
);

export default About;