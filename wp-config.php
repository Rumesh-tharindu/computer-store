<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'computer-store' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7lQJ@>7h3+j9g0jVdqBd4lOA%5O1? _vNHI5PiB|de86gYsGPlc/b4.-TDDNcXou' );
define( 'SECURE_AUTH_KEY',  'v=3.dF,ohtTGS=hW,UHt>%GJcUupmMZpE~l[dmu:}bU2/U<VH6u}ad^-0F+y`O[w' );
define( 'LOGGED_IN_KEY',    'n)![&J#ij(kT/vU,A[at*P_X.OcX-v]@ce+>t[q+M.,vI:19Ss0GM`xY7O-G`CdS' );
define( 'NONCE_KEY',        '-h@+_d<=`yT7pIVx`feFMRFBVg``$E6**@Lo)B{sTnywzeC+Zqo}&}wP6+Q$I?=Z' );
define( 'AUTH_SALT',        'p*)7bY)g:GW<4x${W-MgG_.,yUkCaK00,X14BHNyTZKuE]yG(^W=?U5D|W=0.Uhq' );
define( 'SECURE_AUTH_SALT', '!&bh_nadtq1xU/uGG+x2WLrbyP!>qvWn`xKjfRDh$K/}5s31io{c_AS7i<tN9W=o' );
define( 'LOGGED_IN_SALT',   'jt^8Tio=/(mVei?sa,vgI>$`e3eG:1w~:=NRc1PWKIFwDwb_W>MmT*33G#%K36w`' );
define( 'NONCE_SALT',       'X!&i+c{GA}A04^>d?Rc-&:e6g rNB[m-<Bi$m3Ku~jdJcr#%ueUjR1 +rk)O@wCF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
