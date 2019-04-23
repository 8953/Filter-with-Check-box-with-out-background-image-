
var myApp = angular.module('myApp',[]);
 
function MyCtrl($scope, filterFilter) {
    $scope.useMakes = [];
    $scope.useMakes1 = [];
     $scope.useMakes2 = [];
    
     
    
    $scope.filterMakes = function () {
        return function (p) {
            for (var i in $scope.useMakes) {
                if (p.Species == $scope.group[i] && $scope.useMakes[i]) {
                    return true;
                }
            }
        };
    };
    $scope.filterMakes1 = function () {
        return function (p1) {
            for (var j in $scope.useMakes1) {
                if (p1.ranges == $scope.group1[j] && $scope.useMakes1[j]) {
                    return true;
                }
            }
        };
    };
    $scope.filterMakes2 = function () {
        return function (p) {
            for (var i in $scope.useMakes2) {
                if (p.show1 == $scope.group2[i] && $scope.useMakes2[i]) {
                    return true;
                }
            }
        };
    };
    

    
    $scope.names = [
        {name:'Princess Leia',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Kylo Ren',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship,Starfreighter'},
       {name:'Obi-Wan Kenobi',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode I',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff'},
        {name:'Luke Skywalker',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:' Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Han Solo',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:'Naboo Royal Cruiser,Naboo Star Skiff,Starfreighter'},
        {name:'Padme Amidala',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode IV',space:'Naboo Royal Cruiser,Naboo Star Skiff,Starfreighter'},
        {name:'Rey',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Starfreighter'},

        {name:'Count Dooku',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode II',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
      {name:'Lando Calrissian',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Qui-Gon Jinn',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',space:' Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Mace Windu',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Jango Fett',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode II'},
        {name:'Jyn Erso',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},

        {name:'Darth Vader',ranges:'Not between 30 BBY to 5 ABY',Species:'Other',show1:'Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
      {name:'Yoda',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode V',space:'Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Sheev Palpatine',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode IV',space:'Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Sabe',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode V',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Nute Gunray',ranges:'Not between 30 BBY to 5 ABY',Species:'Other',show1:'Episode IV',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
        {name:'Captain Panaka',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode V',space:'Naboo Royal Cruiser,Starfreighter'},


        {name:'Jar Jar Binks',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode V',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Admiral Ackbar',ranges:'Not between 30 BBY to 5 ABY',Species:'Other',show1:'Episode III',space:'Naboo Royal Cruiser, Naboo Royal Starship, Naboo Star Skiff,Starfreighter'},
       {name:'Kit Fisto',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode III',space:'Naboo Royal Starship, Naboo Star Skiff,Starfreighter'}
        ];
        $scope.select = function(item) {
    $scope.selectedItem = item;
};

}
 
 
var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });

var uniqueItems1 = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy1',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems1(collection, key);
        };
    });


var uniqueItems2 = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy2',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems2(collection, key);
        };
    });

