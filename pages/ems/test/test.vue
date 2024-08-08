<script setup lang="ts">
import { Graph, Shape} from '@antv/x6'
import { Stencil } from '@antv/x6-plugin-stencil'
import { Transform } from '@antv/x6-plugin-transform'
import { Selection } from '@antv/x6-plugin-selection'
import { Snapline } from '@antv/x6-plugin-snapline'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { History } from '@antv/x6-plugin-history'
import {useAppStore} from "~/stores/app";

const appStore = useAppStore();
const strokeDasharray = ref('0,0')
const showStencil = ref(true)
let sourceMarker = ref({
  name: '',
  width: 0,
  height: 0,
})
let targetMarker = ref({
  name: 'block',
  width: 0,
  height: 0,
})
const showIcon = ref(true)
const dialog = ref(false)
const graphWidth = ref('794px')
const graphHeight = ref('1143px')
const items = ref([{ title: '虚线',value: 0 },
  { title: '虚线单向箭头',value: 1 },
  { title: '虚线双向箭头',value: 2 },
  { title: '实线',value: 3 },
  { title: '实线单向箭头',value: 4 },
  { title: '实线双向箭头',value: 5 }])
const panning = ref(false)
const graph = ref()
const selectedNode = ref([])
const selectedEdge = ref([])
const selectedType = ref()
const fold = ref(false)
const width = ref(794)
const height = ref(1143)
const zoomed = ref(1)
let cellsAdded: any = reactive([])
watch(selectedType, (val) => {
  switch (val) {
    case 0:
      sourceMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      targetMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      strokeDasharray.value = '4,4'
      break
    case 1:
      sourceMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      targetMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      strokeDasharray.value = '4,4'
      break
    case 2:
      sourceMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      targetMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      strokeDasharray.value = '4,4'
      break
    case 3:
      sourceMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      targetMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      strokeDasharray.value = '0,0'
      break
    case 4:
      sourceMarker.value = {
        name: '',
        width: 0,
        height: 0,
      }
      targetMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      strokeDasharray.value = '0,0'
      break
    case 5:
      sourceMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      targetMarker.value = {
        name: 'block',
        width: 12,
        height: 8,
      }
      strokeDasharray.value = '0,0'
      break
  }
  refreshEdgeAttrs()
})
watch(fold, () => {
  showIcon.value = true
  if (fold.value === true) { // 若让fold为true,showIcon不管则收缩栏被撑开,使用v-if时候dom被摧毁后,动画也消失
    const itemId = setTimeout(()=>{
      showIcon.value = false
      clearTimeout(itemId)
    },100)
  }
})
onMounted(() => {
  init()
})

function saveData() {
  graph.value.toJSON().cells // 获取节点及连线
}

function changePanning() {
  panning.value = !panning.value
  graph.value.togglePanning()
}

function refreshEdgeAttrs() {
  const edges = graph.value.getEdges()
  edges.forEach(edge => {
    if (selectedEdge.value.indexOf(edge.id) !== -1) {
      edge.setAttrs({
        line: {
          stroke: '#A2B1C3', // 更新颜色
          sourceMarker: {
            ...sourceMarker.value
          },
          targetMarker: {
            ...targetMarker.value
          },
          strokeDasharray: strokeDasharray.value
        },
      });
      graph.value.addEdge({ ...edge })
    } else if (edge.shape !== 'edge') {
      graph.value.addNode({ ...edge })
    } else {
      graph.value.addEdge({ ...edge })
    }
  })
  selectedEdge.value = []
  selectedType.value = null
  panning.value = false
}
function changeZoom(type) {
  // const zoom = graph.value.zoom()
    if (type === 1 && zoomed.value < 1.4) {
      // graph.value.zoom(0.1)
      zoomed.value = zoomed.value + 0.1
      resizeCells()
    } else if (type === -1 && zoomed.value > 0.8) {
      // graph.value.zoom(-0.1)
      zoomed.value = zoomed.value - 0.1
      resizeCells()
    }
    // const zoomed = graph.value.zoom()
}

function cellChanged() {
  const cells = graph.value.toJSON().cells
  cells.forEach(cell => {
    if (cell.position) {
      cell.attrs.image && (cell.attrs.image.width = cell.attrs.image.width / zoomed.value)
      cell.attrs.image && (cell.attrs.image.height = cell.attrs.image.height / zoomed.value)
      cell.position.x = cell.position.x / zoomed.value
      cell.position.y = cell.position.y / zoomed.value
      cell.size.width = cell.size.width / zoomed.value
      cell.size.height = cell.size.height / zoomed.value
    }
  })
  cellsAdded = cells
}

function resizeCells() {
  if (cellsAdded.length !== 0) {
    const cells = structuredClone(cellsAdded)
    cells.forEach(cell => {
      if (cell.position) {
        cell.attrs.image && (cell.attrs.image.width = cell.attrs.image.width * zoomed.value)
        cell.attrs.image && (cell.attrs.image.height = cell.attrs.image.height * zoomed.value)
        cell.position.x = cell.position.x * zoomed.value
        cell.position.y = cell.position.y * zoomed.value
        cell.size.width = cell.size.width * zoomed.value
        cell.size.height = cell.size.height * zoomed.value
      }
    })
    graph.value.fromJSON(cells)
  }
  graphWidth.value = width.value * zoomed.value + 'px'
  graphHeight.value = height.value * zoomed.value + 'px'
  graph.value.size.options.height = height.value * zoomed.value + 1
  graph.value.size.options.width = width.value * zoomed.value + 1
  graph.value.resize()
}

function init() {
  selectedNode.value = []
  graph.value && graph.value.dispose()
  graph.value = new Graph({
    container: document.getElementById('graph-container')!,
    grid: true,
    panning: false,
    virtual: true,
    mousewheel: {
      enabled: false,
      zoomAtMousePosition: false,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 1.5,
    },
    connecting: {
      router: 'manhattan',
      connector: {
        name: 'rounded',
        args: {
          radius: 8,
        },
      },
      allowLoop: false,
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              strokeDasharray: '',
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
              sourceMarker: {
                name: '',
                width: 0,
                height: 0,
              }
            },
          },
          zIndex: 0,
        })
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet
      },
    },
    highlighting: {
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#5F95FF',
            stroke: '#5F95FF',
          },
        },
      },
    },
  })
  graph.value
    .use(
      new Transform({
        resizing: true,
        rotating: true,
      }),
    )
    .use(
      new Selection({
        rubberband: true,
        showNodeSelectionBox: true,
      }),
    )
    .use(new Snapline())
    .use(new Keyboard())
    .use(new Clipboard())
    .use(new History())

  const stencil = new Stencil({
    title: '基础流程图',
    target: graph.value,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
    collapsable: true,
    groups: [
      {
        name: 'group1',
        collapsable: false,
      },
      {
        title: '系统设计图',
        name: 'group2',
        collapsable: false,
        graphHeight: 250,
        layoutOptions: {
          rowHeight: 70,
        },
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 80,
      rowHeight: 55,
    },
  })
  document.getElementById('stencil')!.appendChild(stencil.container)
  graph.value.on('cell:added', (e) => {
    selectedNode.value.push(e.cell.label)
    const cells = graph.value.toJSON().cells
    cells.forEach(cell => {
      if (cell.position && cell.id === e.cell.id) {
        cell.size.width = cell.size.width * zoomed.value
        cell.size.height = cell.size.height * zoomed.value
        cell.attrs.image && (cell.attrs.image.width = cell.attrs.image.width * zoomed.value)
        cell.attrs.image && (cell.attrs.image.height = cell.attrs.image.height * zoomed.value)
        graph.value.fromJSON(cells)
        cellChanged()
        stencil.load(group2.filter(item => selectedNode.value.indexOf(item.label) === -1), 'group2')
        stencil.load(group1.filter(item => selectedNode.value.indexOf(item.label) === -1), 'group1')
      }
    })
  });

  graph.value.on('cell:removed', ({ cell }) => {
    selectedNode.value = selectedNode.value.filter(item => item !== cell.label)
    stencil.load(group2.filter(item => selectedNode.value.indexOf(item.label) === -1), 'group2')
    stencil.load(group1.filter(item => selectedNode.value.indexOf(item.label) === -1), 'group1')
  });
  graph.value.on('edge:dblclick', ({ edge, e }) => {
    edge.addTools({
      name: 'edge-editor',
      args: {
        event: e
      }
    })
  })
  graph.value.on('edge:click', ({ edge }) => {
    edge.setAttrs({
      line: {
        stroke: '#5F95FF', // 更新颜色
      },
    });
    selectedEdge.value.push(edge.id)
  })
  graph.value.on('edge:mouseenter', ({ cell }) => {
    cell.addTools([
      {
        name: 'source-arrowhead',
        args: {
          attrs: {
            d: 'M 10 -5 L 0 0 L 10 5 Z',
            fill: '#A2B1C3',
            stroke: '#A2B1C3',
          }
        }
      },
      {
        name: 'target-arrowhead',
        args: {
          attrs: {
            d: 'M -10 -5 L 0 0 L -10 5 Z',
            fill: '#A2B1C3',
            stroke: '#A2B1C3',
          }
        }
      }
    ])
  })
  graph.value.on('cell:mouseup', ({ cell }) => {
    cellChanged()
  })
  graph.value.on('edge:mouseleave', ({ cell }) => {
    cell.removeTools('source-arrowhead')
  })

  // #region 快捷键与事件
  graph.value.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = graph.value.getSelectedCells()
    if (cells.length) {
      graph.value.copy(cells)
    }
    return false
  })
  graph.value.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = graph.value.getSelectedCells()
    if (cells.length) {
      graph.value.cut(cells)
    }
    return false
  })
  graph.value.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!graph.value.isClipboardEmpty()) {
      const cells = graph.value.paste({ offset: 32 })
      graph.value.cleanSelection()
      graph.value.select(cells)
    }
    return false
  })

// undo redo
  graph.value.bindKey(['meta+z', 'ctrl+z'], () => {
    if (graph.value.canUndo()) {
      graph.value.undo()
    }
    return false
  })
  graph.value.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (graph.value.canRedo()) {
      graph.value.redo()
    }
    return false
  })

// select all
  graph.value.bindKey(['meta+a', 'ctrl+a'], () => {
    const nodes = graph.value.getNodes()
    if (nodes) {
      graph.value.select(nodes)
    }
  })

// delete
  graph.value.bindKey(['backspace','Delete'], () => {
    const cells = graph.value.getSelectedCells()
    const edges = graph.value.getEdges()
    if (cells.length) {
      cells.forEach((cell) => {
        if (cell.port) {
          graph.value.removeNode(cell)
        }
      })
      edges.forEach((edge) => {
        if (selectedEdge.value.indexOf(edge.id) !== -1) {
          graph.value.removeEdge(edge)
        }
      })
    }
    cellChanged()
  })

  // 控制连接桩显示/隐藏
  const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
  }
  graph.value.on('node:mouseenter', ({ node }) => {
    const container = document.getElementById('graph-container')!
    const ports = container.querySelectorAll(
        '.x6-port-body',
    ) as NodeListOf<SVGElement>
    showPorts(ports, true)
  })
  graph.value.on('node:mouseleave', ({ node }) => {
    const container = document.getElementById('graph-container')!
    const ports = container.querySelectorAll(
        '.x6-port-body',
    ) as NodeListOf<SVGElement>
    showPorts(ports, false)
  })

  graph.value.on('blank:click', () => {
    const edges = graph.value.getEdges()
    edges.forEach(edge => {
      if (selectedEdge.value.indexOf(edge.id) !== -1) {
        edge.setAttrs({
          line: {
            stroke: '#A2B1C3', // 更新颜色
          },
        });
      }
    })
    selectedEdge.value = []
    selectedType.value = null
  })
  // #region 初始化图形   四个连接桩的样式配置
  const ports = {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: '#fff',
            style: {
              visibility: 'hidden',
            },
          },
        },
      },
    },
    items: [
      {
        group: 'top',
      },
      {
        group: 'right',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
    ],
  }

  // 注册节点
  Graph.registerNode(
    'custom-rect',
    {
      inherit: 'rect',
      width: 66,
      height: 36,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
      ports: { ...ports },
    },
    true,
  )

  Graph.registerNode(
    'custom-polygon',
    {
      inherit: 'polygon',
      width: 66,
      height: 36,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
      ports: {
        ...ports,
        items: [
          {
            group: 'top',
          },
          {
            group: 'bottom',
          },
        ],
      },
    },
    true,
  )


  // 设置左侧菜单栏的节点配置
  Graph.registerNode(
    'custom-circle',
    {
      inherit: 'circle',
      width: 45,
      height: 45,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
      ports: { ...ports },
    },
    true,
  )

  // 设置左侧菜单栏图片选项的节点配置
  Graph.registerNode(
    'custom-image',
    {
      inherit: 'rect',
      width: 52,
      height: 52,
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'image',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        body: {
          stroke: '#5F95FF',
          fill: '#5F95FF',
        },
        image: {
          width: 26,
          height: 26,
          refX: 13,
          refY: 16,
        },
        label: {
          refX: 3,
          refY: 2,
          textAnchor: 'left',
          textVerticalAnchor: 'top',
          fontSize: 12,
          fill: '#fff',
        },
      },
      ports: { ...ports },
    },
    true,
  )

  // 左侧菜单基础选项
  const r1 = graph.value.createNode({
    shape: 'custom-rect',
    label: '开始',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  })
  const r2 = graph.value.createNode({
    shape: 'custom-rect',
    label: '过程',
  })
  const r3 = graph.value.createNode({
    shape: 'custom-rect',
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
    label: '可选过程',
  })
  const r4 = graph.value.createNode({
    shape: 'custom-polygon',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
    label: '决策',
  })
  const r5 = graph.value.createNode({
    shape: 'custom-polygon',
    attrs: {
      body: {
        refPoints: '10,0 40,0 30,20 0,20',
      },
    },
    label: '数据',
  })
  const r6 = graph.value.createNode({
    shape: 'custom-circle',
    label: '连接',
  })
  const group1 = [r1, r2, r3, r4, r5, r6]
  stencil.load(group1, 'group1')

  // 左侧菜单的图片选项
  const imageShapes = [
    {
      label: 'Client',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
    },
    {
      label: 'Http',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
    },
    {
      label: 'Api',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
    },
    {
      label: 'Sql',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
    },
    {
      label: 'Clound',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
    },
    {
      label: 'Mq',
      image:
        'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
    },
  ]
  const group2 = imageShapes.map((item) =>
    graph.value.createNode({
      shape: 'custom-image',
      label: item.label,

      attrs: {
        image: {
          width: 32,
          height: 32,
          'xlink:href': item.image,
        },
      },
    }),
  )
  stencil.load(group2, 'group2')
}

function confirmDialog() {
  graphWidth.value = width.value + 'px'
  graphHeight.value = height.value + 'px'
  dialog.value = false
}

function changeShowStencil() {
  showStencil.value = !showStencil.value
}
</script>

<template>
  <div id="container" :style="{ width: '100%', height: '100%' }">
    <div class="operation" :style="{ top: !appStore.isFullScreen ? '72px' : '8px' }">
      <nuxt-icon v-show="!fold" name="svg/fold" class="icon-size" @click="fold = true"/>
      <nuxt-icon v-show="fold" name="svg/unfold" class="icon-size" @click="fold = false"/>
      <v-expand-x-transition>
        <div class="d-flex" v-show="!fold">
          <nuxt-icon v-show="showIcon" :name="!appStore.isFullScreen ? 'svg/fullscreen' : 'svg/fullscreen-exit'" class="icon-size" @click="appStore.fullScreen"/>
<!--          <nuxt-icon v-show="!panning" name="svg/move" class="icon-size" @click="changePanning" />-->
<!--          <nuxt-icon v-show="panning" name="svg/move" class="active-icon icon-size" @click="changePanning" />-->
          <nuxt-icon v-show="showIcon" name="svg/setBig" class="icon-size" @click="changeZoom(1)" />
          <nuxt-icon v-show="showIcon" name="svg/setSmall" class="icon-size" @click="changeZoom(-1)" />
          <nuxt-icon v-show="showIcon" name="svg/setting" class="icon-size" @click="dialog = true"/>
        </div>
      </v-expand-x-transition>
      <yhlx-select v-if="selectedEdge.length !== 0" class="mr-2" style="width: 120px" variant="underlined" v-model="selectedType" :items="items" placeholder="线的类型"/>
      <yhlx-btn @click="saveData">save</yhlx-btn>
    </div>
    <v-btn class="stencil-button"
     :icon="showStencil ? 'mdi-unfold-less-vertical' : 'mdi-unfold-more-vertical'"
     @click="changeShowStencil"
     :style="{ top: !appStore.isFullScreen ? '90px' : '60px',left: appStore.mainSidebar && !appStore.isFullScreen ? '263px' : '8px' }"
    ></v-btn>
    <v-expand-x-transition>
      <div v-show="showStencil" id="stencil" :style="{ top: !appStore.isFullScreen ? '148px' : '118px',left: appStore.mainSidebar && !appStore.isFullScreen ? '255px' : '0' }"/>
    </v-expand-x-transition>
    <div id="graph-container" :style="{ width: graphWidth || '794px', height: graphHeight || '1143px' }" />
    <v-dialog
        v-model="dialog"
        max-width="400"
    >
      <v-card>
        <v-container>
          <v-card-title class="pa-5">
            <span class="text-h5">设置画布宽高</span>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field label="画布宽度" clearable hide-details variant="underlined" v-model="width" placeholder="请输入数字" style="max-width: 120px;min-width: 120px"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="画布高度" clearable hide-details variant="underlined" v-model="height" placeholder="请输入数字" style="max-width: 120px;min-width: 120px"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false">
              取消
            </v-btn>
            <v-btn @click="confirmDialog">
              确定
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

  </div>
</template>

<style scoped lang="scss">
#container {
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  align-items: center;
  .operation{
    position: fixed;
    right: 16px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 6666;
    background-color: #fff;
    border-radius: 10px;
    padding: 8px;
    border: 1px solid #dfe3e8;
    .nuxt-icon{
      display: inline-block;
      cursor: pointer;
      margin-right: 8px;
    }
  }
  #stencil {
    width: 200px;
    height: 60%;
    top: 64px;
    position: fixed;
    border-right: 1px solid #fefefe;
    z-index: 666;
  }
  #graph-container {
    width: 794px;
    height: 1123px;
    margin: 0 auto;
    background-color: #e9e9e9;
  }
}
.active-icon{
  color: rgb(var(--v-theme-primary));
}
:deep(.x6-widget-stencil){
  width: 200px !important;
}
.icon-size{
  font-size: 30px;
}
.stencil-button{
  position: fixed;
  top: 90px;
  left: 263px;
}
</style>