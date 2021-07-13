'use strict '

const mongoose=require('mongoose');
const CartImg =require('./CartImg.model')
const UserImg =require('./UserImg.model')
const FavImg =require('./FavImg.model')


const userSchema= new mongoose.Schema({
    email:{type:String},
    name:{type:String},
    cart:[CartImg],
    favImg:[FavImg],
    userData:[UserImg]

})

const userModel=mongoose.model('userdata',userSchema)


const seedUser=()=>{
        const ahmad = new userModel({
        email:'anofal719@gmail.com',
        name:'ahmad nofal',
        userData:[{
            nameImg: 'ronaldo',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'ronaldo',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
        }],
        cart:[{
            nameImg: 'ronaldo ',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
            price: '200',
             }]
    });

    // assel
    const assel = new userModel({
        email:'aseelalsayeh97@gmail.com',
        name:'aseel alsayeh',
        userData:[{
            nameImg: 'Flower',
            img: 'https://www.befunky.com/images/prismic/b4ae775f-e756-449e-acdf-d11e3b2d1493_landing-photo-to-art-img-2-after.png?auto=webp&format=jpg&width=863',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'night',
            img: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg?t=1544067607&',
        }],
        cart:[{
            nameImg: 'night ',
            img: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg?t=1544067607&',
            price: '200',
             }]
    });
    // mayyadah
    const mayyadah = new userModel({
        email:'mayyadah.shehadeh@gmail.com',
        name:'mayyadah shehadeh',
        userData:[{
            nameImg: 'The Osjessluis near Kalverstraat in Amsterdam',
            img: 'https://images.unsplash.com/photo-1583934555960-0ae3e0f71992?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=369&q=80',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'unsplash',
            img: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }],
        cart:[{
            nameImg: 'unsplash ',
            img: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            price: '400',
             }]
    });
    // ibrahem 
    const ibrahem = new userModel({
        email:'ibrahem.omari96@gmail.com',
        name:'ibrahem alomari',
        userData:[{
            nameImg: 'Anime boy',
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c013d2f7-077a-4361-90ca-d83a86af59f9/ddn88n0-0ce7ba32-9308-4393-a7ce-24fbf3ae0849.jpg/v1/fill/w_1280,h_1811,q_75,strp/drawing_a_anime_boy_step_by_step_for_beginners_by_drawingtimewithme_ddn88n0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcL2MwMTNkMmY3LTA3N2EtNDM2MS05MGNhLWQ4M2E4NmFmNTlmOVwvZGRuODhuMC0wY2U3YmEzMi05MzA4LTQzOTMtYTdjZS0yNGZiZjNhZTA4NDkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pD47P5gtkBTygfW5jdo6pIgyXRJUQFkv2dev07uOEcU',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'Misak',
            img: 'https://doitbeforeme.com/wp-content/uploads/2019/10/How-to-Draw-Anime-for-Beginners-5-e1571259872615.jpg',
        }],
        cart:[{
            nameImg: 'Misak ',
            img: 'https://doitbeforeme.com/wp-content/uploads/2019/10/How-to-Draw-Anime-for-Beginners-5-e1571259872615.jpg',
            price: '300',
             }]
    });
    // hasan
    const hasan = new userModel({
        email:'Baydoun.net2011@gmail.com',
        name:'hasan baydoun',
        userData:[{
            nameImg: 'Flash',
            img: 'https://i.pinimg.com/736x/8e/63/cf/8e63cf8583f6a4e33f87b236b5ac44c3.jpg',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'Spider-Man',
            img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154904114/original/f8db4ffc71a3b15d842da65b21d23f0fa15383a2/draw-cool-illustration-manga-superhero-and-anime-character.png',
        }],
        cart:[{
            nameImg: 'Spider-Man ',
            img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154904114/original/f8db4ffc71a3b15d842da65b21d23f0fa15383a2/draw-cool-illustration-manga-superhero-and-anime-character.png',
            price: '150',
             }]
    });


    console.log(ahmad);
    ahmad.save();
    assel.save();
    mayyadah.save();
    ibrahem.save();
    hasan.save();


    
}

// seedUser();
module.exports={userModel,seedUser}