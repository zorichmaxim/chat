/**
 * Created by 123 on 20.10.2016.
 */


angular.module('cbsChat')
    .controller('chatCtrl',['ChatService','$firebaseAuth',chatCtrl]);

//сервис firebaseAuth - тоже документация
function chatCtrl(ChatService,$firebaseAuth){
var vm = this;
var auth = $firebaseAuth();

    vm.test= 'words';


    vm.messages = ChatService.getMessages();
    vm.showMessages = ChatService.showMessages();

    vm.login = function(){
        auth.$signInWithPopup("google");
    };

    vm.logout = function(){
        auth.$signOut();
    };

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
        console.log(vm.author);      //проверка работы привязок переменных
    });

    vm.sendMessage = function(){
          if(vm.author != null){
        var message = {
            authorName: vm.author.displayName,
            authorId: vm.author.uid,
            authorPhoto: vm.author.photoURL,
            text: vm.newMessage
        };
         }
        else {
              alert('Необходима регистрация')
          }


        if(vm.newMessage !== '') {
            ChatService.sendMessage(message);
            vm.newMessage = '';
        }
        else {
            alert('Нельзя вводить пустое поле ')
        }



    }
}