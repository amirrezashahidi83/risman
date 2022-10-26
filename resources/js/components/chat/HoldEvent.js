
const useHoldEvent = (element_id) => {
  
  var mouseTimer;
  var element;

  const onHoldHandler = (callback) => {
    element = document.getElementById(element_id);
    element.addEventListener("mousedown",onMouseDown);
    document.body.addEventListener("mouseup",onMouseUp);

    callback();
  }

  const onHoldLeaveHandler = (callback) => {
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


  return[
    onHoldHandler,
    onHoldLeaveHandler
  ]
}

export default useHoldEvent;

