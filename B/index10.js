// 點擊發布，會把文本域中的內容發佈到ul中
// 點擊刪除，會刪除留言
// 1.獲取事件源 文本域 按鈕 文本域
var text = document.getElementById('content');
var date = document.getElementById('date');
var time = document.getElementById('time');
var btn = document.getElementById('addedBtn');
var ul = document.querySelector('ul');



// 2.註冊點擊事件
btn.onclick = function () {
    // 首先會創建一個li  並把文本域的內容給li 再把li添加到ul中
    var li = document.createElement('li');
    if (text.value == '') {
        alert('您沒有輸入內容')
    } else {
        // 文本域的值 value
        // 增加一個刪除留言的按鈕
        li.innerHTML = '內容：'+　text.value +'<br>'+ 
                       '日期：'+　date.value +'<br>'+  
                       '時間：'+　time.value +'<br>'+
                       '<a href="javascript:;">刪除</a>'
        ul.insertBefore(li, ul.children[0]); // 把最新的發佈放到最前面
        // ul.appendChild(li);

        // 3.註冊刪除點擊事件
        var removeBtn = document.querySelectorAll('a');
        for (var i = 0; i < removeBtn.length; i++) {
            removeBtn[i].onclick = function () {
                ul.removeChild(this.parentNode);
            }
        }
    }
}
