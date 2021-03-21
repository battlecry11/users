import React, { Component } from "react";

export class Home extends Component {
    render() {
        return (
            <div>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Admin Actions
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/admin/addNews">
                            Add News
                        </a>
                        <a className="dropdown-item" href="/admin/news">
                            News List
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/admin/users">
                            User List
                        </a>
                      
                    </div>
                </li>
            </div>
        );
    }
}

export default Home;
