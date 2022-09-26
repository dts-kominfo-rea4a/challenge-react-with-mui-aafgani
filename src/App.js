import "./App.css";
import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = React.useState(contactsJSON);

  const addContact = (data) => {
    const newContacs = [...contacts, data];
    setContacts(newContacs);
  };

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={12}>
            <Header />
          </Grid>
          <Grid item md={6}>
            <ContactForm fnAddNewData={addContact} />
          </Grid>
          <Grid item md={6}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {contacts.map((dt, i) => (
                <Contact data={dt} key={i} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
