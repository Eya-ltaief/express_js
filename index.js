//importing express
const express = require ("express");
//importing the path
const path = require("path");
//creating an instance of express
const app = express();
//imprting th date
const d = new Date()
//importing the hours
const  hours = d.getHours() ;
//creating an array of days
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//getting the day
const dayName = days[d.getDay()];



//middelware function
function logger(req,res,next){
    if(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayName)&&(hours>=9 && (hours<=17) )){
       next()}
    else {
        res.send("site is closed")
        
    }
}
//calling the logger function
app.use(logger)
//setting a static folder
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
});
//connecting it to the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
