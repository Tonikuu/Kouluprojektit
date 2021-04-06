function validateForm() {
    var nimi = document.forms["contact-form"]["name"].value;
    if (nimi == "") {
      alert("Syötä nimesi");
      return false;
    }
  }