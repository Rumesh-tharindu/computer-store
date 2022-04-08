<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yourretailer
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri() ?>/assets/images/favicon.ico">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site " >

    <!-- header -->

	<!-- desktop header -->
	<header id="site-header" class="site-header desktop-header d-desktop">
		<div class="container">
		<div class="header-inner">
          <div class="header-inner_left">
		  <div class="logo">
                <a  href="<?php echo site_url() ?>">
				



			</a>
				</div>
		  </div>

		  <div class="header-inner_right">
		  

			<div class="bottom-nav-header">
		  
			<div class="bottom-nav">
				
				<div class="navitems">
					<div class="main-menu">
								<ul class="primary-menu">
					<?php
						wp_nav_menu(
							array(
								'container'  => '',
								'items_wrap' => '%3$s',
								'theme_location' => 'primary',
							)
						);

					?>
                     
				
					</ul>
								</div>
					
				</div>
				
			</div>
		
	
		</ul>

	</div>

		  </div>
		</div>
		</div>	
	</header>

	<!-- End desktop header -->




	  <!--End  header -->
	<!-- main-->
	<main id="primary" class="site-main">

	
