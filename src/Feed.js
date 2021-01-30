import React, {useEffect} from 'react';
import "./Feed.css";
import Row from "./Row";
import getDate from './functions/getDate';
import { fetchRepos } from './functions/fetchRepos';
import abbreviateNumbers from './functions/abbreviateNumbers';
import moment from 'moment-timezone';
import {connect} from 'connect';

const default_url = "https://api.github.com/search/repositories?q=created:>" + getDate() + "&sort=stars&order=desc";



function Feed() {

    useEffect((url=default_url)=> {
      /** Fetching data */

    }, []);


    return (
        <div className="feed">
          
            {/* <Row 
              key={i}
              avatar={item.owner.avatar_url}
              repoName={item.name} 
              repoDescription={item.description}
              stars={abbreviateNumbers(item.stargazers_count)}
              issues={abbreviateNumbers(item.open_issues_count)}
              date={moment(item.created_at, "YYYYMMDD").fromNow()}
              owner={item.owner.login}
            /> */}
   
        </div>
    )
}

const mapDispatchToProps = (dispatch, url = default_url) => ({
  fetchRepos: (url) => {
    dispatch(fetchRepos(url));
  }
})

const mapStateToProps = (state) => ({
  repos: state.repos,
})


export default Feed
