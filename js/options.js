/* function to load settings */
function loadSettings()
{
  /* load icon option */
  var parseIcon = {
    dark: 0,
    light: 1
  };
  document.querySelectorAll('input[name="icon"]')[parseIcon[localStorage.gml_icon]].checked = true;

  document.querySelectorAll('input[name="label"]')[0].value = localStorage.label;

  console.log(localStorage.label)
}


/* save settings function */
function saveSettings()
{
  /* grab the selected values */
  var selected_icon = document.querySelectorAll('input[name="icon"]:checked')[0].value;


  /* grab the selected values */
  var label = document.querySelectorAll('input[name="label"]')[0].value;

  /* store with localStorage */
  localStorage.gml_icon = selected_icon;
  localStorage.label = label;
  console.log(localStorage.label)

  /* alert the user */
  document.querySelectorAll('#alert')[0].innerHTML = "Saved! This window will auto-close in 2 seconds.";

  /* change icon */
  chrome.browserAction.setIcon({path: "img/icon_"+localStorage.gml_icon+".png"});

  /* reload extension */
  chrome.extension.getBackgroundPage().window.location.reload();

  /* close the window */
  setTimeout(function(){
    window.close()
  },2000);
}

/* event handler */
document.addEventListener('DOMContentLoaded', loadSettings);
document.querySelector('#save').addEventListener('click', saveSettings);