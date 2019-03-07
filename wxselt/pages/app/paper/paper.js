// pages/paper/paper.js

var ConstApi = require("../../../config/api.js")

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    papers:Array,
    current:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  pageLifetimes: {
    show() {
      wx:wx.request({
        url: ConstApi.AllBlogUrl,
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log(res)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    },
    hide() {
      // 页面被隐藏
    },
    resize(size) {
      // 页面尺寸变化
    },
    ready() {
      console.log(11111111111)
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
