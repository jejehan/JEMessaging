angular.module('starter.chats', [])

/**
 * A simple example service that returns some data.
 */
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    { id: 0, 
      data:{
        name:'Zeihan',
        msg:'bla bla bla bla',
        pic:'none'
      } 
    },
    { id: 1, 
      data:{
        name:'Jejehan',
        msg:'hahahahahah bla bla bla',
        pic:'none'
      } 
    },
  ];

  return {
    all: function() {
      return chats;
    },
    get: function(chatsId) {
      // Simple index lookup
      return chats[chatsId];
    }
  }
});
