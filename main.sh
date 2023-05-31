#! /bin/bash

git pull

# 进入脚本所在的目录
cd $(dirname $0)

# 执行次数
count=1

# 循环执行
for((i=0;i<$count;i++))
do
node ./add-code.js
cd ../
git add .
msg="fix: 函数文件调整"
git commit -m "$msg"

cd $(dirname $0)
node ./remove-code.js
cd ../
git add .
msg="fix: 删除函数文件调整"
git commit -m "$msg"

#git push
done