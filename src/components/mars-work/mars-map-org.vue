<!-- <div class="absolute p-2 sm:p-3 bg-black bg-opacity-40 text-white border border-gray-400 " style="top: 140px; left: 18%; padding: 10px 15px; border-radius: 4px; "></div> -->


<template>
  <div class="flex flex-row h-screen">
    <div class="w-1/2 border-r flex">
      <div :id="withKeyId"  class="mars3d-container" ></div> 
      <select v-model="time1" @change="select1()" class="select select-secondary w-full max-w-xs absolute " style="top: 20%; left: 15%;">
        <!-- <option disabled selected>Pick your favorite language</option> -->
        <option disabled selected>前时期：选择年份和月度影像</option>
        <option value="2020.01">2020.01</option>
        <option value="2020.02">2020.02</option> 
        <option value="2020.03">2020.03</option>
        <option value="2020.04">2020.04</option> 
        <option value="2020.05">2020.05</option>
        <option value="2020.06">2020.06</option> 
        <option value="2020.07">2020.07</option>
        <option value="2020.08">2020.08</option> 
        <option value="2020.09">2020.09</option>
        <option value="2020.10">2020.10</option> 
        <option value="2020.11">2020.11</option>
        <option value="2020.12">2020.12</option>
      </select>
      <!-- </div> -->
    </div>    
    <div class="w-1/2 flex">
      <div :id="withKeyId2"  class="mars3d-container"></div> 
      <select title="2" v-model="time2" @change="select2()" class="select select-secondary w-full max-w-xs absolute"
      style="top: 20%; right: 15%;">
          <option disabled selected>后时期：选择年份和月度影像</option> 
          <option value="2020.02">2020.02</option> 
          <option value="2020.03">2020.03</option>
          <option value="2020.04">2020.04</option> 
          <option value="2020.05">2020.05</option>
          <option value="2020.06">2020.06</option> 
          <option value="2020.07">2020.07</option>
          <option value="2020.08">2020.08</option> 
          <option value="2020.09">2020.09</option>
          <option value="2020.10">2020.10</option> 
          <option value="2020.11">2020.11</option>
          <option value="2020.12">2020.12</option>
          <option value="2021.01">2021.01</option>
    </select>
      
    </div>

  <div class="absolute flex flex-row" style="bottom: 0%;left: 50%;transform: translate(-50%,-20%); padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  z-index: 19870101;"> 
       
      <div class="btn-group btn-group-horizontal lg:btn-group-horizontal">
        <button class="btn btn-active" @click="analysis()">开始检测</button>
        <button class="btn"  @click="research()" >下载结果</button>
      </div>
  </div>
  <div class="absolute  flex flex-col space-y-2 " style="top: 28%; right: 2%;"> 
    <!-- The button to open modal -->
    <a href="#my-modal-2" class="btn btn-square"> 
      <svg t="1679633095353" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2796" width="30px" height="30px"><path d="M833.47 337.03C804.22 187.15 672.62 73.83 511.77 73.83c-160.84 0-292.44 113.32-321.69 263.2C80.42 366.28 0 468.63 0 585.61c0 142.57 113.32 255.9 255.89 255.9h36.56v-73.12h-36.56c-102.35 0-182.78-80.42-182.78-182.78 0-102.35 80.42-182.78 182.78-182.78 0-142.57 113.32-255.89 255.89-255.89s255.9 113.32 255.9 255.89c102.35 0 182.78 80.42 182.78 182.78s-80.42 182.78-182.78 182.78h-36.56v73.12h36.56c142.57 0 255.89-113.33 255.89-255.9-0.01-116.98-80.44-219.33-190.1-248.58z m0 0" fill="#ffffff" p-id="2797"></path><path d="M544.68 486.91c-14.63-10.97-29.24-14.63-43.87-7.31-3.65 0-7.31 3.65-10.97 7.31L380.17 592.92c-14.62 14.63-14.62 36.56 0 51.18 14.63 14.63 40.21 14.63 54.84 0l43.86-40.21v310.73c0 21.93 18.28 36.55 36.56 36.55 21.93 0 36.55-18.27 36.55-36.55V603.88l43.87 40.21c14.62 14.63 40.21 14.63 54.83 0 14.63-14.62 14.63-36.55 0-51.18l-106-106z m0 0" fill="#ffffff" p-id="2798"></path></svg>
    </a>
    <button @click="handleClick_drawRectange()" class="btn btn-square">
      <!-- <img src="img/矩形框.png" style="width: 30px;height: 30px;"> -->
      <svg t="1678979572908" class="icon" viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3575" width="30px" height="30px"><path d="M861.448998 982.87035H73.805096c-11.157125 0-20.201203-9.044079-20.201203-20.201203V176.199945c0-11.157125 9.044079-20.201203 20.201203-20.201204s20.201203 9.044079 20.201203 20.201204v766.267999h767.442699c11.157125 0 20.201203 9.044079 20.201204 20.201203s-9.044079 20.201203-20.201204 20.201203zM949.11919 893.015398c-11.157125 0-20.201203-9.044079-20.201203-20.201203V107.555246H158.380463c-11.157125 0-20.201203-9.044079-20.201203-20.201203s9.044079-20.201203 20.201203-20.201203h790.738727c11.157125 0 20.201203 9.044079 20.201203 20.201203v785.460152c0 11.157125-9.044079 20.201203-20.201203 20.201203z" fill="#ffffff" p-id="3576"></path><path d="M133.327941 168.959833H20.201203c-11.157125 0-20.201203-9.044079-20.201203-20.201203v-113.126738c0-11.157125 9.044079-20.201203 20.201203-20.201203h113.126738c11.157125 0 20.201203 9.044079 20.201203 20.201203v113.126738c0 11.157125-9.044079 20.201203-20.201203 20.201203z m-92.925535-40.402406h72.724332v-72.724332H40.402406v72.724332z" fill="#ffffff" p-id="3577"></path><path d="M1002.296837 1006.142136h-113.126738c-11.157125 0-20.201203-9.044079-20.201203-20.201203v-113.126738c0-11.157125 9.044079-20.201203 20.201203-20.201203h113.126738c11.157125 0 20.201203 9.044079 20.201204 20.201203v113.126738c0 11.157125-9.044079 20.201203-20.201204 20.201203z m-92.925534-40.402406h72.724331v-72.724332h-72.724331v72.724332z" fill="#ffffff" p-id="3578"></path></svg>
    </button>
    <button @click="handleClick()" class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <input type="checkbox" class="toggle bottom-0" v-model="simplify_checked" checked/>
  </div>
    <!-- Put this part before </body> tag -->
    <div class="modal" id="my-modal-2">
      <div class="modal-box"> 
        <h1 class="font-bold text-lg">上传遥感影像</h1>

        <form @submit.prevent="submitForm">
          <div class="py-4">
            <label class="block text-gray-700 font-bold mb-2" for="url">
              影像文件:
            </label>
            <input type="file" id="image" ref="fileInput" @change="handleFileInputChange" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>

          <div class="py-4">
            <label class="block text-gray-700 font-bold mb-2">
              Year:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="year"
                  type="text" >
          </div>

          <div class="py-4">
            <label class="block text-gray-700 font-bold mb-2">
              Month:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="month"
                  type="text" >
          </div>

          <div class="flex justify-between mt-4">
            <!-- <button class="btn btn-primary" type="submit"> -->
            <button class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none focus:shadow-outline" type="submit">
              提交
            </button> 
          </div> 

          <div v-if="showProgress">
            <h2>上传进度：{{uploadProgress}}%</h2>
            <progress max="100" :value="uploadProgress"></progress>
          </div>

        </form> 
        
        <div class="modal-action">
        <a href="#" class="btn">关闭</a>
        </div>
      </div>
    </div> 

  </div>
</template>
<script setup lang="ts">
/**
 * 地图渲染组件
 *  
 * 
 */
import { computed, onUnmounted, onMounted,ref } from "vue"
import {addPolygonPrimitives,addPolygonCombine} from "./map3d"

import * as mars3d from "mars3d" 
import axios from 'axios';  
 
// import { $alert, $message } from "@mars/components/mars-ui/index"
const progress = ref(0); 
const simplify_checked = ref(true); 


const props = withDefaults(
  defineProps<{
    url: string
    mapKey?: string
    mapKey2?: string
    options?: any
  }>(),
  {
    url: "",
    mapKey: "default",
    options: () => ({})
  }
)


const time1 = ref('2021.11');
const time2 = ref('2021.12');

// 用于存放地球组件实例
let map: mars3d.Map; // 地图对象
let mapEx: mars3d.Map; // 地图对象
let graphicLayer = new mars3d.layer.GraphicLayer(); 
let graphicLayerEx = new mars3d.layer.GraphicLayer();

const Cesium = mars3d.Cesium;

// 使用用户传入的 mapKey 拼接生成 withKeyId 作为当前显示容器的id
const withKeyId = computed(() => `mars3d-container-${props.mapKey}`);

const withKeyId2 = computed(() => `mars3d-container-${props.mapKey2}`);


let url_config: any;
let url_change: string;
let model_name: string;
let url1: string;
let url2: string;
let tms = true;
let rectange = null;
let extent: string | any[] = [];
let tileLayerIds: string[] = [];


// _________________上传
const selectedFile = ref(null);
const month = ref("11");
const year = ref("2020");
const showProgress= ref(false); 
const uploadProgress= ref(0); 

const handleFileInputChange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        const reader = new FileReader();
        reader.onload = () => { 
          console.log("onload file ")
        };
        reader.readAsDataURL(file);
      }
    };

const submitForm = () => {
  showProgress.value = true; // 显示进度条 
  const formData = new FormData();
  formData.append('image', selectedFile.value);
  formData.append('year', year.value);
  formData.append('month', month.value);

  axios.post('http://localhost:5000/uploadv2', formData, {
  // axios.post('http://localhost:5000/upload_test', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: (progressEvent) => {
        // 实时更新上传进度条
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        if (progress < 100) {
          uploadProgress.value = progress;
        } else {
          showProgress.value = false; // 上传完成隐藏进度条
        }
      }
  }).then(response => {        
    console.log(response.data);
    alert('上传成功！');
  }).catch(error => {
    console.log(error.response.data);
    alert('上传失败！');
    showProgress.value = false; // 上传完成隐藏进度条
  });
};

// _________________上传

axios.get('config/api.json')
  .then(response => {
    url_config = response.data
    url_change = url_config['detection_api']
    model_name = url_config['model_name']
  })
  .catch(error => {
    console.error(error);
  });

onMounted(() => {
  // 获取配置
  mars3d.Util.fetchJson({ url: props.url }).then((data: any) => {
    initMars3d({
      // 合并配置项
      ...data.map3d,
      ...props.options
    })
  })
  // 2.在layer上绑定监听事件
  
  bindLayerPopup(graphicLayerEx)
  bindLayerPopup(graphicLayer) 

  bindLayerContextMenu(graphicLayer,graphicLayerEx)
  bindLayerContextMenu(graphicLayerEx,graphicLayer)
})

// # -------------------------

function bindLayerPopup(graphicLayer1: mars3d.layer.GraphicLayer) {
  // var eventTarget = new mars3d.BaseClass()
  // const change_class = {
  //   '建筑物变化': "建筑物变化",
  //   '2': "推填土变化",
  //   '3': "道路变化"
  // }
  // let change_class = new Map();
  // change_class.set("1", "建筑物变化");
  // change_class.set("2", "推填土变化");
  // change_class.set("3", "道路变化");
  graphicLayer1.bindPopup(function (event) {
    const attr = event.graphic.attr || {}
    // console.log(attr)
    // if (Object.keys(attr).length === 0) {
    // if ('segment' in attr) { 
    //   const segment = attr['segment']
    //   // console.log("segment",attr)
    //   attr["变化类别"]= change_class.get(segment.toString())
    // } 
    attr["类型"] = event.graphic.type
    attr["顶点数"] = event.graphic.points.length 

    return mars3d.Util.getTemplateHtml({ title: "要素属性", template: "all", attr: attr })
  }
  
 );

}
// 绑定右键菜单  // 可在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效
function bindLayerContextMenu(graphicLayer: mars3d.layer.GraphicLayer, graphicLayerEx:mars3d.layer.GraphicLayer) {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return !graphic.isEditing
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          console.log(graphic.isEditing)
          graphicLayer.startEditing(graphic)  
          console.log(graphic.isEditing)
          graphicLayerEx.getGraphicById(graphic.id).startEditing()
        }
      }
    },
    {
      text: "停止编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return graphic.isEditing
      },
      callback: (e) => {
        const graphic = e.graphic
        console.log('停止编辑对象',graphic.isEditing,e)
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphic.stopEditing()
          console.log('停止编辑对象',graphic.isEditing)
          const ex = graphicLayerEx.getGraphicById(graphic.id)
          console.log(ex.isEditing)
          ex.setOptions({
            positions: graphic.points
          })
          ex.stopEditing()
          console.log(ex.isEditing)
        }
      }
    },
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        const parent = graphic.parent // 右击是编辑点时
        graphicLayer.removeGraphic(graphic)
        const graphicEx = graphicLayerEx.getGraphicById(graphic.id);
        graphicLayerEx.removeGraphic(graphicEx);
        if (parent) {
          graphicLayer.removeGraphic(parent)
        }
      }
    },

    {
      text: "计算周长",
      icon: "fa fa-medium",
      callback: (e) => {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        alert("该对象的周长为:" + strDis)
      }
    },
    {
      text: "计算面积",
      icon: "fa fa-reorder",
      callback: (e) => {
        const graphic = e.graphic
        const strArea = mars3d.MeasureUtil.formatArea(graphic.area)
        alert("该对象的面积为:" + strArea)
      }
    }
  ])
}

// -------------------------

// onload事件将在地图渲染后触发
const emit = defineEmits(["onload"])
const initMars3d = (option: any) => {
  map = new mars3d.Map(withKeyId.value, option) 
  // option['toolbar']=false
  mapEx = new mars3d.Map(withKeyId2.value, option)
  mapEx.basemap = "天地图电子";
  map.basemap = "天地图电子";
  
  // //如果有xyz传参，进行定位
  // const lat = getQueryString("lat")
  // const lng = getQueryString("lng")
  // if (lat && lng) {
  //   map.flyToPoint(new mars3d.LngLatPoint(lng, lat), { duration: 0 })
  // }

  // 开场动画
  // map.openFlyAnimation();

  // 针对不同终端的优化配置
  if (mars3d.Util.isPCBroswer()) {
    map.zoomFactor = 2.0 // 鼠标滚轮放大的步长参数
    mapEx.zoomFactor = 2.0 // 鼠标滚轮放大的步长参数

    // IE浏览器优化
    if (window.navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
      map.viewer.targetFrameRate = 20 // 限制帧率
      map.scene.requestRenderMode = false // 取消实时渲染
      mapEx.viewer.targetFrameRate = 20 // 限制帧率
      mapEx.scene.requestRenderMode = false // 取消实时渲染
    }
  } else {
    map.zoomFactor = 5.0 // 鼠标滚轮放大的步长参数

    // 移动设备上禁掉以下几个选项，可以相对更加流畅
    map.scene.requestRenderMode = false // 取消实时渲染
    map.scene.fog.enabled = false
    map.scene.skyAtmosphere.show = false
    map.scene.globe.showGroundAtmosphere = false

    mapEx.zoomFactor = 5.0 // 鼠标滚轮放大的步长参数

    // 移动设备上禁掉以下几个选项，可以相对更加流畅
    mapEx.scene.requestRenderMode = false // 取消实时渲染
    mapEx.scene.fog.enabled = false
    mapEx.scene.skyAtmosphere.show = false
    mapEx.scene.globe.showGroundAtmosphere = false
  }

  // //二三维切换不用动画
  if (map.viewer.sceneModePicker) {
    map.viewer.sceneModePicker.viewModel.duration = 0.0
  }
  // //二三维切换不用动画
  if (mapEx.viewer.sceneModePicker) {
    mapEx.viewer.sceneModePicker.viewModel.duration = 0.0
  }
 

  //  双屏同步v2
  map.on(mars3d.EventType.cameraChanged, _map_extentChangeHandler);
  map.camera.percentageChanged = 0.01;

  mapEx.on(mars3d.EventType.cameraChanged, _mapEx_extentChangeHandler);
  mapEx.camera.percentageChanged = 0.01;



  // webgl渲染失败后，刷新页面
  // map.on(mars3d.EventType.renderError, async () => {
  //   await $alert("程序内存消耗过大，请重启浏览器")
  //   window.location.reload()
  // })

  // map构造完成后的一些处理
  onMapLoad()

  emit("onload", [map,mapEx])
}


// map构造完成后的一些处理
function onMapLoad() {
  // // Mars3D地图内部使用，如右键菜单弹窗
  // // @ts-ignore
  // window.globalAlert = $alert
  // // @ts-ignore
  // window.globalMsg = $message

  // // 用于 config.json 中 西藏垭口 图层的详情按钮 演示
  // // @ts-ignore
  // window.showPopupDetails = (item: any) => {
  //   $alert(item.NAME)
  // }
  map.addLayer(graphicLayer);
  mapEx.addLayer(graphicLayerEx);

 
}

// 只检测最近的画的一个矩形框
function handleClick_drawRectange() {
  console.log(`Clicked 框性检测`);
  let points: any[] = [];
  
  //获取点击坐标点
  graphicLayer.on(mars3d.EventType.drawAddPoint, function (e) {   //map
    let a = mars3d.LngLatPoint.fromCartesian(e.cartesian)
    points.push(a)
  })
  graphicLayerEx.on(mars3d.EventType.drawAddPoint, function (e) {   //mapEx
    let a = mars3d.LngLatPoint.fromCartesian(e.cartesian)
    console.log("点击了", a);
    points.push(a)
  })
  
  // 加一些演示数据，来源 http://mars3d.cn/editor-vue.html?id=layer-graphic/basis/entity
  // demoData.addDemoGraphic1(graphicLayer); 
  demoData.addDemoGraphic2(graphicLayerEx,graphicLayer,points);
  demoData.addDemoGraphic2(graphicLayer,graphicLayerEx,points);
 
}

function handleClick() {
  console.log(`Clicked 清除 icon`);
  console.log('n');
  if (graphicLayerEx) {
    graphicLayerEx.clear() 
  }
  if (graphicLayer) {
    graphicLayer.clear() 
  }
  extent = []
}

function screenShots() {
  // mars3d.showMapImg({ width: 200, height: 200 }).then((image) => {
  //   imges.value = image
  // })
  console.log(123)
}


//  ----------------------------- JSONP 
// --------------------------------------检测流程

function extent2rectange(json_rectange:number[]) {
  
  const xmin = json_rectange[0];
  const ymax = json_rectange[1];
  const xmax = json_rectange[2];
  const ymin = json_rectange[3];

  // json_rectange[1], json_rectange[2], json_rectange[3]
  // [115.875294,39.092246,116.004081,38.979094]
  rectange = {
    "xmin": xmin,
    "ymin": ymin,
    "xmax": xmax,
    "ymax": ymax
  }
  
  return rectange
}

function select1() {
  axios.get('config/api.json')
  .then(response => {
    url_config = response.data
    url_change = url_config['detection_api']
    model_name = url_config['model_name']
  })
  .catch(error => {
    console.error(error);
  });
 
  const [year, month] = time1.value.split('.')
  const rectangle_name = url_config["rectangle_name"]
  rectange = extent2rectange(url_config["rectangle"][rectangle_name]) 
  url1 = "http://localhost:5000/get_tiles_tsm_v2"+"/"+year +"/" + month
  let tileLayer = new mars3d.layer.XyzLayer({
      name: time1.value,
      url: "http://localhost:5000/get_tiles_tsm_v2"+"/"+year +"/" + month + "/{z}/{x}/{y}",
      rectangle: rectange, // 没有这个很卡 针对XyzLayer 
      // center: map.getCameraView(),
      tms: tms,
      minimumLevel: 11,
      maximumLevel: 18,
      //center: { lat: 22.43392, lng: 113.23887, alt: 8157553, heading: 354, pitch: -82 },
      // flyTo: true
    }) 
  map.addLayer(tileLayer)
}
function select2() {
  axios.get('config/api.json')
  .then(response => {
    url_config = response.data
    url_change = url_config['detection_api']
    model_name = url_config['model_name']
  })
  .catch(error => {
    console.error(error);
  });

  // url2 = url_config['url'][time2.value]
  
  const [year, month] = time2.value.split('.')
  const rectangle_name = url_config["rectangle_name"]
  rectange = extent2rectange(url_config["rectangle"][rectangle_name]) 
  url2 = "http://localhost:5000/get_tiles_tsm_v2"+"/"+year +"/" + month
  let tileLayer = new mars3d.layer.XyzLayer({
      name: time2.value,
      url: "http://localhost:5000/get_tiles_tsm_v2"+"/"+year +"/" + month + "/{z}/{x}/{y}",
      rectangle: rectange, // 没有这个很卡 针对XyzLayer 
      tms: tms,
      minimumLevel: 11,
      maximumLevel: 18,
      //center: { lat: 22.43392, lng: 113.23887, alt: 8157553, heading: 354, pitch: -82 },
      // flyTo: true
    })
 
  mapEx.addLayer(tileLayer)
}
const response = ref('');
function handleResponse(data: any) {
  response.value = data;
}

function analysis() {
  
  if (extent.length == 0) {
    alert("请先绘制区域！")
  }
  else {
    let points = []
    points.push(extent[0]._lng)
    points.push(extent[0]._lat)
    points.push(extent[1]._lng)
    points.push(extent[1]._lat)
    const extentData = JSON.stringify({ type: 'polygon', coors: points })
    const postdata = {
      extent: extentData,
      pre_url: url1,
      posturl: url2,
      tms: tms,
      model_name: model_name,
      simplify: simplify_checked.value
    }
    console.log('postdata', postdata) 
    //  ------------------------JSON
    axios.get(url_change, {
      params: postdata,
    }).then(response => {
        // console.log(response)
        const featureCollection  = response.data
        if (featureCollection == undefined || featureCollection == null || featureCollection.features.length == 0) {
            alert('该区域未检测到变化要素');
            return;
          }//featureCollection.features
      // =================================primetive
      addPolygonPrimitives(featureCollection,graphicLayer,graphicLayerEx)
      // addPolygonCombine(featureCollection,graphicLayer,graphicLayerEx)

      })
      .catch(error => {
        console.error(error);
        alert(error)
      });
 
  }
}

function research() {   
}

// --------------------------------------
const demoData = {
  // 以下为演示代码
  addDemoGraphic1: (graphicLayer: mars3d.layer.GraphicLayer) => {
    const graphic = new mars3d.graphic.LabelEntity({
      position: new mars3d.LngLatPoint(115.937011,39.051793, 1000),
      // :,"lng":39.051793,"lng":115.937011
      style: {
        text: "火星科技Mars3D平台",
        font_size: 40,
        font_family: "楷体",
        color: "#003da6",
        outline: true,
        outlineColor: "#bfbfbf",
        outlineWidth: 2,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        visibleDepth: false,
      },
      attr: { remark: "示例1" },
    });
    graphicLayer.addGraphic(graphic);
  },
  addDemoGraphic2: (graphicLayer: mars3d.layer.GraphicLayer,graphicLayerEx: mars3d.layer.GraphicLayer, points: any[]) => {
    graphicLayer.startDraw({
      type: "rectangle",
      style: {
        color: "#00ffff",
          fill: false,
          opacity: 0.4,
          outline: true,
          outlineWidth: 2,
          outlineColor: "#ff0000",
    },
    success: (graphic) =>{
      graphicLayerEx.stopDraw() //mapEx关闭绘制 
      // })
      extent = graphic.points

      let graphicRectangle = new mars3d.graphic.RectangleEntity({
        positions: points,
        style: {
          color: "#00ffff",
          fill: false,
          opacity: 0.4,
          outline: true,
          outlineWidth: 2,
          outlineColor: "#ff0000",
        }
      })
      // graphicRectangle = graphic.id
      // 修改只读属性 name，使用类型断言绕过类型检查
      // (person as any).name = 'Bob';
      // (graphicRectangle as any).id = graphic.id
      // let graphicRectangleNew = { ...graphicRectangle, id: graphic.id }; // 使用对象展开语法和重写属性的方式修改只读属性 id
      // graphicRectangle.id = graphic.id
      console.log('111111',graphicRectangle.id)
      // console.log('222222',graphicRectangleNew.id)
      console.log('222222',graphic.id)
      // graphicRectangle._id = graphic.id
      Object.defineProperty(graphicRectangle, '_id', { value: graphic.id });
      console.log('333333',graphicRectangle.id)
      graphicLayerEx.addGraphic(graphicRectangle)
      points=[]
    }
    })
  }

}




function _map_extentChangeHandler() {
  mapEx.off(mars3d.EventType.cameraChanged, _mapEx_extentChangeHandler);

  updateView(map, mapEx);
  mapEx.on(mars3d.EventType.cameraChanged, _mapEx_extentChangeHandler);
}
function _mapEx_extentChangeHandler() {
  map.off(mars3d.EventType.cameraChanged, _map_extentChangeHandler);

  updateView(mapEx, map);
  map.on(mars3d.EventType.cameraChanged, _map_extentChangeHandler);
}


//“变化屏”mapChange变化，将“被更新屏”mapUpdate同步更新
function updateView(mapChange: mars3d.Map, mapUpdate: mars3d.Map): void {
  var view = mapChange.getCameraView();
  mapUpdate.setCameraView(view, { duration: 0 });
}

// 组件卸载之前销毁mars3d实例
onUnmounted(() => {
  if (map) {
    map.destroy()
    map = null
  }
  console.log("map销毁完成", map)
  if (mapEx) {
    mapEx.destroy()
    mapEx = null
  }
  console.log("mapEx销毁完成", mapEx)
  if (graphicLayerEx) {
    graphicLayerEx.destroy()
    graphicLayerEx = null
  }
  if (graphicLayer) {
    graphicLayer.destroy()
    graphicLayer = null
  }
})
</script>

<style lang="less"> 
// 
// .container {
//   display: flex; 
//   height: 100vh;
// }

 
// .left-panel{
//   flex: 1;
//   height: 100%;
// }

// .right-panel {
//   flex: 1;
//   margin: 1px;
//   height: 100%;
// }

.view {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 14px rgba(128, 128, 128, 0.5);
  z-index: 19870101;
}

/**infoview浮动面板*/
.infoview1 {
  position: absolute;
  top: 140px;
  left: 18%;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 14px rgba(128, 128, 128, 0.5);
  z-index: 19870101;
}
.infoview-right {
  left: auto;
  right: 10px;
}

.infoview1 input,
.infoview1 select,
.infoview1 textarea {
  color: #fbfbfb;
  background-color: rgba(32, 160, 255, 0.2);
  border: 1px solid #e4eaec;
  font-size: 14px;
}

.infoview1 > div {
  margin-top: 5px;
}
.infoview2 {
  position: absolute;
  top: 140px;
  right: 18%;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 14px rgba(128, 128, 128, 0.5);
  z-index: 19870101;
}
// .infoview-right {
//   left: auto;
//   right: 10px;
// }

.infoview2 input,
.infoview2 select,
.infoview2 textarea {
  color: #ff0000;
  background-color: rgba(32, 160, 255, 0.2); 
  border: 1px solid #e4eaec;
  font-size: 14px;
} 

.infoview2 > div {
  margin-top: 5px;
}

.map-tools{
  // border: 1px solid #e4eaec;
  // background-color: #3f9ebd;
  border-radius: 1px;
  position: fixed;
  top: 20%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px; 
}
.item {
  display: flex;
  background-color: #e4eaec;
  border: 3px solid #e4eaec;
  border-radius: 10px;
  align-items: center;
  // gap: 10px;
  position: relative;
  // width: 50px;
  // height: 50px;
}

.item img { 
  // position: relative;
  width: 30px;
  height: 30px;
  // width: 100%;
  // height: 100%;

}

.overlay-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


/**cesium 工具按钮栏*/
.cesium-viewer-toolbar{
  top: auto !important;
  bottom: 35px !important;
  left: 12px !important;
  right: auto !important;
  display: none;
}
// .cesium-viewer-toolbar:nth-of-type(2){
//   top: auto !important;
//   bottom: 35px !important;
//   left: 12px !important;
//   right: auto !important;
//   display: none;
// }


.cesium-toolbar-button img {
  height: 100%;
}
.cesium-viewer-toolbar > .cesium-toolbar-button,
.cesium-navigationHelpButton-wrapper,
.cesium-viewer-geocoderContainer {
  margin-bottom: 5px;
  float: left;
  clear: both;
  text-align: center;
}
.cesium-button {
  background-color: rgba(23, 49, 71, 0.8);
  color: #e6e6e6;
  fill: #e6e6e6;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  line-height: 32px;
}
.cesium-button:hover {
  background: #3ea6ff;
}

/**cesium 底图切换面板*/
.cesium-baseLayerPicker-dropDown {
  bottom: 0;
  left: 40px;
  max-height: 700px;
  margin-bottom: 5px;
  background-color: rgba(23, 49, 71, 0.8);
}

/**cesium 帮助面板*/
.cesium-navigation-help {
  top: auto;
  bottom: 0;
  left: 40px;
  transform-origin: left bottom;
  background: none;
  background-color: rgba(23, 49, 71, 0.8);
  .cesium-navigation-help-instructions {
    background: none;
  }
  .cesium-navigation-button {
    background: none;
  }
  .cesium-navigation-button-selected,
  .cesium-navigation-button-unselected:hover {
    background: rgba(0, 138, 255, 0.2);
  }
}

/**cesium 二维三维切换*/
.cesium-sceneModePicker-wrapper {
  width: auto;
}
.cesium-sceneModePicker-wrapper .cesium-sceneModePicker-dropDown-icon {
  float: right;
  margin: 0 3px;
}

/**cesium POI查询输入框*/
.cesium-viewer-geocoderContainer .search-results {
  left: 0;
  right: 40px;
  width: auto;
  z-index: 9999;
}
.cesium-geocoder-searchButton {
  background-color: rgba(23, 49, 71, 0.8);
}
.cesium-viewer-geocoderContainer .cesium-geocoder-input {
  background-color: rgba(63, 72, 84, 0.7);
}
.cesium-viewer-geocoderContainer .cesium-geocoder-input:focus {
  background-color: rgba(63, 72, 84, 0.9);
}
.cesium-viewer-geocoderContainer .search-results {
  background-color: rgba(23, 49, 71, 0.8);
}

/**cesium info信息框*/
.cesium-infoBox {
  top: 50px;
  background-color: rgba(23, 49, 71, 0.8);
}
.cesium-infoBox-title {
  background-color: rgba(23, 49, 71, 0.8);
}

/**cesium 任务栏的FPS信息*/
.cesium-performanceDisplay-defaultContainer {
  top: auto;
  bottom: 35px;
  right: 50px;
}
.cesium-performanceDisplay-ms,
.cesium-performanceDisplay-fps {
  color: #fff;
}

/**cesium tileset调试信息面板*/
.cesium-viewer-cesiumInspectorContainer {
  top: 10px;
  left: 10px;
  right: auto;
}
.cesium-cesiumInspector {
  background-color: rgba(23, 49, 71, 0.8);
}

/**覆盖mars3d内部控件的颜色等样式*/
.mars3d-compass .mars3d-compass-outer {
  fill: rgba(23, 49, 71, 0.8);
  display: none;
}
.mars3d-compass .mars3d-compass-inner{
  display: none;
}
.mars3d-distance-legend{
  display: none;
}

.mars3d-contextmenu-ul,
.mars3d-sub-menu {
  background-color: rgba(23, 49, 71, 0.8);

  > li > a:hover,
  > li > a:focus,
  > li > .active {
    background-color: #3ea6ff;
  }

  > .active > a,
  > .active > a:hover,
  > .active > a:focus {
    background-color: #3ea6ff;
  }
}

/* Popup样式*/
.mars3d-popup-color {
  color: #ffffff;
}
.mars3d-popup-background {
  background: rgba(23, 49, 71, 0.8);
}
.mars3d-popup-content {
  margin: 15px;
}
.mars3d-template-content label {
  padding-right: 6px;
}
.mars3d-template-titile {
  border-bottom: 1px solid #3ea6ff;
}
.mars3d-template-titile a {
  font-size: 16px;
}
.mars3d-tooltip {
  background: rgba(23, 49, 71, 0.8);
  border: 1px solid rgba(23, 49, 71, 0.8);
}

.mars3d-popup-btn-custom {
  padding: 3px 10px;
  border: 1px solid #209ffd;
  background: #209ffd1c;
}
</style>
