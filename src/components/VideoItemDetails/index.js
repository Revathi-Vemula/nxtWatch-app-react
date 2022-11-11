import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {LoaderContainer} from '../Home/styledComponents'
import PlayVideoView from '../PlayVideoView'
import FailureView from '../FailureView'

const specificVideoApiStatusConstants = {
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    isVideoLiked: false,
    isVideoDisliked: false,
    videoDetails: {},
    videoApiStatus: specificVideoApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSpecificVideoDetails()
  }

  getSpecificVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({videoApiStatus: specificVideoApiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const videoApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const videosResponse = await fetch(videoApiUrl, options)

    if (videosResponse.ok) {
      const videoData = await videosResponse.json()
      const videoDetails = videoData.video_details
      const formattedVideoData = {
        channelName: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        viewCount: videoDetails.view_count,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
      }

      this.setState({
        videoDetails: formattedVideoData,
        videoApiStatus: specificVideoApiStatusConstants.success,
      })
    } else {
      this.setState({videoApiStatus: specificVideoApiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState(
      {videoApiStatus: specificVideoApiStatusConstants.initial},
      this.getSpecificVideoDetails,
    )
  }

  renderLoader = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  clickLiked = () => {
    this.setState(prevState => ({
      isVideoLiked: !prevState.isVideoLiked,
      isVideoDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isVideoDisliked: !prevState.isVideoDisliked,
      isVideoLiked: false,
    }))
  }

  renderVideoDetails = () => {
    const {videoDetails, isVideoLiked, isVideoDisliked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
        isVideoDisliked={isVideoDisliked}
        isVideoLiked={isVideoLiked}
      />
    )
  }

  renderApiResults = () => {
    const {videoApiStatus} = this.state

    switch (videoApiStatus) {
      case specificVideoApiStatusConstants.inProgress:
        return this.renderLoader()
      case specificVideoApiStatusConstants.failure:
        return this.renderFailureView()
      case specificVideoApiStatusConstants.success:
        return this.renderVideoDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <NavigationBar />
        {this.renderApiResults()}
      </>
    )
  }
}

export default VideoItemDetails
