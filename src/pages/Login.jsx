

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/profile")
  }

  return (
    <div className="page-container">
      <div className="mobile-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h1 className="form-title">
              Signin to your
              <br />
              PopX account
            </h1>
            <p className="form-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="form-input1"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                className="form-input2"
                required
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
