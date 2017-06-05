//Take the contents of the sonnet div and place it in the variable

var sonnet = document.getElementById("sonnet")
var sonnetText = sonnet.innerHTML
console.log(sonnetText)
//Find and output the starting position of the word "orphans"
var orphanIndex = sonnetText.indexOf("orphans")
console.log(orphanIndex)
