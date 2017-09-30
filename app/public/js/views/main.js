$(function(){

  // toastr.info('ACS', 'Welcome to Another Crawling System', {
  //   closeButton: true,
  //   progressBar: true,
  // });

  // $('input[name="daterange"]').daterangepicker({
  //   opens: 'left',
  //   ranges: {
  //     'Today': [moment(), moment()],
  //     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  //     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //     'This Month': [moment().startOf('month'), moment().endOf('month')],
  //     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  //   }
  // });

  //convert Hex to RGBA
  function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
  }



    //Gauge JS
    var options = {
      lines: 12, // The number of lines to draw
      angle: 0.5, // The length of each line
      lineWidth: 0.08, // The line thickness
      pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.035, // The rotation offset
        color: '#000000' // Fill color
      },
      limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
      colorStart: $.brandInfo,   // Colors
      colorStart: $.brandInfo,    // just experiment with them
      strokeColor: '#d1d4d7',   // to see which ones work best for you
      generateGradient: true
    };
    var target1 = document.getElementById('gauge-1'); // your canvas element
    var gauge1 = new Donut(target1).setOptions(options); // create sexy gauge!
    gauge1.maxValue = 100; // set max gauge value
    gauge1.animationSpeed = 32; // set animation speed (32 is default value)
    gauge1.set(48); // set actual value

    var target2 = document.getElementById('gauge-2');
    var gauge2 = new Donut(target2).setOptions(options);
    gauge2.maxValue = 100;
    gauge2.animationSpeed = 32;
    gauge2.set(61);

    var target3 = document.getElementById('gauge-3');
    var gauge3 = new Donut(target3).setOptions(options);
    gauge3.maxValue = 100;
    gauge3.animationSpeed = 32;
    gauge3.set(33);

    var target4 = document.getElementById('gauge-4');
    var gauge4 = new Donut(target4).setOptions(options);
    gauge4.maxValue = 100;
    gauge4.animationSpeed = 32;
    gauge4.set(23);

    var target5 = document.getElementById('gauge-5');
    var gauge5 = new Donut(target5).setOptions(options);
    gauge5.maxValue = 100;
    gauge5.animationSpeed = 32;
    gauge5.set(78);

    var target6 = document.getElementById('gauge-6');
    var gauge6 = new Donut(target6).setOptions(options);
    gauge6.maxValue = 100;
    gauge6.animationSpeed = 32;
    gauge6.set(11);

  });
