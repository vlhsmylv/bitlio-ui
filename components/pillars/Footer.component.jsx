import Link from "next/link";
import BitlioLink from "./custom/BitlioLink.component";

const BitlioFooter = ({ type }) => {
  const types = { bitlio: "#9D81BB", glass: undefined, dark: "black" };

  return (
    <>
      <footer
        style={{
          backgroundColor: types[type],
        }}
      >
        <div id="footer-inner">
          <div className="d-flex flex-column footer-inner-brand">
            <img
              src="/brand/texted-white-logo.png"
              className="footer-brand-logo"
            />
            <div className="mt-2 text-light">&copy; Bitlio 2022</div>
            <BitlioLink
              href="/terms-conditions"
              className={"text-light fw-bold"}
            >
              Şərtlər və Qaydalar
            </BitlioLink>
          </div>
          <div className="footer-inner-container">
            <div className="footer-inner-column-title text-light cursor-default">
              İstifadəçilər üçün
            </div>
            <div className="footer-inner-column-linkList">
              <BitlioLink href="/dashboard" className="text-light">
                Panel
              </BitlioLink>
              <BitlioLink href="/trainings" className="text-light">
                Təlimlər
              </BitlioLink>
              <BitlioLink href="/posts" className="text-light">
                Məqalələr
              </BitlioLink>
            </div>
          </div>
          <div className="footer-inner-container">
            <div className="footer-inner-column-title text-light cursor-default">
              Tutorlar üçün
            </div>
            <div className="footer-inner-column-linkList">
              <BitlioLink href="/dashboard" className="text-light">
                Panel
              </BitlioLink>
              <BitlioLink
                href="/dashboard/trainings/create"
                className="text-light"
              >
                Təlim təsis et
              </BitlioLink>
              <BitlioLink href="/dashboard/posts/create" className="text-light">
                Məqalə yaz
              </BitlioLink>
            </div>
          </div>
          <div className="footer-inner-container">
            <div className="footer-inner-column-title text-light cursor-default">
              Əlaqə və Sosial Media
            </div>
            <div className="footer-inner-column-linkList">
              <BitlioLink
                href="mailto:bitlio.app.corp@gmail.com"
                className="text-light text-decoration-underline"
              >
                bitlio.app.corp@gmail.com
              </BitlioLink>
              <BitlioLink
                href="https://instagram.com/bitlio.app"
                className={"text-light"}
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </BitlioLink>
              <BitlioLink
                href="https://linkedin.com/company/86661233"
                className={"text-light"}
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </BitlioLink>
            </div>
          </div>
          <div className="footer-inner-mobile-container">
            <BitlioLink
              href="https://instagram.com/bitlio.app"
              className={"text-light"}
            >
              <i className="fa-brands fa-instagram"></i>
            </BitlioLink>
            <BitlioLink
              href="https://linkedin.com/company/86661233"
              className={"text-light"}
            >
              <i className="fa-brands fa-linkedin"></i>
            </BitlioLink>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          min-height: 200px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        #footer-inner {
          max-width: 1000px !important;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 50px;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .footer-brand-logo {
          width: 180px;
        }

        .footer-inner-column-title {
          font-weight: bold;
          font-size: 20px;
        }

        .footer-inner-column-linkList {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 10px;
        }

        .footer-inner-mobile-container {
          display: none;
        }

        @media screen and (max-width: 889px) {
          .footer-inner-container {
            display: none;
          }

          .footer-inner-brand {
            text-align: center;
          }

          .footer-brand-logo {
            width: 150px;
          }

          #footer-inner {
            gap: 10px !important; 
            flex-direction: column;
          }

          .footer-inner-mobile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default BitlioFooter;
