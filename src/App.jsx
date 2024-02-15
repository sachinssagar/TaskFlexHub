import React from "react";
import "./App.css";
import "./Sidebar.css";
import "./header.css";
import "./table.css";
import "./Footer.css";
import Icons from "./Svg";

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <div className="notification-wrapper">
          <Icons.Bell />
          <p className="notification-text">Bell Labs</p>
        </div>
        <div className="section">
          <p>Dashboard</p>
        </div>
        <div className="dashboard-item-container">
          <div className="section">
            <Icons.Projects />
            <p>Projects</p>
          </div>
          <div className="section active">
            <Icons.Tasks />
            <p>Tasks</p>
          </div>
          <div className="section">
            <Icons.Services />
            <p>Services</p>
          </div>
          <div className="section">
            <Icons.Chat />
            <p>Chat</p>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="header">
          <div className="search-container">
            <div className="search-box">Search...</div>
            <p>Friday, 5 June</p>
          </div>
          <div className="display-options">
            <div className="list-option">List view</div>
            <div className="grid-option">Grid view</div>
          </div>
        </div>

        <div className="box">
          <div className="task-header">
            <div className="task-heading">
              <h1>Latest Tasks</h1>
              <p className="task-intro">
                A list of all the users in your account including their name,
                title, email, and role.
              </p>
            </div>
            <button className="add-button">Add more people</button>
          </div>

          <div className="table-container">
            <div className="table-container-auto">
              <div className="table-container-relative">
                <table className="Table">
                  <tr className="table-header">
                    <td className="table-name">
                      <input type="checkbox" /> Name
                    </td>
                    <td className="table-title">Title</td>
                    <td className="table-role">Role</td>
                    <td className="table-edit"></td>
                  </tr>

                  <tr className="table-data background-white">
                    <td className="text-green text-style-weight table-name">
                      <input type="checkbox" />
                      John Smith
                    </td>
                    <td className="text-style table-title">
                      Back-end Developer
                    </td>
                    <td className="text-style table-role">Member</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>

                  <tr className="table-data">
                    <td className="text-black table-name">
                      <input type="checkbox" />
                      Jane Doe
                    </td>
                    <td className="text-style table-title">
                      Full-stack Developer
                    </td>
                    <td className="text-style table-role">Admin</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>

                  <tr className="table-data background-white">
                    <td className="text-green text-style-weight table-name">
                      <input type="checkbox" />
                      Bob Johnson
                    </td>
                    <td className="text-style table-title">UI Designer</td>
                    <td className="text-style table-role">Member</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>

                  <tr className="table-data">
                    <td className="text-black table-name">
                      <input type="checkbox" />
                      Sarah Lee
                    </td>
                    <td className="text-style table-title">
                      Front-end Developer
                    </td>
                    <td className="text-style table-role">Admin</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>

                  <tr className="table-data background-white">
                    <td className="text-green text-style-weight table-name">
                      <input type="checkbox" />
                      Tom Brown
                    </td>
                    <td className="text-style table-title">
                      Back-end Developer
                    </td>
                    <td className="text-style table-role">Member</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>

                  <tr className="table-data">
                    <td className="text-black table-name">
                      <input type="checkbox" />
                      Emily Davis
                    </td>
                    <td className="text-style table-title">
                      Full-stack Developer
                    </td>
                    <td className="text-style table-role">Admin</td>
                    <td className="text-green text-style-weight table-edit">
                      Edit
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="project-container">
          <div class="project-section project-left">
            <div class="project-header">
              <div class="section-title">Projects in Progress</div>
              <div class="status-container">
                <div class="status-item-label">
                  <div class="status-label">Deployment in Progress</div>
                </div>
                <div class="status-item-error">
                  <div class="status-label error">Build Failed</div>
                </div>
              </div>
              <div class="task-details">
                <div class="task-item-info">
                  <div class="task-label">Improve Code Quality</div>
                  <div class="task-info">Raised by Manu Arora, 2 hours ago</div>
                </div>
                <div class="task-item-status">
                  <div class="task-meta">
                    <div class="comment-icon">
                      <Icons.CommentIconLeft />
                      17 comments
                    </div>
                  </div>
                  <div class="task-meta">
                    <div class="modified-icon">
                      <Icons.ModifiedIconLeft />
                      23 files modified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="project-section project-right">
            <div class="project-header">
              <div class="section-title text-white">Projects Completed</div>
              <div class="status-container">
                <div class="status-item-label-right">
                  <div class="status-label ">Deployment in Progress</div>
                </div>
                <div class="status-item-error-right">
                  <div class="status-label success">Build Passing</div>
                </div>
              </div>
              <div class="task-details ">
                <div class="task-item-info ">
                  <div class="task-label text-white">Deploy Hotfix</div>
                  <div class="task-info text-white">
                    Raised by Manu Arora, 17 hours ago
                  </div>
                </div>
                <div class="task-item-status text-white">
                  <div class="task-meta">
                    <div class="comment-icon">
                      <Icons.CommentIconRight />
                      12 comments
                    </div>
                  </div>
                  <div class="task-meta ">
                    <div class="modified-icon">
                      <Icons.ModifiedIconRight /> 2 files modified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
