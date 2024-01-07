<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <style>
    .calculator {
      display: flex;
      flex-wrap: wrap;
      width: 20%;
      gap: 5px;
    }
    
    button {
      flex-grow: 1;
      min-width: 30%;
    }
  </style>
</head>

<body>
  <div class="calculator">
    <button value="1">1</button>
    <button value="2">2</button>
    <button value="3">3</button>
    <button value="4">4</button>
    <button value="5">5</button>
    <button value="6">6</button>
    <button value="7">7</button>
    <button value="8">8</button>
    <button value="9">9</button>
    <button value="0">0</button>
    <button value="+">+</button>
    <button value="back">back </button>
    <button value="*">*</button>
    <button value="/">/</button>
    <button value="=">=</button>
  </div>
  <script>
    const state = {
      output: ""
    }
    
    const buttons = document.querySelectorAll('button');
    // const [ button1 ] = buttons;
    
    buttons.forEach(btn => {
      btn.addEventListener('click', ({target: {value}}) => {
        if (value === 'back') {
          state.output = state.output.slice(0, -1)
        } else if (value === '=') {
          doMath()
        } else {
          state.output += value;
        }
        console.log(state.output)
      })
    })
    
    function doMath() {
      addVals = state.output.split('+');
      const added = addVals.reduce((num, sum) => parseInt(num) + sum, 0)
      console.log({added})
    }

    
  </script>
</body>

</html>