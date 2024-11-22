// import '../assets/css/styles.css';
/**
 * 
 * @param {{
 *  title: string;
 *  body: string;
 *  isMiddle?: boolean; 
 * }[]} content lista de elementos com titulo, corpo e se o middle, a class de formatação é habilitada ou não
 * @returns 
 */

function HeroCard({ contents }){
  return(
    <div class="cards">
      {contents.map(((item, key) =>(
        <div key={key} class={`card ${item?.isMiddle?"middle":""}`}>
          <h1><span>{item.title}</span></h1>
          <p>{item.body}</p>
          <br />
          <nav>
            <a href={item.href} id="getstart">Get start</a>
          </nav>
       </div>
      )))}
    </div>
  );
}

export default HeroCard;