import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingMainContainer,
  TrendingTopContainer,
  TrendingIconContainer,
  TrendingHeading,
  LoaderContainer,
  VideosContainer,
} from './styledComponents'

const trendingApiConstants = {
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingApiStatus: trendingApiConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getFormattedData = videoData => ({
    channelName: videoData.channel.name,
    channelProfileImageUrl: videoData.channel.profile_image_url,
    id: videoData.id,
    publishedAt: videoData.published_at,
    thumbnailUrl: videoData.thumbnail_url,
    title: videoData.title,
    viewCount: videoData.view_count,
  })

  getTrendingVideos = async () => {
    // const {trendingApiStatus} = this.state
    this.setState({trendingApiStatus: trendingApiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const trendingResponse = await fetch(trendingVideosApiUrl, options)
    if (trendingResponse.ok) {
      const trendingVideosData = await trendingResponse.json()

      const formattedTrendingData = trendingVideosData.videos.map(eachVideo =>
        this.getFormattedData(eachVideo),
      )
      this.setState({
        trendingVideos: formattedTrendingData,
        trendingApiStatus: trendingApiConstants.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.setState(
      {trendingApiStatus: trendingApiConstants.initial},
      this.getTrendingVideos,
    )
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideosContainer bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}>
              {trendingVideos.map(eachVideo => (
                <TrendingVideoCard
                  trendingVideoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </VideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  appendTrendingVideos = () => {
    const {trendingApiStatus} = this.state

    switch (trendingApiStatus) {
      case trendingApiConstants.inProgress:
        return this.renderLoader()
      case trendingApiConstants.success:
        return this.renderTrendingVideos()
      case trendingApiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {trendingApiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <NavigationBar />
              <TrendingMainContainer>
                <TrendingTopContainer
                  bgColor={isDarkTheme ? '#181818' : '#f1f1f1'}
                >
                  <TrendingIconContainer
                    bgColor={isDarkTheme ? '#000000' : '#d7dfe9'}
                  >
                    <HiFire size={30} color="#ff0b37" />
                  </TrendingIconContainer>
                  <TrendingHeading color={isDarkTheme ? '#f1f5f9' : '#1e293b'}>
                    Trending
                  </TrendingHeading>
                </TrendingTopContainer>
                {this.appendTrendingVideos()}
              </TrendingMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
