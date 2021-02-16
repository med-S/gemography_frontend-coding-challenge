import React, {useEffect, useState} from 'react';
import "./Feed.css";
import Row from "./Row";
import getDate from './functions/getDate';
import abbreviateNumbers from './functions/abbreviateNumbers';
import axios from "axios";


const default_url = "https://api.github.com/search/repositories?q=created:>" + getDate() + "&sort=stars&order=desc";

function Feed() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch(default_url)
      .then(res => res.json())
      .then((data) => {      
        console.log(data.items);
        const items = data.items.map((item) => ({
          key: item.node_id,
          avatar: item.owner.avatar_url,
          owner: item.owner.login,
          repoName: item.name,
          repoDescription: item.description,
          stars: abbreviateNumbers(item.stargazers_count) ,
          issues: abbreviateNumbers(item.open_issues_count),     
        }));
      
        setItems(items);
        console.log(items);
        
      }).catch((err)=> console.log(err));
     
    };
    getData();
    
  }, []);


  return (
    <div className="feed">
   

      {items.map((item) => (
        <Row
        key={item.key}
        avatar={item.avatar} 
        owner={item.owner}
        repoName={item.repoName}
        repoDescription={item.repoDescription}
        stars={item.stars}
        issues={item.issues}/>
      ))}
  
    </div>
  )
}


export default Feed
