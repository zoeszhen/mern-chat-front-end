import React, { useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Signup.css";
import botImg from "../assets/bot.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // image state
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const validateImg = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "kotgmq83");
    try {
      setUploadingImage(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dor22psxa/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();

      setUploadingImage(false);
      return urlData;
    } catch (error) {
      setUploadingImage(false);
      console.log(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!image) {
      return alert("Pleae upload your profile image");
    }
    const url = await uploadImage(image);
    console.log(url);
  };

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center">Create account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || botImg}
                className="signup-profile-pic"
                alt="defaultImg"
              />
              <label htmlFor="image-upload" className="image-upload-lable">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                hidden
                id="image-upload"
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadImage ? "Signing you up..." : "Signup"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
