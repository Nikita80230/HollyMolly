import axios from "axios";
import { useEffect } from "react";
import { StyledHomePage } from "./Styled";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export default function HomePage() {
  useEffect(() => {
    const fetchData = async () => {
      const username = " 11171026";
      const password = "60-dayfreetrial";
      const authString = `${username}:${password}`;
      const encodedAuthString = btoa(authString);
      try {
        const response = await axios.get(
          "http://teamchallenge-001-site1.ktempurl.com/api/test",
          {
            headers: {
              Authorization: `Basic ${encodedAuthString}`,
            },
          }
        );
        if (response.data) {
          console.log(response.data);
        } else {
          console.log("No data received");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledHomePage>
      <h1>HollyMolly</h1>
    </StyledHomePage>
  );
}
