import {
  FailureViewContainer,
  FailureViewImage,
  FailureMessage,
  FailureDesc,
  RetryButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const descColor = isDarkTheme ? '#ebebeb' : '#7e858e'
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImageUrl} alt="failure view" />
            <FailureMessage color={headingColor}>
              Oops! Something Went Wrong
            </FailureMessage>
            <FailureDesc color={descColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDesc>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
