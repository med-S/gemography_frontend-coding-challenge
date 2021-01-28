import React from 'react';
import "./Row.css";
import {Avatar} from '@material-ui/core';


function Row({owner, repoName, repoDescription, stars, issues}) {
    return (
        <div className="row">
            <div className="row__avatar">
                <Avatar src="" style={{ height: '80px', width: '80px' }}/>
            </div>
            <div className="row__repo">
                <h2>Repository Name</h2>
                <p>Repository description</p>
                <div >
                    <p className="row__repo-stars">Stars: <b>118k</b> </p>
                    <p className="row__repo-issues">  Issues: <b>1.6k</b>  </p>
                    <p>  Submitted 30 days ago by Name</p>
                </div>
            </div>
        </div>
    )
}

export default Row
