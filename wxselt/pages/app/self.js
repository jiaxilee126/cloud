// pages/app/self.js
var ConstApi = require("../../config/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'paperpage',
    papers: null,
    techs:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPapers('paperpage');
  },
  handleChange: function (e) {
    this.setData({ current: e.detail.key })
    this.getPapers(e.detail.key);
  },
  getPapers: function (wxurl) {
    let that = this;
    var reqUrl = '';
    if (wxurl == 'paperpage'){
      reqUrl = ConstApi.AllBlogUrl
    } else if (wxurl == 'tech'){
      reqUrl = ConstApi.TechAll
    }
    if(reqUrl == '' || reqUrl == null)
      return;
    wx:wx.request({
      url: reqUrl,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({paper:res.data.data})
        console.log(res)
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})