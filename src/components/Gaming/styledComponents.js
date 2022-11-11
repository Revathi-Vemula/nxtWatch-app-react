import styled from 'styled-components'

export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
