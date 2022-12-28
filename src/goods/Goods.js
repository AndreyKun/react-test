function Goods(props) {
    return(
        <>
            {props.goods.map(item =>
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