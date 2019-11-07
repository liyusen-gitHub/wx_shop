
import wepy from 'wepy'

export default class cart extends wepy.mixin {
    data = {
        cart: []
    }

    config = {
    }

    methods = {
        countChange(even){
            // console.log(even)
            this.$parent.updateCount(even.target.dataset.id,even.detail)
        },
        isCheckchange(even){
            // console.log(even)
            this.$parent.updateIsCheck(even.target.dataset.id,!even.detail)
        },
        removeGoods(even){
            // console.log(even)
            this.$parent.deleteGoods(even.target.dataset.id)
        },
        checkall(){
            var status= this.cart.every(item=>{
                return item.isCheck
            })
            // console.log(status)
            this.$parent.updateAllIsCheck(!status)
        }
    }
    //计算属性
    computed = {
        //计算属性名
        isempty() {
            //判断购物车列表是否为空
            return this.cart.length == 0 ? true : false
        },
        totalPrice(){
            var total=0
            this.cart.forEach(item=>{
                if(item.isCheck)
                {
                    total+=item.price*item.count
                }
            })
            // console.log(total)
            return total*100
        },
        isfullCheck(){
            const flag=this.cart.every(item=>{
                return item.isCheck
            })
            return flag
        }
    }

    //页面加载
    onLoad() {

        this.cart = this.$parent.globalData.cartGoods
        // console.log(this.cart)
        
        


    }
}
