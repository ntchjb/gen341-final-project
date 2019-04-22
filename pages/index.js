
import Header from '../components/Header';
import FoodCard from '../components/FoodCard';

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

const exampleFood = {
  thumbnailUrl: "https://i.ytimg.com/vi/apGUaKyC42E/maxresdefault.jpg",
  title: "Moo Hong: Phuket Pork belly Stew",
  description: "On a recent trip to Phuket town, I discovered this excellent dish called moo hong. It’s a Southern Thai pork stew with Chinese roots that’s quite similar to moo palo, but with fewer ingredients. I had moo hong a few times while I was there and it varied in sweetness from restaurant to restaurant.",
  publishedDate: new Date(2019, 3, 22, 18, 3, 30),
  modifiedDate: new Date(2019, 3, 22, 19, 20, 17),
  author: "Somkid Thongdee",
}

const Index = () => (
  <div>
    <Header title={title} subtitle="Home" meta={meta} />
    <section className="section">
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile">
            <FoodCard food={exampleFood} size={"is-6"} />
            <FoodCard food={exampleFood} />
            <FoodCard food={exampleFood} />
          </div>
          <div className="tile">
            <FoodCard food={exampleFood} />
            <FoodCard food={exampleFood} />
            <FoodCard food={exampleFood} />
            <FoodCard food={exampleFood} />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Index