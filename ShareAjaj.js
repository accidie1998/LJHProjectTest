/**
 * @author ljh
 * @param method       网络请求方法 get/post
 * @param URL         请求数据的接口
 * @param URLparams   请求数据内容
 * @param callback    回调函数，将请求到的数据做为参数
 */
function requestMethon (method, URL, URLparams, callback) {
    //第一步:创建一个网络请求（http),去服务端要数据，接收服务端数据
    var xhr = new XMLHttpRequest();
    //第二步：与服务端建立连接（get/post）请求方式，连接哪个服务器，用连接这个服务器的那那个接口
    xhr.open(method,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+URL);
    //设置请求头，告诉服务器咱们传递过去的数据是以表单的形式传递过去的
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // 第三步：向服务器发送请求（传参）
    xhr.send(URLparams);
    // 第四步：接收服务器返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4 代表数据请求完成
        //xhr.status == 200 代表数据返回成功
        if(xhr.readyState==4 && xhr.status==200) {
            //responseText里面包含了服务端返回的数据
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;
            callback(obj,xhr.responseText);
        }
    }
}