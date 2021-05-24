### Enzyme
> 在VSCode里面,运行Enzyme快件测试没问题,但是到IDEA里面就出现报错了,大概报错如下
> `Enzyme expects an adapter to be configured, but found none`

解决方案:

https://stackoverflow.com/questions/48279444/enzyme-expects-an-adapter-to-be-configured-but-found-none

- 如果是使用脚手架创建的react项目且没有eject配置
    将项目的setupTests.js挪到src文件夹下(这里使用ts可以改下后缀,也可以不改)