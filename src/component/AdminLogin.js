import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../Redux/actions/adminActions';

function AdminLogin() {

    const navigate = useNavigate()
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const adminLoginState = useSelector((state) => state.adminLogin);
    const { loading, error } = adminLoginState;

    console.log("login", adminLoginState);

    useEffect(() => {
        if(adminLoginState?.adminInfo?.success) {
            navigate('/dashboard');
        } else {
            navigate('/')
        }
    },[adminLoginState])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(adminLogin(email, password));
        // 
    };

    return (
        <Container>
            <h1>Admin Login</h1>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}> 
                        </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
            </Form>
        </Container>
    );
}

export default AdminLogin;