import GreetingHeader from "./GreetingHeader.dashboard.component";
import Code404 from "../error/Code404.error"

const DashboardIndex = ({ user }) => {
  return (
    <>
      <div id="dashboard-index">
        {Object.keys(user).length !== 0 && user !== undefined ? (
          <><GreetingHeader user={user} />
          <div id="dashboard-index-stats-container">
            <div className="dashboard-index-stats">
              <div id="dashboard-index-xp" className="dashboard-index-stats-item">
                <div id="dashboard-index-xp-info">
                  <span>Təcrübəniz</span>
                  <span className="float-end">
                    {user ? user.dash.xp : <></>}{" "}
                    <i className="fa-solid fa-star text-warning"></i>
                  </span>
                </div>
                <div id="dashboard-index-xp-graph"></div>
              </div>
              <div
                id="dashboard-index-coins"
                className="dashboard-index-stats-item"
              >
                <div id="dashboard-index-coins-info">
                  <span>BTL Coin&nbsp;&nbsp; 
                    {user.type==="user" ? (
                      <span><a className="btn border" href="/payment/btl-coin/buy" target="_blank">+</a></span>
                    ) : <></>}
                  </span>
                  <span className="float-end">
                    {user ? user.dash.coins : <></>}{" "}
                    <i className="fa-solid fa-coins text-warning"></i>
                  </span>
                </div>
              </div>
              {user.type === "tutor" ? (
                <div className="dashboard-index-stats">
                  <div
                    id="dashboard-index-xp"
                    className="dashboard-index-stats-item"
                  >
                    <div id="dashboard-index-xp-info">
                      <span>Postlarım</span>
                      <span className="float-end">
                        {user ? user.cont.posts.length : <></>}{" "}
                        <i className="fa-solid fa-align-left text-warning"></i>
                      </span>
                    </div>
                    <div id="dashboard-index-xp-graph"></div>
                  </div>
                  <div
                    id="dashboard-index-coins"
                    className="dashboard-index-stats-item"
                  >
                    <div id="dashboard-index-coins-info">
                      <span>Təlimlərim</span>
                      <span className="float-end">
                        {user ? user.cont.trainings.length : <></>}{" "}
                        <i className="fa-solid fa-person-chalkboard text-warning"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div></>
        ) : <><Code404 /></>} 
      </div>

      <style jsx>{`
        .dashboard-index-stats-item {
          background: white;
          padding: 10px;
          border-radius: 10px;
          width: 350px;
          height: 200px;
        }

        #dashboard-index-stats-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-top: 30px;
          justify-content: center;
        }

        .dashboard-index-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }
      `}</style>
    </>
  );
};

export default DashboardIndex;
