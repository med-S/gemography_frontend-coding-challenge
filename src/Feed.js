import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Feed.css";
import Row from "./Row";

function Feed() {

    const [data, setData] = useState([]);

    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        async function getData() {
            await axios
              .get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc")
              .then((response) => {
                // check if the data is populated
                console.log(response.data);
                setData(response.data);
                // you tell it that you had the result
                setLoadingData(false);
              });
          }
          if (loadingData) {
            // if the result is not ready so you make the axios call
            getData();
          }
    }, []);

    return (
        <div className="feed">
            <Row owner="https://avatars.githubusercontent.com/u/35155981?v=4"
                repoName="SALHAOUI Med"
                repoDescription="This is just a test"
                stars="500k"
                issues="3k"/>
            
        </div>
    )
}

export default Feed 
