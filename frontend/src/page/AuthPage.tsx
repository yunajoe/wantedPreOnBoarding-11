// 이메일 조건 : 최소 @, . 포함
// 비밀번호 조건 : 8자 이상 입력
// 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요

import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { signUp } from "../api/auth";
import { emailRegex, passwordRegx, rePasswordRgex } from "../utils/form";
function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [repasswordValid, setRePasswordValid] = useState(false);
  const [isActivate, setIsActivate] = useState(true);

  // 훅!
  const queryClient = useQueryClient();

  const registerMutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user/register"] });
    },
  });

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

    // for valid
    setRePasswordValid(rePasswordRgex(password, e.target.value));
  };

  // const handleSubmit = async (email: string, password: string) => {
  //   const result = await signUp(email, password);
  //   console.log("handleSubmit", result);
  // };

  return (
    <Box
      sx={{
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
          error={email.length > 0 && !emailValid}
          onChange={handleEmailChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText error={!emailValid}>
          {email.length > 0 && !emailValid && "유효하지 않은 이메일 형식"}
        </FormHelperText>

        {/* password */}
        <TextField
          required
          type="password"
          id="password"
          name="password"
          label="비밀번호(8자이상)"
          error={password.length > 0 && !passwordValid}
          onChange={handlePasswordChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText error={!passwordValid}>
          {password.length > 0 &&
            !passwordValid &&
            "유효하지 않은 패스워드형식"}
        </FormHelperText>

        {/* repassword */}
        <TextField
          required
          type="password"
          id="rePassword"
          name="rePassword"
          label="비밀번호 재입력"
          error={repassword.length > 0 && !repasswordValid}
          onChange={handleRePasswordChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText error={!repasswordValid}>
          {repassword.length > 0 &&
            !repasswordValid &&
            "패스워드가 일치하지 않습니다"}
        </FormHelperText>
        <Button
          // onClick={}
          onClick={() =>
            registerMutation.mutate({
              email,
              password,
            })
          }
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          disabled={
            (!emailValid || !passwordValid || !repasswordValid) && isActivate
          }
        >
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
}

export default AuthPage;
