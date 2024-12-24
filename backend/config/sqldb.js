
// Load the mysql2 package
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // your MySQL username
  password: 'upspring', // your MySQL password
  database: 'lutw_local_1' // your database name
});

// Connect to the database
connection.query('select username,last_name,email,password,deleted,account_type,default_color,picture,isUninstall,keyword,isemailConfirm,isemailtopic,isshardTopic,highlightEmail,isemailWebmark,darkMode,current_topic,rating,user_img,bio,user_name,user_notify,chrome_id,user_notify_landing,free_user,subscription_user,donation_popup,donation_popup_days_left,highlight_on_off,public_highlight_on_off,alternative_site_on_off,similey_on_off,sidepopover_on_off,BrowserBookmarkImported from  user  ORDER BY date_created DESC', (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query results:', results);
  });
  
  // Close the connection
  connection.end();