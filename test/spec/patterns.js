

//  Constructor with prototype

var Car = function ( model, year, kilometer ){
  this.model     = model;
  this.year      = year;
  this.kllometer = kilometer;
};

Car.prototype.toString = function(){
  console.log(
    'Constructor with prototype\n',
    this.model + ' has done:' + this.kilometer + ' since:' + this.year
  );
};

var bmw = new Car('X5', '2002', '10000');
bmw.toString();

// Module
/*
 უპირატესობები:
 ობიექტზე ორიენტირებულს გავს. private public მეთოდები
 უარყოფითი:
 როცა ვცვლით private ან public მაშინ უნდა შეიცვალოს ყველა იმ კომპონენტში სადაც გამოყენებული გვაქვს
*/
var basketModule = function(){
  var basket = [];

  var _addDiscount = function(amount){
    return Math.floor(amount + (5/amount)*100);
  };

  /*
  var module = {};
  module.addItem: function () {};
  ...
  return module;

  */

  return {
    addItems: function( items ){
      basket.push( items );
    },
    itemTotal: function(){
      return basket.length;
    },
    countTotal: function(){
      var items = this.itemTotal(), total = 0;
      while(items--){
        total += basket[items].price;
      }

      return _addDiscount(total);

    }

  };
}();

basketModule.addItems({
  item: 'candy',
  price: 20
});
basketModule.addItems({
  item: 'meat',
  price: 35
});
console.log('Module\n',basketModule.countTotal());


// Revealing module

var revealingModule = function(){
  var _name = 'Gio', _greeting = 'Hey there:';

  var _displayName = function(){
      console.log('Revealing Module\n', _greeting+_name);
  };

  var getName = function(){
    _displayName();
  };

  var setName = function(input){
    _name = input;
    getName();
  };

  return {
    set: setName,
    get: getName,
    name: _name
  };
}();

revealingModule.set('Oto');

//Singelton
/*
იქმება ერთი ინსტანსი სტატიკური მეთოდებით. კარგია როცა ერთი ობიექტის კოორდინაციისთვის მეორესთან სისტემაში
*/
var singeltonTester = function(){
  var singelton = function(options){
    options = options || {};
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  };

  var instance;
  var _static = {
    name: 'SingeltonTester',
    getInstance : function(options){
      if (instance === undefined){
        instance = new singelton(options);
      }

      return instance;
    }
  };

  return _static;
}();

var singelton = singeltonTester.getInstance({
  firstName: 'Oto',
  lastName: 'Alkhanishvili'
});
console.log(singelton);

(function(global){

  var mySingelton = function(options){
    if (mySingelton.prototype.instace){
      return mySingelton.prototype.instace;
    }

    mySingelton.prototype.instace = this;
    options = options || {};

    this.firstName = options.firstName;
    this.lastName = options.lastName;
  };

  var singelton = new mySingelton({
    firstName: 'Oto',
    lastName: 'Alkhanishvili'
  });
  global.result = singelton;
})(window);
console.log(window.result);

//Factory

var Car = function(options){
  this.doors = options.doors || 4;
  this.state = options.state || 'New';
  this.color = options.color || 'Red';
};
var Truck = function(options){
  this.state = options.state || 'Userd';
  this.wheelSize = options.wheelSize || 'Large';
  this.color = options.color || 'Blue';
};

var factory = function(){
  factory.prototype.vehicleClass = Car;

  factory.prototype.createVehicle = function(options){
    if (options.vehicleType == 'car'){
      this.vehicleClass = Car;
    }else{
      this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options);
  };
};

var carFactory = new factory();
var car = carFactory.createVehicle({
  vehicleType: 'truck'
});
console.log(car);
