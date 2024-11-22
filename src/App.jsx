import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard"
import MainHero from "./components/MainHero"

function App() {
  const heroCards = [
    {
      title: "Segurança",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!",
      href: "#"
    },
    {
      title: "Flexibilidade",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!",
      href: "#",
      isMiddle: true,
    },
    {
      title: "Dinamismo",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, obcaecati ullam ratione rerum cumque harum nobis vel voluptates, nostrum accusantium fuga, veniam voluptate neque dolore!",
      href: "#"
    }
  ];

  return (
    <>
      <main>
        <MainHero
          highligthText="A melhor solução para a sua <span>empresa melhorar</span> e inovar!"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, asperiores."
          heroButton={{ 
            label: "Get start the visit",
            href: "#" 
          }}
          imageBanner="banner.png"
        />

        <div class="container cd-cards" id="cd-cards">
          <div class="theme">
            <h1>Nossos <span>soluções</span></h1>
            <p id="descricao">Lorem ipsum dolor sit amet.</p>
          </div>

          <HeroCard contents={heroCards} />
        </div>
        
        <Hero
          highligthText="A melhor solução para a sua <span>empresa melhorar</span> e inovar!"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, asperiores."
          heroButton={{ 
            label: "Get start the visit",
            href: "#" 
          }}
          imageBanner="banner_2.png"
        />
      </main>
    </>
  )
}

export default App
