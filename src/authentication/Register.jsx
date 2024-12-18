function Register({ onLogin, toggleAuthPage }) {
  return (
    <div>
      <h2>Register</h2>
      {/* Add registration form here */}
      <button onClick={onLogin}>Register</button>
      <p onClick={toggleAuthPage}>Already have an account? Login</p>
    </div>
  );
}

export default Register;
