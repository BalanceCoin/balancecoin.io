#!/bin/sh
[ -d ./build/ ] && rm -rf build/
npm run build-sass
npm run build
docker build . -t blcwww
docker tag blcwww registry.cn-shanghai.aliyuncs.com/blc/balancecoin.io:latest
docker push registry.cn-shanghai.aliyuncs.com/blc/balancecoin.io:latest
