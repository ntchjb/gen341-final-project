import Header from '../components/Header'
import HeaderLayout from '../components/HeaderLayout';

const header = {
  title: "Ban Kanan",
  subtitle: "About",
  meta: {
    description: "The history of Ban Kanan, local wisdom, and Phuket local food",
    tags: [
      "food",
      "Ban Kanan",
      "recipes",
      "Phuket",
      "History"
    ]
  }
};

const About = () => (
  <p>This is about page</p>
);

export default HeaderLayout(About, header);