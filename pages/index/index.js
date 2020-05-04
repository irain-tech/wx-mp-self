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
      url: '../demo/demo?key=value'
    })
  },
  //跳转至练习界面
  bindViewDemoCss: function () {
    console.log('bindViewDemoCss event')
    wx.navigateTo({
      url: '../demo-css/demo-css'
    })
  },

  printSysInfo: function () {
    console.log("=====System info ======");
    console.log(wx.getSystemInfoSync());
    wx.showModal({
      title: '当前系统信息',
      content: JSON.stringify(wx.getSystemInfoSync())
    })
  },

  checkBlueTooth: function () {
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  wxApiVersionCheck: function () {
    console.log(wx.canIUse('openBluetoothAdapter'));
    console.log(wx.canIUse('openBluetoothAdapter'));
    console.log(wx.canIUse('openBluetoothAdapter'));

    // // 判断接口及其参数在宿主环境是否可用
    // wx.canIUse('openBluetoothAdapter')
    // wx.canIUse('getSystemInfoSync.return.screenWidth')
    // wx.canIUse('getSystemInfo.success.screenWidth')
    // wx.canIUse('showToast.object.image')
    // wx.canIUse('onCompassChange.callback.direction')
    // wx.canIUse('request.object.method.GET')

    // // 判断组件及其属性在宿主环境是否可用
    // wx.canIUse('contact-button')
    // wx.canIUse('text.selectable')
    // wx.canIUse('button.open-type.contact')
  },

  onLoad: function (options) {
    console.log(options);
    console.log('onload event')
    // 打印系统信息
    // this.printSysInfo();
    // 检查蓝牙功能是否支持
    this.wxApiVersionCheck();

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