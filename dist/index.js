"use strict";

var counter = document.getElementById("counter");
var incButton = document.getElementById("incrementBtn");
var count = 0;
counter.textContent = count.toString();
incButton.onclick = function () {
  count++;
  counter.textContent = count.toString();
};