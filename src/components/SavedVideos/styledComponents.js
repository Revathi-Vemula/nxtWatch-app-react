import styled from 'styled-components'

export const NoSavedVideosView = styled.div`
  margin-top: 60px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    margin-left: 220px;
  }
`

export const NoSavedImage = styled.img`
  height: 280px;
  width: 280px;
`

export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
  font-size: 25px;
  margin-bottom: 0;
`

export const NoSavedMessage = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
`

export const SavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  display: flex;
  padding-left: 0;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 220px;
    margin-top: 68px;
  }
`
export const SavedVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding-top: 20px;
`
