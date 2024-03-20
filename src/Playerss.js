import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Playerss = ({ players }) => {
  const inlinestyle = { cursor: "pointer", color: "red" };  

  return (
    <div className="cartes">
      {players.map((joueur) => (
        <div key={joueur.id}>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={joueur.image} width={"200px"} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h4 style={inlinestyle}>{joueur.Nom}</h4>{" "}
                </Card.Title>
                <Card.Text>
                  <p>
                    <strong>Club : </strong>
                    {joueur.Equipe}{" "}
                    <img src={joueur.icone} alt="icone-real" width={"20px"} />
                  </p>
                  <p>
                    {" "}
                    <strong>Nationalité : </strong>
                    {joueur.Nationalité}{" "}
                    <img src={joueur.pays} alt="pays" width={"20px"} />
                  </p>
                  <p>
                    <strong> Ages : {joueur.Age}</strong> ans{" "}
                  </p>
                  <p>
                    {" "}
                    <strong> Numero : {joueur.Numero}</strong>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <strong>publier </strong>le 14/03/2024 à 15h
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      ))}
    </div>
  );
};

export default Playerss;
