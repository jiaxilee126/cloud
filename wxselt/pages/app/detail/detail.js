// pages/app/detail/detail.js
var ConstApi = require("../../../config/api.js")
var WxParse = require("../../../wxParse/wxParse.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paperdetail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let paperid = options.id;
    wx:wx.request({
      url: ConstApi.BlogById+"/"+paperid,
      success: function(res) {
        console.log(res)
        that.setData({ paperdetail : res.data.data})
        WxParse.wxParse('article', 'html', res.data.data.content, that, 5);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})