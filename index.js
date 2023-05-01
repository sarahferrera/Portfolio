function validarDatos() {
  window.event.preventDefault();

  if (document.form.nombre.value == "") {
    alert("Name field is required");
    document.form.nombre.focus();
  } else if (document.form.email.value == "") {
    alert("E-mail field is required");
    document.form.email.focus();
  } else if (document.form.asunto.value == "") {
    alert("This field is required");
    document.form.asunto.focus();
  } else if (
    document.form.mensaje.value == "" ||
    document.form.mensaje.value.length <= 50
  ) {
    alert("This field is required");
    document.form.mensaje.focus();
  } else if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    alert("e-mail invalid");
  }
}
document.querySelector("form").addEventListener("submit", validarDatos);
