import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/"); // redireciona para o dashboard
    } catch (error) {
      alert("Erro ao entrar: " + error.message);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={e => setSenha(e.target.value)}
        />

        <button onClick={login}>Entrar</button>

        <br/><br/>

        <a href="/register">Criar conta</a>
      </div>
    </div>
  );
}
