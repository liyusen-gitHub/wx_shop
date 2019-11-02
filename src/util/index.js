import wepy from 'wepy'

// console.log(123)
const baseurl='https://uinav.com/api/public/v1'
//封装弹出通知方法
wepy.baseToast=function(title="获取数据失败",icon="none"){
    wepy.showToast({
        title,
        icon
    })
}
//封装get请求方法
wepy.get=function(path,data={}){
    return wepy.request({
        url: baseurl+path,
        data
    })
}

//封装post请求方法
wepy.post=function(path,data={}){
    return wepy.request({
        url: baseurl+path,
        data,
        method:'post'
    })
}

