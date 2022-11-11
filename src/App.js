import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [
      {
        channelName: 'iB Cricket',
        description: 'Destructive opening batsman',
        id: '30b642bd-7591-49f4-ac30-5c538f975b15',
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        publishedAt: 'Apr 19, 2019',
        subscriberCount: '4.13K',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
        title:
          'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
        videoUrl: 'https://www.youtube.com/watch?v=wB6IFCeTssk',
        viewCount: '1.4K',
      },
    ],
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideoToSaved = videoDetails => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (index === -1) {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
      })
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    console.log(savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideoToSaved: this.addVideoToSaved,
          activeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />s
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
