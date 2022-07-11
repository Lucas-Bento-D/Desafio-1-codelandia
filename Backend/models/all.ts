// @ts-nocheck
const db = require('../config/dbConnection')
const Posts = db.Mongoose.model('post', db.userSchema, 'post')

class methods{
    constructor(){
        this.getPosts.bind(this)
        this.postPosts.bind(this)
    }
    async getPosts(request: Request, response: Response){
        try{
            const docs: any = await Posts.find({}).lean().exec();
    
            return response.json(docs)
        }
        catch(err){
            console.log(err)
        }
    }
    async postPosts(request: Request, response: Response){
        const date = new Date()
        const title = request.body.title
        const text = request.body.text
        
        const teste = { date, title, text }
        const user = new Posts(teste);
        try{
            if(!title.length || !text.length){
                return response.status(417).json({message: "Expectation Failed", status: 417});
            }else{
                await user.save()
                return response.status(200).json({message: "Successfully Registered", status: 200});
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new methods