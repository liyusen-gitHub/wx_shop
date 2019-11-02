
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

    async getfloorData(num) {
        const { data } = await wepy.get("/home/floordata")
        // console.log(data)
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        // console.log(data)
        if(num==="上拉")
        {
            
            this.floorData= this.floorData.concat(data.message)
            //  console.log(this.floorData)
            //  console.log(data.message)
        }
        else{
            this.floorData = data.message
        }
        


        this.$apply()
        // console.log(this.floorData)
    }

    //页面加载
    onLoad() {
        //获取轮播图数据
        this.getSwiperData()
        this.getCatesData()
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
