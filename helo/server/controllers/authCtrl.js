const saveUser =(req,res)=>{
   const { body } = req;
  
    req.app.get('db').auth
            .save_user([body.username,body.password])
                .then(response=>{
                        res.status(200).json('hi')
                })
}

const login = (req,res) =>{
    
    const { body } = req;

    req.app.get('db').auth
            .get_user([body.username,body.password])
                .then(response=>{
                    res.status(200).json(response)
                })
}

module.exports={
    saveUser,
    login
}