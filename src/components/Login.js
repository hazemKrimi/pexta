import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Login.scss';

class Login extends React.Component {
    close = () => {
        this.props.close();
    }

    render() {
        return(
            <div id="log-in-container" style={{display: this.props.display ? "grid" : "none"}} >
                <div id="log-in">
                    <svg className="close-log-in" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="438.533px" height="438.533px" viewBox="0 0 438.533 438.533" onClick={this.close}>
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
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <Link className="route-link" to="/home">
                            <button>Jump In</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;