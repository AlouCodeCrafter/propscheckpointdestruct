import Playerss from "./Playerss";

const Player = () => {
  const players = [
    {
      id: 1,
      Nom: "Critstiano Ronaldo",
      Equipe: "Real Madrid",
      Nationalité: "Portugais",
      Age: 38,
      Numero: 7,
      image: "/images/Cr7.jpg",
      icone: "/images/real.jpg",
      pays: "images/portugal.jpg",
    },
    {
      id: 2,
      Nom: "Lionel Messi",
      Equipe: "Fc Barcelona",
      Nationalité: "Argentin",
      Age: 36,
      Numero: 10,
      image: "/images/Messi.jpg",
      icone: "/images/barca.jpg",
      pays: "images/argentine.jpg",
    },
    {
      id: 3,
      Nom: "Sadio Mané",
      Equipe: "Liverpool",
      Nationalité: "Senegalais",
      Age: 31,
      Numero: 10,
      image: "/images/Sadio.jpg",
      icone: "/images/live.jpg",
      pays: "images/sn.jpg",
    },
    {
      id: 4,
      Nom: "Kylian Mbappé",
      Equipe: "Paris Saint-Germain",
      Nationalité: "Français",
      Age: 25,
      Numero: 7,
      image: "/images/Mbappé.jpg",
      icone: "/images/psg.jpg",
      pays: "images/fr.jpg",
    },
  ];

  return <Playerss players={players} />;
};

export default Player;
