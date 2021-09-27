import React from "react";
import StatistiqueCard from "./StatistiqueCard";
import "./StatistiqueSection.css";

function StatistiqueSection(props) {
  return (
    <div className="statistique container my-3">
      <div className="row mb-5">
        <div className="col-12 col-lg-6 statistique-column-container py-1">
          <StatistiqueCard number={props.statistiques?.utilisateur} name="Utilisateurs" img="./images/Ellipse 33.svg" />
          <StatistiqueCard number={props.statistiques?.profession} name="Profession" img="./images/Ellipse 34.svg" />
        </div>
        <div className="col-12 col-lg-6 statistique-column-container py-1">
          <StatistiqueCard number={props.statistiques?.competence} name="Compétences" img="./images/Ellipse 35.svg"  />
          <StatistiqueCard
            number={props.statistiques?.pays}
            name="Pays de résidence"
            img="./images/Ellipse 36.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default StatistiqueSection;
