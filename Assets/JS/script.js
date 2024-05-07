   // Get references to the sections
   var sectionA = document.getElementById('sectionA');
   var sectionB = document.getElementById('sectionB');

   // Function to toggle visibility of sections
   function toggleSections() {
       sectionA.classList.toggle('visible');
       sectionB.classList.toggle('visible');
   }

   // Initially show section A
   sectionA.classList.add('visible');

   // Function to change sections
   function changeSections() {
       toggleSections();
       setTimeout(toggleSections, 5000); // Change after 2 seconds
   }

   // Repeat the process every 4 seconds
   setInterval(changeSections, 10000);
