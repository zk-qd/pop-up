


/*
options: 
* title: 标题
* conent: 内容
* confirm: 确定回调
* quit: 取消回调
* complex: 是否是复杂类型数据  默认false
* scale： 缩放系数  默认为1   如果是自定义内容建议使用1.2
*/



(function (window) {
    // 证实框  有取消按钮 
    var confirm = function (options) {
        popUp_Template('confirm', options);
        popUp_BindEvent('confirm', options);
    }
    // 警告框 没有取消只有确定按钮
    var warning = function (options) {
        popUp_Template('warning', options);
        popUp_BindEvent('warning', options);
    };

    function popUp_Template(type, options) {
        var html = [];
        var title = options.title || '';
        var content = options.content;
        var complex = options.complex || false;
        var contentClass = popUp_JudgeContentType(complex);
        var scale = options.scale || 1;
        html.push(
            "<div class='pop-mask-equal pop-closing pop-mask-" + type + "'>"
        )
        html.push(
            "<div class='pop-wrapper-equal pop-wrapper-" + type + "'>"
        );
        html.push(
            "<h3 class='pop-title-equal pop-title-" + type + "'>" +
            "<i class='pop-align-center'>" + title + "</i>" +
            "<span class='pop-close-equal'>" +
            'x' +
            "</span>" +
            "</h3>"
        )
        html.push(
            "<div class='pop-content-equal pop-content-" + type + "'>" +
            "<i class='" + contentClass + "'>" + content + "</i>" +
            "</div>"
        )
        html.push(
            "<div class='pop-button-equal pop-botton-" + type + "'>"
        )
        html.push(
            "<i class='pop-align-center'>"
        )
        html.push(
            "<button class='pop-button-confirm'>确定</button>"
        );
        html.push(
            "<button class='pop-button-quit'>取消</button>"
        );
        html.push(
            "</i>"
        )
        html.push("</div>")
        html.push(
            "</div>"
        );
        html.push(
            "</div>"
        );
        // 判断是否存在
        var dom = document.querySelector(".pop-mask-" + type);
        if (dom) document.body.removeChild(dom);
        document.body.insertAdjacentHTML("beforeend", html.join('').trim());
        dom = document.querySelector(".pop-mask-" + type);
        // 控制缩放
        popUp_Scale(dom, scale);
        // 显示 效果
        function open() {
            dom.classList.remove('pop-closing');
            dom.classList.add('pop-opening');
        }
        open();
    };
    function popUp_BindEvent(type, options) {
        // 事件回调
        var confirm = options.confirm;
        var quit = options.quit;

        var dom = document.querySelector(".pop-mask-" + type);
        // 确定按钮
        dom.querySelector('.pop-button-confirm').addEventListener('click', function (e) {
            if (confirm) confirm();
            commonJs(e);
        });
        // 取消按钮
        dom.querySelector('.pop-button-quit').addEventListener('click', function (e) {
            if (quit) quit();
            commonJs(e);
        });
        // 关闭按钮
        dom.querySelector('.pop-close-equal').addEventListener('click', function (e) {
            commonJs(e);
        });

        //  因为要做效果 所以仅仅是隐藏
        function close() {
            dom.classList.remove('pop-opening');
            dom.classList.add('pop-closing');
        }
        // 抽取相同代码
        function commonJs(e) {
            e.stopPropagation();
            e.preventDefault();
            close();
        }

    }

    // 判断内容类型
    function popUp_JudgeContentType(complex) {
        if (complex) return 'pop-align-center-complex';
        else return 'pop-align-center-simple';

    }

    // 缩放
    function popUp_Scale(container, scale) {
        var fontSize = window.getComputedStyle(container, null).getPropertyValue('font-size');
        container.style.fontSize = parseFloat(fontSize) * scale + 'px';
    }

    if (!window.toast) {
        window.toast = {};
    }
    window.toast.confirm = confirm;
    window.toast.warning = warning;
})(window)
