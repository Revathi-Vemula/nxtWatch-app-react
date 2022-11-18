import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginFormContainer,
  FormContainer,
  AppThemeLogo,
  InputContainer,
  InputLabel,
  InputType,
  LoginButton,
  ErrorMessage,
  CheckBoxContainer,
  CheckBox,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMsg: errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColorLoginContainer = isDarkTheme ? '#383838' : '#ffffff'
          const color = isDarkTheme ? '#ffffff' : '#000000'

          return (
            <LoginFormContainer bgColor={bgColorLoginContainer}>
              <FormContainer theme={isDarkTheme} onSubmit={this.submitForm}>
                <AppThemeLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <InputLabel htmlFor="username" color={color}>
                    USERNAME
                  </InputLabel>
                  <InputType
                    color={color}
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="password" color={color}>
                    PASSWORD
                  </InputLabel>
                  <InputType
                    color={color}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                </InputContainer>
                <CheckBoxContainer>
                  <CheckBox
                    type="checkbox"
                    id="showPassword"
                    onClick={this.togglePassword}
                  />
                  <InputLabel htmlFor="showPassword" color={color}>
                    Show Password
                  </InputLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
