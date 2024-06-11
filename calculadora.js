// Variable para almacenar la expresión de la calculadora
let expression = '';

// Función para agregar números y operadores a la expresión
function appendInput(value) {
  expression += value;
  document.getElementById('screen').value = expression;
}

// Función para borrar la pantalla de la calculadora
function clearScreen() {
  expression = '';
  document.getElementById('screen').value = expression;
}

// Función para calcular el resultado de la expresión
function calculate() {
  try {
    expression = eval(expression); // Evalúa la expresión y calcula el resultado
    document.getElementById('screen').value = expression;
  } catch (error) {
    document.getElementById('screen').value = 'Error'; // Maneja los errores, como división por cero
  }
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        document.getElementById('sun').classList.add('active');
        document.getElementById('moon').classList.remove('active');
    } else {
        document.getElementById('sun').classList.remove('active');
        document.getElementById('moon').classList.add('active');
    }
});
