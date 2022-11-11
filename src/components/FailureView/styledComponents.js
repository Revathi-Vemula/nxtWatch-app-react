import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewImage = styled.img`
  height: 40vh;
  width: 30vw;

  @media screen and (min-width: 768px) {
    height: 20vh;
  }
`
export const FailureMessage = styled.h1`
  font-family: 'Consolas';
  font-size: 20px;
  color: ${props => props.color};
`

export const FailureDesc = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Consolas';
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  border-style: none;
`
