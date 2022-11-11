import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import GamingVideoCard from '../GamingVideoCard'
import ThemeContext from '../../context/ThemeContext'
import TabTopContainer from '../TabTopContainer'
import {
  TrendingMainContainer,
  LoaderContainer,
} from '../Trending/styledComponents'

import {GamingVideosContainer} from './styledComponents'

const gamingApiConstants = {
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingApiStatus: gamingApiConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getFormattedGamingData = gamingVideoData => ({
    id: gamingVideoData.id,
    thumbnailUrl: gamingVideoData.thumbnail_url,
    title: gamingVideoData.title,
    viewCount: gamingVideoData.view_count,
  })

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: gamingApiConstants.inProgress})
    const gamingVideoApiUrl = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const gamingResponse = await fetch(gamingVideoApiUrl, options)
    if (gamingResponse.ok) {
      const gamingData = await gamingResponse.json()
      const formattedGamingData = gamingData.videos.map(eachVideo =>
        this.getFormattedGamingData(eachVideo),
      )
      this.setState({
        gamingApiStatus: gamingApiConstants.success,
        gamingVideos: formattedGamingData,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiConstants.failure})
    }
  }

  renderGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <GamingVideosContainer
              bgColor={isDarkTheme ? '#000000' : '#f9f9f9'}
            >
              {gamingVideos.map(eachVideo => (
                <GamingVideoCard
                  gamingVideoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </GamingVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" height="50" width="50" color="#3b82f6" />
    </LoaderContainer>
  )

  onRetry = () => this.getGamingVideos

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  appendGamingApiResults = () => {
    const {gamingApiStatus} = this.state

    switch (gamingApiStatus) {
      case gamingApiConstants.inProgress:
        return this.renderLoader()
      case gamingApiConstants.success:
        return this.renderGamingVideos()
      case gamingApiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <NavigationBar />
        <TrendingMainContainer>
          <TabTopContainer tabName="Gaming" />
          {this.appendGamingApiResults()}
        </TrendingMainContainer>
      </>
    )
  }
}

export default Gaming
