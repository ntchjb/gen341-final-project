import { withRouter } from 'next/router'

const Food = (props) => (
  <div>
    <p> This is food with id: {props.router.query.id}</p>
  </div>
);

export default withRouter(Food)
