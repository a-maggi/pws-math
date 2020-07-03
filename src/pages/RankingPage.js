import React from "react";

import LeaderBoard from "../components/ranking/Leaderboard";
import Layout from "components/Layout";

const RankingPage = () => {
  //const { nickname, updateNickname } = useUserData(); // Our data and methods

  React.useEffect(() => {

  }, []);

  return (
    <Layout isAuth={true}>
      <h1>Ranking</h1>
      <LeaderBoard />

      <style jsx>{`
        h1,
        h2 {
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          margin: 0 0 4rem 0;
          text-align: center;
          color: #000;
        }
        h1 span {
          font-weight: 400;
        }
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.4rem;
        }
      `}</style>
    </Layout>
  );
};

export default RankingPage;
