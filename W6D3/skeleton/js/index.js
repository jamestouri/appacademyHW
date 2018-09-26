console.log("Hello from the JavaScript console!");

// Your AJAX request here

// Add another console log here, outside your AJAX request


$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=d9a4b04058ba79beaed19d0f345714e3',
  success(data) {
    console.log(data['main']);
  },
  error() {
    console.log('error');
  },
});

console.log('ajax');
