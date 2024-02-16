import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Head from '../Components/Head'
import Card from '../Components/Card'
import CardDog from '../Components/CardDog'
import LinkButton from '../Components/Inputs/LinkButton'

function home() {

  


 return (
    <div className={styles.home}>
      <Head title="Home" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
      <section className={styles.presentation}>
          <div className={`container ${styles.container}`}>
            <div className={`containerWrapper ${styles.containerWrapper}`}>
                <div className={`${styles.logoPress} animeLeft`}>
                  <div className={`${styles.abeaIcon}`}>
                    <p className="margarine">abea</p>
                    <i className="fa-solid fa-paw"></i>
                  </div>
                  <div className={styles.infoButton}>
                    <p>Juntos, promovendo o bem-estar dos animais desabrigados e necessitados.</p>
                    <Link to="/about-us" className={styles.buttonLink}>Sobre nós</Link>
                  </div>
                </div>
                <div className={`${styles.dogImage} animeBottom`}></div>
            </div>
          </div>
      </section>

      <section className={styles.cards}>
        <div className='container'>
          <h1 className={styles.cardTitle}>Serviços & Eventos</h1>
          <div className='containerWrapper'>
              <div className={styles.cardWrapper}>
                 <Card icon="fa-solid fa-house" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fabrigos.jpg?alt=media&token=d9973ba1-22ef-4026-9a7d-146f1cf95822" title="Abrigo & Adoção" desc="Abrigamos animais de rua, os tratamos e os colocamos para adoção." />
                 <Card icon="fa-solid fa-dog" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fadote.jpg?alt=media&token=3af863fc-0ab8-441d-855f-d314338be127" title="Ache seu amigo" desc="Todo mês fazemos um evento de adoção, para você que está procrurando um amigo." />
                 <Card icon="fa-solid fa-handshake-angle" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fajuda.jpg?alt=media&token=ec1296a5-4306-4a4d-aa21-06a53d6689f3" title="Ajudamos Pets" desc="Você está sem condições de cuidar do seu pet? que tal não fazer nada precipitado e nós contatar." />
                 <Card icon="fa-solid fa-heart" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fdoacoes.jpg?alt=media&token=4b37b2dc-5651-473b-8735-8ff038799b81" title="Doações" desc="Todo mês um evento de doações é feito, parar recebermos ou doarmos mantimentos para os bichinhos." />
              </div>
          </div>
        </div>
      </section>


      <section className={styles.aboutUs}>
          <div className="container">
            <div className={styles.aboutUsInfo}>
              <h1 className='margarine'>QUEM SOMOS NÓS?</h1>
              <p>A Associação de Bem-Estar Animal (ABEA) é um grupo comprometido com o cuidado e a proteção dos animais. Nossa jornada começou há 2 anos, impulsionada por uma paixão unânime por criar um impacto positivo na vida dos animais desabrigados e vulneráveis.</p>
              <LinkButton link="/about-us" name="Saiba mais"/>
            </div>
          </div>
      </section>

      <section className={styles.partner}>
          <div className="container">
            <div className={styles.partnerInfo}>
              <h1>Torne-se um apoiador</h1>
              <p>Junte-se à Associação de Bem-Estar Animal (ABEA) e faça a diferença na vida dos animais desabrigados e necessitados. Sua contribuição é fundamental para oferecer cuidados, abrigo e amor a esses animais. Existem várias maneiras de se envolver: faça uma doação, torne-se um voluntário, patrocine um animal ou participe de nossos eventos. Cada gesto de apoio nos aproxima ainda mais de alcançar nosso objetivo comum: proporcionar uma vida melhor para todos os animais.</p>
              <LinkButton link="/turn-partner" name="Seja um Apoiador"/>
            </div>
          </div>
      </section>

       <section className={styles.cardsDog}>
        <div className='container'>
          <h1 className={styles.cardDogsTitle}>Depoimentos & Histórias</h1>
              <div className={styles.cardDogsWrapper}>
                 <CardDog name="Bolinha" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fbolinha.jpg?alt=media&token=29c120aa-3304-4455-9aa4-ff5ae5ffbebf" depoiment="“Oi, pessoal! Eu sou o Bolinha, e minha vida mudou completamente quando fui adotado pela ABEA. Antes, eu vivia nas ruas sem ter um lar para chamar de meu. Agora, graças ao amor e cuidado que recebi, tenho uma família incrível que me ama muito. Obrigado, ABEA, por me encontrar e por todo o carinho que me deram”"/>
                 <CardDog name="Luna" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fluna.jpg?alt=media&token=77dc3a48-4c6d-44e3-9726-7aac87c04370" depoiment="“Olá a todos! Sou a Luna, uma sortuda que teve a chance de ser adotada pela Associação de Bem-Estar Animal. Eu não acreditava que alguém me daria uma segunda chance, mas eles acreditaram em mim. Agora, tenho um lar aconchegante, uma família amorosa e muito carinho. Estou imensamente grata à ABEA por ter mudado minha vida para sempre.”"/>
                 <CardDog name="Thor" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fthor.jpg?alt=media&token=59bd5cff-2dc3-4be3-8fb5-a49c4ebc5658" depoiment="“Oi, pessoal! Meu nome é Thor e minha história começou a brilhar quando fui adotado pela ABEA. Eu estava sozinho, mas agora tenho um lugar para chamar de lar e pessoas que me fazem sentir amado todos os dias. Obrigado, Associação de Bem-Estar Animal, por me mostrar que a felicidade está em encontrar um lar cheio de amor.”"/>
              </div>
        </div>
      </section>
    </div>
  )
}

export default home