import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ['that', 'our', 'your', 'their']
  let adjs = ['uptopian', 'dangerous', 'wacky', 'odd'];
  let nouns = ['dumpster', 'spoon', 'violin', 'megaphone'];
  const domains = document.querySelector("ul");
  const webs = ['.com', '.net', '.org', '.io'];
 
  for(let i = 0; i < pronouns.length; i++) {
    for(let j = 0; j < adjs.length; j++) {
      for(let k = 0; k < nouns.length; k++) {
        let randomWeb = webs[Math.floor(Math.random() * webs.length)];
        console.log(pronouns[i] + adjs[j] + nouns[k] + randomWeb);
        let li = document.createElement("li");
        li.textContent = pronouns[i] + adjs[j] + nouns[k] + randomWeb;
        domains.appendChild(li);
      }
    }
  }
};
