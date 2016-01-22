angular.module('starter.services', [])
.factory('Trend', function() {

  var stocks = [{
    id: 0,
    name: '株式会社野村総合研究所',
    image: 'img/ben.png',
    price: 4260.00,
    rate: 5,
    holders: 100,
    wants: 1000,
    comments: [
      {
        date: '201701051200',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 5,
        comment: 'I like this company!'
      },
      {
        date: '201701051300',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 5,
        comment: 'me too!'
      }
    ]
  }, {
    id: 1,
    name: 'コカ・コーライーストジャパン（株）',
    image: 'img/ben.png',
    price: 1832.00,
    rate: 4,
    holders: 100,
    wants: 1000,
    comments: [
      {
        date: '201701051200',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 5,
        comment: 'I like Coke!'
      },
      {
        date: '201701051300',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 3,
        comment: 'I hate...'
      }
    ]
  }, {
    id: 2,
    name: '森永製菓（株）',
    image: 'img/ben.png',
    price: 635.00,
    rate: 4,
    holders: 100,
    wants: 1000,
    comments: [
      {
        date: '201701051200',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 5,
        comment: 'I like this company!'
      },
      {
        date: '201701051300',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 5,
        comment: 'me too!'
      }
    ]
  }, {
    id: 3,
    name: '東芝',
    image: 'img/ben.png',
    price: 236.30,
    rate: 3,
    holders: 100,
    wants: 1000,
    comments: [
      {
        date: '201701051200',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 2,
        comment: 'I hate this company!'
      },
      {
        date: '201701051300',
        user: {
          name: "Atsushi Hayashida",
          image: "img/ben.png"
        },
        rate: 4,
        comment: 'Japanese big company is phenix'
      }
    ]
  }];

  var poketes = [{
    id: 0,
    price: 10000,
    password: "pass"
  }, {
    id: 1,
    price: 20000,
    password: "pass"
  }, {
    id: 2,
    price: 30000,
    password: "pass"
  }];

  return {
    all: function() {
      return stocks;
    },
    get: function(id) {
      return stocks.filter(function(stock) { return stock.id + '' === id; })[0];
    }
  };
})



/*
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
*/
;
