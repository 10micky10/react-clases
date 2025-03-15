const apiKey = "2ozgGUUAL0qH0HQNpGI9uYc1psVazBUO";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

peticion.then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  }).catch(err => console.warn(err));

