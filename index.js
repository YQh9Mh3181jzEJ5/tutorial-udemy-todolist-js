
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

// const, let等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "たろう",
//   age: 20,
// };
// console.log(val4);

// val4.name = "じろう";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "たろう";
// const age = 20;
// const message1 = `私の名前は${name}です。年齢は${age}です`;
// const message2 = "私の名前は" + name + "です。年齢は" + age + "だよ";
// console.log(message1);
// console.log(message2);

// 従来の関数
// function func1(str) {
//   return str;
// }

// 関数式
// const func1 = function (str) {
//   return str;
// };

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });
// console.log(func3(10, 20));

// オブジェクトの分割代入
// const myProfile = {
//   name: "たろう",
//   age: 20,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 配列の分割代入
// const myProfile = ["たろう", 20];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// デフォルト値（引数、分割代入）
// const sayHello = (name = "名無し") => console.log(`こんにちは！${name}さん`);
// sayHello();

// const myProfile = {
//   age: 20,
// };

// const { age, name = "名無しさん" } = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略気泡
// const name = "たろう";
// const age = 20;

// const myProfile = { name, age };
// console.log(myProfile);

// スプレッド構文
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapを使った配列の処理
// const nameArr = ["田中", "山田", "たろう"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です！`);
// }

// const nameArr2 = nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${name}です！`)
// );

// filterを使った配列の処理
// const numArr = [1, 2, 3, 4, 5];
// const oddNum = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(oddNum);

// const newNameArr = nameArr.map((name) => {
//   if (name === "たろう") {
//     return console.log(name);
//   } else {
//     return console.log(`${name}さん`);
//   }
// });

// 三項演算子
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 616844065;
// console.log(num.toLocaleSwtring());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲";
// };

// console.log(checkSum(2, 60));

// 論理演算子の本当の意味を知ろう && ||
// truty, falsyについて
// const val = 0 ? "trutyです" : "falsyです";
// console.log(val);

// const num = undefined;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num = undefined;
// const fee = num && null;
// console.log(fee);
