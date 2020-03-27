# 说明
本插件是自定义内容插件

- 两种调用方式
1. confirm
有取消按钮
2. warning  
无取消按钮
> 区别在于是否有取消按钮


- 两种内容类型

1. 简单类型
complex: false  默认简单类型

2. 复杂类型
complex: true,

> 区别： 简单内容内容上下居中 且不能撑起容器， 复杂内容左右居中可以撑起容器，随着内容的变大而变大


# 兼容性

### js
ie9

### css
ie9


# 配置
options: 
* title: 标题
* conent: 内容
* confirm: 确定回调
* quit: 取消回调
* complex: 是否是复杂类型数据  默认false
* scale： 缩放系数  默认为1   如果是自定义内容建议使用1.1

# 方法
* popUp_Template 模板方法
* popUp_BindEvent 绑定事件
* popUp_JudgeContentType 内容类型 
* pop_UpScale 缩放



# 优势
1. 可以自定义比例缩放

2. 通过插入不同的内容控制显示框的大小(因此可以插入扩展各种内容)

3. em适配

4. 简单类型时可以当做 提示框 警告框使用


# 用法
看demo


# 已解决问题

1. 按钮需要不能选中文字

2. 按钮被bootstrap样式所影响 

3. 其他元素样式 被bootstrap影响
