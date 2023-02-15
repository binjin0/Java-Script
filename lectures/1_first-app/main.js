console.log("Hello!!!");
console.log("Hello000", "world!!!", "javascript");

alert("Hello Javascript!");
let str = "hello jacascript";
let number = 30;
console.log("문자열 : ", str);
console.log("number=", number);

function sayhello() {
  console.log("hello1");
  console.log("hello2");
  console.log("hello3");
}
sayhello();
console.log("------------");
sayhello();
let obj = {
  number: 30, //객체가 갖고 있는 변수 : 프로퍼티(속성)
  sayhello: function () {
    console.log("hello1");
    console.log("hello2");
    console.log("hello3");
  },
};
console.log(obj);
console.log(obj.number); //30이 출력됨
console.log(obj.sayhello); //console.log("hello1")~가 다 출력됨
obj.sayhello(); //hello1~3만 출력된
