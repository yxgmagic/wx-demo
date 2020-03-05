const app = getApp()
Page({
  data: {
    // 导航头组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '标题', //导航栏 中间的标题
      white: true, // 是就显示白的，不是就显示黑的。
      address: '../../images/selnum.png', // 加个背景 不加就是没有
      bgkCss:''
    },
    // 导航头的高度
    height: app.globalData.height * 2 + 20,
    imgUrls: [
      'https://www.baidu.com/img/baidu_jgylogo3.gif',
      'https://www.baidu.com/img/pcpad_20b426f0af2c7ce8fb79ee4200a0e13e.png',
      'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=af18103e1cdfa9ecfd2e51115aeb903e/b03533fa828ba61ef518ba0d4c34970a304e5919.jpg'
    ],
    contenItems:['','','','','','','','','','','','']
  },
  onPageScroll: function(obj){
    if(obj.scrollTop <=50){
      this.setData({["nvabarData.bgkCss"]:""});
    }else{
      this.setData({["nvabarData.bgkCss"]:"bgc"});
    }
  }
})