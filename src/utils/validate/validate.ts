const regEmail = (value: string) =>
  value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i); // 정규식 내부에 있는 '.' 앞의 역슬래시가 중요합니다.

const validateEmail = (email: string) => {
  if (email === "") return false;
  return regEmail(email) ? true : false;
};

const regPassword = (value: string) =>
  value.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,20}$/);

const validatePassword = (password: string) => {
  if (password === "") return false;
  return regPassword(password) ? true : false;
};

export const validator = {
  validateEmail,
  validatePassword,
};
