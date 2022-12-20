<template>
    <div class="background">
        <form @submit.prevent="handleLogin">
            <h3>Zaloguj się</h3>

            <label for="nickname">Nazwa Użytkownika</label>
            <input type="text" placeholder="Nazwa Użytkownika" v-model="nickname" id="nickname">

            <label for="password">Hasło</label>
            <input type="password" placeholder="Password" v-model="password" id="password">
            <button class="notregistered" @click="toRegister">Nie masz konta? Zarejestruj się</button>
            <button class="login" @click="handleLogin">Zaloguj</button>
            {{ error }}
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default({
    name : 'MyLogin',
    data(){
        return {
            nickname: '',
            password: '',

            error: '',
        }
    },
    methods: {
        toRegister(){
            this.$router.push('/register')
        },
        async handleLogin(){
            const user = {
                nickname : this.nickname,
                password : this.password 
            };
            axios.post('http://localhost:5000/login', user)
                .then(res => {
                    if(res.status === 200) {
                        this.error = '';
                        localStorage.setItem('token', res.data.token);
                        this.$router.push('/')
                   }
                }, err => {
                    console.log(err.response);
                    this.error = err.response.user.error
                })
        }
   }
});
</script>

<style>
:root {
  --red: #cc0000;
  --green: #09a716;
  --blue: #366799;
  --orange: #f1ab12;
  --gray: #313131;
  --gray2: #383838;
  --darkgray: #383838;
  --background: #282828;
  --bluenav: #44c7ef;
  --bluebordernav: #29b0d9;
}
*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.background{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #e08609;
}
form{
    height: 470px;
    width: 400px;
    max-width: 400px;
    background-color: #cc7906;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 40px;
}
@media screen and (max-width: 470px) {
    form{
        width: 320px;
    }
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
.login{
    margin-top: 20px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
.notregistered{
    margin-top: 10px;
    width: 100%;
    color: #080710;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
</style>