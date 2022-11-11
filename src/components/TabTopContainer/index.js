import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingTopContainer,
  TrendingIconContainer,
  TrendingHeading,
} from './styledComponents'

const TabTopContainer = props => {
  const {tabName} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const tabIcon =
          tabName === 'Gaming' ? (
            <SiYoutubegaming size={30} color="#ff0b37" />
          ) : (
            <HiFire size={30} color="#ff0b37" />
          )

        return (
          <TrendingTopContainer bgColor={isDarkTheme ? '#181818' : '#f1f1f1'}>
            <TrendingIconContainer
              bgColor={isDarkTheme ? '#000000' : '#d7dfe9'}
            >
              {tabIcon}
            </TrendingIconContainer>
            <TrendingHeading color={isDarkTheme ? '#f1f5f9' : '#1e293b'}>
              {tabName}
            </TrendingHeading>
          </TrendingTopContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TabTopContainer
