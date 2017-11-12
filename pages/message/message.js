var app = getApp()

Page({
  data:{
    text:"这是消息页面，研发中。。。",
    title:"aaaa",
    userInfo: {
          nickName: "Chx",
    avatarUrl:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=23945a5e0924ab18f41be96554938da8/aec379310a55b3199a363d0d43a98226cefc17fe.jpg",
          gender: 1, 
          province: "Guangdong", 
          city: "Guangzhou" },
    message: [{ img: "/image/adam.jpg", text: "你好", me: false },
              { img: "/image/adam.jpg", text: "哈哈", me: true },
              { img: "/image/adam.jpg", text: "你好", me: false },
              { img: "/image/adam.jpg", text: "哈哈", me: true },
              { img: "/image/adam.jpg", text: "你好", me: false },
              { img: "/image/adam.jpg", text: "哈哈", me: true },
              { img: "/image/adam.jpg", text: "你好", me: false },
              { img: "/image/adam.jpg", text: "哈哈", me: true },
              { img: "/image/adam.jpg", text: "你好", me: false },
              { img: "/image/adam.jpg", text: "哈哈", me: true },
              { img: "/image/adam.jpg", text: "你好", me: false }],
    animation:{},
    animation_2:{},
    tap:"tapOff",
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _self = this
  },
  onReady:function(){
    // 页面渲染完成
    var _self = this
    wx.setNavigationBarTitle({
      title: _self.data.title
    })
    this.animation = wx.createAnimation();
    this.animation_2 = wx.createAnimation()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  inputConfirm: function(e){
    console.log("confirm")
    console.log(e.detail.value)
    var t = this.data.message;
    t.push({
      img: this.data.userInfo.avatarUrl,
      text:e.detail.value,
      me:true,
    })
    this.setData({
      message: t,
    })

  },

  tapVoice: function(){
    console.log("tap voice")
  },

  elseBtn:function(){
    // console.log(e);
    var _self = this;
    if(_self.data.tap=="tapOff"){
      _self.animation_2.height("55%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
           tap:"tapOn"
      })
    }else{
      _self.animation_2.height("90%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
           tap:"tapOff"
      })
    }
  },
  chooseImg:function(){
    var _self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var t = _self.data.message;
        t.push({
          img:_self.data.userInfo.avatarUrl,
          imgList:tempFilePaths,
          me:true
        })
        _self.setData({
          message:t
        })
      }
    })
  },
  // getaddress:function(){
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function(res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       wx.openLocation({
  //         latitude: latitude,
  //         longitude: longitude,
  //         scale: 28
  //       })
  //     }
  //   })
  // },
  getlocat:function(){
    var _self = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        _self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            name: '时代一号',
            desc: '现在的位置'
          }],
          covers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: '/images/green_tri.png',
            rotate: 10
          }]
        })
        var t = _self.data.message;
          t.push({
            img:_self.data.userInfo.avatarUrl,
            me:true,
            map:true
          })
          _self.setData({
            message:t
          })
    }})
      
  },
  getvoice:function(){
    console.log("开始录音")
    wx.startRecord({
      // success: function(res) {
      //   console.log("录音成功")
      //   var tempFilePath = res.tempFilePath 
      //   var t = _self.data.message;
      //   t.push({
      //     img:_self.data.userInfo.avatarUrl,
      //     text:"语音消息",
      //     me:true,
      //     voice:tempFilePath
      //   })
      //   _self.setData({
      //     message:t
      //   })
      //   wx.playVoice({
      //     filePath: tempFilePath,
      //     complete: function(){
      //       console.log(播放完毕)
      //     }
      //   })
      // },
      success: function(res) {
        console.log("录音成功")
        var tempFilePath = res.tempFilePath 
      },
      complete:function(res){
        console.log("complete"+res)
      },
      fail: function(res) {
        //录音失败
        console.log("fail"+res)
      }
    })
  },
  stopvoice:function(){
    wx.stopRecord()
    console.log("stop")
  }
})