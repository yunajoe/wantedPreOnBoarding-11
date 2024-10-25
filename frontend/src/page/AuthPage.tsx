// 이메일 조건 : 최소 @, . 포함
// 비밀번호 조건 : 8자 이상 입력
// 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
// https://mui.com/material-ui/react-text-field/
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { emailRegex, passwordRegx } from "../utils/form";
function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [repasswordValid, setRePasswordValid] = useState(false);

  const [isActivate, setIsActivate] = useState(true);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);

    // for valid
    setEmailValid(emailRegex(e.target.value));
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);

    // for valid
    setPasswordValid(passwordRegx(e.target.value));
  };

  const handleRePasswordChange = (e: any) => {
    setRepassword(e.target.value);
  };
  console.log("password", passwordValid);

  return (
    <Box
      sx={{
        // width: 100,

        borderRadius: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <FormControl>
        <TextField
          required
          fullWidth
          type="email"
          id="email"
          name="email"
          label="이메일"
          // error={emailValid}
          onChange={handleEmailChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText error={!emailValid}>
          {email.length > 0 && !emailValid && "유효하지 않은 이메일 형식"}
        </FormHelperText>
        <TextField
          required
          type="password"
          id="password"
          name="password"
          label="비밀번호(8자이상)"
          error={passwordValid}
          onChange={handlePasswordChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText error={!passwordValid}>
          {password.length > 0 &&
            !passwordValid &&
            "유효하지 않은 패스워드형식"}
        </FormHelperText>
        <TextField
          required
          type="password"
          id="rePassword"
          name="rePassword"
          label="비밀번호 재입력"
          error={repasswordValid}
          onChange={handleRePasswordChange}
          color="primary"
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          disabled={isActivate}
        >
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
}

export default AuthPage;
