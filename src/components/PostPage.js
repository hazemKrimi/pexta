import React from 'react';
import PostNav from './PostNav';
import Post from './Post';
import ProfileInfo from './ProfileInfo';
import Footer from './Footer';
import DesktopProfileSettings from './DesktopProfileSettings';
import MobileProfileSettings from './MobileProfileSettings';
import UserProfile from './UserProfile';
import '../scss/PostPage.scss';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDesktopProfileSettings: false,
            displayMobileProfileSettings: false,
            displayUserProfile: false
        }
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
            displayDesktopProfileSettings: false,
            displayMobileProfileSettings: false,
            displayUserProfile: false
        });
    }

    render() {
        return(
            <React.Fragment>
                <div id="post-page">
                    <div className="container">
                        <PostNav showMobileProfileSettings={this.openMobileProfileSettings} />
                        <main>
                            <Post showUserProfile={this.openUserProfile} />
                            <ProfileInfo showDesktopProfileSettings={this.openDesktopProfileSettings} showUserProfile={this.openUserProfile} />
                        </main>
                    </div>
                </div>
                <Footer />
                <DesktopProfileSettings display={this.state.displayDesktopProfileSettings} close={this.close} />
                <MobileProfileSettings display={this.state.displayMobileProfileSettings} close={this.close} />
                <UserProfile display={this.state.displayUserProfile} close={this.close} />
            </React.Fragment>
        );
    }
}

export default PostPage;