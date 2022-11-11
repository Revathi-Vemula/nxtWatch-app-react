import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  margin-top: 60px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 90vh;
  @media screen and (min-width: 768px) {
    margin-left: 220px;
    margin-top: 68px;
  }
`

export const NotFoundImage = styled.img`
  height: 220px;
  width: 250px;
`

export const NotFoundHeading = styled.h1`
  font-size: 22px;
  color: ${props => props.color};
  margin-bottom: 0px;
  font-family: 'Consolas';
`

export const NotFoundMessage = styled.p`
  font-size: 14px;
  color: ${props => props.color};
  font-family: 'Consolas';
  text-align: center;
`
