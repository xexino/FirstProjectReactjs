import ShoopingCartItems from "./Shooping-cart-items";

const ShoopingCartList = () => {
    return (
        <div className="container border w-75 m-5">
            <div className="d-flex justify-content-between align-items-center p-4">
                <input type="search" className="form-control w-25" placeholder="Search By Title" />
                <p className="m-0">Total : 100.24$</p>
            </div>
            <ul className="list-group">

              <ShoopingCartItems />

              <ShoopingCartItems />
              <ShoopingCartItems />
              <ShoopingCartItems />
            </ul>
        </div>

    );
}

export default ShoopingCartList;