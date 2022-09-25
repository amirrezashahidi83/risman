
const HoldEvent = (element_id,callback) => {
  
  var mouseTimer;

  const onMouseUp = () => {
    if(mouseTimer)
    	window.clearTimeout(callback);
    //change background
  }

  const onMouseDown = () => {
    onMouseUp();
    mouseTimer = window.setTimeout(callback,2000);
  }

  var element = document.getElementById(element_id);
  element.addEventListener("mousedown",onMouseDown);
  document.body.addEventListener("mouseup",onMouseUp);
}

export default HoldEvent;

