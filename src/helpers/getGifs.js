export const getGifs = async( category ) =>{
   /* const urlPokemon = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const respPoke= await fetch(urlPokemon);
    const {forms} = await respPoke.json();
    const pokemons = forms.map ( pok => {
        return{
            id:pok.name,
            title:pok.name,
            url:pok.url
        }
    })
    
    console.log(pokemons);*/
    const url =`http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=fEHbwNHB4jSzMtYW3OH2f9nVP8nICvPp`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map ( img => {
        return{
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}