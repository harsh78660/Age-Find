const dobInput = document.getElementById('dob');
const ageSpan = document.getElementById('age');

dobInput.addEventListener('change', () => {
  const dob = new Date(dobInput.value);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  ageSpan.textContent = age;
});
resetBtn.addEventListener('click', () => {
  dobInput.value = "";
  ageSpan.textContent = "--";
});