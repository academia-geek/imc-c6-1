import React from 'react'
import styled, { keyframes } from 'styled-components'
import PortaLoading from './../../containrs/PortaLoading'
const LoadDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
  background-color: #000;
  opacity: 0.5;
`

const rotate = keyframes`
    from{
        transform : rotate(0deg)
    }
    to{
        transform : rotate(360deg)
    }
`

const Preloader = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #666;
  border-radius: 50%;
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
`

const Loading = ({ visible }) => {
  return (
    <PortaLoading>
      {visible ? (
        <LoadDiv>
          <Preloader />
        </LoadDiv>
      ) : null}
    </PortaLoading>
  )
}

export default Loading
