const dobInput = document.getElementById('dob');
const resultText = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

dobInput.addEventListener('change', () => {
  const dob = new Date(dobInput.value);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  // Check if birthday has occurred this year
  const birthdayPassed = monthDiff > 0 || (monthDiff === 0 && today.getDate() >= dob.getDate());
  if (!birthdayPassed) {
    age--;
  }

  const completedYears = age;
  const runningYear = age + 1;

  resultText.innerHTML = `Your total age is <strong>${completedYears} years</strong> and you are now running <strong>${runningYear} years</strong>.`;
});

resetBtn.addEventListener('click', () => {
  dobInput.value = "";
  resultText.innerHTML = 'Your age is: <span id="age">--</span>';
});
