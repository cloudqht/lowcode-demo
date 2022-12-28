import { ILowCodePluginContext, project } from '@alilc/lowcode-engine';
import ComponentsPane from '@alilc/lowcode-plugin-components-pane';
import PagesPane from './pages'
const ComponentPanelPlugin = (ctx: ILowCodePluginContext) => {
  return {
    async init() {
      const { skeleton } = ctx;
      // 注册组件面板
      const componentsPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        contentProps: {},
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      });
      componentsPane?.disable?.();
      project.onSimulatorRendererReady(() => {
        componentsPane?.enable?.();
      });
      // 注册页面插件
      skeleton.add({
        index: -1,
        area: 'leftArea',
        type: 'PanelDock',
        name: 'pagesPane',
        content: PagesPane,
        contentProps: {},
        props: {
          align: 'top',
          icon: 'kaiwenjianjia',
          description: '页面管理',
        },
      });
    },
  };
}
ComponentPanelPlugin.pluginName = 'ComponentPanelPlugin';
export default ComponentPanelPlugin;