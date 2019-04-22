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
      <meta http-equiv="Content-Type" content="text/html; charset = UTF-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>
    <header class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link href="/">
            <a class="navbar-item">
              <img src="/static/logo.png" />
            </a>
          </Link>
          <a role="button" onClick={toggleMenu} class="navbar-burger burger" id="burger-menu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" id="nav-menu">
          <div class="navbar-start">
            <Link href="/">
              <a class="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a class="navbar-item">About</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </div>
)

export default Header