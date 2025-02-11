(function() {
    'use strict';
    console.log('reading.js');
 
        const sections = document.querySelectorAll('section');
        const input = document.querySelector('#input');
        const output = document.querySelector('#output');
        const form = document.querySelector('#myform');
        const madlib = document.querySelector('#madlib');


        form.addEventListener('submit', function(event) { 
        event.preventDefault();

         const adj1 = document.querySelector('#adj1').value;
         const name = document.querySelector('#name').value;
         const color = document.querySelector('#color').value;
         const food = document.querySelector('#food').value;
         const smelly = document.querySelector('#smelly').value;
         const liquid = document.querySelector('#liquid').value;
         const dumpster = document.querySelector('#dumpster').value;
         const scared = document.querySelector('#scared').value;
         const adj2 = document.querySelector('#adj2').value;
 
         document.querySelector('#adj2').value = '';
         document.querySelector('#name').value = '';
         document.querySelector('#color').value = '';
         document.querySelector('#food').value = '';
         document.querySelector('#smelly').value = '';
         document.querySelector('#liquid').value = '';
         document.querySelector('#dumpster').value = '';
         document.querySelector('#scared').value = '';
         document.querySelector('#adj2').value = '';

         if(adj1 === '') {
             madlib.innerHTML = 'Please enter a noun'; 
             document.querySelector('#adj1').focus();

        } else if (name === '') {
             madlib.innerHTML = 'You did not enter noun 2';
             document.querySelector('#name').focus();

        } else if (color === '') {
             madlib.innerHTML = 'Please add a name';
             document.querySelector('#color').focus();

        } else if (food === '') {
             madlib.innerHTML = 'Please add verb';
             document.querySelector('#food').focus();
        } 

          else if (smelly === '') {
             madlib.innerHTML = 'Please add verb';
             document.querySelector('#smelly').focus();
        }

          else if (liquid === '') {
               madlib.innerHTML = 'Please add verb';
               document.querySelector('#liquid').focus();
          }
          
          else if (dumpster === '') {
               madlib.innerHTML = 'Please add verb';
               document.querySelector('#dumpster').focus();
               }
          
          else if (scared === '') {
                    madlib.innerHTML = 'Exclamation of fear';
                    document.querySelector('#scared').focus();
                    }
          
          else if (adj2 === '') {
               madlib.innerHTML = 'Please add adjective';
               document.querySelector('#adj2').focus();
               }
          
          else if (adj2 === '') {
                    madlib.innerHTML = 'Please add adjective';
                    document.querySelector('#adj2').focus();
               } else {
             const myText = `Last night, me and my family gathered for our annual dinner. As usual it was absolutely <span class="highlight">${adj1}!</span> It all started when Uncle Max showed up wearing <span>${color}</span> pants on his head. Cousin <span class="highlight2">${name}</span> thought it would be a good idea to bring their famous <span class="highlight">${food}</span> casserole, which smelled like <span class="highlight">${smelly}</span> and tasted even worse. Grandma kept asking if everyone had tried her green beans which she made with <span>${liquid}</span> and a dash of <span class="highlight">${dumpster}</span>. We all definitely loved it! Out of nowhere the dog jumped on the table and mom screamed <span class="highlight2">${scared}</span>!!! By the end of the night, we agreed it was the most <span class="highlight">${adj2}</span> dinner ever and we couldn’t wait for next year’s gathering!`;
             
             madlib.innerHTML = myText;

             sections[0].className = 'hidden'; 
            sections[1].className = 'showing'; 
        }
});
 })();