const genre = [
    'Barbecue 🍖',
    'Burger 🍔',
    'Chinese 🥡',
    'Fajitas 😋',
    'French 😋',
    'Greek 🥙',
    'Indian 🍛',
    'Italian 🍝',
    'Korean 🍚',
    'Persian 😋',
    'Pizza 🍕',
    'Ramen 🍜',
    'Sandwich 🥪',
    'Steak 🥩',
    'Sushi 🍣',
    'Seafood 🐟 🍤',
    'Tacos 🌮',
    'Thai 🍲',
    'Wings 🍗'
]

button = () => {
    let genreThis = genre[Math.floor(Math.random() * genre.length)]
    document.getElementById('eatThis').innerHTML = genreThis
}


