import React from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'


function Header() {


    const [mobile, setMobile] = React.useState(false)
    const [title, setTitle] = React.useState(null)
    const location = useLocation();

    React.useEffect(()=>{
        function menuMobile(){
            setMobile(false)
        }
        window.addEventListener('resize',menuMobile);


        return ()=> window.removeEventListener('resize', menuMobile)
    },[])


    React.useEffect(()=>{
        const {pathname} = location;
        switch(pathname){
        case '/services':
        setTitle('services');
        break;
        case '/adopt':
        setTitle('adopt');
        break;
        case '/about-us':
        setTitle('about');
        break;
        case '/contact':
        setTitle('contact');
        break;
        case '/turn-partner':
        setTitle('partner');
        break;
        default:
        setTitle('home')
    }

    },[location])

    const [show, setShow] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { 
          setShow(false);
          setMobile(false) 
        } else { 
          setShow(true);  
        }

        setLastScrollY(window.scrollY); 
    };

    React.useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


  return (
    <header className={`${styles.header} ${!show ? styles.hide : ""}`}>
    <div style={{display: mobile ? 'block' : 'none'}} className={styles.overLay} onClick={()=>{setMobile(!mobile)}}></div>
        <div className='container'>
            <div className={styles.navbar}>
                <div className={styles.mobileNav}>

                     <div className={styles.menuButtonWrapper}>
                    <button className={styles.menuButton} onClick={()=>{setMobile(!mobile)}}><i className="fa-solid fa-bars"></i></button>
                    </div>

                    <div className={styles.logoWrapper}>
                        <Link to="/" className={`${styles.logo}`}>
                            <img src="https://cdn.discordapp.com/attachments/1088120399478390897/1188587861289738240/image.png?ex=659b11b5&is=65889cb5&hm=eeb8af37c50a93898d4b0995c192edc85fce711a23f3e6e1d07f921078614546&" alt="" loading='lazy'/>
                        </Link>
                    </div>    
                    
                   

                </div>
                <div style={{left: mobile ? '0px' : '-300px'}} className={styles.navigation} >
                    <ul>
                        <li><Link to="/" className={ title === "home" ? "pagina" : ""}>Home</Link></li>
                        <li><Link to="/services" className={ title === "services" ? "pagina" : ""}>Serviços & Eventos</Link></li>
                        <li><Link to="/adopt" className={ title === "adopt" ? "pagina" : ""}>Adote um Amigo</Link></li>
                        <li><Link to="/about-us" className={ title === "about" ? "pagina" : ""}>Sobre nós</Link></li>
                        <li><Link to="/contact" className={ title === "contact" ? "pagina" : ""}>Contato</Link></li>
                        <li className={styles.mobilePartner}><Link to="/turn-partner" className={title === "partner" ? "pagina" : "" }>Seja um apoiador</Link></li>
                    </ul>
                    <div className={styles.closeButton}>
                        <button onClick={()=>{setMobile(false)}}><i className='fa-solid fa-xmark'></i></button>
                    </div>
                </div>
                <div className={styles.buttonPartner}>
                    <Link to="/turn-partner">Seja um Apoiador</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header