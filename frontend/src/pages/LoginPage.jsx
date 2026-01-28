import { Button, Field, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../utils/handleLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          let success = await handleLogin(e, email, password, setErr);
          if (success === true) navigate("/");
        }}
      >
        <Stack gap="4" align="flex-end" width={{ base: "80%", sm: "300px", md: "400px" }} padding={"5"} bgColor={"Background"} borderRadius={"2xl"} mx="auto">
          <div style={{ justifyContent: "space-between", fontSize: "25px", display: "flex", width: "100%" }}>
            <Button variant="outline" onClick={() => navigate("/")}>
              back
            </Button>
          </div>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Admin mail..." />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Admin password..." />
          </Field.Root>

          <p style={{ width: "100%", textAlign: "start", color: "red", fontWeight: "400" }}>{err && err}</p>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginPage;
