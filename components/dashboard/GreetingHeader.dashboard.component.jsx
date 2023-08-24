import { Dropdown } from "react-bootstrap";
import VerifiedSign from "../account/VerifiedSign.account.component";

const GreetingHeader = ({ user }) => {
  return (
    <>
      <div id="greeting">
        <span className="d-inline-flex gap-1">
          Salam {user.username}{" "}
          {user.verified ? (
            <sup className="d-flex align-items-center justify-content-center">
              <VerifiedSign />
            </sup>
          ) : (
            <></>
          )}{" "}
          &#128075;
        </span>
        {user.type == "tutor" ? <span className="float-end" id="header-new-dropdown">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="bg-bitlio text-light"
              id="dropdown-basic"
            >
              Yeni
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/dashboard/posts/create">
                Məqalə
              </Dropdown.Item>
              <Dropdown.Item href="/dashboard/training/create">
                Təlim
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span> : <></>}
      </div>

      <style jsx>{`
        #greeting {
          font-size: 30px;
          font-weight: 400;
        }
      
        @media screen and (max-width: 760px) {
            #header-new-dropdown {
              display: none;
            }
        }
      `}</style>
    </>
  );
};

export default GreetingHeader;
