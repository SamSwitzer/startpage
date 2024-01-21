# New Tab Startpage
Lightweight minimal startpage for Firefox and Chrome. Comes with a date, clock, links, and snow!
Made with html, css, and js. 

<img src="/example.gif"></img>

# Usage
### Download
[Latest Release]()

### Install
 - Firefox: I used the guide in this [thread](https://support.mozilla.org/en-US/questions/1251199#answer-1199709) to set up an autoconfig.cfg.
 - Chrome: Use a custom new tab extention.

### Customizing
  **Links:**
  
  Open `start.html` and modify the `links` section to have the desired titles and links.
  
   Example: 
  
        <a href="https://google.com/">Google</a> &emsp;


  **Snow:**
  
  Open `start.html` and comment/un-comment the `snow.js` script at the top.
  
   Off: 
  
        <!--<script type="text/javascript" src="js/snow.js"></script>-->
        
   On: 
  
        <script type="text/javascript" src="js/snow.js"></script>
