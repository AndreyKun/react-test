function Goods(props) {
    const goods = [
      {'title': 'apple', 'cost': 330, 'image': 'https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__food_apple_grocery_gastronomy-512.png'},
      {'title': 'pear', 'cost': 230, 'image': 'https://cdn3.iconfinder.com/data/icons/fruits-8/512/pear-512.png'}
    ];

    return(
        <>
            {goods.map(item =>
                <div className="goods-block">
                    <h3>{item.title}</h3>
                    <p>{item.cost}</p>
                    <img src={item.image} alt={item.title} />
                </div>
            )}
        </>
    );
}

export default Goods;