const mysql = require('mysql2/promise');

const passwordsToTry = ['', 'root', '123456', 'admin', '1234', 'password', '12345678'];

async function testConnections() {
  for (const pwd of passwordsToTry) {
    try {
      const conn = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: pwd,
        database: 'electricitybills'
      });
      console.log(`SUCCESS: Connected to MySQL with password: "${pwd}"`);
      const [rows] = await conn.execute('SHOW TABLES;');
      console.log(`Found ${rows.length} tables in electricitybills database:`);
      rows.forEach(r => console.log(' - ' + Object.values(r)[0]));
      await conn.end();
      return pwd;
    } catch (err) {
      // Password failed, try next
    }
  }
  console.log('NOTICE: None of common default passwords worked. User will specify password.');
  return null;
}

testConnections();
