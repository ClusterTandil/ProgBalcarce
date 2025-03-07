console.log('hola');

const input = document.getElementById('fileInput');
const output = document.getElementById('output');

console.log(input);
console.log(output);

input.addEventListener('change', function (e) {
  try {
    const file = e.target.files[0];
    console.log(file.type, file.name);

    if ('text/plain' != file.type) {
      throw new Error('tiene que ser un archivo txt');
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      try {
        output.innerText = e.target.result;
      } catch (e) {
        console.log('try del onload', e);
      }
    };

    reader.onerror = function () {
      console.error('aqui paso algo');
    };

    reader.readAsText(file);
  } catch (error) {
    output.innerText = error;
  }
});
