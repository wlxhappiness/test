"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
Page({
  data: {
    resultLists:[],
    activeItem: "prize",
    tablists:[{
      title:"奖品记录",
      name:"prize"
    }, {
        title: "积分记录",
        name: "points"
      }],
    prizeLists: [{
        time: "19.04.09 12.50.40",
        type: "5.88元红包",
        code: 0
      },
      {
        time: "19.04.09 12.50.40",
        type: "5.88元红包",
        code: 1
      },
      {
        time: "19.04.09 12.50.40",
        type: "20积分",
        code: 0
      },
      {
        time: "19.04.09 12.50.40",
        type: "\"优\"卡",
        code: 0
      }
    ],
    pointsLists: [{
        time: "19.04.09 12.50.40",
        type: "小程序互动",
        code: "-10"
      },
      {
        time: "19.04.09 12.50.40",
        type: "扫码抽奖",
        code: "-10"
      },
      {
        time: "19.04.09 12.50.40",
        type: "小程序互动",
        code: "+10"
      },
      {
        time: "19.04.09 12.50.40",
        type: "扫码抽奖",
        code: "-10"
      },
      {
        time: "19.04.09 12.50.40",
        type: "小程序互动",
        code: "-20"
      },
    ]
  },

  onLoad: function() {
    this.setData({
      resultLists:this.data.prizeLists
    })
  },
  handleInfo(e) {
    console.log("测试点击事件--", e.detail)
    if (e.detail.activeItem=="prize"){
      this.setData({
        activeItem: e.detail.activeItem,
        resultLists:this.data.prizeLists
      })
    }else{
      this.setData({
        activeItem: e.detail.activeItem,
        resultLists: this.data.pointsLists
      })
    }
  },
  upper() {
    console.log("trriger upper")
  },
  lower() {
    console.log("trriger lower")
  },
  handleGet(e) {
    console.log("测试领取事件---", e)
    let index = e.currentTarget.dataset.index;
    this.setData({
      [`resultLists[${index}].code`]: 1
    })
  }
});