<script>

document.getElementById("signupForm").addEventListener("submit", function (e) 
{
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const sex = document.querySelector("input[name='sex']:checked");

  let valid = true;

  document.querySelectorAll('.error').forEach(e => e.innerText = '');

  if (!first) 
  {
    document.getElementById("errFirst").innerText = "required";
    valid = false;
  }
  if (!last) 
  {
    document.getElementById("errLast").innerText = "required";
    valid = false;
  }
  if (!sex) 
  {
    document.getElementById("errSex").innerText = "required";
    valid = false;
  }
  if (!email) 
  {
    document.getElementById("errEmail").innerText = "required";
    valid = false;
  }
  if (!pass) 
  {
    document.getElementById("errPass").innerText = "required";
    valid = false;
  }
  if (!reason) 
  {
    document.getElementById("errReason").innerText = "required";
    valid = false;
  }

  if (valid) 
  {
    localStorage.setItem("firstName", first);
    localStorage.setItem("lastName", last);
    localStorage.setItem("email", email);
    localStorage.setItem("sex", sex.value);
    localStorage.setItem("reason", reason);

    window.location.href = "proj_profile_lastname.html";
  }
});

</script>