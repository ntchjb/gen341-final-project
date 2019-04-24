import HeaderLayout from '../components/HeaderLayout'
import FoodCard from '../components/FoodCard'
import fileMapping from '../posts/map.json'
import header from '../posts/index/meta.json';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Object.keys(fileMapping).length,
      visible: 5,
      error: false,
      foodMeta: []
    };

    this.loadMore = this.loadMore.bind(this);
    this.renderLoadMoreButton = this.renderLoadMoreButton.bind(this);
    this.renderFoodCards = this.renderFoodCards.bind(this);
  }

  componentDidMount() {
    const foodMeta = [];
    const mapping = fileMapping;
    Object.keys(fileMapping).forEach((id) => {
      const meta = require(`../posts/${mapping[id]}/meta.json`)
      /* Used as running once */
      if (meta[0] === undefined) {
        meta.header.path = `/static/posts/${mapping[id]}`
        meta.header.id = id
        meta.header.thumbnailUrl = meta.header.path + "/" + meta.header.thumbnailUrl;
        meta[0] = true; // Updated
      }
      foodMeta.push(meta)
    })
    this.setState({
      foodMeta
    });
    // console.log(`State FoodMeta: ${this.state.foodMeta}`)
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 5 };
    });
  }

  renderLoadMoreButton() {
    if (this.state.visible < this.state.count) {
      return (
        <button className="button is-black is-medium" onClick={this.loadMore}>More...</button>
      )
    }
  }

  renderFoodCards() {
    let countCardPerTile = 0;
    let numCardPerTile = 2;
    // console.log(`thestate: ${JSON.stringify(this.state)}`)
    const foodCardList = this.state.foodMeta.slice(0, this.state.visible).map((item, index) => {
      return (<FoodCard food={item.header} key={index} />);
    })
    const tileList = [];
    let tempList = [];
    for (let i = 0; i < foodCardList.length; i++) {
      countCardPerTile++;
      if (countCardPerTile > numCardPerTile) {
        countCardPerTile = 0;
        if (numCardPerTile === 2) {
          numCardPerTile = 3;
        } else {
          numCardPerTile = 2;
        }
        const j = tileList.length;
        tileList.push((
          <div className="tile" key={j}>
            {tempList}
          </div>
        ));
        tempList = [];
      }
      tempList.push(foodCardList[i]);
    }

    if (tempList.length > 0) {
      const j = tileList.length;
      tileList.push((
        <div className="tile" key={j}>
          {tempList}
        </div>
      ));
      tempList = [];
    }
    return tileList;
  }

  render() {
    return (
      <div>
        <div>
          <div className="hero">
            <div className="hero-body">
              <h1 className="title is-1 has-text-centered">Food Receipes</h1>
            </div>
          </div>
          <hr />
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              {this.renderFoodCards()}
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column has-text-centered">
            {
              this.renderLoadMoreButton()
            }
          </div>
        </div>
      </div >
    )
  }
}

const IndexPage = HeaderLayout(Index, header);

export default IndexPage;