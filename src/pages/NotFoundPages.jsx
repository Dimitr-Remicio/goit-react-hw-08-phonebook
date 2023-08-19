import { useLottie } from "lottie-react";
import error404 from "../assets/img/error-404.json";
import { Button, Card } from "@mui/material";

const NotFoundPage = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: error404,
  };

  const { View } = useLottie(lottieOptions);

  const handleNavigate = () => {
    window.location.href =
      "https://esgg1.github.io/goit-react-hw-08-phonebook/";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "white",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          transition: "0.5s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        {View}
        <Button
          onClick={handleNavigate}
          style={{ marginBottom: "3em" }}
          variant="outlined"
        >
          Go Back
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;
