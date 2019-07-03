// common/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeItem:String,
    lists: {
      type: Array,
      observer: function (newval, oldval) {
      }
    }
  },
  pageLifetimes: {
    show: function () {
      console.log("现实父组件传过来的消息",this.data.lists)
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTab(e) {
      console.log("测试点击事件--", e.target.dataset.title)
      this.triggerEvent('handleTab', {activeItem:e.target.dataset.title})
        // this.setData({
        //   activeItem: e.target.dataset.title
        // })
    },
  }
})
