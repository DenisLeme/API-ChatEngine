const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      props.onAuth({ username: value, secret: value });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Bem-Vindo 👋</div>
  
          <div className="form-subtitle">Coloque o UserName para começar</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
  