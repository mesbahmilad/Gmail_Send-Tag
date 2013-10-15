/* init function and set defaults */
function init()
{
  if (!localStorage.gml_icon)
    localStorage.gml_icon = "dark";

  if (!localStorage.label)
    localStorage.label = "Follow";

  /* change icon */
  chrome.browserAction.setIcon({path: "img/icon_"+localStorage.gml_icon+".png"});
}

/* run */
init();