//customizing section
/**  @type {import('tailwindcss').Config}*/
export default {
  //giving access to the content
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //everything I wanna add must be in extend, otherwise it will rewrite every tailwind default style
    extend: {
      //adding new colors
      colors: {
        //Creating my own color
        mygreen:"#43f76a",
        //Creating my own color with different options
        myblue:{
          50:'##43f76a',
          100:'#3b44f5',
        }
      }
    },
  },
  plugins: [],
}
