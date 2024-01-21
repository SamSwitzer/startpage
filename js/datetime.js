`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replaceAll("-", " / ").replaceAll(",", " \xa0 ").replaceAll(".", "");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);