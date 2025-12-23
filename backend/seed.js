import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import Product from './model/product.model.js';

  const connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URL);
         console.log("connected");
    } catch (error) {
        console.log("not connected",error)
    }
 }

const products = [
    {
        name : "Beauty product",
        brand : "Lakme",
        price : 2500,
        category : "beauty",
        description : "Enhance your natural glow with premium skincare and gentle nourishing products.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563629/ecommerce/hhsrr8ghinruuavbr5lk.jpg'
    },
    {
        name : "Beauty product",
        brand : "Loreal",
        price : 2500,
        category : "beauty",
        description : "Luxurious beauty essentials designed to hydrate, brighten, and refresh your skin.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563630/ecommerce/gmcgjq0igatlzkbqwt5w.jpg'
    },
    {
        name : "Beauty product",
        brand : "Lakme",
        price : 2500,
        category : "beauty",
        description : "Pure, gentle formulas crafted to keep your skin smooth and radiant",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563631/ecommerce/heqfyahjbdytniidvmqm.jpg'
    },
    {
        name : "Beauty product",
        brand : "Mamaearth",
        price : 2500,
        category : "beauty",
        description : "Transform your routine with deeply moisturizing, rejuvenating beauty care products today.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563632/ecommerce/kky7dtisqfnxd5oa3qll.jpg'
    },
    {
        name : "Beauty product",
        brand : "Lakme",
        price : 2500,
        category : "beauty",
        description : "Pure, gentle formulas crafted to keep your skin smooth and radiant",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563634/ecommerce/nrxjat7ftrpidasm3odt.jpg'
    },
    {
        name : "Beauty product",
        brand : "lakme",
        price : 2500,
        category : "beauty",
        description : "Luxurious beauty essentials designed to hydrate, brighten, and refresh your skin.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563638/ecommerce/ad6dkkoihcpezh1fru3e.jpg'
    },
    {
        name : "Beauty product",
        brand : "Loreal",
        price : 2500,
        category : "beauty",
        description : "Enhance your natural glow with premium skincare and gentle nourishing products.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563640/ecommerce/hqhx4ai6ye8jk1hdagxh.jpg'
    },
    {
        name : "Beauty product",
        brand : "Loreal",
        price : 2500,
        category : "beauty",
        description : "High-quality makeup and skincare for flawless, long-lasting everyday confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563641/ecommerce/insgglzdsjaw22ohx20m.jpg'
    },
    {
        name : "Beauty product",
        brand : "Loreal",
        price : 2500,
        category : "beauty",
        description : "Pure, gentle formulas crafted to keep your skin smooth and radiant",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563646/ecommerce/osiaky3gi7d8bxw3mnqr.jpg'
    },
    {
        name : "Kidswear",
        brand : "unknown",
        price : 2500,
        category : "kids",
        description : "Soft, colorful kidswear crafted for playful comfort and all-day fun.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563648/ecommerce/tqhl8wkgfn5xkixkg6by.jpg'
    },
    {
        name : "kidswear",
        brand : "special kids",
        price : 2500,
        category : "kids",
        description : "Durable, breathable clothing perfect for energetic kids exploring their world.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563650/ecommerce/imetr6zklwmlnihlqxip.jpg'
    },
    {
        name : "kidswear",
        brand : "jack&jones",
        price : 2500,
        category : "kids",
        description : "Stylish kidswear combining fun prints, soft fabrics, and everyday practicality.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563653/ecommerce/v4mo5btddqb4drabhbea.jpg'
    },
    {
        name : "kidswear",
        brand : "jack&jones",
        price : 2500,
        category : "kids",
        description : "Cute outfits designed to keep children comfortable, active, and always smiling.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563656/ecommerce/gjwlsavr7bq2w2ht5euh.jpg'
    },
    {
        name : "kidswear",
        brand : "jack&jones",
        price : 2500,
        category : "kids",
        description : "Quality clothing created for kids who love running, playing, discovering joy.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563658/ecommerce/i3u54v4ealhs7nqv2z4z.jpg'
    },
    {
        name : "kidswear",
        brand : "special kids",
        price : 2500,
        category : "kids",
        description : "Cute outfits designed to keep children comfortable, active, and always smiling.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563659/ecommerce/o6dn7memxteanwpa7wme.jpg'
    },
    {
        name : "kidswear",
        brand : "cutekids",
        price : 2500,
        category : "kids",
        description : "Durable, breathable clothing perfect for energetic kids exploring their world.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563660/ecommerce/mzxyufwnb4fmfvtrza5j.jpg'
    },
    {
        name : "kidswear",
        brand : "cutekids",
        price : 2500,
        category : "kids",
        description : "Soft, colorful kidswear crafted for playful comfort and all-day fun.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563663/ecommerce/zhcudih5jleonagmty8q.jpg'
    },
    {
        name : "fitness product",
        brand : "fitbuddy",
        price : 2500,
        category : "fitness",
        description : "Fitness essentials designed to boost strength, stamina, and everyday workout performance.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563664/ecommerce/olxmfrhgzdqq9pesrspd.jpg'
    },
    {
        name : "fitness product",
        brand : "fitbuddy",
        price : 2500,
        category : "fitness",
        description : "High-quality gear built to support active lifestyles and consistent exercise routines.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563666/ecommerce/jcvqamdknjfvgmimjsls.jpg'
    },
    {
        name : "fitness product",
        brand : "fitbuddy",
        price : 2500,
        category : "fitness",
        description : "Durable equipment created for intense training sessions and serious fitness progress.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563668/ecommerce/goxcyb8vj45xm5r5lmif.jpg'
    },
    {
        name : "fitness product",
        brand : "fitbuddy",
        price : 2500,
        category : "fitness",
        description : "Fitness essentials designed to boost strength, stamina, and everyday workout performance.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563670/ecommerce/oqn5ig6phpzh9eluyl5o.jpg'
    },
    {
        name : "gadget",
        brand : "smartworld",
        price : 2500,
        category : "gadgets",
        description : "Cutting-edge gadgets built to enhance daily productivity with innovative smart features.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563671/ecommerce/f40v2ju0udvy4lv0detn.jpg'
    },
    {
        name : "gadget",
        brand : "smart gadgets",
        price : 2500,
        category : "gadgets",
        description : "Advanced devices designed for seamless performance, speed, and smarter modern living.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563673/ecommerce/ntfaothgs48w61oomava.jpg'
    },
    {
        name : "gadget",
        brand : "e-mantra",
        price : 2500,
        category : "gadgets",
        description : "Compact, high-tech gadgets offering convenience, efficiency, and futuristic user experience.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563675/ecommerce/hednskvdgj6pcmexxiou.jpg'
    },
    {
        name : "gadget",
        brand : "e-mantra",
        price : 2500,
        category : "gadgets",
        description : "Premium electronic gadgets crafted for power users needing speed and reliability daily.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563647/ecommerce/fr37jfmuv3414ncjqeet.jpg'
    },
    {
        name : "health product",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "Daily health products supporting immunity, energy, and overall body wellness naturally.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563676/ecommerce/aseqqc7j36g4tbk95pxd.jpg'
    },
    {
        name : "health product",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "Essential supplements crafted to maintain balance, strength, and long-term wellbeing.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563677/ecommerce/q2pgb4i6uiqsbpfhvkzd.jpg'
    },
    {
        name : "health product",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "Trusted health essentials designed to boost vitality and maintain daily wellness.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563679/ecommerce/pagjxzz6lppuuvedi3ml.jpg'
    },
    {
        name : "health product",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "High-quality supplements providing essential nutrients for healthier, energized lifestyle routines.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563680/ecommerce/hmqlevzmio3ntamy1sun.jpg'
    },
    {
        name : "health product",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "Natural wellness products improving digestion, immunity, and overall physical balance",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563682/ecommerce/jz49exsrncxq3kapkfge.jpg'
    },
    {
        name : "healhtproduct",
        brand : "healthylife",
        price : 2500,
        category : "health",
        description : "Daily health products supporting immunity, energy, and overall body wellness naturally.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563683/ecommerce/o6kw2rdscyanjbwyymtp.jpg'
    },
    {
        name : "health product",
        brand : "healthy life",
        price : 2500,
        category : "health",
        description : "Daily health products supporting immunity, energy, and overall body wellness naturally.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563685/ecommerce/j3jqa41yftogo5uwqqae.jpg'
    },
    {
        name : "menswear",
        brand : "Roadster",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563686/ecommerce/w0gyhmnpbzuhowizj07l.jpg'
    },
    {
        name : "menswear",
        brand : "Roadster",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563688/ecommerce/uqcgln45bfejr7fwnsl4.jpg'
    },
    {
        name : "menswear",
        brand : "Highlander",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563689/ecommerce/olrbqdncjrajimde4qir.jpg'
    },
    {
        name : "menswear",
        brand : "denim",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563690/ecommerce/vqestq3lwrgr2he5gdvc.jpg'
    },
    {
        name : "menswear",
        brand : "roadster",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563692/ecommerce/gdv3vhah0kmfuoj8cq9j.jpg'
    },
    {
        name : "menswear",
        brand : "gap",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563695/ecommerce/plr9wlvrnrnfzj1udyyj.jpg'
    },
    {
        name : "menswear",
        brand : "highlander",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563699/ecommerce/n9zbgfgzlehlwqwau2b7.jpg'
    },
    {
        name : "menswear",
        brand : "special mens",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563702/ecommerce/rqipoiaqyyrymv14g3mi.jpg'
    },
    {
        name : "menswear",
        brand : "roadster",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563704/ecommerce/raypdoq9tdclqahvz8qi.jpg'
    },
    {
        name : "menswear",
        brand : "denim",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563706/ecommerce/axbrpyswz9han6m2p5d0.jpg'
    },
    {
        name : "menswear",
        brand : "denim",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563707/ecommerce/bpqpmglfxzl5iwzfcfhf.jpg'
    },
    {
        name : "menswear",
        brand : "denim",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563710/ecommerce/y9fmy03suhyyjplrao4i.jpg'
    },
    {
        name : "menswear",
        brand : "roadster",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563712/ecommerce/libn2g4zvmypszeqbrce.jpg'
    },
    {
        name : "menswear",
        brand : "denim",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563713/ecommerce/otdlrk9eyugazlvkmai4.jpg'
    },
    {
        name : "gadgets",
        brand : "special product",
        price : 2500,
        category : "gadgets",
        description : "Cutting-edge gadgets built to enhance daily productivity with innovative smart features.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563715/ecommerce/jpucd7spey3kokkvejpu.jpg'
    },
    {
        name : "gadget",
        brand : "e-smart",
        price : 2500,
        category : "gadgets",
        description : "Advanced devices designed for seamless performance, speed, and smarter modern living.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563716/ecommerce/tgmzmwwpwzemwkiskzq3.jpg'
    },
    {
        name : "gadgets",
        brand : "e-smart",
        price : 2500,
        category : "gadgets",
        description : "Advanced devices designed for seamless performance, speed, and smarter modern living.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563718/ecommerce/pb99pwfy1uzocb7x5tc3.jpg'
    },
    {
        name : "gadgets",
        brand : "e-mantra",
        price : 2500,
        category : "gadgets",
        description : "Premium electronic gadgets crafted for power users needing speed and reliability daily.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563719/ecommerce/pdvoezlqbxsbtwww6utv.jpg'
    },
    {
        name : "gadgets",
        brand : "e-mantra",
        price : 2500,
        category : "gadgets",
        description : "Cutting-edge gadgets built to enhance daily productivity with innovative smart features.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563722/ecommerce/ahzmivbbly0ptsjcocnm.jpg'
    },
    {
        name : "womenswear",
        brand : "special womens",
        price : 2500,
        category : "womens",
        description : "Chic, lightweight outfits made for women who love modern expressive style.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563723/ecommerce/guhqpd5wehgirje2pgei.jpg'
    },
    {
        name : "womenswear",
        brand : "special womens",
        price : 2500,
        category : "womens",
        description : "Vibrant womenswear blends beauty, comfort, and bold fashion for every occasion.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563724/ecommerce/sksact9fvm3bgry2myie.jpg'
    },
    {
        name : "womenswear",
        brand : "balaji",
        price : 2500,
        category : "womens",
        description : "Elegant womenswear crafted for comfort, confidence, and everyday effortless style.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563726/ecommerce/svlzf6ekshkrzlbieflw.jpg'
    },
    {
        name : "womenswear",
        brand : "balaji",
        price : 2500,
        category : "womens",
        description : "Elegant womenswear crafted for comfort, confidence, and everyday effortless style.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563727/ecommerce/n79x2yg0rn1toglcfcjf.jpg'
    },
    {
        name : "womenswear",
        brand : "shreeji",
        price : 2500,
        category : "womens",
        description : "Soft, stylish clothing tailored for women seeking comfort without losing elegance.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563766/ecommerce/g0382h4anldxxq0ubzpb.jpg'
    },{
        name : "womenswear",
        brand : "shreeji",
        price : 2500,
        category : "womens",
        description : "Soft, stylish clothing tailored for women seeking comfort without losing elegance.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563768/ecommerce/myggdg0jzqz0z3ykpexk.jpg'
    },
    {
        name : "womenswear",
        brand : "shreeji",
        price : 2500,
        category : "womens",
        description : "Chic, lightweight outfits made for women who love modern expressive style.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563770/ecommerce/t3mjutzyb7tgb26peohw.jpg'
    },
    {
        name : "menswear",
        brand : "HRX",
        price : 2500,
        category : "mens",
        description : "Stylish, comfortable menswear crafted for modern fashion and all-day ease.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563729/ecommerce/ofpbwnzfkfrduttqscwe.jpg'
    },
    {
        name : "menswear",
        brand : "HRX",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563730/ecommerce/dex3ynbboumhioryyszj.jpg'
    },
    {
        name : "menswear",
        brand : "HRX",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563732/ecommerce/lwb7zziyjzkhqi8iygqj.jpg'
    },
    {
        name : "menswear",
        brand : "Roadster",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563733/ecommerce/lkubzhlv0i3vqtyiwezw.jpg'
    },
    {
        name : "menswear",
        brand : "Highlander",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563735/ecommerce/u2hxxot0khf7walnazh3.jpg'
    },
    {
        name : "menswear",
        brand : "special mens",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563736/ecommerce/dmgif1ooop3orgoh4rib.jpg'
    },
    {
        name : "menswear",
        brand : "tiptop",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563738/ecommerce/vhm6fcekub0kpdrskqye.jpg'
    },
    {
        name : "menswear",
        brand : "tiptop",
        price : 2500,
        category : "mens",
        description : "Stylish, comfortable menswear crafted for modern fashion and all-day ease.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563741/ecommerce/okvvbdntsweil7nfgopb.jpg'
    },
    {
        name : "menswear",
        brand : "special mens",
        price : 2500,
        category : "mens",
        description : "Premium fabrics tailored to elevate every man’s everyday wardrobe with confidence.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563744/ecommerce/ob0rfbels0kfenzayql4.jpg'
    },
    {
        name : "menswear",
        brand : "Roadster",
        price : 2500,
        category : "mens",
        description : "Smart, functional clothing built to match men’s active and professional lifestyles.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563758/ecommerce/dxfynjo5ejml5zvkwcl9.jpg'
    },
    {
        name : "menswear",
        brand : "smartmens",
        price : 2500,
        category : "mens",
        description : "Trendy outfits blending comfort, durability, and sharp style for men.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563761/ecommerce/tbeoq7bp9p4ylxsobe2m.jpg'
    },
    {
        name : "menswear",
        brand : "smartmens",
        price : 2500,
        category : "mens",
        description : "Stylish, comfortable menswear crafted for modern fashion and all-day ease.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563762/ecommerce/xgdpergvjebfsbptytlb.jpg'
    },
    {
        name : "Smartwatch",
        brand : "Boat",
        price : 2500,
        category : "gadgets",
        description : "Premium electronic gadgets crafted for power users needing speed and reliability daily.",
        image : 'https://res.cloudinary.com/dji1t0vry/image/upload/v1763563764/ecommerce/yeeqban9yezpzp5ejlpm.jpg'
    }
]

async function seed(){
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products added");
}
seed();