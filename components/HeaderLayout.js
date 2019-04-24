
import Footer from './Footer';
import Header from './Header';
import Title from './Title';

/* Page should be a function of returning React.Component */
const HeaderLayout = (Page, header) => {
  return () => (
    <div>
      <div className="container">
        <Header title={header.title} subtitle={header.subtitle} meta={header.meta}/>
      </div>
      <Title {...header} />
        <section className="section">
          <div className="container">
            <Page/>
          </div>
        </section>
      <Footer />
    </div>
  )
};

export default HeaderLayout;