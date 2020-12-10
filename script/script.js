const app = new Vue({
  el: '#app',
  data() {
    return {
        my_generated_password: '',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
    }
  },
  methods: {
    generatePassword() {
      document.querySelector('.text-success').style.display = 'block'
      this.a = Math.round(Math.random()* 26)
      this.b = Math.round(Math.random()* 26)
      this.c = Math.round(Math.random()* 26)
      this.d = Math.round(Math.random()* 26)
      this.e = Math.round(Math.random()* 26)
      this.f = Math.round(Math.random()* 26)
      this.g = Math.round(Math.random()* 26)
      this.h = Math.round(Math.random()* 26)
      this.i = Math.round(Math.random()* 26)
      this.j = Math.round(Math.random()* 26)

      function parseGeneratedNumber(args) {
       if(typeof(args === 'number')) {
         if(args === 1)
           return 'a';
         else if(args === 2)
           return 'b';
         else if(args === 3)
           return 'c';
         else if(args === 4)
           return 'd';
         else if(args === 5)
           return 'e';
         else if(args === 6)
           return 'f';
         else if(args === 7)
           return 'g';
         else if(args === 8)
           return 'h';
         else if(args === 9)
           return 'i';
         else if(args === 10)
           return 'j';
         else if(args === 11)
           return 'k';
         else if(args === 12)
           return 'l';
         else if(args === 13)
           return 'm';
         else if(args === 14)
           return 'n';
         else if(args === 15)
           return 'o';
         else if(args === 16)
           return 'p';
         else if(args === 17)
           return 'q';
         else if(args === 18)
           return 'r';
         else if(args === 19)
           return 's';
         else if(args === 20)
           return 't';
         else if(args === 21)
           return 'u';
         else if(args === 22)
           return 'v';
         else if(args === 23)
           return 'w';
         else if(args === 24)
           return 'x';
         else if(args === 25)
           return 'y';
         else if(args === 26)
           return 'z';
         else 
           return 'z'
       } else if (typeof(args) !== 'number') {
         return 1
       }
      }  /* our function end here*/

      this.my_generated_password = parseGeneratedNumber(this.a) + parseGeneratedNumber(this.b) + parseGeneratedNumber(this.c) + parseGeneratedNumber(this.d) + parseGeneratedNumber(this.e) + parseGeneratedNumber(this.f) + parseGeneratedNumber(this.g) + parseGeneratedNumber(this.h) + parseGeneratedNumber(this.i) + parseGeneratedNumber(this.j) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9)
      console.log(this.my_generated_password)

    }, /* end of generate password method */ 
    tryit() {

    }
  } /* end of methods */ 
}) /* end of vue */
