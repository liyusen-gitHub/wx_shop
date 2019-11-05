
import wepy from 'wepy'

export default class search extends wepy.mixin {
    data = {
        searchtext: '',
        suggestList: [],
        searchhistory: []
    }

    config = {
    }

    methods = {
        async onchange(even) {
            this.searchtext = even.detail
            if (this.searchtext.trim().length == 0) return this.suggestList = []
            const { data } = await wepy.get("/goods/qsearch", {
                query: this.searchtext
            })
            if (data.meta.status !== 200) {
                return wepy.baseToast()
            }
            this.suggestList = data.message
            this.$apply()
        },
        onSearch() {
            if (this.searchtext.trim().length == 0) return
            // console.log(this.searchtext)
            // console.log(this.searchhistory)
            if (this.searchhistory.length == 0) {
                this.searchhistory = []
            }
            this.searchhistory.unshift(this.searchtext)


            this.searchhistory = this.searchhistory.splice(0, 10)

            wepy.setStorageSync("searchhistory", this.searchhistory)
            wepy.navigateTo({
                url: "/pages/goods_list/index?query=" + this.searchtext
            })
        },
        gotogooslist(query,index) {
            console.log(query)
            wepy.navigateTo({
                url: "/pages/goods_list/index?query=" + query
            })
            this.searchhistory.splice(index,1)
            this.searchhistory.unshift(query)
        },
        delhistory() {

            wepy.setStorageSync("searchhistory", [])
            this.searchhistory = []
            this.$apply()
        }
    }

    // url="/pages/goods_list/index?query={{item}}"
    //页面加载
    onLoad() {
        //从本地加载搜索历史记录
        this.searchhistory = wepy.getStorageSync("searchhistory")
    }
}
