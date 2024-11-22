function Footer(){ 
  return(
    <footer>
    <div class="footer-container">
        <div class="footer-section about">
            <h2>Sobre Nós</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugiat nobis. Quae vel accusamus praesentium quas beatae odio, veniam repellendus!</p>
        </div>

        <div class="footer-section links">
            <h2>Links Úteis</h2>
            <ul>
                <li><a href="#" id="inicial">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Ajuda</a></li>                    
            </ul>
        </div>

        <div class="footer-section contact">
            <h2>Contato</h2>
            <p><i class="fas fa-phone"></i> +244 950-683-934</p>
            <p><i class="fas fa-envelope"></i> makondadaniel2023@gmail.com</p>
        </div>

        <div class="footer-section social">
            <h2>Siga-nos</h2>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Seu Site. Todos os direitos reservados.</p>
    </div>
</footer>
  );
}

export default Footer;