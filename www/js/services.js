angular.module('starter.services', [])
.factory('MenuService', function($q, $http) {
  var fetched = false;
  var menuUrl = 'http://hieuphan.com/wtf/json/fullmenu_04-04-15.json';
  // Might use a resource here that returns a JSON array

  var errorMenuData = [
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/breakfast.jpg",
    "name": "breakfast",
    "title": "Breakfast"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/lunch.jpg",
    "name": "lunch",
    "title": "Lunch"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/dinner.jpg",
    "name": "dinner",
    "title": "Dinner"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/foss.jpg",
    "name": "foss",
    "title": "Foss"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/dana.jpg",
    "name": "dana",
    "title": "Dana"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/bobs.jpg",
    "name": "bobs",
    "title": "Bobs"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/spa.jpg",
    "name": "spa",
    "title": "The Spa"
  },
  {
    "content": "<div class = 'error'> <h3>WTF?</h3> <p> Something has gone wrong. </p> <p> Are you connected to the interwebs? </p> <p> Try pulling down to refresh. </p> <p> Or just go to Foss ;-) </p></div>",
    "image": "img\/take4.jpg",
    "name": "take4",
    "title": "Take 4"
  }
];
  var menuData;

  var getMenuByName = function(menuData, menuName) {
      for (var i = 0; i < menuData.length; i++) {
        if (menuData[i].name == menuName) {
          return menuData[i];
        }
      }
  }

  var getMenu = function(menuName) {
    var deferred = $q.defer();
    if (menuData) {
      console.log("menuData already loaded");
      var result = getMenuByName(menuData, menuName);
      deferred.resolve(result);
      return deferred.promise;
    }
    else {
      // if menuData is not ready we load the data
      console.log("Fetching json data...")
      $http.get(menuUrl).then(function(resp) {
        console.log("Json data fetched...")
        console.log(resp.data);
        menuData = resp.data;
        var result = getMenuByName(menuData, menuName);
        deferred.resolve(result);
        return deferred.promise;
      }, function(err) {
        console.log("Error fetching json...");
        var result = getMenuByName(errorMenuData, menuName);
        deferred.resolve(result);
        return deferred.promise;
      });
    }
    // if everything fails, gotta do something elegant
    // not this!
    return deferred.promise;
  };

var loadData = function() {
  var deferred = $q.defer();
  $http.get(menuUrl).then(function(resp) {
      console.log("Json data fetched...")
      menuData = resp.data;
      deferred.resolve("data loaded");
    }, function(err) {
      console.log("Error!");
    });
  return deferred.promise;
}

  return {
    getMenu : getMenu,
    loadData: loadData
  }
});
