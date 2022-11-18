import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardLink,
  VideoCardItem,
  VideoCoverImage,
  ChannelVideoDescContainer,
  ChannelImg,
  VideoInsightsContainer,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    title,
    channelName,
    channelProfileImageUrl,
    id,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <VideoCardLink
            color={isDarkTheme ? '#ffffff' : '#000000'}
            to={`videos/${id}`}
          >
            <VideoCardItem>
              <VideoCoverImage src={thumbnailUrl} alt="video thumbnail" />
              <ChannelVideoDescContainer>
                <ChannelImg src={channelProfileImageUrl} alt="channel logo" />
                <VideoInsightsContainer>
                  <VideoTitle color={textColor}>{title}</VideoTitle>
                  <ChannelName color={textColor}>{channelName}</ChannelName>

                  <ViewsAndDate>
                    <Dot> &#8226; </Dot>
                    {viewCount} views <Dot> &#8226; </Dot>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </ViewsAndDate>
                </VideoInsightsContainer>
              </ChannelVideoDescContainer>
            </VideoCardItem>
          </VideoCardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoCard
