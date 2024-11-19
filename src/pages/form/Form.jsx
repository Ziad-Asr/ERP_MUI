import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = () => {
    setOpen(true);
    reset();
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={2} direction="row">
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) && (
              <div>
                . This field is required
                <br />
                . min 3 characters
                <br />. max 20 characters
              </div>
            )
          }
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) && (
              <div>
                . This field is required
                <br />
                . min 3 characters
                <br />. max 20 characters
              </div>
            )
          }
          {...register("lastName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) && "Please provide a valid email address"
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber) && "Please provide a valid Phone number"
        }
        {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create new user
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
