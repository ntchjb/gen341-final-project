import { withRouter } from 'next/router'
import HeaderLayout from '../components/HeaderLayout'

const FoodContent = (id) => {
  return () => (
    <p>This is food with id: {id}</p>
  )
};

const Food = (props) => {
  if (props.router.query.id === undefined) {
    const header = {
      title: "Ban Kanan",
      subtitle: "Unknown Food",
      meta: {
        description: "Please specify food ID",
        tags: []
      }
    };
    const errorMsg = () => (
      <p>Error: Food ID is required.</p>
    );
    return HeaderLayout(errorMsg, header)();
  }
  else {
    const header = {
      title: "Moo Hong",
      subtitle: "Phuket Food Recipes",
      meta: {
        description: "The Phuket local food receipes from Ban Kanan",
        tags: [
          "food",
          "Ban Kanan",
          "recipes",
          "Phuket",
          "Moo Hong"
        ]
      }
    };
    return HeaderLayout(FoodContent(props.router.query.id), header)();
  }
};

export default withRouter(Food)
