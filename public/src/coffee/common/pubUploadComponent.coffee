fileValidate = require "./fileValidate.coffee"
Components = require('./pubComponent.coffee').Components

#上传图片插件
class uploadPic extends Components
    #id:input标签id
    #url:提交url
    constructor: (selector, url, way, key)->
        super selector
        if typeof selector is 'string'
            @input = document.querySelector selector
        else
            @input = selector
        @url = url
        @bindInputChange()
        @success = null
        @error = null
        @way = way || "PIC"
        @key = key || "unique"
    # 设置上传成功回调
    setSuccessCb: (successCb) ->
        if successCb and typeof successCb is 'function'
            @success = successCb

    # 设置上传失败回调
    setErrorCb: (errorCb) ->
        if errorCb and typeof errorCb is 'function'
            @error = errorCb

    # 重设提交url
    setUrl:(url)->
        if url
            @url = url

    # 重设way
    setWay:(way)->
        if way
            @way = way

    bindInputChange:()->
        @file = {}
        that = @
        @input.addEventListener 'change', (evt)=>
            @target = evt.target.getAttribute("data-target")
            if @target is @key
                @file = @input.files[0]
                targetFile = evt.target.files[0]
                @upload @url, targetFile, @success, @error
                    
    #上传图片
    upload:(url, targetFile, successCallback,errorCallback)->
        flag = true
        fileKey = "s"
        formData = new FormData()
        formData.append 'file', @file
        name = @file.name
        if "PIC" is @way
            formData.append 'fileKey', (fileKey + Math.random()).replace(/\./g, "")

        if "FILE" is @way
            if not name.match /\.xlsx$/
                errorCallback("文件格式错误")
                flag = false
        else if "PIC" is @way
            if not fileValidate.isPicture(@file)
                errorCallback("文件格式错误")
                flag = false
        if flag
            uploadProcess = $.ajax
                url: url
                type: 'POST'
                data: formData
                dataType: 'json'
                processData: false
                contentType: false
                success: (data) ->
                    data.targetFile = targetFile
                    successCallback data
                error: errorCallback
                complete: =>
                    @publish 'uploadStatus:uploadFinished', uploadProcess

            @publish 'uploadStatus:uploading', uploadProcess

module.exports = uploadPic