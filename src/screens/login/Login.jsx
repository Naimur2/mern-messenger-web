import React from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/use-auth";
import MainContext from "../../context/main-context";
import SocketContext from "../../context/socket-context";

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isPassword, setIsPassword] = React.useState(false);
    const mainCtx = React.useContext(MainContext);
    const socketCtx = React.useContext(SocketContext);
    const auth = useAuth();

    const handleChange = (e, type) => {
        if (type === "phone") setPhone(e.target.value);
        else if (type === "password") setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        mainCtx.login({ phone, password });
    };

    React.useEffect(() => {
        if (auth) {
            socketCtx.setPeer();
            socketCtx.setSocket(auth);
            navigate("/dashboard");
        }
    }, [auth]);

    return (
        <Container className="mt-4">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        onChange={(e) => handleChange(e, "phone")}
                        required
                        type="text"
                        placeholder="Enter mobile"
                        maxLength={12}
                        value={phone}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => handleChange(e, "password")}
                        required
                        type={isPassword ? "text" : "password"}
                        placeholder="Enter password"
                        maxLength={16}
                        value={password}
                    />
                    {password.length > 0 && (
                        <p
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsPassword((prev) => !prev)}
                        >
                            {!isPassword ? "Show" : "Hide"} password.
                        </p>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Stack className="mt-4">
                <p>
                    Don't have an account? <Link to="/register">Register</Link>{" "}
                </p>
            </Stack>
        </Container>
    );
}
