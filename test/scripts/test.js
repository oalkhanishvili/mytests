var Car = function(options){
    this.color = options.color || 'Red';
    this.doors = options.doors || 4;
    this.condition = options.condition || 'Used';
    // console.log(options);
    options.events.forEach(function(x){
      var el = document.querySelectorAll(x.target)[0];
      el.addEventListener(x.event, function(){
        alert('test');
      });
    });

};

var Truck = function(options){
    this.color = options.color || 'Blue';
    this.doors = options.doors || 6;
    this.condition = options.condition || 'New';
};

var factory = function(){
    factory.prototype.vehicleClass = Car;

    factory.prototype.createState = function(options){
        if ( options.vehicleType == 'car' ){
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }
     return new this.vehicleClass(options);
    };
};

var carFactory = new factory();

var car = carFactory.createState({
    vehicleType: 'car',
    events: [
      {event: 'click', target: '.click'},
    ]
});
module.exports = function(){
    return carFactory;
}();
// console.log(carFactory);
