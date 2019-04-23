import { withRouter } from 'next/router'
import HeaderLayout from '../components/HeaderLayout'
import Markdown from 'react-markdown'
import fileMapping from '../posts/map.json'

const FoodContent = (md) => {
  return () => (
    <div>
      <Markdown className="content is-medium" escapeHtml={false} source={md} />
    </div>
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
    props.content.header.thumbnailUrl = props.content.header.path + "/" + props.content.frontMatter.thumbnailUrl;
    return HeaderLayout(FoodContent(props.content.md), props.content.header)();
  }
};

const mapping = fileMapping;

Food.getInitialProps = async function (context) {
  const { id } = context.query

  /* In markdown, image link should be /posts/moo-hong/thumbnail.jpg */
  const meta = await require(`../posts/${mapping[id]}/meta.json`);
  const markdown = await require(`../posts/${mapping[id]}/index.md`);

  const content = meta;
  content.header.path = `/static/posts/${mapping[id]}`
  content['md'] = markdown.default;
  // console.log(JSON.stringify(content['md']));

  return { content }
}

export default withRouter(Food)
