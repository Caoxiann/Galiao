Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal : false,
    array : [{
      name:"毛主席",
      avatar:"../../image/adam.jpg",
    },
      {
        name: "周总理",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },
      {
        name: "彭将军",
        avatar: "../../image/adam.jpg",
      },],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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

  chooseOne: function(e){
    var i = e.currentTarget.id
    var data = this.data.array[i]
    console.log(data)
    wx.navigateTo({
      url: '/pages/message/message?name=' + data.name + '&avatar=' + data.avatar,
    })

  },

  addOne: function(){
    console.log("add one")
  }
})

  