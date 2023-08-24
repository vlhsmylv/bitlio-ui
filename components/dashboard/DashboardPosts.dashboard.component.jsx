import GreetingHeader from "./GreetingHeader.dashboard.component";
import BitlioLink from "../../components/pillars/custom/BitlioLink.component";
import { Table } from "react-bootstrap";
import PostsTable from "./posts/PostsTable.posts.dashboard.component";
import CreatedPostsTable from "./posts/CreatedPostsTable.posts.dashboard.component";
import Code404 from "../error/Code404.error";

const DashboardPosts = ({ user }) => {
  const { cont } = user;
  const { posts, createdPosts } = cont;

  return (
    <>
      <div id="dashboard-posts">
        {Object.keys(user).length !== 0 && user !== undefined ? (
          <>
            {" "}
            <GreetingHeader user={user} />
            {user.type === "user" ? (
              <div
                id="dashboard-posts-finished-posts"
                className="dashboard-posts-stats-item"
              >
                <div className="dashboard-posts-stats-item-title text-bitlio">
                  Bitirdiyim məqalələr
                </div>
                <div id="dashboard-posts-finished-posts-list">
                  <PostsTable posts={posts} />
                </div>
              </div>
            ) : (
              <></>
            )}
            {user.type === "tutor" ? (
              <div
                id="dashboard-posts-created-posts"
                className="dashboard-postss-stats-item"
              >
                <div className="text-bitlio dashboard-posts-stats-item-title">
                  Yazdığım məqalələr
                </div>
                <div id="dashboard-posts-created-posts-list">
                  <CreatedPostsTable posts={createdPosts} />
                </div>
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
        #dashboard-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .dashboard-posts-stats-item-title {
          font-size: 25px;
          font-weight: bold;
        }

        #dashboard-posts-finished-posts-list,
        #dashboard-posts-created-posts-list {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default DashboardPosts;
