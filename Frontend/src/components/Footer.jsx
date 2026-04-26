import React from 'react';
import '../styles/footer.css';
import footer from "../assets/img/footer.png"; 

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="footer">
                    <div className="content">
                        <div className="menu">
                            <a href="/">Головна</a>
                            <a href="/exhibitions">Виставки</a>
                            <a href="/catalog">Каталог</a>
                            <a href="/contact">Контакти</a>
                        </div>
                        <div className="contacts">
                            <p>Телефон:<br /> 380673456277</p>
                            <p>E-mail:<br /> <a href="mailto:vagallery@gmail.com">vagallery@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="logo-content">
                    <div className="logo-icons">
                    <img src={footer} alt="Логотип" />
                        <p className="footer-copyright">© 2024 VA Gallery. Усі права захищені.</p>
                    </div>
                    <div className="icons-left">
                    <a href="https://www.instagram.com/vika_domets?igsh=M2tud2FwdWg5NzN4" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://youtube.com/@vikadomets2119?si=8f1IN5vdX7IN0kI-" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/share/1FJztaqvZA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/viktoriia-domets-3a7361359?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
