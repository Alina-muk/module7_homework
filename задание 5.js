class ElectricalDevices {
    constructor(name, power, plugged){
    this.name = name;
    this.power = power;
    this.pluggedIn = plugged;
    }
    plugIn() {
    if (this.pluggedIn === 'off') {
      this.pluggedIn ='on';
      console.log(this.name + " is plugged in!")
    }  else {
         this.pluggedIn ='off';  
         console.log(this.name + " is not plugged in!")
    }
   }
  }
  
  
  class KithenDevices extends ElectricalDevices {
    constructor (name, power, plugged) {
    super(name, power, plugged);
    this.location = 'kitchen';
    }
  }
  
  class GuestroomDevices extends ElectricalDevices {
    constructor (brand, name, power, plugged) {
    super(name, power, plugged);
    this.location = 'guestroom';
    this.brand = brand;
    }
  }
  
  const tv = new GuestroomDevices ('Samsung', 'TV', 50, 'on');
  const kettle = new KithenDevices ('kettle', 1000, 'off');
  const lamp = new GuestroomDevices ('Xiaomi', 'lamp', 5, 'on');
  
  
  console.log(tv);
  console.log(lamp);
  console.log(kettle);
  tv.plugIn(); //выключили из розетки
  lamp.plugIn(); //выключили из розетки
  lamp.plugIn(); //включили в розетку
  kettle.plugIn(); //включили в розетку
  
  function powerSum(arr){
    let value = 0;
    arr.forEach((item) => {
      if (item.pluggedIn === 'on'){
        value += item.power
      }
    })
    console.log('Total power consumption of ' + value + ' watts');
  }
  
  powerSum([tv, lamp, kettle])
  
  