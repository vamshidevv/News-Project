import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To hold error messages
  const [valid, setValid] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/test");
        if (response.data && response.data.length > 0) {
          setValid(response.data[0]);
        } else {
          setValid(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTest = () => {
    // Check if the input fields are empty
    if (!email || !password) {
      // If either is empty
      setError("Please fill in all required fields."); // Set the error message
      return; // Exit without continuing
    }

    if (valid) {
      // If the valid data is retrieved
      if (email === valid.email && password === valid.password) {
        toast.success("Successfully logged in!", {
          autoClose: 1500,
          position:"top-center"
        });
        setError(""); // Clear error on success
      } else {
        setError("Invalid email or password"); // Set error message for mismatch
      }
    } else {
      setError("No data available to validate"); // Set error if no valid data
    }
  };

  return (
    <>
      {isLoading ? (
        <HashLoader
          color="#3E3E3E"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        />
      ) : (
        <MDBContainer
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <MDBCard style={{ width: "750px" }}>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="tos-circle-letter-logo-design-ellipse-shape-letters-typographic-style-three-initials-form-emblem-abstract-monogram-253915330.webp"
                  alt="login form"
                  className="rounded-start w-100"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  {error && (
                    <div style={{ color: "red", marginBottom: "20px" }}>
                      {error} {/* Display error message */}
                    </div>
                  )}

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(""); // Clear error on change
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(""); // Clear error on change
                    }}
                  />

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleTest}
                  >
                    Login
                  </MDBBtn>
                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      )}
    </>
  );
}

export default AdminSignIn;
