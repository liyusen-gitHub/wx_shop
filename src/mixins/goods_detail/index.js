
import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        goods_id:0,
        goodsList:[],
        dressList:null,
        dress:''
    }

    config = {
    }

    methods = {
        previewImg(current){
            // console.log(current)
            const urls=this.goodsList.pics.map(item=>{
                return item.pics_big_url
            })
            // console.log(urls)
            wepy.previewImage({
                urls,
                current
            })
        },
        async chossedress(){
            const data=await wepy.chooseAddress().catch(err=>err)
            console.log(data)

            if(data.errMsg=="chooseAddress:ok")
            {
                this.dressList=data
                this.dress=this.dressList.provinceName+this.dressList.cityName+this.dressList.countyName
                wepy.setStorageSync('dressinfo',this.dressList)
                wepy.baseToast('已选择收货地址')
            }
            else{
                wepy.baseToast('取消选择收货地址')
            }
        },
        //点击加入购物车按钮
        onClickButton(){
            // console.log(this.goodsList)
            //调用全局保存购物车商品方法
            // console.log(this.$parent)
            this.$parent.getcartGoodslist(this.goodsList)
            wepy.baseToast('添加成功')
        }

    }
    async getgoods_detail(){
        const {data}= await wepy.get("/goods/detail",{
            goods_id:this.goods_id
        })
        // console.log(data)
        if(data.meta.status!==200)
        {
            return wepy.baseToast()
        }
        this.goodsList=data.message
        this.$apply()
    }
    onLoad(options){
        this.goods_id=options.goods_id
        // console.log(options)
        this.getgoods_detail()
        this.dressList= wepy.getStorageSync('dressinfo')
        if(this.dressList!=null)
        {
            this.dress=this.dressList.provinceName+this.dressList.cityName+this.dressList.countyName
        }
    }
}