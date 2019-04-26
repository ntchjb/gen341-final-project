import Head from 'next/head';
import Link from 'next/link';
import '../style/mystyles.scss';
// Convert to string with comma
const array2str = (arr) => {
  let str = ""
  arr.forEach(el => {
    str += el.toString() + ", "
  })
  return str.replace(/,\s*$/, "");
}

const toggleMenu = () => {
  const burger = document.getElementById('burger-menu')
  const navMenu = document.getElementById('nav-menu')
  if (burger.classList.contains('is-active')) {
    burger.classList.remove('is-active')
  } else {
    burger.classList.add('is-active')
  }
  if (navMenu.classList.contains('is-active')) {
    navMenu.classList.remove('is-active')
  } else {
    navMenu.classList.add('is-active')
  }
}

/* title: string,
   meta: {
     tags: [..tag: string],
     description: string
   }
*/
const Header = ({ title, subtitle, meta }) => (
  <div>
    <Head>
      <title>{title} | {subtitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={array2str(meta.tags)} />
      <meta name="description" content={meta.description} />
      <meta name="author" content="@ntchjb" />
      <meta httpEquiv="Content-Type" content="text/html; charset = UTF-8" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <header className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a aria-label="Home Page" className="navbar-item superbrand">
              <img alt="logo" src="/static/logo.png" />
            </a>
          </Link>
          <style jsx>{`
            .superbrand {
              margin-top: -13px;
            }
          `}</style>
          <a role="button" onClick={toggleMenu} className="navbar-burger burger" id="burger-menu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="nav-menu">
          <div className="navbar-start">
            <Link href="/">
              <a aria-label="Go to Home page" className="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a aria-label="History of Phuket local food" className="navbar-item">About</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </div>
)

export default Header