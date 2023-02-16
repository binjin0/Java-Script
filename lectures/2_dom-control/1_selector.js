//<요소 선택하기>
//1. get 메서드 활용하여 요소 선택하기
document.getElementById("title");
console.log(title);
title.textContent = "헬스 3대 운동";

let items = document.getElementsByClassName("item");
console.log(items);
console.log("스쿼트:", items[0]);
console.log("벤치프레스:", items[1]);
console.log("데드리프트:", items[2]);

let liList = document.getElementsByTagName("li");
console.log(liList);

//2. HTML 요소 쿼리 활용하여 요소 선택하기
let h2 = document.querySelector("#title");
console.log("h2 : ", h2);

let item = document.querySelector(".item");
console.log("item:", item);
/*querySelector은 무조건 요소를 하나만 갖고옴.
조건에 충족하는 요소가 여러개이면 제일 첫번째거 가져옴
모두 다 가지고 오고 싶다면 querySelectorAll을 사용할 것*/

let itemAll = document.querySelectorAll(".item");
console.log("itemAll:", itemAll[0]);
console.log("itemAll:", itemAll[1]);
console.log("itemAll:", itemAll[2]);

//<HTML 요소 조작하기>
//1.콘텐츠 수정하기
//h2.textContent = "<span>운동!!!</span>";
//textContent는 HTLM태그를모두 제거하고 순수한 텍스트 데이터만 제공하기 때문에 따옴표 안에 태그들을 넣어도 모두 텍스트로 인식한다.
//h2.innerHTML = "<span>운동@@@</span>";
//innerHTML은 HTML 태그를 그대로 제공하기 때문에 운동@@@만 텍스트로 받아들인다.

//2.HTML 요소 조작하기
let input = document.querySelector("input");
input.setAttribute("placeholder", "헬스를 입력해주세요.");
input.setAttribute("required", "");
input.removeAttribute("placeholder");
/*javascript로 html요소를 가져와서 html요소가 갖고있는 속성이나 메소드를 활용해서 조작한다.
 */

//3.HTML 요소 스타일링
let helloItem = document.querySelector(".hello");
console.log("helloItem : ", helloItem);
//-요소 프로퍼티 직접 수정
// helloItem.style.color = "blue";
// helloItem.style.backgroundColor = "yellow";

//- css클래스 이용 (*실무에서 사용하는 방법*)
helloItem.classList.add("dark"); //helloItem이라는 요소에다가 dark라는 클래스 요소를 넣겠다.
helloItem.classList.add("one");
//helloItem.calssList.add("dark","one"); 이런식으로 한번에 추가도 가능~!
helloItem.classList.remove("dark"); //이렇게 추가했던 클래스를 지울수도 있음
