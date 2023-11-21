import { Box } from "@mui/material";
import MyForm from "../../components/form/form";
import Navbar from "../../components/navbar/navbar";

export default function Email() {
  return (
    <>
      <Navbar />
      <Box display={"flex"} width={"100%"} justifyContent={"center"}>
        <Box width={"40%"} padding={4}>
          <MyForm />
        </Box>
      </Box>
    </>
  );
}
