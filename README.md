
# eui-button

an button component for react


## Useage
```sh
render() {
  <div>
    <Button 
      content="默认按钮"
      size="small"
    />
  </div>
}
```

## Button API Props

|参数|说明|类型|可选值|默认值|
|----|----|----|----|------|
|size|按钮大小|string|small,medium,large|medium|
|type|类型|string|primary,secondary,normal|normal|
|disabled|是否禁用|boolean|true,false|false|
|className|自定义额外class|string|-|-|
|htmlType|设置按钮类型|string|button,submit,reset,text|button|
|loading|是否载入状态|boolean|true,false|false|
|onClick|click事件|function|-|-|
|href|按钮生成a链接|string|-|-|
|icon|设置图标名称|string|-|-|
|iconPosition|图标位置|string|left,right|left|



|color|设置按钮背景颜色|string|blue,green,yellow,red,orange|-|
|content|简单children内容的缩小|string|-|-|
|basic|初始化color属性|boolean|true,false|false|
具体用法参照demo
