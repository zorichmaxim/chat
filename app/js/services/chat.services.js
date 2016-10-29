/**
 * Created by 123 on 20.10.2016.
 */
    angular.module('cbsChat')
        .factory('ChatService', ["$firebaseArray",chatService]);    
  
    function chatService($firebaseArray) {
        var messagesRef = firebase.database().ref().child("messages");
        var chat = {};
// разобрать смысл messagesRef - на сайте по firebase в документации
        chat.getMessages = function(){
            return $firebaseArray(messagesRef);
        };
        chat.showMessages = function(){
            return $firebaseArray(messagesRef.limitToLast(15));
        };
        chat.sendMessage = function(message){
            chat.getMessages().$add(message);
        };
        return chat
}
