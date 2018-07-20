const app = getApp()
Page({
  data: {
    markers: [{
      latitude: 35.3296411161,
      longitude: 113.9351749420,
      iconPath: '../../static/images/ic1.png',
      callout: {
        content: 'A异常',
        display: 'ALWAYS',
        color: 'red'
      }
    }, {
      latitude: 35.3096411161,
      longitude: 113.9371749420,
      iconPath: '../../static/images/ic2.png',
      callout: {
        content: 'B正常',
        display:'ALWAYS',
        color:'blue'
      }
    },
    {
  
      latitude: 35.3296411161,
      longitude: 113.9861749420,
      iconPath: '../../static/images/ic1.png',
      callout: {
        content: 'C异常',
        display: 'ALWAYS',
        color: 'red'
      }
    },]
  },
  onLoad: function (res) {
    var that = this
  },
  huiyuan:function() {
  this.setData({
    asd: "qqq"
  }),
    wx.navigateTo({
    url: '../index/index'
  })
},
})