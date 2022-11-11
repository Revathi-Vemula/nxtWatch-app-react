import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius:15px;
  background-color: ${props => (props.theme ? '#000000' : '#ffffff')}
  width: 80%;
  padding:20px;
  height:60vh;
  
  @media screen and (min-width: 768px) {
    width: 60vw;
    padding:30px;
  }
`

export const AppThemeLogo = styled.img`
  height: 30px;
  width: 120px;
  margin: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`

export const InputType = styled.input`
  padding: 5px;
  outline: none;
  color: ${props => props.color};
  border-style: solid;
  border-color: ${props => (props.theme ? '#475569' : '#606060')};
  border-width: 1px;
  width: 80vw;
  height: 35px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`
export const CheckBox = styled.input`
  height: 30px;
`

export const InputLabel = styled.label`
  color: ${props => props.color};
  font-weight: 800;
  font-family: 'Consolas';
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 3px;
`

export const LoginButton = styled.button`
  width: 80vw;
  padding: 10px;
  color: #ffffff;
  background-color: #3b82f6;
  border-style: none;
  border-radius: 10px;
  font-size: 15px;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  font-family: 'Roboto';
  font-family: 'Consolas';
  font-weight: 600;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`
