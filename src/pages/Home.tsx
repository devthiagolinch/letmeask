import {useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import logoGoogle from '../assets/images/google-icon.svg';


import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth()

  async function handleCreateRoom(){
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando trocas de respostas" />
        <strong>Crie sala de Q&amp;A Ao-vivo</strong>
        <p>Tire duvidas das sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={logoGoogle} alt="logo google" />
            Crie sua sala com Google
          </button>
          <div className="separator">Ou entre um sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}