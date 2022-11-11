import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  NavBar,
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  SocialMediaContainer,
  MediaImage,
  ContactText,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#212121' : '#ffffff'
        const color = isDarkTheme ? '#cbd5e1' : '#606060'
        const activeTabBg = isDarkTheme ? '#475569' : '#909090'

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="Home"
                    activeTabBgColor={
                      activeTab === 'Home' ? activeTabBg : 'none'
                    }
                  >
                    <AiFillHome
                      size={20}
                      color={activeTab === 'Home' ? '#ff0b37' : '#606060'}
                    />
                    <NavText color={color}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer key="Trending">
                    <HiFire
                      size={20}
                      color={isDarkTheme ? '#94a3b8' : '#606060'}
                    />
                    <NavText color={color}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer key="Gaming">
                    <SiYoutubegaming
                      size={20}
                      color={isDarkTheme ? '##94a3b8' : '#606060'}
                    />
                    <NavText color={color}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer key="Saved">
                    <MdPlaylistAdd
                      size={20}
                      color={isDarkTheme ? '#94a3b8' : '#606060'}
                    />
                    <NavText color={color}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={isDarkTheme ? '#ffffff' : '#00306e'}>
                  CONTACT US
                </ContactHeading>
                <SocialMediaContainer>
                  <MediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <MediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <MediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactText color={isDarkTheme ? '#ffffff' : '#00306e'}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactText>
              </ContactInfo>
            </NavigationLgContainer>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default NavigationBar
