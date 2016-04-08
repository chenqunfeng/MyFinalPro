##
# 创建游戏组件
# @Author cqf
# @Update 2016-02-23
##
com = require "./pubComponent.coffee"
uploadPic = require "./pubUploadComponent.coffee"

class ExchangeEle extends com.Components
    constructor: (parent,data) ->
        super()
        @init(parent,data)
    init: (parent,data) ->
        @parent = parent
        @data = data
        @upload = new uploadPic("#uploadFile", "/uploadImg", "", @data.key_name)
        @upload.setSuccessCb (data) =>
            if @parent.key is @data.key_name
                that = @
                reader = new FileReader()
                reader.onload = ((thefile)->
                    (e)->
                        that.setBg(that.gameEleInner, @result)
                    )(data.targetFile)
                reader.readAsDataURL(data.targetFile)
                @publish("exchangeEle:uploaded",@data.key_name,data)
        @render()
    render: () ->
        # @param {string} type  资源类型
        # @param {string} title 资源标题
        # @param {string} value 资源数据
        type = @data.type
        title = @data.key_title
        value = @data.key_value
        
        div = document.createElement("div")
        div.setAttribute("class","gameEle")

        # if "text" is type
        #     h = """
        #         <div class="pointer gameEleInner #{type}">
        #             #{value}
        #         </div>
        #     """
        if "file" is type
            if value.indexOf("http://") == -1
                value = "/" + value
            h = """
                <div class="pointer gameEleInner #{type}"
                    style="background-image: url(#{value})">
                </div>
            """
            h = h + """
                <div class="gameEleTitle">
                    #{title}
                </div>
                <div class="exChange transform pointer" data-name=#{@data.key_name}></div>
            """
        # else if "color" is type
        #     h = """
        #         <div class="pointer gameEleInner #{type}"
        #             style="background-color: #{value}">
        #         </div>
        #     """
        # h = h + """
        #     <div class="gameEleTitle">
        #         #{title}
        #     </div>
        #     <div class="exChange transform"></div>
        # """
            div.innerHTML = h
            @parent.ele.appendChild(div)
            @contain = div
            @setSomeDom()
    setSomeDom: () ->
        @gameEleInner = @contain.querySelector(".gameEleInner")
        return @
    setBg: (node,value) ->
        if node and value
            node.style.backgroundImage = "url(" + value + ")"
        return @
module.exports = ExchangeEle