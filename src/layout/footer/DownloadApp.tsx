import "./footer.css"
const DownloadApp = () => {
  return (
    <section className="section mb-40">
      <div className="container">
        <div className="download__app">
          <div className="app-img">
            <img
              data-src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
              className="lazyload"
              alt="asaxiy app image"
              loading="lazy"
              src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
            />
          </div>
          <div className="app-content">
            <div className="download__app-header">
              <a className="logo" href="/">
                <img
                  data-src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
                  className="lazyload"
                  alt="asaxiy logo"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
                />
              </a>
              <p>Ваш интернет магазин</p>
            </div>
            <div className="download__app-footer">
              <a
                className="app-link"
                href="https://apps.apple.com/uz/app/asaxiy-books/id1486109975"
                rel="nofollow"
                target="_blank"
              >
                <img
                  data-src="https://asaxiy.uz/custom-assets/images/app-store.svg"
                  className="lazyload"
                  alt="asaxiy market app"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/app-store.svg"
                />
              </a>
              <a
                className="app-link"
                href="https://play.google.com/store/apps/details?id=uz.asaxiy.asaxiybooks"
                rel="nofollow"
                target="_blank"
              >
                <img
                  data-src="https://asaxiy.uz/custom-assets/images/google-play.svg"
                  className="lazyload"
                  alt="asaxiy market app"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/google-play.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
