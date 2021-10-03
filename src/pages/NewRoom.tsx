import {Link} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/newroom.scss';

import { Button } from '../components/Button';

export function NewRoom(){

  return (
    <div id="page-new-room">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando trocas de respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>
          Aprenda e compartilhe conhecimento
          com outras pessoas
        </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          
          <h2>Crie uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}