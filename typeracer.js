var text = document.querySelectorAll(".gameView div span");
var inputPanel = document.querySelector(".inputPanel .txtInput");
var complete = 0;
var split = text[text.length-1].innerHTML.split(" ");
split.splice(0, 1)

console.log(split)

inputPanel.addEventListener("click", function () {
if(complete === 3) {
split.forEach(function (e) {
inputPanel.value += e + " ";

})
} else{
	complete += 1;
}
});
