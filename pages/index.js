import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>

      <title>Eflyer</title>
      <meta name="keywords" content=""/>
      <meta name="description" content=""/>
      <meta name="author" content=""/>

      <link rel="stylesheet" type="text/css" href="./frontend/css/bootstrap.min.css"/>

      <link rel="stylesheet" type="text/css" href="./frontend/css/style.css"/>

      <link rel="stylesheet" href="./frontend/css/responsive.css"/>

      <link rel="icon" href="./frontend/images/fevicon.png" type="image/gif" />

      <link rel="stylesheet" href="./frontend/css/jquery.mCustomScrollbar.min.css"/>
  
      <link rel="stylesheet" href="./frontend/https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>

      <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet"/>

      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Poppins:400,700&display=swap&subset=latin-ext" rel="stylesheet"/>
      <link rel="stylesheet" href="./frontend/css/owl.carousel.min.css"/>
      <link rel="stylesoeet" href="./frontend/css/owl.theme.default.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
      
	  
	  

	  <script src="./frontend/js/jquery.min.js"></script>
      <script src="./frontend/js/popper.min.js"></script>
      <script src="./frontend/js/bootstrap.bundle.min.js"></script>
      <script src="./frontend/js/jquery-3.0.0.min.js"></script>
      <script src="./frontend/js/plugin.js"></script>
    
      <script src="./frontend/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="./frontend/js/custom.js"></script>
      <script>
         {/* function openNav() {
           document.getElementById("mySidenav").style.width = "250px";
         }
         
         function closeNav() {
           document.getElementById("mySidenav").style.width = "0";
         } */}
      </script>
	  
	  
	  </Head>

      <main>
	  {/* <!-- header top section start --> */}
         <div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Gift Ideas</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header top section start --> */}


		 
	  </main>
    </div>
  )
}
