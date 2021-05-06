## import antd style
> 一开始我以为antd组件直接导入后就可以使用了,没意识到还需要将antd的样式导入进来,所以为了导入antd样式的问题,自己瞎搞了两天时间.

- 方法一: 直接在`APP.css`里面全局引入css样式
  - 具体为: `@import '~antd/dist/antd.css'`
  - 但是这种方法无疑不是最佳的,因为全局引入的话, 即使当前页面/组件没有使用antd组件,但是依然把antd的样式导入了进来,那么这样就会造成前端性能问题(某些页面加载了一些无用的css资源)

- 方法二: 按需加载 使用`babel-plugin-import`组件
  - 在本项目中,由于没有将原生的config信息reject出来,所以后面使用社区方案`customize-cra`进行webpack的覆盖
  - 首先安装`less` `less-loader`
  - 在`config-overrides`文件里面新增`babel-plugin-import`插件, 增加插件的API是`customize-cra` 里面的`fixBabelImports`,具体代码是
    ```
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true, //如果是true,则为less 也可为'css'
    }),
    ```
  - 由于antd里面的一些样式使用了less, 所以增加`less-loader`进行样式处理,API是`customize-cra` 里面的`addLessLoader`,具体代码是
    ```
    addLessLoader({
    // less-loader 6.0 以上是lessOptions 以下是options
      lessOptions: {
        strictMath: false,
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#255DE9'
        }
      },
    }),
    ```

> 此处遇到的坑是
- antd样式需要使用less-loader, 使用css模式不支持
- antd样式插件在babelrc里面配置不生效
- less-loader不同版本的配置有不同,
  - 6.0以上是lessOptions, 6.0以下是options

