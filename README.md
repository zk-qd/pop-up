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
   complex: false 默认简单类型

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

- title: 标题
- conent: 内容
- confirm: 确定回调
- quit: 取消回调
- opening: 打开窗口回调
- complex: 是否是复杂类型数据 默认 false
- zoom： 缩放系数 默认为 1 如果是自定义内容使用默认值
- adapterCss: 是否开启适配模式 按照 1920 来的
- names: ['取消按钮文本','确定按钮文本'] => ['取消','确定']

# 方法

- popUp_Template 模板方法
- popUp_BindEvent 绑定事件
- popUp_JudgeContentType 内容类型
- popUp_Zoom 缩放

# 优势

1. 可以自定义比例缩放

2. 通过插入不同的内容控制显示框的大小(因此可以插入扩展各种内容)

3. em 适配

4. 简单类型时可以当做 提示框 警告框使用

# 用法

看 demo

# 注意事项

1. 相同类型的只能打开一个，不同类型的可以同时打开

# 已解决问题

1. 按钮需要不能选中文字

2. 按钮被 bootstrap 样式所影响

3. 其他元素样式 被 bootstrap 影响

4. 新增适配功能

5. 将除 fontsize 以外的所有 px 改成了 em

6. 添加 opening 回调

7. 原本确定在左，现在确定换到右边了

8. 新增names字段，修改自定义确定，取消，按钮文本

9. 修改quit和comfirm方法，如果返回的是false，那么说明就没有成功，因此也不关闭窗口