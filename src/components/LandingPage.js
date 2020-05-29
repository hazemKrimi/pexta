import React from 'react';
import LandingNav from './LandingNav';
import Showcase from './Showcase';
import SignUp from './SignUp';
import Login from './Login';
import '../scss/LandingPage.scss';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySignUp: false,
            displayLogin: false
        }
    }

    openSignUp = () => {
        this.setState({
            displaySignUp: true
        });
    }

    openLogin = () => {
        this.setState({
            displayLogin: true
        });
    }

    close = () => {
        this.setState({
            displaySignUp: false,
            displayLogin: false
        });
    }

    render() {
        return (
            <div id="landing-page">
                <div className="container">
                    <div id="landing-page-container">
                        <LandingNav showSignUp={this.openSignUp} showLogin={this.openLogin} />
                        <Showcase />
                        <SignUp display={this.state.displaySignUp} close={this.close} />
                        <Login display={this.state.displayLogin} close={this.close} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;