import {sql} from './db.js'


sql`
CREATE TABLE video1 ( 
    title TEXT,     
    description TEXT,               
    duration INTEGER     
);
`.then(()=>{
    console.log('created table')
})