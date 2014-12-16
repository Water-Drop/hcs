安装grunt命令行工具：
npm install -g grunt-cli
直接在根目录下运行grunt会自动合并需要的js为hcs.js 并压缩为hcs.min.js
$grunt

自动监听js文件修改并打包：
$grunt watch

平时开发测试可以直接访问design.html