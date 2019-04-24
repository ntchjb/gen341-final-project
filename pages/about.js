import Markdown from 'react-markdown';
import HeaderLayout from '../components/HeaderLayout';
import md from '../posts/about/index.md';
import meta from '../posts/about/meta.json';

const About = () => {
  return (
    <Markdown className="content is-medium" escapeHtml={false} source={md} />
  )
};

meta.header.thumbnailUrl = '/static/aboutThumbnail.jpg';

export default HeaderLayout(About, meta.header);