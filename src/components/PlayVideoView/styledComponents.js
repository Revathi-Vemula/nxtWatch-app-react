import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-left: 220px;
    padding: 20px;
  }
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  // font-family: 'Consolas';
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const InsightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ViewsAndDate = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 600;
`

export const Dot = styled.span`
  font-weight: 900;
`

export const SocialInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputButton = styled.button`
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border-style: none;
  margin-right: 20px;
`

export const InputText = styled.p`
  font-weight: 600;
  margin-left: 5px;
`
export const HorizontalLine = styled.hr`
  color: ${props => props.color};
  width: 100%;
  opacity: 0.5;
`
export const ChannelContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  font-weight: 600;
`

export const SubscriberCount = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 12px;
  color: ${props => props.color};
`

export const ChannelDesc = styled.p`
  font-size: 12px;
  color: ${props => props.color};
  line-height: 1.5;
`
