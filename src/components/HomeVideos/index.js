import ThemeContext from '../../context/ThemeContext'

import HomeVideoCard from '../HomeVideoCard'
import {
  HomeVideosContainer,
  NoVideosView,
  Heading,
  Caption,
  Retry,
  NoVideosImage,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosSearched = homeVideos.length

  const onClickRetryLoading = () => {
    onRetry()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const captionColor = isDarkTheme ? '#e2e8f0' : '#64748b'

        return videosSearched === 0 ? (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading headingColor={headingColor}>
              No Search results found
            </Heading>
            <Caption color={captionColor}>
              Try different keywords or remove search filter
            </Caption>
            <Retry type="button" onClick={onClickRetryLoading}>
              Retry
            </Retry>
          </NoVideosView>
        ) : (
          <HomeVideosContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideos
