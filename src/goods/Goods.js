function Goods(props) {
    return(
        <div className="goods-block">
            <h3>{props.goods[0].title}</h3>
            <p>{props.goods[0].cost}</p>
            <img src={props.goods[0].image} alt="" />
        </div>
    );
}

export default Goods;