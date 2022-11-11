import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 20px;
`

export const Heading = styled.h1`
  font-size: 25px;
  margin: 0;
  color: ${props => props.headingColor};
`

export const Caption = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 600;
`

export const NoVideosImage = styled.img`
  height: 120px;
  width: 180px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 280px;
  }
  flex-grow: 1;
`

export const Retry = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  border-style: none;
`
