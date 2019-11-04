
import wepy from 'wepy'

export default class cates extends wepy.mixin {
    data = {
        cateslist: [],
        catechildrenList: []
    }

    config = {
    }

    methods = {
        onChange(even) {
            // console.log(even)
            this.catechildrenList=this.cateslist[even.detail].children
        }
    }
    
    async getcateslist() {
        // const { data } = await wepy.get('/categories')
        // if (data.meta.status !== 200) {
        //     return wepy.baseToast()
        // }
        // this.cateslist = data.message


        this.cateslist=[
            {
              "cat_id": 1,
              "cat_name": "大家电",
              "cat_pid": 0,
              "cat_level": 0,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                  "cat_id": 3,
                  "cat_name": "电视",
                  "cat_pid": 1,
                  "cat_level": 1,
                  "cat_deleted": false,
                  "cat_icon": "",
                  "children": [
                    {
                      "cat_id": 5,
                      "cat_name": "曲面电视",
                      "cat_pid": 3,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
                    },
                    {
                      "cat_id": 6,
                      "cat_name": "海信",
                      "cat_pid": 3,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/5e38cf9e6e7c46a17fe1c597a883ae627977b296.jpg"
                    },
                    {
                      "cat_id": 8,
                      "cat_name": "夏普",
                      "cat_pid": 3,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/cece39bd7e9654c20043e4af71696e1f838d4a22.jpg"
                    },
                    {
                      "cat_id": 9,
                      "cat_name": "创维",
                      "cat_pid": 3,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/f62eba98423af3311487f3331c6798d8f099c893.jpg"
                    }
                  ]
                },
                {
                  "cat_id": 7,
                  "cat_name": "空调",
                  "cat_pid": 1,
                  "cat_level": 1,
                  "cat_deleted": false,
                  "cat_icon": "",
                  "children": [
                    {
                      "cat_id": 23,
                      "cat_name": "变频空调",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/994977fac8f4fa6cea5eb413cd64ddac24a97600.jpg"
                    },
                    
                    {
                      "cat_id": 29,
                      "cat_name": "三菱重工",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/3ae5b4e47f663b3889edc694c95bf098b7893316.jpg"
                    },
                    {
                      "cat_id": 31,
                      "cat_name": "志高",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/4d5fd81e6e2e45a9a55d187c2326dea57ef90f9d.jpg"
                    },
                    {
                      "cat_id": 36,
                      "cat_name": "惠而浦",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/33774cdd0a4b866bc3f56c0fc55a0063d1f15892.jpg"
                    },
                    {
                      "cat_id": 37,
                      "cat_name": "空调清洗",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/f4836d9ba4831e4d81ab275cff4ab50677076a2b.jpg"
                    },
                    {
                      "cat_id": 38,
                      "cat_name": "空调维修",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/19ed844b023720a49792de3c1397e614c9bb260b.jpg"
                    },
                    {
                      "cat_id": 39,
                      "cat_name": "空调安装",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/f216557789c6d87ac6b31845e0a8c47186d6521a.jpg"
                    },
                    {
                      "cat_id": 40,
                      "cat_name": "空调回收",
                      "cat_pid": 7,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/da07de0ac2f01b18a9ec206fd44a51cf117cf987.jpg"
                    }
                  ]
                },
                {
                  "cat_id": 30,
                  "cat_name": "洗衣机",
                  "cat_pid": 1,
                  "cat_level": 1,
                  "cat_deleted": false,
                  "cat_icon": "",
                  "children": [
                    {
                      "cat_id": 42,
                      "cat_name": "洗衣机",
                      "cat_pid": 30,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/d33bc76faf761d86692f6b79dbd5bdb007a6c060.jpg"
                    },
                    {
                      "cat_id": 43,
                      "cat_name": "滚筒洗衣机",
                      "cat_pid": 30,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/4f083927b8062beb2e2a8e5fbcb956e07231e644.jpg"
                    },
                    {
                      "cat_id": 44,
                      "cat_name": "波轮洗衣机",
                      "cat_pid": 30,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/2333a004401004514d43fc56bf3a08de3d6dee44.jpg"
                    },
                    {
                      "cat_id": 45,
                      "cat_name": "大容量洗衣机",
                      "cat_pid": 30,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/e2459762678fe83b75b10dab705d9be2570d014c.jpg"
                    },
                    {
                      "cat_id": 52,
                      "cat_name": "小天鹅",
                      "cat_pid": 30,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/3732a28271acaadbdedefb7445efae3aac1c3c81.jpg"
                    }
                  ]
                }
              ]
            },
            {
              "cat_id": 55,
              "cat_name": "热门推荐",
              "cat_pid": 0,
              "cat_level": 0,
              "cat_deleted": false,
              "cat_icon": "",
              "children": [
                {
                  "cat_id": 69,
                  "cat_name": "圣诞狂欢",
                  "cat_pid": 55,
                  "cat_level": 1,
                  "cat_deleted": false,
                  "cat_icon": "",
                  "children": [
                    {
                      "cat_id": 72,
                      "cat_name": "护肤套装",
                      "cat_pid": 69,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/37e2413fad20445374180542fce4d06d0cb38545.jpg"
                    },
                    {
                      "cat_id": 73,
                      "cat_name": "面膜",
                      "cat_pid": 69,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/7ca57e495705e7b60ac5cfc3f5c4d71d12341d72.jpg"
                    },
                    {
                      "cat_id": 74,
                      "cat_name": "巧克力",
                      "cat_pid": 69,
                      "cat_level": 2,
                      "cat_deleted": false,
                      "cat_icon": "https://api.zbztb.cn/full/8d73f842d376174d88137fbe350bf59ac767477b.jpg"
                    }
                  ]
                }  
              ]
            }
          ]
        this.catechildrenList=this.cateslist[0].children
        this.$apply()
    }

    //页面加载
    onLoad() {
        // console.log(123)
        this.getcateslist()
        // this.onChange()
    }
}
