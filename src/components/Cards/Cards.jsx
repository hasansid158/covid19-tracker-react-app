import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";

//styles
import styles from "./Cards.module.css";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles["card-container"]}
      >
        <Grid
          item
          component={Card}
          xc={12}
          md={3}
          className={cn(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed && confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate && new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xc={12}
          md={3}
          className={cn(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {recovered && recovered.value <= 0 ? (
                "Data Unavailable"
              ) : (
                <CountUp
                  start={0}
                  end={recovered && recovered.value}
                  duration={2.5}
                  separator=","
                />
              )}
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate && new Date(lastUpdate).toDateString()}
            </Typography>{" "}
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xc={12}
          md={3}
          className={cn(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths && deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {lastUpdate && new Date(lastUpdate).toDateString()}
            </Typography>{" "}
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
