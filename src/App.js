import {Switch, Route} from 'react-router-dom'

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

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
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

  changeTab = () => {}

  render() {
    const {isDarkTheme, isVideoSaved, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideoToSaved: this.addVideoToSaved,
          isVideoSaved,
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
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
