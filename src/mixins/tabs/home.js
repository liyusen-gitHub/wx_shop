
import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        //轮播图数据
        swiperData: [],
        //分类数据
        catesData: [],
        //楼层数据
        floorData: []
    }

    config = {
    }

    methods = {
        //楼层图片的跳转页面方法 url为要跳转的地址
        gotoGoodslist(url){
            // console.log(url)
            //小程序中要用wx.navigateTo跳转，这里使用了wepy框架，直接使用wepy调用
            //跳转方法里面要传一个对象
            wepy.navigateTo({
                url
            })
        }
    }

    //获取轮播图数据
    async getSwiperData() {
        // const { data } = await wepy.request({
        //     url: 'https://uinav.com/api/public/v1/home/swiperdata'
        // })
        const { data } = await wepy.get("/home/swiperdata")
        // console.log(data)
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        wepy.baseToast("获取数据成功", "success")
        this.swiperData = data.message
        this.$apply()
    }

    //获取分类数据
    async getCatesData() {
        // const { data } = await wepy.request({
        //     url: 'https://uinav.com/api/public/v1/home/catitems'
        // })
        const { data } = await wepy.get("/home/catitems")

        // console.log(data)
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.catesData = data.message
        this.$apply()
    }
    //获取楼层数据
    async getfloorData(num) {
        //异步方法获取楼层数据，解析
        const { data } = await wepy.get("/home/floordata")
        // console.log(data)
        //判断返回值的状态码是否为200，不是200说明失败
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        // console.log(data)如果小程序是上拉加载直接在原来的楼层数据追加新的数据
        if(num==="上拉")
        {
            //在原来的楼层数据追加新的数据
            this.floorData= this.floorData.concat(data.message)
            //  console.log(this.floorData)
            //  console.log(data.message)
        }
        else{
            //获取楼层数据
            this.floorData = data.message
        }
        

        //wepy必须调用apply方法来更新数据
        this.$apply()
        // console.log(this.floorData)
    }

    //页面加载
    onLoad() {
        //获取轮播图数据
        this.getSwiperData()
        //获取分类数据
        this.getCatesData()
        //获取楼层数据
        this.getfloorData()
    }
    /**
 * 页面上拉触底事件的处理函数
 */
    onReachBottom() {
        // console.log(123)
        this.getfloorData("上拉")
    }
}
