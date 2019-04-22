import moment from 'moment';
/*
  food: {
    thumbnailUrl: string,
    title: string,
    description: string,
    publishedDate: Date,
    modifiedDate: Date,
    author: string,
  },

*/

const FoodCard = ({ food, size }) => (
  <div className={"tile is-parent " + size}>
    <div className="tile is-child box">
        <p className="title is-4">{food.title}</p>
        <p className="subtitle is-6">{"by " + food.author + " | " + moment(food.publishedDate).fromNow()}</p>
        <div className="content">
          {food.description}
        </div>
    </div>
    <style jsx>{`
        .tile.is-child.box {
          background-color: transparent;
          background-image: url(${food.thumbnailUrl});
          background-size: cover;
          background-position: center center;
        }
        .tile.is-parent {
          overflow: hidden;
        }
      `}</style>
  </div>
);

export default FoodCard;
