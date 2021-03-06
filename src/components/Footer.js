import React from 'react';
import '../scss/Footer.scss';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <svg className="footer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 758.29 291.67">
                        <defs>
                            <linearGradient id="linear-gradient" x1="275.62" y1="495.12" x2="71.68" y2="291.18" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#eacc56"/>
                                <stop offset="1" stopColor="#ee64d1"/>
                            </linearGradient>
                        </defs>
                        <path className="cls-1" d="M159.5,233.17A145.84,145.84,0,1,0,305.33,379,145.83,145.83,0,0,0,159.5,233.17ZM141.64,349.46l-14.15,101A12.41,12.41,0,1,1,102.92,447l14.14-101a12.41,12.41,0,0,1,24.58,3.44Zm44.85,57.13a50.23,50.23,0,0,1-8.82-.78L161,403.74a12.53,12.53,0,0,1-10.9-14h0a12.53,12.53,0,0,1,14-10.9l18.42,2.28c12.52,1.18,23.92-8,25.73-20.92,1.87-13.31-7.11-25.57-20-27.38-.41-.06-.82-.09-1.22-.12l0-.08-77-10.78a12.54,12.54,0,0,1-10.68-14.17h0A12.54,12.54,0,0,1,113.48,297l78.9,11.06a8.08,8.08,0,0,1,1,.19,49.39,49.39,0,0,1-6.87,98.34Z" transform="translate(-13.67 -233.17)"/>
                        <g>
                            <path className="cls-2" d="M401.21,340.1A37.87,37.87,0,0,1,417.85,355q5.79,9.67,5.79,23,0,13.14-5.79,22.9a37.68,37.68,0,0,1-16.64,14.95Q390.37,421,375.74,421h-25.4v34.91h-20.9v-121h46.3Q390.37,334.92,401.21,340.1Zm-5.7,55.65q7.07-6.22,7.07-17.8t-7.07-17.8q-7.08-6.22-20.74-6.22H350.34v48h24.43Q388.44,402,395.51,395.75Z" transform="translate(-13.67 -233.17)"/>
                            <path className="cls-2" d="M522.65,416.66H455.3a25.45,25.45,0,0,0,9.24,16.16q7.48,6,18.57,6,14.14,0,23.31-10l10.77,13.3a36.54,36.54,0,0,1-14.63,11.24,50.09,50.09,0,0,1-19.93,3.8q-14.14,0-24.92-6.05a41.88,41.88,0,0,1-16.63-16.85,50.29,50.29,0,0,1-5.87-24.45,51.09,51.09,0,0,1,5.71-24.28,42,42,0,0,1,15.83-16.85,43.67,43.67,0,0,1,22.82-6.05,42.62,42.62,0,0,1,22.43,6,41,41,0,0,1,15.43,16.76q5.54,10.81,5.54,25C523,411.76,522.87,413.9,522.65,416.66ZM463.26,386q-6.67,6.13-8.12,16.33h48.7A26.12,26.12,0,0,0,496,386.07a23,23,0,0,0-16.4-6.22A23.2,23.2,0,0,0,463.26,386Z" transform="translate(-13.67 -233.17)"/>
                            <path className="cls-2" d="M594.5,455.89l-22-32-22.18,32H528.12l33.43-46.83-32-45.45h22.35L573,393.85,594,363.61h21.7l-32.15,45.1,33.6,47.18Z" transform="translate(-13.67 -233.17)"/>
                            <path className="cls-2" d="M683.55,450.88a23,23,0,0,1-8.6,4.66,36.08,36.08,0,0,1-10.69,1.56q-14.14,0-21.86-8T634.69,426V381.58H620.54V364.3h14.15V343.21h20.09V364.3h23v17.28h-23v43.89q0,6.75,3.05,10.29t8.84,3.54a16.85,16.85,0,0,0,11.25-3.8Z" transform="translate(-13.67 -233.17)"/>
                            <path className="cls-2" d="M761.91,372.33Q772,382.1,772,401.8v54.09H753V444.66a23.88,23.88,0,0,1-10.53,9.24A38.69,38.69,0,0,1,726,457.1a37.92,37.92,0,0,1-16.87-3.54A26,26,0,0,1,694,429.45q0-12.45,8.6-20T729.68,402h22.18v-1.38q0-9.68-5.38-14.86t-16-5.19A43.29,43.29,0,0,0,716.26,383a34.29,34.29,0,0,0-11.81,6.74L696.57,374a47.42,47.42,0,0,1,16.23-8.47,67.53,67.53,0,0,1,20.1-2.94Q751.86,362.57,761.91,372.33Zm-18.33,65.33A19.86,19.86,0,0,0,751.86,427V416.31H731.13q-17.37,0-17.36,12.27a11.3,11.3,0,0,0,4.34,9.34q4.33,3.45,12,3.45A24.5,24.5,0,0,0,743.58,437.66Z" transform="translate(-13.67 -233.17)"/>
                        </g>
                    </svg>
                    <div className="copyright">
                        Copyright &copy; Pexta
                    </div>
                    <div className="footer-links">
                        <span>Terms of Use</span>
                        <span>Privacy Policies</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;