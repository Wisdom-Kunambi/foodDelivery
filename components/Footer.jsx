import { UilGithub, UilLinkedin, UilInstagram } from '@iconscout/react-unicons';
import css from '../styles/Footer.module.css';
import Image from 'next/image';
import Logo from '../public/Logo.png';

export default function Footer() {
    return (
       
           <div className={css.container}>
            <span>Copyright &copy; 2024</span>
            <div className={css.social}>
                <UilGithub size={45} />
                <UilLinkedin size={45}/>
                <UilInstagram size={45}/>
            </div>

            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50} />
                <span>FD</span>
            </div>
           </div>
        
    )
};
