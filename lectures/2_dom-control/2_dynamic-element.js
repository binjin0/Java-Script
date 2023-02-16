let addBtn = document.getElementById("button"); //button 요소를 가져온다.
let addBeforeBtn = document.getElementById("before"); // before을 가져온다?
let inputBox = document.querySelector("input"); // input을 가져온다 ->ID나 클래스,태그이름 같은 한가지 요소가 아니라 input같이 다른 요소와의 관계를 사용해야 할 때는querySelector이 적합하다.
addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  let ul = document.querySelector("ul");
  li.textContent = inputBox.value;
  ul.appendChild(li);
});
//함수 이용
addBeforeBtn.addEventListener("click", function () {
  let li = document.createElement("li"); // li 태그 생성
  let ul = document.querySelector("ul"); // ul 태그 가져옴 ->어디 ul아래 넣을것인지 정하기 위해? ul도 가져옴
  let targetLi = document.querySelector("li#target"); //li 태그중 id가 target인것 선택하여 가져옴
  console.log(targetLi);
  li.textContent = inputBox.value; //input 박스 에 컨텐츠를 쓰면
  ul.insertBefore(li, targetLi); //targetLi전에 위치한 후 target들이 출력된다.
});
