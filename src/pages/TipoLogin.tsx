import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import Background from "../components/Background/Background";

function TipoLogin() {
  return (
    <>
    <div className="blue-container">
      <form>
        <NavLink to="/login?userType=medico">
          <Button title="Médico" color="secondary">
            <UserDoctor className="icon" />
            Médico
          </Button>
        </NavLink>
        <NavLink to="/login?userType=paciente">
          <Button title="Paciente" color="secondary">
            <UserHeart className="icon" />
            Paciente
          </Button>
        </NavLink>
      </form>
    </div>
      <Background/>
    </>
  );
}

export default TipoLogin;
