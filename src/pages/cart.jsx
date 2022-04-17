import Layout from "../components/Layout";

const Cart = ({carts}) => {

    return (
        <Layout>
            <section className="container">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((cart, index)=>{
                                <tr>
                                    <th scope="row">{cart.id}</th>
                                    <td>{cart.userId}</td>
                                    <td>{cart.date}</td>
                                </tr>
                            })
                        }

                        
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`https://fakestoreapi.com/carts`)
    const carts = await response.json()
    console.log(carts)
    return { props: { carts } }
  }
  

export default Cart;