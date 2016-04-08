##
# 注册组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"

class registerBox extends com.Components
    
    constructor: (selector) ->
        super(selector)
        @init()
    init: () ->
        @render()
            .submitEventBind()
            .registerEventSubscribe()
            .closeEventBind()
            .close()

        @registerForm =
            username: ""
            password: ""
    render: () ->
        registerBox = document.createElement "div"
        registerBox.setAttribute "class", "modelBox normalTransition"
        registerBox.innerHTML = """
            <div class="registerBox borderBox">
                <div class='closeBtn'>   
                </div>
                <div class="borderBox">
                    <h1 class="title">
                        欢迎注册CQF
                    </h1>
                </div>
                <div class="borderBox formValidGroup">
                    <input class="username borderBox formValidArea"
                        name="username" title="用户名"
                        placeholder="用户名" type="text">
                </div>
                <div class="borderBox formValidGroup">
                    <input class="password borderBox formValidArea"
                        name="password" title="密码"
                        placeholder="密码" type="password">
                </div>
                <div class="borderBox">
                    <button class="register transform pointer" type="button">
                        注册
                    </button>
                </div>
                <div class="borderBox">
                    <hr class="lineGrandient">
                    <a class="toLogin pointer">
                        直接登陆→
                    </a>
                </div>
        """
        @contain = registerBox
        document.getElementsByTagName("body")[0].appendChild registerBox
        return @
    
    registerRequest: () ->
        form = 
            username: @registerForm.username.value
            password: @registerForm.password.value
        $.ajax
            type: "post"
            url: "/user/register"
            dataType: "json"
            data: form
            success: (data) =>
                console.log data
                status = data.status
                msg = data.msg
                if "success" is status
                    @publish("registerBox.register.success")
                else if "failed" is status
                    @publish("registerBox.register.failed", msg)
            error: (err) =>
                @publish("registerBox.register.failed")
                console.log err
    submitEventBind: () ->
        submit = $(".registerBox .register")
        $(submit).on("click", ()=>
            if @validRegisterValue()
                @registerRequest()
            )
        return @
    registerEventSubscribe: () ->
        @subscribe "registerBox.register.success", () =>
            location.href = "/game"
        @subscribe "registerBox.register.failed", (publisher,type,msg) =>
            u = ""
            p = ""
            if RegExp("username").test(msg)
                u = "账号已经存在！"
            if RegExp("password").test(msg)
                p = "密码不合法！"
            err = {username:u,password:p}
            @styleValid(err)
        return @
    validRegisterValue: () ->
        @styleValid()
        return @dataValid()
    styleValid: (err) ->
        all = $(".registerBox .formValidArea")
        all.map (i,input) =>
            n = input.getAttribute("name")
            if err
                r = @[n](input,err[n])
            else
                r = @[n](input)
            @registerForm[n] = r
        return @
    dataValid: () ->
        u = @registerForm.username.result
        p = @registerForm.password.result
        return u and p
    username: (t,err) ->
        v = $(t).val()
        if not v
            r = false
            mes = "帐号不能为空!!!"
        else if v
            r = true
            mes = ""
            if err
                mes = err
        t.parentNode.setAttribute("data-attr", mes)
        return {result:r,msg:mes,value:v}
    password: (t,err) ->
        v = $(t).val()
        if not v
            r = false
            mes = "密码不能为空!!!"
        else if v
            r = true
            mes = ""
            if err
                mes = err
        t.parentNode.setAttribute("data-attr", mes)
        return {result:r,msg:mes,value:v}
    closeEventBind: () ->
        close = $(".registerBox .closeBtn")
        $(close).on("click", ()=>

            @close()
            )
        return @
    close: () ->
        @addClass(@contain, "fadeOut")
        @removeClass(@contain, "fadeIn")
        @publish "registerBox.close"
    open: () ->
        @addClass(@contain, "fadeIn")
        @removeClass(@contain, "fadeOut")
        @publish "registerBox.open"
    eventBind: () ->
        $(document).on "click", ".toLogin", () =>
            @publish "loginBox.open"
module.exports = registerBox