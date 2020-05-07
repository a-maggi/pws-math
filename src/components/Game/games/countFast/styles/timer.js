import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  max-width: 540px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  
  .start.active {
    display: none;
  }
`
