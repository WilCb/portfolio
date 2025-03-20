const handleSubmit = e => {
    e.preventDefault();
  
    const myForm = e.target;
    const formData = new FormData(myForm);

    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => alert("Mensagem enviada com sucesso !"))
      .catch(error => alert(error));
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);
  