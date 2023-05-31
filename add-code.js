// 引入fs模块
const path = require('path');
const fs = require('fs');
const needLoadFilePath = './src';
const TempFolder = './temp';

// 定义一个async函数，接收一个文件夹路径作为参数
const readFolder = async (folderPath) => {
  // 使用try...catch语句处理可能的错误
  try {
    // 使用fs.promises.readdir()方法异步地读取文件夹下的所有文件名，并且使用await等待结果
    // 返回文件名数组
    return await fs.promises.readdir(folderPath);
  } catch (err) {
    // 如果出错，打印错误信息
    console.error(err);
  }
};

// 读写文件
const fileOperation = async (filePath, content, operation) => {
  try {
    if (operation === 'write') {
      return await fs.promises.writeFile(filePath, content);
    } else if (operation === 'read') {
      return await fs.promises.readFile(filePath, 'utf8');
    }
  } catch (e) {
    console.error(operation + 'File', e);
  }
}

const getCode = async (randomFileName) => {
  const filePath = path.resolve(__dirname, `${needLoadFilePath}/${randomFileName}`);
  return fileOperation(filePath, '', 'read')
}



// 创建新的代码文件
const createRandomFile = async (TempFolder) => {
  const fileNames = await readFolder(needLoadFilePath);
  const randomIndex = Math.floor(Math.random() * fileNames.length);
  const randomFileName = fileNames[randomIndex];
  const filePath = `${TempFolder}/${randomFileName}`;
  const content = await getCode(randomFileName);
  await fs.promises.mkdir(TempFolder, { recursive: true })
  await fileOperation(filePath, content, 'write');
}






// 调用async函数，并且使用then()方法处理返回的Promise对象
const main = () => {
  createRandomFile(TempFolder)
}

main()