import React from 'react';
import HomeNav from './HomeNav';
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import Footer from './Footer';
import AddPost from './AddPost';
import DesktopProfileSettings from './DesktopProfileSettings';
import MobileProfileSettings from "./MobileProfileSettings";
import UserProfile from './UserProfile';
import '../scss/HomePage.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddPost: false,
            displayDesktopProfileSettings: false,
            displayMobileProfileSettings: false,
            displayUserProfile: false
        }
    }

    openAddPost = () => {
        this.setState({
            displayAddPost: true
        });
    }

    openDesktopProfileSettings = () => {
        this.setState({
            displayDesktopProfileSettings: true
        });
    }

    openMobileProfileSettings = () => {
        this.setState({
            displayMobileProfileSettings: true
        });
    }

    openUserProfile = () => {
        this.setState({
            displayUserProfile: true
        });
    }

    close = () => {
        this.setState({
            displayAddPost: false,
            displayDesktopProfileSettings: false,
            displayMobileProfileSettings: false,
            displayUserProfile: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="home-page">
                    <div className="container">
                        <HomeNav showAddPost={this.openAddPost} showMobileProfileSettings={this.openMobileProfileSettings} />
                        <main>
                            <Posts />
                            <ProfileInfo showDesktopProfileSettings={this.openDesktopProfileSettings} showUserProfile={this.openUserProfile} />
                        </main>
                    </div>
                </div>
                <Footer />
                <AddPost display={this.state.displayAddPost} close={this.close} />
                <DesktopProfileSettings display={this.state.displayDesktopProfileSettings} close={this.close} />
                <MobileProfileSettings display={this.state.displayMobileProfileSettings} close={this.close} />
                <UserProfile display={this.state.displayUserProfile} close={this.close} />
            </React.Fragment>
        );
    }
}

export default HomePage;