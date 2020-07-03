import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent } from "@material-ui/core";
import TableWithPagination from "./TableWithPagination";
import PodiumCard from "./PodiumCard";
import ButtonCard from "./ButtonCard";

import { getRating } from 'utils/services';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const LeaderBoard = () => {
  const classes = useStyles();
  const [rowsTotal, setRowsTotal] = useState([]);
  const [rowsFiltered, setRows] = useState([]);
  const [error, setError] = useState(false);
  const [level, setLevel] = useState("TODOS");

  function createData(position, name, score, level, date, avatar) {
    return { position, name, score, level, date, avatar };
  }
  const subjects = [
    {
      url: "static/img/matematica.png",
      title: "MATEMATICA",
      width: "33%"
    }
  ];

  const levels = [
    {
      url: "static/img/colegio5.png",
      title: "PRINCIPIANTE",
      width: "25%"
    },
    {
      url: "/static/img/colegio6.png",
      title: "INTERMEDIO",
      width: "25%"
    },
    {
      url: "/static/img/colegio7.png",
      title: "EXPERTO",
      width: "25%"
    },
    {
      url: "/static/img/colegio8.png",
      title: "TODOS",
      width: "25%"
    }
  ];

  useEffect(() => {
    if (level === "TODOS") {
      //si no se filtro nada
      setRows(rowsTotal);
    }
    else if (level !== "TODOS") {
      setRows(
        rowsTotal.filter(r => r.level.toUpperCase() === level.toUpperCase())
      );
    }
    // eslint-disable-next-line
  }, [level]);

  useEffect(() => {

    fecthList();

  }, []);

  let fecthList = async () => {
    getRating()
    .then((data) => {
      setError(false);
      setRowsTotal(data)
      setRows(data);
    })
    .catch((err) => {
      console.log(err)
      setError(true);
    })
  }

  if (error)
    return (
      <Fragment>
        <div>Se produjo un error y no pudimos obtener el ranking. Intenta mas tarde.</div>
      </Fragment>)

  return (
    <Fragment>
      <div className={classes.root}>
        <ButtonCard images={levels} setTitle={setLevel} />
      </div>
      <CardContent className="d-flex justify-content-center">
        {rowsFiltered[1] ? (
          <PodiumCard
            positionImg="/static/img/silverMedal.png"
            positionDescription="Segunda Posición"
            student={rowsFiltered[1]}
          />
        ) : null}

        {rowsFiltered[0] ? (
          <PodiumCard
            positionImg="/static/img/goldMedal.png"
            positionDescription="Primera Posición"
            student={rowsFiltered[0]}
          />
        ) : null}

        {rowsFiltered[2] ? (
          <PodiumCard
            positionImg="/static/img/bronzeMedal.png"
            positionDescription="Tercera Posición"
            student={rowsFiltered[2]}
          />
        ) : null}
      </CardContent>
      <TableWithPagination
        rows={rowsFiltered}
      />
    </Fragment>
  );
};

export default LeaderBoard;
