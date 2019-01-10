<template>
  <div style="width: 100%;height: 100%;">
    <div id="container"></div>

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        // map: '', //地图
        object3Dlayer:'',
      }
    },
    methods: {
      maps() {
        let _this = this;
        this.map = new AMap.Map('container', {
          pitch: 70,
          viewMode: '3D',
          buildingAnimation: false,
          showIndoorMap: false,
          mapStyle:'amap://styles/f3a095258b6162eb6522214f3252fe04'
        });
        this.map.setZoomAndCenter(19, [116.470323, 39.992598]);
        this.object3Dlayer = new AMap.Object3DLayer();
        this.map.add(object3Dlayer);
      /*   let map = new AMap.Map('container', {
          resizeEnable: true,
          zoom:4,
          center: [116.397428, 39.90923],
          mapStyle:'amap://styles/a92c23c68ca519ec235825c3be99462b'
          //前往创建自定义地图样式：https://lbs.amap.com/dev/mapstyle/index
        });*/
      },
      mam(){
        this.map.setMapStyle('amap://styles/b9c0930e6113c061a00db7d64ff43fdc');
      }
    },
    created() {
    },
    mounted() {
      this.maps();
    },
    beforeUpdate(){

    }

  }
</script>

<style lang="less" scoped>
  #container {
    width: 100%;
    height: 100%;
    opacity: .7;
    position: absolute;
    top:0;
    z-index: 0;
  }
</style>
