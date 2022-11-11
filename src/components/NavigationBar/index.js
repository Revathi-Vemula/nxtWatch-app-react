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
        const color = isDarkTheme ? '#cccccc' : '#606060'

        const activeTabBg = isDarkTheme ? '#606060' : '#d7dfe9'

        const onClickHomeTab = () => {
          changeTab('Home')
        }
        const onClickTrendingTab = () => {
          changeTab('Trending')
        }
        const onClickGamingTab = () => {
          changeTab('Gaming')
        }
        const onClickSavedTab = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="Home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={20}
                      color={activeTab === 'Home' ? '#ff0b37' : '#606060'}
                    />
                    <NavText color={color}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="Trending"
                    onClick={onClickTrendingTab}
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                  >
                    <HiFire
                      size={20}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#606060'}
                    />
                    <NavText color={color}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="Gaming"
                    onClick={onClickGamingTab}
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                  >
                    <SiYoutubegaming
                      size={20}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#606060'}
                    />
                    <NavText color={color}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="Saved"
                    onClick={onClickSavedTab}
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                  >
                    <MdPlaylistAdd
                      size={20}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#606060'}
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
