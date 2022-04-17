import Link from 'next/link'

const Navbar = ({categories}) => {
    console.log('categories',categories)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a class="navbar-brand " href={'/'}> <img src="/imgs/f.png" height={'50px'} alt="" /> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={'/about'}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={'/about'}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={'/cart'}>Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={'/contact'}>Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={'/product'}>Product</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    Profile
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}



export async function getServerSideProps() {
    const catRes = await fetch(`https://fakestoreapi.com/products/categories`)
    const categories = await catRes.json()
    console.log('category',categories)
    return { props: {categories } }
  }

export default Navbar