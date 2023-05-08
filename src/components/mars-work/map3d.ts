import * as mars3d from "mars3d"
const Cesium = mars3d.Cesium

let map // mars3d.Map三维地图对象
let graphicLayer:any // 矢量图层对象

const eventTarget = new mars3d.BaseClass()

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
const mapOptions = {
  scene: {
    center: { lat: 31.61982, lng: 117.230607, alt: 22746, heading: 2, pitch: -49 }
  }
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
function onMounted(mapInstance: any) {
  map = mapInstance // 记录map

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 在layer上绑定监听事件
  graphicLayer.on(mars3d.EventType.click, function (event: any) {
    console.log("监听layer，单击了矢量对象", event)
  })
  bindLayerPopup() // 在图层上绑定popup,对所有加到这个图层的矢量数据都生效
  bindLayerContextMenu() // 在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
  graphicLayer.remove()
  graphicLayer = null
}

export function addPolygonPrimitives(featureCollection: any,graphicLayer: mars3d.layer.GraphicLayer, graphicLayerEx: mars3d.layer.GraphicLayer) {
    const features = featureCollection.features
    
    const color1 = Cesium.Color.fromBytes(31, 119, 180, 255);
    const color3 = Cesium.Color.fromBytes(255, 127, 14, 255);
    const color2 = Cesium.Color.fromBytes(174, 199, 232, 255);
    let color = Cesium.Color.RED
    color1.alpha = 0.5;
    color3.alpha = 0.5;
    color2.alpha = 0.5;

    for (var i = 0; i < features.length; i++) {

        const attr = features[i].properties
        // console.log(attr)
        if (attr.segment == 1) { color = color1}
        if (attr.segment == 2) { color = color2}
        if (attr.segment == 3) { color = color3} 
        const graphic = new mars3d.graphic.PolygonPrimitive({
            positions: features[i].geometry.coordinates,            
            attr: attr,
            style: {
              color: color,
              clampToGround: true,
              outline: true,
              outlineColor: "#ffffff", 
              highlight: {
                type: mars3d.EventType.click,
                color: Cesium.Color.YELLOW.withAlpha(0.9)
            }
            }
        })
        const graphicEx = new mars3d.graphic.PolygonPrimitive({
            positions: features[i].geometry.coordinates,
            id: graphic.id,
            attr: attr,
            style: {
              color: color,
            //   opacity: 0.4, 
              clampToGround: true, 
              outline: true,
              outlineColor: "#ffffff", 
              highlight: {
                type: mars3d.EventType.click,
                color: Cesium.Color.YELLOW.withAlpha(0.9)
            }
            }
        })
        graphicLayer.addGraphic(graphic) 
        graphicLayerEx.addGraphic(graphicEx)
    }
}

export function  addPolygonCombine(featureCollection: any,graphicLayer: mars3d.layer.GraphicLayer, graphicLayerEx: mars3d.layer.GraphicLayer) {
    const features = featureCollection.features
    const color1 = Cesium.Color.fromBytes(31, 119, 180, 255);
    const color3 = Cesium.Color.fromBytes(255, 127, 14, 255);
    const color2 = Cesium.Color.fromBytes(174, 199, 232, 255);
    let color = Cesium.Color.RED
    color1.alpha = 0.5;
    color3.alpha = 0.5;
    color2.alpha = 0.5;

    const arr = mars3d.Util.geoJsonToGraphics(featureCollection.features,
        {
        symbol:{
            styleOptions: {},
            callback: function (attr) {
            const diffHeight = (attr.floor || 1) * 5
            let color = Cesium.Color.fromRandom({ alpha: 0.4 })
            if (attr.segment == 1) { color = new Cesium.Color(255, 0, 0, 0.4)}
            if (attr.segment == 2) { color = new Cesium.Color(255, 0, 0, 0.4)}
            if (attr.segment == 3) { color = new Cesium.Color(0, 0, 255, 0.4)} 
            return {
                height: 0,
                diffHeight: diffHeight,
                // color: Cesium.Color.fromRandom({ alpha: 0.4 }) // 随机色
                color: color // 随机色
            }
            }
        }
        }
        )
    const graphic = new mars3d.graphic.PolygonCombine({
            instances: arr, // 公共样式 
            style: {
            outline: true,
            outlineColor: "#ffffff"
            },
            // 高亮时的样式
            highlight: {
            type: mars3d.EventType.click,
            color: Cesium.Color.YELLOW.withAlpha(0.9)
            }
        })
    const graphicEx = new mars3d.graphic.PolygonCombine({
            instances: arr, // 公共样式 
            style: {
            outline: true,
            outlineColor: "#ffffff"
            },
            // 高亮时的样式
            highlight: {
            type: mars3d.EventType.click,
            color: Cesium.Color.YELLOW.withAlpha(0.9)
            }
        })
    
    graphicLayer.addGraphic(graphic)
    Object.defineProperty(graphicEx, '_id', { value: graphic.id });
    graphicLayerEx.addGraphic(graphicEx)

}


function removeLayer(map:any,graphicLayer:any) {
  if (graphicLayer) {
    graphicLayer.clear()
    map.removeLayer(graphicLayer, true)
    graphicLayer = null
  } 
}

// 规划面
export function addGeojson(featureCollection: any,graphicLayer: mars3d.layer.GraphicLayer, graphicLayerEx: mars3d.layer.GraphicLayer) {
  // removeLayer()

  let graphic = new mars3d.layer.GeoJsonLayer({
    id: 1987,
    name: "用地规划",
    // 1.支持URL
    // url: "//data.mars3d.cn/file/geojson/guihua.json",
    // 2.也支持直接传入数据
    data: {
      type: "FeatureCollection",
      name: "用地规划",
      features: featureCollection.features //数据已省略，可以从上面guihua.json中复制
    },
    symbol: {
      type: "polygonC",
      styleOptions: {
        opacity: 0.6,
        color: "#0000FF"
      },
      styleField: "segment",
      styleFieldOptions: {
        1: { color: Cesium.Color.fromBytes(31, 119, 180, 255) },
        2: { color: Cesium.Color.fromBytes(255, 127, 14, 255) },
        3: { color: Cesium.Color.fromBytes(174, 199, 232, 255) },
      }
    },
    popup: "类型:{class_name}"
    // flyTo: true,
  }) 
  let graphicEx = new mars3d.layer.GeoJsonLayer({
    id: 1987,
    name: "用地规划",
    // 1.支持URL
    // url: "//data.mars3d.cn/file/geojson/guihua.json",
    // 2.也支持直接传入数据
    data: {
      type: "FeatureCollection",
      name: "用地规划",
      features: featureCollection.features //数据已省略，可以从上面guihua.json中复制
    },
    symbol: {
      type: "polygonC",
      styleOptions: {
        opacity: 0.6,
        color: "#0000FF"
      },
      styleField: "segment",
      styleFieldOptions: {
        1: { color: Cesium.Color.fromBytes(31, 119, 180, 255) },
        2: { color: Cesium.Color.fromBytes(255, 127, 14, 255) },
        3: { color: Cesium.Color.fromBytes(174, 199, 232, 255) },
      }
    },
    popup: "类型:{class_name}"
    // flyTo: true,
  }) 
 
  graphicLayer.addGraphic(graphic)
  graphicLayerEx.addGraphic(graphicEx)

}
  




// 生成演示数据(测试数据量)
function addRandomGraphicByCount(count: number) {
  graphicLayer.clear()
  graphicLayer.enabledEvent = false // 关闭事件，大数据addGraphic时影响加载时间

  const bbox = [116.984788, 31.625909, 117.484068, 32.021504]
  const result = mars3d.PolyUtil.getGridPoints(bbox, count, 30)
  console.log("生成的测试网格坐标", result)

  for (let j = 0; j < result.points.length; ++j) {
    const position = result.points[j]
    const index = j + 1

    const pt1 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 0, result.radius)
    const pt2 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 72, result.radius)
    const pt3 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 144, result.radius)
    const pt4 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 216, result.radius)
    const pt5 = mars3d.PointUtil.getPositionByDirectionAndLen(position, 288, result.radius)

    const graphic = new mars3d.graphic.PolygonPrimitive({
      positions: [pt1, pt2, pt3, pt4, pt5],
      style: {
        color: Cesium.Color.fromRandom({ alpha: 0.6 })
      },
      attr: { index: index }
    })
    graphicLayer.addGraphic(graphic)
  }

  graphicLayer.enabledEvent = true // 恢复事件
  return result.points.length
}

// 开始绘制
function startDrawGraphic() {
  graphicLayer.startDraw({
    type: "polygonP",
    style: {
      color: "#29cf34",
      opacity: 0.5,
      outline: true,
      outlineWidth: 3,
      outlineColor: "#ffffff",
      label: {
        text: "我是火星科技",
        font_size: 18,
        color: "#ffffff",
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 500000,
        distanceDisplayCondition_near: 0
      }
    }
  })
}
// 开始绘制
function startDrawGraphic2() {
  graphicLayer.startDraw({
    type: "polygonP",
    style: {
      color: "#00ff00",
      opacity: 0.5,
      diffHeight: 300
    }
  })
}

// 在图层绑定Popup弹窗
function bindLayerPopup() {
  graphicLayer.bindPopup(function (event: any) {
    const attr = event.graphic.attr || {}
    attr["类型"] = event.graphic.type
    attr["来源"] = "我是layer上绑定的Popup"
    attr["备注"] = "我支持鼠标交互"

    return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })
  })
}

// 绑定右键菜单
function bindLayerContextMenu() {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      icon: "fa fa-edit",
      show: function (e: any) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return !graphic.isEditing
      },
      callback: (e: any) => {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.startEditing(graphic)
        }
      }
    },
    {
      text: "停止编辑对象",
      icon: "fa fa-edit",
      show: function (e: any) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return graphic.isEditing
      },
      callback: (e: any) => {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphic.stopEditing()
        }
      }
    },
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event: any) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: (e: any) => {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        const parent = graphic.parent // 右击是编辑点时
        graphicLayer.removeGraphic(graphic)
        if (parent) {
          graphicLayer.removeGraphic(parent)
        }
      }
    },

    {
      text: "计算周长",
      icon: "fa fa-medium",
      callback: (e: any) => {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        alert("该对象的周长为:" + strDis)
      }
    },
    {
      text: "计算面积",
      icon: "fa fa-reorder",
      callback: (e: any) => {
        const graphic = e.graphic
        const strArea = mars3d.MeasureUtil.formatArea(graphic.area)
        alert("该对象的面积为:" + strArea)
      }
    }
  ])
}
