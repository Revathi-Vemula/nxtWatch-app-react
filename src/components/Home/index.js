import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeContext from '../../context/ThemeContext'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerSection,
  BannerFirstPart,
  BannerSecondPart,
  LogoImage,
  BannerDesc,
  BannerButton,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}
class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homeVideos: [],
    bannerDisplay: 'flex',
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  formattedVideoData = videoData => ({
    id: videoData.id,
    publishedAt: videoData.published_at,
    thumbnailUrl: videoData.thumbnail_url,
    title: videoData.title,
    viewCount: videoData.view_count,
    channelName: videoData.channel.name,
    channelProfileImageUrl: videoData.channel.profile_image_url,
  })

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const videosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videosApiUrl, options)

    if (response.ok) {
      const videosData = await response.json()

      const updatedVideosData = videosData.videos.map(eachVideo =>
        this.formattedVideoData(eachVideo),
      )

      this.setState({
        homeVideos: updatedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getSearchVideoResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  closeBanner = () => {
    this.setState(prevState => ({bannerDisplay: !prevState.bannerDisplay}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeVideos = () => {
    const {homeVideos} = this.state

    return <HomeVideos homeVideos={homeVideos} />
  }

  renderHomeFailureView = () => <FailureView onRetry={this.onRetry} />

  renderApiStatusResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state
    const display = bannerDisplay === 'flex' ? 'flex' : 'none'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer bgColor={bgColor}>
                <BannerSection display={display}>
                  <BannerFirstPart>
                    <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                    <BannerDesc>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerDesc>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerFirstPart>
                  <BannerSecondPart>
                    <CloseButton type="button" onClick={this.closeBanner}>
                      <GrFormClose size={25} />
                    </CloseButton>
                  </BannerSecondPart>
                </BannerSection>
                <SearchContainer
                  borderColor={isDarkTheme ? '#cccccc' : '#909090'}
                >
                  <SearchInput
                    type="text"
                    placeholder="Search"
                    bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
                    color={isDarkTheme ? '#cccccc' : '#424242'}
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchIconContainer
                    bgColor={isDarkTheme ? '#606060' : '#f1f1f1'}
                    borderColor={isDarkTheme ? '#cccccc' : '#909090'}
                    type="button"
                    onClick={this.getSearchVideoResults}
                  >
                    <AiOutlineSearch
                      size={15}
                      color={isDarkTheme ? '#cccccc' : '#909090'}
                    />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderApiStatusResults()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
