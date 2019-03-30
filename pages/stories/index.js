const app = getApp()

Page({
    data: {
        entities: null
    },
    play(event){
      const currentVideo = wx.createVideoContext(`${event.target.dataset.vid}`)
      currentVideo.play()
    },
    onLoad: function(options) {
        //Do some initialize when page load.
        this.setData({
          entities: app.globalData.stories
        })
    },
    onReady: function() {
        //Do some when page ready.

    },
    onShow: function() {
        //Do some when page show.

    },
    onHide: function() {
        //Do some when page hide.

    },
    onUnload: function() {
        //Do some when page unload.

    },
    onPullDownRefresh: function() {
        //Do some when page pull down.

    }
})
