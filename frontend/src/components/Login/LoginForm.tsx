import "./loginStyles.css";

const LoginForm = () => {
	return (
		<div className="login-form">
			<form>
				<label>Email</label>
				<input type="text" required />
				<label>Password</label>
				<input type="password" required />
				<button>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
