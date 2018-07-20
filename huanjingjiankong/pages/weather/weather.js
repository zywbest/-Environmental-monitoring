
var bmap = require('/lib/bmap-wx.min.js');  
 Page({
  data: {
    ak:"6MCRdLa0hNZkGprnWc2R80R9pl6tnrCm",
            weatherData:'',
            futureWeather: []
  },
            onLoad:function(options) {
              var that = this;
              // 新建bmap对象   
              var BMap = new bmap.BMapWX({
                ak: that.data.ak
              });
              var fail = function (data) {
                console.log(data);
              };
              var success = function (data) {
                console.log(data);
                var weatherData = data.currentWeather[0];
                var futureWeather = data.originalData.results[0].weather_data;
                console.log(futureWeather);
               var weatherData1 =  weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风////力：' + weatherData.wind + '\n';        
                that.setData({ 
                  weatherData1: weatherData1,
                  weatherData: weatherData,
                  futureWeather: futureWeather
                });
              }

              // 发起weather请求   
              BMap.weather({
                fail: fail,
                success: success
              });
            }

})  