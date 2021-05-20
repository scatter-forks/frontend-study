const { override, addPostcssPlugins, fixBabelImports, addLessLoader } = require('customize-cra')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
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
  // 这里是引入tailwindcss
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer')
  ]),


  (config) => {
    config.devtool = false
    //可以暴露webpack的配置 config ,evn
    //1.修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf

    loaders.push({
      test: '/\.(ts|tsx)$',
      exclude: /node_modules/,
      use: [
        // ... other loaders
        {
          loader: require.resolve('ts-loader'),
          options: {
            plugins: [
              // ... other plugins
              require('react-refresh-typescript'),
            ]
          },
        },
      ],
    })
    loaders.push({
      test: '/\.(eot|woff2|woff|ttf|svg)$',
      use: ['file-loader'],
    })

    loaders[4].exclude = /node_modules/
    loaders[4].use.loader = ['style-loader', 'css-loader']

    loaders[6].use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: './src/assets/scss/main.scss'//全局引入公共的scss 文件(这里注意要用具体地址)
      }
    })

    config.plugins.push(
      new ReactRefreshPlugin()
    )
    return config
  }
)