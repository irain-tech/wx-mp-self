//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    time: (new Date()).toString(),
    timeFlag: false,
    a: 1,
    b: 2,
    c: 3,
    array: [{
      message: "helo"
    }, {
      message: "welcome"
    }, {
      message: "goodbye"
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('bindViewTap event')
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  //跳转至练习界面
  bindViewDemo: function () {
    console.log('bindViewDemo event')
    wx.navigateTo({
      url: '../demo/demo'
    })
  },

  onLoad: function () {

    console.log('onload event')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {

    console.log('getUserInfo event')
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})