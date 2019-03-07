// 以下是业务服务器API地址
// 本机开发时使用
//var WxApiRoot = 'http://ax3hc8.natappfree.cc/wx/';
// 局域网测试使用
 //var WxApiRoot = 'http://192.168.4.209:8080/wx/';
// 云平台部署时使用
// var WxApiRoot = 'http://122.152.206.172:8080/wx/';
// 云平台上线时使用
 var WxApiRoot = 'https://www.lijiaxi.com.cn/wx/';

module.exports = {
  
  //home页内容
  AllBlogUrl: WxApiRoot + 'blog/all', //获取所有博文接口
  BlogById: WxApiRoot + 'blog', //根据id获取博文内容

  //tech页面
  TechAll: WxApiRoot + 'tech/all', //获取所有的技能接口

  //my页面
  GressUrl: WxApiRoot + 'progress/all',//获取所有的历程
  GramUrl: WxApiRoot + 'project/all',
  GramById: WxApiRoot + 'project'

};