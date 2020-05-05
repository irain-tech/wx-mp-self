// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sessionKey: '',
    openId: '',
    unionId: ''
  },

  bindGetUserInfo: function (e) {
    console.log('login event');
    console.log(e);
    let that = this;
    // 解密用户信息串
    wx.request({
      url: 'http://localhost:7070/decryptData',
      method: "POST",
      data: {
        sessionKey: this.data.sessionKey,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      },
      success: response => {
        // 解析 openId 、 session_key
        console.log("result of openId info");
        console.log(response);
        that.setData({
          unionId: response.data.unionId
        })
      }
    })
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.login({
      complete: (res) => {
        if (res.code) {
          console.log(res);
          wx.request({
            url: 'http://localhost:7070/getOpenInfo?js_code=' + res.code,
            success: response => {
              // 解析 openId 、 session_key
              console.log("result of openId info");
              console.log(response);
              that.setData({
                openId: response.data.openid,
                sessionKey: response.data.session_key,

              })
              // 解析 加密字符串，以获取 union_id/ open_id

            }
          })
        } else {
          console.log('登陆失败')
        }

      },
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