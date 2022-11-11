import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.bgColor};
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const AppLogo = styled.img`
  height: 25px;
  width: 100px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    height: 35px;
    width: 150px;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;
  align-self: flex-end;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
  margin-right: 8px;
  margin-top: 5px;
`

export const ProfileImage = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`

export const MenuIcon = styled.div`
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border-style: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cbd5e1; //${props => props.bgColor};
  height: 20vh;
  width: 70vw;
  padding: 10px;

  @media screen and (min-width: 768px) {
    height: 25vh;
    width: 30vw;
    border-radius: 15px;
  }
`

export const ModalDesc = styled.p`
  color: black;
  font-family: 'Consolas';
  font-size: 15px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CloseButton = styled.button`
  background-color: inherit;
  border-radius: 10px;
  border-color: #000000;
  padding: 10px;
  font-size: 15px;
  width: 100px;
  margin: 5px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 10px;
  border-style: none;
  padding: 10px;
  width: 100px;
  font-size: 15px;
  margin: 5px;
  color: #ffffff;
`
export const LogoutButtonMedium = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border-color: ${props => props.color};
  padding: 8px;
  font-size: 12px;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavCloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  align-self: flex-end;
`
export const NavPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.bgColor};
  opacity: 0.8;
`
export const HambergerButton = styled.button`
  border-style: none;
  background-color: transparent;
`
export const NavOptions = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  margin: 8px;
`

export const NavText = styled.p`
  font-family: 'sans-serif';
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 20px;
`
export const NavigationSmContainer = styled.ul`
  list-style-type: none;
  padding: 10px;
`
