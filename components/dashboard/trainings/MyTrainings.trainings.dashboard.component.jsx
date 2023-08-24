import ResultIsNotFound from "../../../texts/not-found/ResultIsNotFound.text";
import BitlioLink from "../../pillars/custom/BitlioLink.component";
import { Table } from "react-bootstrap";

const MyTrainings = ({ trainings }) => {
  return (
    <>
      <Table bordered hover stiped>
        <thead>
          <tr>
            <th>Təlimin adı</th>
            <th>Müəllif</th>
            <th>Təcrübə</th>
            <th>Tarix</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* Check if is empty  */}
          {trainings.length === 0 ? (
            <></>
          ) : (
            <>
              {/* Return all posts */}
              {trainings.map((training, i) => (
                <tr key={i}>
                  <td>
                    <BitlioLink
                      href={`/trainings/${training.slug}`}
                      className="text-decoration-underline"
                    >
                      post.title
                    </BitlioLink>
                  </td>
                  <td>{training.author}</td>
                  <td>
                    +{training.xp}
                    <i className="fa-solid fa-star text-warning"></i>
                  </td>
                  <td>{training.finishDate}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
      {/* Check again for 404 message */}
      {trainings.length === 0 ? (
        <div className="text-center">{ResultIsNotFound}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyTrainings;
