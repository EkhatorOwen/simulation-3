const saveUser =(req,res)=>{
   const { body } = req;
  
    req.app.get('db').auth
            .save_user([body.username,body.password,body.profile_pic])
                .then(response=>{
                        res.status(200).json(response)
                })
}

const login = (req,res) =>{
    
    const { params } = req;

    req.app.get('db').auth
            .get_user([params.username,params.password])
                .then(response=>{
                    console.log(response)
                    res.status(200).json(response)
                })
}

module.exports={
    saveUser,
    login
}