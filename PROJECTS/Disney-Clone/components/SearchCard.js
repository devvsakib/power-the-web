import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
function SearchCard({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <CardActionArea onClick={() => router.push(`/movie/${result.id}`)}>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ maxHeight: 180 }}
          image={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {result.name || result.title || result.original_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {result.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SearchCard;
