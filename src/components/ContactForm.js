// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  let [name, setName] = React.useState("");
  let [phone, setPhone] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [photo, setPhoto] = React.useState("");

  const onChangeName = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const onChangePhone = (e) => {
    let value = e.target.value;
    setPhone(value);
  };
  const onChangEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const onChangePhoto = (e) => {
    let value = e.target.value;
    setPhoto(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      phone: phone,
      email: email,
      phtoto: photo,
    };
    props.fnAddNewData(contact);
    clearInput();
  };

  const clearInput = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPhoto("");
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form onSubmit={onSubmitHandler}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={onChangeName}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phone}
              onChange={onChangePhone}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={onChangEmail}
            />
            <TextField
              id="outlined-basic"
              label="Photo URL"
              variant="outlined"
              fullWidth
              margin="normal"
              value={photo}
              onChange={onChangePhoto}
            />
            <Button type="submit" variant="contained" size="medium">
              Add New
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
