//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '环境监测系统',
    userInfo: {},
    userName: '',
    userPassword: '',
    id_token: '',
    responseData: '',
    boo: false,
    tixing: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(e.detail.value)
  },
  logIn: function () {
    var tixing = "";
    var that = this
    if (this.data.userName == "") {
      
      that.setData({
        tixing: "用户名不能为空"
      });
      return
    } else
      tixing = "";
    if (this.data.password == "") {
      that.setData({
        tixing: "密码不能为空"
      });
      return
    } else
      tixing = "";
    wx.request({
      url: 'http://localhost:8080/lianxi/ajax/bbb',
      data: {
      username: this.data.userName,
      password: this.data.userPassword,
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          responseData: res.data.user
        });
        wx.setStorage({
          key: "responseData",
          data: that.data.responseData
        });
        if (res.data.user!="erro")
      {
      
          app.globalData.name = res.data.user;
          wx.switchTab ({
          url: '../now/index',
        }) 
      }
        else{
          that.setData({
            tixing: "账号密码有误"
          });
        }
        
        
        try {
          wx.setStorageSync('id_token', res.data.id_token)
        } catch (e) {
          console.log('there is no id_token')
        }
        wx.navigateTo({
          url: '../now/index'
        })
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
    })
  },
  
  onShow: function () {
    console.log('index is show')
  },
  shuaxin: function () {
    wx.navigateTo({
      url: '../now/now'
    })
  },
  onReady: function () {
    console.log('indx is on ready')
  },
  onHide: function () {
    console.log('index is on hide')
  },
  onUnload: function () {
    console.log('indx is on unload')
  },
  boo: function () {
    this.setData({
      boo: !this.data.boo
    });
  },

onShareAppMessage: function () {
    return {
      title: '环境智能监测！',
      path: '/pages/denglu/index',
      success: function () { },
      fail: function () { }
    }
  },

})