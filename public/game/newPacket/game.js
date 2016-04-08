/*
    实现类继承功能
    调用方式
    _extends(child,parent)
*/
__hasProp = {}.hasOwnProperty,
__extends = function(child, parent) {
    for (var key in parent) {
        if (__hasProp.call(parent, key))
            child[key] = parent[key]; 
    } 
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}

/*
    公共类
*/
var Component = (function(){
    
    function Component(){
        console.log("Component create");
    };

    Component.prototype.randomNum = function(upperLimit){
        if (this.isNum(upperLimit))
            return Math.ceil(Math.random() * upperLimit);
    }

    Component.prototype.isNum = function(arg){
        return !isNaN(arg * 1);
    }

    return Component;
})()

/*
    运动工厂
*/
var MoveFactory = (function(_super){
    
    __extends(MoveFactory, _super);

    function MoveFactory(w, h, target, targetName, speed, point){
        console.log("MoveFactory create");
        this.setStageW(w)
            .setStageH(h)
            .setTarget(target)
            .setTargetName(targetName)
            .setSpeed(speed)
            // .setObjectPos(point);
    };
    //设置宽度
    MoveFactory.prototype.setStageW = function(w){
        if (this.isNum(w)) {
            this.stageW = w;
        }
        return this;
    };
    //设置高度
    MoveFactory.prototype.setStageH = function(h){
        if (this.isNum(h)) {
            this.stageH = h;
        }
        return this;
    };
    //设置作用对象
    MoveFactory.prototype.setTarget = function(target){
        if (target) {
            this.target = target;
        }
        return this;
    };
    //设置作用对象的名字
    MoveFactory.prototype.setTargetName = function(targetName){
        if (targetName) {
            this.targetName = targetName;
        }
        return this;
    };
    //设置作用对象的运动速度
    MoveFactory.prototype.setSpeed = function(speed){
        if (this.isNum(speed)) {
            this.speed = speed;
        }
        return this;
    };
    //设置作用对象的位置
    MoveFactory.prototype.setObjectPos = function(point){
        this.setHtmlX(point.x);
        this.setHtmlY(point.y);
        return this;
    };
    //设置html标签的x位置,表现上也就是绝对定位的left
    MoveFactory.prototype.setHtmlX = function(x){
        if (this.target && this.isNum(x)){
            this.target.style.left = x * 1;
        }
    }
    //设置html标签的y位置,表现上也就是绝对定位的top
    MoveFactory.prototype.setHtmlY = function(y){
        if (this.target && this.isNum(y)){
            this.target.style.top = y * 1;
        }
    }
    //设置边界
    MoveFactory.prototype.setBorder = function(offsetX, offsetY){
        this.isNum(offsetX) && (
            this.minX = 0 - offsetX,
            this.maxX = this.stageW + offsetX
        )
        this.isNum(offsetY) && (
            this.minY = 0 - offsetY,
            this.maxY = this.stageH + offsetY
        ) 
        return this;
    };
    //判断是否越界
    MoveFactory.prototype.bordered = function(point, offsetX, offsetY){
        var x,y;
        this.setBorder(offsetX,offsetY);
        x = point.x,
        y = point.y;
        if (x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY)
            return false;
        return true;
    };
    //获取起点和结束点
    MoveFactory.prototype.getPoint = function(){
        var startIndex, endIndex;
        startIndex = this.randomNum(4);
        while(endIndex = this.randomNum(4)){
            if (startIndex != endIndex) {
                this.startIndex = startIndex;
                this.endIndex = endIndex;
                return this;
            }
        }
    }
    //获取真实的起点和结束点
    MoveFactory.prototype.getRealPoint = function(index){
        if (this.isNum(index)){
            var result, w, h;
            index *= 1;
            result = {
                x: 0,
                y: 0
            };
            this.target && (
                w = this.target.width,
                h = this.target.height
            );
            if (1 == index){
                result.x = this.randomNum(this.stageW);
                result.y = 0;
            }
            else if (2 == index){
                result.x = this.stageW;
                result.y = this.randomNum(this.stageH);
            }
            else if (3 == index){
                result.x = this.randomNum(this.stageW);
                result.y = this.stageH;
            }
            else if (4 == index){
                result.x = 0;
                result.y = this.randomNum(this.stageH);
            }
            result = this.justifyRealPoint(index,result);
            return result;
        }
    }
    //根据需求调整起点和结束点
    MoveFactory.prototype.justifyRealPoint = function(index,result){
        if (this.isNum(index) && this.target){
            var w,h;
            index *= 1;
            w = this.target.width,
            h = this.target.height;
            if (1 == index){
                result.y -= h;
            }
            else if (4 == index){
                result.x -= w;
            }
        }
        return result;
    }
    return MoveFactory;
})(Component)

var LinearMove = (function(_super){
    
    __extends(LinearMove, _super);

    function LinearMove(w, h, target, targetName, speed, point){
        console.log("LinearMove create");
        LinearMove.__super__.constructor.call(this, w, h, target, targetName, speed, point);
    };
    //计算线性运动所需参数
    //@startPoint 起点
    //@endPoint 结束点
    //@k 斜率
    LinearMove.prototype.calParamter = function(){
        this.twoPoint();
        this.startPoint = this.realPoint(this.startIndex);
        this.endPoint = this.realPoint(this.endIndex);
        this.k = (this.endPoint.y - this.startPoint.y) /
                    (this.endPoint.x - this.startPoint.x);
        return this;
    }
    LinearMove.prototype.linearMove = function(){
        var xAccumulate, yAccumulate, xDis, yDis, point, crossBorder;
        xDis = this.startPoint.x - this.endPoint.x;
        yDis = this.startPoint.y - this.endPoint.y;

        xDis > 0 ? xAccumulate = -1 : xAccumulate = 1;
        yDis > 0 ? yAccumulate = -1 : yAccumulate = 1;

        if (this.target) {
            if (xDis >= yDis){
                this.target.x += xAccumulate * this.speed;
                this.target.y += xAccumulate * this.k * this.speed;
            }
            else if (xDis < yDis){
                this.target.x += yAccumulate / this.k * this.speed;
                this.target.y += yAccumulate * this.speed;
            }
            point = {
                x: this.target.x,
                y: this.target.y
            }
            crossBorder = this.crossBorder(point, this.target.width, this.target.height);
            return crossBorder;
        }
    }
    return LinearMove;
})(MoveFactory)

/*
    层
*/
var ViewLayer = (function(_super){
    
    __extends(ViewLayer, _super);

    function Layer(){
        console.log("Layer create");
    };



    return Layer;
})(Component)

/*
    主函数
*/
var Main = (function(){
    
    function Main(){
        console.log("Main create");
    };

    Main.prototype.main = function(){
        var object = document.querySelector(".object");
        var test = new LinearMove(313,592,object,"1",1,{x:100,y:100})
    }

    return Main;
})()

main = new Main();
main.main()