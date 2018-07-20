var select ="all";
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    var that = this

    wx.request({
      url: 'http://localhost:8080/lianxi/ajax/ccc?select=' + select,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var s = res.data;
        that.setData({
          Industry: res.data,
          listData: res.data.shuju,
          key: res.data.key,
        })
      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {
        that.setData({
          isshow: false
          
        })
      }
    })
  },
butall:function()
{
  this.setData({
   ddd:'全部'
  })
},
butpass: function () {
  this.setData({
    ddd: '合格'
  })
},
butnopass: function () {
  this.setData({
    ddd: '不合格'
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
    return {
      title: '环境智能监测！',
      path: '/pages/denglu/index',
      success: function () { },
      fail: function () { }
    }
  },
}) 