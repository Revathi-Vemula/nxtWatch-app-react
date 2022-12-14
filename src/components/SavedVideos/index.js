import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TabTopContainer from '../TabTopContainer'
import SavedVideoCard from '../SavedVideoCard'

import {
  NoSavedVideosView,
  NoSavedImage,
  NoSavedHeading,
  NoSavedMessage,
  SavedVideosMainContainer,
  SavedVideosContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value

      const isSavedListEmpty = savedVideos.length === 0

      return (
        <>
          {isSavedListEmpty ? (
            <>
              <Header />
              <NavigationBar />
              <NoSavedVideosView bgColor={isDarkTheme ? '#0f0f0f' : '#f1f1f1'}>
                <NoSavedImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading color={isDarkTheme ? '#d7dfe9' : '#1e293b'}>
                  No saved videos found
                </NoSavedHeading>
                <NoSavedMessage color={isDarkTheme ? '#64748b' : '#7e858e'}>
                  You can save your videos while watching them
                </NoSavedMessage>
              </NoSavedVideosView>
            </>
          ) : (
            <>
              <Header />
              <NavigationBar />
              <SavedVideosMainContainer
                bgColor={isDarkTheme ? '#0f0f0f' : '#f1f1f1'}
                data-testid="savedVideos"
              >
                <TabTopContainer tabName="Saved Videos" />
                <SavedVideosContainer>
                  {savedVideos.map(eachVideo => (
                    <SavedVideoCard
                      videoDetails={eachVideo}
                      key={eachVideo.id}
                    />
                  ))}
                </SavedVideosContainer>
              </SavedVideosMainContainer>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
