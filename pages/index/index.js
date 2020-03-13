//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [{
        id: 0,
        type: 'image',
        url: 'cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/swiper/武康路.jpeg'
      },
      {
        id: 1,
        type: 'image',
        url: 'cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/swiper/外滩.jpeg'
      },
      {
        id: 2,
        type: 'image',
        url: 'cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/swiper/杨浦区.jpeg'
      }
    ],
    dotStyle: false,
    towerStart: 0,
    direction: '',
    TabCur: 0,
    scrollLeft: 0,
    listOfSelectedRoutes:[
      { "_id": "1", 
      "description": "武康路位于上海市徐汇区，原名福开森路（Route Ferguson），以美国传教士约翰•福开森命名，由上海法租界公董局修筑于1907年（光绪三十三年）。武康路居住过多位历史名人，被称作“浓缩上海近代百年历史”的名人街，入选了第三届“中国历史文化名街”。沿路有西班牙式、法国文艺复兴式等多种特色的优秀历史建筑，是上海中心城区最具欧陆风情的街道之一。漫步武康路，漫步于繁茂婆娑的法国梧桐下，漫步于优美别致的别墅公寓间，漫步于沧桑变幻的百年历史中。推荐线路自东向西参观。", 
      "name": "法式浪漫之武康路", 
      "specificRoute": [{ "地点1": ["经度1", "纬度1"] }, { "地点2": ["经度2", "维度2"] }], 
      "images": ["cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000001.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000002.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000003.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000012.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000129.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000136.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/1/ia_200000140.jpg"] },
      { "_id": "2", 
      "specificRoute": [{ "地点1": ["经度1", "纬度1"] }, { "地点2": ["经度2", "纬度2"] }, { "地点3": ["经度3", "纬度3"] }], 
      "images": ["cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/2/ia_100000101.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/2/ia_100000102.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/2/ia_100000103.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/2/ia_100000104.png"], 
      "description": "此条路线涵盖杨浦区著名高校：同济大学、复旦大学、沪江大学。", 
      "name": "杨浦区百年高校徒步之旅" },
      { "_id": "3", 
      "name": "百年外滩之金融建筑集萃", 
      "specificRoute": [{ "地点1": ["经度1", "纬度1"] }, { "地点2": ["经度2", "纬度2"] }], 
      "images": ["cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000002.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000003.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000004.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000017.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000018.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000147.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000148.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000149.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000150.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000153.jpg", "cloud://citywalk-mr26t.6369-citywalk-mr26t-1300424064/route/3/ia_300000155.jpg"], 
      "description": "外滩（The Bund）是上海的标志和象征，享有万国建筑博览之美誉，从开埠时的小渔村，逐渐演变乘屹立于浦江之畔的东方明珠。外滩已成为上海百年历史变迁的缩影，江河交汇的外滩滨水风光旖丽、历史文化独特，自近代以来始终是金融贸易的中心。外滩的金融办公建筑林立、风格各异，展现了昔日远东金融业的实力，也延续着上海国际金融大都会的传奇。推荐线路自南向北参观。" }
    ],
    listOfCustomizedRoutes:[]
},
methods: {
  tabSelect: function tabSelect(e) {
    this.TabCur = e.currentTarget.dataset.id;
    this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
  }
},
onLoad: function() {
}
})