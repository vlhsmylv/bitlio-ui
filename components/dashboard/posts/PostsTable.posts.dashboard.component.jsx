import BitlioLink from "../../pillars/custom/BitlioLink.component";
import { Table } from "react-bootstrap";
import ResultIsNotFound from "../../../texts/not-found/ResultIsNotFound.text";

const PostsTable = ({ posts }) => {
  return (
    <>
      <Table bordered hover stiped>
        <thead>
          <tr>
            <th>Məqalənin adı</th>
            <th>Müəllif</th>
            <th>Təcrübə</th>
            <th>Tarix</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if is empty  */}
          {posts.length === 0 ? (
            <></>
          ) : (
            <>
              {/* Return all posts */}
              {posts.map((post, i) => (
                <tr key={i}>
                  <td>
                    <BitlioLink
                      href={`/posts/${post.slug}`}
                      className="text-decoration-underline"
                    >
                      post.title
                    </BitlioLink>
                  </td>
                  <td>{post.author}</td>
                  <td>
                    +{post.xp}
                    <i className="fa-solid fa-star text-warning"></i>
                  </td>
                  <td>{post.finishDate}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
      {/* Check again for 404 message */}
      {posts.length === 0 ? (
        <div className="text-center">{ResultIsNotFound}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostsTable;