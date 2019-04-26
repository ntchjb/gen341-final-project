const Footer = () => (
  <footer className="footer">
    <div className="content">
      <p className="has-text-centered">
        Phuket local food receipes. Made with ❤️ by <a className="has-text-black" href="https://github.com/ntchjb">@ntchjb</a>
        <style jsx>{`
          a.has-text-black:hover, a.has-text-black:active {
            text-decoration: underline;
          }
        `}</style>
      </p>
    </div>
  </footer>
);

export default Footer;