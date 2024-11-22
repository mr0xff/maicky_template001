/** 
 * @param {string} highligthText pode usar uma expressão html para poder manter a formatação
 * @param {string} description uma simples string
 * @param {{label: string; href: string}} heroButton nome e url do botão de destaque
 * @param {string} image url da image banner (PNG com transparência equivalente ao fundo da pagina)
 * @param {boolean} leftImage colocar a image a esquerda ou manter a direita 
 * @returns 
 */
function Hero({
  highligthText,
  description,
  heroButton,
  imageBanner,
  leftImage
}){
  return(
    <div class="banner bn-2" id="bn-2">
      <div class="image">
        <img src={imageBanner} alt="" srcset="" />
      </div>
      <div class="conteudo">
        <h1>{highligthText}</h1>
        <p id="descricao">{description}</p>
        <br />
        <br />
        <nav>
          <a href={heroButton.href} id="getstart">{heroButton.label}</a>
        </nav>
      </div>
    </div>
  );
}

export default Hero;