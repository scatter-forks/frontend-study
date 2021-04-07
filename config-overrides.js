const { override, addPostcssPlugins } = require('customize-cra')

module.exports = override(
  // 这里是引入tailwindcss
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer')
  ]),
  // adjustStyleLoaders(rule => {
  //     if (rule.test.toString().includes("scss")) { //这里是因为找到的是.module.scss test
  //         rule.use.push({
  //         loader: require.resolve("sass-resources-loader"),
  //         // options: {
  //         //     resources: "./src/assets/scss/main.scss" 
  //         // }
  //         });
  //     }
  // })

  (config) => {
    //可以暴露webpack的配置 config ,evn
    //1.修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    config.mode = 'development'
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;

    loaders.push({
      test: '/\.(ts|tsx)$',
      use: ['ts-loader'],
      exclude: /node_modules/
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

    return config
  }
)