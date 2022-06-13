const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const bg = document.getElementById("bg");

btn.addEventListener("click", () => {
  //classList方法返回函数的类名，toggle方法切换类名如果有此类名则删除没有则田间
  search.classList.toggle("active");
  //给背景元素模糊特效
  bg.classList.toggle("filter");

  //focus()在文档加载后，为文本域设置焦点
  input.focus();
});

//获取天气参数
var xmlhttp = new XMLHttpRequest();
xmlhttp.open(
  "GET",
  "https://restapi.amap.com/v3/weather/weatherInfo?city=420100&key=deaf4fbc86a62df35f9d57d198b4be2d",
  false
);
xmlhttp.send();
let state = xmlhttp.responseText;
var weath = JSON.parse(state).lives;
console.log(weath);
document.querySelector(".city").innerHTML = weath[0].city;
document.querySelector(".weath").innerHTML =
  weath[0].weather + weath[0].temperature;

//处理天气参数

// 时间

// 两位数处理
function dealTime(num) {
  return num > 10 ? num + "" : num + "0";
}
function getTime() {
  let now = new Date();
  let h = now.getHours(),
    m = now.getMonth(),
    s = now.getSeconds();
  h = dealTime(h);
  m = dealTime(m);
  s = dealTime(s);
  let text = h > 12 ? "pm" : "am";
  let result = h + ":" + m + ":" + s + text;
  let timeMoth =
    now.getMonth() + 1 + "月" + now.getDate() + "日" + "星期" + now.getDay();
  document.getElementById("getTime").innerHTML = result;
  document.getElementById("timeMoth").innerHTML = timeMoth;
  console.log(now.toLocaleDateString());
  setTimeout(getTime, 1000);
}

window.addEventListener("load", getTime);
