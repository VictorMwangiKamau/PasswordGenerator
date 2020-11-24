"use strict"
const my_array = ['Dolor',' adipisci',' natus',' reiciendis',' voluptatem',' velit','.',' Odio',' magnam',' dolore',' soluta',' quisquam',' dolores',' Eius',' veniam',' nesciunt',' deserunt',' ipsam',' doloremque','?' ];
console.log(typeof(my_array))
console.log(my_array.length)

const run_application = document.querySelector('.fa-spinner')

run_application.addEventListener('click', () => {
  let user_input = document.querySelector('input').value
  if(typeof(user_input) === 'string') {
    if(user_input > 20) {
      window.alert('Enter a number below 20')
    }  else if(user_input < 1) {
      window.alert('You can generate less than 1 word')
    } else {
      user_input = Number(user_input)
      if(typeof(user_input === 'number')) {
        let i = 0
        for(i; i < user_input; i ++) {
          console.log(my_array[i])
        } 
      }     
    }
  }
})

