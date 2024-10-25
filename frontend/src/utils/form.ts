export const emailRegex = (email: string) => {
  const pattern = /^(?=.*@)(?=.*\.).+$/;
  return email.trim().length > 0 && pattern.test(email.trim());
};
export const passwordRegx = (password: string) => {
  return password.trim().length > 0 && password.trim().length >= 8;
};

export const rePasswordRgex = (password: string, repassword: string) => {
  return password.trim() === repassword.trim();
};
