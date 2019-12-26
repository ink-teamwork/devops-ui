<template>
    <div class="login">
        <div class="title"></div>
        <div class="form">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="0">
                <FormItem prop="passwd">
                    <Input placeholder="请输入用户名" type="text" v-model="formCustom.passwd" class="input" size="large">
                        <Icon custom="icon user" slot="prefix"/>
                    </Input>
                </FormItem>
                <FormItem prop="passwdCheck">
                    <Input placeholder="请输入密码" type="password"
                           v-model="formCustom.passwdCheck" class="input" size="large">
                        <Icon custom="icon lock" slot="prefix"/>
                    </Input>
                </FormItem>
                <FormItem prop="passwdCheck">
                    <a class="forget">忘记密码?</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" class="submit" @click="handleSubmit('formCustom')" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    passwdCheck: [
                        {validator: validatePassCheck, trigger: 'blur'}
                    ],
                    age: [
                        {validator: validateAge, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        background: url("../assets/img/login/bg.png") no-repeat top;
        height: 100%;
        display: inline-block;
        width: 100%;
    }

    .login .title {
        height: 40px;
        margin: 280px 0 22px;
        background: url("../assets/img/login/bt.png") no-repeat top;
        background-size: contain;
    }

    .login .form {
        width: 500px;
        height: 330px;
        margin: 0 auto;
        border-radius: 15px;
        background: url("../assets/img/login/bg_dl.png") no-repeat bottom;
        background-position-y: -3px;
        background-size: 510px 340px;
        box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
        padding: 64px 32px 34px;
    }

    .login .form .forget {
        float: right;
    }

    .login .form .submit {
        font-size: 20px;
        height: 50px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: url("../assets/img/login/bg_dlan.png") no-repeat top;
    }

    .login .form .icon {
        top: 10px;
        position: relative;
        width: 30px;
        height: 30px;
    }

    .login .form .icon.user {
        background: url("../assets/img/login/zh.png") no-repeat top;
    }

    .login .form .icon.lock {
        background: url("../assets/img/login/mm.png") no-repeat top;
    }
</style>
