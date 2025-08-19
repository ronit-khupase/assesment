
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value,
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
            <h1 className="signup-title">
              Create your
              <br />
              PopX account
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label className="signup-label">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                className="signup-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="signup-label">
                Phone number<span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                className="signup-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="signup-label">
                Email address<span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                className="signup-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="signup-label">
                Password<span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                className="signup-input"
                required
              />
            </div>

            <div className="form-group-group">
              <div className="form-group">
                <label className="signup-label">Company name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Marry Doe"
                  className="signup-input"
                />
              </div>

              <div className="form-group no-gap">
                <label className="agency-label">
                  Are you an Agency?<span className="required">*</span>
                </label>
                <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={() => handleRadioChange("yes")}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">Yes</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={() => handleRadioChange("no")}
                    className="radio-input"
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">No</span>
                </label>
              </div>
            </div>
            </div>

            <button type="submit" className="signup-submit-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
