function handleChange() {
  let inputValue = Array.prototype.map.call(
    event.target.files,
    file => file.name
  );
  if (inputValue.length > 1) {
    document.getElementById("display-file").innerHTML =
      inputValue.length + " files attached";
  } else {
    document.getElementById("display-file").innerHTML = inputValue;
  }
}
