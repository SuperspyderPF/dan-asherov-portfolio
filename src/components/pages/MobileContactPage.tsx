import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { FORMSPREE_ENDPOINT, validationSchema, FormValues } from "../../utils";
import { SendMessageButton } from "../../assets/SVG";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import axios from "axios";

const MobileContactPage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setIsSubmitting(true);

      await axios.post(FORMSPREE_ENDPOINT, {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      });

      toast.success("Message sent successfully!");
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Partial<FormValues> = {};
        err.inner.forEach((error) => {
          if (error.path)
            newErrors[error.path as keyof FormValues] = error.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Failed to send message.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      <Toaster />
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        marginTop={5}
        sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800 }}
      >
        Contact Me
      </Typography>
      <Typography
        sx={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 600,
          marginLeft: 5,
        }}
      >
        Full Name
      </Typography>
      <TextField
        id="name"
        variant="outlined"
        value={formValues.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        sx={{ marginLeft: 5, marginTop: 1 }}
      />
      <Typography
        sx={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 600,
          marginLeft: 5,
          marginTop: 5,
        }}
      >
        Email
      </Typography>
      <TextField
        id="email"
        variant="outlined"
        value={formValues.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ marginLeft: 5, marginTop: 1 }}
      />
      <Typography
        sx={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 600,
          marginLeft: 5,
          marginTop: 3,
        }}
      >
        Message
      </Typography>
      <TextField
        id="message"
        variant="outlined"
        multiline
        rows={6}
        value={formValues.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        sx={{ marginLeft: 5, marginTop: 1, width: 540 }}
      />
      <SendMessageButton
        onClick={handleSubmit}
        style={{ marginTop: 2, marginLeft: 5 }}
      />
    </Box>
  );
};

export default MobileContactPage;
