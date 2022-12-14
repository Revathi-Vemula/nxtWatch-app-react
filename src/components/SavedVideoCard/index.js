import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingVideoCardLink,
  TrendingVideoCardContainer,
  ThumbnailImage,
  VideoDescContainer,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
  ChannelProfileImage,
  TitleContainer,
} from '../TrendingVideoCard/styledComponents'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    channelName,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelProfileImageUrl,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <TrendingVideoCardLink to={`/videos/${id}`}>
            <TrendingVideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescContainer>
                <ChannelProfileImage
                  src={channelProfileImageUrl}
                  alt={channelName}
                />
                <TitleContainer>
                  <VideoTitle color={isDarkTheme ? '#ffffff' : '#000000'}>
                    {title}
                  </VideoTitle>
                  <ChannelName color={isDarkTheme ? '#d7dfe9' : '#909090'}>
                    {channelName}
                  </ChannelName>
                  <ViewsAndDate color={isDarkTheme ? '#d7dfe9' : '#909090'}>
                    <Dot>&#8226;</Dot>
                    {viewCount} views <Dot> &#8226; </Dot>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </ViewsAndDate>
                </TitleContainer>
              </VideoDescContainer>
            </TrendingVideoCardContainer>
          </TrendingVideoCardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
