import ThemeContext from '../../context/ThemeContext'
import {
  GamingVideoCardLink,
  GamingVideoCardContainer,
  GamingThumbnailImg,
  GamingTitle,
  ViewCount,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GamingVideoCardLink
            to={`/videos/${id}`}
            color={isDarkTheme ? '#ffffff' : '#000000'}
          >
            <GamingVideoCardContainer>
              <GamingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle>{title}</GamingTitle>
              <ViewCount color={isDarkTheme ? '#d7dfe9' : '#606060'}>
                {viewCount} Watching Worldwide
              </ViewCount>
            </GamingVideoCardContainer>
          </GamingVideoCardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
