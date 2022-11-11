import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 220px;
    margin-top: 68px;
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
