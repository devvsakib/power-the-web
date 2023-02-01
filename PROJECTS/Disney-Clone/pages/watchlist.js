import { useContext } from "react";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../context/GlobalState";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  const { removeFromWatchlist } = useContext(GlobalContext);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Navbar />
      {watchlist.length === 0 ? (
        <div className="flex justify-center items-center mt-10">
          <h1 className="font-bold text-4xl">ADD MOVIES OR SHOWS!!!</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-16 ml-40 mb-16">
          {watchlist.map((watch) => {
            return (
              <>
                <Card sx={{ maxWidth: 345, Height: 280 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        `${BASE_URL}${
                          watch.backdrop_path || watch.poster_path
                        }` || `${BASE_URL}${watch.poster_path}`
                      }
                      alt="green iguana"
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ marginTop: 2, marginLeft: 2 }}
                    >
                      {watch.name || watch.title || watch.original_name}
                    </Typography>
                  </CardActionArea>
                  <div className="">
                    <Button
                      size="medium"
                      color="error"
                      sx={{ marginLeft: 1.5 }}
                      onClick={() => removeFromWatchlist(watch.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WatchList;
