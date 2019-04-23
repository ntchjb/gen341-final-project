import HeaderLayout from '../components/HeaderLayout'
import FoodCard from '../components/FoodCard';


const header = {
  title: "Ban Kanan",
  subtitle: "Home",
  meta: {
    description: "The Phuket local food receipes from Ban Kanan",
    tags: [
      "food",
      "Ban Kanan",
      "recipes",
      "Phuket"
    ]
  }
};

const exampleFood = {
  id: 1,
  thumbnailUrl: "https://i.ytimg.com/vi/apGUaKyC42E/maxresdefault.jpg",
  title: "Moo Hong: Phuket Pork belly Stew",
  description: "It’s a Southern Thai pork stew with Chinese roots that’s quite similar to moo palo, but with fewer ingredients.",
  publishedDate: new Date(2019, 3, 22, 18, 3, 30),
  modifiedDate: new Date(2019, 3, 22, 19, 20, 17),
  author: "Somkid Thongdee",
}

const Index = () => (
  <div className="tile is-ancestor">
    <div className="tile is-vertical">
      <div className="tile">
        <FoodCard food={exampleFood} />
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
)

export default HeaderLayout(Index, header);