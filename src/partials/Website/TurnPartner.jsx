import React from 'react'
import Head from '../Components/Head'
import SectionInfo from '../Components/SectionInfo'
import styles from './TurnPartner.module.css'
import DropInput from '../Components/Inputs/DropInput'
import { Link } from 'react-router-dom'

const TurnPartner = () => {
  return (
    <div className={styles.turnPartner}>
        <Head title="Torne-se apoiador" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Torne-se apoiador" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fturnpartner.jpg?alt=media&token=29ac17d0-c4f3-4caa-a28b-ed1fbd39bbd8" info="Faça a diferença: torne-se um apoiador e ajude a mudar vidas animais." />    
        <div className={styles.partnerModal}>
            <div className="container">
                <div className={styles.modalWrapper}>
                    <div className={styles.modalInfo}>
                        <h1>Se torne apoiador, é gratis!</h1>
                        <p>Ao se cadastrar como apoiador da Associação de Bem-Estar Animal (ABEA), você terá acesso a um painel abrangente e gratuito, oferecendo inúmeras oportunidades para apoiar a causa e interagir conosco para ajudar os animais necessitados.</p>
                        <p>No seu painel de apoiador, você pode:</p>
                        <DropInput title="Fazer Doações" dropInfo="Contribua de forma direta e segura para os cuidados e assistência aos animais resgatados, ajudando-nos a fornecer abrigo, alimentação, cuidados veterinários e amor a quem mais precisa."/>
                        <DropInput title="Contatar Cuidadores para Adoção" dropInfo="Conecte-se com os responsáveis pelos animais disponíveis para adoção, permitindo que você explore informações detalhadas sobre os animais e inicie o processo de adoção responsável."/>
                        <DropInput title="Inscrição em Eventos" dropInfo="Inscreva-se facilmente em eventos de adoção, conscientização ou arrecadação de fundos, tornando-se parte ativa das atividades e esforços da ABEA."/>
                        <DropInput title="Contato para Caridade" dropInfo="Entre em contato conosco para buscar assistência e apoio para cuidar de seu animal, seja para serviços veterinários ou suporte em casos de necessidade."/>
                        <p>O acesso ao painel de apoiador é gratuito e oferece uma gama de recursos para você se engajar ativamente na causa do bem-estar animal. Junte-se a nós nessa missão de amor e compaixão pelos animais necessitados!</p>
                        <p>Registre-se agora para ter acesso a essas funcionalidades e faça a diferença na vida dos animais.</p>
                        <div className={styles.buttons}>
                            <Link to="/painel/login">Entrar</Link>
                            <Link to="/painel/login/signup">Cadastrar</Link>
                        </div>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fthankyou.jpg?alt=media&token=b89e7974-6ace-48e6-8b2e-328258750506" alt="" loading='lazy'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TurnPartner