import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAddCheck, MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailsContainer,
  VideoContainer,
  VideoTitle,
  InsightsContainer,
  ViewsAndDate,
  Dot,
  SocialInputsContainer,
  InputButton,
  InputText,
  HorizontalLine,
  ChannelContainer,
  ProfileImage,
  ChannelDetails,
  ChannelName,
  SubscriberCount,
  ChannelDesc,
} from './styledComponents'

const PlayVideoView = props => {
  const {
    videoDetails,
    isVideoLiked,
    isVideoDisliked,
    clickLiked,
    clickDisliked,
  } = props

  const {
    channelName,
    profileImageUrl,
    subscriberCount,
    description,
    id,
    publishedAt,
    viewCount,
    videoUrl,
    title,
  } = videoDetails

  const onChangeLikeStatus = () => {
    clickLiked()
  }

  const onChangeDislikeStatus = () => {
    clickDisliked()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addVideoToSaved} = value

        let isVideoSaved = ''
        const index = savedVideos.find(eachVideo => eachVideo.id === id)
        if (index === undefined) {
          isVideoSaved = false
        } else {
          isVideoSaved = true
        }

        const likeIconColor = isVideoLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isVideoDisliked ? '#2563eb' : '#64748b'

        const saveIconColor = isVideoSaved ? '#2563eb' : '#64748b'

        const onClickSaveVideo = () => {
          addVideoToSaved(videoDetails)
        }

        return (
          <VideoDetailsContainer
            bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
            data-testid="videoItemDetails"
          >
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoContainer>
              <VideoTitle color={isDarkTheme ? '#f9f9f9' : '#313131'}>
                {title}
              </VideoTitle>
              <InsightsContainer>
                <ViewsAndDate color={isDarkTheme ? '#94a3b8' : '#7e858e'}>
                  {viewCount} Views<Dot> &#8226; </Dot>
                  {formatDistanceToNow(new Date(publishedAt))}
                </ViewsAndDate>
                <SocialInputsContainer>
                  <InputButton
                    type="button"
                    color={likeIconColor}
                    onClick={onChangeLikeStatus}
                  >
                    <BiLike size={25} />
                    <InputText>Like</InputText>
                  </InputButton>
                  <InputButton
                    color={dislikeIconColor}
                    onClick={onChangeDislikeStatus}
                  >
                    <BiDislike size={25} />
                    <InputText>Dislike</InputText>
                  </InputButton>
                  <InputButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSaveVideo}
                  >
                    {isVideoSaved ? (
                      <MdPlaylistAddCheck size={25} />
                    ) : (
                      <MdPlaylistAdd size={25} />
                    )}
                    <InputText>{isVideoSaved ? 'Saved' : 'Save'}</InputText>
                  </InputButton>
                </SocialInputsContainer>
              </InsightsContainer>
              <HorizontalLine color={isDarkTheme ? '#f9f9f9' : '#909090'} />
              <ChannelContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ChannelDetails>
                  <ChannelName>{channelName}</ChannelName>
                  <SubscriberCount color={isDarkTheme ? '#94a3b8' : '#7e858e'}>
                    {subscriberCount} subscribers
                  </SubscriberCount>
                </ChannelDetails>
              </ChannelContainer>
              <ChannelDesc color={isDarkTheme ? '#94a3b8' : '#7e858e'}>
                {description}
              </ChannelDesc>
            </VideoContainer>
          </VideoDetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default PlayVideoView
