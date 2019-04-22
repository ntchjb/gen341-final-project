import Head from 'next/head';
import Link from 'next/link';

// Convert to string with comma
const array2str = (arr) => {
  let str = ""
  arr.forEach(el => {
    str += el.toString() + ", "
  })
  str.replace(/,\s*$/, "");
  return str
}

const toggleMenu = () => {
  const burger = document.getElementById('burger-menu')
  const navMenu = document.getElementById('nav-menu')
  if (burger.classNameList.contains('is-active')) {
    burger.classNameList.remove('is-active')
  } else {
    burger.classNameList.add('is-active')
  }
  if (navMenu.classNameList.contains('is-active')) {
    navMenu.classNameList.remove('is-active')
  } else {
    navMenu.classNameList.add('is-active')
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
      <meta http-equiv="Content-Type" content="text/html; charset = UTF-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <header className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item superbrand">
              <img src="/static/logo.png" />
            </a>
          </Link>
          <style jsx>{`
            .superbrand {
              margin-top: -15px;
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
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </div>
)

export default Header