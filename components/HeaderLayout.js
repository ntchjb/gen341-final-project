
import Footer from './Footer';
import Header from './Header';

/* Page should be a function of returning React.Component */
const HeaderLayout = (Page, header) => {
  return () => (
    <div>
      <div className="container">
        <Header title={header.title} subtitle={header.subtitle} meta={header.meta} />
        <section className="section">
          <div className="container">
            <Page />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
};

export default HeaderLayout;