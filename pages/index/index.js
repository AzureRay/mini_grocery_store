//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad: function () {

  },
  enter:function(e){
    wx.redirectTo({
      url: '/pages/articles/articles',
    })
    // wx.navigateTo({
    //   url: '/pages/articles/articles',
    // })
  }
})
