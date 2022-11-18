import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  opacity: 1;
  width: 220px;
  height: 100%;
  position: fixed;
  margin-top: 68px;
  padding-top: 20px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  height: 45px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props => props.bgColor} !important;
`

export const NavText = styled.p`
  font-family: 'sans-serif';
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 20px;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.color};
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ContactText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
`
