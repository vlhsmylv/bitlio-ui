import { ProgressBar } from "react-bootstrap";
import tutorVerifyRequirements from "../../../data/tutorVerifyRequirements.data";
import TutorIsNotVerifiedInfo from "../../../texts/not-found/TutorIsNotVerifiedInfo.text";

const TutorIsNotVerified = ({ user }) => {
  const { dash } = user;
  const { totalViews, totalRatio } = dash;

  return (
    <>
      <div className="mt-3">
        <div className="text-center">
          {TutorIsNotVerifiedInfo}
        </div>
        <div id="dashboard-tutor-requirements">
          <div className="dashboard-tutor-requirement">
            <div className="dashboard-tutor-requirement-progress-bar">
              <ProgressBar
              // here
                now={(100 * 100) / tutorVerifyRequirements.totalViews}
                label={`${
                  (totalViews * 100) / tutorVerifyRequirements.totalViews
                }%`}
              />
            </div>
            <div className="dashboard-tutor-requirement-numbers">
              {totalViews} / {tutorVerifyRequirements.totalViews}
            </div>
            <div className="dashboard-tutor-requirement-numbers">
              Ümumi baxış
            </div>
          </div>
          <div className="dashboard-tutor-requirement">
            <div className="dashboard-tutor-requirement-progress-bar">
              <ProgressBar max={70} now={totalRatio} label={`${totalRatio}%`}/>
            </div>
            <div className="dashboard-tutor-requirement-numbers">
              {totalViews}% / {tutorVerifyRequirements.totalRatio}%
            </div>
            <div className="dashboard-tutor-requirement-numbers">
              Ümumi nisbət
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-tutor-requirement-progress-bar {
          width: 200px;
        }

        #dashboard-tutor-requirements {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 30px;
        }

        .dashboard-tutor-requirement {
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
          text-align: center;
        }

        .dashboard-tutor-requirement-number {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default TutorIsNotVerified;
