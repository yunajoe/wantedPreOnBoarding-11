import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { signIn } from "../api/auth";

function AuthLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();
  // MutationFn에 할당할 때 그 매개변수를 객체로 묶어서 전달하기 때문에 타입이 맞지 않는 문제가 발생한다
  // React Query의 mutationFn은 비동기 작업을 수행해야 하므로, Promise를 반환해야 합니다.
  const loginMutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user/login"] });
    },
  });

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <FormControl>
        <TextField
          required
          fullWidth
          type="email"
          id="email"
          name="email"
          label="이메일"
          //   error={email.length > 0 && !emailValid}
          onChange={handleEmailChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText>
          {/* {email.length > 0 && !emailValid && "유효하지 않은 이메일 형식"} */}
        </FormHelperText>

        {/* password */}
        <TextField
          required
          type="password"
          id="password"
          name="password"
          label="비밀번호"
          //   error={password.length > 0 && !passwordValid}
          onChange={handlePasswordChange}
          color="primary"
          margin="normal"
        />
        <FormHelperText>
          {/* {password.length > 0 &&
            !passwordValid &&
            "유효하지 않은 패스워드형식"} */}
        </FormHelperText>

        <Button
          onClick={() =>
            loginMutation.mutate({
              email,
              password,
            })
          }
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          // disabled={
          //   (!emailValid || !passwordValid || !repasswordValid) && isActivate
          // }
        >
          로그인
        </Button>
      </FormControl>
    </Box>
  );
}

export default AuthLoginPage;
