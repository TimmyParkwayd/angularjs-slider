var app = angular.module('rzSliderDemo', ['rzModule', 'ui.bootstrap']);

app.controller('MainCtrl', function($scope, $rootScope, $timeout, $uibModal) {
  //Minimal slider config
  $scope.minSlider = {
    value: 10
  };

  //Range slider config
  $scope.rangeSlider = {
    minValue: 10,
    maxValue: 90,
    options: {
      floor: 0,
      ceil: 100,
      step: 1
    }
  };

  //Range slider with minLimit and maxLimit config
  $scope.minMaxLimitSlider = {
    value: 50,
    options: {
      floor: 0,
      ceil: 100,
      step: 1,
      minLimit: 10,
      maxLimit: 90
    }
  };

  //Range slider with minRange and maxRange config
  $scope.minMaxRangeSlider = {
    minValue: 40,
    maxValue: 60,
    options: {
      floor: 0,
      ceil: 100,
      step: 1,
      minRange: 10,
      maxRange: 50
    }
  };

  //Range slider with noSwitching config
  $scope.noSwitchingSlider = {
    minValue: 10,
    maxValue: 90,
    options: {
      floor: 0,
      ceil: 100,
      step: 1,
      noSwitching: true
    }
  };

  //Range slider with minRange and pushRange config
  $scope.minPushRangeSlider = {
    minValue: 40,
    maxValue: 60,
    options: {
      floor: 0,
      ceil: 100,
      minRange: 10,
      pushRange: true
    }
  };

  //Slider with selection bar
  $scope.slider_visible_bar = {
    value: 10,
    options: {
      showSelectionBar: true
    }
  };

  //Slider with selection bar end
  $scope.slider_visible_bar_end = {
    value: 10,
    options: {
      ceil: 100,
      showSelectionBarEnd: true
    }
  };

  //Slider with selection bar from value
  $scope.slider_visible_bar_from_value = {
    value: 10,
    options: {
      floor: -100,
      ceil: 100,
      step: 10,
      showSelectionBarFromValue: 0
    }
  };

  //Slider with selection bar color
  $scope.color_slider_bar = {
    value: 12,
    options: {
      showSelectionBar: true,
      getSelectionBarColor: function(value) {
        if (value <= 3)
          return 'red';
        if (value <= 6)
          return 'orange';
        if (value <= 9)
          return 'yellow';
        return '#2AE02A';
      }
    }
  };

  //Slider with pointer color
  $scope.color_slider_pointer = {
    value: 12,
    options: {
      getPointerColor: function(value) {
        if (value <= 3)
          return 'red';
        if (value <= 6)
          return 'orange';
        if (value <= 9)
          return 'yellow';
        return '#2AE02A';
      }
    }
  };

  //Slider config with floor, ceil and step
  $scope.slider_floor_ceil = {
    value: 12,
    options: {
      floor: 10,
      ceil: 100,
      step: 5
    }
  };

  //Slider config with logarithmic scale
  $scope.slider_log = {
    value: 1,
    options: {
      floor: 1,
      ceil: 100,
      logScale: true,
      showTicks: true
    }
  };

  //Slider config with custom scale
  $scope.slider_custom_scale = {
    value: 50,
    options: {
      floor: 0,
      ceil: 100,
      step: 10,
      showTicksValues: true,
      customValueToPosition: function(val, minVal, maxVal) {
        val = Math.sqrt(val);
        minVal = Math.sqrt(minVal);
        maxVal = Math.sqrt(maxVal);
        var range = maxVal - minVal;
        return (val - minVal) / range;
      },
      customPositionToValue: function(percent, minVal, maxVal) {
        minVal = Math.sqrt(minVal);
        maxVal = Math.sqrt(maxVal);
        var value = percent * (maxVal - minVal) + minVal;
        return Math.pow(value, 2);
      }
    }
  };

  //Right to left slider with floor, ceil and step
  $scope.slider_floor_ceil_rtl = {
    value: 12,
    options: {
      floor: 10,
      ceil: 100,
      step: 5,
      rightToLeft: true
    }
  };

  //Slider config with callbacks
  $scope.slider_callbacks = {
    value: 100,
    options: {
      onStart: function(id, newValue, highValue, pointerType) {
        console.info('start', id, newValue, pointerType);
        $scope.otherData.start = newValue * 10;
      },
      onChange: function(id, newValue, highValue, pointerType) {
        console.info('change', id, newValue, pointerType);
        $scope.otherData.change = newValue * 10;
      },
      onEnd: function(id, newValue, highValue, pointerType) {
        console.info('end', id, newValue, pointerType);
        $scope.otherData.end = newValue * 10;
      }
    }
  };

  $scope.otherData = {
    start: 0,
    change: 0,
    end: 0
  };

  //Slider config with custom display function
  $scope.slider_translate = {
    minValue: 100,
    maxValue: 400,
    options: {
      ceil: 500,
      floor: 0,
      id: 'translate-slider',
      translate: function(value, id, which) {
        console.info(value, id, which);
        return '$' + value;
      }
    }
  };

  //Slider config with custom display function using html formatting
  $scope.slider_translate_html = {
    minValue: 100,
    maxValue: 400,
    options: {
      floor: 0,
      ceil: 500,
      translate: function(value, sliderId, label) {
        switch (label) {
          case 'model':
            return '<b>Min price:</b> $' + value;
          case 'high':
            return '<b>Max price:</b> $' + value;
          default:
            return '$' + value
        }
      }
    }
  };

  //Slider config with steps array of letters
  $scope.slider_alphabet = {
    value: 'E',
    options: {
      stepsArray: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  };

  //Slider with ticks
  $scope.slider_ticks = {
    value: 5,
    options: {
      ceil: 10,
      floor: 0,
      showTicks: true
    }
  };

  //Slider with ticks at specific positions
  $scope.slider_ticks_array = {
    value: 5,
    options: {
      ceil: 10,
      floor: 0,
      ticksArray: [0, 1, 3, 8, 10]
    }
  };

  //Slider with ticks and tooltip
  $scope.slider_ticks_tooltip = {
    value: 5,
    options: {
      ceil: 10,
      floor: 0,
      showTicks: true,
      ticksTooltip: function(v) {
        return 'Tooltip for ' + v;
      }
    }
  };

  //Slider with ticks and values
  $scope.slider_ticks_values = {
    value: 5,
    options: {
      ceil: 10,
      floor: 0,
      showTicksValues: true,
      ticksValuesTooltip: function(v) {
        return 'Tooltip for ' + v;
      }
    }
  };

  //Range slider with ticks and values
  $scope.range_slider_ticks_values = {
    minValue: 1,
    maxValue: 8,
    options: {
      ceil: 10,
      floor: 0,
      showTicksValues: true
    }
  };

  //Slider with ticks at intermediate positions
  $scope.slider_ticks_at = {
    value: 500,
    options: {
      ceil: 1000,
      floor: 0,
      showTicks: 100
    }
  };

  //Slider with ticks and values at intermediate positions
  $scope.slider_ticks_values_at = {
    value: 500,
    options: {
      ceil: 1000,
      floor: 0,
      showTicksValues: 100
    }
  };


  //Slider with ticks values and legend
  $scope.slider_ticks_legend = {
    value: 1.1,
    options: {
      showTicks: true,
      hidePointerLabels: true,
      hideLimitLabels: true,
      stepsArray: [
        {value: 0.1, legend: '100%'},
        {value: 0.3},
        {value: 0.5},
        {value: 0.7},
        {value: 0.9},
        {value: 1.1, legend: '50%/50%'},
        {value: 1.3},
        {value: 1.5},
        {value: 1.7},
        {value: 1.9},
        {value: 2.1, legend: '100%'}
      ],
      onStart : function (sliderId, modelValue, highValue, pointerType){
        $scope.checkValue(modelValue);
      },
      onChange : function (sliderId, modelValue, highValue, pointerType){
        $scope.checkValue(modelValue);
      }
    }
  };


  $scope.checkValue = function (modelValue, flag) {
    var _tooltip = '';

    if (modelValue >= 0.1 && modelValue < 1.1) {
      _tooltip = 'A presentation of the theory or technique/tools, followed by exercises, case-studies or group discussions ';
    } else if (modelValue === 1.1) {
      _tooltip = 'Both in same amounts';
    } else if (modelValue >= 1.3 && modelValue <= 2.1) {
      _tooltip = 'An exercise or a case-study or a group discussion, followed by a presentation of the theory or technique/tools';
    }

    $scope.tooltipText = _tooltip;

    if (flag) return _tooltip;
  };

  $scope.tooltipText = $scope.checkValue($scope.slider_ticks_legend.value, true);
});

app.directive('clickableLabel', function() {
  return {
    restrict: 'E',
    scope: {label: '='},
    replace: true,
    template: "<button ng-click='onclick(label)' style='cursor: pointer;'>click me - {{label}}</button>",
    link: function(scope, elem, attrs) {
      scope.onclick = function(label) {
        alert("I'm " + label);
      };
    }
  };
});
