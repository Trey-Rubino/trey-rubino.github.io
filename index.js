var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var commands = [];

//mimic type for banner
setTimeout(function() {
  mimicType(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      switchCommands(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
  }
}

//switch statement for displaying commands 
function switchCommands(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      mimicType(help, "color2 margin", 80);
      break;
    case "whois":
      mimicType(whois, "color2 margin", 80);
      break;
    case "whoami":
      mimicType(whoami, "color2 margin", 80);
      break;
    case "social":
      mimicType(social, "color2 margin", 80);
      break;
    case "projects":
      mimicType(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      mimicType(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      mimicType(banner, "", 80);
      break;
    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

//function to open new tab for socials 
function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

//function for delayed text display
function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function mimicType(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
