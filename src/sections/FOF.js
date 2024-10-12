/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import { Link } from "components/link";
import Button from "components/form/button";

export default function Fof() {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            height: "50vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Link path="/" label="GO BACK">
            <Button>Go Back</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
