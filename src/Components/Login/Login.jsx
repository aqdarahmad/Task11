import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
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
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            sx={{
              "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            sx={{
              "& .MuiInputBase-root": { backgroundColor: "var(--white-smoke)" },
            }}
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
            Log In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
