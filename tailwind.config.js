/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
   
    
    
    extend: {
      fontFamily: {
        oswald: ['oswald', 'sans-serif']
      },
      keyframes:{
      move: {
        "50%":{transform: 'translateY(-1rem)'}
      }
      },
      animation: {
       'movingY': 'move 2s linear infinite'
      },
    },
  },
  plugins: [],
}