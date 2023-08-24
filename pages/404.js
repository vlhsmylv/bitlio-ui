import Head from "next/head";
import LandingPageTitle from "../texts/page/title/LandingPageTitle.text";
import BitlioNavbar from "../components/pillars/Navbar.component";
import SummaryAbout from "../texts/info/SummaryAbout.text";
import BitlioLink from "../components/pillars/custom/BitlioLink.component";
import TrainingsAbout from "../texts/info/TrainingsAbout.text";
import PostsAbout from "../texts/info/PostsAbout.text";
import BitlioFooter from "../components/pillars/Footer.component";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>{LandingPageTitle}</title>
      </Head>

      <div id="main-container">
        <div className="bg-container-top">
          <BitlioNavbar type="glass" />
          <div id="information-section">
            <div id="information-section-left-side">
              <div
                className="fs-1 fw-bold text-light"
                id="information-section-left-side-title"
              >
                Bitlio nədir?
              </div>
              <div
                id="information-section-left-side-text"
                className="text-light fs-5"
              >
                {SummaryAbout}
              </div>
              <div id="information-section-left-side-go-button">
                <BitlioLink
                  href="/posts/bitlio-app/proqramlasdirma-nedir"
                  className="text-light fw-bold fs-5"
                >
                  Proqramlaşdırma nədir?{" "}
                  <i className="fa-solid fa-right-long"></i>
                </BitlioLink>
              </div>
            </div>
            <div id="information-section-right-side">
              <img src="/png/hero.png" id="hero-image" />
            </div>
          </div>
        </div>
        <div id="information-trainings-section">
          <div id="information-trainings-section-left-side">
            <img src="/png/training-hero.png" id="training-hero-image" />
          </div>
          <div
            id="information-trainings-section-right-side"
            className="text-end"
          >
            <div
              className="fs-1 fw-bold text-secondary"
              id="information-trainings-section-right-side-title"
            >
              Təlimlər
            </div>
            <div
              id="information-trainings-section-right-side-text"
              className="text-secondary fs-5"
            >
              {TrainingsAbout}
            </div>
            <div
              id="information-trainings-section-right-side-go-button"
              className="d-flex flex-column"
            >
              <BitlioLink
                href="/trainings"
                className="text-secondary fw-bold fs-5"
              >
                <i className="fa-solid fa-left-long"></i> Təlimlərə nəzər sal
              </BitlioLink>
              <BitlioLink
                href="/dashboard?as=tutor"
                className={"text-secondary fw-bold fs-5"}
              >
                <i className="fa-solid fa-left-long"></i> Tutor ol və təsis et
              </BitlioLink>
            </div>
          </div>
        </div>
        <div id="information-posts-section" className="bg-container-medium">
          <div id="information-posts-section-left-side">
            <div
              className="fs-1 fw-bold text-light"
              id="information-posts-section-left-side-title"
            >
              Məqalələr
            </div>
            <div
              id="information-posts-section-left-side-text"
              className="text-light fs-5"
            >
              {PostsAbout}
            </div>
            <div
              id="information-posts-section-left-side-go-button"
              className="d-flex flex-column"
            >
              <BitlioLink href="/trainings" className="text-light fw-bold fs-5">
                Məqalələrə nəzər sal <i className="fa-solid fa-right-long"></i>
              </BitlioLink>
              <BitlioLink
                href="/dashboard?as=tutor"
                className={"text-light fw-bold fs-5"}
              >
                Tutor ol və məqalə yaz{" "}
                <i className="fa-solid fa-right-long"></i>
              </BitlioLink>
            </div>
          </div>
          <div id="information-posts-section-right-side">
            <img src="/png/posts-hero.png" id="posts-hero-image" />
          </div>
        </div>
        <div id="information-partners-section">
          <div
            className="fw-bold fs-1 text-center"
            id="information-partners-section-title"
          >
            Partnyolarımız
          </div>
          <div id="information-partners-section-box">
            <div
              className="information-partners-section-box-item"
              id="information-partners-section-box-item-google"
            >
              <BitlioLink href="/partners/google">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
                  className="information-partners-section-box-item-logo"
                />
              </BitlioLink>
            </div>
            <div
              className="information-partners-section-box-item"
              id="information-partners-section-box-item-microsoft"
            >
              <BitlioLink href="/partners/microsoft">
                <img
                  src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png"
                  className="information-partners-section-box-item-logo"
                />
              </BitlioLink>
            </div>
            <div
              className="information-partners-section-box-item"
              id="information-partners-section-box-item-spacex"
            >
              <BitlioLink href="/partners/spacex">
                <img
                  src="https://www.freepnglogos.com/uploads/space-force-logo-png/spacex-logo-27.png"
                  className="information-partners-section-box-item-logo"
                />
              </BitlioLink>
            </div>
          </div>
        </div>
        <BitlioFooter type="bitlio" />
      </div>

      <style jsx>{`
        .bg-container-top {
          background: url("/bg/wave-top.png");
          background-size: cover;
          background-repeat: no-repeat;
          height: 650px;
        }

        .bg-container-medium {
          background: url("/bg/wave-medium.png");
          background-size: cover;
          background-repeat: no-repeat;
          height: 650px;
        }

        #information-section,
        #information-trainings-section,
        #information-posts-section {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap-reverse;
          margin: auto;
          margin-top: 15px;
        }

        #information-section-left-side,
        #information-trainings-section-right-side,
        #information-posts-section-left-side {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 460px;
        }

        #information-trainings-section {
          flex-wrap: wrap !important;
        }

        #hero-image,
        #training-hero-image,
        #posts-hero-image {
          max-width: 400px;
          max-height: 360px;
        }

        #information-partners-section {
          margin-top: 40px;
          margin-bottom: 40px;
        }

        #information-partners-section-title {
          color: #c9b8dd;
        }

        #information-partners-section-box {
          margin-top: 20px;
          display: flex;
          gap: 50px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .information-partners-section-box-item-logo {
          width: 200px;
        }

        @media screen and (max-width: 991px) {
          .bg-container-top {
            height: 800px;
          }

          .bg-container-medium {
            height: 700px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          #information-section,
          #information-trainings-section,
          #information-posts-section {
            max-width: 720px;
            margin-top: 20px;
            padding-left: 30px;
            padding-right: 30px;
          }

          #hero-image,
          #training-hero-iamge,
          #posts-hero-image {
            width: 350px;
          }
        }

        @media screen and (max-width: 425px) {
          .bg-container-top {
            height: 850px;
          }

          .bg-container-medium {
            height: 800px;
            padding-top: 70px;
            padding-bottom: 100px;
          }
        }
      `}</style>
    </>
  );
};

export default LandingPage;
