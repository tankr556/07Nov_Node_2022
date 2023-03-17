const mongoose = require("mongoose")

const dburl = "mongodb://127.0.0.1:27017/7nov";

mongoose.connect(dburl).then(()=>{
    console.log("db connected");
}).catch(err=>{
    console.log(err);
})

const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type: Number
    },
    qty:{
        type:Number,
        default:0
    }
})

const Product = new mongoose.model("Product",productSchema);

const addProduct=()=>{
    const p1=new Product({name:"Fan",price:500})
    p1.save().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
}
const addManyProduct=()=>{
    const p1=new Product({name:"laptop",price:50000,qty:10})
    const p2=new Product({name:"TV",price:15000,qty:5})
    const p3=new Product({name:"mouse",price:500,qty:4})
    Product.insertMany([p1,p2,p3]).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })

}

const viewProduct=async()=>{
    // Product.find().then(data=>{
    //     console.log(data);
    // }).catch(err=>{
    //     console.log(err);
    // })

    try {
        const data=await Product.find({name:"TV"});
        console.log(data[0].price);
    } catch (error) {
        console.log(error);
        
    }
}

const viewFilter=async()=>{
    try {
        const data=await Product.findOne({name:"Fan"});
        console.log(data.price);
    } catch (error) {
        console.log(error);
    }
}
const deleteProduct=async()=>{
    try {
        // const data=await Product.findByIdAndDelete({_id:"63abc89d91675aab03119a13"})
        // const data = await Product.deleteOne({name:"TV"})
        const data=await Product.deleteMany({name:"TV"})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const updateProuct=async()=>{
    try {
        const data=await Product.findByIdAndUpdate("63abcb5dda9e1629e355fa9b",{qty:12});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//addProduct();
//addManyProduct()
//viewProduct()
//viewFilter()
// deleteProduct()
updateProuct()