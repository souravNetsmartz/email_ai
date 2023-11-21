import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import FullScreenDialog from "../fullScreenDialog";
import Email from "../../pages/email/email";
import { Puff } from "react-loader-spinner";

const MyForm = () => {
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data); // Handle form submission logic here
    setLoader(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/email_generator",
        data
      );
      console.log(res.data.email);
      setMessage(res?.data?.email);
      setLoader(false);
      setOpen(true);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginTop={2}>
        <Controller
          name="tone_type"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel htmlFor="language">Tone Type</InputLabel>
              <Select {...field} fullWidth size="small" label="Tone Type">
                <MenuItem value="formal">Formal</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
                <MenuItem value="Friendly">Friendly</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="language"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth size="small">
              <InputLabel htmlFor="language">Language</InputLabel>
              <Select {...field} fullWidth size="small" label="Tone Type">
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Quebec French">Quebec French</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="sender_name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth size="small" label="Sender Name" />
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="company_name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth size="small" label="Company Name" />
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="product"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth size="small" label="Product" />
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="recipient_name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              label="Recipient Name"
            />
          )}
        />
      </Box>

      <Box marginTop={2}>
        <Controller
          name="offer"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} fullWidth size="small" label="Offer" />
          )}
        />
      </Box>
      <Box marginTop={2}>
        <Button type="submit" variant="contained" size="small" color="primary">
          Submit
        </Button>
      </Box>
      <FullScreenDialog open={open} setOpen={setOpen} message={message} />
      {loader ? (
        <Box
          component="div"
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(0, 0, 0, 0.6)" // Set the background color with transparency
        >
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#f58220"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loader}
          />
        </Box>
      ) : null}
    </form>
  );
};

export default MyForm;
