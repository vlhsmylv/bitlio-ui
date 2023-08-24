import VerifiedSign from "../account/VerifiedSign.account.component";
import Code404 from "../error/Code404.error";
import GreetingHeader from "./GreetingHeader.dashboard.component";
import MyTrainings from "./trainings/MyTrainings.trainings.dashboard.component";
import TutorIsNotVerified from "./tutor/TutorIsNotVerified.tutor.dashboard.component";

const DashboardTrainings = ({ user }) => {
  const { cont } = user;
  const { trainings, createdTrainings } = cont;

  return (
    <>
      <div id="dashboard-trainings">
        {Object.keys(user).length !== 0 && user !== undefined ? (
          <>
            <GreetingHeader user={user} />
            {user.type === "user" ? (
              <div
                id="dashboard-trainings-my-trainings"
                className="dashboard-trainings-stats-item"
              >
                <div className="dashboard-trainings-stats-item-title text-bitlio">
                  Mənim təlimlərim
                </div>
                <div id="dashboard-trainings-my-trainings-list">
                  <MyTrainings trainings={trainings} />
                </div>
              </div>
            ) : (
              <></>
            )}
            {user.type === "tutor" ? (
              <div
                id="dashboard-trainings-created-trainings"
                className="dashboard-trainings-stats-item"
              >
                <div className="dashboard-trainings-stats-item-title text-bitlio">
                  Təsis etdiyim təlimlər
                </div>
                {user.verified ? (
                  <>
                    <VerifiedSign />
                  </>
                ) : (
                  <>
                    <TutorIsNotVerified user={user} />
                  </>
                )}
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <Code404 />
          </>
        )}
      </div>

      <style jsx>{`
        #dashboard-trainings {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .dashboard-trainings-stats-item-title {
          font-size: 25px;
          font-weight: bold;
        }

        #dashboard-trainings-my-trainings-list,
        #dashboard-trainings-created-trainings-list {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default DashboardTrainings;
