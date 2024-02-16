import React from 'react'
import styles from './Services.module.css'
import Head from '../Components/Head'
import SectionInfo from '../Components/SectionInfo'
import DropInput from '../Components/Inputs/DropInput'


const Services = () => {
  return (
    <div className={styles.services}>
        <Head title="Serviços" description="Juntos, promovendo o bem-estar dos animais <br></br>desabrigados e necessitados."/>
        <SectionInfo name="Serviços & Eventos" image="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/sectionInfo%2Fservices.jpg?alt=media&token=1856fd23-bb68-45d3-b225-99f4fdc2f3da" info="Descubra nossos serviços e eventos: unindo paixão por animais e compromisso com o bem-estar." />
        <section className={styles.topics}>
            <div className={`${styles.topicsContainer} container`}>
                <div className={styles.singleTopicLeft}>
                    <div className={styles.infoTopic}>
                        <div><h1>Abrigos & Adoções</h1></div>
                        <div><p>Na ABEA, estamos empenhados em fornecer cuidados amorosos e encontrar lares permanentes para animais desabrigados e em situação de vulnerabilidade. Nossos abrigos são refúgios temporários, mas cheios de calor e cuidados, onde cada animal recebe atenção individualizada, alimentação adequada e cuidados veterinários.</p></div>
                        <div><p>Nossos serviços incluem:</p></div>
                        <DropInput title="Resgate e Acolhimento" dropInfo="Comprometemo-nos em resgatar animais em situações de risco, oferecendo-lhes abrigo temporário, cuidados médicos e emocionais até que sejam adotados em lares amorosos.." />
                        <DropInput title="Processo de Adoção Responsável" dropInfo="Promovemos a adoção responsável, realizando cuidadosos processos de seleção para garantir que cada animal seja adotado por famílias que ofereçam amor, cuidado e ambiente adequado." />
                        <DropInput title="Programas de Sensibilização e Educação" dropInfo="Oferecemos programas educacionais para sensibilizar a comunidade sobre a importância da adoção responsável, castração e cuidados adequados para os animais." />
                        <DropInput title="Suporte Pós-Adoção" dropInfo="Continuamos a oferecer suporte pós-adoção para garantir que os animais e suas novas famílias estejam ajustando-se bem e para fornecer orientação e assistência conforme necessário." />
                        
                        <div><p>Cada adoção não apenas transforma a vida do animal, mas também enriquece a vida da família adotante. Junte-se a nós nesse compromisso de proporcionar uma segunda chance e um lar amoroso para todos os animais que acolhemos.</p></div>
                    </div>
                    <div className={styles.ImageTopic}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/topics%2Ftopic1.jpg?alt=media&token=c610bfba-f168-4df2-aec3-1f180b619ef1" alt="" loading='lazy'/>
                    </div>
                </div>


                <div className={styles.singleTopicRight}>
                    <div className={styles.infoTopic}>
                            <div><h1>Encontre seu amigo</h1></div>
                            <div><p>Na ABEA, estamos entusiasmados em apresentar nosso evento de adoção "Encontre Seu Amigo". Este evento especial é dedicado a conectar animais amorosos e resgatados a lares amorosos, oferecendo uma oportunidade única para encontrar o companheiro perfeito para você.</p></div>
                            <div><p>Nosso evento de adoção apresenta:</p></div>
                            <DropInput title="Animais Resgatados e Prontos para Adoção" dropInfo="Conheça uma seleção de animais resgatados, desde adoráveis cães e gatos até pequenos animais, todos ansiosos para encontrar um lar amoroso. Cada um desses animais tem uma história única e espera ansiosamente por uma segunda chance." />
                            <DropInput title="Perfis Detalhados dos Animais" dropInfo=" Apresentamos perfis completos e detalhados de cada animal disponível para adoção. Saiba mais sobre sua personalidade, histórico médico e veja fotos encantadoras para conhecer melhor o animal que poderá se tornar seu amigo para a vida " />
                            <DropInput title="Processo de Adoção Acolhedor" dropInfo="Nossa equipe está pronta para orientá-lo durante todo o processo de adoção. Faremos todo o possível para ajudar      você a encontrar o animal perfeito que se encaixe no seu estilo de vida e lar." />
                            <DropInput title="Visitas e Interações Personalizadas" dropInfo="O evento oferece a oportunidade de visitar e interagir com os animais. Desfrute de um tempo especial com esses animais, crie um vínculo e descubra se é a combinação ideal para você." />
                            
                            <div><p>Cada adoção não apenas transforma a vida do animal, mas também enriquece a vida da família adotante. Junte-se a nós nesse compromisso de proporcionar uma segunda chance e um lar amoroso para todos os animais que acolhemos.</p></div>
                        </div>
                        <div className={styles.ImageTopic}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/topics%2Ftopic2.jpg?alt=media&token=63989254-47ad-4e50-8572-3f8a8f357275" alt="" loading='lazy'/>
                        </div>
                </div>

                 <div className={styles.singleTopicLeft}>
                    <div className={styles.infoTopic}>
                        <div><h1>Ajudamos Pets</h1></div>
                        <div><p>Na ABEA, nosso compromisso com o bem-estar animal vai além da adoção; também nos dedicamos a oferecer suporte e assistência a animais que precisam de ajuda, mesmo que não estejam prontos para adoção imediata. A seção "Ajudamos Pets" destaca nossos esforços para ajudar animais em diversas situações.</p></div>
                        <div><p>Nossos serviços e compromissos incluem:</p></div>
                        <DropInput title="Cuidados Veterinários Emergenciais" dropInfo="Oferecemos assistência veterinária de emergência para animais feridos, doentes ou em situações de risco, garantindo que recebam tratamento médico imediato." />
                        <DropInput title="Resgate e Reabilitação" dropInfo="Trabalhamos incansavelmente para resgatar animais em situações de perigo ou maus-tratos, proporcionando cuidados, abrigo e reabilitação para que possam se recuperar física e emocionalmente." />
                        <DropInput title="Programas de Esterilização e Castração" dropInfo="Realizamos programas de esterilização e castração para controlar a população animal e promover a saúde e o bem-estar a longo prazo." />
                        <DropInput title="Assistência a Animais Abandonados" dropInfo="Oferecemos apoio e cuidados a animais abandonados, fornecendo alimento, abrigo temporário e encaminhamento para adoção ou programas de assistência." />
                        
                        <div><p>Nosso compromisso é fornecer apoio compreensivo a animais que enfrentam dificuldades, garantindo-lhes uma segunda chance de viverem vidas saudáveis e felizes. Juntos, podemos fazer a diferença na vida desses animais e criar um impacto positivo em nossa comunidade.</p></div>
                    </div>
                    <div className={styles.ImageTopic}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/topics%2Ftopic3.jpg?alt=media&token=6288ea2e-7f72-41d9-8150-41d7bf6d0179" alt="" loading='lazy'/>
                    </div>
                </div>



                <div className={styles.singleTopicRight}>
                    <div className={styles.infoTopic}>
                            <div><h1>Evento de Arrecadação de Mantimentos para Nossos Amigos Peludos</h1></div>
                            <div><p>Estamos empolgados em convidar você para o nosso evento especial de arrecadação de mantimentos para ajudar nossos amigos peludos na ABEA. Este evento é uma oportunidade única para você doar ou contribuir com itens essenciais que são vitais para o bem-estar dos animais sob nossos cuidados.</p></div>
                            <div><p>Neste evento:</p></div>
                            <DropInput title="Doações de Mantimentos" dropInfo="Estamos recebendo doações de itens essenciais, como ração de qualidade, cobertores, brinquedos, coleiras, roupas para o frio, materiais de limpeza e outros itens que ajudam a manter nossos animais felizes e saudáveis." />
                            <DropInput title="Participe e Faça a Diferença" dropInfo="Você pode participar deste evento trazendo mantimentos ou fazendo uma doação monetária. Cada contribuição ajuda a garantir que nossos amigos peludos recebam os cuidados e a atenção que merecem." />
                            <DropInput title="Impacto Direto nos Animais" dropInfo=" Ao doar ou participar, você está fazendo uma diferença real na vida dos animais resgatados. Seu gesto generoso nos ajuda a manter os suprimentos necessários para cuidar adequadamente desses animais." />
                            <DropInput title="Gratidão e Reconhecimento" dropInfo="Agradecemos imensamente a sua generosidade e apoio contínuo. Cada doação, grande ou pequena, é valiosa e faz uma diferença significativa na qualidade de vida dos animais que ajudamos." />
                            
                            <div><p>Junte-se a nós neste evento especial de arrecadação de mantimentos. Seu apoio é fundamental para garantir que nossos amigos peludos recebam o cuidado e o amor que merecem. Agradecemos antecipadamente por ser parte desta iniciativa que transforma vidas.</p></div>
                        </div>
                        <div className={styles.ImageTopic}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/abea-project.appspot.com/o/topics%2Ftopic4.jpg?alt=media&token=dd78b900-a6b2-497f-ad19-8df985d0820b" alt="" loading='lazy'/>
                        </div>
                </div>


            </div>
        </section>
    </div>
  )
}

export default Services