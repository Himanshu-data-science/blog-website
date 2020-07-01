require('dotenv').config();



const username=process.env.NAME;
const password=process.env.PASSWORD;
const host=process.env.HOST;
const database=process.env.DATABASE;
const node_env=process.env.NODE_ENV;




const config={
    dev:{
        db:{
                username,
                password,
                host,
                database
        }
    },
    test:{

    },
    prod:{

    }
}
// console.log('config_file______________',config);
module.exports=config;