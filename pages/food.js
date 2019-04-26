import { withRouter } from 'next/router'
import HeaderLayout from '../components/HeaderLayout'
import Markdown from 'react-markdown'

const addPrefixImageUri = (id, uri) => {
  const r = new RegExp('^(?:[a-z]+:)?//', 'i');
  if (r.test(uri) === true) {
    return uri;
  } else {
    const img = require(`../posts/${id}/${uri}`)
    return img;
  }
}

const addPrefixLinkUri = (uri) => {
  const r = new RegExp('^(?:[a-z]+:)?//', 'i');
  if (r.test(uri) === true) {
    return uri;
  } else {
    return `/f/${uri}`;
  }
}

const FoodContent = (md, id) => {
  return () => (
    <div>
      <Markdown className="content is-medium" escapeHtml={false} source={md} transformImageUri={addPrefixImageUri.bind(null, id)} transformLinkUri={addPrefixLinkUri} />
      <style jsx global>{`
        img {
          margin: 0 auto;
          display: block;
          object-fit: contain;
          max-height: 600px;
        }
        img + em {
          text-align: center;
          display: block;
          margin-top: 5px;
        }
      `}</style>
    </div>
  )
};

const Food = (props) => {
  if (props.router.query.id === undefined || props.content === undefined) {
    const header = {
      title: "Error",
      subtitle: "Missing or invalid food ID",
      meta: {
        description: "Please specify food ID",
        tags: []
      }
    };
    const errorMsg = () => (
      <hr />
    );
    return HeaderLayout(errorMsg, header)();
  }
  else {
    return HeaderLayout(FoodContent(props.content.md, props.router.query.id), props.content.header)();
  }
};

Food.getInitialProps = async function (context) {
  const { id } = context.query
  try {
    const meta = await require(`../posts/${id}/meta.json`);
    const markdown = await require(`../posts/${id}/index.md`);

    const content = meta;
    content['md'] = markdown.default;
    if (content[0] === undefined) {
      content.header.thumbnailUrl = await require(`../posts/${id}/${content.header.thumbnailUrl}`)
      content[0] = true;
    }
    return { content }
  } catch (e) {
    console.log(e);
    return {};
  }
}

export default withRouter(Food)
