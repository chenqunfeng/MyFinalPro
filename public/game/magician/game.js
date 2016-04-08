;/*!/js/config.js*/
var game_config;
var _defaultConfig;
var iPhone = "iPhone";
var scale = 0.5
if (navigator.userAgent.indexOf(iPhone) != -1) scale = 1; 
cqfSDK.loadConfig(function(userConfig){
	_defaultConfig = userConfig
	game_config.beforeLoading(_defaultConfig)
	game_config.res_config = {
		"resources":
			[
			  {"name":"startBtn","type":"image","url":_defaultConfig["startBtn"]},
			  {"name":"startTitle","type":"image","url":_defaultConfig["startTitle"]},
			  {"name":"ball1","type":"image","url":_defaultConfig["ball1"]},
			  {"name":"ball2","type":"image","url":_defaultConfig["ball2"]},
			  {"name":"ball3","type":"image","url":_defaultConfig["ball3"]},
			  {"name":"ball4","type":"image","url":_defaultConfig["ball4"]},
			  {"name":"ball5","type":"image","url":_defaultConfig["ball5"]},
			  {"name":"ball6","type":"image","url":_defaultConfig["ball6"]},
			  {"name":"ball7","type":"image","url":_defaultConfig["ball7"]},
			  {"name":"ball8","type":"image","url":_defaultConfig["ball8"]},
			  {"name":"ball9","type":"image","url":_defaultConfig["ball9"]},
			  {"name":"ball10","type":"image","url":_defaultConfig["ball10"]},
			  {"name":"ballboom1","type":"image","url":_defaultConfig["ballboom1"]},
			  {"name":"ballboom2","type":"image","url":_defaultConfig["ballboom2"]},
			  {"name":"ballboom3","type":"image","url":_defaultConfig["ballboom3"]},
			  {"name":"ballboom4","type":"image","url":_defaultConfig["ballboom4"]},
			  {"name":"ballboom5","type":"image","url":_defaultConfig["ballboom5"]},
			  {"name":"ballboom6","type":"image","url":_defaultConfig["ballboom6"]},
			  {"name":"ballboom7","type":"image","url":_defaultConfig["ballboom7"]},
			  {"name":"box1","type":"image","url":_defaultConfig["box1"]},
			  {"name":"box2","type":"image","url":_defaultConfig["box2"]},
			  {"name":"box3","type":"image","url":_defaultConfig["box3"]},
			  {"name":"box4","type":"image","url":_defaultConfig["box4"]},
			  {"name":"box5","type":"image","url":_defaultConfig["box5"]},
			  {"name":"magician1","type":"image","url":_defaultConfig["magician1"]},
			  {"name":"magician2","type":"image","url":_defaultConfig["magician2"]},
			  {"name":"magician3","type":"image","url":_defaultConfig["magician3"]},
			  {"name":"littleMagician","type":"image","url":_defaultConfig["littleMagician"]},
			  {"name":"scoreBar","type":"image","url":_defaultConfig["scoreBar"]},
			  {"name":"gameBg","type":"image","url":_defaultConfig["gameBg"]},
			  {"name":"startBg","type":"image","url":_defaultConfig["startBg"]},
			],

		"groups":
			[
		        {"name":"preload","keys":"startBtn,startTitle,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ballboom1,ballboom2,ballboom3,ballboom4,ballboom5,ballboom6,ballboom7,box1,box2,box3,box4,box5,magician1,magician2,magician3,littleMagician,scoreBar,startBg,gameBg"}
			]
	};
    var support = [].map && document.createElement("canvas").getContext;
	if (support) {
	    egret_h5.startGame();
	}
	else {
	    alert("Egret 不支持您当前的浏览器")
	}

});
var tapScreenCount = 0;
var startGameTime = 0;
var gameScore = 0;
var overGameTime = 0;
game_config = (function(){
	var res_config = {}
	var balloonJson = {
	  "mc": {
	    "run11": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "p1",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run12": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "p2",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run13": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "p3",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run1": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b1",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run2": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b2",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run3": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b3",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run4": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b4",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run5": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b5",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run6": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b6",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run7": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b7",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run8": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b8",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run9": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b9",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "run10": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "b10",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death1": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break7_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death2": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break3_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death3": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break2_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death4": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break4_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death5": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break7_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death6": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break1_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death7": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break5_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death8": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break6_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death9": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break7_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death10": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break7_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death11": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break3_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death12": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break2_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death13": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "break4_0",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    }
	  },
	  "res": {
	    "b10":"ball10",
	    "b1":"ball1",
	    "b2":"ball2",
	    "b3":"ball3",
	    "b4":"ball4",
	    "b5":"ball5",
	    "b6":"ball6",
	    "b7":"ball7",
	    "b8":"ball8",
	    "b9":"ball9",
	    "break5_0":"ballboom5",
	    "break6_0":"ballboom6",    
	    "break7_0":"ballboom7",
	    "break8_0":"ballboom1",
	    "break1_0":"ballboom1",
	    "break2_0":"ballboom2",
	    "break3_0":"ballboom3",
	    "break4_0":"ballboom4"
	  }
	};
	var boxJson = {
	  "mc": {
	    "run": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "normal-1",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "death": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "dead1",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        },
	        {
	          "res": "dead2",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "win": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "victory-1",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    },
	    "fall": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "drop-out-1",
	          "x": 0,
	          "y": 0,
	          "duration": 9
	        },
	        {
	          "res": "drop-out-2",
	          "x": 0,
	          "y": 0,
	          "duration": 9
	        }
	      ]
	    }
	  },
	  "res": {
	    "dead1":"box5",
	    "dead2":"box4",
	    "drop-out-1":"box2",
	    "drop-out-2":"box3",
	    "normal-1":"box1",
	    "victory-1":"box1"
	  }
	};
	var magicianJson = {
	  "mc": {
	    "run": {
	      "frameRate": 60,
	      "frames": [
	        {
	          "res": "01",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        },
	        {
	          "res": "02",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        },
	        {
	          "res": "03",
	          "x": 0,
	          "y": 0,
	          "duration": 6
	        }
	      ]
	    }
	  },
	  "res": {
	    "01":"magician1",
	    "02":"magician2",
	    "03":"magician3"
	  }
	};
	var beforeLoading = function(defaultConfig){
		defaultConfig.game_name && (document.title = defaultConfig.game_name);
		document.querySelector('.loadingContent img').src = defaultConfig.loading;
		document.querySelector('.loadingLogo img').src = defaultConfig.logo;
	}
	var loading = function(){
		document.querySelector('#loading').style.display = "block";
	};
	var loaded = function(){
		document.querySelector('#loading').style.display = "none";
	};
	var textureRender = function(obj){
		var temp,textureData,spritesSheet;
		temp = obj;
		temp && temp._movieClipData && (
			textureData = temp._movieClipData.textureData,
			spritesSheet = temp._movieClipData.spriteSheet
			)
		if (textureData && spritesSheet._textureMap){
			spritesSheet = spritesSheet._textureMap
			for (key in textureData) {
				spritesSheet[key] = RES.getRes(textureData[key])
				if (textureData[key] == "magician1") temp._textureToRender = RES.getRes("magician1")
			}
		}
		// return temp
	};
	return {
		balloonJson: balloonJson,
		wolfJson: boxJson,
		magicianJson: magicianJson,
		res_config: res_config,
		loaded: loaded,
		loading: loading,
		textureRender: textureRender,
		beforeLoading: beforeLoading
	}
})()
;/*!/js/egret_require.js*/
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

egret_h5 = {};

egret_h5.prefix = "";

egret_h5.loadScript = function (list, callback) {
    var loaded = 0;
    var loadNext = function () {
        egret_h5.loadSingleScript(egret_h5.prefix + list[loaded], function () {
            loaded++;
            if (loaded >= list.length) {
                callback();
            }
            else {
                loadNext();
            }
        })
    };
    loadNext();
};

egret_h5.loadSingleScript = function (src, callback) {
    var s = document.createElement('script');
    if (s.hasOwnProperty("async")) {
        s.async = false;
    }
    s.src = src;
    s.addEventListener('load', function () {
        this.removeEventListener('load', arguments.callee, false);
        callback();
    }, false);
    document.body.appendChild(s);
};

egret_h5.preloadScript = function (list, prefix) {
    if (!egret_h5.preloadList) {
        egret_h5.preloadList = [];
    }
    egret_h5.preloadList = egret_h5.preloadList.concat(list.map(function (item) {
        return prefix + item;
    }))
};

egret_h5.startLoading = function () {
    var list = egret_h5.preloadList;
    egret_h5.loadScript(list, egret_h5.startGame);
};
;/*!/js/egret_loader.js*/
function setStageSize() {
    if (/iphone/i.test(navigator.userAgent)) {
        window["client"] = "iphone";
    } else {
        window["client"] = "android";
    }
    /*全屏适配*/
    var winHeight;
    var winWidth;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    } else {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
    }
    var GameWin;
    if (window["client"] == "iphone") {
        GameWin = {w: 640, h: 1136}; //i6苹果分辨率
    } else {
        GameWin = {w: 320, h: 568};//安卓客户端考虑到性能，将分辨率降为i6分辨率的一半
    }
    var Gper = GameWin.h / GameWin.w;
    var per = winHeight / winWidth;

    if (per < Gper) {
        window["stage_width"] = GameWin.h / per;
        window["stage_height"] = GameWin.h;
    } else if (per >= Gper) {
        window["stage_width"] = GameWin.w;
        window["stage_height"] = GameWin.w * per;
    }
    egret.StageDelegate.getInstance().setDesignSize(window["stage_width"], window["stage_height"]);
    if (window["client"] == "android") {
        window["stage_width"] *= 2;
        window["stage_height"] *= 2;
    }
}


egret_h5.startGame = function () {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();

    setStageSize();//调用上面写好的方法

    context.stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.SHOW_ALL;
    context.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
//此处为SHOW_ALL适配策略
    //WebGL is a Egret's beta property. It's off by default.
    //WebGL是egret的Beta特性，默认关闭
    var rendererType = 0;
    if (rendererType == 1) {// egret.WebGLUtils.checkCanUseWebGL()) {
        console.log("Use WebGL mode");
        context.rendererContext = new egret.WebGLRenderer();
    }
    else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }

    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();

    var rootClass;
    if(document_class){
        rootClass = egret.getDefinitionByName(document_class);
    }
    if(rootClass) {
        var rootContainer = new rootClass();
        if(rootContainer instanceof egret.DisplayObjectContainer){
            context.stage.addChild(rootContainer);
        }
        else{
            throw new Error("Document Class must be the subclass to egret.DisplayObjectContainer!");
        }
    }
    else{
        throw new Error("Document Class is not found！");
    }

    //处理屏幕大小改变
    //implement for screen size change
    var resizeTimer = null;
    var doResize = function () {
        context.stage.changeSize();
        resizeTimer = null;
    };
    window.onresize = function () {
        if (resizeTimer == null) {
            resizeTimer = setTimeout(doResize, 300);
        }
    };

}
;/*!/js/game.js*/
var egret;
(function(d) {
	d.egret_string_code = {};
	d.egret_string_code[-1] = "不存在的stringId:{0}";
	d.egret_string_code[1E3] = "Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
	d.egret_string_code[1001] = "该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级";
	d.egret_string_code[1002] = "egret.Ticker是框架内部使用的单例，不允许在外部实例化，计时器请使用egret.Timer类！";
	d.egret_string_code[1003] = "Ticker#setTimeout方法即将废弃,请使用egret.setTimeout";
	d.egret_string_code[1004] = "ExternalInterface调用了js没有注册的方法: {0}";
	d.egret_string_code[1005] = "设置了已经存在的blendMode: {0}";
	d.egret_string_code[1006] = "child不在当前容器内";
	d.egret_string_code[1007] = "提供的索引超出范围";
	d.egret_string_code[1008] = "child未被addChild到该parent";
	d.egret_string_code[1009] = "设置了已经存在的适配模式:{0}";
	d.egret_string_code[1010] = "addEventListener侦听函数不能为空";
	d.egret_string_code[1011] = 'BitmapText找不到文字所对应的纹理:"{0}"';
	d.egret_string_code[1012] = "egret.BitmapTextSpriteSheet已废弃，请使用egret.BitmapFont代替。";
	d.egret_string_code[1013] = "TextField.setFocus 没有实现";
	d.egret_string_code[1014] = "Ease不能被实例化";
	d.egret_string_code[1015] = "xml not found!";
	d.egret_string_code[1016] = "{0}已经废弃";
	d.egret_string_code[1017] = "JSON文件格式不正确: {0}\ndata: {1}";
	d.egret_string_code[1018] = "egret_html5_localStorage.setItem保存失败,key={0}&value={1}";
	d.egret_string_code[1019] = "网络异常:{0}";
	d.egret_string_code[1020] = "无法初始化着色器";
	d.egret_string_code[1021] = "当前浏览器不支持webgl";
	d.egret_string_code[1022] = "{0} ArgumentError";
	d.egret_string_code[1023] = "此方法在ScrollView内不可用!";
	d.egret_string_code[1024] = "使用了尚未实现的ScaleMode";
	d.egret_string_code[1025] = "遇到文件尾";
	d.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
	d.egret_string_code[1027] = "DecodingError";
	d.egret_string_code[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。";
	d.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
	d.egret_string_code[1030] = "该API已废弃";
	d.egret_string_code[2E3] = "RES.createGroup()传入了配置中不存在的键值: {0}";
	d.egret_string_code[2001] = 'RES加载了不存在或空的资源组:"{0}"';
	d.egret_string_code[3E3] = "主题配置文件加载失败: {0}";
	d.egret_string_code[3001] = "找不到主题中所配置的皮肤类名: {0}";
	d.egret_string_code[3002] = '索引:"{0}"超出集合元素索引范围';
	d.egret_string_code[3003] = "在此组件中不可用，若此组件为容器类，请使用";
	d.egret_string_code[3004] = "addChild(){0}addElement()代替";
	d.egret_string_code[3005] = "addChildAt(){0}addElementAt()代替";
	d.egret_string_code[3006] = "removeChild(){0}removeElement()代替";
	d.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()代替";
	d.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()代替";
	d.egret_string_code[3009] = "swapChildren(){0}swapElements()代替";
	d.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()代替";
	d.egret_string_code[3011] = '索引:"{0}"超出可视元素索引范围';
	d.egret_string_code[3012] = "此方法在Scroller组件内不可用!";
	d.egret_string_code[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！";
	d.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
	d.egret_string_code[4001] = "Abstract class can not be instantiated!";
	d.egret_string_code[4002] = "Unnamed data!";
	d.egret_string_code[4003] = "Nonsupport version!";
	d.egret_string_code[3100] = "当前浏览器不支持WebSocket";
	d.egret_string_code[3101] = "请先连接WebSocket";
	d.egret_string_code[3102] = "请先设置type为二进制类型"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(d, g) {
	function e() {
		this.constructor = d
	}
	for (var c in g) g.hasOwnProperty(c) && (d[c] = g[c]);
	e.prototype = g.prototype;
	d.prototype = new e
};
(function(d) {
	function g(c) {
		for (var b = [], a = 1; a < arguments.length; a++) b[a - 1] = arguments[a];
		if (a = d.egret_string_code[c]) for (var f = b.length, p = 0; p < f; p++) a = a.replace("{" + p + "}", b[p]);
		return a
	}
	var e = function() {
			function c() {}
			c.openLogByType = function(b) {
				null == c.logFuncs && (c.logFuncs = {
					error: console.error,
					debug: console.debug,
					warn: console.warn,
					info: console.info,
					log: console.log
				});
				switch (b) {
				case c.OFF:
					console.error = function() {};
				case c.ERROR:
					console.warn = function() {};
				case c.WARN:
					console.info = function() {}, console.log = function() {};
				case c.INFO:
					console.debug = function() {}
				}
				switch (b) {
				case c.ALL:
					console.debug = c.logFuncs.debug;
				case c.INFO:
					console.log = c.logFuncs.log, console.info = c.logFuncs.info;
				case c.WARN:
					console.warn = c.logFuncs.warn;
				case c.ERROR:
					console.error = c.logFuncs.error
				}
			};
			c.fatal = function(b, a) {
				void 0 === a && (a = null);
				d.Logger.traceToConsole("Fatal", b, a);
				throw Error(d.Logger.getTraceCode("Fatal", b, a));
			};
			c.info = function(b, a) {
				void 0 === a && (a = null);
				d.Logger.traceToConsole("Info", b, a)
			};
			c.warning = function(b, a) {
				void 0 === a && (a = null);
				d.Logger.traceToConsole("Warning", b, a)
			};
			c.fatalWithErrorId = function(b) {
				for (var a = [], f = 1; f < arguments.length; f++) a[f - 1] = arguments[f];
				a.unshift(b);
				(a = g.apply(null, a)) ? c.fatal(a) : c.warning(g(-1, b))
			};
			c.infoWithErrorId = function(b) {
				for (var a = [], f = 1; f < arguments.length; f++) a[f - 1] = arguments[f];
				a.unshift(b);
				(a = g.apply(null, a)) ? c.info(a) : c.warning(g(-1, b))
			};
			c.warningWithErrorId = function(b) {
				for (var a = [], f = 1; f < arguments.length; f++) a[f - 1] = arguments[f];
				a.unshift(b);
				(a = g.apply(null, a)) ? c.warning(a) : c.warning(g(-1, b))
			};
			c.traceToConsole = function(b, a, f) {
				// console.log(d.Logger.getTraceCode(b, a, f))
			};
			c.getTraceCode = function(b, a, f) {
				return "[" + b + "]" + a + (null == f ? "" : ":" + f)
			};
			c.ALL = "all";
			c.DEBUG = "debug";
			c.INFO = "info";
			c.WARN = "warn";
			c.ERROR = "error";
			c.OFF = "off";
			return c
		}();
	d.Logger = e;
	e.prototype.__class__ = "egret.Logger";
	d.getString = g
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {
				this._hashCode = d.hashCount++
			}
			Object.defineProperty(d.prototype, "hashCode", {
				get: function() {
					return this._hashCode
				},
				enumerable: !0,
				configurable: !0
			});
			d.hashCount = 1;
			return d
		}();
	d.HashObject = g;
	g.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a) {
				void 0 === a && (a = 300);
				d.call(this);
				this.objectPool = [];
				this._length = 0;
				1 > a && (a = 1);
				this.autoDisposeTime = a;
				this.frameCount = 0
			}
			__extends(c, d);
			var b = c.prototype;
			b._checkFrame = function() {
				this.frameCount--;
				0 >= this.frameCount && this.dispose()
			};
			Object.defineProperty(b, "length", {
				get: function() {
					return this._length
				},
				enumerable: !0,
				configurable: !0
			});
			b.push = function(a) {
				var f = this.objectPool; - 1 == f.indexOf(a) && (f.push(a), a.__recycle && a.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, c._callBackList.push(this)))
			};
			b.pop = function() {
				if (0 == this._length) return null;
				this._length--;
				return this.objectPool.pop()
			};
			b.dispose = function() {
				0 < this._length && (this.objectPool = [], this._length = 0);
				this.frameCount = 0;
				var a = c._callBackList,
					f = a.indexOf(this); - 1 != f && a.splice(f, 1)
			};
			c._callBackList = [];
			return c
		}(d.HashObject);
	d.Recycler = g;
	g.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(d) {
	d.__START_TIME;
	d.getTimer = function() {
		return Date.now() - d.__START_TIME
	}
})(egret || (egret = {}));
(function(d) {
	d.__callLaterFunctionList = [];
	d.__callLaterThisList = [];
	d.__callLaterArgsList = [];
	d.callLater = function(g, e) {
		for (var c = [], b = 2; b < arguments.length; b++) c[b - 2] = arguments[b];
		d.__callLaterFunctionList.push(g);
		d.__callLaterThisList.push(e);
		d.__callLaterArgsList.push(c)
	};
	d.__callAsyncFunctionList = [];
	d.__callAsyncThisList = [];
	d.__callAsyncArgsList = [];
	d.__callAsync = function(g, e) {
		for (var c = [], b = 2; b < arguments.length; b++) c[b - 2] = arguments[b];
		d.__callAsyncFunctionList.push(g);
		d.__callAsyncThisList.push(e);
		d.__callAsyncArgsList.push(c)
	}
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {}
			var c = e.prototype;
			c.call = function(b) {
				this.callback && this.callback.call(this.thisObject, b)
			};
			c.dispose = function() {
				this.thisObject = this.callback = null;
				e.__freeList.push(this)
			};
			e.push = function(b, a) {
				var f;
				f = e.__freeList.length ? e.__freeList.pop() : new d.RenderCommand;
				f.callback = b;
				f.thisObject = a;
				d.MainContext.__DRAW_COMMAND_LIST.push(f)
			};
			e.__freeList = [];
			return e
		}();
	d.RenderCommand = g;
	g.prototype.__class__ = "egret.RenderCommand"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f, p) {
				void 0 === f && (f = !1);
				void 0 === p && (p = !1);
				e.call(this);
				this.data = null;
				this._type = "";
				this._cancelable = this._bubbles = !1;
				this._eventPhase = 2;
				this._target = this._currentTarget = null;
				this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
				this.isNew = !0;
				this._type = a;
				this._bubbles = f;
				this._cancelable = p
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "type", {
				get: function() {
					return this._type
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "bubbles", {
				get: function() {
					return this._bubbles
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "cancelable", {
				get: function() {
					return this._cancelable
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "eventPhase", {
				get: function() {
					return this._eventPhase
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "currentTarget", {
				get: function() {
					return this._currentTarget
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "target", {
				get: function() {
					return this._target
				},
				enumerable: !0,
				configurable: !0
			});
			b.isDefaultPrevented = function() {
				return this._isDefaultPrevented
			};
			b.preventDefault = function() {
				this._cancelable && (this._isDefaultPrevented = !0)
			};
			b.stopPropagation = function() {
				this._bubbles && (this._isPropagationStopped = !0)
			};
			b.stopImmediatePropagation = function() {
				this._bubbles && (this._isPropagationImmediateStopped = !0)
			};
			b._reset = function() {
				this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
			};
			b.__recycle = function() {
				this.data = this._target = this._currentTarget = null
			};
			c._dispatchByTarget = function(a, f, p, b, c, e) {
				void 0 === c && (c = !1);
				void 0 === e && (e = !1);
				var h = a.eventRecycler;
				h || (h = a.eventRecycler = new d.Recycler);
				var g = h.pop();
				g ? g._type = p : g = new a(p);
				g._bubbles = c;
				g._cancelable = e;
				if (b) for (var l in b) g[l] = b[l], null !== g[l] && (b[l] = null);
				a = f.dispatchEvent(g);
				h.push(g);
				return a
			};
			c._getPropertyData = function(a) {
				var f = a._props;
				f || (f = a._props = {});
				return f
			};
			c.dispatchEvent = function(a, f, p, b) {
				void 0 === p && (p = !1);
				var d = c._getPropertyData(c);
				void 0 != b && (d.data = b);
				c._dispatchByTarget(c, a, f, d, p)
			};
			c.ADDED_TO_STAGE = "addedToStage";
			c.REMOVED_FROM_STAGE = "removedFromStage";
			c.ADDED = "added";
			c.REMOVED = "removed";
			c.COMPLETE = "complete";
			c.LOOP_COMPLETE = "loopcomplete";
			c.ENTER_FRAME = "enterFrame";
			c.RENDER = "render";
			c.FINISH_RENDER = "finishRender";
			c.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
			c.LEAVE_STAGE = "leaveStage";
			c.RESIZE = "resize";
			c.CHANGE = "change";
			c.ACTIVATE = "activate";
			c.DEACTIVATE = "deactivate";
			c.CLOSE = "close";
			c.CONNECT = "connect";
			return c
		}(d.HashObject);
	d.Event = g;
	g.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(b, a, f) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				d.call(this, b, a, f);
				this._status = 0
			}
			__extends(c, d);
			Object.defineProperty(c.prototype, "status", {
				get: function() {
					return this._status
				},
				enumerable: !0,
				configurable: !0
			});
			c.dispatchHTTPStatusEvent = function(b, a) {
				null == c.httpStatusEvent && (c.httpStatusEvent = new c(c.HTTP_STATUS));
				c.httpStatusEvent._status = a;
				b.dispatchEvent(c.httpStatusEvent)
			};
			c.HTTP_STATUS = "httpStatus";
			c.httpStatusEvent = null;
			return c
		}(d.Event);
	d.HTTPStatusEvent = g;
	g.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(b, a, f) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				e.call(this, b, a, f)
			}
			__extends(c, e);
			c.dispatchIOErrorEvent = function(b) {
				d.Event._dispatchByTarget(c, b, c.IO_ERROR)
			};
			c.IO_ERROR = "ioError";
			return c
		}(d.Event);
	d.IOErrorEvent = g;
	g.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f, p, b, c, d, g, k, l, n) {
				void 0 === f && (f = !0);
				void 0 === p && (p = !0);
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				void 0 === d && (d = 0);
				void 0 === g && (g = !1);
				void 0 === k && (k = !1);
				void 0 === n && (n = !1);
				e.call(this, a, f, p);
				this._stageY = this._stageX = 0;
				this.touchPointID = NaN;
				this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1;
				this.touchPointID = b;
				this._stageX = c;
				this._stageY = d;
				this.ctrlKey = g;
				this.altKey = k;
				this.touchDown = n
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "stageX", {
				get: function() {
					return this._stageX
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "stageY", {
				get: function() {
					return this._stageY
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "localX", {
				get: function() {
					return this._currentTarget.globalToLocal(this._stageX, this._stageY, d.Point.identity).x
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "localY", {
				get: function() {
					return this._currentTarget.globalToLocal(this._stageX, this._stageY, d.Point.identity).y
				},
				enumerable: !0,
				configurable: !0
			});
			c.dispatchTouchEvent = function(a, f, p, b, t, e, g, k, l) {
				void 0 === p && (p = 0);
				void 0 === b && (b = 0);
				void 0 === t && (t = 0);
				void 0 === e && (e = !1);
				void 0 === g && (g = !1);
				void 0 === k && (k = !1);
				void 0 === l && (l = !1);
				var n = d.Event._getPropertyData(c);
				n.touchPointID = p;
				n._stageX = b;
				n._stageY = t;
				n.ctrlKey = e;
				n.altKey = g;
				n.shiftKey = k;
				n.touchDown = l;
				d.Event._dispatchByTarget(c, a, f, n, !0, !0)
			};
			c.TOUCH_TAP = "touchTap";
			c.TOUCH_MOVE = "touchMove";
			c.TOUCH_BEGIN = "touchBegin";
			c.TOUCH_END = "touchEnd";
			c.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
			c.TOUCH_ROLL_OUT = "touchRollOut";
			c.TOUCH_ROLL_OVER = "touchRollOver";
			c.TOUCH_OUT = "touchOut";
			c.TOUCH_OVER = "touchOver";
			return c
		}(d.Event);
	d.TouchEvent = g;
	g.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(b, a, f) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				e.call(this, b, a, f)
			}
			__extends(c, e);
			c.dispatchTimerEvent = function(b, a) {
				d.Event._dispatchByTarget(c, b, a)
			};
			c.TIMER = "timer";
			c.TIMER_COMPLETE = "timerComplete";
			return c
		}(d.Event);
	d.TimerEvent = g;
	g.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(b, a, f, p) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				void 0 === p && (p = "");
				e.call(this, b, a, f);
				this.text = p
			}
			__extends(c, e);
			c.dispatchTextEvent = function(b, a, f) {
				var p = d.Event._getPropertyData(c);
				p.text = f;
				d.Event._dispatchByTarget(c, b, a, p)
			};
			c.LINK = "link";
			return c
		}(d.Event);
	d.TextEvent = g;
	g.prototype.__class__ = "egret.TextEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(b, a, f, p, c) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				void 0 === p && (p = 0);
				void 0 === c && (c = 0);
				e.call(this, b, a, f);
				this.bytesTotal = this.bytesLoaded = 0;
				this.bytesLoaded = p;
				this.bytesTotal = c
			}
			__extends(c, e);
			c.dispatchProgressEvent = function(b, a, f, p) {
				void 0 === f && (f = 0);
				void 0 === p && (p = 0);
				d.Event._dispatchByTarget(c, b, a, {
					bytesLoaded: f,
					bytesTotal: p
				})
			};
			c.PROGRESS = "progress";
			c.SOCKET_DATA = "socketData";
			return c
		}(d.Event);
	d.ProgressEvent = g;
	g.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.CAPTURING_PHASE = 1;
			d.AT_TARGET = 2;
			d.BUBBLING_PHASE = 3;
			return d
		}();
	d.EventPhase = g;
	g.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				void 0 === a && (a = null);
				e.call(this);
				this._captureEventsMap = this._eventsMap = this._eventTarget = null;
				this._eventTarget = a ? a : this
			}
			__extends(c, e);
			var b = c.prototype;
			b.addEventListener = function(a, f, p, b, c) {
				void 0 === b && (b = !1);
				void 0 === c && (c = 0);
				"undefined" === typeof b && (b = !1);
				"undefined" === typeof c && (c = 0);
				f || d.Logger.fatalWithErrorId(1010);
				b ? (this._captureEventsMap || (this._captureEventsMap = {}), b = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), b = this._eventsMap);
				var e = b[a];
				e || (e = b[a] = []);
				this._insertEventBin(e, f, p, c)
			};
			b._insertEventBin = function(a, f, p, b, c) {
				void 0 === c && (c = void 0);
				for (var d = -1, e = a.length, g = 0; g < e; g++) {
					var l = a[g];
					if (l.listener == f && l.thisObject == p && l.display == c) return !1; - 1 == d && l.priority < b && (d = g)
				}
				f = {
					listener: f,
					thisObject: p,
					priority: b
				};
				c && (f.display = c); - 1 != d ? a.splice(d, 0, f) : a.push(f);
				return !0
			};
			b.removeEventListener = function(a, f, p, b) {
				void 0 === b && (b = !1);
				if (b = b ? this._captureEventsMap : this._eventsMap) {
					var c = b[a];
					c && (this._removeEventBin(c, f, p), 0 == c.length && delete b[a])
				}
			};
			b._removeEventBin = function(a, f, p, b, c) {
				void 0 === b && (b = void 0);
				void 0 === c && (c = 0);
				for (var d = a.length; c < d; c++) {
					var e = a[c];
					if (e.listener == f && e.thisObject == p && e.display == b) return a.splice(c, 1), !0
				}
				return !1
			};
			b.hasEventListener = function(a) {
				return !!(this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a])
			};
			b.willTrigger = function(a) {
				return this.hasEventListener(a)
			};
			b.dispatchEvent = function(a) {
				a._reset();
				a._target = this._eventTarget;
				a._currentTarget = this._eventTarget;
				return this._notifyListener(a)
			};
			b._notifyListener = function(a) {
				var f = 1 == a._eventPhase ? this._captureEventsMap : this._eventsMap;
				if (!f) return !0;
				f = f[a._type];
				if (!f) return !0;
				var p = f.length;
				if (0 == p) return !0;
				for (var f = f.concat(), b = 0; b < p; b++) {
					var c = f[b];
					c.listener.call(c.thisObject, a);
					if (a._isPropagationImmediateStopped) break
				}
				return !a._isDefaultPrevented
			};
			b.dispatchEventWith = function(a, f, p) {
				void 0 === f && (f = !1);
				d.Event.dispatchEvent(this, a, f, p)
			};
			return c
		}(d.HashObject);
	d.EventDispatcher = g;
	g.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null;
				this.reuseEvent = new d.Event("")
			}
			__extends(c, e);
			var b = c.prototype;
			b.run = function() {
				d.Ticker.getInstance().run();
				d.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
				d.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
				this.touchContext.run();
				this._profileInstance = d.Profiler.getInstance()
			};
			b.renderLoop = function(a) {
				if (0 < d.__callLaterFunctionList.length) {
					var f = d.__callLaterFunctionList;
					d.__callLaterFunctionList = [];
					var p = d.__callLaterThisList;
					d.__callLaterThisList = [];
					var b = d.__callLaterArgsList;
					d.__callLaterArgsList = []
				}
				a = this.stage;
				var t = c.cachedEvent;
				t._type = d.Event.RENDER;
				this.dispatchEvent(t);
				d.Stage._invalidateRenderFlag && (this.broadcastRender(), d.Stage._invalidateRenderFlag = !1);
				f && this.doCallLaterList(f, p, b);
				0 < d.__callAsyncFunctionList.length && this.doCallAsyncList();
				f = this.rendererContext;
				f.onRenderStart();
				f.clearScreen();
				c.__DRAW_COMMAND_LIST = [];
				c._renderLoopPhase = "updateTransform";
				a._updateTransform();
				c._renderLoopPhase = "draw";
				t._type = d.Event.FINISH_UPDATE_TRANSFORM;
				this.dispatchEvent(t);
				c.__use_new_draw ? this._draw(f) : a._draw(f);
				t._type = d.Event.FINISH_RENDER;
				this.dispatchEvent(t);
				this._profileInstance._isRunning && this._profileInstance._drawProfiler(f);
				f.onRenderFinish()
			};
			b._draw = function(a) {
				for (var f = c.__DRAW_COMMAND_LIST, p = f.length, b = 0; b < p; b++) {
					var d = f[b];
					d.call(a);
					d.dispose()
				}
			};
			b.broadcastEnterFrame = function(a) {
				a = this.reuseEvent;
				a._type = d.Event.ENTER_FRAME;
				this.dispatchEvent(a);
				for (var f = d.DisplayObject._enterFrameCallBackList.concat(), p = f.length, b = 0; b < p; b++) {
					var c = f[b];
					a._target = c.display;
					a._currentTarget = c.display;
					c.listener.call(c.thisObject, a)
				}
				f = d.Recycler._callBackList;
				for (b = f.length - 1; 0 <= b; b--) f[b]._checkFrame()
			};
			b.broadcastRender = function() {
				var a = this.reuseEvent;
				a._type = d.Event.RENDER;
				for (var f = d.DisplayObject._renderCallBackList.concat(), p = f.length, b = 0; b < p; b++) {
					var c = f[b],
						e = c.display;
					a._target = e;
					a._currentTarget = e;
					c.listener.call(c.thisObject, a)
				}
			};
			b.doCallLaterList = function(a, f, p) {
				for (var b = a.length, c = 0; c < b; c++) {
					var d = a[c];
					null != d && d.apply(f[c], p[c])
				}
			};
			b.doCallAsyncList = function() {
				var a = d.__callAsyncFunctionList.concat(),
					f = d.__callAsyncThisList.concat(),
					p = d.__callAsyncArgsList.concat();
				d.__callAsyncFunctionList.length = 0;
				d.__callAsyncThisList.length = 0;
				for (var b = d.__callAsyncArgsList.length = 0; b < a.length; b++) {
					var c = a[b];
					null != c && c.apply(f[b], p[b])
				}
			};
			c.deviceType = null;
			c.DEVICE_PC = "web";
			c.DEVICE_MOBILE = "native";
			c.RUNTIME_HTML5 = "runtimeHtml5";
			c.RUNTIME_NATIVE = "runtimeNative";
			c.__DRAW_COMMAND_LIST = [];
			c.__use_new_draw = !0;
			c.cachedEvent = new d.Event("");
			return c
		}(d.EventDispatcher);
	d.MainContext = g;
	g.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
		if (!this.navigator) return !0;
		var d = navigator.userAgent.toLowerCase();
		return -1 != d.indexOf("mobile") || -1 != d.indexOf("android")
	},
	testRuntimeType = function() {
		return this.navigator ? !0 : !1
	};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(d) {
	var g = function() {
			function e() {
				this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
				this._calculatePreDrawCount = !0;
				this._txt = null;
				this._tick = 0;
				this._maxDeltaTime = 500;
				this._totalDeltaTime = 0;
				this._isRunning = !1
			}
			var c = e.prototype;
			e.getInstance = function() {
				null == e.instance && (e.instance = new e);
				return e.instance
			};
			c.stop = function() {
				if (this._isRunning) {
					this._isRunning = !1;
					d.Ticker.getInstance().unregister(this.update, this);
					var b = d.MainContext.instance;
					b.removeEventListener(d.Event.ENTER_FRAME, this.onEnterFrame, this);
					b.removeEventListener(d.Event.RENDER, this.onStartRender, this);
					b.removeEventListener(d.Event.FINISH_RENDER, this.onFinishRender, this);
					b.removeEventListener(d.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
				}
			};
			c.run = function() {
				null == this._txt && (this._txt = new d.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._parent = new d.DisplayObjectContainer);
				if (!this._isRunning) {
					this._isRunning = !0;
					d.Ticker.getInstance().register(this.update, this);
					var b = d.MainContext.instance;
					b.addEventListener(d.Event.ENTER_FRAME, this.onEnterFrame, this);
					b.addEventListener(d.Event.RENDER, this.onStartRender, this);
					b.addEventListener(d.Event.FINISH_RENDER, this.onFinishRender, this);
					b.addEventListener(d.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
				}
			};
			c._drawProfiler = function(b) {
				"_drawWebGL" in b && b._drawWebGL();
				this._calculatePreDrawCount = !1;
				this._txt._updateTransform();
				this._txt._draw(b)
			};
			c._setTxtFontSize = function(b) {
				this._txt.size = b
			};
			c.onEnterFrame = function(b) {
				this._lastTime = d.getTimer()
			};
			c.onStartRender = function(b) {
				b = d.getTimer();
				this._logicPerformanceCost = b - this._lastTime;
				this._lastTime = b
			};
			c.onFinishUpdateTransform = function(b) {
				b = d.getTimer();
				this._updateTransformPerformanceCost = b - this._lastTime;
				this._lastTime = b
			};
			c.onFinishRender = function(b) {
				b = d.getTimer();
				this._renderPerformanceCost = b - this._lastTime;
				this._lastTime = b
			};
			c.update = function(b) {
				this._tick++;
				this._totalDeltaTime += b;
				if (this._totalDeltaTime >= this._maxDeltaTime) {
					b = this._preDrawCount.toString();
					var a = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(d.MainContext.instance.rendererContext.renderCost).toString();
					this._txt.text = "draw:" + b + "\ncost:" + a + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
					this._tick = this._totalDeltaTime = 0
				}
				this._preDrawCount = 0;
				this._calculatePreDrawCount = !0
			};
			c.onDrawImage = function() {
				this._calculatePreDrawCount && this._preDrawCount++
			};
			return e
		}();
	d.Profiler = g;
	g.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._timeScale = 1;
				this._paused = !1;
				this._callIndex = -1;
				this.callBackList = [];
				null != c.instance && d.Logger.fatalWithErrorId(1002)
			}
			__extends(c, e);
			var b = c.prototype;
			b.run = function() {
				d.__START_TIME = (new Date).getTime();
				d.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
			};
			b.update = function(a) {
				if (!this._paused) {
					a *= this._timeScale;
					a *= this._timeScale;
					this._callList = this.callBackList.concat();
					for (this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
						var f = this._callList[this._callIndex];
						f.listener.call(f.thisObject, a)
					}
					this._callIndex = -1;
					this._callList = null
				}
			};
			b.register = function(a, f, p) {
				void 0 === p && (p = 0);
				this._insertEventBin(this.callBackList, a, f, p)
			};
			b.unregister = function(a, f) {
				this._removeEventBin(this.callBackList, a, f);
				this._callList && -1 < this._callIndex && this._removeEventBin(this._callList, a, f, null, this._callIndex + 1)
			};
			b.setTimeout = function(a, f, p) {
				for (var b = [], c = 3; c < arguments.length; c++) b[c - 3] = arguments[c];
				d.Logger.warningWithErrorId(1003);
				d.setTimeout.apply(null, [a, f, p].concat(b))
			};
			b.setTimeScale = function(a) {
				this._timeScale = a
			};
			b.getTimeScale = function() {
				return this._timeScale
			};
			b.pause = function() {
				this._paused = !0
			};
			b.resume = function() {
				this._paused = !1
			};
			c.getInstance = function() {
				null == c.instance && (c.instance = new c);
				return c.instance
			};
			return c
		}(d.EventDispatcher);
	d.Ticker = g;
	g.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.LEFT = "left";
			d.RIGHT = "right";
			d.CENTER = "center";
			d.JUSTIFY = "justify";
			d.CONTENT_JUSTIFY = "contentJustify";
			return d
		}();
	d.HorizontalAlign = g;
	g.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.TOP = "top";
			d.BOTTOM = "bottom";
			d.MIDDLE = "middle";
			d.JUSTIFY = "justify";
			d.CONTENT_JUSTIFY = "contentJustify";
			return d
		}();
	d.VerticalAlign = g;
	g.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f) {
				void 0 === f && (f = 0);
				e.call(this);
				this._currentCount = 0;
				this._running = !1;
				this.lastTime = 0;
				this.delay = a;
				this.repeatCount = f
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "currentCount", {
				get: function() {
					return this._currentCount
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "running", {
				get: function() {
					return this._running
				},
				enumerable: !0,
				configurable: !0
			});
			b.reset = function() {
				this.stop();
				this._currentCount = 0
			};
			b.start = function() {
				this._running || (this.lastTime = d.getTimer(), d.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
			};
			b.stop = function() {
				this._running && (d.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
			};
			b.onEnterFrame = function(a) {
				a = d.getTimer();
				a - this.lastTime > this.delay && (this.lastTime = a, this._currentCount++, d.TimerEvent.dispatchTimerEvent(this, d.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), d.TimerEvent.dispatchTimerEvent(this, d.TimerEvent.TIMER_COMPLETE)))
			};
			return c
		}(d.EventDispatcher);
	d.Timer = g;
	g.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(d) {
	function g(d) {
		d = d.prototype ? d.prototype : Object.getPrototypeOf(d);
		if (d.hasOwnProperty("__class__")) return d.__class__;
		var c = d.constructor.toString(),
			b = c.indexOf("("),
			c = c.substring(9, b);
		Object.defineProperty(d, "__class__", {
			value: c,
			enumerable: !1,
			writable: !0
		});
		return c
	}
	d.getQualifiedClassName = g;
	d.getQualifiedSuperclassName = function(d) {
		d = d.prototype ? d.prototype : Object.getPrototypeOf(d);
		if (d.hasOwnProperty("__superclass__")) return d.__superclass__;
		var c = Object.getPrototypeOf(d);
		if (null == c) return null;
		c = g(c.constructor);
		if (!c) return null;
		Object.defineProperty(d, "__superclass__", {
			value: c,
			enumerable: !1,
			writable: !0
		});
		return c
	}
})(egret || (egret = {}));
(function(d) {
	var g = {};
	d.getDefinitionByName = function(d) {
		if (!d) return null;
		var c = g[d];
		if (c) return c;
		for (var b = d.split("."), a = b.length, c = __global, f = 0; f < a; f++) if (c = c[b[f]], !c) return null;
		return g[d] = c
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(d) {
	function g(b) {
		for (var a in e) {
			var f = e[a];
			f.delay -= b;
			0 >= f.delay && (f.listener.apply(f.thisObject, f.params), delete e[a])
		}
	}
	var e = {},
		c = 0;
	d.setTimeout = function(b, a, f) {
		for (var p = [], v = 3; v < arguments.length; v++) p[v - 3] = arguments[v];
		p = {
			listener: b,
			thisObject: a,
			delay: f,
			params: p
		};
		0 == c && d.Ticker.getInstance().register(g, null);
		c++;
		e[c] = p;
		return c
	};
	d.clearTimeout = function(b) {
		delete e[b]
	}
})(egret || (egret = {}));
(function(d) {
	d.hasDefinition = function(g) {
		return d.getDefinitionByName(g) ? !0 : !1
	}
})(egret || (egret = {}));
(function(d) {
	d.toColorString = function(d) {
		if (isNaN(d) || 0 > d) d = 0;
		16777215 < d && (d = 16777215);
		for (d = d.toString(16).toUpperCase(); 6 > d.length;) d = "0" + d;
		return "#" + d
	}
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f, p, b, d, c) {
				void 0 === a && (a = 1);
				void 0 === f && (f = 0);
				void 0 === p && (p = 0);
				void 0 === b && (b = 1);
				void 0 === d && (d = 0);
				void 0 === c && (c = 0);
				e.call(this);
				this.a = a;
				this.b = f;
				this.c = p;
				this.d = b;
				this.tx = d;
				this.ty = c
			}
			__extends(c, e);
			var b = c.prototype;
			b.prepend = function(a, f, p, b, d, c) {
				var e = this.tx;
				if (1 != a || 0 != f || 0 != p || 1 != b) {
					var g = this.a,
						l = this.c;
					this.a = g * a + this.b * p;
					this.b = g * f + this.b * b;
					this.c = l * a + this.d * p;
					this.d = l * f + this.d * b
				}
				this.tx = e * a + this.ty * p + d;
				this.ty = e * f + this.ty * b + c;
				return this
			};
			b.append = function(a, f, b, d, c, e) {
				var g = this.a,
					k = this.b,
					l = this.c,
					n = this.d;
				if (1 != a || 0 != f || 0 != b || 1 != d) this.a = a * g + f * l, this.b = a * k + f * n, this.c = b * g + d * l, this.d = b * k + d * n;
				this.tx = c * g + e * l + this.tx;
				this.ty = c * k + e * n + this.ty;
				return this
			};
			b.prependTransform = function(a, f, b, c, t, e, g, k, l) {
				if (t % 360) {
					var n = d.NumberUtils.cos(t);
					t = d.NumberUtils.sin(t)
				} else n = 1, t = 0;
				if (k || l) this.tx -= k, this.ty -= l;
				e || g ? (this.prepend(n * b, t * b, -t * c, n * c, 0, 0), this.prepend(d.NumberUtils.cos(g), d.NumberUtils.sin(g), -d.NumberUtils.sin(e), d.NumberUtils.cos(e), a, f)) : this.prepend(n * b, t * b, -t * c, n * c, a, f);
				return this
			};
			b.appendTransform = function(a, f, b, c, t, e, g, k, l) {
				if (t % 360) {
					var n = d.NumberUtils.cos(t);
					t = d.NumberUtils.sin(t)
				} else n = 1, t = 0;
				e || g ? (this.append(d.NumberUtils.cos(g), d.NumberUtils.sin(g), -d.NumberUtils.sin(e), d.NumberUtils.cos(e), a, f), this.append(n * b, t * b, -t * c, n * c, 0, 0)) : this.append(n * b, t * b, -t * c, n * c, a, f);
				if (k || l) this.tx -= k * this.a + l * this.c, this.ty -= k * this.b + l * this.d;
				return this
			};
			b.rotate = function(a) {
				var f = Math.cos(a);
				a = Math.sin(a);
				var b = this.a,
					c = this.c,
					d = this.tx;
				this.a = b * f - this.b * a;
				this.b = b * a + this.b * f;
				this.c = c * f - this.d * a;
				this.d = c * a + this.d * f;
				this.tx = d * f - this.ty * a;
				this.ty = d * a + this.ty * f;
				return this
			};
			b.skew = function(a, f) {
				this.append(d.NumberUtils.cos(f), d.NumberUtils.sin(f), -d.NumberUtils.sin(a), d.NumberUtils.cos(a), 0, 0);
				return this
			};
			b.scale = function(a, f) {
				this.a *= a;
				this.d *= f;
				this.c *= a;
				this.b *= f;
				this.tx *= a;
				this.ty *= f;
				return this
			};
			b.translate = function(a, f) {
				this.tx += a;
				this.ty += f;
				return this
			};
			b.identity = function() {
				this.a = this.d = 1;
				this.b = this.c = this.tx = this.ty = 0;
				return this
			};
			b.identityMatrix = function(a) {
				this.a = a.a;
				this.b = a.b;
				this.c = a.c;
				this.d = a.d;
				this.tx = a.tx;
				this.ty = a.ty;
				return this
			};
			b.invert = function() {
				var a = this.a,
					f = this.b,
					b = this.c,
					c = this.d,
					d = this.tx,
					e = a * c - f * b;
				this.a = c / e;
				this.b = -f / e;
				this.c = -b / e;
				this.d = a / e;
				this.tx = (b * this.ty - c * d) / e;
				this.ty = -(a * this.ty - f * d) / e;
				return this
			};
			c.transformCoords = function(a, f, b) {
				var c = d.Point.identity;
				c.x = a.a * f + a.c * b + a.tx;
				c.y = a.d * b + a.b * f + a.ty;
				return c
			};
			b.toArray = function(a) {
				this.array || (this.array = new Float32Array(9));
				a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
				this.array[8] = 1;
				return this.array
			};
			c.identity = new c;
			c.DEG_TO_RAD = Math.PI / 180;
			return c
		}(d.HashObject);
	d.Matrix = g;
	g.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a, f) {
				void 0 === a && (a = 0);
				void 0 === f && (f = 0);
				d.call(this);
				this.x = a;
				this.y = f
			}
			__extends(c, d);
			var b = c.prototype;
			b.clone = function() {
				return new c(this.x, this.y)
			};
			b.equals = function(a) {
				return this.x == a.x && this.y == a.y
			};
			c.distance = function(a, f) {
				return Math.sqrt((a.x - f.x) * (a.x - f.x) + (a.y - f.y) * (a.y - f.y))
			};
			c.identity = new c(0, 0);
			return c
		}(d.HashObject);
	d.Point = g;
	g.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a, f, b, c) {
				void 0 === a && (a = 0);
				void 0 === f && (f = 0);
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				d.call(this);
				this.x = a;
				this.y = f;
				this.width = b;
				this.height = c
			}
			__extends(c, d);
			var b = c.prototype;
			Object.defineProperty(b, "right", {
				get: function() {
					return this.x + this.width
				},
				set: function(a) {
					this.width = a - this.x
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "bottom", {
				get: function() {
					return this.y + this.height
				},
				set: function(a) {
					this.height = a - this.y
				},
				enumerable: !0,
				configurable: !0
			});
			b.initialize = function(a, f, b, c) {
				this.x = a;
				this.y = f;
				this.width = b;
				this.height = c;
				return this
			};
			b.contains = function(a, f) {
				return this.x <= a && this.x + this.width >= a && this.y <= f && this.y + this.height >= f
			};
			b.intersects = function(a) {
				return Math.max(this.x, a.x) <= Math.min(this.right, a.right) && Math.max(this.y, a.y) <= Math.min(this.bottom, a.bottom)
			};
			b.setEmpty = function() {
				this.height = this.width = this.y = this.x = 0
			};
			b.clone = function() {
				return new c(this.x, this.y, this.width, this.height)
			};
			b.containsPoint = function(a) {
				return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
			};
			c.identity = new c(0, 0, 0, 0);
			return c
		}(d.HashObject);
	d.Rectangle = g;
	g.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._isSupportDOMParser = this._xmlDict = this._parser = null;
				this._xmlDict = {};
				window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
			}
			__extends(c, e);
			var b = c.prototype;
			c.getInstance = function() {
				c._instance || (c._instance = new c);
				return c._instance
			};
			b.parserXML = function(a) {
				for (var f = 0;
				"\n" == a.charAt(f) || "\t" == a.charAt(f) || "\r" == a.charAt(f) || " " == a.charAt(f);) f++;
				0 != f && (a = a.substring(f, a.length));
				this._isSupportDOMParser ? f = this._parser.parseFromString(a, "text/xml") : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(a));
				null == f && d.Logger.infoWithErrorId(1015);
				return f
			};
			c._instance = null;
			return c
		}(d.HashObject);
	d.SAXParser = g;
	g.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
(function(d) {
	var g = function(a) {
			function b() {
				a.call(this);
				this._designHeight = this._designWidth = 0;
				this._scaleY = this._scaleX = 1;
				this._stageHeight = this._stageWidth = this._offSetY = 0
			}
			__extends(b, a);
			var v = b.prototype;
			b.getInstance = function() {
				null == b.instance && (c.initialize(), b.instance = new b);
				return b.instance
			};
			v.setDesignSize = function(a, f, b) {
				this._designWidth = a;
				this._designHeight = f;
				b && (d.Logger.warningWithErrorId(1001), this._setResolutionPolicy(b))
			};
			v._setResolutionPolicy = function(a) {
				this._resolutionPolicy = a;
				a.init(this);
				a._apply(this, this._designWidth, this._designHeight)
			};
			v.getScaleX = function() {
				return this._scaleX
			};
			v.getScaleY = function() {
				return this._scaleY
			};
			v.getOffSetY = function() {
				return this._offSetY
			};
			b.canvas_name = "egretCanvas";
			b.egret_root_div = "gameDiv";
			b.canvas_div_name = "canvasDiv";
			return b
		}(d.HashObject);
	d.StageDelegate = g;
	g.prototype.__class__ = "egret.StageDelegate";
	var e = function() {
			function a(f, b) {
				this._containerStrategy = f;
				this._contentStrategy = b
			}
			var b = a.prototype;
			b.init = function(a) {
				this._containerStrategy.init(a);
				this._contentStrategy.init(a)
			};
			b._apply = function(a, f, b) {
				this._containerStrategy._apply(a, f, b);
				this._contentStrategy._apply(a, f, b)
			};
			return a
		}();
	d.ResolutionPolicy = e;
	e.prototype.__class__ = "egret.ResolutionPolicy";
	var c = function() {
			function a() {}
			var p = a.prototype;
			a.initialize = function() {
				a.EQUAL_TO_FRAME = new b
			};
			p.init = function(a) {};
			p._apply = function(a, f, b) {};
			p._setupContainer = function() {
				var a = document.body,
					f;
				a && (f = a.style) && (f.paddingTop = f.paddingTop || "0px", f.paddingRight = f.paddingRight || "0px", f.paddingBottom = f.paddingBottom || "0px", f.paddingLeft = f.paddingLeft || "0px", f.borderTop = f.borderTop || "0px", f.borderRight = f.borderRight || "0px", f.borderBottom = f.borderBottom || "0px", f.borderLeft = f.borderLeft || "0px", f.marginTop = f.marginTop || "0px", f.marginRight = f.marginRight || "0px", f.marginBottom = f.marginBottom || "0px", f.marginLeft = f.marginLeft || "0px")
			};
			return a
		}();
	d.ContainerStrategy = c;
	c.prototype.__class__ = "egret.ContainerStrategy";
	var b = function(a) {
			function b() {
				a.apply(this, arguments)
			}
			__extends(b, a);
			b.prototype._apply = function(a) {
				this._setupContainer()
			};
			return b
		}(c);
	d.EqualToFrame = b;
	b.prototype.__class__ = "egret.EqualToFrame";
	e = function() {
		function a() {}
		var b = a.prototype;
		b.init = function(a) {};
		b._apply = function(a, f, b) {};
		b.setEgretSize = function(a, f, b, p, c, e) {
			void 0 === e && (e = 0);
			d.StageDelegate.getInstance()._stageWidth = Math.round(a);
			d.StageDelegate.getInstance()._stageHeight = Math.round(f);
			a = document.getElementById(g.canvas_div_name);
			f = document.getElementById(g.egret_root_div);
			a || (a = d.Browser.getInstance().$new("div"), a.id = g.canvas_div_name, f.appendChild(a));
			a.style.width = b + "px";
			a.style.height = p + "px";
			f.style.width = b + "px";
			f.style.height = p + "px";
			f.style.top = e + "px"
		};
		b._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		b._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return a
	}();
	d.ContentStrategy = e;
	e.prototype.__class__ = "egret.ContentStrategy";
	var a = function(a) {
			function b(p) {
				void 0 === p && (p = 0);
				a.call(this);
				this.minWidth = NaN;
				this.minWidth = p
			}
			__extends(b, a);
			b.prototype._apply = function(a, f, b) {
				f = this._getClientWidth();
				var p = this._getClientHeight(),
					c = p / b,
					d = f / c,
					e = 1;
				0 != this.minWidth && (e = Math.min(1, d / this.minWidth));
				this.setEgretSize(d / e, b, f, p * e);
				a._scaleX = c * e;
				a._scaleY = c * e
			};
			return b
		}(e);
	d.FixedHeight = a;
	a.prototype.__class__ = "egret.FixedHeight";
	a = function(a) {
		function b(p) {
			void 0 === p && (p = 0);
			a.call(this);
			this.minHeight = NaN;
			this.minHeight = p
		}
		__extends(b, a);
		b.prototype._apply = function(a, f, b) {
			b = this._getClientWidth();
			var p = this._getClientHeight(),
				c = b / f,
				d = p / c,
				e = 1;
			0 != this.minHeight && (e = Math.min(1, d / this.minHeight));
			this.setEgretSize(f, d / e, b * e, p, b * (1 - e) / 2);
			a._scaleX = c * e;
			a._scaleY = c * e
		};
		return b
	}(e);
	d.FixedWidth = a;
	a.prototype.__class__ = "egret.FixedWidth";
	a = function(a) {
		function b(p, c) {
			a.call(this);
			this.width = p;
			this.height = c
		}
		__extends(b, a);
		b.prototype._apply = function(a, f, b) {
			b = this.width;
			var p = this.height,
				c = b / f;
			this.setEgretSize(f, p / c, b, p);
			a._scaleX = c;
			a._scaleY = c
		};
		return b
	}(e);
	d.FixedSize = a;
	a.prototype.__class__ = "egret.FixedSize";
	a = function(a) {
		function b() {
			a.call(this)
		}
		__extends(b, a);
		b.prototype._apply = function(a, f, b) {
			this.setEgretSize(f, b, f, b, Math.floor((f - f) / 2));
			a._scaleX = 1;
			a._scaleY = 1
		};
		return b
	}(e);
	d.NoScale = a;
	a.prototype.__class__ = "egret.NoScale";
	a = function(a) {
		function b() {
			a.call(this)
		}
		__extends(b, a);
		b.prototype._apply = function(a, f, b) {
			var p = this._getClientWidth(),
				c = this._getClientHeight(),
				d = p,
				e = c,
				g = d / f < e / b ? d / f : e / b,
				d = f * g,
				e = b * g,
				p = Math.floor((p - d) / 2);
			a._offSetY = Math.floor((c - e) / 2);
			this.setEgretSize(f, b / 1, 1 * d, e, p, a._offSetY);
			a._scaleX = 1 * g;
			a._scaleY = 1 * g
		};
		return b
	}(e);
	d.ShowAll = a;
	a.prototype.__class__ = "egret.ShowAll";
	e = function(a) {
		function b() {
			a.call(this)
		}
		__extends(b, a);
		b.prototype._apply = function(a, f, b) {
			var p = this._getClientWidth(),
				c = this._getClientHeight(),
				p = p / f,
				c = c / b;
			this.setEgretSize(f, b, f * p, b * c);
			a._scaleX = p;
			a._scaleY = c
		};
		return b
	}(e);
	d.FullScreen = e;
	e.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._originalData = {};
				this._drawAreaList = []
			}
			__extends(c, e);
			var b = c.prototype;
			c.getInstance = function() {
				null == c.instance && (c.instance = new c);
				return c.instance
			};
			b.addDrawArea = function(a) {
				this._drawAreaList.push(a)
			};
			b.clearDrawArea = function() {
				this._drawAreaList = []
			};
			b.drawImage = function(a, f, b, v, e, m, g, k, l, n, q) {
				void 0 === q && (q = void 0);
				g = g || 0;
				k = k || 0;
				var s = f._texture_to_render;
				if (null != s && 0 != m && 0 != e && 0 != l && 0 != n) {
					var r = d.MainContext.instance.rendererContext._texture_scale_factor;
					e /= r;
					m /= r;
					if (0 != this._drawAreaList.length && d.MainContext.instance.rendererContext._cacheCanvasContext) {
						r = d.DisplayObject.getTransformBounds(f._getSize(c.identityRectangle), f._worldTransform);
						f._worldBounds.initialize(r.x, r.y, r.width, r.height);
						r = this._originalData;
						r.sourceX = b;
						r.sourceY = v;
						r.sourceWidth = e;
						r.sourceHeight = m;
						r.destX = g;
						r.destY = k;
						r.destWidth = l;
						r.destHeight = n;
						for (var u = this.getDrawAreaList(), x = 0; x < u.length; x++) if (!this.ignoreRender(f, u[x], r.destX, r.destY)) {
							a.drawImage(s, b, v, e, m, g, k, l, n, q);
							break
						}
					} else a.drawImage(s, b, v, e, m, g, k, l, n, q)
				}
			};
			b.ignoreRender = function(a, f, b, c) {
				var d = a._worldBounds;
				b *= a._worldTransform.a;
				c *= a._worldTransform.d;
				return d.x + d.width + b <= f.x || d.x + b >= f.x + f.width || d.y + d.height + c <= f.y || d.y + c >= f.y + f.height ? !0 : !1
			};
			b.getDrawAreaList = function() {
				var a;
				0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new d.Rectangle(0, 0, d.MainContext.instance.stage.stageWidth, d.MainContext.instance.stage.stageHeight)], d.MainContext.instance.stage.addEventListener(d.Event.RESIZE, this.onResize, this)), a = this._defaultDrawAreaList) : a = this._drawAreaList;
				return a
			};
			b.onResize = function() {
				d.MainContext.instance.stage.removeEventListener(d.Event.RESIZE, this.onResize, this);
				this._defaultDrawAreaList = null
			};
			c.identityRectangle = new d.Rectangle;
			return c
		}(d.HashObject);
	d.RenderFilter = g;
	g.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {}
			e.mapClass = function(c, b, a) {
				void 0 === a && (a = "");
				c = this.getKey(c) + "#" + a;
				this.mapClassDic[c] = b
			};
			e.getKey = function(c) {
				return "string" == typeof c ? c : d.getQualifiedClassName(c)
			};
			e.mapValue = function(c, b, a) {
				void 0 === a && (a = "");
				c = this.getKey(c) + "#" + a;
				this.mapValueDic[c] = b
			};
			e.hasMapRule = function(c, b) {
				void 0 === b && (b = "");
				var a = this.getKey(c) + "#" + b;
				return this.mapValueDic[a] || this.mapClassDic[a] ? !0 : !1
			};
			e.getInstance = function(c, b) {
				void 0 === b && (b = "");
				var a = this.getKey(c) + "#" + b;
				if (this.mapValueDic[a]) return this.mapValueDic[a];
				var f = this.mapClassDic[a];
				if (f) return f = new f, this.mapValueDic[a] = f, delete this.mapClassDic[a], f;
				throw Error(d.getString(1028, a));
			};
			e.mapClassDic = {};
			e.mapValueDic = {};
			return e
		}();
	d.Injector = g;
	g.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			return function() {
				this.type = null
			}
		}();
	d.Filter = g;
	g.prototype.__class__ = "egret.Filter"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(b, a) {
				d.call(this);
				this.blurX = b;
				this.blurY = a;
				this.type = "blur"
			}
			__extends(c, d);
			return c
		}(d.Filter);
	d.BlurFilter = g;
	g.prototype.__class__ = "egret.BlurFilter"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.NORMAL = "normal";
			d.ADD = "add";
			d.ERASE = "erase";
			d.ERASE_REVERSE = "eraseReverse";
			return d
		}();
	d.BlendMode = g;
	g.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.__hack_local_matrix = null;
				this._sizeDirty = this._normalDirty = !0;
				this._parent = this._texture_to_render = this.name = this._sizeChangeCallTarget = this._sizeChangeCallBack = null;
				this._y = this._x = 0;
				this._scaleY = this._scaleX = 1;
				this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
				this._visible = !0;
				this._rotation = 0;
				this._alpha = 1;
				this._skewY = this._skewX = 0;
				this._touchEnabled = !1;
				this._scrollRect = this.blendMode = null;
				this._explicitHeight = this._explicitWidth = NaN;
				this._hasHeightSet = this._hasWidthSet = !1;
				this._worldBounds = this.mask = null;
				this.worldAlpha = 1;
				this.needDraw = this._isContainer = !1;
				this._hitTestPointTexture = null;
				this._rectH = this._rectW = 0;
				this._stage = null;
				this._cacheAsBitmap = !1;
				this.renderTexture = null;
				this._cacheDirty = !1;
				this._filter = this._colorTransform = null;
				this._worldTransform = new d.Matrix;
				this._worldBounds = new d.Rectangle(0, 0, 0, 0);
				this._cacheBounds = new d.Rectangle(0, 0, 0, 0)
			}
			__extends(c, e);
			var b = c.prototype;
			b._setDirty = function() {
				this._normalDirty = !0
			};
			b.getDirty = function() {
				return this._normalDirty || this._sizeDirty
			};
			b._setParentSizeDirty = function() {
				var a = this._parent;
				!a || a._hasWidthSet || a._hasHeightSet || a._setSizeDirty()
			};
			b._setSizeDirty = function() {
				this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == this._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
			};
			b._clearDirty = function() {
				this._normalDirty = !1
			};
			b._clearSizeDirty = function() {
				this._sizeDirty = !1
			};
			Object.defineProperty(b, "parent", {
				get: function() {
					return this._parent
				},
				enumerable: !0,
				configurable: !0
			});
			b._parentChanged = function(a) {
				this._parent = a
			};
			Object.defineProperty(b, "x", {
				get: function() {
					return this._x
				},
				set: function(a) {
					this._setX(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setX = function(a) {
				d.NumberUtils.isNumber(a) && this._x != a && (this._x = a, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(b, "y", {
				get: function() {
					return this._y
				},
				set: function(a) {
					this._setY(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setY = function(a) {
				d.NumberUtils.isNumber(a) && this._y != a && (this._y = a, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(b, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._scaleX != a && (this._scaleX = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._scaleY != a && (this._scaleY = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "anchorOffsetX", {
				get: function() {
					return this._anchorOffsetX
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._anchorOffsetX != a && (this._anchorOffsetX = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "anchorOffsetY", {
				get: function() {
					return this._anchorOffsetY
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._anchorOffsetY != a && (this._anchorOffsetY = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "anchorX", {
				get: function() {
					return this._anchorX
				},
				set: function(a) {
					this._setAnchorX(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setAnchorX = function(a) {
				d.NumberUtils.isNumber(a) && this._anchorX != a && (this._anchorX = a, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(b, "anchorY", {
				get: function() {
					return this._anchorY
				},
				set: function(a) {
					this._setAnchorY(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setAnchorY = function(a) {
				d.NumberUtils.isNumber(a) && this._anchorY != a && (this._anchorY = a, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(b, "visible", {
				get: function() {
					return this._visible
				},
				set: function(a) {
					this._setVisible(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setVisible = function(a) {
				this._visible != a && (this._visible = a, this._setSizeDirty())
			};
			Object.defineProperty(b, "rotation", {
				get: function() {
					return this._rotation
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._rotation != a && (this._rotation = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "alpha", {
				get: function() {
					return this._alpha
				},
				set: function(a) {
					this._setAlpha(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setAlpha = function(a) {
				d.NumberUtils.isNumber(a) && this._alpha != a && (this._alpha = a, this._setDirty(), this._setCacheDirty())
			};
			Object.defineProperty(b, "skewX", {
				get: function() {
					return this._skewX
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._skewX != a && (this._skewX = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "skewY", {
				get: function() {
					return this._skewY
				},
				set: function(a) {
					d.NumberUtils.isNumber(a) && this._skewY != a && (this._skewY = a, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "touchEnabled", {
				get: function() {
					return this._touchEnabled
				},
				set: function(a) {
					this._setTouchEnabled(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setTouchEnabled = function(a) {
				this._touchEnabled = a
			};
			Object.defineProperty(b, "scrollRect", {
				get: function() {
					return this._scrollRect
				},
				set: function(a) {
					this._setScrollRect(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setScrollRect = function(a) {
				this._scrollRect = a;
				this._setSizeDirty()
			};
			Object.defineProperty(b, "measuredWidth", {
				get: function() {
					return this._measureBounds().width
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "measuredHeight", {
				get: function() {
					return this._measureBounds().height
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "explicitWidth", {
				get: function() {
					return this._explicitWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "explicitHeight", {
				get: function() {
					return this._explicitHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "width", {
				get: function() {
					return this._getWidth()
				},
				set: function(a) {
					this._setWidth(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._getWidth = function() {
				return this._getSize(d.Rectangle.identity).width
			};
			Object.defineProperty(b, "height", {
				get: function() {
					return this._getHeight()
				},
				set: function(a) {
					this._setHeight(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._getHeight = function() {
				return this._getSize(d.Rectangle.identity).height
			};
			b._setWidth = function(a) {
				this._setSizeDirty();
				this._setCacheDirty();
				this._explicitWidth = a;
				this._hasWidthSet = d.NumberUtils.isNumber(a)
			};
			b._setHeight = function(a) {
				this._setSizeDirty();
				this._setCacheDirty();
				this._explicitHeight = a;
				this._hasHeightSet = d.NumberUtils.isNumber(a)
			};
			b._draw = function(a) {
				if (this._visible && !this.drawCacheTexture(a)) {
					var f = d.MainContext.__use_new_draw && this._isContainer;
					this._filter && !f && a.setGlobalFilter(this._filter);
					this._colorTransform && !f && a.setGlobalColorTransform(this._colorTransform.matrix);
					a.setAlpha(this.worldAlpha, this.blendMode);
					a.setTransform(this._worldTransform);
					var b = this.mask || this._scrollRect;
					b && !f && a.pushMask(b);
					this._render(a);
					b && !f && a.popMask();
					this._colorTransform && !f && a.setGlobalColorTransform(null);
					this._filter && !f && a.setGlobalFilter(null)
				}
				this.destroyCacheBounds()
			};
			b._setGlobalFilter = function(a) {
				a.setGlobalFilter(this._filter)
			};
			b._removeGlobalFilter = function(a) {
				a.setGlobalFilter(null)
			};
			b._setGlobalColorTransform = function(a) {
				a.setGlobalColorTransform(this._colorTransform.matrix)
			};
			b._removeGlobalColorTransform = function(a) {
				a.setGlobalColorTransform(null)
			};
			b._pushMask = function(a) {
				a.setTransform(this._worldTransform);
				var f = this.mask || this._scrollRect;
				f && a.pushMask(f)
			};
			b._popMask = function(a) {
				a.popMask()
			};
			b.drawCacheTexture = function(a) {
				if (!1 == this._cacheAsBitmap) return !1;
				var f = this.getBounds(d.Rectangle.identity);
				if (this._cacheDirty || null == this._texture_to_render || 1 < f.width - this._texture_to_render._textureWidth || 1 < f.height - this._texture_to_render._textureHeight) this._cacheDirty = !this._makeBitmapCache();
				if (null == this._texture_to_render) return !1;
				var b = this._texture_to_render,
					f = b._offsetX,
					c = b._offsetY,
					e = b._textureWidth,
					b = b._textureHeight;
				this._updateTransform();
				a.setAlpha(this.worldAlpha, this.blendMode);
				a.setTransform(this._worldTransform);
				d.RenderFilter.getInstance().drawImage(a, this, 0, 0, e, b, f, c, e, b);
				return !0
			};
			b._updateTransform = function() {
				this._visible && (this._calculateWorldTransform(), "updateTransform" == d.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || this._cacheAsBitmap) && d.RenderCommand.push(this._draw, this))
			};
			b._calculateWorldTransform = function() {
				var a = this._worldTransform,
					f = this._parent;
				a.identityMatrix(f._worldTransform);
				this._getMatrix(a);
				var b = this._scrollRect;
				b && a.append(1, 0, 0, 1, -b.x, -b.y);
				this.worldAlpha = f.worldAlpha * this._alpha
			};
			b._render = function(a) {};
			b.getBounds = function(a, f) {
				void 0 === f && (f = !0);
				var b = this._measureBounds(),
					c = this._hasWidthSet ? this._explicitWidth : b.width,
					e = this._hasHeightSet ? this._explicitHeight : b.height;
				this._rectW = b.width;
				this._rectH = b.height;
				this._clearSizeDirty();
				var m = b.x,
					b = b.y,
					g = 0,
					k = 0;
				f && (0 != this._anchorX || 0 != this._anchorY ? (g = c * this._anchorX, k = e * this._anchorY) : (g = this._anchorOffsetX, k = this._anchorOffsetY));
				this._cacheBounds.initialize(m - g, b - k, c, e);
				c = this._cacheBounds;
				a || (a = new d.Rectangle);
				return a.initialize(c.x, c.y, c.width, c.height)
			};
			b.destroyCacheBounds = function() {
				this._cacheBounds.x = 0;
				this._cacheBounds.y = 0;
				this._cacheBounds.width = 0;
				this._cacheBounds.height = 0
			};
			b._getConcatenatedMatrix = function() {
				for (var a = c.identityMatrixForGetConcatenated.identity(), f = this; null != f;) {
					if (0 != f._anchorX || 0 != f._anchorY) {
						var b = f._getSize(d.Rectangle.identity);
						a.prependTransform(f._x, f._y, f._scaleX, f._scaleY, f._rotation, f._skewX, f._skewY, b.width * f._anchorX, b.height * f._anchorY)
					} else a.prependTransform(f._x, f._y, f._scaleX, f._scaleY, f._rotation, f._skewX, f._skewY, f._anchorOffsetX, f._anchorOffsetY);
					f._scrollRect && a.prepend(1, 0, 0, 1, -f._scrollRect.x, -f._scrollRect.y);
					f = f._parent
				}
				return a
			};
			b.localToGlobal = function(a, f, b) {
				void 0 === a && (a = 0);
				void 0 === f && (f = 0);
				var c = this._getConcatenatedMatrix();
				c.append(1, 0, 0, 1, a, f);
				b || (b = new d.Point);
				b.x = c.tx;
				b.y = c.ty;
				return b
			};
			b.globalToLocal = function(a, f, b) {
				void 0 === a && (a = 0);
				void 0 === f && (f = 0);
				var c = this._getConcatenatedMatrix();
				c.invert();
				c.append(1, 0, 0, 1, a, f);
				b || (b = new d.Point);
				b.x = c.tx;
				b.y = c.ty;
				return b
			};
			b.hitTest = function(a, f, b) {
				void 0 === b && (b = !1);
				if (!this._visible || !b && !this._touchEnabled) return null;
				b = this.getBounds(d.Rectangle.identity, !1);
				a -= b.x;
				f -= b.y;
				return 0 <= a && a < b.width && 0 <= f && f < b.height ? this.mask || this._scrollRect ? this._scrollRect && a > this._scrollRect.x && f > this._scrollRect.y && a < this._scrollRect.x + this._scrollRect.width && f < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= f && f < this.mask.y + this.mask.height ? this : null : this : null
			};
			b.hitTestPoint = function(a, f, b) {
				a = this.globalToLocal(a, f);
				return b ? (this._hitTestPointTexture || (this._hitTestPointTexture = new d.RenderTexture), b = this._hitTestPointTexture, b.drawToTexture(this), 0 != b.getPixel32(a.x - this._hitTestPointTexture._offsetX, a.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !! this.hitTest(a.x, a.y, !0)
			};
			b._getMatrix = function(a) {
				a || (a = d.Matrix.identity.identity());
				var f, b;
				b = this._getOffsetPoint();
				f = b.x;
				b = b.y;
				var c = this.__hack_local_matrix;
				c ? (a.append(c.a, c.b, c.c, c.d, c.tx, c.ty), a.append(1, 0, 0, 1, -f, -b)) : a.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, f, b);
				return a
			};
			b._getSize = function(a) {
				if (this._hasHeightSet && this._hasWidthSet) return this._clearSizeDirty(), a.initialize(0, 0, this._explicitWidth, this._explicitHeight);
				this._measureSize(a);
				this._hasWidthSet && (a.width = this._explicitWidth);
				this._hasHeightSet && (a.height = this._explicitHeight);
				return a
			};
			b._measureSize = function(a) {
				this._sizeDirty ? (a = this._measureBounds(), this._rectW = a.width, this._rectH = a.height, this._clearSizeDirty()) : (a.width = this._rectW, a.height = this._rectH);
				a.x = 0;
				a.y = 0;
				return a
			};
			b._measureBounds = function() {
				return d.Rectangle.identity.initialize(0, 0, 0, 0)
			};
			b._getOffsetPoint = function() {
				var a = this._anchorOffsetX,
					f = this._anchorOffsetY;
				if (0 != this._anchorX || 0 != this._anchorY) f = this._getSize(d.Rectangle.identity), a = this._anchorX * f.width, f = this._anchorY * f.height;
				var b = d.Point.identity;
				b.x = a;
				b.y = f;
				return b
			};
			b._onAddToStage = function() {
				this._stage = d.MainContext.instance.stage;
				d.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
			};
			b._onRemoveFromStage = function() {
				d.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
			};
			Object.defineProperty(b, "stage", {
				get: function() {
					return this._stage
				},
				enumerable: !0,
				configurable: !0
			});
			b.addEventListener = function(a, f, b, v, t) {
				void 0 === v && (v = !1);
				void 0 === t && (t = 0);
				e.prototype.addEventListener.call(this, a, f, b, v, t);
				((v = a == d.Event.ENTER_FRAME) || a == d.Event.RENDER) && this._insertEventBin(v ? c._enterFrameCallBackList : c._renderCallBackList, f, b, t, this)
			};
			b.removeEventListener = function(a, f, b, v) {
				void 0 === v && (v = !1);
				e.prototype.removeEventListener.call(this, a, f, b, v);
				((v = a == d.Event.ENTER_FRAME) || a == d.Event.RENDER) && this._removeEventBin(v ? c._enterFrameCallBackList : c._renderCallBackList, f, b, this)
			};
			b.dispatchEvent = function(a) {
				if (!a._bubbles) return e.prototype.dispatchEvent.call(this, a);
				for (var f = [], b = this; b;) f.push(b), b = b._parent;
				a._reset();
				this._dispatchPropagationEvent(a, f);
				return !a._isDefaultPrevented
			};
			b._dispatchPropagationEvent = function(a, f, b) {
				b = f.length;
				for (var c = 1, d = b - 1; 0 <= d; d--) {
					var e = f[d];
					a._currentTarget = e;
					a._target = this;
					a._eventPhase = c;
					e._notifyListener(a);
					if (a._isPropagationStopped || a._isPropagationImmediateStopped) return
				}
				e = f[0];
				a._currentTarget = e;
				a._target = this;
				a._eventPhase = 2;
				e._notifyListener(a);
				if (!a._isPropagationStopped && !a._isPropagationImmediateStopped) for (c = 3, d = 1; d < b && (e = f[d], a._currentTarget = e, a._target = this, a._eventPhase = c, e._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); d++);
			};
			b.willTrigger = function(a) {
				for (var f = this; f;) {
					if (f.hasEventListener(a)) return !0;
					f = f._parent
				}
				return !1
			};
			Object.defineProperty(b, "cacheAsBitmap", {
				get: function() {
					return this._cacheAsBitmap
				},
				set: function(a) {
					(this._cacheAsBitmap = a) ? d.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
				},
				enumerable: !0,
				configurable: !0
			});
			b._makeBitmapCache = function() {
				this.renderTexture || (this.renderTexture = new d.RenderTexture);
				var a = this.renderTexture.drawToTexture(this);
				this._texture_to_render = a ? this.renderTexture : null;
				return a
			};
			b._setCacheDirty = function(a) {
				void 0 === a && (a = !0);
				this._cacheDirty = a
			};
			c.getTransformBounds = function(a, f) {
				var b = a.x,
					c = a.y,
					d = a.width,
					e = a.height;
				(b || c) && f.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
				var g = d * f.a,
					d = d * f.b,
					k = e * f.c,
					e = e * f.d,
					l = f.tx,
					n = f.ty,
					q = l,
					s = l,
					r = n,
					u = n;
				(b = g + l) < q ? q = b : b > s && (s = b);
				(b = g + k + l) < q ? q = b : b > s && (s = b);
				(b = k + l) < q ? q = b : b > s && (s = b);
				(c = d + n) < r ? r = c : c > u && (u = c);
				(c = d + e + n) < r ? r = c : c > u && (u = c);
				(c = e + n) < r ? r = c : c > u && (u = c);
				return a.initialize(q, r, s - q, u - r)
			};
			Object.defineProperty(b, "colorTransform", {
				get: function() {
					return this._colorTransform
				},
				set: function(a) {
					this._colorTransform = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "filter", {
				get: function() {
					return this._filter
				},
				set: function(a) {
					this._filter = a
				},
				enumerable: !0,
				configurable: !0
			});
			c.identityMatrixForGetConcatenated = new d.Matrix;
			c._enterFrameCallBackList = [];
			c._renderCallBackList = [];
			return c
		}(d.EventDispatcher);
	d.DisplayObject = g;
	g.prototype.__class__ = "egret.DisplayObject";
	g = function() {
		function d() {
			this.matrix = null
		}
		d.prototype.updateColor = function(c, b, a, f, d, v, e, m) {};
		return d
	}();
	d.ColorTransform = g;
	g.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._touchChildren = !0;
				this._children = [];
				this._isContainer = !0
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(a) {
					this._touchChildren = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "numChildren", {
				get: function() {
					return this._children.length
				},
				enumerable: !0,
				configurable: !0
			});
			b.setChildIndex = function(a, f) {
				this.doSetChildIndex(a, f)
			};
			b.doSetChildIndex = function(a, f) {
				var b = this._children.indexOf(a);
				0 > b && d.Logger.fatalWithErrorId(1006);
				this._children.splice(b, 1);
				0 > f || this._children.length <= f ? this._children.push(a) : this._children.splice(f, 0, a)
			};
			b.addChild = function(a) {
				var f = this._children.length;
				a._parent == this && f--;
				return this._doAddChild(a, f)
			};
			b.addChildAt = function(a, f) {
				return this._doAddChild(a, f)
			};
			b._doAddChild = function(a, f, b) {
				void 0 === b && (b = !0);
				if (a == this) return a;
				if (0 > f || f > this._children.length) return d.Logger.fatalWithErrorId(1007), a;
				var v = a._parent;
				if (v == this) return this.doSetChildIndex(a, f), a;
				if (v) {
					var e = v._children.indexOf(a);
					0 <= e && v._doRemoveChild(e)
				}
				this._children.splice(f, 0, a);
				a._parentChanged(this);
				b && a.dispatchEventWith(d.Event.ADDED, !0);
				if (this._stage) for (a._onAddToStage(), f = c.__EVENT__ADD_TO_STAGE_LIST; 0 < f.length;) v = f.shift(), b && v.dispatchEventWith(d.Event.ADDED_TO_STAGE);
				a._setDirty();
				this._setSizeDirty();
				return a
			};
			b.removeChild = function(a) {
				a = this._children.indexOf(a);
				if (0 <= a) return this._doRemoveChild(a);
				d.Logger.fatalWithErrorId(1008);
				return null
			};
			b.removeChildAt = function(a) {
				if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
				d.Logger.fatalWithErrorId(1007);
				return null
			};
			b._doRemoveChild = function(a, f) {
				void 0 === f && (f = !0);
				var b = this._children,
					v = b[a];
				f && v.dispatchEventWith(d.Event.REMOVED, !0);
				if (this._stage) {
					v._onRemoveFromStage();
					for (var e = c.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < e.length;) {
						var m = e.shift();
						f && m.dispatchEventWith(d.Event.REMOVED_FROM_STAGE);
						m._stage = null
					}
				}
				v._parentChanged(null);
				b.splice(a, 1);
				this._setSizeDirty();
				return v
			};
			b.getChildAt = function(a) {
				if (0 <= a && a < this._children.length) return this._children[a];
				d.Logger.fatalWithErrorId(1007);
				return null
			};
			b.contains = function(a) {
				for (; a;) {
					if (a == this) return !0;
					a = a._parent
				}
				return !1
			};
			b.swapChildrenAt = function(a, f) {
				0 <= a && a < this._children.length && 0 <= f && f < this._children.length ? this._swapChildrenAt(a, f) : d.Logger.fatalWithErrorId(1007)
			};
			b.swapChildren = function(a, f) {
				var b = this._children.indexOf(a),
					c = this._children.indexOf(f); - 1 == b || -1 == c ? d.Logger.fatalWithErrorId(1008) : this._swapChildrenAt(b, c)
			};
			b._swapChildrenAt = function(a, f) {
				if (a != f) {
					var b = this._children,
						c = b[a];
					b[a] = b[f];
					b[f] = c
				}
			};
			b.getChildIndex = function(a) {
				return this._children.indexOf(a)
			};
			b.removeChildren = function() {
				for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
			};
			b._updateTransform = function() {
				if (this._visible) {
					this._filter && d.RenderCommand.push(this._setGlobalFilter, this);
					this._colorTransform && d.RenderCommand.push(this._setGlobalColorTransform, this);
					var a = this.mask || this._scrollRect;
					a && d.RenderCommand.push(this._pushMask, this);
					e.prototype._updateTransform.call(this);
					if (!this._cacheAsBitmap || !this._texture_to_render) for (var f = 0, b = this._children, c = b.length; f < c; f++) b[f]._updateTransform();
					a && d.RenderCommand.push(this._popMask, this);
					this._colorTransform && d.RenderCommand.push(this._removeGlobalColorTransform, this);
					this._filter && d.RenderCommand.push(this._removeGlobalFilter, this)
				}
			};
			b._render = function(a) {
				if (!d.MainContext.__use_new_draw) for (var f = 0, b = this._children, c = b.length; f < c; f++) b[f]._draw(a)
			};
			b._measureBounds = function() {
				for (var a = 0, f = 0, b = 0, c = 0, e = this._children, m = e.length, g = 0; g < m; g++) {
					var k = e[g];
					if (k._visible) {
						var l = k.getBounds(d.Rectangle.identity, !1),
							n = l.x,
							q = l.y,
							s = l.width,
							l = l.height,
							k = k._getMatrix(),
							k = d.DisplayObject.getTransformBounds(d.Rectangle.identity.initialize(n, q, s, l), k),
							n = k.x,
							q = k.y,
							s = k.width + k.x,
							k = k.height + k.y;
						if (n < a || 0 == g) a = n;
						if (s > f || 0 == g) f = s;
						if (q < b || 0 == g) b = q;
						if (k > c || 0 == g) c = k
					}
				}
				return d.Rectangle.identity.initialize(a, b, f - a, c - b)
			};
			b.hitTest = function(a, f, b) {
				void 0 === b && (b = !1);
				var c;
				if (!this._visible) return null;
				if (this._scrollRect) {
					if (a < this._scrollRect.x || f < this._scrollRect.y || a > this._scrollRect.x + this._scrollRect.width || f > this._scrollRect.y + this._scrollRect.height) return null
				} else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > f || f > this.mask.y + this.mask.height)) return null;
				for (var t = this._children, m = this._touchChildren, g = t.length - 1; 0 <= g; g--) {
					var k = t[g],
						l = k._getMatrix(),
						n = k._scrollRect;
					n && l.append(1, 0, 0, 1, -n.x, -n.y);
					l.invert();
					l = d.Matrix.transformCoords(l, a, f);
					if (k = k.hitTest(l.x, l.y, !0)) {
						if (!m) return this;
						if (k._touchEnabled && m) return k;
						c = this
					}
				}
				return c ? c : this._texture_to_render ? e.prototype.hitTest.call(this, a, f, b) : null
			};
			b._onAddToStage = function() {
				e.prototype._onAddToStage.call(this);
				for (var a = this._children.length, f = 0; f < a; f++) this._children[f]._onAddToStage()
			};
			b._onRemoveFromStage = function() {
				e.prototype._onRemoveFromStage.call(this);
				for (var a = this._children, f = a.length, b = 0; b < f; b++) a[b]._onRemoveFromStage()
			};
			b.getChildByName = function(a) {
				for (var f = this._children, b = f.length, c, d = 0; d < b; d++) if (c = f[d], c.name == a) return c;
				return null
			};
			c.__EVENT__ADD_TO_STAGE_LIST = [];
			c.__EVENT__REMOVE_FROM_STAGE_LIST = [];
			return c
		}(d.DisplayObject);
	d.DisplayObjectContainer = g;
	g.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.NO_BORDER = "noBorder";
			d.NO_SCALE = "noScale";
			d.SHOW_ALL = "showAll";
			d.EXACT_FIT = "exactFit";
			return d
		}();
	d.StageScaleMode = g;
	g.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f) {
				void 0 === a && (a = 480);
				void 0 === f && (f = 800);
				e.call(this);
				this._changeSizeDispatchFlag = !0;
				this._scaleMode = "";
				this._stageHeight = this._stageWidth = NaN;
				this.touchEnabled = !0;
				this._stage = this;
				this._stageWidth = a;
				this._stageHeight = f
			}
			__extends(c, e);
			var b = c.prototype;
			b.invalidate = function() {
				c._invalidateRenderFlag = !0
			};
			Object.defineProperty(b, "scaleMode", {
				get: function() {
					return this._scaleMode
				},
				set: function(a) {
					this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
				},
				enumerable: !0,
				configurable: !0
			});
			b.changeSize = function() {
				this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(d.Event.RESIZE))
			};
			b.setResolutionPolicy = function() {
				var a = c.SCALE_MODE_ENUM[this._scaleMode];
				if (!a) throw Error(d.getString(1024));
				var f = new d.EqualToFrame,
					a = new d.ResolutionPolicy(f, a);
				d.StageDelegate.getInstance()._setResolutionPolicy(a);
				this._stageWidth = d.StageDelegate.getInstance()._stageWidth;
				this._stageHeight = d.StageDelegate.getInstance()._stageHeight
			};
			Object.defineProperty(b, "stageWidth", {
				get: function() {
					return this._stageWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "stageHeight", {
				get: function() {
					return this._stageHeight
				},
				enumerable: !0,
				configurable: !0
			});
			b.hitTest = function(a, f, b) {
				if (!this._touchEnabled) return null;
				var c;
				if (!this._touchChildren) return this;
				b = this._children;
				for (var e = b.length - 1; 0 <= e; e--) {
					c = b[e];
					var m = c._getMatrix(),
						g = c._scrollRect;
					g && m.append(1, 0, 0, 1, -g.x, -g.y);
					m.invert();
					m = d.Matrix.transformCoords(m, a, f);
					if ((c = c.hitTest(m.x, m.y, !0)) && c._touchEnabled) return c
				}
				return this
			};
			b.getBounds = function(a) {
				a || (a = new d.Rectangle);
				return a.initialize(0, 0, this._stageWidth, this._stageHeight)
			};
			b._updateTransform = function() {
				for (var a = 0, f = this._children.length; a < f; a++) this._children[a]._updateTransform()
			};
			Object.defineProperty(b, "focus", {
				get: function() {
					return null
				},
				enumerable: !0,
				configurable: !0
			});
			c.registerScaleMode = function(a, f, b) {
				c.SCALE_MODE_ENUM[a] && !b ? d.Logger.warningWithErrorId(1009, a) : c.SCALE_MODE_ENUM[a] = f
			};
			c._invalidateRenderFlag = !1;
			c.SCALE_MODE_ENUM = {};
			return c
		}(d.DisplayObjectContainer);
	d.Stage = g;
	g.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen;
(function(d) {
	var g = function(e) {
			function c(a) {
				void 0 === a && (a = null);
				e.call(this);
				this._lastTouchPosition = new d.Point(0, 0);
				this._touchStartPosition = new d.Point(0, 0);
				this._scrollStarted = !1;
				this._lastTouchTime = 0;
				this._lastTouchEvent = null;
				this._velocitys = [];
				this._isVTweenPlaying = this._isHTweenPlaying = !1;
				this._vScrollTween = this._hScrollTween = null;
				this.scrollBeginThreshold = 10;
				this.scrollSpeed = 1;
				this._content = null;
				this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
				this._scrollTop = this._scrollLeft = 0;
				this._vCanScroll = this._hCanScroll = !1;
				this.touchBeginTimer = this.delayTouchBeginEvent = null;
				this.touchEnabled = !0;
				a && this.setContent(a)
			}
			__extends(c, e);
			var b = c.prototype;
			b.setContent = function(a) {
				this._content !== a && (this.removeContent(), a && (this._content = a, e.prototype.addChild.call(this, a), this._addEvents()))
			};
			b.removeContent = function() {
				this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0));
				this._content = null
			};
			Object.defineProperty(b, "verticalScrollPolicy", {
				get: function() {
					return this._verticalScrollPolicy
				},
				set: function(a) {
					a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "horizontalScrollPolicy", {
				get: function() {
					return this._horizontalScrollPolicy
				},
				set: function(a) {
					a != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "scrollLeft", {
				get: function() {
					return this._scrollLeft
				},
				set: function(a) {
					a != this._scrollLeft && (this._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "scrollTop", {
				get: function() {
					return this._scrollTop
				},
				set: function(a) {
					a != this._scrollTop && (this._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
				},
				enumerable: !0,
				configurable: !0
			});
			b.setScrollPosition = function(a, f, b) {
				void 0 === b && (b = !1);
				if (!b || 0 != a || 0 != f) if (b || this._scrollTop != a || this._scrollLeft != f) {
					if (b) {
						b = this._isOnTheEdge(!0);
						var c = this._isOnTheEdge(!1);
						this._scrollTop += b ? a / 2 : a;
						this._scrollLeft += c ? f / 2 : f
					} else this._scrollTop = a, this._scrollLeft = f;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
			};
			b._isOnTheEdge = function(a) {
				void 0 === a && (a = !0);
				var f = this._scrollTop,
					b = this._scrollLeft;
				return a ? 0 > f || f > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
			};
			b._validatePosition = function(a, f) {
				void 0 === a && (a = !1);
				void 0 === f && (f = !1);
				if (a) {
					var b = this.height,
						c = this._getContentHeight();
					this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
					this._scrollTop = Math.min(this._scrollTop, c > b ? c - b / 2 : b / 2)
				}
				f && (b = this.width, c = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, c > b ? c - b / 2 : b / 2))
			};
			b._setWidth = function(a) {
				this._explicitWidth != a && (e.prototype._setWidth.call(this, a), this._updateContentPosition())
			};
			b._setHeight = function(a) {
				this._explicitHeight != a && (e.prototype._setHeight.call(this, a), this._updateContentPosition())
			};
			b._updateContentPosition = function() {
				var a = this.getBounds(d.Rectangle.identity);
				this.scrollRect = new d.Rectangle(this._scrollLeft, this._scrollTop, a.width, a.height);
				this.dispatchEvent(new d.Event(d.Event.CHANGE))
			};
			b._checkScrollPolicy = function() {
				var a = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
				this._hCanScroll = a;
				var f = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
				this._vCanScroll = f;
				return a || f
			};
			b.__checkScrollPolicy = function(a, f, b) {
				return "on" == a ? !0 : "off" == a ? !1 : f > b
			};
			b._addEvents = function() {
				this.addEventListener(d.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
				this.addEventListener(d.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
				this.addEventListener(d.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
			};
			b._removeEvents = function() {
				this.removeEventListener(d.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
				this.removeEventListener(d.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
				this.removeEventListener(d.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
			};
			b._onTouchBegin = function(a) {
				!a._isDefaultPrevented && this._checkScrollPolicy() && (this._touchStartPosition.x = a.stageX, this._touchStartPosition.y = a.stageY, (this._isHTweenPlaying || this._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(d.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(d.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(d.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(d.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(a), a.preventDefault())
			};
			b._onTouchBeginCapture = function(a) {
				var f = this._checkScrollPolicy();
				if (f) {
					for (var b = a.target; b != this;) {
						if ("_checkScrollPolicy" in b && (f = b._checkScrollPolicy())) return;
						b = b.parent
					}
					a.stopPropagation();
					this.delayTouchBeginEvent = this.cloneTouchEvent(a);
					this.touchBeginTimer || (this.touchBeginTimer = new d.Timer(100, 1), this.touchBeginTimer.addEventListener(d.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
					this.touchBeginTimer.start();
					this._onTouchBegin(a)
				}
			};
			b._onTouchEndCapture = function(a) {
				this.delayTouchBeginEvent && this._onTouchBeginTimer()
			};
			b._onTouchBeginTimer = function() {
				this.touchBeginTimer.stop();
				var a = this.delayTouchBeginEvent;
				this.delayTouchBeginEvent = null;
				this.stage && this.dispatchPropagationEvent(a)
			};
			b.dispatchPropagationEvent = function(a) {
				for (var f = [], b = a._target, c = 0; b;) b == this && (c = f.length), f.push(b), b = b.parent;
				b = f.slice(0, c);
				b = b.reverse();
				f = b.concat(f);
				this._dispatchPropagationEvent(a, f, c)
			};
			b._dispatchPropagationEvent = function(a, f, b) {
				for (var c = f.length, d = 0; d < c; d++) {
					var e = f[d];
					a._currentTarget = e;
					a._eventPhase = d < b ? 1 : d == b ? 2 : 3;
					e._notifyListener(a);
					if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
				}
			};
			b._onTouchMove = function(a) {
				if (this._lastTouchPosition.x != a.stageX || this._lastTouchPosition.y != a.stageY) {
					if (!this._scrollStarted) {
						var f = a.stageX - this._touchStartPosition.x,
							b = a.stageY - this._touchStartPosition.y;
						if (Math.sqrt(f * f + b * b) < this.scrollBeginThreshold) {
							this._logTouchEvent(a);
							return
						}
					}
					this._scrollStarted = !0;
					this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
					this.touchChildren = !1;
					f = this._getPointChange(a);
					this.setScrollPosition(f.y, f.x, !0);
					this._calcVelocitys(a);
					this._logTouchEvent(a)
				}
			};
			b._onTouchEnd = function(a) {
				this.touchChildren = !0;
				this._scrollStarted = !1;
				d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
				d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_END, this._onTouchEnd, this);
				d.MainContext.instance.stage.removeEventListener(d.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
				this.removeEventListener(d.Event.ENTER_FRAME, this._onEnterFrame, this);
				this._moveAfterTouchEnd()
			};
			b._onEnterFrame = function(a) {
				a = d.getTimer();
				100 < a - this._lastTouchTime && 300 > a - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
			};
			b._logTouchEvent = function(a) {
				this._lastTouchPosition.x = a.stageX;
				this._lastTouchPosition.y = a.stageY;
				this._lastTouchEvent = this.cloneTouchEvent(a);
				this._lastTouchTime = d.getTimer()
			};
			b._getPointChange = function(a) {
				return {
					x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - a.stageX,
					y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - a.stageY
				}
			};
			b._calcVelocitys = function(a) {
				var f = d.getTimer();
				if (0 == this._lastTouchTime) this._lastTouchTime = f;
				else {
					var b = this._getPointChange(a),
						f = f - this._lastTouchTime;
					b.x /= f;
					b.y /= f;
					this._velocitys.push(b);
					5 < this._velocitys.length && this._velocitys.shift();
					this._lastTouchPosition.x = a.stageX;
					this._lastTouchPosition.y = a.stageY
				}
			};
			b._getContentWidth = function() {
				return this._content.explicitWidth || this._content.width
			};
			b._getContentHeight = function() {
				return this._content.explicitHeight || this._content.height
			};
			b.getMaxScrollLeft = function() {
				var a = this._getContentWidth() - this.width;
				return Math.max(0, a)
			};
			b.getMaxScrollTop = function() {
				var a = this._getContentHeight() - this.height;
				return Math.max(0, a)
			};
			b._moveAfterTouchEnd = function() {
				if (0 != this._velocitys.length) {
					for (var a = 0, f = 0, b = 0, d = 0; d < this._velocitys.length; d++) var e = this._velocitys[d],
						m = c.weight[d],
						a = a + e.x * m,
						f = f + e.y * m,
						b = b + m;
					this._velocitys.length = 0;
					0 >= this.scrollSpeed && (this.scrollSpeed = 1);
					a = a / b * this.scrollSpeed;
					f = f / b * this.scrollSpeed;
					e = Math.abs(a);
					b = Math.abs(f);
					m = this.getMaxScrollLeft();
					d = this.getMaxScrollTop();
					a = 0.02 < e ? this.getAnimationDatas(a, this._scrollLeft, m) : {
						position: this._scrollLeft,
						duration: 1
					};
					f = 0.02 < b ? this.getAnimationDatas(f, this._scrollTop, d) : {
						position: this._scrollTop,
						duration: 1
					};
					this.setScrollLeft(a.position, a.duration);
					this.setScrollTop(f.position, f.duration)
				}
			};
			b._onTweenFinished = function(a) {
				a == this._vScrollTween && (this._isVTweenPlaying = !1);
				a == this._hScrollTween && (this._isHTweenPlaying = !1);
				!1 == this._isHTweenPlaying && !1 == this._isVTweenPlaying && this._onScrollFinished()
			};
			b._onScrollStarted = function() {};
			b._onScrollFinished = function() {
				d.Tween.removeTweens(this);
				this._vScrollTween = this._hScrollTween = null;
				this._isVTweenPlaying = this._isHTweenPlaying = !1;
				this.dispatchEvent(new d.Event(d.Event.COMPLETE))
			};
			b.setScrollTop = function(a, f) {
				void 0 === f && (f = 0);
				var b = Math.min(this.getMaxScrollTop(), Math.max(a, 0));
				if (0 == f) return this.scrollTop = b, null;
				var c = d.Tween.get(this).to({
					scrollTop: a
				}, f, d.Ease.quartOut);
				b != a && c.to({
					scrollTop: b
				}, 300, d.Ease.quintOut);
				this._isVTweenPlaying = !0;
				this._vScrollTween = c;
				c.call(this._onTweenFinished, this, [c]);
				this._isHTweenPlaying || this._onScrollStarted();
				return c
			};
			b.setScrollLeft = function(a, f) {
				void 0 === f && (f = 0);
				var b = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
				if (0 == f) return this.scrollLeft = b, null;
				var c = d.Tween.get(this).to({
					scrollLeft: a
				}, f, d.Ease.quartOut);
				b != a && c.to({
					scrollLeft: b
				}, 300, d.Ease.quintOut);
				this._isHTweenPlaying = !0;
				this._hScrollTween = c;
				c.call(this._onTweenFinished, this, [c]);
				this._isVTweenPlaying || this._onScrollStarted();
				return c
			};
			b.getAnimationDatas = function(a, f, b) {
				var c = Math.abs(a),
					d = 0,
					e = f + 500 * a;
				if (0 > e || e > b) for (e = f; Infinity != Math.abs(a) && 0.02 < Math.abs(a);) e += a, a = 0 > e || e > b ? 0.998 * a * 0.95 : 0.998 * a, d++;
				else d = 500 * -Math.log(0.02 / c);
				return {
					position: Math.min(b + 50, Math.max(e, -50)),
					duration: d
				}
			};
			b.cloneTouchEvent = function(a) {
				var f = new d.TouchEvent(a._type, a._bubbles, a.cancelable);
				f.touchPointID = a.touchPointID;
				f._stageX = a._stageX;
				f._stageY = a._stageY;
				f.ctrlKey = a.ctrlKey;
				f.altKey = a.altKey;
				f.shiftKey = a.shiftKey;
				f.touchDown = a.touchDown;
				f._isDefaultPrevented = !1;
				f._target = a._target;
				return f
			};
			b.throwNotSupportedError = function() {
				throw Error(d.getString(1023));
			};
			b.addChild = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.addChildAt = function(a, f) {
				this.throwNotSupportedError();
				return null
			};
			b.removeChild = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.removeChildAt = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.setChildIndex = function(a, f) {
				this.throwNotSupportedError()
			};
			b.swapChildren = function(a, f) {
				this.throwNotSupportedError()
			};
			b.swapChildrenAt = function(a, f) {
				this.throwNotSupportedError()
			};
			b.hitTest = function(a, f, b) {
				void 0 === b && (b = !1);
				var c = e.prototype.hitTest.call(this, a, f, b);
				return c ? c : d.DisplayObject.prototype.hitTest.call(this, a, f, b)
			};
			c.weight = [1, 1.33, 1.66, 2, 2.33];
			return c
		}(d.DisplayObjectContainer);
	d.ScrollView = g;
	g.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.REPEAT = "repeat";
			d.SCALE = "scale";
			return d
		}();
	d.BitmapFillMode = g;
	g.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				e.call(this);
				this.scale9Grid = this._texture = null;
				this.fillMode = "scale";
				a && (this._texture = a, this._setSizeDirty());
				this.needDraw = !0
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "texture", {
				get: function() {
					return this._texture
				},
				set: function(a) {
					a != this._texture && (this._setSizeDirty(), this._texture = a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._render = function(a) {
				var f = this._texture;
				f ? (this._texture_to_render = f, c._drawBitmap(a, this._hasWidthSet ? this._explicitWidth : f._textureWidth, this._hasHeightSet ? this._explicitHeight : f._textureHeight, this)) : this._texture_to_render = null
			};
			c._drawBitmap = function(a, f, b, d) {
				var e = d._texture_to_render;
				if (e) {
					var m = e._textureWidth,
						g = e._textureHeight;
					if ("scale" == d.fillMode) {
						var k = d.scale9Grid || e.scale9Grid;
						if (k && m - k.width < f && g - k.height < b) c.drawScale9GridImage(a, d, k, f, b);
						else {
							var k = e._offsetX,
								l = e._offsetY,
								n = e._bitmapWidth || m,
								q = e._bitmapHeight || g;
							f /= m;
							k = Math.round(k * f);
							f = Math.round(n * f);
							b /= g;
							l = Math.round(l * b);
							b = Math.round(q * b);
							c.renderFilter.drawImage(a, d, e._bitmapX, e._bitmapY, n, q, k, l, f, b)
						}
					} else c.drawRepeatImage(a, d, f, b, d.fillMode)
				}
			};
			c.drawRepeatImage = function(a, f, b, c, e) {
				var m = f._texture_to_render;
				if (m) {
					var g = m._textureWidth,
						k = m._textureHeight,
						l = m._bitmapX,
						n = m._bitmapY,
						g = m._bitmapWidth || g,
						k = m._bitmapHeight || k,
						q = m._offsetX,
						m = m._offsetY;
					d.RenderFilter.getInstance().drawImage(a, f, l, n, g, k, q, m, b, c, e)
				}
			};
			c.drawScale9GridImage = function(a, f, b, c, e) {
				var m = d.MainContext.instance.rendererContext._texture_scale_factor,
					g = f._texture_to_render;
				if (g && b) {
					var k = g._textureWidth,
						l = g._textureHeight,
						n = g._bitmapX,
						q = g._bitmapY,
						s = g._bitmapWidth || k,
						r = g._bitmapHeight || l;
					c -= k - s;
					e -= l - r;
					if (!a.drawImageScale9(g, n, q, s, r, g._offsetX, g._offsetY, c, e, b)) {
						k = g._offsetX / m;
						l = g._offsetY / m;
						g = d.RenderFilter.getInstance();
						b = d.Rectangle.identity.initialize(b.x - Math.round(k), b.y - Math.round(k), b.width, b.height);
						k = Math.round(k);
						l = Math.round(l);
						b.y == b.bottom && (b.bottom < r ? b.bottom++ : b.y--);
						b.x == b.right && (b.right < s ? b.right++ : b.x--);
						var u = n + b.x / m,
							x = n + b.right / m,
							w = s - b.right,
							y = q + b.y / m,
							m = q + b.bottom / m,
							z = r - b.bottom,
							A = k + b.x,
							B = l + b.y,
							r = e - (r - b.bottom),
							s = c - (s - b.right);
						g.drawImage(a, f, n, q, b.x, b.y, k, l, b.x, b.y);
						g.drawImage(a, f, u, q, b.width, b.y, A, l, s - b.x, b.y);
						g.drawImage(a, f, x, q, w, b.y, k + s, l, c - s, b.y);
						g.drawImage(a, f, n, y, b.x, b.height, k, B, b.x, r - b.y);
						g.drawImage(a, f, u, y, b.width, b.height, A, B, s - b.x, r - b.y);
						g.drawImage(a, f, x, y, w, b.height, k + s, B, c - s, r - b.y);
						g.drawImage(a, f, n, m, b.x, z, k, l + r, b.x, e - r);
						g.drawImage(a, f, u, m, b.width, z, A, l + r, s - b.x, e - r);
						g.drawImage(a, f, x, m, w, z, k + s, l + r, c - s, e - r)
					}
				}
			};
			b._measureBounds = function() {
				var a = this._texture;
				return a ? d.Rectangle.identity.initialize(0, 0, a._textureWidth, a._textureHeight) : e.prototype._measureBounds.call(this)
			};
			c.renderFilter = d.RenderFilter.getInstance();
			return c
		}(d.DisplayObject);
	d.Bitmap = g;
	g.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._text = "";
				this._textChanged = !1;
				this._font = null;
				this._fontChanged = !1;
				this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = 0;
				this.textLinesChange = !0;
				this._lineHeights = [];
				this.needDraw = this.cacheAsBitmap = !0
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "text", {
				get: function() {
					return this._text
				},
				set: function(a) {
					this._text != a && (this._textChanged = !0, this._text = a, this._setSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "font", {
				get: function() {
					return this._font
				},
				set: function(a) {
					this._font != a && (this._font = a, this._fontChanged = !0, this._setSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			b._setSizeDirty = function() {
				e.prototype._setSizeDirty.call(this);
				this.textLinesChange = !0
			};
			b._render = function(a) {
				var f = this._getTextLines(),
					b = f.length;
				if (0 != b) {
					for (var e = this._font, t = e._getFirstCharHeight(), t = Math.ceil(t * c.EMPTY_FACTOR), g = 0, h = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY, k = this._lineHeights, l = 0; l < b; l++) {
						var n = k[l];
						if (0 < l && g + n > h) break;
						for (var q = f[l], s = q.length, r = 0, u = 0; u < s; u++) {
							var x = q.charAt(u),
								w = e.getTexture(x);
							if (w) {
								var x = w._bitmapWidth || w._textureWidth,
									y = w._bitmapHeight || w._textureHeight;
								this._texture_to_render = w;
								d.RenderFilter.getInstance().drawImage(a, this, w._bitmapX, w._bitmapY, x, y, r + w._offsetX, g + w._offsetY, x, y);
								r += w._textureWidth
							} else " " == x ? r += t : d.Logger.warningWithErrorId(1011, x)
						}
						g += n
					}
					this._texture_to_render = null
				}
			};
			b._measureBounds = function() {
				return 0 == this._getTextLines().length ? d.Rectangle.identity.initialize(0, 0, 0, 0) : d.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY)
			};
			b._getTextLines = function() {
				if (!this.textLinesChange) return this._textLines;
				var a = [];
				this._textLines = a;
				this.textLinesChange = !1;
				var f = [];
				this._lineHeights = f;
				if (!this._text || !this._font) return a;
				for (var b = 0, e = 0, g = 0, m = 0, h = this._hasWidthSet, k = this._hasWidthSet ? this._explicitWidth : Number.POSITIVE_INFINITY, l = this._font, n = l._getFirstCharHeight(), q = Math.ceil(n * c.EMPTY_FACTOR), s = this._text.split(/(?:\r\n|\r|\n)/), r = s.length, u = !0, x = 0; x < r; x++) {
					for (var w = s[x], y = w.length, z = 0, A = 0, B = !0, D = 0; D < y; D++) {
						var C = w.charAt(D),
							F, G = 0,
							H = 0,
							E = l.getTexture(C);
						if (E) C = E._textureWidth, F = E._textureHeight, G = E._offsetX, H = E._offsetY;
						else if (" " == C) C = q, F = n;
						else {
							d.Logger.warningWithErrorId(1011, C);
							B && (B = !1);
							continue
						}
						B && (B = !1, g = Math.min(G, g));
						u && (m = Math.min(H, m));
						h && 0 < D && A + C > k ? (a.push(w.substring(0, D)), f.push(z), e += z, b = Math.max(A, b), w = w.substring(D), y = w.length, D = 0, A = C, z = F) : (A += C, z = Math.max(F, z))
					}
					u && (u = !1);
					a.push(w);
					f.push(z);
					e += z;
					b = Math.max(A, b)
				}
				this._textWidth = b;
				this._textHeight = e;
				this._textOffsetX = g;
				this._textOffsetY = m;
				return a
			};
			c.EMPTY_FACTOR = 0.33;
			return c
		}(d.DisplayObject);
	d.BitmapText = g;
	g.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {
				this.fillStyleColor = this.strokeStyleColor = this.renderContext = this.commandQueue = this.canvasContext = null;
				this._dirty = !1;
				this.lineY = this.lineX = 0;
				this._firstCheck = !0;
				this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
				this.commandQueue = []
			}
			var c = e.prototype;
			c.beginFill = function(b, a) {};
			c._setStyle = function(b) {};
			c.drawRect = function(b, a, f, c) {
				this.checkRect(b, a, f, c)
			};
			c.drawCircle = function(b, a, f) {
				this.checkRect(b - f, a - f, 2 * f, 2 * f)
			};
			c.drawRoundRect = function(b, a, f, c, d, e) {
				this.checkRect(b, a, f, c)
			};
			c.drawEllipse = function(b, a, f, c) {
				this.checkRect(b - f, a - c, 2 * f, 2 * c)
			};
			c.lineStyle = function(b, a, f, c, d, e, g, h) {};
			c.lineTo = function(b, a) {
				this.checkPoint(b, a)
			};
			c.curveTo = function(b, a, f, c) {
				this.checkPoint(b, a);
				this.checkPoint(f, c)
			};
			c.moveTo = function(b, a) {
				this.checkPoint(b, a)
			};
			c.clear = function() {
				this._maxY = this._maxX = this._minY = this._minX = 0;
				this._firstCheck = !0
			};
			c.endFill = function() {};
			c._draw = function(b) {};
			c.checkRect = function(b, a, f, c) {
				this._firstCheck ? (this._firstCheck = !1, this._minX = b, this._minY = a, this._maxX = b + f, this._maxY = a + c) : (this._minX = Math.min(this._minX, b), this._minY = Math.min(this._minY, a), this._maxX = Math.max(this._maxX, b + f), this._maxY = Math.max(this._maxY, a + c))
			};
			c.checkPoint = function(b, a) {
				this._firstCheck ? (this._firstCheck = !1, this._minX = b, this._minY = a, this._maxX = b, this._maxY = a) : (this._minX = Math.min(this._minX, b), this._minY = Math.min(this._minY, a), this._maxX = Math.max(this._maxX, b), this._maxY = Math.max(this._maxY, a));
				this._lastX = b;
				this._lastY = a
			};
			c._measureBounds = function() {
				return d.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
			};
			return e
		}();
	d.Graphics = g;
	g.prototype.__class__ = "egret.Graphics";
	(function() {
		return function(d, c, b) {
			this.method = d;
			this.thisObject = c;
			this.args = b
		}
	})().prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._graphics = null
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new d.Graphics, this.needDraw = !0);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			b._render = function(a) {
				this._graphics && this._graphics._draw(a)
			};
			b._measureBounds = function() {
				var a = this._graphics;
				return a ? a._measureBounds() : e.prototype._measureBounds.call(this)
			};
			return c
		}(d.DisplayObject);
	d.Shape = g;
	g.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._graphics = null
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new d.Graphics, this.needDraw = !0);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			b._render = function(a) {
				this._graphics && this._graphics._draw(a);
				e.prototype._render.call(this, a)
			};
			b._measureBounds = function() {
				for (var a = 0, f = 0, b = 0, c = 0, e = this._children.length, g = 0; g < e; g++) {
					var h = this._children[g];
					if (h._visible) {
						var k = h.getBounds(d.Rectangle.identity, !1),
							l = k.x,
							n = k.y,
							q = k.width,
							k = k.height,
							h = h._getMatrix(),
							h = d.DisplayObject.getTransformBounds(d.Rectangle.identity.initialize(l, n, q, k), h),
							l = h.x,
							n = h.y,
							q = h.width + h.x,
							h = h.height + h.y;
						if (l < a || 0 == g) a = l;
						if (q > f || 0 == g) f = q;
						if (n < b || 0 == g) b = n;
						if (h > c || 0 == g) c = h
					}
				}
				if (this._graphics) {
					e = this._graphics._measureBounds();
					l = e.x;
					n = e.y;
					q = e.width + e.x;
					h = e.height + e.y;
					if (l < a || 0 == g) a = l;
					if (q > f || 0 == g) f = q;
					if (n < b || 0 == g) b = n;
					if (h > c || 0 == g) c = h
				}
				return d.Rectangle.identity.initialize(a, b, f - a, c - b)
			};
			b.hitTest = function(a, f, b) {
				void 0 === b && (b = !1);
				var c = e.prototype.hitTest.call(this, a, f, b);
				return c ? c : this._graphics ? d.DisplayObject.prototype.hitTest.call(this, a, f, b) : null
			};
			return c
		}(d.DisplayObjectContainer);
	d.Sprite = g;
	g.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {}
			e._getStartLine = function(c) {
				var b = e._getTextHeight(c),
					a = 0;
				c._hasHeightSet && (!(b < c._explicitHeight) && b > c._explicitHeight && (a = Math.max(c._properties._scrollV - 1, 0), a = Math.min(c._properties._numLines - 1, a)), c._properties._multiline || (a = Math.max(c._properties._scrollV - 1, 0), a = Math.min(c._properties._numLines - 1, a)));
				return a
			};
			e._getHalign = function(c) {
				var b = c._getLinesArr(),
					a = 0;
				c._properties._textAlign == d.HorizontalAlign.CENTER ? a = 0.5 : c._properties._textAlign == d.HorizontalAlign.RIGHT && (a = 1);
				c._properties._type == d.TextFieldType.INPUT && !c._properties._multiline && 1 < b.length && (a = 0);
				return a
			};
			e._getTextHeight = function(c) {
				return d.TextFieldType.INPUT != c._properties._type || c._properties._multiline ? c._properties._textMaxHeight + (c._properties._numLines - 1) * c._properties._lineSpacing : c._properties._size
			};
			e._getValign = function(c) {
				var b = e._getTextHeight(c);
				return c._properties._type == d.TextFieldType.INPUT ? c._properties._multiline ? 0 : 0.5 : c._hasHeightSet && b < c._explicitHeight ? (b = 0, c._properties._verticalAlign == d.VerticalAlign.MIDDLE ? b = 0.5 : c._properties._verticalAlign == d.VerticalAlign.BOTTOM && (b = 1), b) : 0
			};
			e._getTextElement = function(c, b, a) {
				b = e._getHit(c, b, a);
				c = c._getLinesArr();
				return b && c[b.lineIndex] && c[b.lineIndex].elements[b.textElementIndex] ? c[b.lineIndex].elements[b.textElementIndex] : null
			};
			e._getHit = function(c, b, a) {
				var f = c._getLinesArr();
				if (0 == c._properties._textMaxWidth) return null;
				for (var d = 0, e = 0, g = 0; g < f.length; g++) {
					var m = f[g];
					if (e + m.height >= a) {
						d = g + 1;
						break
					} else e += m.height;
					if (e + c._properties._lineSpacing > a) return null;
					e += c._properties._lineSpacing
				}
				if (0 === d) return null;
				c = f[d - 1];
				for (g = a = 0; g < c.elements.length; g++) if (f = c.elements[g], a + f.width < b) a += f.width;
				else return {
					lineIndex: d - 1,
					textElementIndex: g
				};
				return null
			};
			e._getScrollNum = function(c) {
				var b = 1;
				if (c._properties._multiline) {
					var a = c.height,
						f = c.size;
					c = c.lineSpacing;
					b = Math.floor(a / (f + c));
					a - (f + c) * b > f / 2 && b++
				}
				return b
			};
			return e
		}();
	d.TextFieldUtils = g;
	g.prototype.__class__ = "egret.TextFieldUtils"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			return function() {
				this._text = this._type = "";
				this._displayAsPassword = !1;
				this._fontFamily = d.TextField.default_fontFamily;
				this._size = 30;
				this._bold = this._italic = !1;
				this._textColorString = "#FFFFFF";
				this._textColor = 16777215;
				this._strokeColorString = "#000000";
				this._stroke = this._strokeColor = 0;
				this._border = !1;
				this._borderColor = 0;
				this._background = !1;
				this._backgroundColor = 16777215;
				this._textAlign = "left";
				this._verticalAlign = "top";
				this._maxChars = this._textMaxHeight = this._textMaxWidth = 0;
				this._scrollV = -1;
				this._numLines = this._lineSpacing = 0;
				this._multiline = !1
			}
		}();
	d.TextFieldProperties = g;
	g.prototype.__class__ = "egret.TextFieldProperties"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._inputEnabled = !1;
				this._bgGraphics = this._inputUtils = null;
				this._isFlow = !1;
				this._textArr = [];
				this._isArrayChanged = !1;
				this._linesArr = [];
				this._isTyping = !1;
				this.needDraw = !0;
				this._properties = new d.TextFieldProperties
			}
			__extends(c, e);
			var b = c.prototype;
			b.isInput = function() {
				return this._properties._type == d.TextFieldType.INPUT
			};
			b._setTouchEnabled = function(a) {
				e.prototype._setTouchEnabled.call(this, a);
				this.isInput() && (this._inputEnabled = !0)
			};
			Object.defineProperty(b, "type", {
				get: function() {
					return this._properties._type
				},
				set: function(a) {
					this._setType(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setType = function(a) {
				var f = this._properties;
				f._type != a && (f._type = a, f._type == d.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new d.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
			};
			Object.defineProperty(b, "text", {
				get: function() {
					return this._getText()
				},
				set: function(a) {
					this._setText(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._getText = function() {
				return this._properties._type == d.TextFieldType.INPUT ? this._inputUtils._getText() : this._properties._text
			};
			b._setSizeDirty = function() {
				e.prototype._setSizeDirty.call(this);
				this._isArrayChanged = !0
			};
			b._setTextDirty = function() {
				this._setSizeDirty()
			};
			b._setBaseText = function(a) {
				null == a && (a = "");
				var f = this._properties;
				this._isFlow = !1;
				f._text != a && (this._setTextDirty(), f._text = a, a = "", a = f._displayAsPassword ? this.changeToPassText(f._text) : f._text, this.setMiddleStyle([{
					text: a
				}]))
			};
			b._setText = function(a) {
				null == a && (a = "");
				this._setBaseText(a);
				this._inputUtils && this._inputUtils._setText(this._properties._text)
			};
			Object.defineProperty(b, "displayAsPassword", {
				get: function() {
					return this._properties._displayAsPassword
				},
				set: function(a) {
					this._setDisplayAsPassword(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setDisplayAsPassword = function(a) {
				var f = this._properties;
				f._displayAsPassword != a && (f._displayAsPassword = a, this._setTextDirty(), a = "", a = f._displayAsPassword ? this.changeToPassText(f._text) : f._text, this.setMiddleStyle([{
					text: a
				}]))
			};
			Object.defineProperty(b, "fontFamily", {
				get: function() {
					return this._properties._fontFamily
				},
				set: function(a) {
					this._setFontFamily(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setFontFamily = function(a) {
				this._properties._fontFamily != a && (this._setTextDirty(), this._properties._fontFamily = a)
			};
			Object.defineProperty(b, "size", {
				get: function() {
					return this._properties._size
				},
				set: function(a) {
					this._setSize(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setSize = function(a) {
				this._properties._size != a && (this._setTextDirty(), this._properties._size = a)
			};
			Object.defineProperty(b, "italic", {
				get: function() {
					return this._properties._italic
				},
				set: function(a) {
					this._setItalic(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setItalic = function(a) {
				this._properties._italic != a && (this._setTextDirty(), this._properties._italic = a)
			};
			Object.defineProperty(b, "bold", {
				get: function() {
					return this._properties._bold
				},
				set: function(a) {
					this._setBold(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setBold = function(a) {
				this._properties._bold != a && (this._setTextDirty(), this._properties._bold = a)
			};
			Object.defineProperty(b, "textColor", {
				get: function() {
					return this._properties._textColor
				},
				set: function(a) {
					this._setTextColor(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setTextColor = function(a) {
				this._properties._textColor != a && (this._setTextDirty(), this._properties._textColor = a, this._properties._textColorString = d.toColorString(a))
			};
			Object.defineProperty(b, "strokeColor", {
				get: function() {
					return this._properties._strokeColor
				},
				set: function(a) {
					this._setStrokeColor(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setStrokeColor = function(a) {
				this._properties._strokeColor != a && (this._setTextDirty(), this._properties._strokeColor = a, this._properties._strokeColorString = d.toColorString(a))
			};
			Object.defineProperty(b, "stroke", {
				get: function() {
					return this._properties._stroke
				},
				set: function(a) {
					this._setStroke(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setStroke = function(a) {
				this._properties._stroke != a && (this._setTextDirty(), this._properties._stroke = a)
			};
			Object.defineProperty(b, "textAlign", {
				get: function() {
					return this._properties._textAlign
				},
				set: function(a) {
					this._setTextAlign(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setTextAlign = function(a) {
				this._properties._textAlign != a && (this._setTextDirty(), this._properties._textAlign = a)
			};
			Object.defineProperty(b, "verticalAlign", {
				get: function() {
					return this._properties._verticalAlign
				},
				set: function(a) {
					this._setVerticalAlign(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setVerticalAlign = function(a) {
				this._properties._verticalAlign != a && (this._setTextDirty(), this._properties._verticalAlign = a)
			};
			Object.defineProperty(b, "maxChars", {
				get: function() {
					return this._properties._maxChars
				},
				set: function(a) {
					this._setMaxChars(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setMaxChars = function(a) {
				this._properties._maxChars != a && (this._properties._maxChars = a)
			};
			Object.defineProperty(b, "scrollV", {
				get: function() {
					return Math.min(Math.max(this._properties._scrollV, 1), this.maxScrollV)
				},
				set: function(a) {
					this._properties._scrollV = Math.max(a, 1);
					this._setDirty()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "maxScrollV", {
				get: function() {
					this._getLinesArr();
					return Math.max(this._properties._numLines - d.TextFieldUtils._getScrollNum(this) + 1, 1)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "selectionBeginIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "selectionEndIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "caretIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			b._setSelection = function(a, f) {};
			Object.defineProperty(b, "lineSpacing", {
				get: function() {
					return this._properties._lineSpacing
				},
				set: function(a) {
					this._setLineSpacing(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setLineSpacing = function(a) {
				this._properties._lineSpacing != a && (this._setTextDirty(), this._properties._lineSpacing = a)
			};
			b._getLineHeight = function() {
				return this._properties._lineSpacing + this._properties._size
			};
			Object.defineProperty(b, "numLines", {
				get: function() {
					return this._properties._numLines
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "multiline", {
				get: function() {
					return this._properties._multiline
				},
				set: function(a) {
					this._setMultiline(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setMultiline = function(a) {
				this._properties._multiline = a;
				this._setDirty()
			};
			b._setWidth = function(a) {
				e.prototype._setWidth.call(this, a);
				this.fillBackground()
			};
			b._setHeight = function(a) {
				e.prototype._setHeight.call(this, a);
				this.fillBackground()
			};
			Object.defineProperty(b, "border", {
				get: function() {
					return this._properties._border
				},
				set: function(a) {
					this._properties._border = a;
					this.fillBackground()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "borderColor", {
				get: function() {
					return this._properties._borderColor
				},
				set: function(a) {
					this._properties._borderColor = a;
					this.fillBackground()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "background", {
				get: function() {
					return this._properties._background
				},
				set: function(a) {
					this._properties._background = a;
					this.fillBackground()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "backgroundColor", {
				get: function() {
					return this._properties._backgroundColor
				},
				set: function(a) {
					this._properties._backgroundColor = a;
					this.fillBackground()
				},
				enumerable: !0,
				configurable: !0
			});
			b.fillBackground = function() {
				var a = this._bgGraphics,
					f = this._properties;
				a && a.clear();
				if (f._background || f._border) null == a && (a = this._bgGraphics = new d.Graphics), f._background && a.beginFill(f._backgroundColor, 1), f._border && a.lineStyle(1, f._borderColor), a.drawRect(0, 0, this._getWidth(), this._getHeight()), a.endFill()
			};
			b.setFocus = function() {
				d.Logger.warningWithErrorId(1013)
			};
			b._onRemoveFromStage = function() {
				e.prototype._onRemoveFromStage.call(this);
				this._removeEvent();
				this._properties._type == d.TextFieldType.INPUT && this._inputUtils._removeStageText()
			};
			b._onAddToStage = function() {
				e.prototype._onAddToStage.call(this);
				this._addEvent();
				this._properties._type == d.TextFieldType.INPUT && this._inputUtils._addStageText()
			};
			b._updateBaseTransform = function() {
				this._getLinesArr();
				0 == this._properties._textMaxWidth && this._properties._type != d.TextFieldType.INPUT || e.prototype._updateTransform.call(this)
			};
			b._updateTransform = function() {
				this._properties._type == d.TextFieldType.INPUT ? this._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
			};
			b._draw = function(a) {
				var f = this._properties;
				if (f._type == d.TextFieldType.INPUT) {
					if (this._isTyping) return
				} else if (0 == f._textMaxWidth) return;
				e.prototype._draw.call(this, a)
			};
			b._render = function(a) {
				this._bgGraphics && this._bgGraphics._draw(a);
				this.drawText(a);
				this._clearDirty()
			};
			b._measureBounds = function() {
				var a = this._properties;
				this._getLinesArr();
				return 0 == a._textMaxWidth ? d.Rectangle.identity.initialize(0, 0, 0, 0) : d.Rectangle.identity.initialize(0, 0, a._textMaxWidth, d.TextFieldUtils._getTextHeight(this))
			};
			Object.defineProperty(b, "textFlow", {
				get: function() {
					return this._textArr
				},
				set: function(a) {
					var f = this._properties;
					this._isFlow = !0;
					var b = "";
					null == a && (a = []);
					for (var c = 0; c < a.length; c++) b += a[c].text;
					f._displayAsPassword ? this._setBaseText(b) : (f._text = b, this.setMiddleStyle(a))
				},
				enumerable: !0,
				configurable: !0
			});
			b.changeToPassText = function(a) {
				if (this._properties._displayAsPassword) {
					for (var f = "", b = 0, c = a.length; b < c; b++) switch (a.charAt(b)) {
					case "\n":
						f += "\n";
						break;
					case "\r":
						break;
					default:
						f += "*"
					}
					return f
				}
				return a
			};
			b.setMiddleStyle = function(a) {
				this._isArrayChanged = !0;
				this._textArr = a;
				this._setSizeDirty()
			};
			Object.defineProperty(b, "textWidth", {
				get: function() {
					return this._properties._textMaxWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "textHeight", {
				get: function() {
					return d.TextFieldUtils._getTextHeight(this)
				},
				enumerable: !0,
				configurable: !0
			});
			b.appendText = function(a) {
				this.appendElement({
					text: a
				})
			};
			b.appendElement = function(a) {
				this._textArr.push(a);
				this.setMiddleStyle(this._textArr)
			};
			b._getLinesArr = function() {
				var a = this._properties;
				if (!this._isArrayChanged) return this._linesArr;
				this._isArrayChanged = !1;
				var f = this._textArr,
					b = d.MainContext.instance.rendererContext;
				this._linesArr.length = 0;
				a._textMaxHeight = 0;
				a._textMaxWidth = 0;
				if (this._hasWidthSet && 0 == this._explicitWidth) return a._numLines = 0, [{
					width: 0,
					height: 0,
					charNum: 0,
					elements: [],
					hasNextLine: !1
				}];
				this._isFlow || b.setupFont(this);
				for (var c = this._linesArr, e = 0, g = 0, h = 0, k = 0, l, n = 0, q = f.length; n < q; n++) {
					var s = f[n];
					s.style = s.style || {};
					for (var r = s.text.toString().split(/(?:\r\n|\r|\n)/), u = 0, x = r.length; u < x; u++) {
						null == c[k] && (l = {
							width: 0,
							height: 0,
							elements: [],
							charNum: 0,
							hasNextLine: !1
						}, c[k] = l, g = h = e = 0);
						var h = a._type == d.TextFieldType.INPUT ? a._size : Math.max(h, s.style.size || a._size),
							w = !0;
						if ("" == r[u]) u == x - 1 && (w = !1);
						else {
							this._isFlow && b.setupFont(this, s.style);
							var y = b.measureText(r[u]);
							if (this._hasWidthSet) if (e + y <= this._explicitWidth) l.elements.push({
								width: y,
								text: r[u],
								style: s.style
							}), e += y, g += r[u].length, u == x - 1 && (w = !1);
							else {
								for (var z = w = 0, A = r[u], B = A.length; w < B; w++) {
									y = b.measureText(A.charAt(w));
									if (e + y > this._explicitWidth && 0 != e + w) break;
									z += y;
									e += y;
									g += 1
								}
								0 < w && (l.elements.push({
									width: z,
									text: A.substring(0, w),
									style: s.style
								}), r[u] = A.substring(w));
								u--;
								w = !1
							} else e += y, g += r[u].length, l.elements.push({
								width: y,
								text: r[u],
								style: s.style
							}), u == x - 1 && (w = !1)
						}
						w && (g++, l.hasNextLine = !0);
						u < r.length - 1 && (l.width = e, l.height = h, l.charNum = g, a._textMaxWidth = Math.max(a._textMaxWidth, e), a._textMaxHeight += h, k++)
					}
					n == f.length - 1 && l && (l.width = e, l.height = h, l.charNum = g, a._textMaxWidth = Math.max(a._textMaxWidth, e), a._textMaxHeight += h)
				}
				a._numLines = c.length;
				return c
			};
			b.drawText = function(a) {
				var f = this._properties,
					b = this._getLinesArr();
				if (0 != f._textMaxWidth) {
					var c = this._hasWidthSet ? this._explicitWidth : f._textMaxWidth,
						e = d.TextFieldUtils._getTextHeight(this),
						g = 0,
						h = d.TextFieldUtils._getStartLine(this);
					if (this._hasHeightSet && this._explicitHeight > e) var k = d.TextFieldUtils._getValign(this),
						g = g + k * (this._explicitHeight - e);
					for (var g = Math.round(g), e = d.TextFieldUtils._getHalign(this), k = 0, l = h, n = f._numLines; l < n; l++) {
						var q = b[l],
							s = q.height,
							g = g + s / 2;
						if (l != h) {
							if (f._type == d.TextFieldType.INPUT && !f._multiline) break;
							if (this._hasHeightSet && g > this._explicitHeight) break
						}
						for (var k = Math.round((c - q.width) * e), r = 0, u = q.elements.length; r < u; r++) {
							var x = q.elements[r];
							a.drawText(this, x.text, k, g + (s - (x.style.size || f._size)) / 2, x.width, x.style);
							k += x.width
						}
						g += s / 2 + f._lineSpacing
					}
				}
			};
			b._addEvent = function() {
				this.addEventListener(d.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
			};
			b._removeEvent = function() {
				this.removeEventListener(d.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
			};
			b.onTapHandler = function(a) {
				if (this._properties._type != d.TextFieldType.INPUT && (a = d.TextFieldUtils._getTextElement(this, a.localX, a.localY), null != a && (a = a.style) && a.href && a.href.match(/^event:/))) {
					var f = a.href.match(/^event:/)[0];
					d.TextEvent.dispatchTextEvent(this, d.TextEvent.LINK, a.href.substring(f.length))
				}
			};
			c.default_fontFamily = "Arial";
			return c
		}(d.DisplayObject);
	d.TextField = g;
	g.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {
				this.resutlArr = []
			}
			var c = d.prototype;
			c.parser = function(b) {
				this.stackArray = [];
				this.resutlArr = [];
				for (var a = 0, f = b.length; a < f;) {
					var c = b.indexOf("<", a);
					0 > c ? (this.addToResultArr(b.substring(a)), a = f) : (this.addToResultArr(b.substring(a, c)), a = b.indexOf(">", c), "/" == b.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(b.substring(c + 1, a)), a += 1)
				}
				return this.resutlArr
			};
			c.addToResultArr = function(b) {
				if ("" != b) {
					var a = [];
					a.push(["&lt;", "<"]);
					a.push(["&gt;", ">"]);
					a.push(["&amp;", "&"]);
					a.push(["&quot;", '"']);
					a.push(["&apos;;", "'"]);
					for (var f = 0; f < a.length; f++) b.replace(new RegExp(a[f][0], "g"), a[f][1]);
					0 < this.stackArray.length ? this.resutlArr.push({
						text: b,
						style: this.stackArray[this.stackArray.length - 1]
					}) : this.resutlArr.push({
						text: b
					})
				}
			};
			c.changeStringToObject = function(b) {
				var a = {};
				b = b.replace(/( )+/g, " ").split(" ");
				for (var f = 0; f < b.length; f++) this.addProperty(a, b[f]);
				return a
			};
			c.addProperty = function(b, a) {
				var f = a.replace(/( )*=( )*/g, "=").split("=");
				f[1] && (f[1] = f[1].replace(/(\"|\')/g, ""));
				switch (f[0].toLowerCase()) {
				case "color":
					f[1] = f[1].replace(/#/, "0x");
					b.textColor = parseInt(f[1]);
					break;
				case "strokecolor":
					f[1] = f[1].replace(/#/, "0x");
					b.strokeColor = parseInt(f[1]);
					break;
				case "stroke":
					b.stroke = parseInt(f[1]);
					break;
				case "b":
					b.bold = "true" == (f[1] || "true");
					break;
				case "i":
					b.italic = "true" == (f[1] || "true");
					break;
				case "size":
					b.size = parseInt(f[1]);
					break;
				case "fontfamily":
					b.fontFamily = f[1];
					break;
				case "href":
					b.href = f[1]
				}
			};
			c.addToArray = function(b) {
				b = this.changeStringToObject(b);
				if (0 != this.stackArray.length) {
					var a = this.stackArray[this.stackArray.length - 1],
						f;
					for (f in a) null == b[f] && (b[f] = a[f])
				}
				this.stackArray.push(b)
			};
			return d
		}();
	d.HtmlTextParser = g;
	g.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.DYNAMIC = "dynamic";
			d.INPUT = "input";
			return d
		}();
	d.TextFieldType = g;
	g.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				e.call(this);
				this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0;
				this._textureMap = {};
				this.texture = a;
				this._sourceWidth = a._sourceWidth;
				this._sourceHeight = a._sourceHeight;
				this._bitmapX = a._bitmapX - a._offsetX;
				this._bitmapY = a._bitmapY - a._offsetY
			}
			__extends(c, e);
			var b = c.prototype;
			b.getTexture = function(a) {
				return this._textureMap[a]
			};
			b.createTexture = function(a, f, b, c, e, g, h, k, l) {
				void 0 === g && (g = 0);
				void 0 === h && (h = 0);
				"undefined" === typeof k && (k = g + c);
				"undefined" === typeof l && (l = h + e);
				var n = this.texture._clone(),
					q = d.MainContext.instance.rendererContext._texture_scale_factor;
				n._bitmapX = this._bitmapX + f;
				n._bitmapY = this._bitmapY + b;
				n._bitmapWidth = c * q;
				n._bitmapHeight = e * q;
				n._offsetX = g;
				n._offsetY = h;
				n._textureWidth = k * q;
				n._textureHeight = l * q;
				n._sourceWidth = this._sourceWidth;
				n._sourceHeight = this._sourceHeight;
				return this._textureMap[a] = n
			};
			return c
		}(d.HashObject);
	d.SpriteSheet = g;
	g.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._text = null;
				this._isFocus = !1
			}
			__extends(c, e);
			var b = c.prototype;
			b.init = function(a) {
				this._text = a;
				this.stageText = d.StageText.create();
				this.stageText._setTextField(this._text)
			};
			b._addStageText = function() {
				this._text._inputEnabled || (this._text._touchEnabled = !0);
				this.stageText._add();
				this.stageText._addListeners();
				this.stageText.addEventListener("updateText", this.updateTextHandler, this);
				this._text.addEventListener(d.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
				d.MainContext.instance.stage.addEventListener(d.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
				this.stageText.addEventListener("blur", this.blurHandler, this);
				this.stageText.addEventListener("focus", this.focusHandler, this)
			};
			b._removeStageText = function() {
				this._text._inputEnabled || (this._text._touchEnabled = !1);
				this.stageText._remove();
				this.stageText._removeListeners();
				this.stageText._removeInput();
				this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
				this._text.removeEventListener(d.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
				d.MainContext.instance.stage.removeEventListener(d.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
				this.stageText.removeEventListener("blur", this.blurHandler, this);
				this.stageText.removeEventListener("focus", this.focusHandler, this)
			};
			b._getText = function() {
				return this.stageText._getText()
			};
			b._setText = function(a) {
				this.stageText._setText(a)
			};
			b.focusHandler = function(a) {
				this._isFocus = !0;
				this._text._isTyping = !0
			};
			b.blurHandler = function(a) {
				this._isFocus = !1;
				this._text._isTyping = !1
			};
			b.onMouseDownHandler = function(a) {
				a.stopPropagation();
				this._text._visible && !this._isFocus && (this._isFocus = !0, this.stageText._show(this._text._properties._multiline, this._text.size, this._text.width, this._text.height), a = this._text.localToGlobal(), this.stageText._initElement(a.x, a.y, this._text._worldTransform.a, this._text._worldTransform.d))
			};
			b.onStageDownHandler = function(a) {
				this.stageText._hide()
			};
			b.updateTextHandler = function(a) {
				this.resetText();
				this._text.dispatchEvent(new d.Event(d.Event.CHANGE))
			};
			b.resetText = function() {
				this._text._setBaseText(this.stageText._getText())
			};
			b._hideInput = function() {
				this.stageText._removeInput()
			};
			b._updateTransform = function() {
				this._text._updateBaseTransform();
				!this._text._visible && this.stageText && this._hideInput()
			};
			b._updateProperties = function() {
				if (!this._isFocus) {
					var a = this._text._stage;
					if (null == a) this.stageText._setVisible(!1);
					else {
						for (var f = this._text, b = f._visible; b;) {
							f = f.parent;
							if (f == a) break;
							b = f._visible
						}
						this.stageText._setVisible(b)
					}
					this.stageText._setMultiline(this._text._properties._multiline);
					this.stageText._setTextType(this._text._properties._displayAsPassword ? "password" : "text");
					this.stageText._setText(this._text._properties._text);
					this.stageText._resetStageText()
				}
				this._updateTransform()
			};
			return c
		}(d.HashObject);
	d.InputController = g;
	g.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a, f) {
				d.call(this, a);
				this.firstCharHeight = 0;
				"string" == typeof f ? this.charList = this.parseConfig(f) : f && f.hasOwnProperty("frames") ? this.charList = f.frames : this.charList = {}
			}
			__extends(c, d);
			var b = c.prototype;
			b.getTexture = function(a) {
				var f = this._textureMap[a];
				if (!f) {
					f = this.charList[a];
					if (!f) return null;
					f = this.createTexture(a, f.x, f.y, f.w, f.h, f.offX, f.offY, f.sourceW, f.sourceH);
					this._textureMap[a] = f
				}
				return f
			};
			b._getFirstCharHeight = function() {
				if (0 == this.firstCharHeight) for (var a in this.charList) {
					var f = this.charList[a];
					if (f) {
						var b = f.sourceH;
						void 0 === b && (b = f.h, void 0 === b && (b = 0), f = f.offY, void 0 === f && (f = 0), b += f);
						if (!(0 >= b)) {
							this.firstCharHeight = b;
							break
						}
					}
				}
				return this.firstCharHeight
			};
			b.parseConfig = function(a) {
				a = a.split("\r\n").join("\n");
				a = a.split("\n");
				for (var f = this.getConfigByKey(a[3], "count"), b = {}, c = 4; c < 4 + f; c++) {
					var d = a[c],
						e = String.fromCharCode(this.getConfigByKey(d, "id")),
						g = {};
					b[e] = g;
					g.x = this.getConfigByKey(d, "x");
					g.y = this.getConfigByKey(d, "y");
					g.w = this.getConfigByKey(d, "width");
					g.h = this.getConfigByKey(d, "height");
					g.offX = this.getConfigByKey(d, "xoffset");
					g.offY = this.getConfigByKey(d, "yoffset")
				}
				return b
			};
			b.getConfigByKey = function(a, f) {
				for (var b = a.split(" "), c = 0, d = b.length; c < d; c++) {
					var e = b[c];
					if (f == e.substring(0, f.length)) return b = e.substring(f.length + 1), parseInt(b)
				}
				return 0
			};
			return c
		}(d.SpriteSheet);
	d.BitmapFont = g;
	g.prototype.__class__ = "egret.BitmapFont"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				e.call(this);
				this._isAddedToStage = !1;
				this._frames = this._movieClipData = this._textureToRender = null;
				this._totalFrames = 0;
				this._frameLabels = null;
				this._frameIntervalTime = 0;
				this._eventPool = null;
				this._isPlaying = !1;
				this._isStopped = !0;
				this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0;
				this._setMovieClipData(a);
				this.needDraw = !0
			}
			__extends(c, e);
			var b = c.prototype;
			b._init = function() {
				this._reset();
				var a = this._movieClipData;
				a && a._isDataValid() && (this._frames = a.frames, this._totalFrames = a.numFrames, this._frameLabels = a.labels, this._frameIntervalTime = 1E3 / a.frameRate, this._initFrame())
			};
			b._reset = function() {
				this._frames = null;
				this._playTimes = 0;
				this._isPlaying = !1;
				this.setIsStopped(!0);
				this._currentFrameNum = 0;
				this._nextFrameNum = 1;
				this._passedTime = this._displayedKeyFrameNum = 0;
				this._eventPool = []
			};
			b._initFrame = function() {
				this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
			};
			b._render = function(a) {
				var f = this._textureToRender;
				if (this._texture_to_render = f) {
					var b = Math.round(f._offsetX),
						d = Math.round(f._offsetY),
						e = f._bitmapWidth || f._textureWidth,
						g = f._bitmapHeight || f._textureHeight,
						h = Math.round(e),
						k = Math.round(g);
					c.renderFilter.drawImage(a, this, f._bitmapX, f._bitmapY, e, g, b, d, h, k)
				}
			};
			b._measureBounds = function() {
				var a = this._textureToRender;
				return a ? d.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : e.prototype._measureBounds.call(this)
			};
			b._onAddToStage = function() {
				e.prototype._onAddToStage.call(this);
				this._isAddedToStage = !0;
				this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
			};
			b._onRemoveFromStage = function() {
				e.prototype._onRemoveFromStage.call(this);
				this._isAddedToStage = !1;
				this.setIsStopped(!0)
			};
			b._getFrameLabelByName = function(a, f) {
				void 0 === f && (f = !1);
				f && (a = a.toLowerCase());
				var b = this._frameLabels;
				if (b) for (var c = null, d = 0; d < b.length; d++) if (c = b[d], f ? c.name.toLowerCase() === a : c.name === a) return c;
				return null
			};
			b._getFrameLabelByFrame = function(a) {
				var f = this._frameLabels;
				if (f) for (var b = null, c = 0; c < f.length; c++) if (b = f[c], b.frame === a) return b;
				return null
			};
			b._getFrameLabelForFrame = function(a) {
				var f = null,
					b = null,
					c = this._frameLabels;
				if (c) for (var d = 0; d < c.length; d++) {
					b = c[d];
					if (b.frame > a) break;
					f = b
				}
				return f
			};
			b.play = function(a) {
				//人物动画播放
				
				void 0 === a && (a = 0);
				this._isPlaying = !0;
				this.setPlayTimes(a);
				1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
			};
			b.stop = function() {
				this._isPlaying = !1;
				this.setIsStopped(!0)
			};
			b.prevFrame = function() {
				this.gotoAndStop(this._currentFrameNum - 1)
			};
			b.nextFrame = function() {
				this.gotoAndStop(this._currentFrameNum + 1)
			};
			b.gotoAndPlay = function(a, f) {
				void 0 === f && (f = 0);
				if (0 === arguments.length || 2 < arguments.length) throw Error(d.getString(1022, "MovieClip.gotoAndPlay()"));
				this.play(f);
				this._gotoFrame(a)
			};
			b.gotoAndStop = function(a) {
				if (1 != arguments.length) throw Error(d.getString(1022, "MovieClip.gotoAndStop()"));
				this.stop();
				this._gotoFrame(a)
			};
			b._gotoFrame = function(a) {
				var f;
				if ("string" === typeof a) f = this._getFrameLabelByName(a).frame;
				else if (f = parseInt(a + "", 10), f != a) throw Error(d.getString(1022, "Frame Label Not Found"));
				1 > f ? f = 1 : f > this._totalFrames && (f = this._totalFrames);
				f !== this._nextFrameNum && (this._nextFrameNum = f, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
			};
			b._advanceTime = function(a) {
				var f = this._frameIntervalTime;
				a = this._passedTime + a;
				this._passedTime = a % f;
				f = a / f;
				if (!(1 > f)) {
					for (; 1 <= f;) {
						f--;
						this._nextFrameNum++;
						if (this._nextFrameNum > this._totalFrames) if (-1 == this._playTimes) this._eventPool.push(d.Event.LOOP_COMPLETE), this._nextFrameNum = 1;
						else if (this._playTimes--, 0 < this._playTimes) this._eventPool.push(d.Event.LOOP_COMPLETE), this._nextFrameNum = 1;
						else {
							this._nextFrameNum = this._totalFrames;
							this._eventPool.push(d.Event.COMPLETE);
							this.stop();
							break
						}
						this._advanceFrame()
					}
					this._constructFrame();
					this._handlePendingEvent()
				}
			};
			b._advanceFrame = function() {
				this._currentFrameNum = this._nextFrameNum
			};
			b._constructFrame = function() {
				var a = this._currentFrameNum;
				this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._displayedKeyFrameNum = a)
			};
			b._handlePendingEvent = function() {
				if (0 != this._eventPool.length) {
					this._eventPool.reverse();
					for (var a = this._eventPool, f = a.length, b = !1, c = !1, e = 0; e < f; e++) {
						var g = a.pop();
						g == d.Event.LOOP_COMPLETE ? c = !0 : g == d.Event.COMPLETE ? b = !0 : this.dispatchEventWith(g)
					}
					c && this.dispatchEventWith(d.Event.LOOP_COMPLETE);
					b && this.dispatchEventWith(d.Event.COMPLETE)
				}
			};
			Object.defineProperty(b, "totalFrames", {
				get: function() {
					return this._totalFrames
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "currentFrame", {
				get: function() {
					return this._currentFrameNum
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "currentFrameLabel", {
				get: function() {
					var a = this._getFrameLabelByFrame(this._currentFrameNum);
					return a && a.name
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "currentLabel", {
				get: function() {
					var a = this._getFrameLabelForFrame(this._currentFrameNum);
					return a ? a.name : null
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "frameRate", {
				get: function() {
					return this.movieClipData.frameRate
				},
				set: function(a) {
					a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1E3 / this._movieClipData.frameRate)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "isPlaying", {
				get: function() {
					return this._isPlaying
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "movieClipData", {
				get: function() {
					return this._movieClipData
				},
				set: function(a) {
					this._setMovieClipData(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setMovieClipData = function(a) {
				this._movieClipData != a && (this._movieClipData = a, this._init())
			};
			b.setPlayTimes = function(a) {
				if (0 > a || 1 <= a) this._playTimes = 0 > a ? -1 : Math.floor(a)
			};
			b.setIsStopped = function(a) {
				this._isStopped != a && ((this._isStopped = a) ? (this._playTimes = 0, d.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, d.Ticker.getInstance().register(this._advanceTime, this)))
			};
			c.renderFilter = d.RenderFilter.getInstance();
			return c
		}(d.DisplayObject);
	d.MovieClip = g;
	g.prototype.__class__ = "egret.MovieClip"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a, f) {
				d.call(this);
				this._name = a;
				this._frame = f | 0
			}
			__extends(c, d);
			var b = c.prototype;
			Object.defineProperty(b, "name", {
				get: function() {
					return this._name
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "frame", {
				get: function() {
					return this._frame
				},
				enumerable: !0,
				configurable: !0
			});
			b.clone = function() {
				return new c(this._name, this._frame)
			};
			return c
		}(d.EventDispatcher);
	d.FrameLabel = g;
	g.prototype.__class__ = "egret.FrameLabel"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._mcData = null;
				this.numFrames = 1;
				this.frames = [];
				this.labels = null;
				this.frameRate = 0;
				this.spriteSheet = this.textureData = null
			}
			__extends(c, e);
			var b = c.prototype;
			b._init = function(a, f, b) {
				this.textureData = f;
				this.spriteSheet = b;
				this._setMCData(a)
			};
			b.getKeyFrameData = function(a) {
				a = this.frames[a - 1];
				a.frame && (a = this.frames[a.frame - 1]);
				return a
			};
			b.getTextureByFrame = function(a) {
				a = this.getKeyFrameData(a);
				if (a.res) {
					var f = this.getTextureByResName(a.res);
					f._offsetX = a.x | 0;
					f._offsetY = a.y | 0;
					return f
				}
				return null
			};
			b.getTextureByResName = function(a) {
				var f = this.spriteSheet.getTexture(a);
				f || (f = this.textureData[a], f = this.spriteSheet.createTexture(a, f.x, f.y, f.w, f.h));
				return f
			};
			b._isDataValid = function() {
				return 0 < this.frames.length
			};
			b._isTextureValid = function() {
				return null != this.textureData && null != this.spriteSheet
			};
			b._fillMCData = function(a) {
				this.frameRate = a.frameRate || 24;
				this._fillFramesData(a.frames);
				this._fillFrameLabelsData(a.labels)
			};
			b._fillFramesData = function(a) {
				for (var f = this.frames, b = a ? a.length : 0, c, d = 0; d < b; d++) if (c = a[d], f.push(c), c.duration) {
					var e = parseInt(c.duration);
					if (1 < e) {
						c = f.length;
						for (var g = 1; g < e; g++) f.push({
							frame: c
						})
					}
				}
				this.numFrames = f.length
			};
			b._fillFrameLabelsData = function(a) {
				if (a) {
					var f = a.length;
					if (0 < f) {
						this.labels = [];
						for (var b = 0; b < f; b++) {
							var c = a[b];
							this.labels.push(new d.FrameLabel(c.name, c.frame))
						}
					}
				}
			};
			Object.defineProperty(b, "mcData", {
				get: function() {
					return this._mcData
				},
				set: function(a) {
					this._setMCData(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setMCData = function(a) {
				this._mcData != a && (this._mcData = a) && this._fillMCData(a)
			};
			return c
		}(d.HashObject);
	d.MovieClipData = g;
	g.prototype.__class__ = "egret.MovieClipData"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, f) {
				e.call(this);
				this.enableCache = !0;
				this._mcDataCache = {};
				this._mcDataSet = a;
				this.setTexture(f)
			}
			__extends(c, e);
			var b = c.prototype;
			b.clearCache = function() {
				this._mcDataCache = {}
			};
			b.generateMovieClipData = function(a) {
				//this._mcDataSet: 位图的json格式数据
				//this._mcDataCache: 位图行为动作的帧数据
				//a: 行为动作
				//f: 某个行为动作的帧数据
				void 0 === a && (a = "");
				if ("" == a && this._mcDataSet) for (a in this._mcDataSet.mc) break;
				if ("" == a) return null;

				var f = this._findFromCache(a, this._mcDataCache);
				f || (f = new d.MovieClipData, this._fillData(a, f, this._mcDataCache) );
				return f
			};
			b._findFromCache = function(a, f) {
				return this.enableCache && f[a] ? f[a] : null
			};
			b._fillData = function(a, f, b) {
				if (this._mcDataSet) {
					var c = this._mcDataSet.mc[a];
					c && (f._init(c, this._mcDataSet.res, this._spriteSheet), this.enableCache && (b[a] = f))
				}
			};
			Object.defineProperty(b, "mcDataSet", {
				get: function() {
					return this._mcDataSet
				},
				set: function(a) {
					this._mcDataSet = a
				},
				enumerable: !1,
				configurable: !1
			});
			Object.defineProperty(b, "texture", {
				set: function(a) {
					this.setTexture(a)
				},
				enumerable: !1,
				configurable: !1
			});
			Object.defineProperty(b, "spriteSheet", {
				get: function() {
					return this._spriteSheet
				},
				enumerable: !1,
				configurable: !1
			});
			b.setTexture = function(a) {
				//a: 整张大图资源
				this._spriteSheet = a ? new d.SpriteSheet(a) : null
			};
			return c
		}(d.EventDispatcher);
	d.MovieClipDataFactory = g;
	g.prototype.__class__ = "egret.MovieClipDataFactory"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._scaleY = this._scaleX = 1;
				this._size = 30;
				this._color = "#FFFFFF";
				this._fontFamily = "Arial";
				this._italic = this._bold = !1;
				this._textAlign = "left";
				this._verticalAlign = "top";
				this._visible = !1;
				this._height = this._width = 0;
				this._multiline = !1;
				this._maxChars = 0
			}
			__extends(c, d);
			var b = c.prototype;
			b._setTextField = function(a) {
				this._textfield = a
			};
			b._getText = function() {
				return null
			};
			b._setText = function(a) {};
			b._setTextType = function(a) {};
			b._getTextType = function() {
				return null
			};
			b._show = function(a, f, b, c) {};
			b._add = function() {};
			b._remove = function() {};
			b._hide = function() {};
			b._addListeners = function() {};
			b._removeListeners = function() {};
			b._setScale = function(a, f) {
				this._scaleX = a;
				this._scaleY = f
			};
			b.changePosition = function(a, f) {};
			b._setSize = function(a) {
				this._size = a
			};
			b._setTextColor = function(a) {
				this._color = a
			};
			b._setTextFontFamily = function(a) {
				this._fontFamily = a
			};
			b._setBold = function(a) {
				this._bold = a
			};
			b._setItalic = function(a) {
				this._italic = a
			};
			b._setTextAlign = function(a) {
				this._textAlign = a
			};
			b._setVerticalAlign = function(a) {
				this._verticalAlign = a
			};
			b._setVisible = function(a) {
				this._visible = a
			};
			b._setWidth = function(a) {
				this._width = a
			};
			b._setHeight = function(a) {
				this._height = a
			};
			b._setMultiline = function(a) {
				this._multiline = a
			};
			b._setMaxChars = function(a) {
				this._maxChars = a
			};
			b._resetStageText = function() {};
			b._initElement = function(a, f, b, c) {};
			b._removeInput = function() {};
			c.create = function() {
				return null
			};
			return c
		}(d.EventDispatcher);
	d.StageText = g;
	g.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.GET = "get";
			d.POST = "post";
			return d
		}();
	d.URLRequestMethod = g;
	g.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.BINARY = "binary";
			d.TEXT = "text";
			d.VARIABLES = "variables";
			d.TEXTURE = "texture";
			d.SOUND = "sound";
			return d
		}();
	d.URLLoaderDataFormat = g;
	g.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(a) {
				void 0 === a && (a = null);
				d.call(this);
				this.variables = null;
				null !== a && this.decode(a)
			}
			__extends(c, d);
			var b = c.prototype;
			b.decode = function(a) {
				this.variables || (this.variables = {});
				a = a.split("+").join(" ");
				for (var f, b = /[?&]?([^=]+)=([^&]*)/g; f = b.exec(a);) {
					var c = decodeURIComponent(f[1]);
					f = decodeURIComponent(f[2]);
					if (!1 == c in this.variables) this.variables[c] = f;
					else {
						var d = this.variables[c];
						d instanceof Array ? d.push(f) : this.variables[c] = [d, f]
					}
				}
			};
			b.toString = function() {
				if (!this.variables) return "";
				var a = this.variables,
					f = [],
					b;
				for (b in a) f.push(this.encodeValue(b, a[b]));
				return f.join("&")
			};
			b.encodeValue = function(a, f) {
				return f instanceof Array ? this.encodeArray(a, f) : encodeURIComponent(a) + "=" + encodeURIComponent(f)
			};
			b.encodeArray = function(a, f) {
				return a ? 0 == f.length ? encodeURIComponent(a) + "=" : f.map(function(f) {
					return encodeURIComponent(a) + "=" + encodeURIComponent(f)
				}).join("&") : ""
			};
			return c
		}(d.HashObject);
	d.URLVariables = g;
	g.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			return function(d, c) {
				this.value = this.name = "";
				this.name = d;
				this.value = c
			}
		}();
	d.URLRequestHeader = g;
	g.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(b) {
				void 0 === b && (b = null);
				e.call(this);
				this.data = null;
				this.method = d.URLRequestMethod.GET;
				this.url = "";
				this.url = b
			}
			__extends(c, e);
			return c
		}(d.HashObject);
	d.URLRequest = g;
	g.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				void 0 === a && (a = null);
				e.call(this);
				this.dataFormat = d.URLLoaderDataFormat.TEXT;
				this._request = this.data = null;
				this._status = -1;
				a && this.load(a)
			}
			__extends(c, e);
			var b = c.prototype;
			b.load = function(a) {
				this._request = a;
				this.data = null;
				d.MainContext.instance.netContext.proceed(this)
			};
			b.__recycle = function() {
				this.data = this._request = null
			};
			return c
		}(d.EventDispatcher);
	d.URLLoader = g;
	g.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
				this._bitmapData = null
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "textureWidth", {
				get: function() {
					return this._textureWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "textureHeight", {
				get: function() {
					return this._textureHeight
				},
				enumerable: !0,
				configurable: !0
			});
			b._setBitmapData = function(a) {
				var f = d.MainContext.instance.rendererContext._texture_scale_factor;
				this._bitmapData = a;
				this._sourceWidth = a.width;
				this._sourceHeight = a.height;
				this._textureWidth = this._sourceWidth * f;
				this._textureHeight = this._sourceHeight * f;
				this._bitmapWidth = this._textureWidth;
				this._bitmapHeight = this._textureHeight;
				this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
			};
			b.getPixel32 = function(a, f) {
				return this._bitmapData.getContext("2d").getImageData(a, f, 1, 1).data
			};
			b.dispose = function() {
				var a = this._bitmapData;
				a.dispose && a.dispose()
			};
			b._clone = function() {
				var a = new c;
				a._bitmapData = this._bitmapData;
				return a
			};
			return c
		}(d.HashObject);
	d.Texture = g;
	g.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this)
			}
			__extends(c, e);
			var b = c.prototype;
			b.init = function() {
				this._bitmapData = document.createElement("canvas");
				this.renderContext = d.RendererContext.createRendererContext(this._bitmapData)
			};
			b.drawToTexture = function(a, f, b) {
				var e = f || a.getBounds(d.Rectangle.identity);
				if (0 == e.width || 0 == e.height) return !1;
				this._bitmapData || this.init();
				var g = e.x,
					m = e.y,
					h = e.width,
					e = e.height,
					k, l, n = d.MainContext.instance.rendererContext._texture_scale_factor;
				k = h / n;
				l = e / n;
				k = Math.round(k);
				l = Math.round(l);
				this.setSize(k, l);
				this.begin();
				a._worldTransform.identity();
				a._worldTransform.a = 1 / n;
				a._worldTransform.d = 1 / n;
				b && (a._worldTransform.a *= b, a._worldTransform.d *= b);
				b = a._anchorOffsetX;
				n = a._anchorOffsetY;
				if (0 != a._anchorX || 0 != a._anchorY) b = a._anchorX * k, n = a._anchorY * l;
				this._offsetX = g + b;
				this._offsetY = m + n;
				a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				f && (this._offsetX -= g, this._offsetY -= m);
				a.worldAlpha = 1;
				if (a instanceof d.DisplayObjectContainer) for (f = a._children, g = 0, m = f.length; g < m; g++) f[g]._updateTransform();
				this.renderContext.setTransform(a._worldTransform);
				f = d.RenderFilter.getInstance();
				g = f._drawAreaList.concat();
				f._drawAreaList.length = 0;
				this.renderContext.clearScreen();
				this.renderContext.onRenderStart();
				d.RendererContext.deleteTexture(this);
				a._filter && this.renderContext.setGlobalFilter(a._filter);
				a._colorTransform && this.renderContext.setGlobalColorTransform(a._colorTransform.matrix);
				(m = a.mask || a._scrollRect) && this.renderContext.pushMask(m);
				b = d.MainContext.__use_new_draw;
				d.MainContext.__use_new_draw = !1;
				a._render(this.renderContext);
				d.MainContext.__use_new_draw = b;
				m && this.renderContext.popMask();
				a._colorTransform && this.renderContext.setGlobalColorTransform(null);
				a._filter && this.renderContext.setGlobalFilter(null);
				c.identityRectangle.width = k;
				c.identityRectangle.height = l;
				f.addDrawArea(c.identityRectangle);
				this.renderContext.onRenderFinish();
				f._drawAreaList = g;
				this._sourceWidth = k;
				this._sourceHeight = l;
				this._textureWidth = h;
				this._textureHeight = e;
				this.end();
				return !0
			};
			b.setSize = function(a, f) {
				var b = this._bitmapData;
				b.width = a;
				b.height = f;
				b.style.width = a + "px";
				b.style.height = f + "px";
				this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = f)
			};
			b.begin = function() {};
			b.end = function() {};
			b.dispose = function() {
				this._bitmapData && (this.renderContext = this._bitmapData = null)
			};
			c.identityRectangle = new d.Rectangle;
			return c
		}(d.Texture);
	d.RenderTexture = g;
	g.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.renderCost = 0;
				this._texture_scale_factor = 1;
				this.profiler = d.Profiler.getInstance();
				c.blendModesForGL || c.initBlendMode()
			}
			__extends(c, e);
			var b = c.prototype;
			Object.defineProperty(b, "texture_scale_factor", {
				get: function() {
					return this._texture_scale_factor
				},
				set: function(a) {
					this._setTextureScaleFactor(a)
				},
				enumerable: !0,
				configurable: !0
			});
			b._setTextureScaleFactor = function(a) {
				this._texture_scale_factor = a
			};
			b.clearScreen = function() {};
			b.clearRect = function(a, f, b, c) {};
			b.drawImage = function(a, f, b, c, d, e, g, k, l, n) {
				this.profiler.onDrawImage()
			};
			b.drawImageScale9 = function(a, f, b, c, d, e, g, k, l, n) {
				return !1
			};
			b._addOneDraw = function() {
				this.profiler.onDrawImage()
			};
			b.setTransform = function(a) {};
			b.setAlpha = function(a, f) {};
			b.setupFont = function(a, f) {};
			b.measureText = function(a) {
				return 0
			};
			b.drawText = function(a, f, b, c, d, e) {
				this.profiler.onDrawImage()
			};
			b.strokeRect = function(a, f, b, c, d) {};
			b.pushMask = function(a) {};
			b.popMask = function() {};
			b.onRenderStart = function() {};
			b.onRenderFinish = function() {};
			b.setGlobalColorTransform = function(a) {};
			b.setGlobalFilter = function(a) {};
			b.drawCursor = function(a, f, b, c) {};
			c.createRendererContext = function(a) {
				return null
			};
			c.deleteTexture = function(a) {
				var f = d.MainContext.instance.rendererContext.gl;
				if (a = a._bitmapData) {
					var b = a.webGLTexture;
					if (b && f) for (var c in b) f.deleteTexture(b[c]);
					a.webGLTexture = null
				}
			};
			c.initBlendMode = function() {
				c.blendModesForGL = {};
				c.blendModesForGL[d.BlendMode.NORMAL] = [1, 771];
				c.blendModesForGL[d.BlendMode.ADD] = [770, 1];
				c.blendModesForGL[d.BlendMode.ERASE] = [0, 771];
				c.blendModesForGL[d.BlendMode.ERASE_REVERSE] = [0, 770]
			};
			c.registerBlendModeForGL = function(a, b, p, e) {
				c.blendModesForGL[a] && !e ? d.Logger.warningWithErrorId(1005, a) : c.blendModesForGL[a] = [b, p]
			};
			c.imageSmoothingEnabled = !0;
			c.blendModesForGL = null;
			return c
		}(d.HashObject);
	d.RendererContext = g;
	g.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.MOUSE = "mouse";
			d.TOUCH = "touch";
			d.mode = "touch";
			return d
		}();
	d.InteractionMode = g;
	g.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._currentTouchTarget = {};
				this.maxTouches = 2;
				this.touchDownTarget = {};
				this.touchingIdentifiers = [];
				this.lastTouchY = this.lastTouchX = -1
			}
			__extends(c, e);
			var b = c.prototype;
			b.run = function() {};
			b.getTouchData = function(a, b, c) {
				var d = this._currentTouchTarget[a];
				null == d && (d = {}, this._currentTouchTarget[a] = d);
				d.stageX = b;
				d.stageY = c;
				d.identifier = a;
				return d
			};
			b.dispatchEvent = function(a, b) {
				d.TouchEvent.dispatchTouchEvent(b.target, a, b.identifier, b.stageX, b.stageY, !1, !1, !1, !0 == this.touchDownTarget[b.identifier])
			};
			b.onTouchBegan = function(a, b, c) {
				if (this.touchingIdentifiers.length != this.maxTouches) {
					var e = d.MainContext.instance.stage.hitTest(a, b);
					e && (a = this.getTouchData(c, a, b), this.touchDownTarget[c] = !0, a.target = e, a.beginTarget = e, this.dispatchEvent(d.TouchEvent.TOUCH_BEGIN, a));
					this.touchingIdentifiers.push(c)
				}
			};
			b.onTouchMove = function(a, b, c) {
				if (-1 != this.touchingIdentifiers.indexOf(c) && (a != this.lastTouchX || b != this.lastTouchY)) {
					this.lastTouchX = a;
					this.lastTouchY = b;
					var e = d.MainContext.instance.stage.hitTest(a, b);
					e && (a = this.getTouchData(c, a, b), a.target = e, this.dispatchEvent(d.TouchEvent.TOUCH_MOVE, a))
				}
			};
			b.onTouchEnd = function(a, b, c) {
				var e = this.touchingIdentifiers.indexOf(c); - 1 != e && (this.touchingIdentifiers.splice(e, 1), e = d.MainContext.instance.stage.hitTest(a, b)) && (a = this.getTouchData(c, a, b), delete this.touchDownTarget[c], c = a.beginTarget, a.target = e, this.dispatchEvent(d.TouchEvent.TOUCH_END, a), c == e ? this.dispatchEvent(d.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(d.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
			};
			return c
		}(d.HashObject);
	d.TouchContext = g;
	g.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this)
			}
			__extends(c, e);
			var b = c.prototype;
			b.proceed = function(a) {};
			c._getUrl = function(a) {
				var b = a.url; - 1 == b.indexOf("?") && a.method == d.URLRequestMethod.GET && a.data && a.data instanceof d.URLVariables && (b = b + "?" + a.data.toString());
				return b
			};
			b.getChangeList = function() {
				return []
			};
			return c
		}(d.HashObject);
	d.NetContext = g;
	g.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this.frameRate = 60
			}
			__extends(c, d);
			c.prototype.executeMainLoop = function(b, a) {};
			return c
		}(d.HashObject);
	d.DeviceContext = g;
	g.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.call = function(c, b) {};
			d.addCallback = function(c, b) {};
			return d
		}();
	d.ExternalInterface = g;
	g.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.trans = null;
				this.header = "";
				this.ua = navigator.userAgent.toLowerCase();
				this.trans = this.getTrans("transform")
			}
			__extends(c, e);
			var b = c.prototype;
			c.getInstance = function() {
				null == c.instance && (c.instance = new c);
				return c.instance
			};
			Object.defineProperty(b, "isMobile", {
				get: function() {
					d.Logger.warningWithErrorId(1E3);
					return d.MainContext.deviceType == d.MainContext.DEVICE_MOBILE
				},
				enumerable: !0,
				configurable: !0
			});
			b.getUserAgent = function() {
				return this.ua
			};
			b.getTrans = function(a) {
				"" == this.header && (this.header = this.getHeader());
				return this.header + a.substring(1, a.length)
			};
			b.getHeader = function() {
				for (var a = document.createElement("div").style, b = ["t", "webkitT", "msT", "MozT", "OT"], c = 0; c < b.length; c++) if (b[c] + "ransform" in a) return b[c];
				return b[0]
			};
			b.$new = function(a) {
				return this.$(document.createElement(a))
			};
			b.$ = function(a) {
				var b = document;
				if (a = a instanceof HTMLElement ? a : b.querySelector(a)) a.find = a.find || this.$, a.hasClass = a.hasClass ||
				function(a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				}, a.addClass = a.addClass ||
				function(a) {
					this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
					return this
				}, a.removeClass = a.removeClass ||
				function(a) {
					this.hasClass(a) && (this.className = this.className.replace(a, ""));
					return this
				}, a.remove = a.remove ||
				function() {}, a.appendTo = a.appendTo ||
				function(a) {
					a.appendChild(this);
					return this
				}, a.prependTo = a.prependTo ||
				function(a) {
					a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
					return this
				}, a.transforms = a.transforms ||
				function() {
					this.style[c.getInstance().trans] = c.getInstance().translate(this.position) + c.getInstance().rotate(this.rotation) + c.getInstance().scale(this.scale) + c.getInstance().skew(this.skew);
					return this
				}, a.position = a.position || {
					x: 0,
					y: 0
				}, a.rotation = a.rotation || 0, a.scale = a.scale || {
					x: 1,
					y: 1
				}, a.skew = a.skew || {
					x: 0,
					y: 0
				}, a.translates = function(a, b) {
					this.position.x = a;
					this.position.y = b - d.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this
				}, a.rotate = function(a) {
					this.rotation = a;
					this.transforms();
					return this
				}, a.resize = function(a, b) {
					this.scale.x = a;
					this.scale.y = b;
					this.transforms();
					return this
				}, a.setSkew = function(a, b) {
					this.skew.x = a;
					this.skew.y = b;
					this.transforms();
					return this
				};
				return a
			};
			b.translate = function(a) {
				return "translate(" + a.x + "px, " + a.y + "px) "
			};
			b.rotate = function(a) {
				return "rotate(" + a + "deg) "
			};
			b.scale = function(a) {
				return "scale(" + a.x + ", " + a.y + ") "
			};
			b.skew = function(a) {
				return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
			};
			return c
		}(d.HashObject);
	d.Browser = g;
	g.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(d) {
	(function(d) {
		d.getItem = function(d) {
			return null
		};
		d.setItem = function(d, c) {
			return !1
		};
		d.removeItem = function(d) {};
		d.clear = function() {}
	})(d.localStorage || (d.localStorage = {}))
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {}
			e.parse = function(c) {
				c = d.SAXParser.getInstance().parserXML(c);
				if (!c || !c.childNodes) return null;
				for (var b = c.childNodes.length, a = !1, f = 0; f < b; f++) {
					var p = c.childNodes[f];
					if (1 == p.nodeType) {
						a = !0;
						break
					}
				}
				return a ? e.parseNode(p) : null
			};
			e.parseNode = function(c) {
				if (!c || 1 != c.nodeType) return null;
				var b = {};
				b.localName = c.localName;
				b.name = c.nodeName;
				c.namespaceURI && (b.namespace = c.namespaceURI);
				c.prefix && (b.prefix = c.prefix);
				for (var a = c.attributes, f = a.length, d = 0; d < f; d++) {
					var g = a[d],
						t = g.name;
					0 != t.indexOf("xmlns:") && (b["$" + t] = g.value)
				}
				a = c.childNodes;
				f = a.length;
				for (d = 0; d < f; d++) if (g = e.parseNode(a[d])) b.children || (b.children = []), g.parent = b, b.children.push(g);
				!b.children && (c = c.textContent.trim()) && (b.text = c);
				return b
			};
			e.findChildren = function(c, b, a) {
				a ? a.length = 0 : a = [];
				e.findByPath(c, b, a);
				return a
			};
			e.findByPath = function(c, b, a) {
				var f = b.indexOf("."),
					d; - 1 == f ? (d = b, f = !0) : (d = b.substring(0, f), b = b.substring(f + 1), f = !1);
				if (c = c.children) for (var g = c.length, t = 0; t < g; t++) {
					var m = c[t];
					m.localName == d && (f ? a.push(m) : e.findByPath(m, b, a))
				}
			};
			e.getAttributes = function(c, b) {
				b ? b.length = 0 : b = [];
				for (var a in c)"$" == a.charAt(0) && b.push(a.substring(1));
				return b
			};
			return e
		}();
	d.XML = g;
	g.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function c() {}
			c.LITTLE_ENDIAN = "littleEndian";
			c.BIG_ENDIAN = "bigEndian";
			return c
		}();
	d.Endian = g;
	g.prototype.__class__ = "egret.Endian";
	var e = function() {
			function c(a) {
				this.BUFFER_EXT_SIZE = 0;
				this.EOF_code_point = this.EOF_byte = -1;
				this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE));
				this.endian = g.BIG_ENDIAN
			}
			var b = c.prototype;
			b._setArrayBuffer = function(a) {
				this.write_position = a.byteLength;
				this.data = new DataView(a);
				this._position = 0
			};
			b.setArrayBuffer = function(a) {};
			Object.defineProperty(b, "buffer", {
				get: function() {
					return this.data.buffer
				},
				set: function(a) {
					this.data = new DataView(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "dataView", {
				get: function() {
					return this.data
				},
				set: function(a) {
					this.data = a;
					this.write_position = a.byteLength
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "bufferOffset", {
				get: function() {
					return this.data.byteOffset
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "position", {
				get: function() {
					return this._position
				},
				set: function(a) {
					this._position < a && !this.validate(a - this._position) || (this._position = a, this.write_position = a > this.write_position ? a : this.write_position)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "length", {
				get: function() {
					return this.write_position
				},
				set: function(a) {
					this.validateBuffer(a, !0)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "bytesAvailable", {
				get: function() {
					return this.data.byteLength - this._position
				},
				enumerable: !0,
				configurable: !0
			});
			b.clear = function() {
				this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
			};
			b.readBoolean = function() {
				return this.validate(c.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
			};
			b.readByte = function() {
				return this.validate(c.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
			};
			b.readBytes = function(a, b, d) {
				void 0 === b && (b = 0);
				void 0 === d && (d = 0);
				if (0 == d) d = this.bytesAvailable;
				else if (!this.validate(d)) return null;
				a ? a.validateBuffer(d) : a = new c(new ArrayBuffer(d));
				for (var e = 0; e < d; e++) a.data.setUint8(e + b, this.data.getUint8(this.position++))
			};
			b.readDouble = function() {
				if (!this.validate(c.SIZE_OF_FLOAT64)) return null;
				var a = this.data.getFloat64(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_FLOAT64;
				return a
			};
			b.readFloat = function() {
				if (!this.validate(c.SIZE_OF_FLOAT32)) return null;
				var a = this.data.getFloat32(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_FLOAT32;
				return a
			};
			b.readInt = function() {
				if (!this.validate(c.SIZE_OF_INT32)) return null;
				var a = this.data.getInt32(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_INT32;
				return a
			};
			b.readShort = function() {
				if (!this.validate(c.SIZE_OF_INT16)) return null;
				var a = this.data.getInt16(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_INT16;
				return a
			};
			b.readUnsignedByte = function() {
				return this.validate(c.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
			};
			b.readUnsignedInt = function() {
				if (!this.validate(c.SIZE_OF_UINT32)) return null;
				var a = this.data.getUint32(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_UINT32;
				return a
			};
			b.readUnsignedShort = function() {
				if (!this.validate(c.SIZE_OF_UINT16)) return null;
				var a = this.data.getUint16(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_UINT16;
				return a
			};
			b.readUTF = function() {
				if (!this.validate(c.SIZE_OF_UINT16)) return null;
				var a = this.data.getUint16(this.position, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_UINT16;
				return 0 < a ? this.readUTFBytes(a) : ""
			};
			b.readUTFBytes = function(a) {
				if (!this.validate(a)) return null;
				var b = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
				this.position += a;
				return this.decodeUTF8(b)
			};
			b.writeBoolean = function(a) {
				this.validateBuffer(c.SIZE_OF_BOOLEAN);
				this.data.setUint8(this.position++, a ? 1 : 0)
			};
			b.writeByte = function(a) {
				this.validateBuffer(c.SIZE_OF_INT8);
				this.data.setInt8(this.position++, a)
			};
			b.writeBytes = function(a, b, c) {
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				if (!(0 > b || 0 > c) && (c = 0 == c ? a.length - b : Math.min(a.length - b, c), 0 < c)) {
					this.validateBuffer(c);
					a = new DataView(a.buffer);
					for (var d = b; d < c + b; d++) this.data.setUint8(this.position++, a.getUint8(d))
				}
			};
			b.writeDouble = function(a) {
				this.validateBuffer(c.SIZE_OF_FLOAT64);
				this.data.setFloat64(this.position, a, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_FLOAT64
			};
			b.writeFloat = function(a) {
				this.validateBuffer(c.SIZE_OF_FLOAT32);
				this.data.setFloat32(this.position, a, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_FLOAT32
			};
			b.writeInt = function(a) {
				this.validateBuffer(c.SIZE_OF_INT32);
				this.data.setInt32(this.position, a, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_INT32
			};
			b.writeShort = function(a) {
				this.validateBuffer(c.SIZE_OF_INT16);
				this.data.setInt16(this.position, a, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_INT16
			};
			b.writeUnsignedInt = function(a) {
				this.validateBuffer(c.SIZE_OF_UINT32);
				this.data.setUint32(this.position, a, this.endian == g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_UINT32
			};
			b.writeUTF = function(a) {
				a = this.encodeUTF8(a);
				var b = a.length;
				this.validateBuffer(c.SIZE_OF_UINT16 + b);
				this.data.setUint16(this.position, b, this.endian === g.LITTLE_ENDIAN);
				this.position += c.SIZE_OF_UINT16;
				this._writeUint8Array(a, !1)
			};
			b.writeUTFBytes = function(a) {
				this._writeUint8Array(this.encodeUTF8(a))
			};
			b.toString = function() {
				return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
			};
			b._writeUint8Array = function(a, b) {
				void 0 === b && (b = !0);
				b && this.validateBuffer(this.position + a.length);
				for (var c = 0; c < a.length; c++) this.data.setUint8(this.position++, a[c])
			};
			b.validate = function(a) {
				if (0 < this.data.byteLength && this._position + a <= this.data.byteLength) return !0;
				throw d.getString(1025);
			};
			b.validateBuffer = function(a, b) {
				void 0 === b && (b = !1);
				this.write_position = a > this.write_position ? a : this.write_position;
				a += this._position;
				if (this.data.byteLength < a || b) {
					var c = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)),
						d = Math.min(this.data.buffer.byteLength, a + this.BUFFER_EXT_SIZE);
					c.set(new Uint8Array(this.data.buffer, 0, d));
					this.buffer = c.buffer
				}
			};
			b.encodeUTF8 = function(a) {
				var b = 0;
				a = this.stringToCodePoints(a);
				for (var c = []; a.length > b;) {
					var d = a[b++];
					if (this.inRange(d, 55296, 57343)) this.encoderError(d);
					else if (this.inRange(d, 0, 127)) c.push(d);
					else {
						var e, g;
						this.inRange(d, 128, 2047) ? (e = 1, g = 192) : this.inRange(d, 2048, 65535) ? (e = 2, g = 224) : this.inRange(d, 65536, 1114111) && (e = 3, g = 240);
						for (c.push(this.div(d, Math.pow(64, e)) + g); 0 < e;) {
							var h = this.div(d, Math.pow(64, e - 1));
							c.push(128 + h % 64);
							e -= 1
						}
					}
				}
				return new Uint8Array(c)
			};
			b.decodeUTF8 = function(a) {
				for (var b = 0, c = "", d, e = 0, g = 0, h = 0, k = 0; a.length > b;) {
					d = a[b++];
					if (d === this.EOF_byte) d = 0 !== g ? this.decoderError(!1) : this.EOF_code_point;
					else if (0 === g) this.inRange(d, 0, 127) || (this.inRange(d, 194, 223) ? (g = 1, k = 128, e = d - 192) : this.inRange(d, 224, 239) ? (g = 2, k = 2048, e = d - 224) : this.inRange(d, 240, 244) ? (g = 3, k = 65536, e = d - 240) : this.decoderError(!1), e *= Math.pow(64, g), d = null);
					else if (this.inRange(d, 128, 191)) if (h += 1, e += (d - 128) * Math.pow(64, g - h), h !== g) d = null;
					else {
						var l = e,
							n = k,
							k = h = g = e = 0;
						d = this.inRange(l, n, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, d)
					} else k = h = g = e = 0, b--, d = this.decoderError(!1, d);
					null !== d && d !== this.EOF_code_point && (65535 >= d ? 0 < d && (c += String.fromCharCode(d)) : (d -= 65536, c += String.fromCharCode(55296 + (d >> 10 & 1023)), c += String.fromCharCode(56320 + (d & 1023))))
				}
				return c
			};
			b.encoderError = function(a) {
				throw d.getString(1026, a);
			};
			b.decoderError = function(a, b) {
				if (a) throw d.getString(1027);
				return b || 65533
			};
			b.inRange = function(a, b, c) {
				return b <= a && a <= c
			};
			b.div = function(a, b) {
				return Math.floor(a / b)
			};
			b.stringToCodePoints = function(a) {
				for (var b = [], c = 0, d = a.length; c < a.length;) {
					var e = a.charCodeAt(c);
					if (this.inRange(e, 55296, 57343)) if (this.inRange(e, 56320, 57343)) b.push(65533);
					else if (c === d - 1) b.push(65533);
					else {
						var g = a.charCodeAt(c + 1);
						this.inRange(g, 56320, 57343) ? (e &= 1023, g &= 1023, c += 1, b.push(65536 + (e << 10) + g)) : b.push(65533)
					} else b.push(e);
					c += 1
				}
				return b
			};
			c.SIZE_OF_BOOLEAN = 1;
			c.SIZE_OF_INT8 = 1;
			c.SIZE_OF_INT16 = 2;
			c.SIZE_OF_INT32 = 4;
			c.SIZE_OF_UINT8 = 1;
			c.SIZE_OF_UINT16 = 2;
			c.SIZE_OF_UINT32 = 4;
			c.SIZE_OF_FLOAT32 = 4;
			c.SIZE_OF_FLOAT64 = 8;
			return c
		}();
	d.ByteArray = e;
	e.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
(function(d) {
	d.getOption = function(d) {
		if (window.hasOwnProperty("location")) {
			var e = location.search;
			if ("" == e) return "";
			for (var e = e.slice(1), e = e.split("&"), c = e.length, b = 0; b < c; b++) {
				var a = e[b].split("=");
				if (a[0] == d) return a[1]
			}
		}
		return ""
	}
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c(a, b, c) {
				e.call(this);
				this._target = null;
				this.loop = this.ignoreGlobalPause = this._useTicks = !1;
				this._actions = this._steps = this.pluginData = null;
				this.paused = !1;
				this.duration = 0;
				this._prevPos = -1;
				this.position = null;
				this._stepPosition = this._prevPosition = 0;
				this.passive = !1;
				this.initialize(a, b, c)
			}
			__extends(c, e);
			var b = c.prototype;
			c.get = function(a, b, d, e) {
				void 0 === b && (b = null);
				void 0 === d && (d = null);
				void 0 === e && (e = !1);
				e && c.removeTweens(a);
				return new c(a, b, d)
			};
			c.removeTweens = function(a) {
				if (a.tween_count) {
					for (var b = c._tweens, d = b.length - 1; 0 <= d; d--) b[d]._target == a && (b[d].paused = !0, b.splice(d, 1));
					a.tween_count = 0
				}
			};
			c.pauseTweens = function(a) {
				if (a.tween_count) for (var b = d.Tween._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == a && (b[c].paused = !0)
			};
			c.resumeTweens = function(a) {
				if (a.tween_count) for (var b = d.Tween._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == a && (b[c].paused = !1)
			};
			c.tick = function(a, b) {
				void 0 === b && (b = !1);
				for (var d = c._tweens.concat(), e = d.length - 1; 0 <= e; e--) {
					var g = d[e];
					b && !g.ignoreGlobalPause || g.paused || g.tick(g._useTicks ? 1 : a)
				}
			};
			c._register = function(a, b) {
				var e = a._target,
					g = c._tweens;
				if (b) e && (e.tween_count = 0 < e.tween_count ? e.tween_count + 1 : 1), g.push(a), c._inited || (d.Ticker.getInstance().register(c.tick, null), c._inited = !0);
				else for (e && e.tween_count--, e = g.length; e--;) if (g[e] == a) {
					g.splice(e, 1);
					break
				}
			};
			c.removeAllTweens = function() {
				for (var a = c._tweens, b = 0, d = a.length; b < d; b++) {
					var e = a[b];
					e.paused = !0;
					e._target.tweenjs_count = 0
				}
				a.length = 0
			};
			b.initialize = function(a, b, d) {
				this._target = a;
				b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && c.removeTweens(a));
				this.pluginData = d || {};
				this._curQueueProps = {};
				this._initQueueProps = {};
				this._steps = [];
				this._actions = [];
				b && b.paused ? this.paused = !0 : c._register(this, !0);
				b && null != b.position && this.setPosition(b.position, c.NONE)
			};
			b.setPosition = function(a, b) {
				void 0 === b && (b = 1);
				0 > a && (a = 0);
				var c = a,
					d = !1;
				c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0));
				if (c == this._prevPos) return d;
				var e = this._prevPos;
				this.position = this._prevPos = c;
				this._prevPosition = a;
				if (this._target) if (d) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
					for (var g = 0, h = this._steps.length; g < h && !(this._steps[g].t > c); g++);
					g = this._steps[g - 1];
					this._updateTargetProps(g, (this._stepPosition = c - g.t) / g.d)
				}
				0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < e ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c));
				d && this.setPaused(!0);
				this.dispatchEventWith("change");
				return d
			};
			b._runActions = function(a, b, c) {
				void 0 === c && (c = !1);
				var d = a,
					e = b,
					g = -1,
					h = this._actions.length,
					k = 1;
				a > b && (d = b, e = a, g = h, h = k = -1);
				for (;
				(g += k) != h;) {
					b = this._actions[g];
					var l = b.t;
					(l == e || l > d && l < e || c && l == a) && b.f.apply(b.o, b.p)
				}
			};
			b._updateTargetProps = function(a, b) {
				var d, e, g, m;
				if (a || 1 != b) {
					if (this.passive = !! a.v) return;
					a.e && (b = a.e(b, 0, 1, 1));
					d = a.p0;
					e = a.p1
				} else this.passive = !1, d = e = this._curQueueProps;
				for (var h in this._initQueueProps) {
					null == (g = d[h]) && (d[h] = g = this._initQueueProps[h]);
					null == (m = e[h]) && (e[h] = m = g);
					g = g == m || 0 == b || 1 == b || "number" != typeof g ? 1 == b ? m : g : g + (m - g) * b;
					var k = !1;
					if (m = c._plugins[h]) for (var l = 0, n = m.length; l < n; l++) {
						var q = m[l].tween(this, h, g, d, e, b, !! a && d == e, !a);
						q == c.IGNORE ? k = !0 : g = q
					}
					k || (this._target[h] = g)
				}
			};
			b.setPaused = function(a) {
				this.paused = a;
				c._register(this, !a);
				return this
			};
			b._cloneProps = function(a) {
				var b = {},
					c;
				for (c in a) b[c] = a[c];
				return b
			};
			b._addStep = function(a) {
				0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
				return this
			};
			b._appendQueueProps = function(a) {
				var b, d, e, g, m, h;
				for (h in a) if (void 0 === this._initQueueProps[h]) {
					d = this._target[h];
					if (b = c._plugins[h]) for (e = 0, g = b.length; e < g; e++) d = b[e].init(this, h, d);
					this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
				}
				for (h in a) {
					d = this._curQueueProps[h];
					if (b = c._plugins[h]) for (m = m || {}, e = 0, g = b.length; e < g; e++) b[e].step && b[e].step(this, h, d, a[h], m);
					this._curQueueProps[h] = a[h]
				}
				m && this._appendQueueProps(m);
				return this._curQueueProps
			};
			b._addAction = function(a) {
				a.t = this.duration;
				this._actions.push(a);
				return this
			};
			b._set = function(a, b) {
				for (var c in a) b[c] = a[c]
			};
			b.wait = function(a, b) {
				if (null == a || 0 >= a) return this;
				var c = this._cloneProps(this._curQueueProps);
				return this._addStep({
					d: a,
					p0: c,
					p1: c,
					v: b
				})
			};
			b.to = function(a, b, c) {
				void 0 === c && (c = void 0);
				if (isNaN(b) || 0 > b) b = 0;
				return this._addStep({
					d: b || 0,
					p0: this._cloneProps(this._curQueueProps),
					e: c,
					p1: this._cloneProps(this._appendQueueProps(a))
				})
			};
			b.call = function(a, b, c) {
				void 0 === b && (b = void 0);
				void 0 === c && (c = void 0);
				return this._addAction({
					f: a,
					p: c ? c : [],
					o: b ? b : this._target
				})
			};
			b.set = function(a, b) {
				void 0 === b && (b = null);
				return this._addAction({
					f: this._set,
					o: this,
					p: [a, b ? b : this._target]
				})
			};
			b.play = function(a) {
				a || (a = this);
				return this.call(a.setPaused, a, [!1])
			};
			b.pause = function(a) {
				a || (a = this);
				return this.call(a.setPaused, a, [!0])
			};
			b.tick = function(a) {
				this.paused || this.setPosition(this._prevPosition + a)
			};
			c.NONE = 0;
			c.LOOP = 1;
			c.REVERSE = 2;
			c._tweens = [];
			c.IGNORE = {};
			c._plugins = {};
			c._inited = !1;
			return c
		}(d.EventDispatcher);
	d.Tween = g;
	g.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e() {
				d.Logger.fatalWithErrorId(1014)
			}
			e.get = function(c) {
				-1 > c && (c = -1);
				1 < c && (c = 1);
				return function(b) {
					return 0 == c ? b : 0 > c ? b * (b * -c + 1 + c) : b * ((2 - b) * c + (1 - c))
				}
			};
			e.getPowIn = function(c) {
				return function(b) {
					return Math.pow(b, c)
				}
			};
			e.getPowOut = function(c) {
				return function(b) {
					return 1 - Math.pow(1 - b, c)
				}
			};
			e.getPowInOut = function(c) {
				return function(b) {
					return 1 > (b *= 2) ? 0.5 * Math.pow(b, c) : 1 - 0.5 * Math.abs(Math.pow(2 - b, c))
				}
			};
			e.sineIn = function(c) {
				return 1 - Math.cos(c * Math.PI / 2)
			};
			e.sineOut = function(c) {
				return Math.sin(c * Math.PI / 2)
			};
			e.sineInOut = function(c) {
				return -0.5 * (Math.cos(Math.PI * c) - 1)
			};
			e.getBackIn = function(c) {
				return function(b) {
					return b * b * ((c + 1) * b - c)
				}
			};
			e.getBackOut = function(c) {
				return function(b) {
					return --b * b * ((c + 1) * b + c) + 1
				}
			};
			e.getBackInOut = function(c) {
				c *= 1.525;
				return function(b) {
					return 1 > (b *= 2) ? 0.5 * b * b * ((c + 1) * b - c) : 0.5 * ((b -= 2) * b * ((c + 1) * b + c) + 2)
				}
			};
			e.circIn = function(c) {
				return -(Math.sqrt(1 - c * c) - 1)
			};
			e.circOut = function(c) {
				return Math.sqrt(1 - --c * c)
			};
			e.circInOut = function(c) {
				return 1 > (c *= 2) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
			};
			e.bounceIn = function(c) {
				return 1 - e.bounceOut(1 - c)
			};
			e.bounceOut = function(c) {
				return c < 1 / 2.75 ? 7.5625 * c * c : c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375
			};
			e.bounceInOut = function(c) {
				return 0.5 > c ? 0.5 * e.bounceIn(2 * c) : 0.5 * e.bounceOut(2 * c - 1) + 0.5
			};
			e.getElasticIn = function(c, b) {
				var a = 2 * Math.PI;
				return function(f) {
					if (0 == f || 1 == f) return f;
					var d = b / a * Math.asin(1 / c);
					return -(c * Math.pow(2, 10 * (f -= 1)) * Math.sin((f - d) * a / b))
				}
			};
			e.getElasticOut = function(c, b) {
				var a = 2 * Math.PI;
				return function(f) {
					if (0 == f || 1 == f) return f;
					var d = b / a * Math.asin(1 / c);
					return c * Math.pow(2, -10 * f) * Math.sin((f - d) * a / b) + 1
				}
			};
			e.getElasticInOut = function(c, b) {
				var a = 2 * Math.PI;
				return function(f) {
					var d = b / a * Math.asin(1 / c);
					return 1 > (f *= 2) ? -0.5 * c * Math.pow(2, 10 * (f -= 1)) * Math.sin((f - d) * a / b) : c * Math.pow(2, -10 * (f -= 1)) * Math.sin((f - d) * a / b) * 0.5 + 1
				}
			};
			e.quadIn = e.getPowIn(2);
			e.quadOut = e.getPowOut(2);
			e.quadInOut = e.getPowInOut(2);
			e.cubicIn = e.getPowIn(3);
			e.cubicOut = e.getPowOut(3);
			e.cubicInOut = e.getPowInOut(3);
			e.quartIn = e.getPowIn(4);
			e.quartOut = e.getPowOut(4);
			e.quartInOut = e.getPowInOut(4);
			e.quintIn = e.getPowIn(5);
			e.quintOut = e.getPowOut(5);
			e.quintInOut = e.getPowInOut(5);
			e.backIn = e.getBackIn(1.7);
			e.backOut = e.getBackOut(1.7);
			e.backInOut = e.getBackInOut(1.7);
			e.elasticIn = e.getElasticIn(1, 0.3);
			e.elasticOut = e.getElasticOut(1, 0.3);
			e.elasticInOut = e.getElasticInOut(1, 0.3 * 1.5);
			return e
		}();
	d.Ease = g;
	g.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {
				this.path = "";
				this.audio = null;
				this.type = d.EFFECT
			}
			var c = d.prototype;
			c.play = function(b) {
				void 0 === b && (b = !1);
				var a = this.audio;
				a && (isNaN(a.duration) || (a.currentTime = 0), a.loop = b, a.play())
			};
			c.pause = function() {
				var b = this.audio;
				b && b.pause()
			};
			c.load = function() {
				var b = this.audio;
				b && b.load()
			};
			c.addEventListener = function(b, a) {
				this.audio && this.audio.addEventListener(b, a, !1)
			};
			c.removeEventListener = function(b, a) {
				this.audio && this.audio.removeEventListener(b, a, !1)
			};
			c.setVolume = function(b) {
				var a = this.audio;
				a && (a.volume = b)
			};
			c.getVolume = function() {
				return this.audio ? this.audio.volume : 0
			};
			c.preload = function(b) {
				this.type = b
			};
			c._setAudio = function(b) {
				this.audio = b
			};
			d.MUSIC = "music";
			d.EFFECT = "effect";
			return d
		}();
	d.Sound = g;
	g.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function d() {}
			d.isNumber = function(c) {
				return "number" === typeof c && !isNaN(c)
			};
			d.sin = function(c) {
				c = Math.round(c);
				c %= 360;
				0 > c && (c += 360);
				return 90 > c ? egret_sin_map[c] : 180 > c ? egret_cos_map[c - 90] : 270 > c ? -egret_sin_map[c - 180] : -egret_cos_map[c - 270]
			};
			d.cos = function(c) {
				c = Math.round(c);
				c %= 360;
				0 > c && (c += 360);
				return 90 > c ? egret_cos_map[c] : 180 > c ? -egret_sin_map[c - 90] : 270 > c ? -egret_cos_map[c - 180] : egret_sin_map[c - 270]
			};
			return d
		}();
	d.NumberUtils = g;
	g.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, NumberUtils_i = 0; 90 >= NumberUtils_i; NumberUtils_i++) egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * egret.Matrix.DEG_TO_RAD), egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(d) {
	if ("function" !== typeof this) throw new TypeError(egret.getString(1029));
	var g = Array.prototype.slice.call(arguments, 1),
		e = this,
		c = function() {},
		b = function() {
			return e.apply(this instanceof c && d ? this : d, g.concat(Array.prototype.slice.call(arguments)))
		};
	c.prototype = this.prototype;
	b.prototype = new c;
	return b
});
(function(d) {
	var g = function(e) {
			function c(a) {
				void 0 === a && (a = 60);
				e.call(this);
				this.frameRate = a;
				this._time = 0;
				this._requestAnimationId = NaN;
				this._isActivate = !0;
				60 == a && (c.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, c.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
				c.requestAnimationFrame || (c.requestAnimationFrame = function(b) {
					return window.setTimeout(b, 1E3 / a)
				});
				c.cancelAnimationFrame || (c.cancelAnimationFrame = function(a) {
					return window.clearTimeout(a)
				});
				c.instance = this;
				this.registerListener()
			}
			__extends(c, e);
			var b = c.prototype;
			b.enterFrame = function() {
				var a = c.instance,
					b = c._thisObject,
					e = c._callback,
					g = d.getTimer(),
					t = g - a._time;
				a._requestAnimationId = c.requestAnimationFrame.call(window, c.prototype.enterFrame);
				e.call(b, t);
				a._time = g
			};
			b.executeMainLoop = function(a, b) {
				c._callback = a;
				c._thisObject = b;
				this.enterFrame()
			};
			b.reset = function() {
				var a = c.instance;
				a._requestAnimationId && (a._time = d.getTimer(), c.cancelAnimationFrame.call(window, a._requestAnimationId), a.enterFrame())
			};
			b.registerListener = function() {
				var a = this,
					b = function() {
						a._isActivate && (a._isActivate = !1, d.MainContext.instance.stage.dispatchEvent(new d.Event(d.Event.DEACTIVATE)))
					},
					e = function() {
						a._isActivate || (a._isActivate = !0, c.instance.reset(), d.MainContext.instance.stage.dispatchEvent(new d.Event(d.Event.ACTIVATE)))
					},
					g = function() {
						document[t] ? b() : e()
					};
				window.addEventListener("focus", e, !1);
				window.addEventListener("blur", b, !1);
				var t, m;
				"undefined" !== typeof document.hidden ? (t = "hidden", m = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (t = "mozHidden", m = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (t = "msHidden", m = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (t = "webkitHidden", m = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (t = "oHidden", m = "ovisibilitychange");
				"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", b, !1));
				t && m && document.addEventListener(m, g, !1)
			};
			c.instance = null;
			c.requestAnimationFrame = null;
			c.cancelAnimationFrame = null;
			c._thisObject = null;
			c._callback = null;
			return c
		}(d.DeviceContext);
	d.HTML5DeviceContext = g;
	g.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(d) {
	d.getItem = function(d) {
		return window.localStorage.getItem(d)
	};
	d.setItem = function(d, e) {
		try {
			return window.localStorage.setItem(d, e), !0
		} catch (c) {
			return egret.Logger.infoWithErrorId(1018, d, e), !1
		}
	};
	d.removeItem = function(d) {
		window.localStorage.removeItem(d)
	};
	d.clear = function() {
		window.localStorage.clear()
	};
	d.init = function() {
		for (var g in d) egret.localStorage[g] = d[g]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
(function(d) {
	var g = function(e) {
			function c(a, b) {
				void 0 === b && (b = !0);
				e.call(this);
				this.useCacheCanvas = b;
				this.canvas = a || this.createCanvas();
				this.canvasContext = this.canvas.getContext("2d");
				b ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext;
				this.onResize();
				var c = this.drawCanvasContext.setTransform,
					d = this;
				this.drawCanvasContext.setTransform = function(a, b, f, e, g, n) {
					d._matrixA = a;
					d._matrixB = b;
					d._matrixC = f;
					d._matrixD = e;
					d._matrixTx = g;
					d._matrixTy = n;
					c.call(d.drawCanvasContext, a, b, f, e, g, n)
				};
				this._matrixA = 1;
				this._matrixC = this._matrixB = 0;
				this._matrixD = 1;
				this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
				this.initBlendMode()
			}
			__extends(c, e);
			var b = c.prototype;
			b.createCanvas = function() {
				var a = d.Browser.getInstance().$("#egretCanvas");
				if (!a) {
					var b = document.getElementById(d.StageDelegate.canvas_div_name),
						a = d.Browser.getInstance().$new("canvas");
					a.id = "egretCanvas";
					b.appendChild(a)
				}
				d.MainContext.instance.stage.addEventListener(d.Event.RESIZE, this.onResize, this);
				return a
			};
			b.onResize = function() {
				if (this.canvas) {
					var a = document.getElementById(d.StageDelegate.canvas_div_name);
					this.canvas.width = d.MainContext.instance.stage.stageWidth;
					this.canvas.height = d.MainContext.instance.stage.stageHeight;
					this.canvas.style.width = a.style.width;
					this.canvas.style.height = a.style.height;
					this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height);
					this.drawCanvasContext.imageSmoothingEnabled = d.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.webkitImageSmoothingEnabled = d.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.mozImageSmoothingEnabled = d.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.msImageSmoothingEnabled = d.RendererContext.imageSmoothingEnabled
				}
			};
			b.clearScreen = function() {
				for (var a = d.RenderFilter.getInstance().getDrawAreaList(), b = 0, c = a.length; b < c; b++) {
					var e = a[b];
					this.clearRect(e.x, e.y, e.width, e.height)
				}
				a = d.MainContext.instance.stage;
				this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
				this.renderCost = 0
			};
			b.clearRect = function(a, b, c, d) {
				this.canvasContext.clearRect(a, b, c, d)
			};
			b.drawImage = function(a, b, c, g, t, m, h, k, l, n) {
				void 0 === n && (n = void 0);
				var q = a._bitmapData;
				m += this._transformTx;
				h += this._transformTy;
				var s = d.getTimer();
				void 0 === n ? this.drawCanvasContext.drawImage(q, b, c, g, t, m, h, k, l) : this.drawRepeatImage(a, b, c, g, t, m, h, k, l, n);
				e.prototype.drawImage.call(this, a, b, c, g, t, m, h, k, l, n);
				this.renderCost += d.getTimer() - s
			};
			b.drawRepeatImage = function(a, b, c, e, g, m, h, k, l, n) {
				if (void 0 === a.pattern) {
					var q = d.MainContext.instance.rendererContext._texture_scale_factor,
						s = a._bitmapData,
						r = s;
					if (s.width != e || s.height != g || 1 != q) r = document.createElement("canvas"), r.width = e * q, r.height = g * q, r.getContext("2d").drawImage(s, b, c, e, g, 0, 0, e * q, g * q);
					b = this.drawCanvasContext.createPattern(r, n);
					a.pattern = b
				}
				this.drawCanvasContext.fillStyle = a.pattern;
				this.drawCanvasContext.translate(m, h);
				this.drawCanvasContext.fillRect(0, 0, k, l);
				this.drawCanvasContext.translate(-m, -h)
			};
			b.setTransform = function(a) {
				1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
			};
			b.setAlpha = function(a, b) {
				this.drawCanvasContext.globalAlpha = a;
				b ? (this.blendValue = this.blendModes[b], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != d.BlendMode.NORMAL && (this.blendValue = this.blendModes[d.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
			};
			b.initBlendMode = function() {
				this.blendModes = {};
				this.blendModes[d.BlendMode.NORMAL] = "source-over";
				this.blendModes[d.BlendMode.ADD] = "lighter";
				this.blendModes[d.BlendMode.ERASE] = "destination-out";
				this.blendModes[d.BlendMode.ERASE_REVERSE] = "destination-in"
			};
			b.setupFont = function(a, b) {
				void 0 === b && (b = null);
				b = b || {};
				var c = a._properties,
					d = null == b.size ? c._size : b.size,
					e = null == b.fontFamily ? c._fontFamily : b.fontFamily,
					g = this.drawCanvasContext,
					h = (null == b.italic ? c._italic : b.italic) ? "italic " : "normal ",
					h = h + ((null == b.bold ? c._bold : b.bold) ? "bold " : "normal ");
				g.font = h + (d + "px " + e);
				g.textAlign = "left";
				g.textBaseline = "middle"
			};
			b.measureText = function(a) {
				return this.drawCanvasContext.measureText(a).width
			};
			b.drawText = function(a, b, c, g, t, m) {
				void 0 === m && (m = null);
				this.setupFont(a, m);
				m = m || {};
				var h = a._properties,
					k;
				k = null != m.textColor ? d.toColorString(m.textColor) : h._textColorString;
				var l;
				l = null != m.strokeColor ? d.toColorString(m.strokeColor) : h._strokeColorString;
				var h = null != m.stroke ? m.stroke : h._stroke,
					n = this.drawCanvasContext;
				n.fillStyle = k;
				n.strokeStyle = l;
				h && (n.lineWidth = 2 * h, n.strokeText(b, c + this._transformTx, g + this._transformTy, t || 65535));
				n.fillText(b, c + this._transformTx, g + this._transformTy, t || 65535);
				e.prototype.drawText.call(this, a, b, c, g, t, m)
			};
			b.strokeRect = function(a, b, c, d, e) {
				this.drawCanvasContext.strokeStyle = e;
				this.drawCanvasContext.strokeRect(a, b, c, d)
			};
			b.pushMask = function(a) {
				this.drawCanvasContext.save();
				this.drawCanvasContext.beginPath();
				this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
				this.drawCanvasContext.clip();
				this.drawCanvasContext.closePath()
			};
			b.popMask = function() {
				this.drawCanvasContext.restore();
				this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
			};
			b.onRenderStart = function() {
				this.drawCanvasContext.save()
			};
			b.onRenderFinish = function() {
				this.drawCanvasContext.restore();
				this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
				if (this.useCacheCanvas) for (var a = this._cacheCanvas.width, b = this._cacheCanvas.height, c = d.RenderFilter.getInstance().getDrawAreaList(), e = 0, g = c.length; e < g; e++) {
					var m = c[e],
						h = m.x,
						k = m.y,
						l = m.width,
						m = m.height;
					h + l > a && (l = a - h);
					k + m > b && (m = b - k);
					0 < l && 0 < m && this.canvasContext.drawImage(this._cacheCanvas, h, k, l, m, h, k, l, m)
				}
			};
			b.drawCursor = function(a, b, c, d) {
				this.drawCanvasContext.strokeStyle = "#40a5ff";
				this.drawCanvasContext.lineWidth = 2;
				this.drawCanvasContext.beginPath();
				this.drawCanvasContext.moveTo(Math.round(a + this._transformTx), Math.round(b + this._transformTy));
				this.drawCanvasContext.lineTo(Math.round(c + this._transformTx), Math.round(d + this._transformTy));
				this.drawCanvasContext.closePath();
				this.drawCanvasContext.stroke()
			};
			return c
		}(d.RendererContext);
	d.HTML5CanvasRenderer = g;
	g.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(d) {
	d.beginFill = function(d, c) {
		void 0 === c && (c = 1);
		var b = "rgba(" + (d >> 16) + "," + ((d & 65280) >> 8) + "," + (d & 255) + "," + c + ")";
		this.fillStyleColor = b;
		this._pushCommand(new g(this._setStyle, this, [b]))
	};
	d.drawRect = function(d, c, b, a) {
		this._pushCommand(new g(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(e._transformTx + a, e._transformTy + b, c, d);
			this.canvasContext.closePath()
		}, this, [d, c, b, a]));
		this._fill();
		this.checkRect(d, c, b, a)
	};
	d.drawCircle = function(d, c, b) {
		this._pushCommand(new g(function(a, b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(d._transformTx + a, d._transformTy + b, c, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [d, c, b]));
		this._fill();
		this.checkRect(d - b, c - b, 2 * b, 2 * b)
	};
	d.drawRoundRect = function(d, c, b, a, f, p) {
		this._pushCommand(new g(function(a, b, f, c, d, e) {
			var g = this.renderContext;
			a = g._transformTx + a;
			b = g._transformTy + b;
			d /= 2;
			e = e ? e / 2 : d;
			f = a + f;
			c = b + c;
			g = c - e;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(f, g);
			this.canvasContext.quadraticCurveTo(f, c, f - d, c);
			this.canvasContext.lineTo(a + d, c);
			this.canvasContext.quadraticCurveTo(a, c, a, c - e);
			this.canvasContext.lineTo(a, b + e);
			this.canvasContext.quadraticCurveTo(a, b, a + d, b);
			this.canvasContext.lineTo(f - d, b);
			this.canvasContext.quadraticCurveTo(f, b, f, b + e);
			this.canvasContext.lineTo(f, g);
			this.canvasContext.closePath()
		}, this, [d, c, b, a, f, p]));
		this._fill();
		this.checkRect(d, c, b, a)
	};
	d.drawEllipse = function(d, c, b, a) {
		this._pushCommand(new g(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.save();
			a = e._transformTx + a + c / 2;
			b = e._transformTy + b + d / 2;
			e = c > d ? c : d;
			c /= e;
			d /= e;
			e /= 2;
			this.canvasContext.scale(c, d);
			this.canvasContext.beginPath();
			this.canvasContext.arc(a / c, b / d, e, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore()
		}, this, [d, c, b, a]));
		this._fill();
		this.checkRect(d, c, b, a)
	};
	d.lineStyle = function(d, c, b, a, f, p, v, t) {
		void 0 === d && (d = NaN);
		void 0 === c && (c = 0);
		void 0 === b && (b = 1);
		void 0 === a && (a = !1);
		void 0 === f && (f = "normal");
		void 0 === p && (p = null);
		void 0 === v && (v = null);
		void 0 === t && (t = 3);
		this.strokeStyleColor && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand));
		this.strokeStyleColor = c = "rgba(" + (c >> 16) + "," + ((c & 65280) >> 8) + "," + (c & 255) + "," + b + ")";
		this._pushCommand(new g(function(a, b) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = b;
			this.canvasContext.beginPath()
		}, this, [d, c]));
		this.moveTo(this.lineX, this.lineY)
	};
	d.lineTo = function(d, c) {
		this._pushCommand(new g(function(b, a) {
			var f = this.renderContext;
			this.canvasContext.lineTo(f._transformTx + b, f._transformTy + a)
		}, this, [d, c]));
		this.checkPoint(this.lineX, this.lineY);
		this.lineX = d;
		this.lineY = c;
		this.checkPoint(d, c)
	};
	d.curveTo = function(d, c, b, a) {
		this._pushCommand(new g(function(a, b, c, d) {
			var e = this.renderContext;
			this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + c, e._transformTy + d)
		}, this, [d, c, b, a]));
		this.checkPoint(this.lineX, this.lineY);
		this.lineX = b;
		this.lineY = a;
		this.checkPoint(d, c);
		this.checkPoint(b, a)
	};
	d.moveTo = function(d, c) {
		this._pushCommand(new g(function(b, a) {
			var f = this.renderContext;
			this.canvasContext.moveTo(f._transformTx + b, f._transformTy + a)
		}, this, [d, c]))
	};
	d.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null;
		this._dirty = !1;
		this._maxY = this._maxX = this._minY = this._minX = 0;
		this._firstCheck = !0
	};
	d.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new g(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	d.endFill = function() {
		null != this.fillStyleColor && this._fill()
	};
	d._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this._pushCommand(this.endFillCommand), this.fillStyleColor = null);
		this.strokeStyleColor && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand))
	};
	d.createEndLineCommand = function() {
		this.endLineCommand || (this.endLineCommand = new g(function() {
			this.canvasContext.stroke();
			this.canvasContext.closePath()
		}, this, null))
	};
	d._pushCommand = function(d) {
		this.commandQueue.push(d);
		this._dirty = !0
	};
	d._draw = function(d) {
		var c = this.commandQueue.length;
		if (0 != c) {
			this.renderContext = d;
			d = this.canvasContext = this.renderContext.drawCanvasContext;
			d.save();
			this.strokeStyleColor && 0 < c && this.commandQueue[c - 1] != this.endLineCommand && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand), c = this.commandQueue.length);
			for (var b = 0; b < c; b++) {
				var a = this.commandQueue[b];
				a.method.apply(a.thisObject, a.args)
			}
			d.restore();
			this._dirty = !1
		}
	};
	var g = function() {
			return function(d, c, b) {
				this.method = d;
				this.thisObject = c;
				this.args = b
			}
		}();
	g.prototype.__class__ = "egret_h5_graphics.Command";
	d._setStyle = function(d) {
		this.canvasContext.fillStyle = d;
		this.canvasContext.beginPath()
	};
	d.init = function() {
		for (var e in d) egret.Graphics.prototype[e] = d[e];
		egret.RendererContext.createRendererContext = function(c) {
			return new egret.HTML5CanvasRenderer(c, !1)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
(function(d) {
	var g = function(e) {
			function c(a) {
				e.call(this);
				this.glID = this.gl = this.canvas = null;
				this.size = 2E3;
				this.vertices = null;
				this.vertSize = 5;
				this.indices = null;
				this.projectionY = this.projectionX = NaN;
				this.shaderManager = null;
				this.contextLost = !1;
				this.glContextId = 0;
				this.currentBlendMode = "";
				this.currentBaseTexture = null;
				this.currentBatchSize = 0;
				this.worldTransform = null;
				this.worldAlpha = 1;
				this.maskList = [];
				this.maskDataFreeList = [];
				this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null;
				this.graphicsStyle = {};
				this.canvas = a || this.createCanvas();
				this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
				this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
				this.html5Canvas = document.createElement("canvas");
				this.canvasContext = new d.HTML5CanvasRenderer(this.html5Canvas);
				this.onResize();
				this.projectionX = this.canvas.width / 2;
				this.projectionY = -this.canvas.height / 2;
				a = 6 * this.size;
				this.vertices = new Float32Array(4 * this.size * this.vertSize);
				this.indices = new Uint16Array(a);
				for (var b = 0, c = 0; b < a; b += 6, c += 4) this.indices[b + 0] = c + 0, this.indices[b + 1] = c + 1, this.indices[b + 2] = c + 2, this.indices[b + 3] = c + 0, this.indices[b + 4] = c + 2, this.indices[b + 5] = c + 3;
				this.initWebGL();
				this.shaderManager = new d.WebGLShaderManager(this.gl);
				this.worldTransform = new d.Matrix;
				this.initAll()
			}
			__extends(c, e);
			var b = c.prototype;
			b.onRenderFinish = function() {
				this._drawWebGL()
			};
			b.initAll = function() {
				c.isInit || (c.isInit = !0, egret_webgl_graphics.init(), d.TextField.prototype._makeBitmapCache = function() {
					this.renderTexture || (this.renderTexture = new d.RenderTexture);
					var a = this.getBounds(d.Rectangle.identity);
					if (0 == a.width || 0 == a.height) return this._texture_to_render = null, !1;
					this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.renderContext = d.RendererContext.createRendererContext(this._bitmapData));
					var b = a.width,
						a = a.height,
						c, e, g = d.MainContext.instance.rendererContext._texture_scale_factor;
					c = b / g;
					e = a / g;
					c = Math.round(c);
					e = Math.round(e);
					var m = this._bitmapData;
					m.width = c;
					m.height = e;
					m.style.width = c + "px";
					m.style.height = e + "px";
					this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = c, this.renderContext._cacheCanvas.height = e);
					this._worldTransform.identity();
					this._worldTransform.a = 1 / g;
					this._worldTransform.d = 1 / g;
					this.renderContext.setTransform(this._worldTransform);
					this.worldAlpha = 1;
					g = d.RenderFilter.getInstance();
					m = g._drawAreaList.concat();
					g._drawAreaList.length = 0;
					this.renderContext.clearScreen();
					this.renderContext.onRenderStart();
					d.RendererContext.deleteTexture(this.renderTexture);
					this._colorTransform && this.renderContext.setGlobalColorTransform(this._colorTransform.matrix);
					var h = this.mask || this._scrollRect;
					h && this.renderContext.pushMask(h);
					this._render(this.renderContext);
					h && this.renderContext.popMask();
					this._colorTransform && this.renderContext.setGlobalColorTransform(null);
					d.RenderTexture.identityRectangle.width = c;
					d.RenderTexture.identityRectangle.height = e;
					g.addDrawArea(d.RenderTexture.identityRectangle);
					this.renderContext.onRenderFinish();
					g._drawAreaList = m;
					this.renderTexture._bitmapData = this._bitmapData;
					this.renderTexture._sourceWidth = c;
					this.renderTexture._sourceHeight = e;
					this.renderTexture._textureWidth = b;
					this.renderTexture._textureHeight = a;
					this._texture_to_render = this.renderTexture;
					return !0
				}, d.TextField.prototype._draw = function(a) {
					this._properties._type == d.TextFieldType.INPUT && this._isTyping || (this.getDirty() && (this._texture_to_render = this.renderTexture, this._cacheAsBitmap = !0), d.DisplayObject.prototype._draw.call(this, a))
				}, d.RenderTexture.prototype.init = function() {
					this._bitmapData = document.createElement("canvas");
					this.canvasContext = this._bitmapData.getContext("2d");
					this._webglBitmapData = document.createElement("canvas");
					this.renderContext = new d.WebGLRenderer(this._webglBitmapData)
				}, d.RenderTexture.prototype.setSize = function(a, b) {
					if (this._webglBitmapData) {
						var c = this._webglBitmapData;
						c.width = a;
						c.height = b;
						c.style.width = a + "px";
						c.style.height = b + "px";
						this.renderContext.projectionX = a / 2;
						this.renderContext.projectionY = -b / 2;
						this.renderContext.viewportScale = d.MainContext.instance.rendererContext._texture_scale_factor
					}
				}, d.RenderTexture.prototype.end = function() {}, d.RenderTexture.prototype.drawToTexture = function(a, b, c) {
					var e = b || a.getBounds(d.Rectangle.identity);
					if (0 == e.width || 0 == e.height) return !1;
					"undefined" == typeof c && (c = 1);
					this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.canvasContext = this._bitmapData.getContext("2d"), d.RenderTexture.WebGLCanvas || (d.RenderTexture.WebGLCanvas = document.createElement("canvas"), d.RenderTexture.WebGLRenderer = new d.WebGLRenderer(d.RenderTexture.WebGLCanvas)), this._webglBitmapData = d.RenderTexture.WebGLCanvas, this.renderContext = d.RenderTexture.WebGLRenderer);
					var g = e.x,
						m = e.y,
						h = e.width,
						e = e.height,
						e = e / c,
						k = d.MainContext.instance.rendererContext._texture_scale_factor,
						h = Math.round(h / c),
						e = Math.round(e);
					this.setSize(h, e);
					var l = this._bitmapData,
						n = h / k * c,
						q = e / k * c;
					l.width = n;
					l.height = q;
					l.style.width = n + "px";
					l.style.height = q + "px";
					this.begin();
					a._worldTransform.identity();
					l = a._anchorOffsetX;
					n = a._anchorOffsetY;
					if (0 != a._anchorX || 0 != a._anchorY) l = a._anchorX * h, n = a._anchorY * e;
					this._offsetX = g + l;
					this._offsetY = m + n;
					a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
					b && (this._offsetX -= g, this._offsetY -= m);
					a.worldAlpha = 1;
					b = d.MainContext.__use_new_draw;
					d.MainContext.__use_new_draw = !1;
					if (a instanceof d.DisplayObjectContainer) for (g = a._children, m = 0, l = g.length; m < l; m++) g[m]._updateTransform();
					this.renderContext.setTransform(a._worldTransform);
					g = d.RenderFilter.getInstance();
					m = g._drawAreaList.concat();
					g._drawAreaList.length = 0;
					l = this.renderContext.gl;
					l.viewport(0, 0, h, e);
					l.bindFramebuffer(l.FRAMEBUFFER, null);
					l.clearColor(0, 0, 0, 0);
					l.clear(l.COLOR_BUFFER_BIT);
					this.renderContext.onRenderStart();
					d.RendererContext.deleteTexture(this);
					a._filter && this.renderContext.setGlobalFilter(a._filter);
					a._colorTransform && this.renderContext.setGlobalColorTransform(a._colorTransform.matrix);
					(l = a.mask || a._scrollRect) && this.renderContext.pushMask(l);
					a._render(this.renderContext);
					this.renderContext._drawWebGL();
					d.MainContext.__use_new_draw = b;
					l && this.renderContext.popMask();
					a._colorTransform && this.renderContext.setGlobalColorTransform(null);
					a._filter && this.renderContext.setGlobalFilter(null);
					d.RenderTexture.identityRectangle.width = h;
					d.RenderTexture.identityRectangle.height = e;
					g.addDrawArea(d.RenderTexture.identityRectangle);
					this.renderContext.onRenderFinish();
					g._drawAreaList = m;
					this._sourceWidth = h / k * c;
					this._sourceHeight = e / k * c;
					this._textureWidth = h * c;
					this._textureHeight = e * c;
					this.canvasContext.drawImage(this._webglBitmapData, 0, 0, h, e, 0, 0, this._sourceWidth, this._sourceHeight);
					return !0
				})
			};
			b.createCanvas = function() {
				var a = d.Browser.getInstance().$("#egretCanvas");
				if (!a) {
					var b = document.getElementById(d.StageDelegate.canvas_div_name),
						a = d.Browser.getInstance().$new("canvas");
					a.id = "egretCanvas";
					b.appendChild(a)
				}
				d.MainContext.instance.stage.addEventListener(d.Event.RESIZE, this.onResize, this);
				return a
			};
			b.onResize = function() {
				var a = document.getElementById(d.StageDelegate.canvas_div_name);
				this.canvas && (this.canvas.width = d.MainContext.instance.stage.stageWidth, this.canvas.height = d.MainContext.instance.stage.stageHeight, this.canvas.style.width = a.style.width, this.canvas.style.height = a.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2);
				this.html5Canvas && (this.html5Canvas.width = d.MainContext.instance.stage.stageWidth, this.html5Canvas.height = d.MainContext.instance.stage.stageHeight, this.html5Canvas.style.width = a.style.width, this.html5Canvas.style.height = a.style.height)
			};
			b.handleContextLost = function() {
				this.contextLost = !0
			};
			b.handleContextRestored = function() {
				this.initWebGL();
				this.shaderManager.setContext(this.gl);
				this.contextLost = !1
			};
			b.initWebGL = function() {
				for (var a = {}, b, e = ["experimental-webgl", "webgl"], g = 0; g < e.length; g++) {
					try {
						b = this.canvas.getContext(e[g], a)
					} catch (t) {}
					if (b) break
				}
				if (!b) throw Error(d.getString(1021));
				c.glID++;
				this.glID = c.glID;
				this.setContext(b)
			};
			b.setContext = function(a) {
				this.gl = a;
				a.id = this.glContextId++;
				this.vertexBuffer = a.createBuffer();
				this.indexBuffer = a.createBuffer();
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
				a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
				a.disable(a.DEPTH_TEST);
				a.disable(a.CULL_FACE);
				a.enable(a.BLEND);
				a.colorMask(!0, !0, !0, !0)
			};
			b.start = function() {
				if (!this.contextLost) {
					var a = this.gl;
					a.activeTexture(a.TEXTURE0);
					a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
					a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
					var b;
					b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : "blur" == this.filterType ? this.shaderManager.blurShader : this.shaderManager.defaultShader;
					this.shaderManager.activateShader(b);
					b.syncUniforms();
					a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
					var c = 4 * this.vertSize;
					a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
					a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
					a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
				}
			};
			b.clearScreen = function() {
				var a = this.gl;
				a.colorMask(!0, !0, !0, !0);
				for (var b = d.RenderFilter.getInstance().getDrawAreaList(), c = 0, e = b.length; c < e; c++) {
					var g = b[c];
					a.viewport(g.x, g.y, g.width, g.height);
					a.bindFramebuffer(a.FRAMEBUFFER, null);
					a.clearColor(0, 0, 0, 0);
					a.clear(a.COLOR_BUFFER_BIT)
				}
				b = d.MainContext.instance.stage;
				a.viewport(0, 0, b.stageWidth, b.stageHeight);
				this.renderCost = 0
			};
			b.setBlendMode = function(a) {
				a || (a = d.BlendMode.NORMAL);
				if (this.currentBlendMode != a) {
					var b = d.RendererContext.blendModesForGL[a];
					b && (this._drawWebGL(), this.gl.blendFunc(b[0], b[1]), this.currentBlendMode = a)
				}
			};
			b.drawRepeatImage = function(a, b, c, e, g, m, h, k, l, n) {
				n = d.MainContext.instance.rendererContext._texture_scale_factor;
				e *= n;
				for (g *= n; m < k; m += e) for (var q = h; q < l; q += g) {
					var s = Math.min(e, k - m),
						r = Math.min(g, l - q);
					this.drawImage(a, b, c, s / n, r / n, m, q, s, r)
				}
			};
			b.drawImage = function(a, b, c, d, e, g, h, k, l, n) {
				void 0 === n && (n = void 0);
				if (!this.contextLost) if (void 0 !== n) this.drawRepeatImage(a, b, c, d, e, g, h, k, l, n);
				else {
					this.createWebGLTexture(a);
					n = a._bitmapData.webGLTexture[this.glID];
					if (n !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._drawWebGL(), this.currentBaseTexture = n;
					var q = this.worldTransform,
						s = q.a,
						r = q.b,
						u = q.c,
						x = q.d,
						w = q.tx,
						y = q.ty;
					0 == g && 0 == h || q.append(1, 0, 0, 1, g, h);
					1 == d / k && 1 == e / l || q.append(k / d, 0, 0, l / e, 0, 0);
					g = q.a;
					h = q.b;
					k = q.c;
					l = q.d;
					n = q.tx;
					var z = q.ty;
					q.a = s;
					q.b = r;
					q.c = u;
					q.d = x;
					q.tx = w;
					q.ty = y;
					s = a._sourceWidth;
					r = a._sourceHeight;
					a = d;
					q = e;
					b /= s;
					c /= r;
					d /= s;
					e /= r;
					s = this.vertices;
					r = 4 * this.currentBatchSize * this.vertSize;
					u = this.worldAlpha;
					s[r++] = n;
					s[r++] = z;
					s[r++] = b;
					s[r++] = c;
					s[r++] = u;
					s[r++] = g * a + n;
					s[r++] = h * a + z;
					s[r++] = d + b;
					s[r++] = c;
					s[r++] = u;
					s[r++] = g * a + k * q + n;
					s[r++] = l * q + h * a + z;
					s[r++] = d + b;
					s[r++] = e + c;
					s[r++] = u;
					s[r++] = k * q + n;
					s[r++] = l * q + z;
					s[r++] = b;
					s[r++] = e + c;
					s[r++] = u;
					this.currentBatchSize++
				}
			};
			b._drawWebGL = function() {
				if (0 != this.currentBatchSize && !this.contextLost) {
					var a = d.getTimer();
					this.start();
					var b = this.gl;
					b.bindTexture(b.TEXTURE_2D, this.currentBaseTexture);
					var c = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
					b.bufferSubData(b.ARRAY_BUFFER, 0, c);
					b.drawElements(b.TRIANGLES, 6 * this.currentBatchSize, b.UNSIGNED_SHORT, 0);
					this.currentBatchSize = 0;
					this.renderCost += d.getTimer() - a;
					d.Profiler.getInstance().onDrawImage()
				}
			};
			b.setTransform = function(a) {
				var b = this.worldTransform;
				b.a = a.a;
				b.b = a.b;
				b.c = a.c;
				b.d = a.d;
				b.tx = a.tx;
				b.ty = a.ty
			};
			b.setAlpha = function(a, b) {
				this.worldAlpha = a;
				this.setBlendMode(b)
			};
			b.createWebGLTexture = function(a) {
				a = a._bitmapData;
				a.webGLTexture || (a.webGLTexture = {});
				if (!a.webGLTexture[this.glID]) {
					var b = this.gl;
					a.webGLTexture[this.glID] = b.createTexture();
					b.bindTexture(b.TEXTURE_2D, a.webGLTexture[this.glID]);
					b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
					b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
					b.bindTexture(b.TEXTURE_2D, null)
				}
			};
			b.pushMask = function(a) {
				this._drawWebGL();
				var b = this.gl;
				0 == this.maskList.length && b.enable(b.SCISSOR_TEST);
				a = this.getScissorRect(a);
				this.maskList.push(a);
				this.scissor(a.x, a.y, a.width, a.height)
			};
			b.getScissorRect = function(a) {
				var b = this.maskList[this.maskList.length - 1],
					c, e, g;
				b ? b.intersects(b) ? (c = Math.max(a.x + this.worldTransform.tx, b.x), e = Math.max(a.y + this.worldTransform.ty, b.y), g = Math.min(a.x + this.worldTransform.tx + a.width, b.x + b.width) - c, a = Math.min(a.y + this.worldTransform.ty + a.height, b.y + b.height) - e) : a = g = e = c = 0 : (c = a.x + this.worldTransform.tx, e = a.y + this.worldTransform.ty, g = a.width, a = a.height);
				(b = this.maskDataFreeList.pop()) ? (b.x = c, b.y = e, b.width = g, b.height = a) : b = new d.Rectangle(c, e, g, a);
				return b
			};
			b.popMask = function() {
				this._drawWebGL();
				var a = this.gl,
					b = this.maskList.pop();
				this.maskDataFreeList.push(b);
				b = this.maskList.length;
				0 != b ? (b = this.maskList[b - 1], (0 < b.width || 0 < b.height) && this.scissor(b.x, b.y, b.width, b.height)) : a.disable(a.SCISSOR_TEST)
			};
			b.scissor = function(a, b, c, e) {
				var g = this.gl;
				0 > c && (c = 0);
				0 > e && (e = 0);
				g.scissor(a, -b + d.MainContext.instance.stage.stageHeight - e, c, e)
			};
			b.setGlobalColorTransform = function(a) {
				if (this.colorTransformMatrix != a && (this._drawWebGL(), this.colorTransformMatrix = a)) {
					a = a.concat();
					var b = this.shaderManager.colorTransformShader;
					b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
					b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
					b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
					b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
					b.uniforms.matrix.value = a
				}
			};
			b.setGlobalFilter = function(a) {
				this._drawWebGL();
				this.setFilterProperties(a)
			};
			b.setFilterProperties = function(a) {
				if (a) switch (this.filterType = a.type, a.type) {
				case "blur":
					var b = this.shaderManager.blurShader;
					b.uniforms.blur.value.x = a.blurX;
					b.uniforms.blur.value.y = a.blurY
				} else this.filterType = null
			};
			b.setupFont = function(a, b) {
				void 0 === b && (b = null);
				this.canvasContext.setupFont(a, b)
			};
			b.measureText = function(a) {
				return this.canvasContext.measureText(a)
			};
			b.renderGraphics = function(a) {
				this._drawWebGL();
				var b = this.gl,
					c = this.shaderManager.primitiveShader;
				this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
				this.updateGraphics(a);
				this.shaderManager.activateShader(c);
				b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
				b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
				b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
				b.uniform2f(c.offsetVector, 0, 0);
				b.uniform3fv(c.tintColor, [1, 1, 1]);
				b.uniform1f(c.alpha, this.worldAlpha);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
				b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
				this.shaderManager.activateShader(this.shaderManager.defaultShader)
			};
			b.updateGraphics = function(a) {
				var b = this.gl;
				this.buildRectangle(a);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
			};
			b.buildRectangle = function(a) {
				var b = a.x,
					c = a.y,
					d = a.w;
				a = a.h;
				var e = this.graphicsStyle.a,
					g = this.graphicsStyle.r * e,
					h = this.graphicsStyle.g * e,
					k = this.graphicsStyle.b * e,
					l = this.graphicsPoints,
					n = this.graphicsIndices,
					q = l.length / 6;
				l.push(b, c);
				l.push(g, h, k, e);
				l.push(b + d, c);
				l.push(g, h, k, e);
				l.push(b, c + a);
				l.push(g, h, k, e);
				l.push(b + d, c + a);
				l.push(g, h, k, e);
				n.push(q, q, q + 1, q + 2, q + 3, q + 3)
			};
			b.setGraphicsStyle = function(a, b, c, d) {
				this.graphicsStyle.r = a;
				this.graphicsStyle.g = b;
				this.graphicsStyle.b = c;
				this.graphicsStyle.a = d
			};
			c.glID = 0;
			c.isInit = !1;
			return c
		}(d.RendererContext);
	d.WebGLRenderer = g;
	g.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
var egret_webgl_graphics;
(function(d) {
	d.beginFill = function(d, c) {
		void 0 === c && (c = 1);
		this._pushCommand(new g(this._setStyle, this, [(d >> 16) / 255, ((d & 65280) >> 8) / 255, (d & 255) / 255, c]))
	};
	d.drawRect = function(d, c, b, a) {
		this._pushCommand(new g(function(a) {
			this.renderContext.renderGraphics(a)
		}, this, [{
			x: d,
			y: c,
			w: b,
			h: a
		}]));
		this.checkRect(d, c, b, a)
	};
	d.drawCircle = function(d, c, b) {};
	d.drawRoundRect = function(d, c, b, a, f, g) {};
	d.drawEllipse = function(d, c, b, a) {};
	d.lineStyle = function(d, c, b, a, f, g, v, t) {};
	d.lineTo = function(d, c) {};
	d.curveTo = function(d, c, b, a) {};
	d.moveTo = function(d, c) {};
	d.clear = function() {
		this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
	};
	d.endFill = function() {};
	d._pushCommand = function(d) {
		this.commandQueue.push(d)
	};
	d._draw = function(d) {
		var c = this.commandQueue.length;
		if (0 != c) for (this.renderContext = d, d = 0; d < c; d++) {
			var b = this.commandQueue[d];
			b.method.apply(b.thisObject, b.args)
		}
	};
	var g = function() {
			return function(d, c, b) {
				this.method = d;
				this.thisObject = c;
				this.args = b
			}
		}();
	g.prototype.__class__ = "egret_webgl_graphics.Command";
	d._setStyle = function(d, c, b, a) {
		this.renderContext.setGraphicsStyle(d, c, b, a)
	};
	d.init = function() {
		for (var e in d) egret.Graphics.prototype[e] = d[e]
	}
})(egret_webgl_graphics || (egret_webgl_graphics = {}));
(function(d) {
	var g = function() {
			function e() {}
			e.compileProgram = function(c, b, a) {
				a = e.compileFragmentShader(c, a);
				b = e.compileVertexShader(c, b);
				var f = c.createProgram();
				c.attachShader(f, b);
				c.attachShader(f, a);
				c.linkProgram(f);
				c.getProgramParameter(f, c.LINK_STATUS) || d.Logger.infoWithErrorId(1020);
				return f
			};
			e.compileFragmentShader = function(c, b) {
				return e._compileShader(c, b, c.FRAGMENT_SHADER)
			};
			e.compileVertexShader = function(c, b) {
				return e._compileShader(c, b, c.VERTEX_SHADER)
			};
			e._compileShader = function(c, b, a) {
				a = c.createShader(a);
				c.shaderSource(a, b);
				c.compileShader(a);
				return c.getShaderParameter(a, c.COMPILE_STATUS) ? a : (d.Logger.info(c.getShaderInfoLog(a)), null)
			};
			e.checkCanUseWebGL = function() {
				if (void 0 == e.canUseWebGL) try {
					var c = document.createElement("canvas");
					e.canUseWebGL = !! window.WebGLRenderingContext && !(!c.getContext("webgl") && !c.getContext("experimental-webgl"))
				} catch (b) {
					e.canUseWebGL = !1
				}
				return e.canUseWebGL
			};
			return e
		}();
	d.WebGLUtils = g;
	g.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e(b) {
				this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
				this.program = this.gl = null;
				this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
				this.uniforms = null;
				this.gl = b;
				this.init()
			}
			var c = e.prototype;
			c.init = function() {
				var b = this.gl,
					a = d.WebGLUtils.compileProgram(b, this.defaultVertexSrc, this.fragmentSrc);
				b.useProgram(a);
				this.uSampler = b.getUniformLocation(a, "uSampler");
				this.projectionVector = b.getUniformLocation(a, "projectionVector");
				this.offsetVector = b.getUniformLocation(a, "offsetVector");
				this.dimensions = b.getUniformLocation(a, "dimensions");
				this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition");
				this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord");
				this.colorAttribute = b.getAttribLocation(a, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
				this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
				for (var c in this.uniforms) this.uniforms[c].uniformLocation = b.getUniformLocation(a, c);
				this.initUniforms();
				this.program = a
			};
			c.initUniforms = function() {
				if (this.uniforms) {
					var b = this.gl,
						a, c;
					for (c in this.uniforms) {
						a = this.uniforms[c];
						var d = a.type;
						"mat2" === d || "mat3" === d || "mat4" === d ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === d ? a.glFunc = b.uniformMatrix2fv : "mat3" === d ? a.glFunc = b.uniformMatrix3fv : "mat4" === d && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + d], a.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
					}
				}
			};
			c.syncUniforms = function() {
				if (this.uniforms) {
					var b, a = this.gl,
						c;
					for (c in this.uniforms) b = this.uniforms[c], 1 === b.glValueLength ? !0 === b.glMatrix ? b.glFunc.call(a, b.uniformLocation, b.transpose, b.value) : b.glFunc.call(a, b.uniformLocation, b.value) : 2 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y) : 3 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z) : 4 === b.glValueLength && b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z, b.value.w)
				}
			};
			return e
		}();
	d.EgretShader = g;
	g.prototype.__class__ = "egret.EgretShader"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(b) {
				d.call(this, b);
				this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
				this.uniforms = {
					matrix: {
						type: "mat4",
						value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
					},
					colorAdd: {
						type: "4f",
						value: {
							x: 0,
							y: 0,
							z: 0,
							w: 0
						}
					}
				};
				this.init()
			}
			__extends(c, d);
			return c
		}(d.EgretShader);
	d.ColorTransformShader = g;
	g.prototype.__class__ = "egret.ColorTransformShader"
})(egret || (egret = {}));
(function(d) {
	var g = function(d) {
			function c(b) {
				d.call(this, b);
				this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}";
				this.uniforms = {
					blur: {
						type: "2f",
						value: {
							x: 2,
							y: 2
						}
					}
				};
				this.init()
			}
			__extends(c, d);
			return c
		}(d.EgretShader);
	d.BlurShader = g;
	g.prototype.__class__ = "egret.BlurShader"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e(c) {
				this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null;
				this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
				this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
				this.gl = c;
				this.init()
			}
			e.prototype.init = function() {
				var c = this.gl,
					b = d.WebGLUtils.compileProgram(c, this.vertexSrc, this.fragmentSrc);
				c.useProgram(b);
				this.projectionVector = c.getUniformLocation(b, "projectionVector");
				this.offsetVector = c.getUniformLocation(b, "offsetVector");
				this.tintColor = c.getUniformLocation(b, "tint");
				this.aVertexPosition = c.getAttribLocation(b, "aVertexPosition");
				this.colorAttribute = c.getAttribLocation(b, "aColor");
				this.attributes = [this.aVertexPosition, this.colorAttribute];
				this.translationMatrix = c.getUniformLocation(b, "translationMatrix");
				this.alpha = c.getUniformLocation(b, "alpha");
				this.program = b
			};
			return e
		}();
	d.PrimitiveShader = g;
	g.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
(function(d) {
	var g = function() {
			function e(b) {
				this.gl = null;
				this.maxAttibs = 10;
				this.attribState = [];
				this.tempAttribState = [];
				this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
				for (var a = 0; a < this.maxAttibs; a++) this.attribState[a] = !1;
				this.setContext(b)
			}
			var c = e.prototype;
			c.setContext = function(b) {
				this.gl = b;
				this.primitiveShader = new d.PrimitiveShader(b);
				this.defaultShader = new d.EgretShader(b);
				this.colorTransformShader = new d.ColorTransformShader(b);
				this.blurShader = new d.BlurShader(b);
				this.activateShader(this.defaultShader)
			};
			c.activateShader = function(b) {
				this.currentShader != b && (this.gl.useProgram(b.program), this.setAttribs(b.attributes), this.currentShader = b)
			};
			c.setAttribs = function(b) {
				var a, c;
				c = this.tempAttribState.length;
				for (a = 0; a < c; a++) this.tempAttribState[a] = !1;
				c = b.length;
				for (a = 0; a < c; a++) this.tempAttribState[b[a]] = !0;
				b = this.gl;
				c = this.attribState.length;
				for (a = 0; a < c; a++) this.attribState[a] !== this.tempAttribState[a] && (this.attribState[a] = this.tempAttribState[a], this.tempAttribState[a] ? b.enableVertexAttribArray(a) : b.disableVertexAttribArray(a))
			};
			return e
		}();
	d.WebGLShaderManager = g;
	g.prototype.__class__ = "egret.WebGLShaderManager"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this)
			}
			__extends(c, e);
			var b = c.prototype;
			b.proceed = function(a) {
				function b() {
					if (4 == e.readyState) if (e.status != a._status && (a._status = e.status, d.HTTPStatusEvent.dispatchHTTPStatusEvent(a, e.status)), 400 <= e.status || 0 == e.status) d.IOErrorEvent.dispatchIOErrorEvent(a);
					else {
						switch (a.dataFormat) {
						case d.URLLoaderDataFormat.TEXT:
							a.data = e.responseText;
							break;
						case d.URLLoaderDataFormat.VARIABLES:
							a.data = new d.URLVariables(e.responseText);
							break;
						case d.URLLoaderDataFormat.BINARY:
							a.data = e.response;
							break;
						default:
							a.data = e.responseText
						}
						d.__callAsync(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
					}
				}
				if (a.dataFormat == d.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
				else if (a.dataFormat == d.URLLoaderDataFormat.SOUND) this.loadSound(a);
				else {
					var c = a._request,
						e = this.getXHR();
					e.onreadystatechange = b;
					var g = d.NetContext._getUrl(c);
					e.open(c.method, g, !0);
					this.setResponseType(e, a.dataFormat);
					c.method != d.URLRequestMethod.GET && c.data ? c.data instanceof d.URLVariables ? (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send(c.data.toString())) : (e.setRequestHeader("Content-Type", "multipart/form-data"), e.send(c.data)) : e.send()
				}
			};
			b.loadSound = function(a) {
				function b(g) {
					d.clearTimeout(e.__timeoutId);
					e.removeEventListener("canplaythrough", b, !1);
					e.removeEventListener("error", c, !1);
					g = new d.Sound;
					g._setAudio(e);
					a.data = g;
					d.__callAsync(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
				}

				function c(g) {
					d.clearTimeout(e.__timeoutId);
					e.removeEventListener("canplaythrough", b, !1);
					e.removeEventListener("error", c, !1);
					d.IOErrorEvent.dispatchIOErrorEvent(a)
				}
				var e = new Audio(a._request.url);
				e.__timeoutId = d.setTimeout(b, this, 100);
				e.addEventListener("canplaythrough", b, !1);
				e.addEventListener("error", c, !1);
				e.load()
			};
			b.getXHR = function() {
				return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
			};
			b.setResponseType = function(a, b) {
				switch (b) {
				case d.URLLoaderDataFormat.TEXT:
				case d.URLLoaderDataFormat.VARIABLES:
					a.responseType = d.URLLoaderDataFormat.TEXT;
					break;
				case d.URLLoaderDataFormat.BINARY:
					a.responseType = "arraybuffer";
					break;
				default:
					a.responseType = b
				}
			};
			b.loadTexture = function(a) {
				var b = a._request,
					c = new Image;
				c.onload = function(b) {
					c.onerror = null;
					c.onload = null;
					b = new d.Texture;
					b._setBitmapData(c);
					a.data = b;
					d.__callAsync(d.Event.dispatchEvent, d.Event, a, d.Event.COMPLETE)
				};
				c.onerror = function(b) {
					c.onerror = null;
					c.onload = null;
					d.IOErrorEvent.dispatchIOErrorEvent(a)
				};
				c.src = b.url
			};
			return c
		}(d.NetContext);
	d.HTML5NetContext = g;
	g.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this._isTouchDown = !1;
				this.rootDiv = null;
				this.rootDiv = document.getElementById(d.StageDelegate.canvas_div_name);
				if (!this.rootDiv) {
					var a = document.getElementById(d.StageDelegate.egret_root_div);
					this.rootDiv = d.Browser.getInstance().$new("div");
					this.rootDiv.id = d.StageDelegate.canvas_div_name;
					a.appendChild(this.rootDiv)
				}
			}
			__extends(c, e);
			var b = c.prototype;
			b.prevent = function(a) {
				a.stopPropagation();
				!0 == a.isScroll || d.HTMLInput.getInstance().isInputOn() || a.preventDefault()
			};
			b.run = function() {
				var a = this;
				window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
					a._onTouchBegin(b);
					a.prevent(b)
				}, !1), this.rootDiv.addEventListener("MSPointerMove", function(b) {
					a._onTouchMove(b);
					a.prevent(b)
				}, !1), this.rootDiv.addEventListener("MSPointerUp", function(b) {
					a._onTouchEnd(b);
					a.prevent(b)
				}, !1)) : d.MainContext.deviceType == d.MainContext.DEVICE_MOBILE ? this.addTouchListener() : d.MainContext.deviceType == d.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
				window.addEventListener("mousedown", function(b) {
					a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
				});
				window.addEventListener("mouseup", function(b) {
					a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
					a._isTouchDown = !1
				})
			};
			b.addMouseListener = function() {
				var a = this;
				this.rootDiv.addEventListener("mousedown", function(b) {
					a._onTouchBegin(b)
				});
				this.rootDiv.addEventListener("mousemove", function(b) {
					a._onTouchMove(b)
				});
				this.rootDiv.addEventListener("mouseup", function(b) {
					a._onTouchEnd(b)
				})
			};
			b.addTouchListener = function() {
				var a = this;
				this.rootDiv.addEventListener("touchstart", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchmove", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchend", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchcancel", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
					a.prevent(b)
				}, !1)
			};
			b.inOutOfCanvas = function(a) {
				var b = this.getLocation(this.rootDiv, a);
				a = b.x;
				var b = b.y,
					c = d.MainContext.instance.stage;
				return 0 > a || 0 > b || a > c.stageWidth || b > c.stageHeight ? !0 : !1
			};
			b.dispatchLeaveStageEvent = function() {
				this.touchingIdentifiers.length = 0;
				d.MainContext.instance.stage.dispatchEventWith(d.Event.LEAVE_STAGE)
			};
			b._onTouchBegin = function(a) {
				tapScreenCount++;
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchBegan(b.x, b.y, c)
			};
			b._onTouchMove = function(a) {
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchMove(b.x, b.y, c)
			};
			b._onTouchEnd = function(a) {
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchEnd(b.x, b.y, c)
			};
			b.getLocation = function(a, b) {
				var c = document.documentElement,
					e = window,
					g, m;
				"function" === typeof a.getBoundingClientRect ? (m = a.getBoundingClientRect(), g = m.left, m = m.top) : m = g = 0;
				g += e.pageXOffset - c.clientLeft;
				m += e.pageYOffset - c.clientTop;
				null != b.pageX ? (c = b.pageX, e = b.pageY) : (g -= document.body.scrollLeft, m -= document.body.scrollTop, c = b.clientX, e = b.clientY);
				var h = d.Point.identity;
				h.x = (c - g) / d.StageDelegate.getInstance().getScaleX();
				h.y = (e - m) / d.StageDelegate.getInstance().getScaleY();
				return h
			};
			return c
		}(d.TouchContext);
	d.HTML5TouchContext = g;
	g.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
(function(d) {
	var g = function(c) {
			function b() {
				c.call(this);
				this._isNeedShow = !1;
				this.inputDiv = this.inputElement = null;
				this._gscaleY = this._gscaleX = 0;
				this._isNeesHide = !1;
				this.textValue = "";
				this._styleInfoes = {};
				e.getInstance()
			}
			__extends(b, c);
			var a = b.prototype;
			a._initElement = function(a, b, c, e) {
				var g = d.StageDelegate.getInstance().getScaleX(),
					h = d.StageDelegate.getInstance().getScaleY();
				this.inputDiv.style.left = a * g + "px";
				this.inputDiv.style.top = b * h + "px";
				this._gscaleX = g * c;
				this._gscaleY = h * e
			};
			a._show = function(a, b, c, d) {
				this._multiline = a;
				e.getInstance().isCurrentStageText(this) ? this.inputElement.onblur = null : (this.inputElement = e.getInstance().getInputElement(this), this.inputDiv = e.getInstance()._inputDIV);
				this._isNeedShow = e.getInstance()._needShow = !0
			};
			a.onBlurHandler = function() {
				e.getInstance().clearInputElement();
				window.scrollTo(0, 0)
			};
			a.executeShow = function() {
				this.inputElement.value = this._getText();
				null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler);
				this._resetStageText();
				0 < this._textfield._properties._maxChars ? this.inputElement.setAttribute("maxlength", this._textfield._properties._maxChars) : this.inputElement.removeAttribute("maxlength");
				this.inputElement.selectionStart = this.inputElement.value.length;
				this.inputElement.selectionEnd = this.inputElement.value.length;
				this.inputElement.focus()
			};
			a._hide = function() {
				this._isNeesHide = !0;
				0 <= d.Browser.getInstance().getUserAgent().indexOf("ios") && e.getInstance().disconnectStageText(this)
			};
			a._getText = function() {
				this.textValue || (this.textValue = "");
				return this.textValue
			};
			a._setText = function(a) {
				this.textValue = a;
				this.resetText()
			};
			a.resetText = function() {
				this.inputElement && (this.inputElement.value = this.textValue)
			};
			a._onInput = function() {
				this.textValue = this.inputElement.value;
				d.Event.dispatchEvent(this, "updateText", !1)
			};
			a._onClickHandler = function(a) {
				this._isNeedShow && (a.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new d.Event("focus")))
			};
			a._onDisconnect = function() {
				this.inputElement = null;
				this.dispatchEvent(new d.Event("blur"))
			};
			a.setElementStyle = function(a, b) {
				this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b)
			};
			a._removeInput = function() {
				this.inputElement && e.getInstance().disconnectStageText(this)
			};
			a._resetStageText = function() {
				if (this.inputElement) {
					var a = this._textfield,
						b = a._properties;
					this.setElementStyle("fontFamily", b._fontFamily);
					this.setElementStyle("fontStyle", b._italic ? "italic" : "normal");
					this.setElementStyle("fontWeight", b._bold ? "bold" : "normal");
					this.setElementStyle("textAlign", b._textAlign);
					this.setElementStyle("fontSize", b._size * this._gscaleY + "px");
					this.setElementStyle("lineHeight", b._size * this._gscaleY + "px");
					this.setElementStyle("color", b._textColorString);
					this.setElementStyle("width", a._getSize(d.Rectangle.identity).width * this._gscaleX + "px");
					this.setElementStyle("height", a._getSize(d.Rectangle.identity).height * this._gscaleY + "px");
					this.setElementStyle("verticalAlign", b._verticalAlign)
				}
			};
			return b
		}(d.StageText);
	d.HTML5StageText = g;
	g.prototype.__class__ = "egret.HTML5StageText";
	var e = function() {
			function c() {
				this._needShow = !1
			}
			var b = c.prototype;
			b.isInputOn = function() {
				return null != this._stageText
			};
			b.isCurrentStageText = function(a) {
				return this._stageText == a
			};
			b.initValue = function(a) {
				a.style.position = "absolute";
				a.style.left = "0px";
				a.style.top = "0px";
				a.style.border = "none";
				a.style.padding = "0"
			};
			b.initStageDelegateDiv = function() {
				var a = this,
					b = d.Browser.getInstance().$("#StageDelegateDiv");
				b || (b = d.Browser.getInstance().$new("div"), b.id = "StageDelegateDiv", document.getElementById(d.StageDelegate.egret_root_div).appendChild(b), a.initValue(b), b.style.width = "0px", b.style.height = "0px", a._inputDIV = d.Browser.getInstance().$new("div"), a.initValue(a._inputDIV), a._inputDIV.style.width = "0px", a._inputDIV.style.height = "0px", a._inputDIV.style.left = "0px", a._inputDIV.style.top = "-100px", a._inputDIV.style[d.Browser.getInstance().getTrans("transformOrigin")] = "0% 0% 0px", b.appendChild(a._inputDIV), document.getElementById(d.StageDelegate.canvas_div_name).addEventListener("click", function(b) {
					a._needShow ? (a._needShow = !1, d.MainContext.instance.stage._changeSizeDispatchFlag = !1, a._stageText._onClickHandler(b), c.getInstance().show()) : a._inputElement && (a.clearInputElement(), a._inputElement.blur(), a._inputElement = null)
				}), a.initInputElement(!0), a.initInputElement(!1))
			};
			b.initInputElement = function(a) {
				var b = this;
				a ? (a = document.createElement("textarea"), a.style.resize = "none", b._multiElement = a, a.id = "egretTextarea") : (a = document.createElement("input"), b._simpleElement = a, a.id = "egretInput");
				a.type = "text";
				b._inputDIV.appendChild(a);
				a.setAttribute("tabindex", "-1");
				a.style.width = "1px";
				a.style.height = "12px";
				b.initValue(a);
				a.style.outline = "thin";
				a.style.background = "none";
				a.style.overflow = "hidden";
				a.style.wordBreak = "break-all";
				a.style.opacity = 0;
				a.oninput = function() {
					b._stageText && b._stageText._onInput()
				}
			};
			b.show = function() {
				var a = this._inputElement;
				d.__callAsync(function() {
					a.style.opacity = 1
				}, this)
			};
			b.disconnectStageText = function(a) {
				if (null == this._stageText || this._stageText == a) this.clearInputElement(), this._inputElement && this._inputElement.blur()
			};
			b.clearInputElement = function() {
				this._inputElement && (this._inputElement.value = "", this._inputElement.onblur = null, this._inputElement.style.width = "1px", this._inputElement.style.height = "12px", this._inputElement.style.left = "0px", this._inputElement.style.top = "0px", this._inputElement.style.opacity = 0, (this._simpleElement == this._inputElement ? this._multiElement : this._simpleElement).style.display = "block", this._inputDIV.style.left = "0px", this._inputDIV.style.top = "-100px");
				this._stageText && (this._stageText._onDisconnect(), this._stageText = null);
				d.MainContext.instance.stage._changeSizeDispatchFlag = !0
			};
			b.getInputElement = function(a) {
				this.clearInputElement();
				this._stageText = a;
				this._inputElement = this._stageText._multiline ? this._multiElement : this._simpleElement;
				(this._simpleElement == this._inputElement ? this._multiElement : this._simpleElement).style.display = "none";
				return this._inputElement
			};
			c.getInstance = function() {
				null == c._instance && (c._instance = new d.HTMLInput, c._instance.initStageDelegateDiv());
				return c._instance
			};
			return c
		}();
	d.HTMLInput = e;
	e.prototype.__class__ = "egret.HTMLInput"
})(egret || (egret = {}));
egret.StageText.create = function() {
	return new egret.HTML5StageText
};
var RES;
(function(d) {
	var g = function(d) {
			function c(b, a, c) {
				void 0 === a && (a = !1);
				void 0 === c && (c = !1);
				d.call(this, b, a, c);
				this.itemsTotal = this.itemsLoaded = 0;
				this.groupName = "";
				this.resItem = null
			}
			__extends(c, d);
			c.dispatchResourceEvent = function(b, a, d, e, g, t) {
				void 0 === d && (d = "");
				void 0 === e && (e = null);
				void 0 === g && (g = 0);
				void 0 === t && (t = 0);
				var m = egret.Event._getPropertyData(c);
				m.groupName = d;
				m.resItem = e;
				m.itemsLoaded = g;
				m.itemsTotal = t;
				egret.Event._dispatchByTarget(c, b, a, m)
			};
			c.ITEM_LOAD_ERROR = "itemLoadError";
			c.CONFIG_COMPLETE = "configComplete";
			c.CONFIG_LOAD_ERROR = "configLoadError";
			c.GROUP_PROGRESS = "groupProgress";
			c.GROUP_COMPLETE = "groupComplete";
			c.GROUP_LOAD_ERROR = "groupLoadError";
			return c
		}(egret.Event);
	d.ResourceEvent = g;
	g.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(d) {
	var g = function() {
			function d(b, a, c) {
				this.groupName = "";
				this.data = null;
				this._loaded = !1;
				this.name = b;
				this.url = a;
				this.type = c
			}
			var c = d.prototype;
			Object.defineProperty(c, "loaded", {
				get: function() {
					return this.data ? this.data.loaded : this._loaded
				},
				set: function(b) {
					this.data && (this.data.loaded = b);
					this._loaded = b
				},
				enumerable: !0,
				configurable: !0
			});
			c.toString = function() {
				return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
			};
			d.TYPE_XML = "xml";
			d.TYPE_IMAGE = "image";
			d.TYPE_BIN = "bin";
			d.TYPE_TEXT = "text";
			d.TYPE_JSON = "json";
			d.TYPE_SHEET = "sheet";
			d.TYPE_FONT = "font";
			d.TYPE_SOUND = "sound";
			return d
		}();
	d.ResourceItem = g;
	g.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(d) {
	var g = function() {
			function e() {
				this.keyMap = {};
				this.groupDic = {};
				d.configInstance = this
			}
			var c = e.prototype;
			c.getGroupByName = function(b) {
				var a = [];
				if (!this.groupDic[b]) return a;
				b = this.groupDic[b];
				for (var c = b.length, d = 0; d < c; d++) a.push(this.parseResourceItem(b[d]));
				return a
			};
			c.getRawGroupByName = function(b) {
				return this.groupDic[b] ? this.groupDic[b] : []
			};
			c.createGroup = function(b, a, c) {
				void 0 === c && (c = !1);
				if (!c && this.groupDic[b] || !a || 0 == a.length) return !1;
				c = this.groupDic;
				for (var d = [], e = a.length, g = 0; g < e; g++) {
					var m = a[g],
						h = c[m];
					if (h) for (var m = h.length, k = 0; k < m; k++) {
						var l = h[k]; - 1 == d.indexOf(l) && d.push(l)
					} else(l = this.keyMap[m]) ? -1 == d.indexOf(l) && d.push(l) : egret.Logger.warningWithErrorId(2E3, m)
				}
				if (0 == d.length) return !1;
				this.groupDic[b] = d;
				return !0
			};
			c.parseConfig = function(b, a) {
				if (b) {
					var c = b.resources;
					if (c) for (var d = c.length, e = 0; e < d; e++) {
						var g = c[e],
							m = g.url;
						m && -1 == m.indexOf("://") && (g.url = a + m);
						this.addItemToKeyMap(g)
					}
					if (c = b.groups) for (d = c.length, e = 0; e < d; e++) {
						for (var m = c[e], h = [], k = m.keys.split(","), l = k.length, n = 0; n < l; n++) g = k[n].trim(), (g = this.keyMap[g]) && -1 == h.indexOf(g) && h.push(g);
						this.groupDic[m.name] = h
					}
				}
			};
			c.addSubkey = function(b, a) {
				var c = this.keyMap[a];
				c && !this.keyMap[b] && (this.keyMap[b] = c)
			};
			c.addItemToKeyMap = function(b) {
				this.keyMap[b.name] || (this.keyMap[b.name] = b);
				if (b.hasOwnProperty("subkeys")) {
					var a = b.subkeys.split(",");
					b.subkeys = a;
					for (var c = a.length, d = 0; d < c; d++) {
						var e = a[d];
						null == this.keyMap[e] && (this.keyMap[e] = b)
					}
				}
			};
			c.getName = function(b) {
				return (b = this.keyMap[b]) ? b.name : ""
			};
			c.getType = function(b) {
				return (b = this.keyMap[b]) ? b.type : ""
			};
			c.getRawResourceItem = function(b) {
				return this.keyMap[b]
			};
			c.getResourceItem = function(b) {
				return (b = this.keyMap[b]) ? this.parseResourceItem(b) : null
			};
			c.parseResourceItem = function(b) {
				var a = new d.ResourceItem(b.name, b.url, b.type);
				a.data = b;
				return a
			};
			return e
		}();
	d.ResourceConfig = g;
	g.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.thread = 2;
				this.loadingCount = 0;
				this.resInstance = this.callBack = null;
				this.groupTotalDic = {};
				this.numLoadedDic = {};
				this.itemListDic = {};
				this.groupErrorDic = {};
				this.retryTimesDic = {};
				this.maxRetryTimes = 3;
				this.failedList = [];
				this.priorityQueue = {};
				this.lazyLoadList = [];
				this.analyzerDic = {};
				this.queueIndex = 0
			}
			__extends(c, e);
			var b = c.prototype;
			b.isGroupInLoading = function(a) {
				return void 0 !== this.itemListDic[a]
			};
			b.loadGroup = function(a, b, c) {
				void 0 === c && (c = 0);
				if (!this.itemListDic[b] && b) if (a && 0 != a.length) {
					this.priorityQueue[c] ? this.priorityQueue[c].push(b) : this.priorityQueue[c] = [b];
					this.itemListDic[b] = a;
					c = a.length;
					for (var e = 0; e < c; e++) a[e].groupName = b;
					this.groupTotalDic[b] = a.length;
					this.numLoadedDic[b] = 0;
					this.next()
				} else egret.Logger.warningWithErrorId(2001, b), a = new d.ResourceEvent(d.ResourceEvent.GROUP_LOAD_ERROR), a.groupName = b, this.dispatchEvent(a)
			};
			b.loadItem = function(a) {
				this.lazyLoadList.push(a);
				a.groupName = "";
				this.next()
			};
			b.next = function() {
				for (; this.loadingCount < this.thread;) {
					var a = this.getOneResourceItem();
					if (!a) break;
					this.loadingCount++;
					if (a.loaded) this.onItemComplete(a);
					else {
						var b = this.analyzerDic[a.type];
						b || (b = this.analyzerDic[a.type] = egret.Injector.getInstance(d.AnalyzerBase, a.type));
						b.loadFile(a, this.onItemComplete, this)
					}
				}
			};
			b.getOneResourceItem = function() {
				if (0 < this.failedList.length) return this.failedList.shift();
				var a = Number.NEGATIVE_INFINITY,
					b;
				for (b in this.priorityQueue) a = Math.max(a, b);
				a = this.priorityQueue[a];
				if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
				b = a.length;
				for (var c, d = 0; d < b; d++) {
					this.queueIndex >= b && (this.queueIndex = 0);
					c = this.itemListDic[a[this.queueIndex]];
					if (0 < c.length) break;
					this.queueIndex++
				}
				return 0 == c.length ? null : c.shift()
			};
			b.onItemComplete = function(a) {
				this.loadingCount--;
				var b = a.groupName;
				if (!a.loaded) {
					var c = this.retryTimesDic[a.name] || 1;
					if (c > this.maxRetryTimes) delete this.retryTimesDic[a.name], d.ResourceEvent.dispatchResourceEvent(this.resInstance, d.ResourceEvent.ITEM_LOAD_ERROR, b, a);
					else {
						this.retryTimesDic[a.name] = c + 1;
						this.failedList.push(a);
						this.next();
						return
					}
				}
				if (b) {
					this.numLoadedDic[b]++;
					var c = this.numLoadedDic[b],
						e = this.groupTotalDic[b];
					a.loaded || (this.groupErrorDic[b] = !0);
					d.ResourceEvent.dispatchResourceEvent(this.resInstance, d.ResourceEvent.GROUP_PROGRESS, b, a, c, e);
					c == e && (a = this.groupErrorDic[b], this.removeGroupName(b), delete this.groupTotalDic[b], delete this.numLoadedDic[b], delete this.itemListDic[b], delete this.groupErrorDic[b], a ? d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.GROUP_LOAD_ERROR, b) : d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.GROUP_COMPLETE, b))
				} else this.callBack.call(this.resInstance, a);
				this.next()
			};
			b.removeGroupName = function(a) {
				for (var b in this.priorityQueue) {
					for (var c = this.priorityQueue[b], d = c.length, e = 0, g = !1, d = c.length, h = 0; h < d; h++) {
						if (c[h] == a) {
							c.splice(e, 1);
							g = !0;
							break
						}
						e++
					}
					if (g) {
						0 == c.length && delete this.priorityQueue[b];
						break
					}
				}
			};
			return c
		}(egret.EventDispatcher);
	d.ResourceLoader = g;
	g.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.resourceConfig = null;
				this.resourceConfig = d.configInstance
			}
			__extends(c, e);
			var b = c.prototype;
			b.addSubkey = function(a, b) {
				this.resourceConfig.addSubkey(a, b)
			};
			b.loadFile = function(a, b, c) {};
			b.getRes = function(a) {};
			b.destroyRes = function(a) {
				return !1
			};
			c.getStringPrefix = function(a) {
				if (!a) return "";
				var b = a.indexOf(".");
				return -1 != b ? a.substring(0, b) : ""
			};
			c.getStringTail = function(a) {
				if (!a) return "";
				var b = a.indexOf(".");
				return -1 != b ? a.substring(b + 1) : ""
			};
			return c
		}(egret.HashObject);
	d.AnalyzerBase = g;
	g.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this.fileDic = {};
				this.resItemDic = [];
				this._dataFormat = egret.URLLoaderDataFormat.BINARY;
				this.recycler = new egret.Recycler
			}
			__extends(c, d);
			var b = c.prototype;
			b.loadFile = function(a, b, c) {
				if (this.fileDic[a.name]) b.call(c, a);
				else {
					var d = this.getLoader();
					this.resItemDic[d.hashCode] = {
						item: a,
						func: b,
						thisObject: c
					};
					d.load(new egret.URLRequest(a.url))
				}
			};
			b.getLoader = function() {
				var a = this.recycler.pop();
				a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
				a.dataFormat = this._dataFormat;
				return a
			};
			b.onLoadFinish = function(a) {
				var b = a.target,
					c = this.resItemDic[b.hashCode];
				delete this.resItemDic[b.hashCode];
				var d = c.item,
					e = c.func;
				d.loaded = a.type == egret.Event.COMPLETE;
				d.loaded && this.analyzeData(d, b.data);
				this.recycler.push(b);
				e.call(c.thisObject, d)
			};
			b.analyzeData = function(a, b) {
				var c = a.name;
				!this.fileDic[c] && b && (this.fileDic[c] = b)
			};
			b.getRes = function(a) {
				return this.fileDic[a]
			};
			b.hasRes = function(a) {
				return null != this.getRes(a)
			};
			b.destroyRes = function(a) {
				return this.fileDic[a] ? (this.onResourceDestroy(this.fileDic[a]), delete this.fileDic[a], !0) : !1
			};
			b.onResourceDestroy = function(a) {};
			return c
		}(d.AnalyzerBase);
	d.BinAnalyzer = g;
	g.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
			}
			__extends(c, d);
			var b = c.prototype;
			b.analyzeData = function(a, b) {
				var c = a.name;
				!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
			};
			b.onResourceDestroy = function(a) {};
			return c
		}(d.BinAnalyzer);
	d.ImageAnalyzer = g;
	g.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(c, d);
			c.prototype.analyzeData = function(b, a) {
				var c = b.name;
				if (!this.fileDic[c] && a) try {
					this.fileDic[c] = JSON.parse(a)
				} catch (d) {
					egret.Logger.warningWithErrorId(1017, b.url, a)
				}
			};
			return c
		}(d.BinAnalyzer);
	d.JsonAnalyzer = g;
	g.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(c, d);
			return c
		}(d.BinAnalyzer);
	d.TextAnalyzer = g;
	g.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.sheetMap = {};
				this.textureMap = {};
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(c, e);
			var b = c.prototype;
			b.getRes = function(a) {
				var b = this.fileDic[a];
				b || (b = this.textureMap[a]);
				!b && (b = d.AnalyzerBase.getStringPrefix(a), b = this.fileDic[b]) && (a = d.AnalyzerBase.getStringTail(a), b = b.getTexture(a));
				return b
			};
			b.onLoadFinish = function(a) {
				var b = a.target,
					c = this.resItemDic[b.hashCode];
				delete this.resItemDic[b.hashCode];
				var d = c.item,
					e = c.func;
				d.loaded = a.type == egret.Event.COMPLETE;
				if (d.loaded) if ("string" == typeof b.data) {
					if (d.loaded = !1, a = this.analyzeConfig(d, b.data)) {
						b = d.url;
						d.url = a;
						this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
						this.loadFile(d, e, c.thisObject);
						this._dataFormat = egret.URLLoaderDataFormat.TEXT;
						d.url = b;
						return
					}
				} else this.analyzeBitmap(d, b.data);
				this.recycler.push(b);
				e.call(c.thisObject, d)
			};
			b.analyzeConfig = function(a, b) {
				var c = a.name,
					d, e = "";
				try {
					d = JSON.parse(b)
				} catch (g) {
					egret.Logger.warningWithErrorId(1017, a.url, b)
				}
				d && (this.sheetMap[c] = d, e = this.getRelativePath(a.url, d.file));
				return e
			};
			b.analyzeBitmap = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) {
					var d = this.sheetMap[c];
					delete this.sheetMap[c];
					d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "" : c);
					this.fileDic[c] = d
				}
			};
			b.getRelativePath = function(a, b) {
				a = a.split("\\").join("/");
				var c = a.lastIndexOf("/");
				return a = -1 != c ? a.substring(0, c + 1) + b : b
			};
			b.parseSpriteSheet = function(a, b, c) {
				b = b.frames;
				if (!b) return null;
				var d = new egret.SpriteSheet(a),
					e = this.textureMap,
					g;
				for (g in b) {
					var h = b[g];
					a = d.createTexture(g, h.x, h.y, h.w, h.h, h.offX, h.offY, h.sourceW, h.sourceH);
					h.scale9grid && (h = h.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(h[0]), parseInt(h[1]), parseInt(h[2]), parseInt(h[3])));
					null == e[g] && (e[g] = a, c && this.addSubkey(g, c))
				}
				return d
			};
			b.destroyRes = function(a) {
				var b = this.fileDic[a];
				if (b) {
					delete this.fileDic[a];
					for (var c in b._textureMap) this.textureMap[c] && delete this.textureMap[c];
					return !0
				}
				return !1
			};
			return c
		}(d.BinAnalyzer);
	d.SheetAnalyzer = g;
	g.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this)
			}
			__extends(c, d);
			var b = c.prototype;
			b.analyzeConfig = function(a, b) {
				var c = a.name,
					d, e = "";
				try {
					d = JSON.parse(b)
				} catch (g) {}
				d ? e = this.getRelativePath(a.url, d.file) : (d = b, e = this.getTexturePath(a.url, d));
				this.sheetMap[c] = d;
				return e
			};
			b.analyzeBitmap = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) {
					var d = this.sheetMap[c];
					delete this.sheetMap[c];
					d = new egret.BitmapFont(b, d);
					this.fileDic[c] = d
				}
			};
			b.getTexturePath = function(a, b) {
				var c = "",
					d = b.split("\n")[2],
					e = d.indexOf('file="'); - 1 != e && (d = d.substring(e + 6), e = d.indexOf('"'), c = d.substring(0, e));
				a = a.split("\\").join("/");
				e = a.lastIndexOf("/");
				return a = -1 != e ? a.substring(0, e + 1) + c : c
			};
			b.destroyRes = function(a) {
				return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
			};
			return c
		}(d.SheetAnalyzer);
	d.FontAnalyzer = g;
	g.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.SOUND
			}
			__extends(c, d);
			c.prototype.analyzeData = function(b, a) {
				var c = b.name;
				!this.fileDic[c] && a && (this.fileDic[c] = a, (c = b.data) && c.soundType ? a.preload(c.soundType) : a.preload(egret.Sound.EFFECT))
			};
			return c
		}(d.BinAnalyzer);
	d.SoundAnalyzer = g;
	g.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
(function(d) {
	var g = function(d) {
			function c() {
				d.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(c, d);
			c.prototype.analyzeData = function(b, a) {
				var c = b.name;
				if (!this.fileDic[c] && a) try {
					var d = egret.XML.parse(a);
					this.fileDic[c] = d
				} catch (e) {}
			};
			return c
		}(d.BinAnalyzer);
	d.XMLAnalyzer = g;
	g.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
(function(d) {
	d.loadConfig = function(c, b, a) {
		void 0 === b && (b = "");
		void 0 === a && (a = "json");
		e.loadConfig(c, b, a)
	};
	d.loadGroup = function(c, b) {
		void 0 === b && (b = 0);
		e.loadGroup(c, b)
	};
	d.isGroupLoaded = function(c) {
		return e.isGroupLoaded(c)
	};
	d.getGroupByName = function(c) {
		return e.getGroupByName(c)
	};
	d.createGroup = function(c, b, a) {
		void 0 === a && (a = !1);
		return e.createGroup(c, b, a)
	};
	d.hasRes = function(c) {
		return e.hasRes(c)
	};
	d.parseConfig = function(c, b) {
		void 0 === b && (b = "");
		e.parseConfig(c, b)
	};
	d.getRes = function(c) {
		return e.getRes(c)
	};
	d.getResAsync = function(c, b, a) {
		e.getResAsync(c, b, a)
	};
	d.getResByUrl = function(c, b, a, d) {
		void 0 === d && (d = "");
		e.getResByUrl(c, b, a, d)
	};
	d.destroyRes = function(c) {
		return e.destroyRes(c)
	};
	d.setMaxLoadingThread = function(c) {
		e.setMaxLoadingThread(c)
	};
	d.setMaxRetryTimes = function(c) {
		e.setMaxRetryTimes(c)
	};
	d.addEventListener = function(c, b, a, d, g) {
		void 0 === d && (d = !1);
		void 0 === g && (g = 0);
		e.addEventListener(c, b, a, d, g)
	};
	d.removeEventListener = function(c, b, a, d) {
		void 0 === d && (d = !1);
		e.removeEventListener(c, b, a, d)
	};
	var g = function(c) {
			function b() {
				c.call(this);
				this.analyzerDic = {};
				this.configItemList = [];
				this.configComplete = this.callLaterFlag = !1;
				this.loadedGroups = [];
				this.groupNameList = [];
				this.asyncDic = {};
				this.init()
			}
			__extends(b, c);
			var a = b.prototype;
			a.getAnalyzerByType = function(a) {
				var b = this.analyzerDic[a];
				b || (b = this.analyzerDic[a] = egret.Injector.getInstance(d.AnalyzerBase, a));
				return b
			};
			a.init = function() {
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(d.AnalyzerBase, d.BinAnalyzer, d.ResourceItem.TYPE_BIN);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(d.AnalyzerBase, d.ImageAnalyzer, d.ResourceItem.TYPE_IMAGE);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(d.AnalyzerBase, d.TextAnalyzer, d.ResourceItem.TYPE_TEXT);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(d.AnalyzerBase, d.JsonAnalyzer, d.ResourceItem.TYPE_JSON);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(d.AnalyzerBase, d.SheetAnalyzer, d.ResourceItem.TYPE_SHEET);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(d.AnalyzerBase, d.FontAnalyzer, d.ResourceItem.TYPE_FONT);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(d.AnalyzerBase, d.SoundAnalyzer, d.ResourceItem.TYPE_SOUND);
				egret.Injector.hasMapRule(d.AnalyzerBase, d.ResourceItem.TYPE_XML) || egret.Injector.mapClass(d.AnalyzerBase, d.XMLAnalyzer, d.ResourceItem.TYPE_XML);
				this.resConfig = new d.ResourceConfig;
				this.resLoader = new d.ResourceLoader;
				this.resLoader.callBack = this.onResourceItemComp;
				this.resLoader.resInstance = this;
				this.resLoader.addEventListener(d.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
				this.resLoader.addEventListener(d.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
			};
			a.loadConfig = function(a, b, c) {
				void 0 === c && (c = "json");
				this.configItemList.push({
					url: a,
					resourceRoot: b,
					type: c
				});
				this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
			};
			a.startLoadConfig = function() {
				this.callLaterFlag = !1;
				var a = this.configItemList;
				this.configItemList = [];
				this.loadingConfigList = a;
				for (var c = a.length, e = [], g = 0; g < c; g++) {
					var m = a[g],
						m = new d.ResourceItem(m.url, m.url, m.type);
					e.push(m)
				}
				this.resLoader.loadGroup(e, b.GROUP_CONFIG, Number.MAX_VALUE)
			};
			a.isGroupLoaded = function(a) {
				return -1 != this.loadedGroups.indexOf(a)
			};
			a.getGroupByName = function(a) {
				return this.resConfig.getGroupByName(a)
			};
			a.loadGroup = function(a, b) {
				void 0 === b && (b = 0);
				if (-1 != this.loadedGroups.indexOf(a)) d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.GROUP_COMPLETE, a);
				else if (!this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
					var c = this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(c, a, b)
				} else this.groupNameList.push({
					name: a,
					priority: b
				})
			};
			a.createGroup = function(a, b, c) {
				void 0 === c && (c = !1);
				if (c) {
					var d = this.loadedGroups.indexOf(a); - 1 != d && this.loadedGroups.splice(d, 1)
				}
				return this.resConfig.createGroup(a, b, c)
			};
			a.onGroupComp = function(a) {
				if (a.groupName == b.GROUP_CONFIG) {
					a = this.loadingConfigList.length;
					for (var c = 0; c < a; c++) {
						var e = this.loadingConfigList[c],
							g = this.getAnalyzerByType(e.type),
							m = g.getRes(e.url);
						g.destroyRes(e.url);
						this.resConfig.parseConfig(game_config.res_config, e.resourceRoot)
					}
					this.configComplete = !0;
					this.loadingConfigList = null;
					d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.CONFIG_COMPLETE);
					this.loadDelayGroups()
				} else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
			};
			a.loadDelayGroups = function() {
				var a = this.groupNameList;
				this.groupNameList = [];
				for (var b = a.length, c = 0; c < b; c++) {
					var d = a[c];
					this.loadGroup(d.name, d.priority)
				}
			};
			a.onGroupError = function(a) {
				a.groupName == b.GROUP_CONFIG ? (this.loadingConfigList = null, d.ResourceEvent.dispatchResourceEvent(this, d.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
			};
			a.hasRes = function(a) {
				var b = this.resConfig.getType(a);
				return "" == b && (a = d.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(a), "" == b) ? !1 : !0
			};
			a.parseConfig = function(a, b) {
				this.resConfig.parseConfig(a, b);
				this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
			};
			a.getRes = function(a) {
				var b = this.resConfig.getType(a);
				return "" == b && (b = d.AnalyzerBase.getStringPrefix(a), b = this.resConfig.getType(b), "" == b) ? null : this.getAnalyzerByType(b).getRes(a)
			};
			a.getResAsync = function(a, b, c) {
				var e = this.resConfig.getType(a),
					g = this.resConfig.getName(a);
				if ("" == e && (g = d.AnalyzerBase.getStringPrefix(a), e = this.resConfig.getType(g), "" == e)) {
					b.call(c, null);
					return
				}(e = this.getAnalyzerByType(e).getRes(a)) ? b.call(c, e) : (a = {
					key: a,
					compFunc: b,
					thisObject: c
				}, this.asyncDic[g] ? this.asyncDic[g].push(a) : (this.asyncDic[g] = [a], g = this.resConfig.getResourceItem(g), this.resLoader.loadItem(g)))
			};
			a.getResByUrl = function(a, b, c, e) {
				void 0 === e && (e = "");
				if (a) {
					e || (e = this.getTypeByUrl(a));
					var g = this.getAnalyzerByType(e).getRes(a);
					g ? b.call(c, g) : (b = {
						key: a,
						compFunc: b,
						thisObject: c
					}, this.asyncDic[a] ? this.asyncDic[a].push(b) : (this.asyncDic[a] = [b], a = new d.ResourceItem(a, a, e), this.resLoader.loadItem(a)))
				} else b.call(c, null)
			};
			a.getTypeByUrl = function(a) {
				(a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
				switch (a) {
				case d.ResourceItem.TYPE_XML:
				case d.ResourceItem.TYPE_JSON:
				case d.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
				case "jpeg":
				case "bmp":
					a = d.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					a = d.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					a = d.ResourceItem.TYPE_TEXT;
					break;
				case "mp3":
				case "ogg":
				case "mpeg":
				case "wav":
				case "m4a":
				case "mp4":
				case "aiff":
				case "wma":
				case "mid":
					a = d.ResourceItem.TYPE_SOUND;
					break;
				default:
					a = d.ResourceItem.TYPE_BIN
				}
				return a
			};
			a.onResourceItemComp = function(a) {
				var b = this.asyncDic[a.name];
				delete this.asyncDic[a.name];
				a = this.getAnalyzerByType(a.type);
				for (var c = b.length, d = 0; d < c; d++) {
					var e = b[d],
						g = a.getRes(e.key);
					e.compFunc.call(e.thisObject, g, e.key)
				}
			};
			a.destroyRes = function(a) {
				var b = this.resConfig.getRawGroupByName(a);
				if (b) {
					var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
					a = b.length;
					for (var d = 0; d < a; d++) {
						c = b[d];
						c.loaded = !1;
						var e = this.getAnalyzerByType(c.type);
						e.destroyRes(c.name);
						this.removeLoadedGroupsByItemName(c.name)
					}
					return !0
				}
				b = this.resConfig.getType(a);
				if ("" == b) return !1;
				c = this.resConfig.getRawResourceItem(a);
				c.loaded = !1;
				e = this.getAnalyzerByType(b);
				b = e.destroyRes(a);
				this.removeLoadedGroupsByItemName(c.name);
				return b
			};
			a.removeLoadedGroupsByItemName = function(a) {
				for (var b = this.loadedGroups, c = b.length, d = 0; d < c; d++) for (var e = this.resConfig.getRawGroupByName(b[d]), g = e.length, k = 0; k < g; k++) if (e[k].name == a) {
					b.splice(d, 1);
					d--;
					c = b.length;
					break
				}
			};
			a.setMaxLoadingThread = function(a) {
				1 > a && (a = 1);
				this.resLoader.thread = a
			};
			a.setMaxRetryTimes = function(a) {
				a = Math.max(a, 0);
				this.resLoader.maxRetryTimes = a
			};
			b.GROUP_CONFIG = "RES__CONFIG";
			return b
		}(egret.EventDispatcher);
	g.prototype.__class__ = "RES.Resource";
	var e = new g
})(RES || (RES = {}));
var Utils;
(function(d) {
	d.EventName = {
		BEGIN: "BEGIN",
		SLIDE: "SLIDE",
		MOVE: "MOVE",
		END: "END"
	};
	d.rgsEvt = function(g, e, c, b) {
		switch (e) {
		case d.EventName.BEGIN:
			g.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(a) {
				b || a.stopImmediatePropagation();
				c()
			}, this);
			break;
		case d.EventName.MOVE:
			g.addEventListener(egret.TouchEvent.TOUCH_MOVE, function(a) {
				b || a.stopImmediatePropagation();
				c()
			}, this);
			break;
		case d.EventName.END:
			g.addEventListener(egret.TouchEvent.TOUCH_END, function(a) {
				b || a.stopImmediatePropagation();
				c()
			}, this)
		}
	};
	d.distPoint = function(d, e) {
		return Math.sqrt((d.x - e.x) * (d.x - e.x) + (d.y - e.y) * (d.y - e.y))
	};
	d.getRotationBy2Point = function(d, e) {
		return 180 * Math.atan2(d.y - e.y, d.x - e.x) / Math.PI + 180
	};
	d.getPointByRotationAndPointAndLineWidth = function(d, e, c) {
		var b = d.x + 2 * c * Math.cos(e / 180 * Math.PI);
		d = d.y + 2 * c * Math.sin(e / 180 * Math.PI);
		return {
			x: Math.ceil(b),
			y: Math.ceil(d)
		}
	};
	d.createBitmapByName = function(d) {
		var e = new egret.Bitmap;
		d = RES.getRes(d);
		e.texture = d;
		return e
	};
	d.newMC = function(d) {
		var e = RES.getRes(d.Jsondata),
			c = RES.getRes(d.Texturedata),
			e = new egret.MovieClipDataFactory(e, c),
			e = new egret.MovieClip(e.generateMovieClipData(d.Mcname));
		e.anchorX = void 0 != d.Anchorx ? d.Anchorx : 0.5;
		e.anchorY = void 0 != d.Anchory ? d.Anchory : 0.5;
		e.x = d.X;
		e.y = d.Y;
		void 0 != d.Framerate && (e.frameRate = d.Framerate);
		return e
	};
	d.createMovieClip = function(d, e, c) {
		d = game_config[d]
		// d = RES.getRes(d);
		e = RES.getRes(e);
		e = new egret.MovieClipDataFactory(d, e);
		c = new egret.MovieClip(e.generateMovieClipData(c));
		c.mcf = e;
		c.play(-1);
		return c
	};
	d.createMovieClipNotPlay = function(d, e, c) {
		d = game_config[d]
		// d = RES.getRes(d);
		e = RES.getRes(e);
		e = new egret.MovieClipDataFactory(d, e);
		c = new egret.MovieClip(e.generateMovieClipData(c));
		c.mcf = e;
		return c
	};
	d.stopAllMovieClipInArr = function(d, e) {
		for (var c = d.length ? d.length : 0, b = 0; b < c; b++) e(d[b])
	};
	d.changeMovieClipData = function(d, e) {
		d.movieClipData = d.mcf.generateMovieClipData(e);
		d.play(-1)
	};
	d.changeMovieClipDataNotPlay = function(d, e) {
		d.movieClipData = d.mcf.generateMovieClipData(e);
		d.play()
	};
	d.getStrInTags = function(d, e) {
		for (var c = 0, b = [], a = [], f = 0; 0 <= d.indexOf(e, c);) c = d.indexOf(e, c), b.push(c), c += 6, a.push(d.indexOf("_" + e.replace("_", ""), c)), f++;
		for (var f = [], c = 0, p = b.length; c < p; c++) f.push([b[c], a[c]]);
		return f
	};
	d.getLocalData = function(d) {
		return egret.localStorage.getItem(d)
	};
	d.setLocalData = function(d, e) {
		egret.localStorage.setItem(d, "" + e)
	};
	d.getRandomOne2Numer = function(d) {
		return Math.abs(Math.ceil(Math.random() * d))
	};
	d.cl = function(d) {
	}
})(Utils || (Utils = {}));
var KeilingGame;

var Render = function() {
		function d() {
			this.acc = 0;
			this.dt = Number((1E3 / d.FPS).toFixed(1))
		}
		var g = d.prototype;
		g.register = function(d, c) {
			this.callback = d;
			this.context = c;
			this.acc = 0
		};
		g.unregister = function() {
			this.context = this.callback = null;
			this.stop()
		};
		g.handle = function(d) {
			for (this.acc += d; this.acc >= this.dt;) this.callback.call(this.context, this.dt), this.acc -= this.dt
		};
		g.start = function() {
			egret.Ticker.getInstance().register(this.handle, this)
		};
		g.stop = function() {
			egret.Ticker.getInstance().unregister(this.handle, this);
			this.acc = 0;
			this.framerate = 60
		};
		g.pause = function() {
			egret.Ticker.getInstance().unregister(this.handle, this)
		};
		g.resume = function() {
			egret.Ticker.getInstance().register(this.handle, this)
		};
		Object.defineProperty(g, "framerate", {
			set: function(e) {
				d.FPS = e;
				this.dt = Number((1E3 / e).toFixed(1))
			},
			enumerable: !0,
			configurable: !0
		});
		d.FPS = 60;
		return d
	}();
Render.prototype.__class__ = "Render";
(function(d) {
	var g = function(b) {
			function a(c) {
				var d = this;
				b.call(this);
				this.isMoving = !1;
				this.propsSlow = {
					timer: null,
					bmp: null,
					isStart: !1
				};
				this.propsFlash = {
					bmp: null,
					isStart: !1
				};
				this.propsFire = {
					timer: null,
					bmp: null,
					isStart: !1
				};
				this.s = this.isInFire = !1;
				this.gc = c;
				this.initEnemy();
				c = Utils.getLocalData("PROPS");
				a.CurHasPropsSet = c ? c.split(",") : [0, 0, 0];
				this.propsSlow.timer = new egret.Timer(1E3, 10);
				this.propsSlow.timer.addEventListener(egret.TimerEvent.TIMER, function() {
					d.propsSlow.isStart = !0
				}, this);
				this.propsSlow.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {
					egret.Tween.get(d.propsSlow.bmp).to({
						alpha: 0
					}, 300);
					egret.setTimeout(function() {
						d.removeChild(d.propsSlow.bmp);
						d.propsSlow.bmp.alpha = 1
					}, d, 300);
					d.propsSlow.isStart = !1;
					d.propsSlow.timer.reset()
				}, this);
				this.propsFire.timer = new egret.Timer(1E3, 5);
				this.propsFire.timer.addEventListener(egret.TimerEvent.TIMER, function() {
					d.propsFire.isStart = !0
				}, this);
				this.propsFire.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {
					d.propsFire.isStart = !1;
					d.propsFire.timer.reset();
					0 <= d.getChildIndex(d.propsFire.bmp) && d.removeChild(d.propsFire.bmp)
				}, this)
			}
			__extends(a, b);
			var c = a.prototype;
			c.hitTest = function(a, c, d) {
				return b.prototype.hitTest.call(this, a, c, d)
			};
			c.initEnemy = function() {
				for (var b = 0; 6 > b; b++) {
					var c = -200 - b * this.gc.sh / 3,
						c = 0 == b ? new e(this.gc, c, "forTeach") : new e(this.gc, c, "");
					c.isDie = !1;
					a.ENEMY_SET.push(c);
					this.isMoving = !1
				}
				this.addEnemyInStage();
				this.isMoving = !0
			};
			c.reMakeEnemy = function(b) {
				if (b) {
					b.isDie && (b.y = a.ENEMY_SET[a.ENEMY_SET.length - 1].y - a.ENEMY_DISTANCE, a.ENEMY_SET.shift(), a.ENEMY_SET.push(b));
					var c = Math.floor(Math.random() * a.ENEMY_TYPE_COUNT);
					b.enemyFeeble = c;
					b.isDie = !1
				}
			};
			c.resetEnemy = function() {
				this.gc.addChild(this);
				this.initEnemy()
			};
			c.reMoveEnemy = function() {
				a.ENEMY_SET.length = 0;
				this.removeChildren()
			};
			c.addEnemyInStage = function() {
				for (var b = 0, c = a.ENEMY_SET.length; b < c; b++) this.addChild(a.ENEMY_SET[c - 1 - b])
			};
			c.enemyMove = function() {
				if (this.isMoving) for (var b = 0, c = a.ENEMY_SET.length; b < c; b++) {
					var f = a.ENEMY_SET[b];
					if (f) {
						if (Utils.getLocalData("IS_FIRST_TIME_PLAY")) this.gc.isFirstTimePlay = !1;
						else if ("forTeach" == f.type && !d.GC.isFirstTimePlay && f.mcSkin.y > f.mcSkin.height) {
							d.GC.isFirstTimePlay = !0;
							if (!this.teachPanel) {
								this.teachPanel = new egret.Sprite;
								var g = new egret.Shape;
								g.graphics.beginFill(0);
								g.graphics.drawRect(0, 0, this.gc.sw, f.mcSkin.y - 0.7 * f.height);
								g.graphics.endFill();
								g.alpha = 0.6;
								this.teachPanel.addChild(g);
								g = new egret.Shape;
								g.graphics.beginFill(0);
								g.graphics.drawRect(0, f.mcSkin.y - 0.7 * f.height + f.height, this.gc.sw, this.gc.sh);
								g.graphics.endFill();
								g.alpha = 0.6;
								this.teachPanel.addChild(g);
								g = new egret.Shape;
								g.graphics.beginFill(0);
								g.graphics.drawRect(f.mcSkin.x + f.mcSkin.width * (1 - f.mcSkin.anchorX), f.mcSkin.y - 0.7 * f.height, this.gc.sw - f.mcSkin.x + f.mcSkin.width * (1 - f.mcSkin.anchorX), f.height);
								g.graphics.endFill();
								g.alpha = 0.6;
								this.teachPanel.addChild(g);
								g = new egret.Shape;
								g.graphics.beginFill(0);
								g.graphics.drawRect(0, f.mcSkin.y - 0.7 * f.height, f.mcSkin.x - f.mcSkin.width / 2, f.height);
								g.graphics.endFill();
								g.alpha = 0.6;
								this.teachPanel.addChild(g);
								g = Utils.createBitmapByName("teach");
								g.anchorX = 0.5;
								var h = g.width / g.height;
								g.width = this.gc.sw / 10 * 8;
								g.height = g.width / h;
								g.x = this.gc.sw / 2;
								g.y = f.mcSkin.y - 0.5 * f.height + f.height + g.height;
								egret.Tween.get(g).to({
									scaleX: 1.2,
									scaleY: 1.2
								}, 400).to({
									scaleX: 1,
									scaleY: 1
								}, 400).to({
									scaleX: 1.2,
									scaleY: 1.2
								}, 400).to({
									scaleX: 1,
									scaleY: 1
								}, 400);
								this.teachPanel.addChild(g);
								var g = new egret.Sprite,
									k = new egret.Shape;
								this.teachPanel.addChild(g);
								var l = [
									[21.256038647342997, 27.053140096618357],
									[21.256038647342997, 28.985507246376812],
									[20.096618357487923, 38.64734299516908],
									[27.82608695652174, 54.106280193236714],
									[34.78260869565217, 67.6328502415459],
									[34.009661835748794, 69.56521739130434],
									[38.64734299516908, 74.20289855072464],
									[38.64734299516908, 78.84057971014494],
									[40.57971014492754, 88.88888888888889],
									[44.44444444444444, 90.82125603864735],
									[48.309178743961354, 96.61835748792271],
									[48.309178743961354, 102.41545893719807],
									[59.90338164251208, 121.73913043478261],
									[63.768115942028984, 133.33333333333334],
									[65.70048309178745, 137.19806763285024],
									[69.56521739130434, 148.40579710144928],
									[79.22705314009661, 166.18357487922705],
									[79.22705314009661, 168.1159420289855],
									[81.93236714975846, 177.77777777777777],
									[83.09178743961353, 187.43961352657004],
									[86.57004830917874, 193.23671497584542],
									[88.88888888888889, 204.83091787439614],
									[92.7536231884058, 208.69565217391306],
									[92.7536231884058, 216.42512077294685],
									[94.68599033816426, 229.95169082125605],
									[97.3913043478261, 239.61352657004832],
									[100.48309178743962, 247.34299516908214],
									[100.48309178743962, 256.6183574879227],
									[110.14492753623189, 274.3961352657005],
									[110.14492753623189, 276.32850241545896],
									[112.85024154589372, 285.9903381642512],
									[123.67149758454107, 301.4492753623189],
									[129.46859903381642, 314.97584541062804],
									[140.67632850241546, 332.3671497584541],
									[150.72463768115944, 357.487922705314],
									[160.3864734299517, 367.1497584541063],
									[164.2512077294686, 372.94685990338166],
									[166.18357487922705, 374.8792270531401],
									[171.98067632850243, 374.8792270531401],
									[179.71014492753625, 361.3526570048309],
									[191.30434782608697, 343.96135265700485],
									[193.23671497584542, 333.9130434782609],
									[196.32850241545896, 324.6376811594203],
									[206.76328502415458, 307.2463768115942],
									[210.6280193236715, 299.5169082125604],
									[210.6280193236715, 289.8550724637681],
									[216.42512077294685, 278.2608695652174],
									[227.24637681159422, 262.8019323671498],
									[228.792270531401, 255.07246376811594],
									[235.7487922705314, 241.54589371980677],
									[241.54589371980677, 233.81642512077295],
									[244.2512077294686, 224.15458937198068],
									[247.34299516908214, 210.2415458937198],
									[264.34782608695656, 185.5072463768116],
									[278.2608695652174, 162.31884057971016],
									[285.9903381642512, 151.49758454106282],
									[293.719806763285, 142.22222222222223],
									[295.6521739130435, 133.33333333333334],
									[307.2463768115942, 119.80676328502416],
									[314.97584541062804, 106.28019323671498],
									[330.4347826086957, 90.82125603864735],
									[336.231884057971, 79.22705314009661],
									[347.82608695652175, 57.19806763285025],
									[351.69082125603865, 52.173913043478265],
									[351.69082125603865, 48.309178743961354],
									[352.46376811594206, 46.3768115942029],
									[363.2850241545894, 27.82608695652174],
									[363.2850241545894, 26.280193236714975],
									[363.2850241545894, 20.096618357487923],
									[367.1497584541063, 19.32367149758454]
								];
								k.graphics.lineStyle(12, 16002187);
								g.scaleY = this.gc.sw / 4 / 250;
								g.scaleX = this.gc.sw / 4 / 250;
								g.x = this.gc.sw / 2 - this.gc.sw / 4 / 2;
								g.y = this.gc.sh / 5 * 3 - 200;
								var n = 0,
									q = Utils.createBitmapByName("arr");
								g.addChild(k);
								g.addChild(q);
								g = new egret.Timer(2, l.length);
								g.addEventListener(egret.TimerEvent.TIMER, function() {
									n + 1 < l.length && (q.x = l[n][0], q.y = l[n][1], k.graphics.moveTo(l[n][0], l[n][1]), k.graphics.lineTo(l[n + 1][0], l[n + 1][1]), k.graphics.endFill());
									n++
								}, this);
								g.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {}, this);
								g.start();
								this.gc.addChild(this.teachPanel)
							}
							this.gc.render.pause()
						}
						0 == f.balloon.balloon.length ? this.propsSlow.isStart ? (Utils.changeMovieClipData(f.mcSkin, "fall"), f.speed += 0.2) : (Utils.changeMovieClipData(f.mcSkin, "fall"), f.speed += 2) : this.propsSlow.isStart ? (f.speed = 1, f.mcSkin.framerate = 2) : (f.mcSkin.framerate = 60, f.speed = this.gc.isTheSecondMode ? 2 + this.gc.level / 2 : 1.5 + this.gc.level / 2);
						f.mcSkin.y > this.gc.sh - f.mcSkin.height * f.w / 177 * 0.5 - 44 / 918 * this.gc.background.height ? 0 != f.balloon.balloon.length ? this.gc.isTheSecondMode ? (a.ENEMY_SET.splice(b, 1), f.die(!1), g = a.ENEMY_SET[a.ENEMY_SET.length - 1].y - (a.ENEMY_SET.length - b) * this.gc.sh / 3, g = new e(this.gc, g, ""), h = this.getChildIndex(a.ENEMY_SET[a.ENEMY_SET.length - 1]), this.addChildAt(g, 0 >= h - 1 ? 0 : h - 1), a.ENEMY_SET.push(g)) : (Utils.changeMovieClipData(f.mcSkin, "win"), f.mcSkin.y = this.gc.sh - f.mcSkin.height * f.w / 177 * 0.5 - 44 / 918 * this.gc.background.height, this.gc.gameOver()) : (f.fallDie(), a.ENEMY_SET.splice(b, 1), g = a.ENEMY_SET[a.ENEMY_SET.length - 1].y - (a.ENEMY_SET.length - b) * this.gc.sh / 3, g = new e(this.gc, g, ""), h = this.getChildIndex(a.ENEMY_SET[a.ENEMY_SET.length - 1]), this.addChildAt(g, 0 >= h - 1 ? 0 : h - 1), a.ENEMY_SET.push(g)) : f.isInFire || (f.mcSkin.y += f.speed, f.balloon.updateBalloonPosition(f.mcSkin.x / 2, f.mcSkin.y / 2))
					}
					0 <= this.getChildIndex(this.propsFire.bmp) && 0 < f.balloon.balloon.length && f.mcSkin.y + 0.2 * f.mcSkin.height > this.propsFire.bmp.y + this.propsFire.bmp.height / 4 && !f.isInFire && (f.isInFire = !0, this.propsFire.isStart || (this.propsFire.isStart = !0, this.propsFire.timer.start()), f.fireDie(), a.ENEMY_SET.splice(b, 1), g = a.ENEMY_SET[a.ENEMY_SET.length - 1].y - (a.ENEMY_SET.length - b) * this.gc.sh / 3, g = new e(this.gc, g, ""), h = this.getChildIndex(a.ENEMY_SET[a.ENEMY_SET.length - 1]), this.addChildAt(g, 0 >= h - 1 ? 0 : h - 1), a.ENEMY_SET.push(g))
				}
				0 < a.Box_SET.length && (0 != a.Box_SET[0].balloon.balloon.length && (a.Box_SET[0].x += 1, b = a.Box_SET[0].y, 1 == Utils.getRandomOne2Numer(2) ? a.Box_SET[0].y = b + 1.5 : a.Box_SET[0].y = b - 1.5), 0 == a.Box_SET[0].balloon.balloon.length ? (a.Box_SET[0].speed += 2, a.Box_SET[0].mcSkin.y += a.Box_SET[0].speed, Utils.changeMovieClipData(a.Box_SET[0].mcSkin, "death"), a.Box_SET[0].balloon.updateBalloonPosition(f.mcSkin.x / 2, f.mcSkin.y / 2), a.Box_SET[0].mcSkin.y > this.gc.sh - a.Box_SET[0].mcSkin.height / 2 && (a.Box_SET[0].mcSkin.y = this.gc.sh - a.Box_SET[0].mcSkin.height / 3 * 4, a.Box_SET[0].dieBox(!0), a.Box_SET.length = 0, this.gc.money += 16)) : a.Box_SET[0].x > 4 * this.gc.sw && (a.Box_SET[0].die(!0), a.Box_SET.length = 0));
				0 < a.Props_SET.length && (a.Props_SET[0].y += 1.5, 0 == a.Props_SET[0].balloon.balloon.length && (a.Props_SET[0].speed += 2, a.Props_SET[0].mcSkin.y += a.Props_SET[0].speed, a.Props_SET[0].balloon.updateBalloonPosition(f.mcSkin.x / 2, f.mcSkin.y / 2)), a.Props_SET[0].mcSkin.y > this.gc.sh - a.Props_SET[0].mcSkin.height / 2 && (a.Props_SET[0].die(!0), a.Props_SET.length = 0))
			};
			c.myHitTest = function(b) {
				for (var c = this, d = 0, f = a.ENEMY_SET.length; d < f; d++) {
					var e = a.ENEMY_SET[d];
					if (e.mcSkin.y > e.mcSkin.height / 2) for (var g = 0, l = e.balloon.balloon.length; g < l; g++) {
						var n = e.balloon.feeble;
						n[g] == b && e.balloon.broken(g)
					}
				}
				d = 0;
				for (f = a.Box_SET.length; d < f; d++) e = a.Box_SET[d], n = e.balloon.feeble, n[e.balloon.balloon.length - 1] == b && e.balloon.broken(e.balloon.balloon.length - 1);
				if (0 < a.Props_SET.length) for (d = 0, f = a.Props_SET.length; d < f; d++) if (e = a.Props_SET[d]) if (n = e.balloon.feeble, n[e.balloon.balloon.length - 1] == b) switch (e.balloon.broken(e.balloon.balloon.length - 1), b) {
				case 11:
					0 <= this.getChildIndex(this.propsSlow.bmp) && (this.removeChild(this.propsSlow.bmp), this.propsSlow.bmp.alpha = 1, this.propsSlow.isStart = !1, this.propsSlow.timer.reset());
					this.propsSlow.bmp = Utils.createBitmapByName("slowdown");
					this.addChild(this.propsSlow.bmp);
					a.Props_SET[0].die(!0);
					a.Props_SET.length = 0;
					this.propsSlow.isStart = !0;
					this.propsSlow.timer.start();
					break;
				case 12:
					0 <= this.getChildIndex(this.propsFlash.bmp) && this.removeChild(this.propsFlash.bmp);
					this.propsFlash.bmp = new egret.Sprite;
					this.addChild(this.propsFlash.bmp);
					this.gc.render.pause();
					d = 0;
					for (f = a.ENEMY_SET.length; d < f; d++) e = a.ENEMY_SET[d], e.mcSkin.y > e.mcSkin.height / 4 && (Utils.changeMovieClipData(e.mcSkin, "shock"), e.broken2());
					a.Props_SET[0].die(!0);
					a.Props_SET.length = 0;
					egret.setTimeout(function() {
						c.gc.render.resume();
						0 <= c.getChildIndex(c.propsFlash.bmp) && c.removeChild(c.propsFlash.bmp)
					}, this, 1E3);
					break;
				}
			};
			c.showBox = function() {
				var a = new e(this.gc, 0, "box");
				// this.addChild(a)
			};
			c.showProps = function() {
				var a = new e(this.gc, 0, "props");
				// this.addChild(a)
			};
			
			a.ENEMY_TYPE_COUNT = 4;
			a.ENEMY_TYPE = [0, 1, 2];
			a.ENEMY_FEEBLE = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			a.CurHasPropsSet = [];
			a.ENEMY_SET = [];
			a.Box_SET = [];
			a.Props_SET = [];
			a.ENEMT_HP = [];
			a.DESTRORY_ENEMT_COUNT = 0;
			return a
		}(egret.Sprite);
	d.Enemy = g;
	g.prototype.__class__ = "KeilingGame.Enemy";
	var e = function(b) {
			function a(a, c, d) {
				b.call(this);
				this.feeble = [];
				this.isInFire = !1;
				this.gc = a;
				this.w = this.gc.sw / 5;
				this.speed = 2;
				switch (d) {
				case "forTeach":
					this.type = "forTeach";
					this.born(c);
					break;
				case "":
					this.type = "";
					this.born(c);
					break;
				case "box":
					this.bornBox();
					break;
				case "props":
					this.bornProps()
				}
				g.ENEMY_DISTANCE = this.height / 2 * 3
			}
			__extends(a, b);
			var d = a.prototype;
			d.die = function(a) {
				this.removeChildren();
				a && (g.DESTRORY_ENEMT_COUNT++, this.gc.money += 4)
			};
			d.dieBox = function(a) {
				var b = this;
				Utils.changeMovieClipDataNotPlay(this.mcSkin, "death2");
				egret.Tween.get(this.mcSkin).to({
					alpha: 0
				}, 400);
				egret.setTimeout(function() {
					b.removeChildren()
				}, this, 400)
			};
			d.fallDie = function() {
				var a = this,
					b = egret.Tween.get(this.gc);
				this.gc.y = 2;
				b.to({
					y: 0
				}, 10, egret.Ease.bounceInOut);
				this.mcSkin.y = this.gc.sh - this.mcSkin.height * this.w / 177 * 0.5 - 44 / 918 * this.gc.background.height;
				Utils.changeMovieClipDataNotPlay(this.mcSkin, "death");
				egret.Tween.get(this.mcSkin).to({
					alpha: 0
				}, 400);
				egret.setTimeout(function() {
					a.removeChildren();
					g.DESTRORY_ENEMT_COUNT++;
					a.gc.money += 4
				}, this, 400)
			};
			d.fireDie = function() {
				
			};
			d.born = function(a) {
				switch (this.gc.level) {
				case 0:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
					break;
				case 1:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
					break;
				case 2:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2];
					break;
				case 3:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 1, 2, 1, 1, 3];
					break;
				case 4:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 1, 2, 1, 3, 3];
					break;
				case 5:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 5, 3, 1, 1, 1];
					break;
				case 6:
					g.ENEMT_HP = [1, 1, 1, 1, 1, 5, 2, 1, 1, 3];
					break;
				case 7:
				case 8:
				case 9:
				case 10:
					g.ENEMT_HP = [1, 1, 1, 1, 5, 1, 2, 2, 3, 3];
					break;
				default:
					g.ENEMT_HP = [1, 1, 1, 1, 5, 5, 2, 2, 3, 3]
				}
				var b = Utils.getRandomOne2Numer(10) - 1;
				this.hp = g.ENEMT_HP[b];
				"forTeach" == this.type && (this.hp = 1);
				if (5 > this.hp) switch (this.hp) {
				case 1:
					"forTeach" == this.type ? this.feeble.push(g.ENEMY_FEEBLE[0]) : this.feeble.push(g.ENEMY_FEEBLE[Utils.getRandomOne2Numer(g.ENEMY_FEEBLE.length) - 1]);
					this.getSkin(this.feeble[0]);
					break;
				case 2:
				case 3:
					b = [];
					b = b.concat(g.ENEMY_FEEBLE);
					b.length = 7;
					for (var c = 0; c < this.hp; c++) {
						for (var d = b[Utils.getRandomOne2Numer(b.length) - 1], f = 0, e = b.length; f < e; f++) b[f] == d && b.splice(f, 1);
						this.feeble.push(d)
					}
					this.getSkin(this.feeble[0])
				} else {
					b = [];
					b = b.concat(g.ENEMY_FEEBLE);
					b.length = 7;
					for (c = 0; c < this.hp; c++) {
						d = b[Utils.getRandomOne2Numer(b.length) - 1];
						f = 0;
						for (e = b.length; f < e; f++) b[f] == d && b.splice(f, 1);
						this.feeble.push(d)
					}
					this.mcSkin = Utils.createMovieClip("wolfJson", "box1", "run")
				}
				game_config.textureRender(this.mcSkin)
				this.mcSkin.anchorX = 0.5;
				this.mcSkin.anchorY = 0.5;
				this.mcSkin.scaleX = this.w / 177;
				this.mcSkin.scaleY = this.w / 177;
				b = this.w / 2 + Utils.getRandomOne2Numer(this.gc.sw - this.w) - 1;
				this.mcSkin.x = b;
				this.mcSkin.y = a;
				this.showBalloon("", this.mcSkin.x / 2, this.mcSkin.y / 2);
				this.addChild(this.mcSkin)
			};
			d.getSkin = function(a) {
				switch (a) {
				case 8:
				case 9:
				case 10:
					this.mcSkin = Utils.createMovieClip("wolfJson", "box1", "run");
					break;
				default:
					this.mcSkin = Utils.createMovieClip("wolfJson", "box1", "run")
				}
			};
			d.showBalloon = function(a, b, d) {
				this.balloon = new c(d, this.gc, this.hp, a, b, this.feeble);
				this.addChild(this.balloon)
			};
			d.bornBox = function() {
				
			};
			d.bornProps = function() {
				this.hp = 1;
				var a = Utils.getRandomOne2Numer(g.CurHasPropsSet.length) - 1;
				"1" == g.CurHasPropsSet[a] && (this.feeble.push(11 + a), this.mcSkin = Utils.createBitmapByName("Bottle"), this.mcSkin.anchorX = 0.5, this.mcSkin.anchorY = 0.2, this.mcSkin.scaleX = this.w / 132, this.mcSkin.scaleY = this.w / 132, this.mcSkin.x = this.w / 2 + Utils.getRandomOne2Numer(this.gc.sw - this.w) - 1, this.mcSkin.y = -1 * (this.gc.sh / 5 + this.mcSkin.height), this.showBalloon(this.mcSkin.x / 2, this.mcSkin.y / 2, "props"), this.addChild(this.mcSkin), g.Props_SET.push(this))
			};
			d.broken2 = function() {
				0 <= this.getChildIndex(this.balloon) && (this.removeChild(this.balloon), this.balloon.balloon = [], this.balloon.line = [], this.feeble = [])
			};
			d.broken3 = function() {
				this.getChildIndex(this.balloon) && (this.removeChild(this.balloon), this.balloon.balloon = [], this.balloon.line = [], this.feeble = [])
			};
			return a
		}(egret.Sprite);
	d.EnemyElement = e;
	e.prototype.__class__ = "KeilingGame.EnemyElement";
	var c = function(b) {
			function a(a, c, d, f, e, g) {
				b.call(this);
				this.balloon = [];
				this.line = [];
				this.lineWidth = 35;
				this.type = a;
				this.gc = c;
				this.w = 1 / 15 * this.gc.sw;
				this.feeble = g;
				this.drawBalloon(d, f, e)
			}
			__extends(a, b);
			var c = a.prototype;
			c.drawBalloon = function(a, b, c) {
				if ("box" == this.type) for (var d = -90, f = 0; f < a; f++) {
					var e = new egret.Shape;
					e.anchorY = 0.5;
					var g = this.lineWidth;
					e.rotation = d;
					e.x = 2 * b;
					e.y = 2 * c;
					e.graphics.beginFill(0);
					e.graphics.drawRect(0, 0, 2 * g, 2);
					e.graphics.endFill();
					this.line.push(e);
					this.addChild(e);
					g = Utils.createMovieClip("balloonJson", "ball1", "run" + this.feeble[f]);
					g.anchorX = 0.5;
					g.anchorY = 1;
					g.scaleX = this.w / 58;
					g.scaleY = this.w / 58;
					e = Utils.getPointByRotationAndPointAndLineWidth({
						x: e.x,
						y: e.y
					}, d, this.lineWidth);
					g.x = e.x;
					g.y = e.y;
					this.balloon.push(g);
					this.addChild(g)
				} else if ("props" == this.type) for (d = -90, f = 0; f < a; f++) e = new egret.Shape, e.anchorY = 0.5, g = this.lineWidth, e.rotation = d, e.x = 2 * b, e.y = 2 * c, e.graphics.beginFill(0), e.graphics.drawRect(0, 0, 2 * g, 7), e.graphics.endFill(), this.line.push(e), this.addChild(e), g = Utils.createMovieClip("balloonJson", "ball1", "run" + this.feeble[f]), g.anchorX = 0.5, g.anchorY = 1, g.scaleX = this.w / 58, g.scaleY = this.w / 58, e = Utils.getPointByRotationAndPointAndLineWidth({
					x: e.x,
					y: e.y
				}, d, this.lineWidth), g.x = e.x, g.y = e.y, this.balloon.push(g), this.addChild(g);
				else for (d = -180 / (a + 1), f = 0; f < a; f++) 
					e = new egret.Shape, e.anchorY = 0.5, 
					g = this.lineWidth, e.rotation = d * (f + 1), 
					e.x = 2 * b, e.y = 2 * c, e.graphics.beginFill(0), 
					e.graphics.drawRect(0, 0, 2 * g, 7), 
					e.graphics.endFill(),
					this.line.push(e), 
					this.addChild(e), 
					g = Utils.createMovieClip("balloonJson", "ball1", "run" + this.feeble[f]), 
					game_config.textureRender(g), 
					g.anchorX = 0.5, 
					g.anchorY = 1, 
					g.scaleX = this.w / 58, 
					g.scaleY = this.w / 58, 
					e = Utils.getPointByRotationAndPointAndLineWidth({
						x: e.x,
						y: e.y
					}, d * (f + 1), this.lineWidth), g.x = e.x, g.y = e.y, this.balloon.push(g), this.addChild(g)
			};
			c.updateBalloonPosition = function(a, b) {
				var c = this.balloon.length;
				if ("box" == this.type) for (var d = -90, f = 0; f < c; f++) {
					var e = this.line[f];
					e.anchorY = 0.5;
					var g = this.lineWidth;
					if (e.rotation != d) {
						var n = egret.Tween.get(e);
						n.to({
							rotation: d
						}, 0)
					}
					e.x = 2 * a;
					e.y = 2 * b;
					e.graphics.clear();
					e.graphics.beginFill(0);
					e.graphics.drawRect(0, 0, 2 * g, 2);
					e.graphics.endFill();
					n = this.balloon[f];
					g = Utils.getPointByRotationAndPointAndLineWidth({
						x: e.x,
						y: e.y
					}, d, this.lineWidth);
					n.x = g.x;
					n.y = g.y;
					e.rotation != d && (n = egret.Tween.get(n), n.to({
						x: g.x,
						y: g.y
					}, 0))
				} else for (d = -180 / (c + 1), f = 0; f < c; f++) 
					e = this.line[f], 
					e.anchorY = 0.5, 
					g = this.lineWidth, 
					e.rotation != d * (f + 1) && (
						n = egret.Tween.get(e), 
						n.to({
							rotation: d * (f + 1)
						}, 0)), 
					e.x = 2 * a, 
					e.y = 2 * b, 
					e.graphics.clear(), 
					e.graphics.beginFill(0), 
					e.graphics.drawRect(0, 0, 2 * g, 2), 
					e.graphics.endFill(), 
					n = this.balloon[f], 
					g = Utils.getPointByRotationAndPointAndLineWidth({
						x: e.x,
						y: e.y
					}, d * (f + 1), this.lineWidth), 
					n.x = g.x + 2.4 * scale, 
					n.y = g.y, 
					e.rotation != d * (f + 1) && (
						n = egret.Tween.get(n), 
						n.to({
							x: g.x,
							y: g.y
						}, 0))
			};
			c.broken = function(a) {
				var b = this;
				Utils.changeMovieClipDataNotPlay(this.balloon[a], "death" + this.feeble[a]);
				egret.setTimeout(function() {
					b.removeChild(b.balloon[a]);
					b.feeble.splice(a, 1);
					b.line[a].graphics.clear();
					b.line.splice(a, 1);
					b.balloon.splice(a, 1)
				}, this, 100)
			};
			c.broken2 = function(a) {
				this.removeChild(this.balloon[a]);
				this.feeble.splice(a, 1);
				this.line[a].graphics.clear();
				this.line.splice(a, 1);
				this.balloon.splice(a, 1)
			};
			return a
		}(egret.Sprite);
	d.Balloon = c;
	c.prototype.__class__ = "KeilingGame.Balloon"
})(KeilingGame || (KeilingGame = {}));
(function(d) {
	var g = function(d) {
			function c(b) {
				d.call(this);
				this.speed = 0;
				this.isHeroDie = !1;
				this.status = "left";
				this.init(b)
			}
			__extends(c, d);
			c.prototype.init = function(b) {
				var a = this;
				this.gc = b;
				this.sw = b.sw;
				this.sh = b.sh;
				this.magician = Utils.createMovieClipNotPlay("magicianJson", "magician1", "run");
				game_config.textureRender(this.magician)
				this.magician.scaleX = this.gc.sw / 3 / 251;
				this.magician.scaleY = this.gc.sw / 3 / 251;
				this.magician.anchorX = 0.5;
				this.magician.anchorY = 0.5;
				this.magician.x = this.magician.width / 2 * scale;
				this.magician.y = this.gc.sh - 223 * this.gc.sw / 3 / 251 / 2 - 44 / 918 * this.gc.background.height;
				this.addChild(this.magician);
				var littleMagician = Utils.createBitmapByName("littleMagician");
				littleMagician.scaleX = this.gc.sw / 2 / 251;
				littleMagician.scaleY = this.gc.sw / 2 / 251;
				littleMagician.anchorX = 0.5;
				littleMagician.anchorY = 0.5;
				littleMagician.x = this.magician.width + littleMagician.width;
				littleMagician.x *= scale;
				littleMagician.y = this.magician.y + this.magician.height / 2 * scale - littleMagician.height * scale;
				this.addChild(littleMagician);
				
				this.timer = new egret.Timer(1E3 / 60, 10);
				var c = 0;
				this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {
					a.timer.reset();
					a.timer.start()
				}, this);
				this.timer.start()
			};
			return c
		}(egret.Sprite);
	d.Hero = g;
	g.prototype.__class__ = "KeilingGame.Hero"
})(KeilingGame || (KeilingGame = {}));
(function(d) {
	var g = function(d) {
			function c(a) {
				d.call(this);
				this.isBreakRecord = !1;
				this.gc = a;
				this.drawScorePanel(a.sw, a.sh);
				this.anchorY = this.anchorX = 0.5 ;
				this.y = a.sh - 55 * scale;
				this.x = a.sw;
				// this.x = a.sw - this.scoreBar.width
				// this.y = a.sh - this.scoreBar.height * scale - 60 / scale;
				// this.y /= scale
			}
			__extends(c, d);
			var b = c.prototype;
			b.drawScorePanel = function(a, b) {
				this.scoreBar = Utils.createBitmapByName("scoreBar");
				this.scoreBar.scaleX = this.gc.sw / 2 / 251;
				this.scoreBar.scaleY = this.gc.sw / 2 / 251;
				this.scoreBar.anchorX = 0.5 ;
				this.scoreBar.anchorY = 0.5 ;
				// this.scoreBar.x = this.scoreBar.width;
				// this.scoreBar.y = this.scoreBar.height;
				this.addChild(this.scoreBar);
				this.scoreBT = new egret.TextField;
				this.scoreBT.scaleX = this.gc.sw / 515 * 90 / 132;
				this.scoreBT.scaleY = this.gc.sw / 515 * 90 / 132;
				this.scoreBT.textColor = 15647071
				this.scoreBT.size = 60;
				this.scoreBT.text = "0";
				this.scoreBT.anchorX = 0.5 * scale;
				this.scoreBT.anchorY = 0.5 * scale;
				this.scoreBT.x -= this.scoreBar.width / 2 * scale;
				this.scoreBT.y = this.scoreBT.y - this.scoreBar.height / 2 * scale + 20 * scale
				// this.scoreBT.y = this.scoreBar.height/ 2.5 / scale + 5;
				this.addChild(this.scoreBT)
				
			};
			b.updateScore = function(a) {
				this.scoreBT.text = "" + a
				window.gameScore = a
				if (a >= 100) this.scoreBT.size = 40, this.scoreBT.y = this.scoreBar.height/ 2 + 15
				else if (a >= 1000) this.scoreBT.size = 30, this.scoreBT.y = this.scoreBar.height/ 2 + 20
			};
			b.isNewRecord = function(a, b, c) {
				a ? egret.localStorage.getItem(window.myGameName + "Score2") ? (a = egret.localStorage.getItem(window.myGameName + "Score2"), ~~a < Math.abs(Math.ceil(b)) ? (egret.localStorage.setItem(window.myGameName + "Score2", "" + Math.abs(Math.ceil(b))), this.isBreakRecord = !0, c()) : this.isBreakRecord = !1) : (this.isBreakRecord = !0, egret.localStorage.setItem(window.myGameName + "Score2", "" + Math.abs(Math.ceil(b))), c(1)) : egret.localStorage.getItem(window.myGameName + "Score") ? (a = egret.localStorage.getItem(window.myGameName + "Score"), ~~a < Math.abs(Math.ceil(b)) ? (egret.localStorage.setItem(window.myGameName + "Score", "" + Math.abs(Math.ceil(b))), this.isBreakRecord = !0, c()) : this.isBreakRecord = !1) : (this.isBreakRecord = !0, egret.localStorage.setItem(window.myGameName + "Score", "" + Math.abs(Math.ceil(b))), c(1))
			};
			return c
		}(egret.Sprite);
	d.ScorePanel = g;
	g.prototype.__class__ = "KeilingGame.ScorePanel"
})(KeilingGame || (KeilingGame = {}));
(function(d) {
	var g = function(e) {
			function c(a) {
				e.call(this);
				this.gc = a;
				this.sw = a.sw;
				this.sh = a.sh;
				this.showPanel()
			}
			__extends(c, e);
			var b = c.prototype;
			b.showPanel = function() {
				var a = this;
				this.showBg();
				var b = new egret.Sprite;
				b.anchorX = 0.5;
				b.x = this.gc.sw / 2;
				b.y = this.gc.sh;
				var _e = Utils.createBitmapByName("startTitle");
				_e.width = this.gc.sw / 515 * 260;
				_e.height = this.gc.sw / 515 * 260 / 381 * 161 - 20;
				_e.y = _e.y - this.gc.sh / 2 + _e.height / 2 + 150 * scale;
				b.addChild(_e);
				var e = Utils.createBitmapByName("startBtn");
				e.width = this.gc.sw / 515 * 260;
				e.height = this.gc.sw / 515 * 260 / 381 * 161 - 20;
				e.y += 180 * scale;
				b.addChild(e);
				e.touchEnabled = !0;
				Utils.rgsEvt(e, Utils.EventName.BEGIN, function() {
					console.log("start");
					// game_config.game_start();
					a.gc.startGame()
				}, !1);
				
				m = new egret.Sprite;
				m.anchorX = -0.5;
				
				b.addChild(m);
				this.addChild(b);
				egret.Tween.get(b).to({
					y: this.gc.sh / 915 * 400
				}, 400, egret.Ease.bounceInOut)
			};
			b.showBg = function() {
				this.bg = Utils.createBitmapByName("startBg");

				var a = this.bg.height / this.bg.width;
				this.bg.width = window.sw;
				this.bg.height = window.sh;
				this.addChild(this.bg)
			};
			return c
		}(egret.Sprite);
	d.StartPanel = g;
	g.prototype.__class__ = "KeilingGame.StartPanel"
})(KeilingGame || (KeilingGame = {}));
(function(d) {
	var g = function(e) {
			function c() {
				e.call(this);
				this.level = this.score = this.money = 0;
				this.isTheSecondMode = !1;
				this.theSecondModeCostTime = 0;
				this.deadline = 90;
				this.showBoxInLevel = [];
				this.propsSlow = {
					bmp: null
				};
				this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this)
			}
			__extends(c, e);
			var b = c.prototype;
			b.init = function() {
				window.home = this.replayGame;
				window.home_context = this;
				window.pause = this.pause;
				window.resume = this.resume;
				window.pause_context = this;
				window.resume_context = this;
				this.sw = window.sw;
				this.sh = window.sh;
				this.bgContainer = new egret.Sprite;
				this.addChild(this.bgContainer);
				this.background = Utils.createBitmapByName("gameBg");
				var a = this.background.height / this.background.width;
				this.background.width = window.sw;
				this.background.height = window.sh;
				this.background.height > this.sh && (this.background.y = 0 - this.background.height + this.sh);
				this.bgContainer.addChild(this.background);
				this.scorePanel = new d.ScorePanel(this);
				this.addChild(this.scorePanel);
				this.enmey = new d.Enemy(this);
				this.addChild(this.enmey);
				this.hero = new d.Hero(this);
				this.addChild(this.hero);
				this.render = new Render;
				this.render.register(this.gameUpdate, this);
				this.startPanel = new d.StartPanel(this);
				this.addChild(this.startPanel);
				this.countDown = new egret.TextField;
				this.addChild(this.countDown);
				for (a = 0; 100 > a; a++) this.showBoxInLevel.push(!1);
				a = new egret.Rectangle(0, 0, this.sw, this.sh);
				egret.RenderFilter.getInstance().addDrawArea(a)
			};
			b.pause = function() {
				this.render.pause()
			};
			b.resume = function() {
				this.render.resume()
			};
			b.startGame = function(a) {
				var b = this;
				e = egret.Tween.get(this), this.scaleY = this.scaleX = 1.5, e.to({
					scaleX: 1,
					scaleY: 1
				}, 600)
				this.removeChild(this.startPanel);
				c.isGameStart = !0;
				this.render.start()
			};
			b.replayGame = function() {
				d.GC.isGameStart = !1;
				d.GC.isOver = !1;
				d.Enemy.ENEMY_SET.length = 0;
				d.Enemy.DESTRORY_ENEMT_COUNT = 0;
				d.Enemy.Box_SET.length = 0;
				d.Enemy.CurHasPropsSet.length = 0;
				this.alpha = this.level = d.Enemy.Props_SET.length = 0;
				egret.Tween.removeAllTweens();
				this.removeChildren();
				window.gameContext.createGameScene()
			};
			b.gameOver = function() {
				console.log("over")
				// game_config.game_over();
				c.isGameStart = !1, d.GC.isOver = !0, this.render.stop()
			};
			b.rgsEvt = function(a) {};
			b.gameUpdate = function() {
				c.isGameStart && (this.score = d.Enemy.DESTRORY_ENEMT_COUNT, this.scorePanel.updateScore(this.score), this.upLevel(), this.enmey.enemyMove())
			};
			b.upLevel = function() {
				this.level = Math.floor(this.score / 15);
				1 <= this.level && !1 == this.showBoxInLevel[this.level] && (this.showBoxInLevel[this.level] = !0, 0 != this.level % 2 ? this.enmey.showProps() : this.enmey.showBox())
			};
			c.isFirstTimePlay = !1;
			c.isGameStart = !1;
			c.isOver = !1;
			return c
		}(egret.DisplayObjectContainer);
	d.GC = g;
	g.prototype.__class__ = "KeilingGame.GC"
})(KeilingGame || (KeilingGame = {}));
var Dollar;
(function(d) {
	function g(a) {
		var b = a.RD = a.RD || {};
		b.applyDefaultOne = function(a) {
			for (var c in b.DefaultOne) a.addGesture(c, new b.Polyline(b.DefaultOne[c]))
		};
		b.DefaultOne = {}
	}

	function e(a) {
		var b = a.RD = a.RD || {};
		a = b.DollarOne = function(a) {
			for (var b in a) this[b] = a[b];
			this.gesturePool = this.gesturePool || {}
		};
		var c = b.Utils,
			d = b.Polyline,
			b = {
				constructor: a,
				threshold: 0.3,
				ratio1D: 0.2,
				rotationInvariance: Math.PI / 4,
				normalPointCount: 40,
				normalSize: 200,
				recognize: function(a, b) {
					var d = this.createPolyline(a);
					d.init();
					var d = d.vector,
						f = this.threshold,
						e = null,
						g;
					for (g in this.gesturePool) {
						var m = c.cosDistance(this.gesturePool[g].vector, d);
						if (m < f && (f = m, e = g, b)) break
					}
					return e
				},
				createPolyline: function(a) {
					a = new d(a);
					a.ratio1D = this.ratio1D;
					a.rotationInvariance = this.rotationInvariance;
					a.normalPointCount = this.normalPointCount;
					a.normalSize = this.normalSize;
					return a
				},
				getGesture: function(a) {
					return this.gesturePool[a]
				},
				addGesture: function(a, b, c) {
					b = Array.isArray(b) ? this.createPolyline(b) : b;
					b.name = a;
					b.init(c);
					this.gesturePool[a] = b
				},
				removeGesture: function(a) {
					a ? delete this.gesturePool[a] : this.gesturePool = {}
				}
			},
			e;
		for (e in b) a.prototype[e] = b[e]
	}

	function c(a) {
		var b = a.RD = a.RD || {};
		a = b.Polyline = function(a) {
			this.points = a || []
		};
		var c = b.Utils,
			b = {
				constructor: a,
				id: null,
				name: null,
				points: null,
				origPoints: null,
				ignoreRotate: !1,
				originX: 0,
				originY: 0,
				ratio1D: 0.2,
				rotationInvariance: Math.PI / 4,
				normalPointCount: 40,
				normalSize: 200,
				init: function(a) {
					a = !1 !== a;
					this.origPoints = this.points;
					a && (this.points = c.resample(this.origPoints, this.normalPointCount));
					this.pointCount = this.points.length;
					this.firstPoint = this.points[0];
					this.centroid = this.getCentroid();
					this.translateTo(this.originX, this.originY);
					this.aabb = c.getAABB(this.points);
					a && (this.scaleTo(this.normalSize), this.angle = this.indicativeAngle(), this.rotateBy(-this.angle));
					this.vector = this.vectorize()
				},
				indicativeAngle: function() {
					var a = Math.atan2(this.firstPoint[1], this.firstPoint[0]);
					if (this.rotationInvariance) {
						var b = this.rotationInvariance;
						return a - b * Math.floor((a + b / 2) / b)
					}
					return a
				},
				length: function() {
					return c.polylineLength(this.points)
				},
				vectorize: function() {
					for (var a = 0, b = [], c = this.pointCount, d = 0; d < c; d++) {
						var f = this.points[d][0],
							e = this.points[d][1];
						b.push(f);
						b.push(e);
						a += f * f + e * e
					}
					a = Math.sqrt(a);
					c <<= 1;
					for (d = 0; d < c; d++) b[d] /= a;
					return b
				},
				getCentroid: function() {
					for (var a = 0, b = 0, c = 0; c < this.pointCount; c++) a += this.points[c][0], b += this.points[c][1];
					a /= this.pointCount;
					b /= this.pointCount;
					return [a, b]
				},
				translateTo: function(a, b) {
					var c = this.centroid;
					c[0] -= a;
					c[1] -= b;
					for (var d = 0; d < this.pointCount; d++) {
						var f = this.points[d],
							e = f[1] - c[1];
						f[0] -= c[0];
						f[1] = e
					}
				},
				rotateBy: function(a) {
					var b = Math.cos(a);
					a = Math.sin(a);
					for (var c = 0; c < this.pointCount; c++) {
						var d = this.points[c],
							f = d[0] * a + d[1] * b;
						d[0] = d[0] * b - d[1] * a;
						d[1] = f
					}
				},
				scale: function(a, b) {
					for (var c = 0; c < this.pointCount; c++) {
						var d = this.points[c],
							f = d[1] * b;
						d[0] *= a;
						d[1] = f
					}
				},
				scaleTo: function(a, b) {
					b = b || a;
					var c = this.aabb;
					if (this.ratio1D) {
						var d = Math.max(c[4], c[5]);
						if (Math.min(c[4], c[5]) / d < this.ratio1D) return this.scale(a / d, b / d)
					}
					d = a / c[4];
					c = b / c[5];
					this.scale(d, c)
				}
			},
			d;
		for (d in b) a.prototype[d] = b[d]
	}

	function b(a) {
		a = a.RD = a.RD || {};
		a.CONST = a.CONST || {
			DEG_TO_RAD: Math.PI / 180,
			RAD_TO_DEG: 180 / Math.PI,
			HALF_PI: Math.PI / 2,
			DOUBLE_PI: 2 * Math.PI
		};
		var b = a.Utils = {
			distance: function(a, b) {
				var c = b[0] - a[0],
					d = b[1] - a[1];
				return Math.sqrt(c * c + d * d)
			},
			getAABB: function(a) {
				for (var b = Infinity, c = -Infinity, d = Infinity, f = -Infinity, e = 0, g = a.length; e < g; e++) var p = a[e],
					b = Math.min(b, p[0]),
					c = Math.max(c, p[0]),
					d = Math.min(d, p[1]),
					f = Math.max(f, p[1]);
				return [b, d, c, f, c - b, f - d]
			},
			cosSimilarity: function(a, b) {
				for (var c = 0, d = 0, f = 0, e = 0; e < a.length; e++) var g = a[e],
					p = b[e],
					c = c + g * p,
					d = d + g * g,
					f = f + p * p;
				return c / Math.sqrt(d * f)
			},
			cosDistance: function(a, b) {
				for (var c = 0, d = 0, f = 0; f < a.length; f += 2) c += a[f] * b[f] + a[f + 1] * b[f + 1], d += a[f] * b[f + 1] - a[f + 1] * b[f];
				f = Math.atan(d / c);
				return Math.acos(c * Math.cos(f) + d * Math.sin(f))
			},
			polylineLength: function(a) {
				for (var c = 0, d = 1, f = a.length; d < f; d++) c += b.distance(a[d - 1], a[d]);
				return c
			},
			resample: function(a, c) {
				for (var d = b.polylineLength(a) / (c - 1), f = 0, e = a[0], g = [
					[e[0], e[1]]
				], n = a.length, q = 1; q < n;) {
					var s = a[q],
						r = b.distance(e, s);
					f + r >= d ? (f = (d - f) / r, e = [e[0] + f * (s[0] - e[0]), e[1] + f * (s[1] - e[1])], g.push(e), f = 0) : (f += r, e = s, q++)
				}
				g.length == c - 1 && g.push([a[n - 1][0], a[n - 1][1]]);
				return g
			}
		}
	}

	function a(a, b, c, d) {
		this.callback = d;
		this.gid = this.cooldown = 0;
		this.Records = {};
		this.Points = [];
		this.MatchGesture = null;
		this.context = c;
		this.result = null;
		this.TouchInfo = {
			touched: !1,
			x: 0,
			y: 0
		};
		this.recognizeTime = 0;
		this.targetPanel = a;
		this.dollarOne = new c.RD.DollarOne({
			threshold: 0.3,
			ratio1D: 0.2,
			rotationInvariance: Math.PI / 4,
			normalPointCount: 40,
			normalSize: 200
		});
		this.init(b)
	}
	d.DefaultOne = g;
	d.DollarOne = e;
	d.Polyline = c;
	d.Utils = b;
	d.easyDollarOne = a;
	d.init = function(a) {
		b(a);
		g(a);
		c(a);
		e(a)
	};
	a.prototype = {
		update: function() {
			this.TouchInfo.touched && 0 >= this.cooldown && (this.Points.push([this.TouchInfo.x, this.TouchInfo.y]), this.cooldown = 2);
			this.cooldown--
		},
		init: function(a) {
			this.reset();
			this.loadGesture();
			this.initTouchEvent(this.targetPanel, a)
		},
		reset: function() {
			this.Points = [];
			this.result = this.MatchGesture = null;
			this.recognizeTime = 0
		},
		loadGesture: function() {
			this.Records = JSON.parse('{"H49":[[99.67013084888458,303.3447265625],[106.17051887512207,329.345703125],[113.75420475006104,353.18006706237793],[122.42119693756104,364.013671875],[130.0048828125,364.013671875],[154.92255306243896,329.345703125],[171.17323112487793,284.92743587493896],[179.84022331237793,290.34450912475586],[188.50721549987793,321.76201725006104],[198.25751399993896,341.2626142501831],[203.67404556274414,342.34646224975586],[212.34103775024414,306.5946455001831],[235.09209537506104,262.17637825012207],[240.50916862487793,252.42607975006104],[261.09307193756104,291.4278154373169],[292.51112174987793,349.9296064376831],[302.26142024993896,365.09697818756104],[306.5946455001831,358.5965986251831],[319.59540462493896,318.51209831237793],[332.5956220626831,281.67697525024414]],"H48":[[46.584875643253326,353.18006706237793],[63.918860018253326,409.51524543762207],[73.66971290111542,434.43291568756104],[83.42001140117645,413.84901237487793],[111.58759212493896,366.18028450012207],[121.337890625,345.59638118743896],[126.75497233867645,351.01345443725586],[159.2557783126831,416.015625],[175.50645637512207,453.9335126876831],[182.0068359375,455.01681900024414],[195.00705337524414,414.93231868743896],[206.92450618743896,390.0146484375],[211.2577314376831,387.84803581237793],[227.50840950012207,396.51502799987793],[254.5926923751831,435.51622200012207],[274.0938310623169,451.76690006256104],[282.7608232498169,432.26630306243896],[291.4278154373169,405.18202018737793]],"H47":[[60.6689453125,320.6787109375],[86.669921875,378.0977373123169],[104.00390625,422.51600456237793],[112.6708984375,427.9325361251831],[134.33809959888458,383.51426887512207],[146.9921875,346.6796875],[154.92255306243896,331.51231575012207],[162.50623893737793,342.34646224975586],[188.50721549987793,396.51502799987793],[199.3408203125,421.4326982498169],[214.50819206237793,401.9315595626831],[242.67578125,349.9296064376831],[253.50938606262207,329.345703125],[256.7598466873169,323.9286298751831],[271.9266767501831,357.51329231262207],[292.51112174987793,405.18202018737793],[304.42803287506104,422.51600456237793],[312.01171875,429.01584243774414],[313.09502506256104,430.0996904373169],[326.0957841873169,407.3486328125],[340.17930793762207,380.26434993743896],[347.76299381256104,364.013671875]],"R2":[[208.0078125,507.01877212524414],[195.00705337524414,502.685546875],[178.7569169998169,476.6845703125],[167.9227705001831,449.60028743743896],[163.58954524993896,420.34885025024414],[163.58954524993896,392.18126106262207],[169.00661849975586,374.84727668762207],[173.33984375,369.4307451248169],[187.4239091873169,377.01388931274414],[217.75811100006104,412.7657060623169],[227.50840950012207,433.349609375],[235.09209537506104,450.68359375],[238.34201431274414,451.76690006256104],[250.25946712493896,438.7666826248169],[277.34375,410.5985517501831],[302.26142024993896,386.7647294998169],[317.4287919998169,381.34765625],[325.01247787475586,381.34765625],[336.92938899993896,405.18202018737793],[339.09600162506104,436.5995283126831],[333.67947006225586,463.68381118774414],[326.0957841873169,475.60126399993896],[306.5946455001831,488.6014814376831],[283.84412956237793,491.85194206237793],[252.42607975006104,495.10186100006104],[221.00802993774414,502.685546875],[205.84119987487793,505.9354658126831],[202.5907392501831,505.9354658126831]],"Q4":[[214.50819206237793,349.9296064376831],[213.4248857498169,343.4297685623169],[213.4248857498169,339.09600162506104],[213.4248857498169,317.4287919998169],[226.42510318756104,300.0948076248169],[236.17540168762207,293.59442806243896],[244.84239387512207,293.59442806243896],[263.2596845626831,302.26142024993896],[283.84412956237793,340.17930793762207],[288.17735481262207,374.84727668762207],[290.34450912475586,386.7647294998169],[271.9266767501831,396.51502799987793],[225.341796875,400.84825325012207],[139.75518131256104,407.3486328125],[118.08798015117645,404.0987138748169],[115.92080891132355,390.0146484375],[115.92080891132355,370.51405143737793],[126.75497233867645,345.59638118743896],[173.33984375,304.42803287506104],[248.0928544998169,279.51036262512207],[292.51112174987793,268.6767578125],[302.26142024993896,268.6767578125],[332.5956220626831,318.51209831237793],[358.5965986251831,396.51502799987793],[371.59735774993896,459.3505859375],[365.09697818756104,481.01779556274414],[318.51209831237793,492.93524837493896],[217.75811100006104,496.18516731262207],[136.50526237487793,496.18516731262207],[127.83827018737793,496.18516731262207]],"Q3":[[222.0918779373169,379.18104362487793],[227.50840950012207,379.18104362487793],[236.17540168762207,385.68088150024414],[241.59247493743896,397.59833431243896],[244.84239387512207,406.26532649993896],[243.75908756256104,412.7657060623169],[234.0087890625,413.84901237487793],[218.84141731262207,413.84901237487793],[209.09111881256104,413.84901237487793],[198.25751399993896,413.84901237487793],[189.59052181243896,398.681640625],[187.4239091873169,374.84727668762207],[187.4239091873169,351.01345443725586],[193.9237470626831,338.0126953125],[200.42412662506104,331.51231575012207],[210.17442512512207,330.42900943756104],[224.25849056243896,330.42900943756104],[243.75908756256104,330.42900943756104],[265.4268388748169,341.2626142501831],[283.84412956237793,359.67990493774414],[291.4278154373169,373.76397037506104],[294.677734375,386.7647294998169],[294.677734375,400.84825325012207],[288.17735481262207,412.7657060623169],[275.17713737487793,423.59931087493896],[244.84239387512207,436.5995283126831],[226.42510318756104,444.18321418762207],[216.6748046875,446.34982681274414],[208.0078125,446.34982681274414],[199.3408203125,446.34982681274414],[187.4239091873169,446.34982681274414],[171.17323112487793,442.0166015625],[159.2557783126831,429.01584243774414]],"Q2":[[228.5917158126831,328.26239681243896],[234.0087890625,326.0957841873169],[243.75908756256104,326.0957841873169],[249.17616081237793,327.17909049987793],[255.67599868774414,331.51231575012207],[256.7598466873169,341.2626142501831],[256.7598466873169,349.9296064376831],[254.5926923751831,360.7637529373169],[250.25946712493896,361.84705924987793],[243.75908756256104,361.84705924987793],[237.2587080001831,361.84705924987793],[227.50840950012207,361.84705924987793],[216.6748046875,354.26337337493896],[213.4248857498169,351.01345443725586],[210.17442512512207,344.51307487487793],[210.17442512512207,332.5956220626831],[213.4248857498169,315.2616376876831],[221.00802993774414,301.17811393737793],[231.84217643737793,290.34450912475586],[237.2587080001831,288.17735481262207],[245.9257001876831,288.17735481262207],[252.42607975006104,288.17735481262207],[257.84315299987793,290.34450912475586],[268.6767578125,314.17833137512207],[281.67697525024414,347.76299381256104],[288.17735481262207,367.2635908126831],[288.17735481262207,371.59735774993896],[287.09404850006104,380.26434993743896],[281.67697525024414,392.18126106262207],[268.6767578125,408.43193912506104],[255.67599868774414,417.09893131256104],[249.17616081237793,417.09893131256104],[240.50916862487793,419.2655439376831],[219.9247236251831,419.2655439376831],[196.0909013748169,419.2655439376831],[187.4239091873169,419.2655439376831],[185.2567548751831,419.2655439376831],[173.33984375,413.84901237487793],[170.0899248123169,410.5985517501831],[166.83946418762207,407.3486328125],[162.50623893737793,400.84825325012207],[159.2557783126831,396.51502799987793],[159.2557783126831,393.2645673751831],[157.08916568756104,386.7647294998169],[156.005859375,378.0977373123169],[156.005859375,373.76397037506104]],"Q1":[[196.0909013748169,327.17909049987793],[202.5907392501831,317.4287919998169],[209.09111881256104,308.7617998123169],[217.75811100006104,310.92841243743896],[227.50840950012207,328.26239681243896],[229.67502212524414,338.0126953125],[228.53125,346.6796875],[224.25849056243896,352.0967607498169],[206.92450618743896,355.3466796875],[187.4239091873169,355.3466796875],[171.17323112487793,355.3466796875],[164.6728515625,353.18006706237793],[163.078125,346.6796875],[163.58954524993896,330.42900943756104],[163.58954524993896,316.34548568725586],[169.00661849975586,301.17811393737793],[179.84022331237793,290.34450912475586],[193.9237470626831,287.09404850006104],[211.2577314376831,279.51036262512207],[225.341796875,277.34375],[229.67502212524414,277.34375],[235.09209537506104,277.34375],[245.9257001876831,286.0107421875],[254.5926923751831,292.51112174987793],[256.7598466873169,302.26142024993896],[256.7598466873169,321.76201725006104],[256.7598466873169,349.9296064376831],[256.7598466873169,369.4307451248169],[250.25946712493896,377.01388931274414],[241.59247493743896,385.68088150024414],[221.00802993774414,391.09795475006104],[205.84119987487793,395.4317216873169],[187.4239091873169,395.4317216873169],[167.9227705001831,395.4317216873169],[151.67263412475586,394.34787368774414],[141.92178547382355,391.09795475006104],[126.75497233867645,377.01388931274414],[119.17127799987793,366.18028450012207],[110.50428581237793,357.51329231262207],[110.50428581237793,349.9296064376831],[110.50428581237793,331.51231575012207],[110.50428581237793,322.84532356262207],[117.00411522388458,306.5946455001831],[125.67110741138458,294.677734375],[140.83848762512207,278.42705631256104]],"R1":[[177.67361068725586,372.6806640625],[175.50645637512207,370.51405143737793],[160.33962631225586,354.26337337493896],[149.50547981262207,339.09600162506104],[139.75518131256104,323.9286298751831],[134.33809959888458,307.67849349975586],[127.83827018737793,284.92743587493896],[127.83827018737793,268.6767578125],[127.83827018737793,254.5926923751831],[130.0048828125,250.25946712493896],[134.33809959888458,248.0928544998169],[143.00564193725586,248.0928544998169],[151.67263412475586,249.17616081237793],[167.9227705001831,262.17637825012207],[174.42315006256104,275.17713737487793],[174.42315006256104,281.67697525024414],[178.7569169998169,291.4278154373169],[183.09014225006104,292.51112174987793],[190.673828125,283.84412956237793],[213.4248857498169,265.4268388748169],[226.42510318756104,257.84315299987793],[234.0087890625,261.09307193756104],[235.09209537506104,264.34299087524414],[235.09209537506104,273.00998306274414],[239.4258623123169,278.42705631256104],[239.4258623123169,287.09404850006104],[239.4258623123169,293.59442806243896],[237.2587080001831,300.0948076248169],[237.2587080001831,306.5946455001831],[230.7588701248169,315.2616376876831],[229.67502212524414,318.51209831237793],[226.42510318756104,326.0957841873169],[224.25849056243896,329.345703125],[221.00802993774414,331.51231575012207],[215.59149837493896,336.92938899993896],[212.34103775024414,340.17930793762207],[204.7578935623169,344.51307487487793],[198.25751399993896,348.84630012512207],[193.9237470626831,353.18006706237793],[190.673828125,356.42998600006104],[187.4239091873169,359.67990493774414],[184.17344856262207,360.7637529373169],[177.67361068725586,366.18028450012207],[172.25653743743896,367.2635908126831]],"P13":[[302.26142024993896,193.9237470626831],[269.76006412506104,228.5917158126831],[227.50840950012207,261.09307193756104],[215.59149837493896,268.6767578125],[229.67502212524414,270.84337043762207],[250.25946712493896,270.84337043762207],[274.0938310623169,270.84337043762207],[283.84412956237793,270.84337043762207],[284.92743587493896,281.67697525024414],[284.92743587493896,318.51209831237793],[270.84337043762207,348.84630012512207]],"P12":[[276.26044368743896,193.9237470626831],[275.17713737487793,212.34103775024414],[240.50916862487793,264.34299087524414],[228.5917158126831,286.0107421875],[226.42510318756104,290.34450912475586],[239.4258623123169,297.9276533126831],[261.09307193756104,300.0948076248169],[279.51036262512207,302.26142024993896],[288.17735481262207,307.67849349975586],[288.17735481262207,318.51209831237793],[276.26044368743896,348.84630012512207],[252.42607975006104,380.26434993743896]],"P11":[[291.4278154373169,248.0928544998169],[275.17713737487793,264.34299087524414],[254.5926923751831,282.7608232498169],[249.17616081237793,293.59442806243896],[251.3427734375,301.17811393737793],[262.17637825012207,302.26142024993896],[278.42705631256104,304.42803287506104],[282.7608232498169,305.51133918762207],[288.17735481262207,316.34548568725586],[288.17735481262207,335.84608268737793],[287.09404850006104,370.51405143737793],[264.34299087524414,413.84901237487793]],"P10":[[291.4278154373169,174.42315006256104],[278.42705631256104,200.42412662506104],[244.84239387512207,252.42607975006104],[214.50819206237793,294.677734375],[192.84044075012207,326.0957841873169],[182.0068359375,339.09600162506104],[180.92352962493896,342.34646224975586],[185.2567548751831,343.4297685623169],[196.0909013748169,343.4297685623169],[226.42510318756104,343.4297685623169],[250.25946712493896,343.4297685623169],[256.265625,346.6796875],[252.42607975006104,361.84705924987793],[242.67578125,381.34765625],[230.7588701248169,404.0987138748169]],"P9":[[301.17811393737793,157.08916568756104],[292.51112174987793,178.7569169998169],[241.59247493743896,234.0087890625],[191.75713443756104,269.76006412506104],[188.50721549987793,274.0938310623169],[201.50743293762207,277.34375],[227.50840950012207,277.34375],[249.17616081237793,277.34375],[257.84315299987793,279.51036262512207],[257.84315299987793,290.34450912475586],[250.25946712493896,319.59540462493896],[222.0918779373169,354.26337337493896],[202.5907392501831,375.9305830001831]],"P8":[[242.67578125,169.00661849975586],[235.09209537506104,202.5907392501831],[215.59149837493896,245.9257001876831],[200.42412662506104,264.34299087524414],[200.42412662506104,267.59345149993896],[212.34103775024414,269.76006412506104],[240.50916862487793,268.6767578125],[252.42607975006104,266.51014518737793],[250.25946712493896,270.84337043762207],[225.341796875,302.26142024993896],[209.09111881256104,327.17909049987793]],"P7":[[256.7598466873169,199.3408203125],[243.75908756256104,228.5917158126831],[221.00802993774414,261.09307193756104],[214.50819206237793,270.84337043762207],[223.17518424987793,275.17713737487793],[234.0087890625,275.17713737487793],[243.75908756256104,275.17713737487793],[250.25946712493896,275.17713737487793],[253.50938606262207,278.42705631256104],[253.50938606262207,301.17811393737793],[248.0928544998169,335.84608268737793],[228.5917158126831,364.013671875]],"P6":[[265.4268388748169,223.17518424987793],[260.009765625,229.67502212524414],[229.67502212524414,262.17637825012207],[196.0909013748169,295.76104068756104],[195.00705337524414,303.3447265625],[206.92450618743896,303.3447265625],[232.92548274993896,302.26142024993896],[254.5926923751831,302.26142024993896],[258.92645931243896,302.26142024993896],[260.009765625,323.9286298751831],[238.34201431274414,368.34689712524414],[204.7578935623169,413.84901237487793]],"P5":[[237.2587080001831,293.59442806243896],[218.84141731262207,319.59540462493896],[203.67404556274414,351.01345443725586],[203.67404556274414,354.26337337493896],[209.09111881256104,354.26337337493896],[234.0087890625,354.26337337493896],[258.92645931243896,364.013671875],[267.59345149993896,393.2645673751831],[267.59345149993896,416.015625],[251.3427734375,446.34982681274414],[202.5907392501831,476.6845703125],[159.2557783126831,488.6014814376831]],"P4":[[254.5926923751831,216.6748046875],[244.84239387512207,229.67502212524414],[213.4248857498169,265.4268388748169],[198.25751399993896,282.7608232498169],[198.25751399993896,288.17735481262207],[213.4248857498169,288.17735481262207],[244.84239387512207,288.17735481262207],[260.009765625,288.17735481262207],[266.51014518737793,289.2606611251831],[266.51014518737793,303.3447265625],[266.51014518737793,331.51231575012207],[258.92645931243896,366.18028450012207],[247.00900650024414,385.68088150024414]],"P3":[[211.2577314376831,231.84217643737793],[208.0078125,243.75908756256104],[189.59052181243896,277.34375],[186.34006118774414,288.17735481262207],[191.75713443756104,293.59442806243896],[205.84119987487793,296.84434700012207],[222.0918779373169,296.84434700012207],[237.2587080001831,296.84434700012207],[239.4258623123169,306.5946455001831],[239.4258623123169,340.17930793762207],[230.7588701248169,372.6806640625],[206.92450618743896,405.18202018737793]],"P2":[[252.42607975006104,176.5897626876831],[252.42607975006104,183.09014225006104],[242.67578125,210.17442512512207],[222.0918779373169,238.34201431274414],[210.17442512512207,261.09307193756104],[216.6748046875,263.2596845626831],[247.00900650024414,263.2596845626831],[280.5936689376831,263.2596845626831],[290.34450912475586,264.34299087524414],[288.17735481262207,273.00998306274414],[277.34375,281.67697525024414],[262.17637825012207,295.76104068756104],[232.92548274993896,325.01247787475586],[212.34103775024414,345.59638118743896]],"P1":[[263.2596845626831,211.2577314376831],[257.84315299987793,218.84141731262207],[231.84217643737793,252.42607975006104],[223.17518424987793,261.09307193756104],[227.50840950012207,264.34299087524414],[249.17616081237793,264.34299087524414],[268.6767578125,264.34299087524414],[277.34375,264.34299087524414],[278.42705631256104,269.76006412506104],[266.51014518737793,276.26044368743896],[249.17616081237793,302.26142024993896],[228.5917158126831,326.0957841873169],[208.0078125,342.34646224975586]],"A1":[[301,253],[325,304],[356,367],[372,395],[381,406],[381,406],[381,406],[409,363],[483,286],[552,235],[556,233],[556,233]],"A2":[[205,249],[208,260],[229,295],[264,346],[282,369],[290,379],[290,379],[290,379],[290,379],[291,381],[321,341],[353,304],[364,290],[364,290],[364,290],[364,290]],"A3":[[279,193],[288,198],[305,223],[325,250],[331,258],[333,260],[333,260],[342,252],[392,208],[430,185],[431,183],[431,183]],"A4":[[305,229],[332,269],[367,309],[395,330],[395,330],[395,330],[422,313],[515,272],[636,229],[700,210]],"A4":[[231.8840579710145,604.4444444444445],[231.8840579710145,664.7342995169082],[260.8695652173913,720.7729468599034],[276.32850241545896,743.9613526570049],[281.3526570048309,734.2995169082126],[302.99516908212564,541.0628019323672],[306.0869565217391,386.47342995169083]],"A5":[[245.41062801932367,465.7004830917875],[245.41062801932367,519.8067632850242],[264.7342995169082,593.2367149758454],[293.719806763285,635.3623188405797],[316.90821256038646,649.2753623188406],[342.0289855072464,608.6956521739131],[367.92270531400965,479.22705314009664],[378.74396135265704,350.9178743961353],[378.74396135265704,289.08212560386477]],"A6":[[218.35748792270533,653.1400966183575],[217.97101449275362,742.0289855072464],[249.2753623188406,801.9323671497585],[262.8019323671498,816.231884057971],[276.32850241545896,817.3913043478261],[336.231884057971,713.0434782608696],[398.84057971014494,448.30917874396135],[427.0531400966184,249.2753623188406]],"A7":[[270.5314009661836,456.0386473429952],[270.5314009661836,548.792270531401],[287.536231884058,703.3816425120773],[342.0289855072464,790.3381642512078],[355.55555555555554,797.6811594202899],[371.0144927536232,697.1980676328502]],"A8":[[247.34299516908214,573.5265700483092],[247.34299516908214,649.2753623188406],[264.7342995169082,705.3140096618358],[278.2608695652174,729.6618357487923],[295.6521739130435,736.231884057971],[313.04347826086956,743.9613526570049],[326.1835748792271,734.2995169082126],[365.2173913043478,575.8454106280193],[403.8647342995169,361.3526570048309],[419.32367149758454,228.0193236714976]],"A9":[[214.4927536231884,537.1980676328502],[245.41062801932367,575.8454106280193],[287.92270531400965,678.2608695652174],[314.97584541062804,724.6376811594204],[330.4347826086957,655.072463768116]],"B1":[[348,369],[348,369],[348,366],[362,303],[400,222],[422,177],[428,164],[429,162],[434,162],[450,209],[480,311],[519,376],[524,381],[524,381],[524,381]],"B2":[[198,377],[198,377],[208,361],[231,321],[255,277],[257,274],[257,274],[262,272],[286,319],[309,360],[314,368],[315,369],[315,369],[315,369],[315,369],[315,369],[315,369]],"B3":[[367,395],[366,396],[366,391],[366,356],[381,268],[400,206],[403,201],[405,199],[425,241],[471,392],[499,456],[504,461],[504,461]],"B4":[[235,425],[236,427],[262,363],[293,288],[298,275],[298,275],[322,315],[352,369],[386,415],[390,421]],"B5":[[468.4057971014493,850.2415458937198],[457.9710144927536,801.9323671497585],[391.11111111111114,672.463768115942],[326.57004830917873,531.400966183575],[278.2608695652174,414.2995169082126],[272.46376811594206,380.67632850241546],[237.68115942028987,483.09178743961354],[187.43961352657004,635.7487922705315],[134.4927536231884,819.3236714975845]],"B6":[[467.6328502415459,815.4589371980677],[471.4975845410628,780.6763285024155],[471.4975845410628,700.2898550724638],[432.8502415458937,536.4251207729469],[398.0676328502416,459.9033816425121],[386.47342995169083,448.30917874396135],[374.1062801932367,456.0386473429952],[295.6521739130435,629.9516908212561],[199.0338164251208,817.3913043478261],[156.52173913043478,908.2125603864735]],"B7":[[347.82608695652175,861.0628019323672],[357.1014492753623,842.512077294686],[361.3526570048309,771.0144927536232],[361.3526570048309,651.207729468599],[361.3526570048309,531.400966183575],[344.7342995169082,471.4975845410628],[333.9130434782609,456.0386473429952],[295.6521739130435,512.0772946859904],[206.76328502415458,693.7198067632851],[120.57971014492755,850.2415458937198],[92.7536231884058,947.632850241546]],"B8":[[512.0772946859904,798.0676328502416],[514.0096618357488,786.4734299516908],[492.7536231884058,713.0434782608696],[459.9033816425121,647.3429951690822],[442.512077294686,614.4927536231884],[427.0531400966184,606.7632850241546],[414.2995169082126,602.8985507246377],[398.0676328502416,591.304347826087],[386.47342995169083,584.3478260869565],[365.2173913043478,600.9661835748792],[295.2657004830918,641.5458937198068],[182.41545893719808,711.1111111111111],[44.44444444444444,807.7294685990338]],"C1":[[399,150],[391,150],[359,167],[294,219],[260,268],[260,299],[274,339],[304,367],[355,389],[405,391],[473,371],[540,330],[561,298],[569,255],[559,207],[526,168],[501,150],[483,142],[481,141],[481,141],[481,141]],"C2":[[301,197],[301,197],[291,208],[253,249],[236,289],[234,320],[234,347],[249,387],[270,404],[293,412],[341,416],[405,404],[473,380],[477,371],[473,351],[464,296],[440,249],[412,202],[405,195]],"D1":[[359,228],[359,228],[379,228],[448,228],[525,215],[541,210],[541,210],[538,221],[448,277],[396,314],[386,322],[386,322],[386,322],[386,322],[386,322],[405,322],[504,322],[636,322],[660,322]],"D2":[[343,207],[358,204],[388,194],[457,177],[503,170],[503,170],[503,170],[484,206],[422,281],[398,312],[396,315],[396,315],[401,317],[420,311],[488,269],[598,219]],"D3":[[442,227],[442,227],[483,227],[546,227],[573,227],[573,227],[567,242],[521,284],[465,319],[446,327],[441,327],[441,327],[441,327],[442,327],[536,304],[635,296],[681,296]],"D4":[[287,249],[287,249],[306,249],[380,249],[482,249],[502,249],[497,253],[422,289],[273,343],[260,349],[260,349],[260,349],[277,349],[386,347],[476,337],[488,335],[488,335]],"D5":[[486,185],[488,185],[503,185],[518,183],[540,183],[560,192],[562,194],[544,210],[465,250],[394,290],[376,303],[375,305],[375,305],[384,305],[452,305],[575,305],[688,301],[711,301]],"D6":[[483,204],[483,204],[512,204],[549,204],[552,206],[552,219],[538,239],[498,252],[486,254],[486,254],[488,256],[535,256]],"E1":[[304,189],[320,189],[355,194],[418,225],[481,272],[503,306],[503,328],[480,353],[445,367],[417,367],[376,348],[363,327],[357,307],[357,273],[372,244],[401,213],[441,193],[462,184],[465,182]],"E2":[[276,158],[276,158],[280,158],[333,153],[423,160],[471,180],[478,195],[481,222],[480,254],[473,282],[461,292],[426,302],[394,302],[374,296],[361,278],[357,261],[362,224],[404,175],[447,139],[483,125],[519,123]],"E3":[[323,215],[323,215],[323,215],[331,215],[380,223],[414,242],[427,261],[437,287],[437,311],[433,325],[425,327],[408,327],[377,320],[366,313],[356,295],[351,281],[351,270],[361,239],[394,210],[418,197],[455,191],[477,191]],"E4":[[372,231],[372,231],[372,231],[386,238],[415,261],[437,301],[444,347],[428,369],[403,375],[377,370],[351,347],[339,330],[339,312],[357,285],[439,245],[543,225],[636,223]],"E5":[[261,179],[262,179],[292,193],[331,227],[388,311],[407,354],[407,380],[402,394],[382,400],[357,400],[343,389],[336,371],[343,332],[384,289],[434,261]],"F1":[[255,247],[255,247],[273,247],[299,247],[335,247],[370,247],[383,243],[388,243],[409,243],[430,243],[441,243],[447,243],[454,243],[464,243],[477,243],[492,243],[495,243],[495,243],[495,243]],"G1":[[327,124],[327,124],[327,124],[330,133],[330,143],[330,151],[330,162],[334,190],[336,203],[336,203],[336,203],[336,211],[336,227],[336,235],[336,235],[339,247],[341,262],[342,273],[342,278],[344,279],[347,300],[351,318],[353,327],[353,333],[353,338],[356,352],[358,367],[358,373],[358,376],[360,383],[360,392],[361,394],[361,394],[361,394],[361,394]],"H1":[[59,96],[58,98],[90,215],[120,317],[149,357],[151,357],[160,306],[202,203],[248,99],[255,88],[265,103],[305,183],[336,260],[374,338],[379,344],[379,344],[383,323],[421,216],[455,139],[461,126],[479,153],[529,271],[560,338],[571,363],[571,363],[571,355],[591,300],[618,215],[667,116]],"H2":[[151,166],[155,184],[190,301],[225,363],[239,376],[239,376],[241,330],[246,234],[275,137],[275,130],[279,129],[320,199],[390,321],[421,367],[424,370],[417,344],[417,275],[428,215],[438,167],[438,167],[460,197],[513,331],[543,383],[546,386],[547,360],[575,276],[665,164],[731,100]],"H3":[[208,205],[208,224],[228,299],[250,342],[250,342],[251,341],[303,254],[341,202],[349,180],[349,180],[362,208],[388,298],[412,348],[415,350],[418,335],[442,260],[465,202],[474,191],[496,212],[535,279],[571,333],[579,341],[580,343],[598,310],[684,199]],"H4":[[104,228],[104,228],[129,275],[175,348],[185,357],[185,357],[227,293],[285,229],[317,202],[322,202],[340,245],[372,316],[381,335],[382,336],[382,334],[404,283],[430,244],[435,238],[446,242],[475,293],[503,330],[506,330],[507,330],[544,291],[587,238]],"H5":[[229,238],[230,240],[246,285],[256,310],[259,313],[260,315],[260,315],[273,299],[304,248],[310,237],[310,237],[319,272],[343,322],[359,342],[359,342],[359,342],[378,318],[397,284],[411,255],[411,251],[414,250],[441,289],[459,313],[469,328],[471,331],[474,334],[475,334],[495,320],[575,246]],"H6":[[129,147],[127,150],[154,232],[176,292],[183,302],[183,302],[188,292],[212,225],[250,167],[264,148],[264,148],[275,168],[301,258],[319,294],[322,299],[322,299],[344,256],[392,182],[424,143],[426,141],[434,167],[465,264],[484,291],[485,293],[494,278],[527,236]],"H7":[[177,268],[206,330],[236,373],[247,384],[257,388],[271,339],[310,292],[356,239],[364,228],[372,270],[384,317],[400,361],[403,366],[403,366],[412,344],[431,308],[472,242],[475,239],[482,258],[501,316],[517,351],[535,377],[536,377],[554,353],[590,309]],"H8":[[141,242],[154,282],[185,352],[204,371],[204,371],[217,362],[248,317],[286,256],[297,234],[297,234],[318,279],[350,362],[377,392],[379,394],[387,361],[420,297],[447,250],[454,239],[457,236],[496,291],[534,352],[547,363],[550,363],[567,321],[617,256]],"H9":[[182,218],[191,242],[219,283],[266,330],[277,343],[281,343],[295,315],[316,254],[322,238],[325,234],[346,247],[378,301],[401,338],[411,347],[411,347],[423,322],[453,273],[462,256],[463,255],[483,261],[522,308],[553,335],[560,335],[574,326],[617,268]],"H10":[[225,237],[225,237],[236,260],[256,279],[283,281],[330,273],[357,252],[366,246],[366,246],[380,248],[410,275],[428,286],[431,289],[436,289],[465,272],[499,247],[499,247],[499,247],[509,257],[518,271],[526,281],[529,284],[538,287],[548,287],[560,277],[578,262],[581,260],[594,262],[611,275],[629,284],[640,284],[663,267],[751,229]],"H11":[[250,221],[250,247],[255,288],[265,309],[273,321],[275,321],[282,315],[332,268],[396,227],[409,216],[409,216],[416,251],[420,278],[426,292],[430,296],[430,296],[433,294],[460,260],[502,230],[533,212],[540,212],[559,242],[568,272],[581,299],[582,300],[582,300],[615,273],[701,220],[769,182]],"H12":[[170,240],[172,252],[182,291],[183,293],[187,293],[189,293],[200,292],[268,234],[325,202],[330,200],[340,216],[353,262],[368,297],[371,300],[374,300],[401,271],[475,220],[505,201],[507,201],[519,225],[532,267],[546,305],[554,312],[558,312],[586,291],[673,230],[747,190]],"H13":[[105,226],[114,261],[140,303],[149,318],[152,319],[165,305],[202,256],[243,212],[246,208],[249,210],[261,257],[273,294],[278,301],[278,301],[297,284],[335,241],[354,224],[354,224],[365,237],[388,274],[398,284],[401,284],[402,284],[429,271],[549,196]],"H14":[[97,181],[112,217],[135,261],[158,294],[163,299],[163,299],[186,273],[227,226],[246,208],[246,208],[246,208],[261,223],[279,266],[289,297],[291,300],[291,300],[313,277],[350,240],[376,220],[379,215],[385,216],[404,250],[427,283],[433,288],[436,288],[455,288],[533,255],[662,194]],"H15":[[133,191],[133,191],[143,237],[165,283],[168,288],[168,288],[186,269],[244,205],[270,162],[272,160],[277,198],[289,253],[296,273],[302,283],[302,283],[328,254],[364,211],[377,196],[380,194],[382,204],[410,278],[440,320],[446,322],[459,303],[491,238],[512,207],[585,162]],"H16":[[308,180],[308,208],[315,246],[333,278],[346,291],[346,291],[354,281],[372,241],[402,194],[402,189],[403,191],[412,225],[422,251],[429,265],[430,267],[430,267],[453,243],[494,189],[502,182],[502,182],[516,222],[528,242],[535,253],[535,253],[546,238],[574,200],[620,156]],"H17":[[248,217],[246,244],[252,311],[268,333],[271,333],[272,333],[312,287],[357,234],[376,215],[380,218],[403,282],[431,321],[445,337],[449,339],[449,334],[464,279],[472,256],[474,254],[493,282],[527,320],[542,323],[566,291]],"H18":[[148,241],[148,279],[148,310],[152,311],[154,311],[190,256],[228,201],[245,184],[254,189],[268,241],[299,309],[318,322],[321,320],[341,264],[365,213],[392,186],[397,186],[423,237],[449,284],[462,311],[462,311],[466,311],[476,292],[493,258],[532,209]],"H19":[[182,295],[180,338],[181,385],[198,397],[201,397],[225,365],[263,301],[308,233],[326,210],[327,209],[338,289],[363,365],[385,379],[390,373],[410,288],[439,237],[447,227],[458,227],[492,283],[546,358],[561,362],[582,328],[633,259]],"H20":[[81,235],[106,311],[133,363],[137,364],[142,362],[176,328],[234,262],[261,226],[266,216],[266,216],[281,250],[327,333],[359,362],[373,360],[383,326],[406,272],[418,252],[419,251],[449,296],[490,354],[507,358],[509,358],[557,315],[589,267]],"H21":[[185,207],[185,207],[186,227],[213,313],[252,370],[254,372],[258,372],[326,289],[421,231],[465,207],[466,207],[468,289],[468,347],[477,368],[477,369],[479,372],[521,336],[601,262],[655,229],[657,231],[667,297],[683,362],[688,362],[723,304]],"H22":[[101,302],[119,380],[145,432],[151,432],[153,418],[172,366],[196,298],[210,270],[222,262],[238,292],[273,349],[293,376],[296,376],[303,368],[340,311],[384,265],[392,258],[411,285],[443,355],[490,403],[503,411],[507,411],[566,358],[665,290]],"H23":[[237,205],[253,277],[286,344],[296,347],[299,343],[350,290],[423,231],[450,198],[454,195],[464,211],[489,282],[504,312],[509,319],[509,319],[511,318],[545,269],[580,249],[593,249],[612,285],[635,313],[636,313],[649,308],[699,263]],"H24":[[250,211],[246,262],[248,315],[260,335],[261,336],[261,336],[274,301],[301,254],[316,221],[316,221],[319,243],[319,313],[326,330],[326,330],[329,332],[344,321],[393,263],[427,235],[429,235],[449,264],[470,311],[478,318],[478,318],[502,289],[552,244]],"H25":[[131,203],[144,254],[173,330],[190,357],[190,357],[219,317],[264,261],[286,218],[290,211],[290,211],[307,254],[312,307],[318,322],[318,322],[320,322],[360,277],[407,232],[432,219],[442,223],[460,280],[468,301],[468,301],[472,301],[519,255],[584,211]],"H26":[[166,238],[166,254],[179,288],[191,305],[196,315],[198,317],[198,317],[227,287],[297,221],[307,208],[307,208],[313,250],[332,300],[348,330],[350,330],[362,317],[407,266],[453,230],[465,220],[467,220],[485,284],[503,328],[509,334],[511,334],[517,334],[571,295],[635,237]],"H27":[[173,172],[171,225],[193,295],[201,306],[201,306],[219,280],[259,201],[280,154],[290,142],[300,151],[318,223],[346,286],[349,288],[354,288],[375,255],[405,202],[421,183],[421,183],[433,199],[452,228],[463,239],[463,239],[466,239],[470,239],[498,205],[524,167],[550,135]],"H28":[[216,243],[216,243],[219,298],[236,337],[237,338],[239,338],[262,302],[286,252],[299,220],[299,220],[309,275],[335,365],[342,375],[351,365],[376,323],[405,271],[415,259],[417,258],[425,265],[445,306],[463,342],[468,348],[469,348],[485,331],[530,282],[581,245]],"I1":[[307,315],[307,315],[309,315],[315,308],[319,289],[321,276],[321,258],[326,230],[326,204],[326,184],[325,163],[322,145],[315,137],[315,137],[315,137],[315,137],[315,137],[310,139],[299,158],[294,169],[291,180],[289,188],[285,202],[285,210],[290,228],[298,236],[304,239],[313,239],[330,239],[362,239],[401,239],[445,239],[460,237],[463,232],[458,213],[449,192],[432,170],[426,160],[423,157],[422,157],[422,157],[420,161],[417,178],[417,194],[417,209],[417,232],[419,245],[421,257],[425,278],[426,291],[430,304],[433,314],[436,324],[438,329],[438,329]],"I2":[[306,316],[316,308],[331,286],[353,248],[355,202],[346,137],[327,99],[321,92],[320,91],[313,114],[313,138],[314,155],[330,164],[355,168],[404,168],[435,168],[490,141],[503,134],[499,125],[488,107],[474,87],[472,86],[471,86],[463,129],[463,191],[487,271],[510,312],[519,328],[524,334]],"I3":[[396,402],[396,402],[396,402],[397,389],[409,361],[415,335],[415,309],[415,273],[406,243],[393,228],[393,228],[393,228],[392,251],[392,278],[397,286],[401,286],[432,288],[552,284],[671,265],[677,262],[657,236],[631,204],[618,198],[609,199],[566,243],[540,301],[544,358],[568,425],[587,450],[590,456]],"I4":[[434,398],[434,398],[442,378],[446,340],[442,284],[431,261],[421,249],[421,249],[410,265],[401,294],[402,309],[420,326],[438,326],[477,313],[523,286],[533,274],[526,254],[525,252],[525,252],[519,272],[519,327],[538,393],[545,404],[545,404]],"I5":[[365,387],[365,387],[372,380],[393,348],[434,293],[449,240],[442,218],[432,215],[432,215],[401,247],[370,306],[379,321],[412,329],[488,329],[616,317],[625,309],[606,282],[566,245],[546,239],[527,248],[506,290],[502,346],[514,372],[521,388],[525,397]],"I6":[[375,363],[375,363],[375,363],[385,297],[385,222],[374,198],[372,198],[362,199],[344,245],[355,263],[379,280],[424,280],[508,241],[538,200],[527,187],[517,185],[488,207],[460,287],[464,347],[485,382],[503,400]],"I7":[[370,363],[370,363],[374,361],[407,330],[438,261],[433,227],[416,213],[409,213],[380,223],[355,252],[359,274],[379,289],[450,299],[531,282],[551,254],[551,230],[545,218],[545,218],[521,232],[474,287],[473,307],[491,336],[509,360],[540,374],[573,380]],"I8":[[381,386],[384,386],[404,362],[430,312],[449,246],[452,203],[447,190],[447,190],[424,200],[376,245],[369,275],[395,313],[440,342],[489,342],[517,318],[535,270],[537,230],[537,220],[537,220],[530,224],[492,300],[485,344],[493,379],[498,392],[498,401]],"J1":[[291,221],[300,222],[337,222],[368,222],[394,222],[448,216],[464,208],[481,197],[513,173],[524,161],[524,151],[520,142],[512,124],[498,111],[495,109],[491,109],[474,105],[454,103],[446,103],[442,103],[430,105],[418,115],[403,132],[400,147],[400,156],[400,171],[400,194],[402,213],[412,228],[418,244],[423,259],[425,262],[426,269],[433,286],[434,294],[438,308],[438,325],[438,337],[436,342],[428,350],[395,360],[358,360],[310,352],[294,345],[286,331],[286,313],[286,298],[295,287],[334,276],[444,271],[523,271],[580,275],[617,277],[649,277],[659,277],[659,277],[659,277]],"J2":[[366,178],[366,178],[376,178],[439,178],[523,169],[561,154],[561,144],[548,108],[537,90],[532,85],[532,85],[529,85],[499,130],[487,166],[487,210],[487,244],[487,272],[487,273],[485,275],[470,275],[445,254],[427,231],[427,231],[427,228],[495,211],[591,209],[677,209],[704,209]],"J3":[[282,189],[310,197],[346,201],[378,201],[396,192],[403,179],[405,145],[398,120],[391,109],[391,109],[380,114],[359,162],[352,200],[353,241],[353,259],[342,277],[332,285],[329,285],[296,259],[286,249],[286,248],[292,241],[368,228],[487,228],[544,230],[552,233]],"J4":[[373,207],[391,210],[436,213],[475,213],[498,205],[507,187],[512,155],[512,142],[508,132],[508,132],[508,132],[479,154],[460,183],[451,201],[451,219],[449,244],[447,276],[441,302],[436,312],[432,316],[429,318],[412,305],[405,288],[403,270],[407,258],[431,252],[501,252],[545,252],[546,252],[546,252]],"J5":[[387,241],[393,241],[426,241],[463,237],[485,232],[488,223],[491,211],[491,186],[487,168],[480,160],[480,160],[479,160],[443,175],[426,185],[426,190],[426,208],[426,225],[426,244],[426,266],[430,286],[430,300],[433,315],[433,334],[433,345],[433,350],[433,351],[433,354],[433,354],[428,354],[398,336],[371,317],[370,316],[367,311],[366,307],[366,301],[383,293],[423,288],[476,288],[505,288],[528,288],[531,288],[531,288]],"J6":[[311,219],[338,219],[374,216],[406,196],[419,177],[424,150],[424,123],[418,107],[415,105],[415,105],[395,112],[364,158],[362,187],[362,207],[362,225],[371,263],[385,295],[389,304],[389,304],[390,305],[395,313],[397,317],[397,317],[397,320],[394,329],[393,329],[376,329],[348,313],[344,309],[338,303],[327,282],[325,279],[324,273],[337,257],[399,245],[458,245]],"J7":[[365,252],[368,252],[402,252],[456,246],[498,222],[498,192],[490,156],[467,120],[460,110],[460,110],[453,122],[443,192],[450,289],[457,323],[457,346],[453,360],[453,360],[438,361],[409,342],[404,330],[404,327],[411,318],[456,315],[540,315],[547,315]],"J8":[[382,229],[401,231],[428,231],[444,222],[447,212],[449,181],[442,148],[439,144],[439,144],[425,169],[414,213],[414,246],[417,271],[417,282],[417,282],[410,287],[398,288],[390,288],[389,278],[389,277],[395,267],[451,265],[518,265],[528,265]],"J9":[[244,226],[269,235],[287,241],[296,241],[340,228],[372,213],[379,203],[379,192],[369,171],[364,165],[363,165],[363,165],[361,165],[351,175],[339,226],[336,267],[352,306],[364,331],[364,358],[364,363],[364,363],[364,363],[360,366],[334,366],[306,357],[296,349],[296,349],[312,331],[407,298],[589,286],[663,286]],"J10":[[393,263],[402,264],[410,266],[446,266],[501,255],[556,237],[564,227],[564,210],[561,178],[558,169],[558,169],[547,179],[503,237],[490,274],[490,309],[486,346],[480,357],[480,357],[479,359],[460,359],[445,343],[440,328],[440,315],[443,303],[473,297],[509,297],[517,296]],"J11":[[580,236],[595,236],[614,236],[639,230],[664,219],[671,211],[671,207],[667,199],[661,199],[661,199],[661,199],[658,199],[651,203],[650,221],[650,257],[657,284],[662,297],[662,297],[662,297],[662,297],[662,300],[645,304],[633,303],[629,302],[629,302],[639,293],[768,265],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[792,263],[764,263],[691,268],[656,268],[638,268],[635,268],[635,268],[540,262],[401,262],[338,262],[336,262],[336,262],[336,262],[336,262],[338,262],[348,262]],"J12":[[357,259],[381,259],[400,259],[425,245],[433,213],[435,176],[435,167],[430,165],[416,169],[402,191],[400,220],[419,282],[433,316],[435,341],[435,343],[435,345],[420,354],[413,356],[413,356],[412,347],[420,323],[432,317],[433,315],[447,306]],"J13":[[234,364],[240,364],[261,364],[306,350],[376,310],[391,292],[391,277],[379,263],[373,259],[371,259],[371,259],[370,259],[347,301],[347,350],[353,384],[357,396],[357,403],[357,404],[357,404],[357,404],[344,404],[335,389],[335,372],[342,358],[378,348],[464,348],[483,348],[483,348]],"J14":[[308,333],[310,332],[343,323],[420,310],[489,286],[489,286],[481,273],[461,247],[449,237],[447,235],[447,235],[432,257],[426,284],[430,309],[434,354],[434,372],[434,381],[434,381],[427,384],[393,386],[380,386],[374,381],[374,372],[395,356],[451,344],[522,339]],"J15":[[229,239],[231,235],[255,227],[289,217],[335,205],[367,196],[367,191],[369,173],[369,153],[369,124],[363,110],[363,110],[363,110],[362,108],[354,126],[351,165],[351,221],[351,297],[351,329],[348,342],[348,342],[348,342],[304,344],[235,328],[222,313],[222,293],[230,282],[269,264],[351,251],[380,251],[417,262],[428,262]],"A10":[[409.66183574879227,452.94685990338166],[403.8647342995169,483.09178743961354],[347.82608695652175,587.43961352657],[280.19323671497585,691.7874396135265],[256.6183574879227,734.2995169082126],[256.6183574879227,726.5700483091788],[247.34299516908214,653.9130434782609],[216.42512077294685,553.4299516908213],[173.1400966183575,463.768115942029],[156.1352657004831,409.66183574879227]],"A11":[[504.34782608695656,527.536231884058],[485.024154589372,560.3864734299517],[438.6473429951691,651.207729468599],[419.32367149758454,705.3140096618358],[391.11111111111114,757.4879227053141],[386.47342995169083,777.5845410628019],[376.81159420289856,784.5410628019324],[358.6473429951691,772.9468599033817],[309.17874396135267,687.9227053140097],[264.7342995169082,616.4251207729469]],"A12":[[427.0531400966184,454.1062801932367],[427.0531400966184,504.34782608695656],[427.0531400966184,591.304347826087],[427.0531400966184,635.7487922705315],[426.6666666666667,664.7342995169082],[427.0531400966184,676.328502415459],[421.256038647343,682.1256038647343],[382.60869565217394,676.328502415459],[282.8985507246377,548.792270531401],[212.56038647342996,442.512077294686],[196.32850241545896,401.9323671497585]],"A14":[[422.0289855072464,378.74396135265704],[423.18840579710144,419.32367149758454],[415.45893719806764,554.5893719806763],[386.47342995169083,672.463768115942],[378.74396135265704,704.9275362318841],[337.0048309178744,664.7342995169082],[239.61352657004832,443.6714975845411],[173.1400966183575,239.61352657004832]],"C3":[[466.1304347826087,432.17391304347825],[495.8423913043478,445.67934782608694],[544.8478260869565,501.6304347826087],[561.4402173913044,565.2989130434783],[564.9130434782609,617.391304347826],[526.7119565217391,665.625],[470.7608695652174,702.2826086956521],[439.89130434782606,710],[401.30434782608694,706.9130434782609],[355,680.6739130434783],[324.1304347826087,652.891304347826],[297.1195652173913,600.0271739130435],[291.33152173913044,574.945652173913],[291.33152173913044,557.5815217391304],[299.04891304347825,522.8532608695652],[316.4130434782609,490.8260869565217]],"D7":[[131.19565217391303,564.9130434782609],[154.3478260869565,564.9130434782609],[262.39130434782606,560.2826086956521],[348.82608695652175,563.3695652173913],[430.2445652173913,607.7445652173913],[455.32608695652175,680.6739130434783],[380.08152173913044,781.3858695652174],[235.3804347826087,831.5489130434783],[171.71195652173913,845.0543478260869],[198.7228260869565,852.7717391304348],[503.5597826086956,897.1467391304348],[868.2065217391304,897.1467391304348]],"D8":[[306.76630434782606,598.0978260869565],[441.820652173913,598.0978260869565],[740.8695652173913,597.3260869565217],[804.5380434782609,603.8858695652174],[771.7391304347826,626.6521739130435],[654.0489130434783,677.2010869565217],[381.23913043478257,764.0217391304348],[285.54347826086956,791.8043478260869],[491.9836956521739,762.0923913043478]],"D10":[[246.95652173913044,449.15217391304344],[246.95652173913044,433.7173913043478],[277.82608695652175,401.30434782608694],[331.8478260869565,381.23913043478257],[360.7880434782609,383.9402173913043],[416.73913043478257,424.45652173913044],[436.03260869565213,453.39673913043475],[443.75,515.1358695652174],[443.75,567.2282608695652],[428.3152173913043,598.0978260869565],[418.28260869565213,609.6739130434783],[399.375,628.9673913043478],[376.2228260869565,642.4728260869565],[378.15217391304344,642.0869565217391],[393.5869565217391,642.0869565217391],[426.3858695652174,642.4728260869565],[439.89130434782606,642.0869565217391],[451.4673913043478,642.4728260869565],[463.04347826086956,642.0869565217391],[474.6195652173913,642.4728260869565]],"D11":[[416.73913043478257,660.6086956521739],[424.45652173913044,655.9782608695652],[441.4347826086956,655.9782608695652],[457.2554347826087,659.8369565217391],[478.4782608695652,682.2173913043478],[486.195652173913,711.5434782608695],[486.195652173913,734.695652173913],[470.7608695652174,760.9347826086956],[459.1847826086956,777.5271739130435],[451.4673913043478,789.1032608695651],[464.9728260869565,804.5380434782609],[488.125,821.9021739130435],[501.6304347826087,833.4782608695651]],"D12":[[237.30978260869566,497.77173913043475],[237.30978260869566,491.9836956521739],[246.95652173913044,489.28260869565213],[268.17934782608694,490.05434782608694],[282.45652173913044,493.9130434782609],[295.1902173913043,505.48913043478257],[300.9782608695652,520.1521739130435],[300.9782608695652,537.1304347826086],[300.9782608695652,551.0217391304348],[300.9782608695652,568],[299.04891304347825,590.3804347826086],[291.33152173913044,600.0271739130435],[270.1086956521739,605.0434782608695],[266.25,607.7445652173913],[260.4619565217391,613.5326086956521],[299.04891304347825,636.6847826086956],[376.2228260869565,704.2119565217391]],"D13":[[277.82608695652175,665.2391304347826],[277.82608695652175,645.1739130434783],[314.4836956521739,613.5326086956521],[347.2826086956522,609.6739130434783],[383.9402173913043,611.6032608695652],[416.73913043478257,643.6304347826086],[420.5978260869565,681.0597826086956],[420.5978260869565,719.6467391304348],[404.39130434782606,748.5869565217391],[372.36413043478257,781.3858695652174],[348.82608695652175,794.891304347826],[339.5652173913043,799.5217391304348],[337.6358695652174,806.4673913043478],[341.4945652173913,821.9021739130435],[399.375,862.4184782608695],[505.48913043478257,924.1576086956521],[580.3478260869565,964.6739130434783]],"D14":[[329.91847826086956,592.3097826086956],[333.77717391304344,588.4510869565217],[380.08152173913044,588.4510869565217],[443.75,588.4510869565217],[526.7119565217391,588.4510869565217],[557.5815217391304,590.3804347826086],[538.2880434782609,619.320652173913],[320.27173913043475,706.141304347826],[96.46739130434783,777.5271739130435],[36.65760869565217,806.4673913043478],[54.02173913043478,805.695652173913],[148.55978260869566,806.4673913043478],[262.39130434782606,797.9782608695651],[389.7282608695652,789.1032608695651]],"D15":[[335.70652173913044,692.6358695652174],[353.070652173913,706.141304347826],[395.51630434782606,706.141304347826],[409.02173913043475,705.3695652173913],[433.7173913043478,710],[445.67934782608694,711.9293478260869],[426,740.8695652173913],[375.0652173913043,779.4565217391304],[344.195652173913,802.6086956521739],[283.6141304347826,829.6195652173913],[285.54347826086956,838.1086956521739],[416.73913043478257,844.2826086956521],[711.9293478260869,845.0543478260869],[929.945652173913,854.7010869565217]],"E6":[[378.15217391304344,574.1739130434783],[412.8804347826087,592.3097826086956],[437.9619565217391,636.6847826086956],[455.32608695652175,703.8260869565217],[436.03260869565213,767.8804347826086],[380.08152173913044,816.1141304347826],[360.7880434782609,823.8315217391304],[341.4945652173913,823.8315217391304],[324.1304347826087,796.4347826086956],[324.1304347826087,760.9347826086956],[401.30434782608694,674.5],[532.5,603.5],[619.320652173913,567.2282608695652]],"E7":[[419.82608695652175,555.6521739130435],[470.7608695652174,651.3478260869565],[483.1086956521739,710],[482.3369565217391,769.8097826086956],[441.820652173913,800.6793478260869],[430.2445652173913,800.6793478260869],[401.30434782608694,750.1304347826086],[393.5869565217391,657.5217391304348],[521.695652173913,540.2173913043478]],"E8":[[378.15217391304344,475.39130434782606],[418.66847826086956,542.1467391304348],[486.195652173913,706.9130434782609],[495.8423913043478,796.820652173913],[491.9836956521739,816.1141304347826],[453.39673913043475,816.1141304347826],[418.66847826086956,800.6793478260869],[395.51630434782606,762.0923913043478],[391.6576086956522,684.9184782608695],[441.4347826086956,594.2391304347826]],"E9":[[422.52717391304344,638.6141304347826],[484.26630434782606,767.8804347826086],[518.6086956521739,879.7826086956521],[526.7119565217391,924.1576086956521],[517.0652173913044,943.0652173913043],[497.77173913043475,943.4510869565217],[466.90217391304344,881.7119565217391],[464.9728260869565,777.5271739130435],[555.6521739130435,717.7173913043478],[654.0489130434783,661.766304347826]],"E10":[[327.2173913043478,532.5],[373.52173913043475,601.9565217391304],[409.02173913043475,679.1304347826086],[416.73913043478257,726.9782608695651],[414.8097826086956,758.2336956521739],[389.7282608695652,758.2336956521739],[366.57608695652175,752.445652173913],[360.7880434782609,700.3532608695652],[399.375,611.6032608695652],[528.6413043478261,497.77173913043475],[594.2391304347826,470.7608695652174]],"E11":[[169.78260869565216,429.0869565217391],[206.44021739130434,513.2065217391304],[283.6141304347826,661.766304347826],[314.4836956521739,744.7282608695651],[318.3423913043478,765.9510869565217],[310.625,777.5271739130435],[289.40217391304344,777.5271739130435],[235.3804347826087,715.7880434782609],[155.8913043478261,547.9347826086956],[157.43478260869566,501.6304347826087],[257.7608695652174,439.89130434782606],[445.67934782608694,403.2336956521739]],"E12":[[385.8695652173913,419.82608695652175],[457.2554347826087,580.7336956521739],[476.54891304347825,673.3423913043478],[473.8478260869565,710],[418.28260869565213,725.4347826086956],[383.9402173913043,723.5054347826086],[337.6358695652174,659.8369565217391],[337.6358695652174,573.0163043478261],[418.66847826086956,474.6195652173913]],"E13":[[410.95108695652175,526.7119565217391],[410.5652173913043,671.4130434782609],[404.39130434782606,818.0434782608695],[385.8695652173913,879.7826086956521],[378.15217391304344,882.8695652173913],[358.8586956521739,821.9021739130435],[372.36413043478257,713.8586956521739],[509.3478260869565,581.891304347826]],"E14":[[501.6304347826087,405.9347826086956],[530.570652173913,461.11413043478257],[598.0978260869565,613.5326086956521],[613.5326086956521,729.2934782608695],[607.7445652173913,750.516304347826],[540.2173913043478,734.695652173913],[499.7010869565217,688.7771739130435],[495.8423913043478,623.1793478260869],[534.4293478260869,561.4402173913044],[618.9347826086956,509.3478260869565]],"E15":[[495.8423913043478,488.125],[513.2065217391304,488.125],[528.6413043478261,488.125],[601.9565217391304,527.8695652173913],[713.8586956521739,650.1902173913044],[726.9782608695651,725.4347826086956],[725.4347826086956,760.9347826086956],[706.141304347826,775.5978260869565],[679.1304347826086,765.5652173913044],[644.4021739130435,677.2010869565217],[719.6467391304348,526.7119565217391],[891.3586956521739,443.75],[1250.2173913043478,373.52173913043475],[1512.6086956521738,367.3478260869565]],"E16":[[293.2608695652174,541.7608695652174],[360.7880434782609,542.1467391304348],[459.1847826086956,574.945652173913],[534.4293478260869,623.1793478260869],[546.0054347826086,723.5054347826086],[527.8695652173913,787.1739130434783],[455.32608695652175,811.8695652173913],[403.2336956521739,814.1847826086956],[374.29347826086956,746.6576086956521],[374.29347826086956,696.4945652173913],[447.6086956521739,648.2608695652174],[567.2282608695652,615.4619565217391]],"E17":[[254.67391304347825,509.3478260869565],[297.1195652173913,588.4510869565217],[337.6358695652174,727.3641304347826],[337.6358695652174,744.7282608695651],[380.08152173913044,654.0489130434783],[578.8043478260869,521.695652173913],[779.4565217391304,473.8478260869565]],"E18":[[304.0652173913043,547.9347826086956],[372.36413043478257,667.5543478260869],[395.51630434782606,785.2445652173913],[391.6576086956522,816.1141304347826],[296.3478260869565,802.6086956521739],[196.79347826086956,750.516304347826],[194.47826086956522,694.5652173913044],[341.4945652173913,584.5923913043478],[542.1467391304348,553.7228260869565]],"E19":[[192.93478260869566,427.54347826086956],[212.22826086956522,434.1032608695652],[300.9782608695652,535.5869565217391],[424.45652173913044,719.2608695652174],[457.2554347826087,792.9619565217391],[457.2554347826087,819.9728260869565],[413.65217391304344,841.195652173913],[396.67391304347825,841.195652173913],[370.4347826086956,821.1304347826086],[356.92934782608694,738.9402173913044],[391.6576086956522,627.0380434782609]],"E20":[[273.9673913043478,389.7282608695652],[304.0652173913043,439.89130434782606],[385.8695652173913,564.9130434782609],[461.11413043478257,696.4945652173913],[483.1086956521739,771.7391304347826],[484.26630434782606,791.0326086956521],[437.9619565217391,808.3967391304348],[360.7880434782609,806.4673913043478],[337.6358695652174,798.75],[331.8478260869565,788.7173913043478],[331.8478260869565,773.2826086956521],[373.52173913043475,702.2826086956521],[495.45652173913044,601.9565217391304],[594.2391304347826,544.8478260869565]],"E21":[[308.695652173913,466.1304347826087],[316.4130434782609,435.2608695652174],[364.2608695652174,401.30434782608694],[396.67391304347825,393.5869565217391],[447.6086956521739,419.82608695652175],[489.28260869565213,532.5],[499.7010869565217,654.0489130434783],[470.7608695652174,703.8260869565217],[442.9782608695652,710],[429.0869565217391,671.4130434782609],[457.2554347826087,565.2989130434783],[586.5217391304348,452.23913043478257],[715.7880434782609,372.36413043478257]],"J16":[[291.33152173913044,644.4021739130435],[313.32608695652175,648.2608695652174],[342.65217391304344,655.9782608695652],[362.7173913043478,655.9782608695652],[401.30434782608694,628.195652173913],[424.45652173913044,583.4347826086956],[422.52717391304344,542.1467391304348],[409.02173913043475,521.695652173913],[399.375,526.7119565217391],[399.375,613.5326086956521],[399.375,738.9402173913044],[399.375,775.5978260869565],[395.1304347826087,787.1739130434783],[371.9782608695652,810.3260869565217],[353.070652173913,816.1141304347826],[333.77717391304344,816.1141304347826],[306.76630434782606,789.1032608695651],[306.76630434782606,777.5271739130435],[312.55434782608694,769.8097826086956],[364.64673913043475,769.8097826086956],[472.6902173913043,783.3152173913044]],"J17":[[324.1304347826087,617.391304347826],[339.5652173913043,617.391304347826],[370.4347826086956,605.0434782608695],[395.51630434782606,588.4510869565217],[397.445652173913,574.945652173913],[382.7826086956522,555.6521739130435],[372.36413043478257,553.7228260869565],[370.4347826086956,617.391304347826],[370.4347826086956,676.0434782608695],[370.4347826086956,711.5434782608695],[356.92934782608694,731.2228260869565],[320.27173913043475,731.2228260869565],[289.40217391304344,731.2228260869565],[277.82608695652175,730.0652173913044],[275.89673913043475,711.9293478260869],[281.6847826086956,692.6358695652174],[380.08152173913044,675.2717391304348],[544.0760869565217,675.2717391304348],[652.1195652173913,675.2717391304348]],"J18":[[349.2119565217391,661.766304347826],[364.64673913043475,661.766304347826],[387.4130434782609,655.9782608695652],[418.66847826086956,638.6141304347826],[445.67934782608694,605.8152173913044],[445.67934782608694,573.0163043478261],[428.3152173913043,549.8641304347826],[418.28260869565213,547.9347826086956],[418.66847826086956,600.0271739130435],[422.52717391304344,708.070652173913],[447.6086956521739,782.5434782608695],[447.6086956521739,810.3260869565217],[443.75,816.1141304347826],[418.66847826086956,816.1141304347826],[391.6576086956522,800.6793478260869],[378.15217391304344,773.2826086956521],[378.15217391304344,743.9565217391304],[441.4347826086956,725.4347826086956],[566.4565217391304,725.4347826086956]],"J19":[[372.36413043478257,582.6630434782609],[401.30434782608694,591.1521739130435],[424.45652173913044,589.6086956521739],[466.90217391304344,573.0163043478261],[493.9130434782609,549.4782608695652],[491.9836956521739,507.41847826086956],[464.5869565217391,463.04347826086956],[435.2608695652174,432.17391304347825],[432.17391304347825,475.39130434782606],[432.17391304347825,622.0217391304348],[449.5380434782609,758.2336956521739],[463.04347826086956,821.1304347826086],[459.1847826086956,837.3369565217391],[439.89130434782606,836.5652173913043],[401.30434782608694,830.391304347826],[368.5054347826087,789.1032608695651],[360.7880434782609,746.6576086956521],[372.36413043478257,727.3641304347826],[449.5380434782609,723.5054347826086],[569.1576086956521,723.5054347826086]],"J20":[[329.91847826086956,630.8967391304348],[383.9402173913043,630.8967391304348],[520.9239130434783,600.0271739130435],[583.4347826086956,563.3695652173913],[578.8043478260869,526.3260869565217],[542.1467391304348,488.125],[513.2065217391304,480.40760869565213],[503.5597826086956,511.27717391304344],[503.5597826086956,630.8967391304348],[517.0652173913044,765.5652173913044],[520.9239130434783,823.8315217391304],[518.9945652173913,829.6195652173913],[476.54891304347825,829.6195652173913],[420.5978260869565,800.6793478260869],[403.2336956521739,777.5271739130435],[409.02173913043475,760.9347826086956],[476.54891304347825,752.445652173913],[589.6086956521739,748.5869565217391],[759.391304347826,748.5869565217391]],"J21":[[254.67391304347825,490.8260869565217],[337.6358695652174,491.9836956521739],[430.2445652173913,491.9836956521739],[493.9130434782609,478.4782608695652],[497,439.89130434782606],[464.9728260869565,389.7282608695652],[434.1032608695652,364.64673913043475],[422.52717391304344,364.64673913043475],[399.375,376.2228260869565],[371.9782608695652,493.9130434782609],[387.79891304347825,673.3423913043478],[413.65217391304344,779.4565217391304],[418.28260869565213,794.891304347826],[418.28260869565213,810.3260869565217],[367.3478260869565,810.3260869565217],[287.0869565217391,764.0217391304348],[262.39130434782606,726.9782608695651],[258.5326086956522,700.3532608695652],[287.4728260869565,667.5543478260869],[436.80434782608694,632.8260869565217],[617.391304347826,617.391304347826],[737.7826086956521,617.391304347826],[725.4347826086956,617.391304347826]],"J22":[[143.54347826086956,532.5],[155.8913043478261,532.5],[198.7228260869565,544.0760869565217],[287.4728260869565,544.0760869565217],[410.95108695652175,515.1358695652174],[437.9619565217391,499.7010869565217],[436.03260869565213,466.90217391304344],[395.1304347826087,401.30434782608694],[370.4347826086956,379.695652173913],[370.4347826086956,429.0869565217391],[370.4347826086956,595.7826086956521],[370.4347826086956,720.8043478260869],[355,742.4130434782609],[312.55434782608694,737.0108695652174],[283.6141304347826,719.6467391304348],[270.1086956521739,699.195652173913],[319.5,694.5652173913044],[535.5869565217391,694.5652173913044]],"J23":[[256.6032608695652,628.9673913043478],[260.4619565217391,623.1793478260869],[279.7554347826087,623.1793478260869],[347.2826086956522,622.0217391304348],[495.8423913043478,598.0978260869565],[582.6630434782609,565.2989130434783],[588.4510869565217,534.4293478260869],[547.9347826086956,490.8260869565217],[506.2608695652174,478.4782608695652],[495.8423913043478,513.2065217391304],[495.45652173913044,632.8260869565217],[490.05434782608694,792.9619565217391],[482.3369565217391,850.8423913043478],[470.7608695652174,856.6304347826086],[419.82608695652175,833.4782608695651],[380.08152173913044,775.5978260869565],[379.695652173913,748.5869565217391],[403.2336956521739,723.5054347826086],[503.17391304347825,710],[617.391304347826,710]],"J24":[[277.82608695652175,612.7608695652174],[324.1304347826087,614.3043478260869],[432.17391304347825,614.3043478260869],[535.5869565217391,594.2391304347826],[569.1576086956521,574.945652173913],[559.5108695652174,522.8532608695652],[515.1358695652174,488.125],[493.9130434782609,486.195652173913],[449.15217391304344,540.2173913043478],[426,663.695652173913],[426.3858695652174,737.0108695652174],[426.3858695652174,758.2336956521739],[403.2336956521739,762.0923913043478],[370.4347826086956,737.7826086956521],[378.15217391304344,720.8043478260869],[480.40760869565213,708.070652173913],[559.5108695652174,708.070652173913]],"J25":[[285.54347826086956,586.5217391304348],[310.625,596.1684782608695],[353.070652173913,600.0271739130435],[412.8804347826087,600.0271739130435],[549.4782608695652,586.5217391304348],[627.0380434782609,553.7228260869565],[611.6032608695652,513.2065217391304],[549.8641304347826,461.11413043478257],[517.0652173913044,452.23913043478257],[499.7010869565217,490.05434782608694],[491.9836956521739,611.6032608695652],[491.9836956521739,737.0108695652174],[486.195652173913,765.5652173913044],[451.4673913043478,765.9510869565217],[424.45652173913044,753.2173913043478],[419.82608695652175,733.1521739130435],[439.89130434782606,710],[606.5869565217391,694.5652173913044],[792.9619565217391,684.9184782608695],[839.266304347826,684.9184782608695]],"J26":[[152.41847826086956,441.820652173913],[175.57065217391303,451.4673913043478],[233.45108695652172,466.90217391304344],[281.6847826086956,466.90217391304344],[405.1630434782609,449.5380434782609],[490.05434782608694,422.52717391304344],[486.195652173913,410.5652173913043],[451.4673913043478,383.9402173913043],[428.3152173913043,366.57608695652175],[418.66847826086956,382.0108695652174],[412.8804347826087,488.125],[412.1086956521739,679.1304347826086],[412.1086956521739,771.7391304347826],[399.375,816.1141304347826],[385.8695652173913,828.8478260869565],[320.27173913043475,808.3967391304348],[263.9347826086956,748.5869565217391],[266.25,698.4239130434783],[341.1086956521739,655.9782608695652],[524.7826086956521,601.9565217391304]],"J27":[[295.1902173913043,592.3097826086956],[310.625,592.3097826086956],[339.5652173913043,591.1521739130435],[414.8097826086956,573.0163043478261],[472.6902173913043,511.27717391304344],[475.39130434782606,439.89130434782606],[458.4130434782609,409.02173913043475],[413.65217391304344,385.8695652173913],[388.95652173913044,393.5869565217391],[368.5054347826087,472.6902173913043],[367.3478260869565,586.5217391304348],[422.52717391304344,721.5760869565217],[442.9782608695652,802.6086956521739],[436.03260869565213,846.9836956521739],[385.8695652173913,845.8260869565217],[353.070652173913,827.6902173913044],[345.3532608695652,819.9728260869565],[349.2119565217391,816.1141304347826],[355,813.4130434782609]],"J28":[[324.1304347826087,566.4565217391304],[360.7880434782609,567.2282608695652],[426.3858695652174,567.2282608695652],[518.9945652173913,530.570652173913],[534.4293478260869,515.1358695652174],[524.7826086956521,467.67391304347825],[484.26630434782606,430.2445652173913],[458.4130434782609,424.45652173913044],[437.9619565217391,472.6902173913043],[437.9619565217391,592.3097826086956],[468.83152173913044,706.141304347826],[493.9130434782609,759.391304347826],[488.125,781.3858695652174],[455.32608695652175,796.4347826086956],[428.3152173913043,796.820652173913],[397.445652173913,777.5271739130435],[397.445652173913,727.3641304347826],[434.1032608695652,684.9184782608695],[518.9945652173913,673.3423913043478]],"J29":[[372.36413043478257,574.945652173913],[424.45652173913044,564.9130434782609],[472.6902173913043,544.0760869565217],[493.9130434782609,493.9130434782609],[493.9130434782609,442.9782608695652],[478.4782608695652,402.8478260869565],[463.04347826086956,441.4347826086956],[416.73913043478257,605.0434782608695],[397.445652173913,723.5054347826086],[397.445652173913,750.516304347826],[383.9402173913043,758.2336956521739],[345.3532608695652,754.375],[333.39130434782606,725.4347826086956],[335.70652173913044,708.070652173913],[385.8695652173913,672.9565217391304],[478.4782608695652,649.8043478260869]],"I9":[[231.52173913043478,643.6304347826086],[258.5326086956522,644.4021739130435],[293.2608695652174,629.7391304347826],[347.2826086956522,566.4565217391304],[367.3478260869565,470.7608695652174],[367.3478260869565,409.02173913043475],[355,364.2608695652174],[347.2826086956522,359.6304347826087],[322.20108695652175,389.7282608695652],[299.04891304347825,459.1847826086956],[302.9076086956522,505.48913043478257],[350.3695652173913,524.7826086956521],[405.9347826086956,524.7826086956521],[451.4673913043478,499.7010869565217],[470.7608695652174,452.23913043478257],[470.7608695652174,387.4130434782609],[456.8695652173913,324.1304347826087],[447.6086956521739,333.39130434782606],[401.30434782608694,510.89130434782606],[370.4347826086956,648.2608695652174],[372.36413043478257,708.070652173913],[396.67391304347825,740.8695652173913]],"I10":[[273.19565217391306,771.7391304347826],[285.54347826086956,760.9347826086956],[362.7173913043478,711.5434782608695],[432.17391304347825,640.5434782608695],[436.03260869565213,613.5326086956521],[434.1032608695652,574.945652173913],[426.3858695652174,549.8641304347826],[416.73913043478257,529.4130434782609],[409.02173913043475,527.8695652173913],[365.80434782608694,601.9565217391304],[350.3695652173913,663.695652173913],[351.14130434782606,719.6467391304348],[373.52173913043475,733.1521739130435],[410.95108695652175,737.0108695652174],[497.77173913043475,737.0108695652174],[565.2989130434783,706.141304347826],[575.7173913043478,648.2608695652174],[571.0869565217391,612.7608695652174],[551.7934782608695,646.3315217391304],[526.3260869565217,764.0217391304348],[526.3260869565217,864.3478260869565],[543.3043478260869,987.8260869565217],[564.9130434782609,1041.8478260869565]],"I11":[[295.1902173913043,827.6902173913044],[314.4836956521739,827.6902173913044],[432.17391304347825,794.891304347826],[501.6304347826087,757.8478260869565],[524.7826086956521,699.195652173913],[518.9945652173913,634.7554347826086],[501.6304347826087,612.7608695652174],[490.05434782608694,613.5326086956521],[447.6086956521739,620.4782608695652],[382.0108695652174,669.4836956521739],[382.0108695652174,682.9891304347826],[397.445652173913,715.7880434782609],[422.52717391304344,731.2228260869565],[459.1847826086956,731.2228260869565],[553.7228260869565,729.2934782608695],[625.1086956521739,686.8478260869565],[642.4728260869565,659.8369565217391],[635.9130434782609,632.8260869565217],[625.1086956521739,622.0217391304348],[618.9347826086956,617.391304347826],[603.8858695652174,634.7554347826086],[590.3804347826086,698.4239130434783],[586.5217391304348,781],[586.5217391304348,852],[592.3097826086956,891.3586956521739]],"I12":[[241.16847826086956,706.141304347826],[275.89673913043475,673.3423913043478],[295.1902173913043,621.25],[306.76630434782606,565.2989130434783],[305.6086956521739,509.3478260869565],[306.76630434782606,464.9728260869565],[299.04891304347825,445.67934782608694],[293.2608695652174,442.9782608695652],[266.25,474.6195652173913],[254.67391304347825,509.3478260869565],[254.67391304347825,543.3043478260869],[270.1086956521739,555.6521739130435],[295.1902173913043,559.5108695652174],[358.8586956521739,559.5108695652174],[412.8804347826087,526.7119565217391],[427.54347826086956,493.9130434782609],[422.52717391304344,472.6902173913043],[420.5978260869565,466.90217391304344],[403.2336956521739,472.6902173913043],[382.0108695652174,553.7228260869565],[378.15217391304344,649.8043478260869],[378.15217391304344,781],[407.0923913043478,870.1358695652174],[416.73913043478257,910.6521739130435]],"I13":[[333.39130434782606,864.3478260869565],[358.8586956521739,860.4891304347826],[403.2336956521739,823.8315217391304],[439.89130434782606,767.1086956521739],[444.52173913043475,679.1304347826086],[439.89130434782606,617.391304347826],[434.1032608695652,611.6032608695652],[393.5869565217391,651.3478260869565],[380.08152173913044,677.2010869565217],[385.8695652173913,703.8260869565217],[404.39130434782606,717.7173913043478],[453.39673913043475,731.2228260869565],[553.7228260869565,731.2228260869565],[625.1086956521739,726.9782608695651],[630.8967391304348,698.4239130434783],[627.0380434782609,659.8369565217391],[609.6739130434783,625.1086956521739],[594.2391304347826,622.0217391304348],[573.0163043478261,688.7771739130435],[568,748.5869565217391],[569.1576086956521,829.6195652173913],[574.945652173913,873.9945652173913]],"I14":[[227.66304347826087,920.2989130434783],[264.32065217391306,897.1467391304348],[370.4347826086956,819.5869565217391],[416.73913043478257,760.9347826086956],[430.2445652173913,657.9076086956521],[430.2445652173913,544.0760869565217],[399.375,443.75],[368.5054347826087,399.375],[362.7173913043478,395.1304347826087],[341.1086956521739,432.17391304347825],[327.9891304347826,482.3369565217391],[327.2173913043478,524.7826086956521],[327.9891304347826,551.7934782608695],[351.14130434782606,596.1684782608695],[385.8695652173913,618.9347826086956],[443.75,627.0380434782609],[530.570652173913,619.320652173913],[605.0434782608695,594.2391304347826],[644.4021739130435,553.7228260869565],[648.2608695652174,510.89130434782606],[646.3315217391304,491.9836956521739],[627.0380434782609,505.48913043478257],[603.8858695652174,542.1467391304348],[582.6630434782609,628.9673913043478],[578.8043478260869,730.0652173913044],[603.8858695652174,823.8315217391304],[640.5434782608695,912.195652173913],[663.695652173913,967.7608695652174],[667.5543478260869,991.6847826086956],[673.3423913043478,1007.1195652173913]],"I15":[[243.86956521739128,818.0434782608695],[266.25,812.2554347826086],[302.52173913043475,779.4565217391304],[341.4945652173913,731.2228260869565],[366.57608695652175,669.4836956521739],[370.4347826086956,574.1739130434783],[366.57608695652175,480.40760869565213],[331.8478260869565,419.82608695652175],[306.76630434782606,399.375],[293.2608695652174,402.8478260869565],[272.0380434782609,430.2445652173913],[271.65217391304344,455.32608695652175],[272.0380434782609,474.6195652173913],[279.7554347826087,499.7010869565217],[290.17391304347825,517.0652173913044],[302.9076086956522,528.6413043478261],[364.64673913043475,557.5815217391304],[456.8695652173913,571.0869565217391],[503.17391304347825,571.0869565217391],[520.9239130434783,567.2282608695652],[524.7826086956521,555.6521739130435],[524.7826086956521,527.8695652173913],[524.7826086956521,506.2608695652174],[518.9945652173913,484.26630434782606],[499.7010869565217,457.2554347826087],[493.9130434782609,449.15217391304344],[488.125,466.90217391304344],[487.73913043478257,517.0652173913044],[495.45652173913044,578.8043478260869],[498.54347826086956,632.8260869565217],[499.7010869565217,719.6467391304348]],"I16":[[252.74456521739128,1032.2010869565217],[260.4619565217391,1020.625],[295.1902173913043,983.9673913043478],[341.4945652173913,928.016304347826],[379.695652173913,848.9130434782609],[441.820652173913,738.9402173913044],[470.7608695652174,618.9347826086956],[476.54891304347825,530.570652173913],[456.8695652173913,486.195652173913],[441.820652173913,466.90217391304344],[402.8478260869565,463.04347826086956],[374.29347826086956,505.48913043478257],[370.4347826086956,547.9347826086956],[370.4347826086956,586.5217391304348],[385.8695652173913,626.6521739130435],[416.73913043478257,663.695652173913],[456.8695652173913,686.8478260869565],[475.39130434782606,686.8478260869565],[540.2173913043478,686.8478260869565],[673.3423913043478,654.0489130434783],[781,617.391304347826],[787.1739130434783,591.1521739130435],[781.3858695652174,561.4402173913044],[767.8804347826086,530.570652173913],[746.6576086956521,503.5597826086956],[713.8586956521739,503.5597826086956],[657.9076086956521,515.1358695652174],[574.945652173913,627.0380434782609],[549.8641304347826,729.2934782608695],[549.8641304347826,837.3369565217391],[551.7934782608695,897.1467391304348],[559.5108695652174,945.3804347826086],[563.3695652173913,987.8260869565217],[563.3695652173913,1026.4130434782608]],"I17":[[331.8478260869565,838.1086956521739],[331.8478260869565,807.2391304347826],[331.8478260869565,751.6739130434783],[333.39130434782606,663.695652173913],[333.77717391304344,582.6630434782609],[308.695652173913,489.28260869565213],[290.17391304347825,455.32608695652175],[252.74456521739128,476.54891304347825],[241.16847826086956,495.8423913043478],[240.78260869565216,509.3478260869565],[241.16847826086956,520.9239130434783],[252.74456521739128,534.4293478260869],[322.20108695652175,544.0760869565217],[387.79891304347825,542.1467391304348],[424.45652173913044,532.5],[437.9619565217391,520.9239130434783],[441.820652173913,513.2065217391304],[441.820652173913,490.05434782608694],[436.03260869565213,461.11413043478257],[424.45652173913044,455.32608695652175],[409.02173913043475,483.1086956521739],[397.445652173913,561.4402173913044],[399.375,669.4836956521739],[428.3152173913043,800.6793478260869],[432.17391304347825,856.6304347826086],[436.80434782608694,879.7826086956521]],"I18":[[265.4782608695652,972.391304347826],[266.25,935.7336956521739],[285.54347826086956,850.4565217391304],[310.2391304347826,733.1521739130435],[310.625,652.1195652173913],[285.54347826086956,581.891304347826],[231.52173913043478,520.1521739130435],[179.42934782608694,518.9945652173913],[155.8913043478261,540.2173913043478],[156.27717391304347,596.1684782608695],[165.92391304347825,627.0380434782609],[183.28804347826087,634.7554347826086],[218.01630434782606,642.4728260869565],[300.9782608695652,645.1739130434783],[383.9402173913043,628.9673913043478],[422.52717391304344,598.0978260869565],[421.3695652173913,586.5217391304348],[418.28260869565213,578.8043478260869],[405.1630434782609,551.7934782608695],[399.375,553.7228260869565],[399.375,667.5543478260869],[399.375,819.9728260869565],[426.3858695652174,916.4402173913043]],"I19":[[334.9347826086956,756.3043478260869],[335.70652173913044,737.0108695652174],[347.2826086956522,703.8260869565217],[373.52173913043475,609.6739130434783],[388.95652173913044,493.9130434782609],[372.36413043478257,449.5380434782609],[360.7880434782609,449.5380434782609],[324.1304347826087,480.02173913043475],[300.9782608695652,512.4347826086956],[308.695652173913,529.4130434782609],[319.5,540.2173913043478],[355,544.8478260869565],[449.5380434782609,546.0054347826086],[572.6304347826086,524.7826086956521],[611.6032608695652,499.7010869565217],[603.8858695652174,464.9728260869565],[571.0869565217391,427.54347826086956],[547.9347826086956,404.39130434782606],[542.1467391304348,405.1630434782609],[520.1521739130435,463.04347826086956],[493.9130434782609,583.4347826086956],[493.9130434782609,703.8260869565217],[493.9130434782609,756.3043478260869]],"I20":[[317.95652173913044,686.8478260869565],[326.0597826086956,677.2010869565217],[378.15217391304344,637.4565217391304],[430.2445652173913,584.5923913043478],[437.9619565217391,546.0054347826086],[432.17391304347825,518.6086956521739],[418.66847826086956,503.5597826086956],[402.8478260869565,493.9130434782609],[388.95652173913044,501.6304347826087],[389.7282608695652,518.9945652173913],[391.6576086956522,530.570652173913],[399.375,546.0054347826086],[418.66847826086956,557.5815217391304],[455.32608695652175,560.2826086956521],[509.3478260869565,560.2826086956521],[559.5108695652174,544.0760869565217],[566.4565217391304,517.0652173913044],[557.5815217391304,488.125],[544.0760869565217,468.83152173913044],[532.5,464.5869565217391],[511.27717391304344,538.2880434782609],[511.27717391304344,677.2010869565217],[513.9782608695652,810.3260869565217],[530.570652173913,885.570652173913]],"I21":[[254.67391304347825,884.4130434782609],[254.67391304347825,876.695652173913],[258.5326086956522,846.9836956521739],[264.32065217391306,812.2554347826086],[272.0380434782609,737.0108695652174],[272.0380434782609,682.9891304347826],[272.0380434782609,623.1793478260869],[256.6032608695652,538.2880434782609],[241.16847826086956,482.3369565217391],[239.2391304347826,472.30434782608694],[225.7336956521739,472.6902173913043],[169.78260869565216,478.4782608695652],[127.33695652173913,490.05434782608694],[119.6195652173913,495.8423913043478],[109.97282608695652,511.27717391304344],[98.39673913043478,538.2880434782609],[94.15217391304347,555.6521739130435],[94.53804347826086,576.875],[108.04347826086956,597.3260869565217],[129.2663043478261,615.4619565217391],[177.5,632.8260869565217],[246.95652173913044,642.0869565217391],[410.95108695652175,642.4728260869565],[538.2880434782609,642.4728260869565],[584.5923913043478,642.4728260869565],[603.8858695652174,628.9673913043478],[605.8152173913044,619.320652173913],[605.8152173913044,607.7445652173913],[601.9565217391304,581.891304347826],[592.3097826086956,544.0760869565217],[552.5652173913044,493.9130434782609],[501.6304347826087,449.15217391304344],[463.04347826086956,429.0869565217391],[449.5380434782609,422.52717391304344],[432.17391304347825,452.23913043478257],[412.8804347826087,511.27717391304344],[401.30434782608694,589.6086956521739],[391.6576086956522,669.4836956521739],[390.5,733.1521739130435],[390.5,779.4565217391304],[390.5,825.7608695652174],[391.6576086956522,858.5597826086956],[391.6576086956522,870.1358695652174],[393.5869565217391,881.3260869565217]],"I22":[[279.3695652173913,779.4565217391304],[279.3695652173913,679.1304347826086],[279.3695652173913,540.2173913043478],[262.39130434782606,455.32608695652175],[229.5923913043478,466.90217391304344],[156.27717391304347,580.7336956521739],[128.1086956521739,663.695652173913],[135.05434782608694,681.0597826086956],[142.77173913043478,682.9891304347826],[187.14673913043478,682.9891304347826],[350.3695652173913,648.2608695652174],[509.3478260869565,597.3260869565217],[544.0760869565217,574.945652173913],[544.0760869565217,553.7228260869565],[532.5,524.7826086956521],[513.2065217391304,497.77173913043475],[507.41847826086956,495.8423913043478],[495.45652173913044,555.6521739130435],[476.54891304347825,692.6358695652174],[459.95652173913044,833.4782608695651],[459.95652173913044,941.5217391304348]],"I23":[[355,757.8478260869565],[355,694.5652173913044],[355,580.3478260869565],[355,486.195652173913],[333.77717391304344,405.1630434782609],[316.4130434782609,367.3478260869565],[277.82608695652175,388.95652173913044],[223.80434782608694,442.9782608695652],[208.36956521739128,481.5652173913043],[214.15760869565216,513.2065217391304],[239.2391304347826,526.3260869565217],[277.82608695652175,529.4130434782609],[389.7282608695652,526.7119565217391],[480.40760869565213,488.125],[486.195652173913,456.8695652173913],[480.40760869565213,412.8804347826087],[464.9728260869565,383.9402173913043],[451.4673913043478,376.2228260869565],[421.3695652173913,486.195652173913],[407.0923913043478,665.625],[405.9347826086956,779.4565217391304],[422.52717391304344,860.4891304347826]],"I24":[[308.695652173913,797.9782608695651],[331.8478260869565,753.2173913043478],[378.15217391304344,601.9565217391304],[387.79891304347825,436.03260869565213],[343.42391304347825,345.3532608695652],[316.4130434782609,327.2173913043478],[288.6304347826087,362.7173913043478],[272.0380434782609,459.1847826086956],[279.7554347826087,526.7119565217391],[312.55434782608694,551.7934782608695],[372.36413043478257,551.7934782608695],[504.7173913043478,501.6304347826087],[596.1684782608695,451.4673913043478],[586.5217391304348,404.39130434782606],[544.0760869565217,353.070652173913],[520.9239130434783,343.42391304347825],[491.9836956521739,376.2228260869565],[466.90217391304344,499.7010869565217],[463.04347826086956,683.7608695652174],[463.04347826086956,804.1521739130435],[482.3369565217391,897.1467391304348],[497.77173913043475,931.875]],"I25":[[210.29891304347825,553.7228260869565],[216.08695652173913,535.5869565217391],[240.78260869565216,463.04347826086956],[245.02717391304347,380.08152173913044],[243.86956521739128,324.1304347826087],[233.06521739130434,285.54347826086956],[220.7173913043478,277.82608695652175],[198.7228260869565,343.42391304347825],[194.8641304347826,412.8804347826087],[223.80434782608694,447.6086956521739],[267.02173913043475,447.6086956521739],[328.7608695652174,424.45652173913044],[370.4347826086956,393.5869565217391],[370.4347826086956,373.52173913043475],[362.7173913043478,348.82608695652175],[347.2826086956522,325.67391304347825],[341.1086956521739,324.1304347826087],[327.9891304347826,428.3152173913043],[300.9782608695652,595.7826086956521],[300.9782608695652,659.0652173913044]],"I26":[[306.76630434782606,791.0326086956521],[310.2391304347826,710],[329.91847826086956,580.7336956521739],[329.91847826086956,480.40760869565213],[312.55434782608694,351.14130434782606],[280.9130434782609,262.39130434782606],[270.1086956521739,248.5],[250.81521739130434,302.9076086956522],[243.0978260869565,358.8586956521739],[267.02173913043475,409.02173913043475],[327.2173913043478,439.89130434782606],[466.90217391304344,474.6195652173913],[578.8043478260869,478.4782608695652],[661.766304347826,457.2554347826087],[665.2391304347826,401.30434782608694],[650.1902173913044,312.55434782608694],[605.0434782608695,185.2173913043478],[559.5108695652174,82.96195652173913],[541.7608695652174,138.91304347826087],[513.9782608695652,339.5652173913043],[486.195652173913,552.5652173913044],[476.54891304347825,738.9402173913044],[475.39130434782606,825.7608695652174]],"I27":[[382.0108695652174,677.2010869565217],[382.0108695652174,607.7445652173913],[380.08152173913044,561.4402173913044],[373.52173913043475,532.5],[360.7880434782609,507.41847826086956],[347.2826086956522,490.8260869565217],[333.77717391304344,480.40760869565213],[322.20108695652175,480.40760869565213],[283.6141304347826,495.8423913043478],[273.19565217391306,517.0652173913044],[270.1086956521739,527.8695652173913],[277.82608695652175,543.3043478260869],[299.04891304347825,561.4402173913044],[342.65217391304344,578.8043478260869],[429.0869565217391,578.8043478260869],[501.6304347826087,568],[526.7119565217391,553.7228260869565],[526.7119565217391,522.8532608695652],[515.1358695652174,488.125],[509.3478260869565,475.39130434782606],[499.7010869565217,472.6902173913043],[463.04347826086956,527.8695652173913],[432.17391304347825,622.0217391304348],[416.73913043478257,713.0869565217391],[420.5978260869565,785.2445652173913],[433.7173913043478,833.4782608695651]],"I28":[[327.2173913043478,802.6086956521739],[335.70652173913044,775.5978260869565],[351.14130434782606,690.7065217391304],[356.92934782608694,574.945652173913],[356.92934782608694,497.77173913043475],[349.2119565217391,488.125],[333.77717391304344,495.8423913043478],[321.04347826086956,517.0652173913044],[322.20108695652175,530.570652173913],[322.20108695652175,551.7934782608695],[335.70652173913044,567.2282608695652],[353.070652173913,574.945652173913],[395.51630434782606,576.875],[528.6413043478261,576.875],[677.2010869565217,553.7228260869565],[702.2826086956521,543.3043478260869],[682.2173913043478,524.7826086956521],[630.8967391304348,472.6902173913043],[605.8152173913044,436.03260869565213],[594.2391304347826,429.0869565217391],[569.1576086956521,453.39673913043475],[540.2173913043478,497],[498.54347826086956,586.5217391304348],[476.54891304347825,692.6358695652174],[472.6902173913043,758.2336956521739]],"H29":[[169.78260869565216,580.3478260869565],[180.58695652173913,632.8260869565217],[203.7391304347826,671.4130434782609],[218.01630434782606,654.0489130434783],[287.4728260869565,544.0760869565217],[314.4836956521739,503.5597826086956],[326.0597826086956,505.48913043478257],[345.3532608695652,553.7228260869565],[374.29347826086956,613.5326086956521],[381.23913043478257,625.1086956521739],[382.0108695652174,590.3804347826086],[397.445652173913,561.4402173913044],[424.45652173913044,580.3478260869565],[443.75,607.7445652173913],[459.1847826086956,619.320652173913],[472.6902173913043,619.320652173913],[506.2608695652174,594.2391304347826],[582.6630434782609,505.48913043478257],[636.6847826086956,420.5978260869565]],"H30":[[200.65217391304347,467.67391304347825],[219.94565217391303,538.2880434782609],[228.43478260869566,563.3695652173913],[233.45108695652172,534.4293478260869],[246.95652173913044,503.17391304347825],[259.30434782608694,509.3478260869565],[283.6141304347826,561.4402173913044],[314.4836956521739,615.4619565217391],[326.0597826086956,627.0380434782609],[353.070652173913,607.7445652173913],[397.445652173913,528.6413043478261],[407.0923913043478,513.2065217391304],[412.8804347826087,513.2065217391304],[452.23913043478257,586.5217391304348],[486.195652173913,652.891304347826],[495.8423913043478,661.766304347826],[557.5815217391304,584.5923913043478],[655.9782608695652,473.8478260869565],[708.070652173913,410.95108695652175]],"H31":[[206.44021739130434,636.6847826086956],[218.01630434782606,652.1195652173913],[250.81521739130434,706.141304347826],[291.33152173913044,719.6467391304348],[341.4945652173913,615.4619565217391],[358.0869565217391,555.6521739130435],[366.57608695652175,574.945652173913],[393.5869565217391,663.695652173913],[424.45652173913044,722.3478260869565],[442.9782608695652,679.1304347826086],[456.8695652173913,648.2608695652174],[463.04347826086956,643.6304347826086],[503.5597826086956,682.9891304347826],[527.8695652173913,710],[544.0760869565217,719.6467391304348],[559.5108695652174,719.6467391304348],[609.6739130434783,659.0652173913044],[652.891304347826,594.2391304347826]],"H32":[[331.8478260869565,711.5434782608695],[341.4945652173913,738.9402173913044],[356.92934782608694,758.2336956521739],[362.7173913043478,759.391304347826],[378.15217391304344,759.391304347826],[405.1630434782609,723.5054347826086],[434.1032608695652,682.9891304347826],[442.9782608695652,671.4130434782609],[455.32608695652175,683.7608695652174],[476.54891304347825,731.2228260869565],[493.9130434782609,750.1304347826086],[501.6304347826087,753.2173913043478],[524.7826086956521,720.8043478260869],[547.9347826086956,676.0434782608695],[563.3695652173913,674.5],[589.6086956521739,725.4347826086956],[617.391304347826,768.6521739130435],[625.1086956521739,774.8260869565217],[648.2608695652174,759.391304347826],[671.4130434782609,725.4347826086956],[708.070652173913,665.625]],"H33":[[182.1304347826087,601.9565217391304],[191.0054347826087,613.5326086956521],[227.66304347826087,654.0489130434783],[245.02717391304347,677.2010869565217],[259.30434782608694,679.1304347826086],[287.4728260869565,634.7554347826086],[324.1304347826087,568],[339.5652173913043,575.7173913043478],[358.0869565217391,625.1086956521739],[382.0108695652174,665.625],[393.5869565217391,651.3478260869565],[413.65217391304344,617.391304347826],[455.32608695652175,575.7173913043478],[474.6195652173913,567.2282608695652],[480.40760869565213,567.2282608695652],[520.9239130434783,611.6032608695652],[561.4402173913044,667.5543478260869],[574.1739130434783,679.1304347826086],[607.7445652173913,665.625],[673.3423913043478,598.0978260869565],[742.4130434782609,547.9347826086956]],"H34":[[291.33152173913044,684.9184782608695],[295.1902173913043,715.7880434782609],[300.9782608695652,745.5],[304.0652173913043,748.5869565217391],[341.4945652173913,688.7771739130435],[382.0108695652174,630.8967391304348],[393.5869565217391,617.391304347826],[420.5978260869565,650.1902173913044],[450.695652173913,710],[464.9728260869565,731.2228260869565],[482.3369565217391,711.9293478260869],[511.27717391304344,652.1195652173913],[520.1521739130435,632.8260869565217],[526.7119565217391,627.0380434782609],[564.9130434782609,679.1304347826086],[613.5326086956521,754.375],[630.8967391304348,769.8097826086956],[648.2608695652174,725.4347826086956],[665.625,700.3532608695652],[690.7065217391304,673.3423913043478]],"H35":[[206.44021739130434,553.7228260869565],[212.22826086956522,565.2989130434783],[233.45108695652172,619.320652173913],[248.88586956521738,646.3315217391304],[256.6032608695652,627.0380434782609],[312.55434782608694,530.570652173913],[362.7173913043478,473.8478260869565],[376.2228260869565,474.6195652173913],[420.5978260869565,536.3586956521739],[464.9728260869565,621.25],[490.05434782608694,661.766304347826],[493.9130434782609,663.695652173913],[507.41847826086956,605.8152173913044],[551.7934782608695,536.3586956521739],[569.1576086956521,513.2065217391304],[574.945652173913,513.2065217391304],[603.8858695652174,565.2989130434783],[634.3695652173913,625.1086956521739],[655.9782608695652,657.5217391304348],[663.695652173913,659.0652173913044],[713.0869565217391,601.9565217391304],[760.9347826086956,532.5]],"H36":[[144.70108695652172,526.7119565217391],[144.70108695652172,580.7336956521739],[163.9945652173913,657.9076086956521],[177.5,672.9565217391304],[210.29891304347825,621.25],[267.02173913043475,509.3478260869565],[288.6304347826087,493.9130434782609],[337.6358695652174,607.7445652173913],[382.0108695652174,692.6358695652174],[409.02173913043475,663.695652173913],[458.4130434782609,571.0869565217391],[484.26630434782606,538.2880434782609],[522.8532608695652,582.6630434782609],[571.0869565217391,629.7391304347826],[586.5217391304348,637.4565217391304],[603.8858695652174,619.320652173913],[652.1195652173913,565.2989130434783],[702.2826086956521,503.17391304347825]],"H37":[[223.80434782608694,537.1304347826086],[225.7336956521739,567.2282608695652],[243.86956521739128,679.1304347826086],[266.25,719.6467391304348],[272.0380434782609,700.3532608695652],[327.9891304347826,553.7228260869565],[385.8695652173913,449.15217391304344],[409.02173913043475,524.7826086956521],[447.6086956521739,651.3478260869565],[470.7608695652174,689.9347826086956],[486.195652173913,655.9782608695652],[528.6413043478261,542.1467391304348],[553.7228260869565,491.9836956521739],[580.7336956521739,528.6413043478261],[625.1086956521739,606.5869565217391],[642.0869565217391,632.8260869565217],[652.1195652173913,621.25],[714.6304347826086,509.3478260869565],[760.1630434782609,436.03260869565213]],"H38":[[171.71195652173913,582.6630434782609],[173.6413043478261,607.7445652173913],[194.47826086956522,694.5652173913044],[223.80434782608694,753.2173913043478],[233.45108695652172,746.6576086956521],[273.9673913043478,657.9076086956521],[295.1902173913043,605.8152173913044],[310.625,603.8858695652174],[333.77717391304344,661.766304347826],[360.7880434782609,711.9293478260869],[382.0108695652174,688.7771739130435],[410.5652173913043,617.391304347826],[434.1032608695652,605.8152173913044],[459.1847826086956,650.1902173913044],[486.195652173913,705.3695652173913],[504.7173913043478,725.4347826086956],[515.1358695652174,723.5054347826086],[561.4402173913044,650.1902173913044],[657.9076086956521,522.8532608695652],[694.5652173913044,464.5869565217391]],"H39":[[339.5652173913043,432.17391304347825],[353.070652173913,534.4293478260869],[382.0108695652174,628.9673913043478],[399.375,630.8967391304348],[467.67391304347825,501.6304347826087],[511.27717391304344,420.5978260869565],[513.2065217391304,459.1847826086956],[530.570652173913,522.8532608695652],[540.2173913043478,541.7608695652174],[561.4402173913044,528.6413043478261],[613.5326086956521,453.39673913043475],[644.4021739130435,437.9619565217391],[675.2717391304348,499.7010869565217],[710,541.7608695652174],[725.4347826086956,535.5869565217391],[754.375,491.9836956521739],[792.9619565217391,405.1630434782609]],"H40":[[203.7391304347826,532.5],[202.58152173913044,557.5815217391304],[219.17391304347825,601.9565217391304],[233.06521739130434,625.1086956521739],[246.95652173913044,628.195652173913],[304.8369565217391,544.0760869565217],[345.3532608695652,490.05434782608694],[364.2608695652174,509.3478260869565],[410.5652173913043,601.9565217391304],[441.4347826086956,648.2608695652174],[459.1847826086956,634.7554347826086],[490.05434782608694,567.2282608695652],[522.8532608695652,518.9945652173913],[530.570652173913,518.9945652173913],[565.2989130434783,567.2282608695652],[600.0271739130435,613.5326086956521],[621.25,623.1793478260869],[696.4945652173913,522.8532608695652],[762.0923913043478,437.9619565217391],[769.8097826086956,422.52717391304344]],"H41":[[148.55978260869566,468.83152173913044],[154.3478260869565,532.5],[173.6413043478261,559.5108695652174],[181.3586956521739,561.4402173913044],[219.94565217391303,515.1358695652174],[296.3478260869565,409.02173913043475],[328.7608695652174,370.4347826086956],[341.4945652173913,391.6576086956522],[397.445652173913,484.26630434782606],[424.45652173913044,510.89130434782606],[442.9782608695652,486.195652173913],[493.9130434782609,398.2173913043478],[515.1358695652174,391.6576086956522],[565.2989130434783,476.54891304347825],[612.7608695652174,524.7826086956521],[625.1086956521739,524.7826086956521],[648.2608695652174,501.6304347826087],[677.2010869565217,428.3152173913043],[708.070652173913,382.0108695652174]],"H42":[[109.97282608695652,592.3097826086956],[109.97282608695652,642.4728260869565],[113.83152173913044,673.3423913043478],[138.91304347826087,668.3260869565217],[179.42934782608694,636.6847826086956],[272.0380434782609,546.0054347826086],[320.27173913043475,511.27717391304344],[331.8478260869565,544.8478260869565],[351.14130434782606,613.5326086956521],[368.5054347826087,636.6847826086956],[391.6576086956522,600.0271739130435],[453.39673913043475,536.3586956521739],[468.83152173913044,546.0054347826086],[487.73913043478257,594.2391304347826],[509.3478260869565,617.391304347826],[524.7826086956521,622.0217391304348],[536.3586956521739,623.1793478260869],[576.875,605.8152173913044],[625.1086956521739,547.9347826086956]],"H43":[[192.93478260869566,518.6086956521739],[196.79347826086956,553.7228260869565],[216.08695652173913,618.9347826086956],[233.45108695652172,646.3315217391304],[241.16847826086956,652.1195652173913],[260.4619565217391,652.1195652173913],[322.20108695652175,603.8858695652174],[370.4347826086956,535.5869565217391],[382.7826086956522,501.6304347826087],[405.1630434782609,546.0054347826086],[432.17391304347825,601.9565217391304],[449.5380434782609,627.0380434782609],[457.2554347826087,636.6847826086956],[474.6195652173913,598.0978260869565],[497.77173913043475,544.0760869565217],[512.4347826086956,509.3478260869565],[532.5,506.2608695652174],[551.7934782608695,546.0054347826086],[567.2282608695652,584.5923913043478],[595.7826086956521,640.5434782608695],[611.6032608695652,654.0489130434783],[619.320652173913,654.0489130434783],[638.6141304347826,650.1902173913044],[669.4836956521739,584.5923913043478],[704.2119565217391,518.9945652173913],[719.6467391304348,476.54891304347825]],"H44":[[200.65217391304347,501.6304347826087],[200.65217391304347,589.6086956521739],[212.22826086956522,636.6847826086956],[239.2391304347826,634.3695652173913],[287.0869565217391,578.8043478260869],[353.070652173913,491.9836956521739],[370.4347826086956,466.1304347826087],[383.9402173913043,474.6195652173913],[401.30434782608694,543.3043478260869],[410.5652173913043,586.5217391304348],[416.73913043478257,605.0434782608695],[422.52717391304344,607.7445652173913],[445.67934782608694,598.0978260869565],[474.6195652173913,553.7228260869565],[488.125,526.7119565217391],[498.54347826086956,547.9347826086956],[534.4293478260869,611.6032608695652],[565.2989130434783,638.6141304347826],[580.7336956521739,638.6141304347826],[609.6739130434783,594.2391304347826],[645.1739130434783,509.3478260869565],[650.1902173913044,453.39673913043475]],"H45":[[204.51086956521738,461.11413043478257],[216.08695652173913,517.0652173913044],[246.95652173913044,591.1521739130435],[267.02173913043475,617.391304347826],[273.9673913043478,611.6032608695652],[343.42391304347825,518.9945652173913],[414.8097826086956,437.9619565217391],[424.45652173913044,450.695652173913],[447.6086956521739,532.5],[461.11413043478257,561.4402173913044],[473.8478260869565,532.5],[503.17391304347825,470.7608695652174],[518.9945652173913,476.54891304347825],[557.5815217391304,542.1467391304348],[575.7173913043478,555.6521739130435],[590.3804347826086,549.8641304347826],[628.195652173913,493.9130434782609],[690.7065217391304,430.2445652173913],[715.7880434782609,407.0923913043478]],"H46":[[135.05434782608694,592.3097826086956],[135.05434782608694,634.7554347826086],[138.91304347826087,686.8478260869565],[146.6304347826087,699.195652173913],[185.2173913043478,655.9782608695652],[200.65217391304347,632.8260869565217],[210.29891304347825,661.766304347826],[231.52173913043478,717.7173913043478],[250.81521739130434,723.5054347826086],[300.9782608695652,652.891304347826],[320.27173913043475,627.0380434782609],[335.70652173913044,667.5543478260869],[358.8586956521739,708.070652173913],[366.57608695652175,721.5760869565217],[375.0652173913043,725.4347826086956],[393.5869565217391,719.2608695652174],[453.39673913043475,628.9673913043478],[478.4782608695652,566.4565217391304]],"H46":[[316.4130434782609,564.9130434782609],[316.4130434782609,595.7826086956521],[317.95652173913044,679.1304347826086],[353.070652173913,723.5054347826086],[362.7173913043478,714.6304347826086],[370.4347826086956,691.4782608695652],[401.30434782608694,642.0869565217391],[418.66847826086956,613.5326086956521],[443.75,657.9076086956521],[483.1086956521739,717.7173913043478],[497.77173913043475,719.6467391304348],[526.3260869565217,663.695652173913],[547.9347826086956,626.6521739130435],[549.8641304347826,621.25],[571.0869565217391,651.3478260869565],[603.5,710],[625.1086956521739,730.0652173913044],[632.8260869565217,728.5217391304348],[675.2717391304348,682.9891304347826],[692.6358695652174,644.4021739130435],[692.6358695652174,623.1793478260869]],"H46":[[264.32065217391306,613.5326086956521],[264.32065217391306,638.6141304347826],[271.65217391304344,694.5652173913044],[295.1902173913043,735.0815217391304],[312.55434782608694,752.445652173913],[331.8478260869565,730.0652173913044],[414.8097826086956,634.7554347826086],[439.89130434782606,634.3695652173913],[488.125,762.0923913043478],[534.4293478260869,827.6902173913044],[540.2173913043478,821.1304347826086],[552.5652173913044,764.0217391304348],[590.3804347826086,698.4239130434783],[611.2173913043478,686.8478260869565],[627.0380434782609,738.9402173913044],[673.3423913043478,806.4673913043478],[698.4239130434783,812.2554347826086],[727.3641304347826,762.0923913043478],[775.5978260869565,698.4239130434783]]}');
			this.gid = 0;
			this.dollarOne.removeGesture();
			for (var a in this.Records) this.gid++, this.dollarOne.addGesture(a, this.Records[a])
		},
		testGesture: function() {
			var a = Date.now();
			this.MatchGesture = this.dollarOne.recognize(this.Points);
			this.recognizeTime = Date.now() - a;
			this.MatchGesture || (this.MatchGesture = !1);
			switch (("" + this.MatchGesture).charAt(0)) {
			case "A":
				this.result = 1;
				this.callback(1);
				break;
			case "B":
				this.result = 2;
				this.callback(2);
				break;
			case "C":
				this.result = 3;
				this.callback(3);
				break;
			case "D":
				this.result = 4;
				this.callback(4);
				break;
			case "E":
				this.result = 5;
				this.callback(5);
				break;
			case "F":
				this.result = 6;
				this.callback(6);
				break;
			case "G":
				this.result = 7;
				this.callback(7);
				break;
			case "H":
				this.result = 8;
				this.callback(8);
				break;
			case "I":
				this.result = 9;
				this.callback(9);
				break;
			case "J":
				this.result = 10;
				this.callback(10);
				break;
			case "P":
				this.result = 2;
				this.callback(12);
				break;
			case "Q":
				this.result = 3;
				this.callback(11);
				break;
			case "R":
				this.result = 4;
				this.callback(13);
				break;
			default:
				this.result = !1
			}
		},
		initTouchEvent: function(a, b) {
			var c = this;
			a = a || document;
			var d = this,
				e = [],
				g = !1;
			a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(g) {
				0 <= c.context.gc.getChildIndex(c.context.gc.enmey.teachPanel) && (c.context.gc.removeChild(c.context.gc.enmey.teachPanel), c.context.gc.render.resume(), egret.localStorage.setItem("IS_FIRST_TIME_PLAY", "1"));
				KeilingGame.GC.isGameStart && !KeilingGame.GC.isOver && (d.TouchInfo.touched = !0, d.TouchInfo.x = g.stageX, d.TouchInfo.y = g.stageY, 0 > a.getChildIndex(b) && (b = new egret.Shape, a.addChild(b)), b.graphics.clear(), b.alpha = 1, b.graphics.lineStyle(12, 86888), b.graphics.moveTo(g.stageX, g.stageY), g.stopImmediatePropagation(), e.push([g.stageX, g.stageY]))
			}, this);
			a.addEventListener(egret.TouchEvent.TOUCH_MOVE, function(a) {
				g = !0;
				KeilingGame.GC.isGameStart && !KeilingGame.GC.isOver && Math.sqrt((d.TouchInfo.x - a.stageX) * (d.TouchInfo.x - a.stageX) + (d.TouchInfo.y - a.stageY) * (d.TouchInfo.y - a.stageY)) && (d.context.gc.hero.magician.play(-1), d.update(), e.push([a.stageX, a.stageY]), d.TouchInfo.touched && (d.TouchInfo.x = a.stageX, d.TouchInfo.y = a.stageY), b.alpha = 1, b.graphics.lineTo(a.stageX, a.stageY), b.graphics.moveTo(a.stageX, a.stageY), b.graphics.endFill(), a.stopImmediatePropagation())
			}, this);
			a.addEventListener(egret.TouchEvent.TOUCH_END, function(k) {
				if (g && (KeilingGame.GC.isGameStart && !KeilingGame.GC.isOver && (d.context.gc.hero.magician.stop(), d.TouchInfo.touched = !1, k.stopImmediatePropagation(), d.testGesture()), 0 <= a.getChildIndex(b))) {
					("" + c.MatchGesture).charAt(0);
					b.graphics.clear();
					b.graphics.lineStyle(12, 86888);
					switch (d.result) {
					case 1:
						b.graphics.lineStyle(12, 16002187);
						break;
					case 2:
					case 6:
						b.graphics.lineStyle(12, 16636160);
						break;
					case 3:
						b.graphics.lineStyle(12, 9340755);
						break;
					case 4:
						b.graphics.lineStyle(12, 14758458);
						break;
					case 5:
						b.graphics.lineStyle(12, 9037805);
						break;
					case 7:
						b.graphics.lineStyle(12, 3522727);
						break;
					case 8:
					case 9:
					case 10:
						b.graphics.lineStyle(12, 11952350)
					}
					k = 0;
					for (var l = e.length; k < l; k++) k + 1 < l && (b.graphics.moveTo(e[k][0], e[k][1]), b.graphics.lineTo(e[k + 1][0], e[k + 1][1]), b.graphics.endFill());
					egret.Tween.get(b).to({
						alpha: 0
					}, 200);
					d.reset();
					e = []
				}
			}, this)
		}
	}
})(Dollar || (Dollar = {}));
var Test = function() {
		return function(d) {
			this.s = d
		}
	}();
Test.prototype.__class__ = "Test";
var Main = function(d) {
		function g() {
			d.call(this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(g, d);
		var e = g.prototype;
		e.onAddToStage = function(c) {
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("", "/")
		};
		e.onConfigComplete = function(c) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.loadGroup("preload")
		};
		e.onResourceLoadComplete = function(c) {
			// window.loading.finish();
			// window.meiriq_game.cb_finishload();
			game_config.loaded();
			"preload" == c.groupName && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), this.createGameScene())
		};
		e.createGameScene = function() {
			var c = this;
			this.removeChildren();
			window.gameContext = this;
			window.myGameName = "gameName";
			window.sw = this.stage.stageWidth;
			window.sh = this.stage.stageHeight;
			window.myStage = this.stage;
			this.gc = new KeilingGame.GC;
			this.addChild(this.gc);
			Dollar.init(this);
			new Dollar.easyDollarOne(this.stage, this.draw, this, function(b) {
				c.gc.enmey.isInFire || c.gc.enmey.myHitTest(b)
			})
		};
		return g
	}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";

