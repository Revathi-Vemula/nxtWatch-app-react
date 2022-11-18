import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
            <NotFoundImage src={notFoundImageUrl} alt="not found" />
            <NotFoundHeading color={isDarkTheme ? '#f1f5f9' : '#1e293b'}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundMessage color={isDarkTheme ? '#f1f1f1' : '#64748b'}>
              We are sorry, the page you requested could not be found.
            </NotFoundMessage>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
