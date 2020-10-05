
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

// MUI
import SendIcon from "@material-ui/icons/Send";
import { TextField, Button } from "@material-ui/core";

const Form = ({ setOpenDialog, setSnackOpen }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          resumeUrl: "",
          createdAt: new Date(),
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(3, "Must be greater than 3 character")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          resumeUrl: Yup.string().url("Enter valid URL").required("Required"),
        })}
        onSubmit={(values, actions) => {
          axios
            .post(
              "https://5f7ab8e24ebc4100161cb035.mockapi.io/application",
              values
            )
            .then((res) => {
              setOpenDialog(false);
              setSnackOpen(true);
            });
        }}
      >
        {({ handleBlur, handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              helperText={errors && errors.name}
              error={errors.name}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              helperText={errors && errors.email}
              error={errors.email}
              fullWidth
            />
            <TextField
              margin="dense"
              id="url"
              label="Resume URL"
              type="text"
              name="resumeUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.resumeUrl}
              helperText={errors && errors.resumeUrl}
              error={errors.resumeUrl}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
