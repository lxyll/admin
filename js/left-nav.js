//添加nav，header,harbour部分
AddHtml();
function AddHtml() {
    var currency = {
        nav: function () {
            let A = `<div class="nav-box">
            <div class="Nav-header">
                <span>layuiAdmin Pro</span>
                <img src="img/logo.png" alt="">
            </div>
            <ul>
                <!-- 主页 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-zhuye3"></i>
                        <cite>主页</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">控制台</a></dd>
                        <dd><a href="zhuye1.html">主页一</a></dd>
                        <dd><a href="zhuye2.html">主页二</a></dd>
                    </dl>
                </li>
                <!-- 组件 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-component"></i>
                        <cite>组件</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd>
                            <a>栅格<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>等比例列表排列</dd>
                                <dd>按移动端排列</dd>
                                <dd>移动桌面端组合</dd>
                                <dd>全端复杂组合</dd>
                                <dd>低于桌面堆叠排列</dd>
                                <dd>九宫格</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">按钮</a></dd>
                        <dd>
                            <a href="javascript:;">表单
                                <span class="nav-ssp spanSanjiaoX"></span>
                            </a>
                            <dl>
                                <dd>表单元素</dd>
                                <dd>表单组合</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">导航</a></dd>
                        <dd><a href="javascript:;">选项卡</a></dd>
                        <dd><a href="javascript:;">进度条</a></dd>
                        <dd><a href="javascript:;">面板</a></dd>
                        <dd><a href="javascript:;">徽章</a></dd>
                        <dd><a href="javascript:;">时间线</a></dd>
                        <dd><a href="javascript:;">动画</a></dd>
                        <dd><a href="javascript:;">辅助</a></dd>
                        <dd>
                            <a href="javascript:;">通用弹层<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>功能演示</dd>
                                <dd>特殊示例</dd>
                                <dd>风格定制</dd>
                            </dl>
                        </dd>
                        <dd>
                            <a href="javascript:;">日期时间<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>功能演示一</dd>
                                <dd>功能演示二</dd>
                                <dd>设定主题</dd>
                                <dd>特殊示例</dd>
                            </dl>
                        </dd>
                        <dd>
                            <a href="javascript:;">表格<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>简单数据表格</dd>
                                <dd>列宽自动分配</dd>
                                <dd>赋值已知数据</dd>
                                <dd>转化静态表格</dd>
                                <dd>开启分页</dd>
                                <dd>自定义分页</dd>
                                <dd>开启头部工具栏</dd>
                                <dd>开启合计行</dd>
                                <dd>高度最大适应</dd>
                                <dd>开启复选框</dd>
                                <dd>开启单选框</dd>
                                <dd>开启单元格编辑</dd>
                                <dd>加入表单元素</dd>
                                <dd>设置单元格样式</dd>
                                <dd>固定列</dd>
                                <dd>数据操作</dd>
                                <dd>解析任意数据格式</dd>
                                <dd>监听行事件</dd>
                                <dd>数据表格的重载</dd>
                                <dd>设置初始排序</dd>
                                <dd>监听单元格事件</dd>
                                <dd>复杂表头</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">分页<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>功能演示一</dd>
                                <dd>功能演示二</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">上传<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>功能演示一</dd>
                                <dd>功能演示二</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">颜色选择器</a></dd>
                        <dd><a href="javascript:;">滑块组件</a></dd>
                        <dd><a href="javascript:;">评分</a></dd>
                        <dd><a href="javascript:;">轮播</a></dd>
                        <dd><a href="javascript:;">流加载</a></dd>
                        <dd><a href="javascript:;">工具</a></dd>
                        <dd><a href="javascript:;">代码修饰</a></dd>
                        <dd><a href="javascript:;">即时聊天</a></dd>
                    </dl>
                </li>
                <!-- 页面 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-template"></i>
                        <cite>页面</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">个人主页</a></dd>
                        <dd><a href="tonxun.html">通讯录</a></dd>
                        <dd><a href="javascript:;">客户列表</a></dd>
                        <dd><a href="javascript:;">商品列表</a></dd>
                        <dd><a href="liuyan.html">留言板</a></dd>
                        <dd><a href="search.html">搜索结果</a></dd>
                        <dd><a href="javascript:;">注册</a></dd>
                        <dd><a href="javascript:;">登入</a></dd>
                        <dd><a href="javascript:;">忘记密码</a></dd>
                        <dd><a href="javascript:;">404</a></dd>
                        <dd><a href="javascript:;">错误提示</a></dd>
                        <dd><a href="javascript:;">内嵌页面<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>百度一下</dd>
                                <dd>layui官网</dd>
                                <dd>layuiAdmin官网</dd>
                            </dl>
                        </dd>
                    </dl>
                </li>
                <!-- 应用 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-app"></i>
                        <cite>应用</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">内容系统<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>文章列表</dd>
                                <dd>分类管理</dd>
                                <dd>评论管理</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">社区系统<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>帖子列表</dd>
                                <dd>回帖列表</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">消息中心</a></dd>
                        <dd><a href="javascript:;">工单系统</a></dd>
                    </dl>
                </li>
                <!-- 高级 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-seniorgaoji"></i>
                        <cite>高级</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">通讯系统</a></dd>
                        <dd><a href="javascript:;">Echarts集成<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl class="a">
                                <dd><a href="line.html">折线图</a></dd>
                                <dd><a href="bar.html">柱状图</a></dd>
                                <dd><a href="map.html">地图</a></dd>
                            </dl>
                        </dd>
                    </dl>
                </li>
                <!-- 用户 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-yonghu"></i>
                        <cite>用户</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">网站用户</a></dd>
                        <dd><a href="javascript:;">后台管理员</a></dd>
                        <dd><a href="javascript:;">角色管理</a></dd>
                    </dl>
                </li>
                <!-- 设置 -->
                <li>
                    <a href="javascript:;">
                        <i class="iconfont icon-shezhi"></i>
                        <cite>设置</cite>
                        <span class="nav-ssp spanSanjiaoX"></span>
                    </a>
                    <dl>
                        <dd><a href="javascript:;">系统设置<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>网站设置</dd>
                                <dd>邮件服务</dd>
                            </dl>
                        </dd>
                        <dd><a href="javascript:;">我的设置<span class="nav-ssp spanSanjiaoX"></span></a>
                            <dl>
                                <dd>我的资料</dd>
                                <dd>我的密码</dd>
                            </dl>
                        </dd>
                    </dl>
                </li>
                <span id="nav-ho"></span>
            </ul>
        </div>`;
            return A;
        },
        header: function () {
            let A = ` <ul class="header-left">
            <li>
                <a href="javascript:;" title="侧边伸缩">
                    <i class="iconfont icon-shensuoyou "></i>
                </a>
            </li>
            <li>
                <a href="javascript:;" title="前台">
                    <i class="iconfont icon-wangluo"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;" title="刷新">
                    <i class="iconfont icon-refresh"></i>
                </a>
            </li>
            <li>
                <input type="text" placeholder="搜索..." />
            </li>
            <span id="hea-ho1"></span>
        </ul>

        <ul class="header-right">
            <li>
                <a href="javascript:;">
                    <i class="iconfont icon-lingdang"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont icon-peise"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont icon-bianqian"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="iconfont icon-quanping"></i>
                </a>
            </li>
            <li>
                <a href="javascript:;" class="">
                    贤心
                    <span class="spanSanjiaoX"></span>
                </a>
                <dl class="Head-dl">
                    <dd><a href="javcscript:;">基本资料</a></dd>
                    <dd><a href="javcscript:;">修改密码</a></dd>
                    <dd><a href="javcscript:;">退出</a></dd>
                </dl>
            </li>
            <li id="vision">
                <a href="javascript:;">
                    <i class="iconfont icon-more1170511easyiconnet"></i>
                </a>
            </li>
            <span id="hea-ho2"></span>
        </ul>`;
            return A;
        },
        harbour: function () {
            let A = `<div id="harbour">
            </div>
            <div class="artBox">
                <div class="article-card-header">
                    版本信息
                </div>
        
                <div class="article-card-body">
                    <p>当前版本：layuiAdmin-v1.2.1 pro</p>
                    <p>基于框架：layui-v2.4.5</p>
                    <div>
                        <a href="javascript:;" class="article-btn">获取授权</a>
                        <a href="javascript:;" class="article-btn">下载新版</a>
                    </div>
                </div>
        
                <div class="article-card-header">
                    关于版权
                </div>
        
                <div class="article-card-body">
                    <blockquote>
                        layuiAdmin 受国家计算机软件著作权保护（登记号：
                        <a href="javascript:;">
                            2018SR410669
                        </a>
                        ），必须经
                        <a href="javascript:;">
                            官网
                        </a>
                        授权才可获得源文件使用权。不得恶意分享产品源代码、二次转售等，违者将承担相应的法律责任。
                    </blockquote>
                    <p>
                        © 2018
                        <a href="javascript:;">layui.com</a>
                        版权所有
                    </p>
                </div>
            </div>`;
            return A;
        }
    }
    // append   将新创建的节点插入到容器的内容底部
    // prepend  ...........................顶部
    
    $('header').append(currency.header())
    $('nav').append(currency.nav());
    $('body').append(currency.harbour());
}

//适应分辨率
var hei = $(window).height();
$(document.body).css({ "height": hei });
$('#harbour').css({ 'top': -hei })

/* span动画 */
spanAnimate();
function spanAnimate() {
    //导航条soan
    var NLtop = null;
    $('nav ul li').on({
        mouseenter: function () {
            let ULtop = NLtop = $(this).position().top;
            $('#nav-ho').stop().animate({
                top: ULtop,
                height: '56px'
            }, 150);
        },      //可以通过on({ fun1,fun2 }) 一个对象绑定多个事件

    });

    $('nav ul').on({
        mouseleave: function () {
            $('#nav-ho').animate({
                top: (NLtop + 28),
                height: '0px'
            }, 100);
        },
    });


    /* 头部span动画 */
    var HLleft = null;
    var HLwidth = null;
    //左ul
    $('header ul.header-left li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho1').stop().animate({
                'left': HLle + 20,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-left').on({
        mouseleave: function () {
            $('#hea-ho1').stop().animate({
                left: HLleft + 20 + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
    //右ul
    $('header ul.header-right li').on({
        mouseenter: function () {
            let HLle = HLleft = $(this).position().left;
            let HLwid = HLwidth = $(this).width();
            $('#hea-ho2').stop().animate({
                'left': HLle,
                'width': HLwid
            }, 200);
        },

    });
    $('header ul.header-right').on({
        mouseleave: function () {
            $('#hea-ho2').stop().animate({
                left: HLleft + (HLwidth / 2),
                width: 0
            }, 150);
        },
    });
}

/* nav导航显示隐藏 */
LIHover();
function LIHover() {
    //开关点击的下级页面
    $("nav ul li a").click(function () {
        let dl = nee = $(this).next('dl');
        // dl.toggle()
        dl.toggle();
        triangle($(this).parent());


        // 关闭上个点开的同级页面
        let dls = $(this).parent().siblings().children('dl');
        let lis = $(this).parent().siblings();
        dls.hide();
        SDD();
        if ($(this).next('dl').css('display') != 'none') {
            triangle(lis);
        }
    });
}

// 导航三角动画封装
function triangle(_this) {
    let spTop = {
        'border-color': 'transparent',
        'border-bottom-color': 'rgba(255,255,255,1)',
        'margin-top': '-9px',
    }
    let spBoT = {
        'border-color': 'transparent',
        'border-top-color': 'rgba(255,255,255,.7)',
        'margin-top': '-3px'
    }
    let span = _this.children("a").children('span');
    if (span.length == 1) {
        if (_this.children("dl").css('display') != 'none') {    //打开
            span.css(spTop)
        } else {
            span.css(spBoT)
        }
    } else {
        span.css(spBoT)
    }
}


/* 头部点击隐藏显示 */
HeadLI();
function SDD(){
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '220px' })
    $('nav').css({ width: '220px' })
    cite.show();
    $('main').css({ 'left': '220px', width: 'calc(100% - 220px)' })
    $('.Nav-header').children('span').css('display', 'inline');
    $('.Nav-header').children('img').css('display', 'none');

}
function HDD() {
    let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
    $('header ul').first().css({ 'left': '60px' })
    $('nav').css({ width: '60px' })
    $('Nav-header').css({ 'background-image': "url('../img/logo.png') " })
    cite.hide();
    $('main').css({ 'left': '60px', width: 'calc(100% - 60px)' })

    $('nav dl').hide();
    $('.Nav-header').children('span').css('display', 'none');
    $('.Nav-header').children('img').css('display', 'inline');
}
function HeadLI() {
    let i = $('.header-left li').first().children('a');
    i.click(function () {
        let width = $('nav').width();
        let cite = $('.nav-box').children('ul').children('li').children('a').children('cite');
        if (width <= 60) {//left = 220
            SDD();
            $(this).children('i').toggleClass("icon-shensuozuo").addClass("icon-shensuoyou");
        } else {
            HDD();
            $(this).children('i').toggleClass("icon-shensuoyou").addClass("icon-shensuozuo");
        }
    })
}

//头部三点的缩放 和 贤心的hove
artBox()
function artBox() {
    $('#vision').on({
        click: function () {
            $('#harbour').toggle();
            $('.artBox').css({ right: 0 });
        }
    });
    $('#harbour').on({
        click: function (event) {

            var evt = event.target;
            //事件，源 ( 点击的对象 )
            // event.srcElement ? event.srcElement : event.target;  //兼容写法

            // evt.id
            // evt.tagname  //得到响应源的“标签名”
            // evt.type  //“类型”
            // evt.value  //针对表单元素的“值”
            // evt.name  //针对表单元素的“name”属性
            // evt.classname
            // evt.parentElement  //“父级元素”
            // evt.getattribute  //“获得属性”，setattribute 为"设置属性"
            // evt.children
            // evt.lastChild
            // evt.ChildNode  //"子节点"
            // evt.selectedIndex
            if (evt.id == 'harbour') {
                // alert("s")
                $(this).toggle();
                $('.artBox').css({ right: -300 })
            }
        }
    });

    var xianxin = $('.Head-dl').parent();
    var span = xianxin.children('a').children('span');
    xianxin.on({
        mouseenter: function () {
            $('.Head-dl').stop().slideDown();
            span.css({
                'border-color': 'transparent',
                'border-bottom-color': 'rgba(0,0,0)',
                'margin-top': '-9px',
            })
        },
        mouseleave: function () {
            $('.Head-dl').stop().slideUp();
            span.css({
                'border-color': 'transparent',
                'border-top-color': 'rgba(0,0,0)',
                'margin-top': '-3px',
            })
        }
    });
}
