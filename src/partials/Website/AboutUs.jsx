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
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188572210374377552/image.png?ex=659b0321&is=65888e21&hm=d2f2a2804efcae27ce69944a41f607aa185aac2020c8fd0da6dd29a8802fb581&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Yasmin Ayla</h3>
                            <p>fundadora</p>
                          </div>  
                        </div>  

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576681821212704/image.png?ex=659b074b&is=6588924b&hm=e627646be00fb7235cf10ee32e4b15eac5d797aa4d20f83aa6188e860243b3f3&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Elisa Liz Silveira</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576741363568721/image.png?ex=659b0759&is=65889259&hm=d1495ddca2f20b5bbad4d459a4b725c021bb1326b8f23ef52dbcf3c08acb21f2&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Heitor Joaquim Cardoso</h3>
                            <p>cuidador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576790042652803/image.png?ex=659b0765&is=65889265&hm=1c76e216def209c9ea34d0ca4b84d0dc4b00a204b8906724a52c21eb1d4fe3ab&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Felipe Fernando</h3>
                            <p>co-fundador</p>
                          </div>  
                        </div> 


                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576832614838272/image.png?ex=659b076f&is=6588926f&hm=39a2b0182db2c690f37c6e4011d46af3ddf5a18f82aa9db96e4b6de27019ffc0&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Ana Emanuelly </h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576905117585408/image.png?ex=659b0780&is=65889280&hm=bdeb0ae13268fb9e620735dcc8f64bc00cfd32923daec5ea4cecea49d1f5f78d&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Jéssica Bárbara da Silva</h3>
                            <p>cuidadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188576986499645440/image.png?ex=659b0794&is=65889294&hm=2b5018b892df61466e0e5c15db4f44f6fd0a22976f1785d4e93185d1c0babb70&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Nina Analu Silveira</h3>
                            <p>atendente</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188577095287328838/image.png?ex=659b07ae&is=658892ae&hm=ff09afac9dbb72fa9b6f552a824581a15a44d5a5168d70dbb768aee7e249f9cb&" alt='' loading='lazy'/>
                          <div className={styles.ownerInfo}>
                            <h3>Regina Maya Moreira</h3>
                            <p>Co-fundadora</p>
                          </div>  
                        </div> 

                        <div className={styles.owner}>
                          <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188577041352761384/image.png?ex=659b07a1&is=658892a1&hm=d7c8dff7929a52f54540054e3647c65a969b1729c9d7b1e56e2cf507827d25a3&" alt='' loading='lazy'/>
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