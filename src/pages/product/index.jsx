import Layout from "../../components/Layout"
import Link from "next/link"

const Product = ({products}) => {
    return (
        <section>
            <Layout>
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
                                            <Link href={`/product/${product.id}`} class="btn btn-primary">eye</Link>&nbsp;
                                            <a href="#" class="btn btn-primary">cart</a>&nbsp;
                                            <a href="#" class="btn btn-primary">chioce</a>&nbsp;
                                        </p>
                                    </div>
                                
                                </div>
                            </div> 
                        </div>
                    )
                }   
                </div>
            </div>
            </Layout>
        </section>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const products = await response.json()
    return { props: { products } }
  }

export default Product