// export default class Login{
//     constructor(formClass){
//         this.form = document.querySelector(formClass)
//         this.errorEmail = [];
//         this.errorSenha = [];
//     }

//     init(){
//         this.events();
//     }

//     events(){
//         if(!this.form) return
//         this.form.addEventListener('submit', e=> {
//             e.preventDefault();
//             this.validate(e)
//         })
//     }

//     validate(e){
//         const el = e.target;

//         const emailInput = el.querySelector('input[name="email"]')
//         const senhaInput = el.querySelector('input[name="password"]')

//         let error = false

//         if(!validator.isEmail(emailInput)){ 
//             this.errorEmail.push('E-mail inválido')
//             error = true
//         };

//         if(senhaInput.value.length < 3 || senhaInput.value.length > 50){
//             this.errorSenha.push('A senha precisa ter entre 3 e 50 caracteres.');
//             error = true;
//         }

//         if(!error) el.submit();
//     }

// }