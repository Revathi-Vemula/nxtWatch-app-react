import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  changeTab: () => {},
  toggleTheme: () => {},
  savedVideos: [],
  isVideoSaved: false,
  addVideoToSaved: () => {},
})

export default ThemeContext
