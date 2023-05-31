// 引入fs模块
const fs = require('fs')
// 引入path模块
const path = require('path')
// 定义要删除的文件夹路径
const dirPath = './temp'
// 定义一个异步函数，用于删除文件夹中的所有文件和子文件夹
async function deleteDir(dir) {
  // 读取文件夹中的内容
  let files = await fs.promises.readdir(dir)
  // 遍历文件数组
  for (let file of files) {
    // 拼接文件路径
    let filePath = path.join(dir, file)
    // 判断文件类型
    let stats = await fs.promises.stat(filePath)
    // 如果是文件，删除文件
    if (stats.isFile()) {
      await fs.promises.unlink(filePath)
      console.log('删除文件：' + filePath)
    }
    // 如果是文件夹，递归调用函数
    if (stats.isDirectory()) {
      await deleteDir(filePath)
    }
  }
  // 删除空文件夹
  await fs.promises.rmdir(dir)
  console.log('删除文件夹：' + dir)
}
// 调用函数，删除整个文件夹
deleteDir(dirPath)