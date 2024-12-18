function Login({ onLogin, toggleAuthPage }) {
  return (
    <div>
      <h2>Login</h2>
      {/* Add login form here */}
      <button onClick={onLogin}>Login</button>
      <p onClick={toggleAuthPage}>Don't have an account? Register</p>
    </div>
  );
}

export default Login;
