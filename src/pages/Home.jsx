import { Button, Card } from "@mui/material";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/img/mobil7.jpg";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    isLoggedIn ? navigate("/contacts") : navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "85vh",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Save all your contacts in Phonebook
      </h1>
      <Button
        onClick={handleNavigate}
        variant="contained"
        style={{
          backgroundColor: "#b0d385",
          height:"50px",
          color: "black",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, transform 0.3s",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {isLoggedIn ? "Go to Contacts" : "Get Started"}
      </Button>
      <div style={{ width: "60%", marginTop: "30px" }}>
        <Card
          sx={{
            transition: "0.5s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          {/* Contenido de la tarjeta... */}
        </Card>
      </div>
    </div>
  );
};

export default Home;
