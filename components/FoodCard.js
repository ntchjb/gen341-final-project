import moment from 'moment';
import Link from 'next/link';
/*
  food: {
    id: string
    thumbnailUrl: string,
    title: string,
    description: string,
    publishedDate: Date,
    modifiedDate: Date,
    author: string,
    path: string
  },

*/

const maxNumChars = 64;

const truncateStr = (str, maxNumChars) => {
  if (str.length > maxNumChars) {
    return str.substring(0, maxNumChars) + "...";
  }
  else {
    return str;
  }
}

const FoodCard = ({ food, size }) => (
  <div className={size ? "tile is-parent " + size : "tile is-parent"}>
    <div className="tile is-child box">
      <div className="bg"><div className="overlay"></div></div>
      <Link href={`/food?id=${food.id}`}>
        <a className="ct columns is-vcentered">
          <div className="column">
            <p className="title is-3 has-text-centered">{food.title}</p>
            <p className="subtitle is-5 has-text-centered">{food.subtitle}</p>
            <hr/>
            <p className="subtitle is-5 has-text-centered">{"by " + food.author + " | " + moment(food.publishedDate).fromNow()}</p>
          </div>
        </a>
      </Link>
    </div>
    <style jsx>{`
        .bg {
          position:absolute;
          top:0;right:0;bottom:0;left:0;
          z-index: -1;
          background-image: url(${food.thumbnailUrl});
          background-size: cover;
          background-position: center center;
          transition: all 0.3s ease;
        }
        .tile.is-child.box:hover .ct {
          opacity: 1;
        }

        .ct {
          opacity: 0;
          transition: all 0.3s ease;
          display: block;
        }

        .ct.columns {
          display: flex;
          height: 100%;
          margin: 0;
        }

        .title, .subtitle, .content {
          color: white;
        }

        .overlay {
          background-color: rgb(0, 0, 0);
          position:absolute;
          top:0;right:0;bottom:0;left:0;
          z-index: -1;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .tile.is-child.box:hover .bg {
          transform: scale(1.2);
        }
        .tile.is-child.box:hover .bg .overlay {
          opacity: 0.5;
        }
        .tile.is-child.box {
          background-color: transparent;
          overflow: hidden;
          position: relative;
          min-height: 350px;
        }

        .tile.is-parent {
          display: flex;
        }
      `}</style>
  </div>
);

export default FoodCard;
