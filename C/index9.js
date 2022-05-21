
function delA(){
  // 點擊當下的 父層+父層，如下:點擊當下的 a 父層+父層就是 <div class="item">
  // <div class="item">
  //   <div>
  //     <p>內容：${item.content}</p>
  //     <p>時間：${item.date} ${item.time}</p>
  //     <p>時間：${item.time}</p>
  //     <a href="javascript:;">刪除</a>
  //   </div>
  // </div>
  // 獲取 <div class="item">
  var divv = this.parentNode.parentNode;

  // 獲取 <div class="item"> 中 p 標籤的第一個([0])的內容，就是 <p>內容：${item.content}</p>
  // <div class="item">
  //   <div>
  //     <p>內容：${item.content}</p>
  //     <p>時間：${item.date} ${item.time}</p>
  //     <p>時間：${item.time}</p>
  //     <a href="javascript:;">刪除</a>
  //   </div>
  // </div>

  // var name = divv.getElementsByTagName("p")[0].innerHTML;
  var name = divv.removeChild[0].innerHTML;

  // 刪除前可提示  confirm 可直接彈出 確認+取消 按鈕的提示框
  var flag = confirm("確認刪除"+ name +"嗎?");

  // 如果點擊確認
  if(flag){
    // 再刪除
  divv.parentNode.removeChild(divv);
  }

};
window.onload = function(){
// 綁定所有的標籤 a ，更改成點擊時要做 function 內的動作，而 a 本身是超連結(會跳轉)效果，可以 return false 取消默認的跳轉
// 但在 html 上 改成 <a href="javascript:;">刪除</a> ， javascript:; 就不用寫 return false
var allA = document.getElementsByTagName('a');
for(var i = 0 ; i < allA.length ; i++){
  allA[i].onclick = delA;
}


// 添加功能，點擊後將填寫內容加到下方
// 添加按鈕 點擊後
var addedBtn = document.getElementById('addedBtn')
  addedBtn.onclick = function(){
    // 獲取填寫的內容，這裡有 內容 日期 時間
    var content = document.getElementById('content').value
    var date = document.getElementById('date').value
    var time = document.getElementById('time').value

    // 將獲取到的內容保存到 <div></div> 中
    // <div class="item">
    //   <div>
    //     <p>內容：${item.content}</p>
    //     <p>時間：${item.date} ${item.time}</p>
    //     <p>時間：${item.time}</p>
    //     <a href="javascript:;">刪除</a>
    //   </div>
    // </div>
    
    // 創建一個 div
    var divtr = document.createElement("div");

    divtr.innerHTML = '內容：'+　content +'<br>'+ 
                      '日期：'+　date +'<br>'+  
                      '時間：'+　time +'<br>'+
                      '<a href="javascript:;">刪除</a>'

    // 將
    //   <div>
    //     <p>內容：${item.content}</p>
    //     <p>時間：${item.date} ${item.time}</p>
    //     <p>時間：${item.time}</p>
    //     <a href="javascript:;">刪除</a>
    //   </div>
    // 加到 <div class="item"></div>
    // 先獲取 <div class="item"></div>
    var item = document.getElementById(item);
    
    // 將 div 放到 item
    item.appendChild(divtr);
   

  }



}














// const listContent = []
// // function 
// function render() {
//   // 渲染頁面的list
//   let htmlStr = ''

//   listContent.forEach(function (item) {
//     htmlStr = htmlStr + `
//     <div class="item">
//       <div>
//         <p>內容：${item.content}</p>
//         <p>時間：${item.date} ${item.time}</p>
//         <p>時間：${item.time}</p>
//         <a href="javascript:;">刪除</a>
//       </div>
//     </div>
//     `
//   })
//   list.innerHTML = htmlStr

//   var a = list.getElementsByTagName('a')[0];
//   a.onlick = delA;
  
//   // + '<a href="javascript:;">刪除</a>'
// }


// // 之後可擴充用
// // const r1 = new RenderFeature()


// // 點擊新增時的監聽 把輸入的三個值抓起來
// addedBtn.addEventListener('click', function () {
//   // unshift 新增到陣列 從左邊新增
//   listContent.unshift({
//     content: content.value,
//     date: date.value,
//     time: time.value,
//   })
//   render()
//   // r1.render()

// })

// // 刪除最後一個
// deletedBtn.addEventListener('click', function () {
//   listContent.shift()
//   render()
//   // r1.render()
// })







