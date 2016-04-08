##
# 登陆组件
# @Author cqf
# @Update 2016-02-16
##
com = require "./pubComponent.coffee"

class loginBox extends com.Components
    
    constructor: (selector) ->
        super(selector)
        @init()
    init: () ->
        @render()
            .submitEventBind()
            .loginEventSubscribe()
            .closeEventBind()
            .close()

        @loginForm = 
            username: ""
            password: ""
    render: () ->
        loginBox = document.createElement "div"
        loginBox.setAttribute "class", "modelBox normalTransition"
        loginBox.innerHTML = """
            <div class="loginBox borderBox">
                <div class='closeBtn'>   
                </div>
                <div class="borderBox">
                    <h1 class="title">
                        欢迎使用CQF
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
                    <button class="login transform pointer" type="button">
                        登陆
                    </button>
                </div>
                <div class="borderBox">
                    <hr class="lineGrandient">
                    <a class="toRegister pointer">
                        免费注册→
                    </a>
                </div>
        """
        @contain = loginBox
        document.getElementsByTagName("body")[0].appendChild loginBox
        return @
    loginRequest: () ->
        form = 
            username: @loginForm.username.value
            password: @loginForm.password.value
        $.ajax
            type: "post"
            url: "/user/login"
            dataType: "json"
            data: form
            success: (data) =>
                console.log data
                status = data.status
                msg = data.msg
                if "success" is status
                    @publish("loginBox.login.success")
                else if "failed" is status
                    @publish("loginBox.login.failed",msg)
            error: (err) =>
                @publish("loginBox.login.failed")
                console.log err
    submitEventBind: () ->
        submit = $(".loginBox .login")
        $(submit).on("click", ()=>
            if @validLoginValue()
                @loginRequest()
            )
        return @
    loginEventSubscribe: () ->
        @subscribe "loginBox.login.success", () =>
            location.href = "/game"
        @subscribe "loginBox.login.failed", (publisher,type,msg) =>
            u = ""
            p = ""
            if RegExp("username").test(msg)
                u = "账号不存在！"
            if RegExp("password").test(msg)
                p = "密码错误！"
            err = {username:u,password:p}
            @styleValid(err)
        return @
    validLoginValue: () ->
        @styleValid()
        return @dataValid()
    styleValid: (err) ->
        all = $(".loginBox .formValidArea")
        all.map (i,input) =>
            n = input.getAttribute("name")
            if err
                r = @[n](input,err[n])
            else
                r = @[n](input)
            @loginForm[n] = r
        return @
    dataValid: () ->
        u = @loginForm.username.result
        p = @loginForm.password.result
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
        close = $(".loginBox .closeBtn")
        $(close).on("click", ()=>
            @close()
            )
        return @
    close: () ->
        @addClass(@contain, "fadeOut")
        @removeClass(@contain, "fadeIn")
        @publish "loginBox.close"
    open: () ->
        @addClass(@contain, "fadeIn")
        @removeClass(@contain, "fadeOut")
        @publish "loginBox.open"
    eventBind: () ->
        $(document).on "click", ".toLogin", () =>
            @close()
module.exports = loginBox