import styled from 'styled-components'

export default styled.div`
&.number-card {
  margin: 0;
  padding: 16px 8px;
  flex-grow: 1;
  width: 33.3333333%;
  text-align: center;
  box-sizing: border-box;
  position: relative;

  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  
  &.completed {
    background-color: #3fe842;
  }
  
  &.error-card {
    animation-name: error-animation;
    animation-duration: 0.75s;
  }

  &.ok-card {
    animation-name: ok-animation;
    animation-duration: 0.75s;
  }
  
  &.started:hover {
    //-webkit-background-clip: text;
    //   width: 302px;
    //   height: 302px;
    //   transition: all 0.25s ease;
    border: 3px solid #3f8ce8;
    cursor: pointer;
  }
}

.number {
  margin-top: auto;
  margin-bottom: auto;
  //   display: block;
  font-weight: 800;
  font-size: 3rem;
}

.card-text {
  background-image: -webkit-gradient(
                  linear,
                  left top,
                  right top,
                  color-stop(0.03, rgba(111, 66, 193, 1)),
                  color-stop(0.52, rgba(34, 193, 195, 1)),
                  color-stop(0.76, rgba(111, 66, 193, 1))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes error-animation {
  from {
    background-color: white;
  }
  to {
    background-color: #f70d0d;
  }
}

@keyframes ok-animation {
  from {
    background-color: white;
  }
  to {
    background-color: #3fe842;
  }
}
`
