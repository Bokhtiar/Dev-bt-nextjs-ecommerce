const Product = ({products}) => {
    return (
        <div>
           
                <div className="container">
                <div className="row">
                {
                    products.map((product, index)=>
                        <div className="col-12 col-md-3 col-lg-3 my-3">
                            <div class="card" style={{ width: "16rem", height:"460px" }}>
                                <img src={product.image} class="card-img-top" style={{ height:"300px" }} alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <div className="form-inline text-center">
                                       <p className="text-center"> 
                                            <a href="#" class="btn btn-primary">a</a>&nbsp;
                                            <a href="#" class="btn btn-primary">a</a>&nbsp;
                                            <a href="#" class="btn btn-primary">a</a>&nbsp;
                                        </p>
                                    </div>
                                
                                </div>
                            </div> 
                        </div>
                        
                    )
                }   
                </div>
                    </div>
            
            <p>asdfsadfsd</p>
        </div>
    )
}



export default Product

