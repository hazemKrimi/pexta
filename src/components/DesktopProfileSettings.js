import React from 'react';
import "../scss/DesktopProfileSettings.scss";

class DesktopProfileSettings extends React.Component {
    close = () => {
        this.props.close();
    }

    render() {
        return(
            <div id="desktop-profile-settings-container" style={{display: this.props.display ? "grid" : "none"}}>
                <div id="desktop-profile-settings">
                    <div>
                        <h2>Profile Settings</h2>
                        <svg onClick={this.close} className="close-profile-settings" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="438.533px" height="438.533px" viewBox="0 0 438.533 438.533">
                            <defs>
                                <linearGradient id="linear-gradient" x1="275.62" y1="495.12" x2="71.68" y2="291.18" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#eacc56"/>
                                    <stop offset="1" stopColor="#ee64d1"/>
                                </linearGradient>
                            </defs>
                            <g>
                                <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
                                    c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
                                    c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
                                    s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
                                    C438.533,179.485,428.732,142.795,409.133,109.203z M322.621,270.939c3.617,3.613,5.428,7.905,5.428,12.854
                                    c0,5.133-1.811,9.514-5.428,13.127l-25.693,25.701c-3.614,3.613-7.994,5.42-13.135,5.42c-4.948,0-9.236-1.807-12.847-5.42
                                    l-51.676-51.682l-51.678,51.682c-3.616,3.613-7.898,5.42-12.847,5.42c-5.14,0-9.517-1.807-13.134-5.42l-25.697-25.701
                                    c-3.616-3.613-5.424-7.994-5.424-13.127c0-4.948,1.809-9.24,5.424-12.854l51.678-51.673l-51.678-51.678
                                    c-3.616-3.612-5.424-7.898-5.424-12.847c0-5.14,1.809-9.517,5.424-13.134l25.697-25.693c3.617-3.616,7.994-5.424,13.134-5.424
                                    c4.949,0,9.231,1.809,12.847,5.424l51.678,51.674l51.676-51.674c3.61-3.616,7.898-5.424,12.847-5.424
                                    c5.141,0,9.521,1.809,13.135,5.424l25.693,25.693c3.617,3.617,5.428,7.994,5.428,13.134c0,4.948-1.811,9.235-5.428,12.847
                                    l-51.675,51.678L322.621,270.939z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="settings">
                        <div className="change-photo">
                            <h3>Change Profile Picture</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1855 1855">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="-356" y1="927.47" x2="2276" y2="927.47" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#eacc56"/>
                                        <stop offset="1" stopColor="#ee64d1"/>
                                    </linearGradient>
                                </defs>
                                <path d="M1927,1000.5C1927,489.09,1510.91,73,999.5,73S72,489.09,72,1000.5c0,270.12,116.16,513.6,301.05,683.25l-.88.77,30.09,25.37c1.95,1.65,4.08,3,6,4.62,16,13.25,32.55,25.83,49.42,38,5.46,3.94,10.92,7.89,16.49,11.73q27,18.63,55.38,35.35c4.11,2.43,8.26,4.79,12.41,7.15,20.67,11.77,41.79,22.87,63.41,33,1.58.75,3.2,1.42,4.79,2.16a919,919,0,0,0,224.32,71l6.2,1.11c24.42,4.22,49.11,7.59,74.1,9.85,3,.27,6.07.44,9.14.71,24.89,2,50,3.37,75.55,3.37,25.26,0,50.19-1.32,74.94-3.31,3.14-.27,6.28-.43,9.41-.7q37.19-3.39,73.46-9.68c2.09-.37,4.22-.75,6.31-1.15a919.21,919.21,0,0,0,221.15-69.31c2.56-1.18,5.16-2.29,7.72-3.51q31.21-14.67,61.08-31.57c5-2.8,9.88-5.63,14.81-8.53,18.14-10.69,36-21.85,53.32-33.73,6.24-4.25,12.34-8.73,18.52-13.18,14.8-10.66,29.34-21.66,43.47-33.16,3.14-2.53,6.51-4.72,9.58-7.32l30.86-25.76-.91-.78C1809.73,1516.59,1927,1272,1927,1000.5Zm-1787.55,0c0-474.24,385.81-860,860.05-860s860.05,385.81,860.05,860.05c0,255.55-112.15,485.3-289.69,642.94a253.6,253.6,0,0,0-30.12-18.11l-285.57-142.77a74.75,74.75,0,0,1-41.55-67.21v-99.74c6.61-8.16,13.59-17.4,20.81-27.55a687.14,687.14,0,0,0,88.23-172.79A122.38,122.38,0,0,0,1392,1004.34V884.78a122.73,122.73,0,0,0-29.91-79.9V647.48c1.75-17.54,8-116.3-63.51-197.78-62.16-71-162.77-106.88-299.06-106.88S762.6,378.74,700.44,449.67C629,531.15,635.18,630,636.93,647.44V804.85A122.87,122.87,0,0,0,607,884.75v119.56a122.72,122.72,0,0,0,45.19,95.15c27.32,107,83.54,188,104.32,215.48v97.61a75.23,75.23,0,0,1-39.19,66L450.66,1624.05a244.6,244.6,0,0,0-25.37,16C250,1482.53,139.45,1254.2,139.45,1000.5Z" transform="translate(-72 -73)"/>
                            </svg>
                            <input type="file" accept="image/*"/>
                            <button className="btn btn-gradient">Change</button>
                        </div>
                        <div className="change-password">
                            <h3>Change Password</h3>
                            <form>
                                <input type="password" placeholder="Old Password"/>
                                <input type="password" placeholder="New Password"/>
                                <input type="password" placeholder="Confirm New Password"/>
                            </form>
                            <button className="btn btn-gradient">Change</button>
                        </div>
                        <div className="change-email">
                            <h3>Change Email</h3>
                            <form>
                                <input type="email" placeholder="Old Email"/>
                                <input type="email" placeholder="New Email"/>
                                <input type="email" placeholder="Confirm New Email"/>
                            </form>
                            <button className="btn btn-gradient">Change</button>
                        </div>
                        <div className="change-username">
                            <h3>Change Username</h3>
                            <input type="text" placeholder="New Username"/>
                            <button className="btn btn-gradient">Change</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopProfileSettings;