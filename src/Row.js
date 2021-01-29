import React from 'react';
import "./Row.css";
import {Avatar} from '@material-ui/core';


function Row({owner, repoName, repoDescription, stars, issues}) {
    return (
        <div className="row">
            <div className="row__avatar">
                <Avatar src={owner} style={{ height: '80px', width: '80px' }}/>
            </div>
            <div className="row__repo">
                <h2>{repoName}</h2>
                <p>{repoDescription}</p>
                <div >
                    <p className="row__repo-stars">Stars: <b>{stars}</b> </p>
                    <p className="row__repo-issues">  Issues: <b>{issues}</b>  </p>
                    <p>  Submitted 30 days ago by Name</p>
                </div>
            </div>
        </div>
    )
}

export default Row
