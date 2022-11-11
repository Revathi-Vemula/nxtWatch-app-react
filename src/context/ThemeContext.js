import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  changeTab: () => {},
  toggleTheme: () => {},
  savedVideos: [],
  addVideoToSaved: () => {},
})

export default ThemeContext
