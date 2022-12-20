<template>
    <div class="background">
        <form @submit.prevent="handleSubmit">
            <h3>Zarejestruj się</h3>

            <div class="form-group">
                <label for="name">Imię</label>
                <input type="text" placeholder="Imię" v-model="first_name" id="name">
            </div>
            <div class="form-group">
                <label for="surname">Nazwisko</label>
                <input type="text" placeholder="Nazwisko" v-model="last_name" id="surname">
            </div>
            <div class="form-group">
                <label for="nickname">Nick</label>
                <input type="text" placeholder="Nazwa Użytkownika" v-model="nickname" id="nickname">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" placeholder="E-mail" v-model="email" id="email">
            </div>
            <div class="form-group">
                <label for="password">Hasło</label>
                <input type="password" placeholder="Password" v-model="password" id="password">
            </div>
            <div class="form-group">
                <button class="register" style="margin-top: 40px" @click="handleRegister">Zarejestruj</button>
            </div>
        </form> 
    </div>      
</template>

<script>
import axios from 'axios';
export default({
    data(){
        return {
            first_name: '',
            last_name: '',
            nickname: '',
            email: '',
            password: '',

            error: ''
        }
    },
    methods: {
        async handleRegister(){           
            const user = {
                first_name : this.first_name,
                last_name : this.last_name,
                nickname : this.nickname,
                email : this.email,
                password : this.password 
            };
            axios.post('http://localhost:5000/register', user)
                .then(res => {
                    console.log(res)
                    this.error = '';
                    this.$router.push('/login')
                }, err => {
                    console.log(err.response)
                    this.error = err.response.user.error
                })
            console.log(user);
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
    display: flex;
    flex-wrap: wrap;
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
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    padding-left: 57px;
}
@media screen and (max-width: 470px) {
    form h3{
        font-size: 25px;
        padding-left: 36px;
    }
}

label{
    display: block;
    margin-top: 18px;
    font-size: 16px;
    font-weight: 500;
    width: 50%;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
.register{
    margin-top: 36px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
@media screen and (max-width: 470px) {
    .register{
        font-size: 15px;
    }
}
.form-group{
    color: #333;
    width: 50%;
    padding: 0 8px;
    margin: 0 0 15px;
    display: inline-block;
}
.form-group:nth-child(4){ margin-bottom: 10px; }
.form-group label{
    font-size: 14px;
    font-weight: 600;
}
</style>