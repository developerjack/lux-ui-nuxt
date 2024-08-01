<script setup lang="ts">
import { Graph, Shape } from '@antv/x6'
import { Stencil } from '@antv/x6-plugin-stencil'
import { Transform } from '@antv/x6-plugin-transform'
import { Selection } from '@antv/x6-plugin-selection'
import { Snapline } from '@antv/x6-plugin-snapline'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { History } from '@antv/x6-plugin-history'

const strokeDasharray = ref('0,0')
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
const items = ref([{ title: '虚线',value: 0 },
  { title: '虚线单向箭头',value: 1 },
  { title: '虚线双向箭头',value: 2 },
  { title: '实线',value: 3 },
  { title: '实线单向箭头',value: 4 },
  { title: '实线双向箭头',value: 5 }])
const panning = ref(false)
const graph = ref()
const selectedEdge = ref([])
const selectedType = ref(4)
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
})
onMounted(() => {
  init()
})

watch(strokeDasharray , () => {
  refreshGraph()
})
watch(() => targetMarker, () => {
  refreshGraph()
})
watch(sourceMarker, () => {
  refreshGraph()
})

function saveData() {
  graph.value.toJSON().cells // 获取节点及连线
}

function changePanning() {
  panning.value = !panning.value
  graph.value.togglePanning()
}

function refreshGraph() {
  const cells = graph.value.toJSON().cells
  const zoom = graph.value.zoom()
  init()
  graph.value.zoom(zoom - 1)
  cells.forEach(cell => {
    if (cell.shape === 'edge' && selectedEdge.value.indexOf(cell.id) !== -1) {
      cell.attrs.line.sourceMarker = { ...sourceMarker.value }
      cell.attrs.line.targetMarker = { ...targetMarker.value }
      cell.attrs.line.strokeDasharray = strokeDasharray.value
      graph.value.addEdge({ ...cell })
    } else if (cell.shape !== 'edge') {
      graph.value.addNode({ ...cell })
    } else {
      graph.value.addEdge({ ...cell })
    }
  })
  selectedEdge.value = []
  panning.value = false
  graph.value.centerContent()
}

function changeZoom(type) {
  const zoom = graph.value.zoom()
  if (type === 1 && zoom < 1.5) {
      graph.value.zoom(0.1)
  } else if (type === -1 && zoom > 0.5) {
    graph.value.zoom(-0.1)
  }
}

function init() {
  graph.value && graph.value.dispose()
  graph.value = new Graph({
    container: document.getElementById('graph-container')!,
    grid: true,
    panning: false,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
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
    title: '流程图',
    target: graph.value,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
    collapsable: true,
    groups: [
      {
        title: '基础流程图',
        name: 'group1',
      },
      {
        title: '系统设计图',
        name: 'group2',
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
  graph.value.on('edge:dblclick', ({ edge, e }) => {
    console.log('edge:dblclick', edge)
    edge.addTools({
      name: 'edge-editor',
      args: {
        event: e
      }
    })
  })
  graph.value.on('edge:click', ({ cell }) => {
    selectedEdge.value.push(cell.id)
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
      },
      {
        name: 'button-remove',
        args: { distance: -40 },
      },
    ])
  })

  graph.value.on('edge:mouseleave', ({ cell }) => {
    cell.removeTools('button-remove')
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
  graph.value.bindKey('backspace', () => {
    const cells = graph.value.getSelectedCells()
    if (cells.length) {
      graph.value.removeCells(cells)
    }
  })

// zoom
  graph.value.bindKey(['ctrl+1', 'meta+1'], () => {
    const zoom = graph.value.zoom()
    if (zoom < 1.5) {
      graph.value.zoom(0.1)
    }
  })
  graph.value.bindKey(['ctrl+2', 'meta+2'], () => {
    const zoom = graph.value.zoom()
    if (zoom > 0.5) {
      graph.value.zoom(-0.1)
    }
  })

  // 控制连接桩显示/隐藏
  const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
  }
  graph.value.on('node:mouseenter', ({ node }) => {
    node.addTools([{
      name: 'button-remove',
      args: {
        x: 0,
        y: 0,
        offset: { x: 10, y: 10 },
      },
    },])
    const container = document.getElementById('graph-container')!
    const ports = container.querySelectorAll(
        '.x6-port-body',
    ) as NodeListOf<SVGElement>
    showPorts(ports, true)
  })
  graph.value.on('node:mouseleave', ({ node }) => {
    node.removeTools()
    const container = document.getElementById('graph-container')!
    const ports = container.querySelectorAll(
        '.x6-port-body',
    ) as NodeListOf<SVGElement>
    showPorts(ports, false)
  })
// #endregion

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
  stencil.load([r1, r2, r3, r4, r5, r6], 'group1')

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
  const imageNodes = imageShapes.map((item) =>
    graph.value.createNode({
      shape: 'custom-image',
      label: item.label,
      attrs: {
        image: {
          'xlink:href': item.image,
        },
      },
    }),
  )
  stencil.load(imageNodes, 'group2')
}
</script>

<template>
  <div id="container" :style="{ width: '100%', height: '100%' }">
    <div class="operation">
      <yhlx-select v-if="selectedEdge.length !== 0" style="margin-right: 8px;" v-model="selectedType" :items="items" />
      <nuxt-icon name="svg/setBig" style="font-size: 30px;" @click="changeZoom(1)" />
      <nuxt-icon name="svg/setSmall" style="font-size: 30px;" @click="changeZoom(-1)" />
      <nuxt-icon v-show="!panning" name="svg/move" style="font-size: 30px;" @click="changePanning" />
      <nuxt-icon v-show="panning" name="svg/move" class="active-icon" style="font-size: 30px;" @click="changePanning" />
      <yhlx-btn @click="saveData">save</yhlx-btn>
    </div>
    <div id="stencil" />
    <div id="graph-container" />
  </div>
</template>

<style scoped lang="scss">
#container {
  display: flex;
  position: relative;
  .operation{
    position: absolute;
    top: 0;
    right: 16px;
    width: 22%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 666;
    .nuxt-icon{
      display: inline-block;
      cursor: pointer;
      margin-right: 8px;
    }
  }
  #stencil {
    width: 200px;
    height: 100%;
    position: relative;
    border-right: 1px solid #dfe3e8;
  }
  #graph-container {
    width: 100%;
    height: 100%;
  }
}
.active-icon{
  color: rgb(var(--v-theme-primary));
}
</style>