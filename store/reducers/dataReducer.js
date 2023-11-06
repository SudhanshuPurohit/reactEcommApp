import { Password } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'data',
  initialState: {

    adminAuth: {
      id: "admin@gmail.com",
      Password: 12345,
    },

    data: [
      {
        id: 1,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "T-Shirt"
      },
      {
        id: 2,
        img: "https://t3.gstatic.com/images?q=tbn:ANd9GcSsL-4Z3d-KrFbKGow1BRTosAkL8CVt1cotIOWtLw3vVdN9AqPk",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "T-Shirt"

      },
      {
        id: 3,
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "T-Shirt"

      },
      {
        id: 4,
        img: "https://us.123rf.com/450wm/semilyon/semilyon2007/semilyon200700011/151133655-red-female-glossy-leather-bag-isolated-on-white-background.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "Hand-Bag"

      },
      {
        id: 5,
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "Hand-Bag"

      },
      {
        id: 6,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "Cap"

      },
      {
        id: 7,
        img: "https://m.media-amazon.com/images/I/61rK0elH9EL.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "Cap",

      },
      {
        id: 8,
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea.",
        categories: "Jacket",


      },
      {
        id: 9,
        img: "https://media.istockphoto.com/id/1342121693/photo/blue-sport-winter-jacket-isolated-on-white-warm-clothes.jpg?s=612x612&w=0&k=20&c=l-hDjB6RgtSDSDnqJHOJAQds_2xEBPL9ZncaFQdcVtQ=",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet deserunt at iure quia, ratione, maxime ipsam assumenda voluptates aliquam blanditiis pariatur ut. Minus sit facere, fugit assumenda quae sed!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus ab sapiente nesciunt eveniet ipsum, eum quod itaque fugiat, et fuga ratione, aliquam sit ut optio id aperiam ipsa ea."
        ,
        categories: "Jacket",

      },

    ],

    cart: [

    ]
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (state.cart.length > 0) {

        var isPresent = false;

        for (let index = 0; index < state.cart.length; index++) {
          const element = state.cart[index];

          if (element.currentProduct.id == action.payload) {
            isPresent = true;

            break;
          }
          else {
            isPresent = false;
          }
        }

        if (!isPresent) {
          
          state.cart = [...state.cart, action.payload];

        }
console.log(isPresent)



      }
      else {
        state.cart = [...state.cart, action.payload];

      }
    },
    updateCartItem: (state, action) => {

      state.cart = [...state.cart, action.payload]
    },

    IncreaseCartItemCount: (state, action) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].currentProduct.id == action.payload) {
          state.cart[index].count += 1;
          console.log(state.cart[index].count)
          break;

        }

      }
    },
    decreaseCartItemCount: (state, action) => {
      for (let index = 0; index < state.cart.length; index++) {
        if (state.cart[index].currentProduct.id == action.payload) {
          if (state.cart[index].count >= 1)
            state.cart[index].count -= 1;
        }

      }
    }




  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, IncreaseCartItemCount, decreaseCartItemCount } = counterSlice.actions

export default counterSlice.reducer