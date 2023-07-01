// 要素オブジェクトの取得
let getResult = document.getElementById("getResult");
let results = document.getElementById("result");


getResult.addEventListener("click", function(){
result.innerHTML = "結果は「" + omikuji.getResult() + "」でした。";
})

// おみくじオブジェクトの定義
let omikuji = {
 results: ["大吉","吉","中吉","小吉","末吉","凶",],
 getResult: function() {
  let results = this.results;
  return results[Math.floor(Math.random() * results.length)];   
 }
}
