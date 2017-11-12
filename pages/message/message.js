var app = getApp()

Page({
  data:{
    text:"这是消息页面，研发中。。。",
    title:"aaaa",
    userInfo: {
          nickName: "Chx",
    avatarUrl:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=23945a5e0924ab18f41be96554938da8/aec379310a55b3199a363d0d43a98226cefc17fe.jpg",
    },
    message: [],
    animation:{},
    animation_2:{},
    tap:"tapOff",
    me:true,
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)
    this.setData({
      friendInfo:{
        name: options.name,
        avatar: options.avatar,
      }
    })

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
    var me = this.data.me
    var img = me ? this.data.userInfo.avatarUrl : this.data.friendInfo.avatar
    var t = this.data.message;
    t.push({
      img: img,
      text:e.detail.value,
      me: me,
    })
    this.setData({
      message: t,
    })

  },

  tapVoice: function(){
    console.log("tap voice")
  },

  tapEmotion: function(){
    console.log("tap emotion")
    var title = this.data.me ? '已切换为对方':'已切换为我方'
    wx.showToast({
      title: title,
      duration: 1000,
      mask: true,
    })
    this.setData({
      me: !this.data.me
    })

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
})