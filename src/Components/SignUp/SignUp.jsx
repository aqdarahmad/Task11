import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", form);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "var(--white-smoke)",
      }}
    >
      <Paper sx={{ p: 4, width: 400, boxShadow: 3, backgroundColor: "var(--light-camel)" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "var(--mahogany)" }}
        >
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" } }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" } }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" } }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" } }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "var(--pistachio-cream)",
              color: "var(--white-smoke)",
              "&:hover": { backgroundColor: "var(--mahogany)" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
