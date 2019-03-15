var input = document.getElementById('input');

function addChar(character) {
  if (input.innerHTML == null || input.innerHTML == '0') {
    input.innerHTML = character;
  } else {
    input.innerHTML += character;
  }
}

function compute() {
  input.innerHTML = eval(input.innerHTML);
}
function deleteChar() {
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
}

function sin(form) {
  if (input.innerHTML == 180 || input.innerHTML == 360) {
    input.innerHTML = '0';
  } else if (input.innerHTML == 30) {
    input.innerHTML = '0.5';
  } else {
    input.innerHTML = Math.sin(input.innerHTML * (Math.PI / 180));
  }
}

function cos(form) {
  if (input.innerHTML == 90 || input.innerHTML == 270) {
    input.innerHTML = '0';
  } else if (input.innerHTML == 60) {
    input.innerHTML = '0.5';
  } else {
    input.innerHTML = Math.cos(input.innerHTML * (Math.PI / 180));
  }
}

function tan(form) {
  if (input.innerHTML == 90 || input.innerHTML == 270) {
    input.innerHTML = 'MATHS ERROR';
  } else if (input.innerHTML == 180 || input.innerHTML == 360) {
    input.innerHTML = '0';
  } else if (input.innerHTML == 45) {
    input.innerHTML = '1';
  } else {
    input.innerHTML = Math.tan(input.innerHTML * (Math.PI / 180));
  }
}

function atan(form) {
  input.innerHTML = Math.atan(input.innerHTML) * (180 / Math.PI);
}

function asin(form) {
  input.innerHTML = Math.asin(input.innerHTML) * (180 / Math.PI);
}

function acos(form) {
  input.innerHTML = Math.acos(input.innerHTML) * (180 / Math.PI);
}
function sinh(form) {
  input.innerHTML = Math.sinh(input.innerHTML);
}
function cosh(form) {
  input.innerHTML = Math.cosh(input.innerHTML);
}
function tanh(form) {
  input.innerHTML = Math.tanh(input.innerHTML);
}
function asinh(form) {
  input.innerHTML = Math.asinh(input.innerHTML);
}
function acosh(form) {
  input.innerHTML = Math.acosh(input.innerHTML);
}
function atanh(form) {
  input.innerHTML = Math.atanh(input.innerHTML);
}

function sqrt(form) {
  input.innerHTML = Math.sqrt(input.innerHTML);
}
function cbrt(form) {
  input.innerHTML = Math.cbrt(input.innerHTML);
}

function log(form) {
  input.innerHTML = Math.log10(input.innerHTML);
}

function ln(form) {
  input.innerHTML = Math.log(input.innerHTML);
}
function exp(form) {
  input.innerHTML = Math.exp(input.innerHTML);
}

function changeSign() {
  if (input.innerHTML.substring(0, 1) == '-') {
    input.innerHTML = input.innerHTML.substring(1, input.innerHTML.length);
  } else {
    input.innerHTML = '-' + input.innerHTML;
  }
}

function square(form) {
  input.innerHTML = Math.pow(input.innerHTML, 2);
}

function cube(form) {
  input.innerHTML = Math.pow(input.innerHTML, 3);
}

function pie() {
  input.innerHTML = Math.PI;
}

function inverseNum() {
  input.innerHTML = 1 / input.innerHTML;
}

function percent() {
  input.innerHTML = input.innerHTML / 100;
}

function fact(num) {
  if (num < 0) {
    return 'MATHS ERROR';
  } else if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
function tenpow() {
  input.innerHTML = Math.pow(10, input.innerHTML);
}

function add() {
  if (input.innerHTML.indexOf('^') == -1) {
    input.innerHTML += '^';
  }
}

function numpow() {
  var value = input.innerHTML.split('^');
  input.innerHTML = Math.pow(value[0], value[1]);
}

function addroot() {
  if (input.innerHTML.indexOf('root') == -1) {
    input.innerHTML += 'root';
  }
}
function nthroot() {
  var val = input.innerHTML.split('root');
  var y = 1 / val[0];
  input.innerHTML = Math.pow(val[1], y);
}

function addp() {
  if (input.innerHTML.indexOf('P') == -1) {
    input.innerHTML += 'P';
  }
}

function addc() {
  if (input.innerHTML.indexOf('C') == -1) {
    input.innerHTML += 'C';
  }
}

function comb() {
  function fact_n(p) {
    if (p < 0) {
      return 'MATHS ERROR';
    } else if (p == 0) {
      return 1;
    } else {
      return p * fact_n(p - 1);
    }
  }
  var combine = input.innerHTML.split('C');
  var n = combine[0];
  var r = combine[1];
  var n_m_r = n - r;
  var solve_C = fact_n(n) / (fact_n(n_m_r) * fact_n(r));
  input.innerHTML = solve_C;
}

function perm() {
  function fact_n(p) {
    if (p < 0) {
      return 'MATHS ERROR';
    } else if (p == 0) {
      return 1;
    } else {
      return p * fact_n(p - 1);
    }
  }
  var permut = input.innerHTML.split('P');
  var n = permut[0];
  var r = permut[1];
  var n_m_r = n - r;
  var solve_P = fact_n(n) / fact_n(n - r);
  input.innerHTML = solve_P;
}

function solution() {
  if (
    input.innerHTML.indexOf('^') == -1 &&
    input.innerHTML.indexOf('root') == -1 &&
    input.innerHTML.indexOf('C') == -1 &&
    input.innerHTML.indexOf('P') == -1
  ) {
    compute();
  } else if (input.innerHTML.indexOf('^') !== -1) {
    numpow();
  } else if (input.innerHTML.indexOf('root') !== -1) {
    nthroot();
  } else if (input.innerHTML.indexOf('C') !== -1) {
    comb();
  } else {
    perm();
  }
}
