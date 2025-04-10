const express = require('express');
const app = express();
const port =3000;

app.use(express.static('views'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/view/index.html')
});
app.listen(port,()=>{
    console.log(`server funcionando en https://localhost:$(3000)`);
})
