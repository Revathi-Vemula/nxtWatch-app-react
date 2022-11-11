import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'

import {
  NavBarHeader,
  LogoLink,
  AppLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  MenuIcon,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutButtonMedium,
  NavCloseButton,
  NavPopup,
  HambergerButton,
  NavigationSmContainer,
  NavLink,
  NavLinkContainer,
  NavText,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const color = isDarkTheme ? '#ffffff' : '#000000'
      const bgColor = isDarkTheme ? '#212121' : '#ffffff'

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/')
      }

      return (
        <NavBarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <AppLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="app logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton type="button" onClick={onClickChangeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh color={color} size={25} />
              ) : (
                <BsMoon color={color} size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MenuIcon>
              <Popup
                modal
                trigger={
                  <HambergerButton type="button" className="trigger-button">
                    <GiHamburgerMenu color={color} size={25} />
                  </HambergerButton>
                }
              >
                {close => (
                  <NavPopup bgColor={isDarkTheme ? '#424242' : '#ffffff'}>
                    <NavCloseButton onClick={() => close()} type="button">
                      <GrFormClose size={20} color="#ffffff" />
                    </NavCloseButton>
                    <NavigationSmContainer bgColor={bgColor}>
                      <NavLink to="/">
                        <NavLinkContainer>
                          <AiFillHome
                            size={20}
                            color={isDarkTheme ? '##94a3b8' : '#606060'}
                          />
                          <NavText color={color}>Home</NavText>
                        </NavLinkContainer>
                      </NavLink>
                      <NavLink to="/trending">
                        <NavLinkContainer>
                          <HiFire
                            size={20}
                            color={isDarkTheme ? '##94a3b8' : '#606060'}
                          />
                          <NavText color={color}>Trending</NavText>
                        </NavLinkContainer>
                      </NavLink>
                      <NavLink to="/gaming">
                        <NavLinkContainer>
                          <SiYoutubegaming
                            size={20}
                            color={isDarkTheme ? '##94a3b8' : '#606060'}
                          />
                          <NavText color={color}>Gaming</NavText>
                        </NavLinkContainer>
                      </NavLink>
                      <NavLink to="/saved-videos">
                        <NavLinkContainer>
                          <MdPlaylistAdd
                            size={20}
                            color={isDarkTheme ? '#94a3b8' : '#606060'}
                          />
                          <NavText color={color}>Saved Videos</NavText>
                        </NavLinkContainer>
                      </NavLink>
                    </NavigationSmContainer>
                  </NavPopup>
                )}
              </Popup>
            </MenuIcon>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" color={color} bgColor={bgColor}>
                  <FiLogOut size={25} />
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDesc>Are you sure, you want to Logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton onClick={() => close()} type="button">
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButtonMedium
                  type="button"
                  color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                >
                  Logout
                </LogoutButtonMedium>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDesc>Are you sure, you want to Logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton onClick={() => close()} type="button">
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavBarHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
