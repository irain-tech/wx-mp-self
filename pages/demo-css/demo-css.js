// pages/demo-css/demo-css.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bgColor": "blue",
    "loading": false,
    "appName":"demo",
    "version":"demo",
    "author":"demo",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    // var app = getApp();
    // app.globalData = "global data";
    // for (const key in app) {
    //   if (object.hasOwnProperty(key)) {
    //     const element = object[key];
    //     console.log("element " + element)
    //   }
    // }

    var that = this;
    wx.request({
      url: 'http://mydomain.com:7070/status',
      success: function(res) {
        console.log(res)// 服务器回包信息
        that.setData({
          appInfo: res.data
        });
        console.log(that.data)
      }
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

  },

  switchLoading: function (flag) {
    this.setData({
      loading: flag
    });
  },

  bindTapSubmit: function (e) {

    const that = this;
    console.log(e)
    this.switchLoading(true);
    setTimeout(function () {
      console.log("start Interval ")
      that.setData({
        loading: false
      });
      wx.showToast({
        title: '提交成功',
        icon: "success",
        duration: 1000
      })
    }, 1000)
  },

  bindTapShowMsg: function (e) {
    const that = this;
    console.log(e)
    wx.showModal({
      title: '标题',
      content: '告知当前状态，信息和解决方法',
      confirmText: '主操作',
      cancelText: '次要操作',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      }
    })
  },
})