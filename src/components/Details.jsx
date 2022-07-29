import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card, Button } from "antd";

export const Details = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const [showData, setshowData] = useState(false);
  const [hideIns, setHideIns] = useState(true);

  return (
    <>
      <Card
        title={state.title}
        extra={
          <img
            className="movie-image"
            src={state.imageUrl}
            alt={state.title}
            width="200px"
            height="200px"
            onClick={() => {
              setshowData(!showData);
              setHideIns(!hideIns);
            }}
          />
        }
        hoverable
      >
        {showData && (
          <>
            <h3>Ranking:</h3> <p>{state.rank}</p>
            <h3> Synopsis: </h3> <p>{state.synopsis}</p>
            <h3>Released Year:</h3> <p>{state.releaseDate}</p>
          </>
        )}
        {hideIns && <p>click on image to see the details</p>}
      </Card>
      <Button
        className="button"
        onClick={() => {
          push("/");
        }}
        type="primary"
        shape="round"
      >
        Back
      </Button>
    </>
  );
};
