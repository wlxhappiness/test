// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testload:"wlx测试load自定义上报",
    testshow:"wlx测试show自定义上报",
    testbutton:"领取成功",
    inputvalue: '',
    todolists: [{
        title: "apple",
        checked: true
      },
      {
        title: "banner",
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getMore() {
    console.log("get more---------------")
    let temp = [{
        title: "dede20"
      }, {
        title: "dede20"
      },
      {
        title: "dede20"
      },
      {
        title: "dede20"
      },
      {
        title: "dede20"
      },
      {
        title: "dede20"
      }
    ]
    this.setData({
      todolists: this.data.todolists.concat(temp),
      inputvalue: ''
    })

  },
  // 添加用户自定义的事件
  add: function(event) {
    let temp;
    console.log("添加的内容", this.data.inputvalue);
    if (this.data.inputvalue != '') {
      temp = this.data.todolists.concat([{
        title: this.data.inputvalue
      }]);
      this.setData({
        todolists: temp,
        inputvalue: ''
      })
    }

  },
  getInputValue: function(event) {
    console.log(" 获取输入框的内容", event);
    // this.data.inputvalue = event.detail.value;
    this.setData({
      inputvalue: event.detail.value
    })
  },
  // deleteItem: function (event) {
  //   console.log("需要删除的数据",event);
  //   this.data.todolists.splice(event.target.dataset.item,1);
  //   this.setData({
  //     todolists: this.data.todolists
  //   })
  // },
  // checkboxChange: function (e) {
  //   console.log(e)
  //   var todos = JSON.parse(JSON.stringify(this.data.todolists));
  //   var temp = e.detail.value;//选中项的索引数组
  //   todos.forEach(function(item,index){
  //     if(temp.includes(index.toString())){
  //       item.checked = true;
  //     }else{
  //      item.checked = false;
  //     }
  //   })
  //   this.setData({
  //     todolists:todos
  //   })
  // },
  handleCheckbox(e) {
    console.log("测试；lable", e);
    let temp = parseInt(e.currentTarget.dataset.index);
    if (!this.data.todolists[temp].checked) {
      this.setData({
        [`todolists[${temp}].checked`]: true
      })
    } else {
      this.setData({
        [`todolists[${temp}].checked`]: false
      })
    }

  }
})