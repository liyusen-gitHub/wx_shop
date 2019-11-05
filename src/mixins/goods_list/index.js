
import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        cat_id:'',
        query:'',
        pageNum:1,
        pageSize:20,
        goodslist:[],
        total:0,
        isloading:false,
        ismore:true
    }


    methods = {
        //点击商品列表进入详情
        gogoods_detail(id){
            wepy.navigateTo({
                url:"/pages/goods_detail/index?goods_id="+id
            })
        }
    }
    async getgoodslist() {
        this.isloading=true
        const {data}= await wepy.get('/goods/search',{
            query:this.query,
            cid:this.cat_id,
            pagenum:this.pageNum,
            pagesize:this.pageSize
        })
        this.isloading=false
        this.goodslist=[...this.goodslist,...data.message.goods]
        this.total=data.message.total
        this.$apply()
    }
    onLoad(options) {
        // console.log(options.query)
        this.query=options.query
        // console.log(this.query)
        this.getgoodslist()
    }
    //触底
    onReachBottom() {
        if(this.isloading==true) return
        if(this.pageNum*this.pageSize>=this.total) return this.ismore=false
        // console.log(123)
        this.pageNum++
        this.getgoodslist()
    }
}
