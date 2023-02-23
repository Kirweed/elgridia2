import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../auth";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import userOutfit from "../assets/test-sprite.png";
import BigPlainText from "../components/common/BigPlainText";
import SimpleSprite from "../engine/SimpleSprite";

const LobbyView = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      if (ctx) {
        const sprite = new SimpleSprite({ src: userOutfit });
        sprite.setAnimation("walk-down");
        const canvasLoop = () => {
          if (!canvas.current) return;
          ctx.clearRect(0, 0, canvas.current?.width, canvas.current?.height);
          sprite?.draw(ctx);
          requestAnimationFrame(canvasLoop);
        };
        canvasLoop();
      }
    }
  }, [canvas]);

  return (
    <>
      <Header />
      <StyledContainer>
        <BigPlainText>Jesteś zalogowany jako:</BigPlainText>
        <UserInfoLabel>
          <BigPlainText>username</BigPlainText>
          <BigPlainText> 1lvl</BigPlainText>
        </UserInfoLabel>

        <OutfitCanvas width="64" height="96" ref={canvas} />
        <StyledButtons>
          <Button
            onClick={() => {
              navigate("/game");
            }}
          >
            Wejdź do gry
          </Button>
          <Button error onClick={logOut}>
            logout
          </Button>
        </StyledButtons>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const OutfitCanvas = styled.canvas`
  display: block;
  margin: 50px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 2px solid white;
  border-radius: 20px;
  transform: scale(2);
`;

const UserInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export default LobbyView;
