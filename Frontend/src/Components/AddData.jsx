import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState } from "react";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 45px auto 10px auto;
  & > div {
    margin: 15px;
  }
`;
const DefaultValues = {
  name: "",
  Username: "",
  PhoneNumber: "",
  Email: "",
};

const AddData = () => {
  const [user, setUser] = useState(DefaultValues);
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <Container>
      <Typography variant="h5">Add Data</Typography>
      <FormControl margin="dense">
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel>User Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Username" />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="PhoneNumber" />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Email" />
      </FormControl>

      <Button variant="contained">Send Data</Button>
    </Container>
  );
};
export default AddData;
