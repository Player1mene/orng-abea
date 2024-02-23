import React from 'react'
import styles from './AboutUs.module.css'
import Head from '../Components/Head'
import SectionInfo from '../Components/SectionInfo'
const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
        <Head title="Sobre nós" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Sobre Nós" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2FaboutUs.jpg?alt=media&token=2ec4b255-45a0-4334-b96e-48e27d7de20f" info="Conheça nossa história, abraçando o compromisso com o bem-estar animal." />
        <section className={styles.aboutInfo}>
            <div className='container'>
                <div className={styles.aboutWrapper}>
                  <div className={styles.aboutSingle}>
                    <div className={styles.infos}>
                      <h1>ABEA - Associação de Bem-Estar Animal</h1>
                      <p>Desde a nossa fundação em 2018, a ABEA tem sido uma voz comprometida na proteção e cuidado dos animais desabrigados e em situação de vulnerabilidade. Nossa jornada começou com um grupo dedicado de voluntários apaixonados por criar um impacto positivo na vida dos animais.</p>
                      <p>Com uma equipe comprometida de 12 de colaboradores e voluntários incansáveis, resgatamos e cuidamos de centenas de animais todos os anos, oferecendo-lhes amor, abrigo, cuidados médicos e, o mais importante, uma segunda chance para uma vida melhor.</p>
                      <p>Ao longo dos anos, expandimos nossos esforços, implementando programas educacionais, campanhas de castração e eventos de adoção responsável para sensibilizar a comunidade sobre a importância do bem-estar animal.</p>
                      <p>Nossa missão é clara: proporcionar uma vida digna e feliz para todos os animais, promovendo a adoção responsável e a conscientização sobre os direitos e necessidades desses seres tão especiais.</p>
                      <p>Acreditamos firmemente que cada vida importa. Ao unir forças com nossos apoiadores, parceiros e comunidade, continuaremos a fazer a diferença na vida dos animais e a inspirar mudanças significativas para um mundo mais compassivo.</p>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fabea.jpg?alt=media&token=3f1ea746-6aba-4f93-93b3-d0a2db9954bb" loading='lazy' alt=''/>
                  </div>
                  <div className={styles.aboutSingle}>
                    <div className={styles.infos}>
                      <h1>Como nossa história começou?</h1>
                      <p>Tudo começou com um pequeno grupo de corações compassivos e uma visão clara: fazer a diferença na vida dos animais desabrigados e necessitados. Em 2018, um momento significativo marcou o início da jornada da Associação de Bem-Estar Animal (ABEA).</p>
                      <p>Um grupo de voluntários determinados e apaixonados se uniu, movido por um profundo desejo de oferecer cuidado e proteção aos animais que precisavam de ajuda. Com dedicação incansável, esses pioneiros dedicaram seu tempo e esforço para resgatar, cuidar e encontrar lares amorosos para animais desabrigados.</p>
                      <p>Desde então, nossa história tem sido marcada por momentos emocionantes de resgate, reabilitação e adoção, enquanto continuamos a crescer e expandir nossos esforços para criar um impacto cada vez maior na comunidade e no bem-estar animal.</p>
                      <p>Nossa trajetória é um testemunho do compromisso contínuo de muitos indivíduos determinados que acreditam que cada animal merece amor, cuidado e uma chance de viver feliz.</p>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/home%2Fhistory.jpg?alt=media&token=e7dd2dcb-9864-44ed-9b4e-23f83873a571" loading='lazy' alt=''/>
                  </div>
                  <div className={styles.ownersSingle}>
                      <h1>Nossa Equipe</h1>
                      <div className={styles.owners}>

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenh(4).png?alt=media&token=ac5c23df-d2ca-45ed-8ca6-2e566ea23f11" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Yasmin Ayla</h3>
                            <p>fundadora</p>
                          </div>  
                        </div>  

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhra(1).png?alt=media&token=51a45024-d352-4b3f-8fe6-30749cb3fd88" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Elisa Liz Silveira</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenra(2).png?alt=media&token=40a245d9-ec8c-43ae-a442-b9cafad2f800" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Heitor Joaquim Cardoso</h3>
                            <p>cuidador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhro(1).png?alt=media&token=a48082cc-42e0-4e45-a9c6-9f014032a73a" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Felipe Fernando</h3>
                            <p>co-fundador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhro(3).png?alt=media&token=d292799c-6a64-4e36-9c6f-6a635eec0e0f" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Ana Emanuelly </h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhra.png?alt=media&token=33b19555-3457-4df2-bcdf-82337830f9a1" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Jéssica Bárbara da Silva</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhra(2).png?alt=media&token=241402d4-bcf0-41c8-8c47-198a4e278121" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Nina Analu Silveira</h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhora.png?alt=media&token=0262ba4f-b62d-4d84-9ed0-f6eb9ba00d3d" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Regina Maya Moreira</h3>
                            <p>Co-fundadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/logo%26icons%2Fsenhor.png?alt=media&token=06d90e26-0c58-4172-a77f-53783ca56d27" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>André José Fernandes</h3>
                            <p>cuidador</p>
                          </div>  
                        </div> 

                      </div>  
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs