
const useHoldEvent = (element_id) => {
  
  var mouseTimer;

  const HoldHanlder = (callback) => {
    callback();
  }

  const HoldLeaveHandler = (callback) => {
    callback();
  }

  const onMouseUp = () => {
    if(mouseTimer)
    	window.clearTimeout(callback);
    HoldLeaveHanlder();
  }

  const onMouseDown = () => {
    onMouseUp();
    mouseTimer = window.setTimeout(HoldHanlder,2000);
  }

  var element = document.getElementById(element_id);
  element.addEventListener("mousedown",onMouseDown);
  document.body.addEventListener("mouseup",onMouseUp);

  return{
    HoldHanlder,
    HoldLeaveHanlder
  }
}

export default useHoldEvent;

