import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "../../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Users } from "../../redux/action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(Users());
  }, [dispatch]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    dispatch(register(data));

    setTimeout(async () => {
      navigate("/login");
    }, 1000);
  };

  const handleName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleLatName = (e) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };
  const handleConfirmPassword = (e) => {
    setData({
      ...data,
      confirmPassword: e.target.value,
    });
  };
  const handlePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  };

  const handleRole = (e) => {
  setData({
      ...data,
      role: e.target.value,
    }); 
  };

  return (
    <div>
      <div>
        {/*    <div className="Logo-register">
          <img src={require("../../image/Logo.png")} alt="Not found" />
     
        </div> */}
        <div></div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          className="register-container"
        >
          <div className="register-box">
            <div
            // Establece el ancho completo para el label
            >
              <label>NOMBRE</label>

              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div
            // Establece el ancho completo para el label
            >
              <label>APELLIDO</label>

              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleLatName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div>
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                onChange={handleEmail}
                value={data.email}
                style={{
                  borderColor: "black",
                  borderWidth: "3px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div
            // Establece el ancho completo para el label
            >
              <label>CONTRASEÑA</label>

              <input
                type="text"
                name="password"
                value={data.password}
                onChange={handlePassword}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>

            <div
            // Establece el ancho completo para el label
            >
              <label>N* DE TELÉFONO</label>

              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handlePhone}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>

            <div
            // Establece el ancho completo para el label
            >
              <label>Role</label>

              <select
                name="role"
                value={data.role}
                onChange={handleRole}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
              >
                <option value="admin">administrador</option>
                <option value="asesor">asesor</option>
                <option value="cliente">cliente</option>
              </select>
            </div>

            <div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderColor: "black",
                    border: "none",
                    backgroundColor: "#00807772",
                    width: "100%",
                    borderRadius: 0,
                    outline: "none",
                  }}
                >
                  REGISTRATE
                </Button>
                {/*     {data.password !== data.confirmPassword && (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Las contraseñas no coinciden
                    </Alert>
                  </Snackbar>
                )} */}
              </Stack>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
