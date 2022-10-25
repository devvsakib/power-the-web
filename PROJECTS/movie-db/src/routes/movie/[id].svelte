<!-- anytime you do an API request, context must be module -->
<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=a8cf7779c4ea52fae61d6e71c2a99a37&language=en-US`);
		const movieDetail = await res.json();
		if (res.ok) {
			return {
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	export let movieDetail;
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			<span>Release Date:</span>
			{movieDetail.release_date} <br />
			<span>Budget:</span>
			{movieDetail.budget} <br />
			<span>Rating:</span>
			{movieDetail.vote_average} <br />
			<span>Runtime:</span>
			{movieDetail.runtime} <br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	img {
		width: 80%;
		border-radius: 10px;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
