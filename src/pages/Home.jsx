

import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="mobile-container">
        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="welcome-title">Welcome to PopX</h1>
            <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>

          <div className="button-section">
            <button className="create-account-btn" onClick={() => navigate("/signup")}>
              Create Account
            </button>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
