App({
    globalData: {

    },    
    onLaunch() {
        wx.request({
            url: 'https://resources.ninghao.net/wxapp-case/db.json',
            success: (res) => {
                Object.assign(this.globalData, res.data)
            }
        })
    }
})