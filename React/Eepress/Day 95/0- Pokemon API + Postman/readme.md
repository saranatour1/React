### Make 5 different GET requests to retrieve 5 different pokemon
requested : [Link](https://pokeapi.co/api/v2/pokemon?limit=2&offset=0)
```json
{
    "count": 1281,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=2&limit=2",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
    ]
}

```
requested [Link](https://pokeapi.co/api/v2/pokemon/5)

```json
{
    "abilities": [
        {
            "ability": {
                "name": "blaze",
                "url": "https://pokeapi.co/api/v2/ability/66/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "solar-power",
                "url": "https://pokeapi.co/api/v2/ability/94/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 142,
    "forms": [
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon-form/5/"
        }
    ],
    ...
}

```
requested [Link](https://pokeapi.co/api/v2/ability/battle-armor)
```json
{
    "effect_changes": [],
    "effect_entries": [
        {
            "effect": "Attacken können keinen kritischen Treffer landen.\n\nDiese Fähigkeit ist identisch mit shell armor.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "short_effect": "Schützt vor kritischen Treffern."
        },
        {
            "effect": "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to shell armor.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "short_effect": "Protects against critical hits."
        }
    ],
}
```

requested [Link](https://pokeapi.co/api/v2/pokemon-species/aegislash)

```json
{
    "base_happiness": 50,
    "capture_rate": 45,
    "color": {
        "name": "brown",
        "url": "https://pokeapi.co/api/v2/pokemon-color/3/"
    },
    "egg_groups": [
        {
            "name": "mineral",
            "url": "https://pokeapi.co/api/v2/egg-group/10/"
        }
    ],
    "evolution_chain": {
        "url": "https://pokeapi.co/api/v2/evolution-chain/349/"
    },
    "evolves_from_species": {
        "name": "doublade",
        "url": "https://pokeapi.co/api/v2/pokemon-species/680/"
    },
    "flavor_text_entries": [
        {
            "flavor_text": "れきだいの　おうが　つれていた。\nれいりょくで　ひとや　ポケモンの\nこころを　あやつり　したがわせる。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version": {
                "name": "x",
                "url": "https://pokeapi.co/api/v2/version/23/"
            }
        },
}
```
requested [Link](https://pokeapi.co/api/v2/pokemon-color/3/)

```json

{
    "id": 3,
    "name": "brown",
    "names": [
        {
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "name": "ちゃいろ"
        },
        {
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "name": "갈색"
        },
        {
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "name": "褐色"
        },
        {
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "name": "Brun"
        },
        {
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "name": "Braun"
        },
}
```