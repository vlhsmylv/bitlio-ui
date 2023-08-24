/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext.context";
import windowReady from "../../scripts/dom/windowReady.script";

const AuthiorModal = ({ updateAuth, updateUser }) => {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    windowReady((window) => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      console.log(urlParams.get("as"))
    })
  })

  const finishCreateAccount = async (user) => {
    const userCreated = await createUserOnFirestore({
      ...user,
      type: user.type,
    });
    if (userCreated) {
      const gotUser = await getUserFromFirestore(user);
      if (gotUser) {
          updateAuth(true);
          updateUser(gotUser);
        } else if (!gotUser) {
          setErrorMessage("Məlumat bazasında haqqınızda məlumat tapılmadı");
        } else {
          setErrorMessage(gotUser.message);
        }   
    }
  };

  const SignStep = () => {
    return (
      <>
        <div id="authior-modal-sign-up-methods">
          <button className="cursor-pointer" onClick={checkWithGoogle}>
            <img
              src="/authior/google.png"
              className="authior-modal-auth-method-brand-logo"
            />
          </button>
          <button className="cursor-pointer" onClick={checkWithGithub}>
            <img
              src="/authior/github.png"
              className="authior-modal-auth-method-brand-logo"
            />
          </button>
        </div>
        <div className="text-center text-secondary">və yaxud</div>
        <div
          id="authior-modal-email-method"
          className="authior-modal-auth-method"
        >
          <Form>
            <InputGroup>
              <InputGroup.Text className="bg-bitlio text-light">
                <i className="fa-solid fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control placeholder="E-poçtunuzu daxil edin" />
            </InputGroup>
            <InputGroup className="mt-3">
              <InputGroup.Text className="bg-bitlio text-light border">
                <i className="fa-solid fa-key authior-modal-icon"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Şifrənizi daxil edin" />
            </InputGroup>
            <button
              className="rounded text-center cursor-pointer mt-3 bg-bitlio text-light authior-modal-sbm-btn"
              type="submit"
            >
              Daxil ol
            </button>
          </Form>
        </div>

        <style jsx>{`
          .authior-modal-auth-method-brand-logo {
            width: 44px;
          }

          #authior-modal-sign-up-methods {
            display: flex;
            justify-content: center;
            gap: 15px;
          }

          #authior-modal-sign-up-methods > button {
            all: unset;
          }

          #authior-modal-email-method {
            margin: auto;
          }

          .authior-modal-sbm-btn {
            all: unset;
            padding: 10px;
            width: 270px !important;
          }
        `}</style>
      </>
    );
  };

  const AccountTypeStep = () => {
    return (
      <>
        <div>
          <Form.Group>
            <Form.Label>Hesab tipi</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Seçin</option>
              <option value="user">İstifadəçi</option>
              <option value="tutor">Tutor</option>
            </Form.Select>
          </Form.Group>
          <div className="mt-3">
            {step === 1 ? (
              <></>
            ) : (
              <button className="cursor-pointer bg-bitlio text-light border rounded p-2 director-btn">
                <i className="fa-solid fa-angle-left"></i> Əvvəlki
              </button>
            )}
            {step + 1 === steps.length ? (
              <button
                className="float-end bg-bitlio text-light border rounded p-2 director-btn cursor-pointer"
                onClick={() =>
                  finishCreateAccount({
                    ...user,
                    type: type,
                  })
                }
              >
                Bitir
              </button>
            ) : (
              <button className="float-end bg-bitlio text-light border rounded p-2 director-btn cursor-pointer">
                Sonrakı <i className="fa-solid fa-angle-right"></i>
              </button>
            )}
          </div>
        </div>

        <style jsx>{`
          .director-btn {
            width: 100px;
          }
        `}</style>
      </>
    );
  };

  const steps = [
    <SignStep />,
    <AccountTypeStep />,
  ];

  const [errorMessage, setErrorMessage] = useState("");

  const {
    authWithGoogle,
    authWithGithub,
    isUserExistsOnFirestore,
    createUserOnFirestore,
    getUserFromFirestore,
  } = UserAuth();

  const checkWithGoogle = async () => {
    try {
      const user = await authWithGoogle();
      const isExists = await isUserExistsOnFirestore(user);
      if (isExists) {
        const gotUser = await getUserFromFirestore(user);
        if (gotUser) {
          updateAuth(true);
          updateUser(gotUser);
        } else if (!gotUser) {
          setErrorMessage("Məlumat bazasında haqqınızda məlumat tapılmadı");
        } else {
          setErrorMessage(gotUser.message);
        }
      } else if (!isExists) {
        setUser(user);
        setStep(step + 1);
        // finishCreateAccount(user);
      } else {
        setErrorMessage(isExists.message);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const checkWithGithub = async () => {
    try {
      const user = await authWithGithub();
      const isExists = await isUserExistsOnFirestore(user);
      if (isExists) {
        const gotUser = await getUserFromFirestore(user);
        if (gotUser) {
          updateAuth(true);
          updateUser(gotUser);
        } else if (!gotUser) {
          setErrorMessage("Məlumat bazasında haqqınızda məlumat tapılmadı");
        } else {
          setErrorMessage(gotUser.message);
        }
      } else if (!isExists) {
        setUser(user);
        setStep(step + 1);
      } else {
        setErrorMessage(isExists.message);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <>
      <div className="border bg-light" id="authior-modal-main-container">
        <div className="text-center mb-3">
          <img
            src="/brand/texted-main-logo.png"
            id="authior-modal-main-container-brand"
          />
        </div>
        {steps[step]}
        <div className="text-danger text-center">{errorMessage}</div>
        <div className="text-center fw-bold authior-modal-brand-text">
          Authior by Bitlio
        </div>
      </div>

      <style jsx>{`
        #authior-modal-main-container {
          width: 20%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px;
        }

        .authior-modal-brand-text {
          color: #9d81bb;
        }

        #authior-modal-main-container-brand {
          width: 150px;
        }

        @media screen and (max-width: 1730px) {
          #authior-modal-main-container {
            width: 25%;
          }
        }

        @media screen and (max-width: 1400px) {
          #authior-modal-main-container {
            width: 30%;
          }
        }

        @media screen and (max-width: 1180px) {
          #authior-modal-main-container {
            width: 35%;
          }
        }

        @media screen and (max-width: 1000px) {
          #authior-modal-main-container {
            width: 40%;
          }
        }

        @media screen and (max-width: 875px) {
          #authior-modal-main-container {
            width: 45%;
          }
        }

        @media screen and (max-width: 773px) {
          #authior-modal-main-container {
            width: 50%;
          }
        }

        @media screen and (max-width: 685px) {
          #authior-modal-main-container {
            width: 55%;
          }
        }

        @media screen and (max-width: 640px) {
          #authior-modal-main-container {
            width: 70%;
          }
        }

        @media screen and (max-width: 500px) {
          #authior-modal-main-container {
            width: 90%;
          }
        }

        @media screen and (max-width: 390px) {
          #authior-modal-main-container {
            width: 95%;
          }
        }
      `}</style>
    </>
  );
};

export default AuthiorModal;
