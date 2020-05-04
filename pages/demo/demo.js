//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    objectArray: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      },
    ],
    numberArray: [1, 2, 3, 4]
  },
  // 随机调的数据的位置
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  // 为数组后面增加一个选项
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{
      id: length,
      unique: 'unique_' + length
    }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  // 在数组前面增加选项
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },

   // 在数组前面增加选项
   navigate: function (e) {
    // this.navigate("/pages/demo-css/demo-css?from=demo");
    console.log('navigate event')
    // wx.switchTab({
    //   url: '/pages/demo-css/demo-css?from=demo'
    // })
    wx.navigateTo({
      url: '/pages/demo-css/demo-css?from=demo'
    })
  },

  onLoad: function (options) {
    console.log("onlolad event");
    console.log(options);
  },
  onReady: function () {
    console.log("onReady event");
  },
  onShow: function () {
    console.log("onShow event");
  },
  onHide: function () {
    console.log("onHide event");
  },
  onUnload: function () {
    console.log("onUnload event");
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh event");
  },
  onReachBottom: function () {
    console.log("onReachBottom event");
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage event");
    return {
      title: '小微助力运营',
      path: '/pages/index/index'
    }
  },
  onPageScroll: function () {
    console.log("onPageScroll event");
  }
})