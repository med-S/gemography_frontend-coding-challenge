import React from 'react';
import "./Row.css";
import {Avatar} from '@material-ui/core';


function Row({avatar, owner, repoName, repoDescription, stars, issues, date}) {
    return (
        <div className="row">
            <div className="row__avatar">
                <Avatar src={avatar} style={{ height: '80px', width: '80px' }}/>
            </div>
            <div className="row__repo">
                <h2>{repoName}</h2>
                {(repoDescription) &&
                <p>{repoDescription}</p>                
                }
                <div >
                    <p className="row__repo-stars">Stars: <b>{stars}</b> </p>
                    <p className="row__repo-issues">  Issues: <b>{issues}</b>  </p>
                    <p>  Submitted {date} by {owner}</p>
                </div>
            </div>
        </div>
    )
}

export default Row
