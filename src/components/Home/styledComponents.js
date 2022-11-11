import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
  margin-right: 0;
  @media screen and (min-width: 768px) {
    margin-left: 220px;
  }
`

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 200px;
  display: ${props => props.display};
  flex-direction: row;
  justify-content: space-between;
  background-size: cover;
  padding: 20px;
`

export const BannerFirstPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const BannerSecondPart = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const LogoImage = styled.img`
  height: 28px;
  width: 150px;
`

export const BannerDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: solid 2px #000000;
  padding: 10px;
  width: 120px;
  color: #000000;
  font-size: 13px;
  font-weight: 700;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  align-self: flex-end;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 20px;
  width: 90%;
  border: solid 1px ${props => props.borderColor};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 5px;
  width: 100%;
  outline: none;
  border-style: none;
  border-width: 0;
  font-size: 12px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const SearchIconContainer = styled.button`
  background-color: ${props => props.bgColor};
  padding: 5px;
  border: solid 1px #000000;
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-left: solid 1px ${props => props.borderColor};
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
