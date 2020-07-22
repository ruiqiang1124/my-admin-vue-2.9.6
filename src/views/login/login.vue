<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <div class="login-form-item">
                    <span class="form-icon">
                        <i class="el-icon-user-solid"></i>
                    </span>
                    <el-input
                        v-model="loginForm.username"
                        placeholder="请输入账号"
                        name="username"
                        type="text"
                        tabindex="1"
                        autocomplete="on"
                    />
                </div>
            </el-form-item>
            <el-form-item prop="password">
                <div class="login-form-item">
                    <span class="form-icon">
                        <i class="el-icon-unlock"></i>
                    </span>
                    <el-input
                            v-model="loginForm.password"
                            placeholder="请输入密码"
                            name="password"
                            type="password"
                            tabindex="1"
                            autocomplete="on"
                    />
                </div>
            </el-form-item>
            <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '111111'
                },
                loginRules: {
                    username: [{ required: true, trigger: 'blur', message:'请输入账号' }],
                    password: [{ required: true, trigger: 'blur', message:'请输入密码' }]
                },
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if(valid) {
                        localStorage.setItem("token", '111111')
                         this.$router.push({ path: '/' })
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
    .login-container {
        width: 100%;
        min-height: 100%;
        background: #2d3a4b;
        overflow: hidden;
        
    }


    .el-input__inner {
        background-color: transparent !important;
        border: none;
        color: #fff;
    }
  

    .login-form {
        width: 520px;
        position: absolute;
        left: 50%;
        top: 50%;
        overflow: hidden;
        transform: translate(-50%, -50%);
        padding: 0 35px;
        box-sizing: border-box;
    }

    .title-container {
        margin-bottom: 40px;
        text-align: center;
    }

    .title {
        font-size: 26px;
        color: #fff;
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
    .form-icon {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    .login-form-item {
        display: flex;
        align-items: center;
    }
    
</style>
