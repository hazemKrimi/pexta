import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Posts.scss';

class Posts extends React.Component {
    render() {
        const posts = [1,2,3,4,5].map((post, key) => {
            return(
                <div className="post" key={key.toString()}>
                    <div className="info">
                        <div className="data">
                            <div className="user">User {post}</div>
                            <div className="title">
                                <h2>
                                    <Link className="route-link" to="/post">Post {post}</Link>
                                </h2>
                            </div>
                            <div className="content">Content {post}</div>
                        </div>
                        <div className="stats">
                            <div className="likes">?? Likes</div>
                            <div className="dislikes">?? Dislikes</div>
                            <div className="comments">?? Comments</div>
                        </div>
                    </div>
                    <div className="interaction">
                        <button className="like">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1801 1656.95">
                                <path className="cls-1" d="M994.11,464.16C1066.8,291.88,1232.86,171.49,1426,171.49c260.18,0,447.56,222.58,471.12,487.83,0,0,12.71,65.85-15.27,184.39-38.11,161.45-127.7,304.88-248.48,414.35L994.11,1828.41,365.63,1258c-120.78-109.43-210.37-252.9-248.48-414.34-28-118.55-15.27-184.39-15.27-184.39C125.44,394,312.82,171.46,573,171.46,766.18,171.46,921.43,291.88,994.11,464.16Z" transform="translate(-99 -171.46)"/>
                            </svg>
                            <span>Like</span>
                        </button>
                        <button className="dislike">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1732 1732">
                                <path className="cls-1" d="M1000,134c-478.28,0-866,387.72-866,866s387.72,866,866,866,866-387.72,866-866S1478.28,134,1000,134ZM271,1000c0-402.62,326.38-729,729-729,194.94,0,372,76.51,502.8,201.15L735.65,1140.9,706.77,1109l647.34-564.31a288.44,288.44,0,0,0-71.35-8.85c-128,0-238.14,79.81-286.33,194-48.19-114.22-151.12-194-279.19-194-172.49,0-296.71,147.55-312.33,323.41,0,0-8.43,43.65,10.13,122.24,23.11,97.92,74.8,185.86,144.74,255.67l19.44-16.94h0l.06,0a4.24,4.24,0,0,1,1.19-1l126.14-110L735.5,1141,609.7,1250.7l-.23-.23h0l.23.23L408.46,1426.13A725.69,725.69,0,0,1,271,1000Zm729,729c-194.18,0-370.62-75.93-501.27-199.7l208.12-181.43.1.09h0l-.09-.09,120.72-105.23,28.88,31.86L737.33,1378.33l-.07-.07h0l.08.07-11.73,10.22,270.83,245.8,423.81-378.12c80.07-72.58,139.46-167.67,164.72-274.7,18.56-78.59,10.13-122.25,10.13-122.25-5.78-65-26.41-126.16-58.83-177.42L856.61,1274.35l-28.88-31.86,765-666.91A725.69,725.69,0,0,1,1729,1000C1729,1402.62,1402.62,1729,1000,1729Z" transform="translate(-134 -134)"/>
                            </svg>
                            <span>Dislike</span>
                        </button>
                        <button className="comment">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1678 580.88">
                                <path className="cls-1" d="M1548.56,753.3c-145.88,0-266.62,107.54-287.3,247.67H1133.71c-19.46-99.21-106.88-174.07-211.79-174.07S729.59,901.76,710.13,1001H588.63C569.17,901.76,481.75,826.9,376.84,826.9,257.64,826.9,161,923.54,161,1042.74s96.64,215.85,215.84,215.85S592.68,1162,592.68,1042.74a216.62,216.62,0,0,0-3.86-40.78H709.94a216.62,216.62,0,0,0-3.86,40.78c0,119.21,96.63,215.85,215.84,215.85s215.84-96.64,215.84-215.85a217.45,217.45,0,0,0-3.86-40.78h127.22a292.26,292.26,0,0,0-3,41.78c0,160.41,130,290.44,290.44,290.44s290.44-130,290.44-290.44S1709,753.3,1548.56,753.3Z" transform="translate(-161 -753.3)"/>
                            </svg>
                            <span>Comment</span>
                        </button>
                    </div>
                </div>
            );
        });
        return(
            <div id="posts">
                <div id="posts-filter">
                    <button className="filter active">Popular</button>
                    <button className="filter">Newest</button>
                    <button className="filter">Best</button>
                </div>
                <div id="posts-container">
                    {posts}
                </div>
            </div>
        );
    }
}

export default Posts;