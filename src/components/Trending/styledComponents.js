import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 220px;
    margin-top: 68px;
  }
`

export const TrendingTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  padding: 12px;
  width: 100%;
  background-color: ${props => props.bgColor};
  opacity: 0.978;
  @media screen and (min-width: 768px) {
    height: 100px;
  }
`

export const TrendingIconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  margin-right: 15px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const TrendingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 40vw;
`
export const VideosContainer = styled.ul`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
