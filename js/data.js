$(document).ready(function () {
    // Fetch Management Data (Now the first dynamic section in HTML)
    $.getJSON("data/management.json", function (data) {
      const managementSection = $("#management");
      managementSection.append('<h1>Our Management</h1>');
  
      data.management.forEach((member, index) => {
        const card = `
          <div class="card" style="display: none;">
            <img src="${member.image}" alt="${member.name}" class="card-img" />
            <div class="card-body">
              <h5>${member.name}</h5>
              <h3>${member.position}</h3>
              <h4>${member.description}</h4>
            </div>
          </div>
        `;
        managementSection.append(card);
  
        // Animate each card after appending
        setTimeout(() => {
          // Starting the animation count from the beginning for the first dynamic section
          $(".card").eq(index).fadeIn(1000); 
        }, index * 500); // Staggered animation
      });
    });
        $.getJSON("data/management.json", function (data) {
      const managementSection = $("#hierarchy");
      managementSection.append('<h1>Our patrons</h1>');
  
      data.patrons.forEach((member, index) => {
        const card = `
          <div class="card" style="display: none;">
            <img src="${member.image}" alt="${member.name}" class="card-img" />
            <div class="card-body">
              <h5>${member.name}</h5>
              <h3>${member.position}</h3>
              <h4>${member.description}</h4>
            </div>
          </div>
        `;
        managementSection.append(card);
  
        // Animate each card after appending
        setTimeout(() => {
          // Starting the animation count from the beginning for the first dynamic section
          $(".card").eq(index).fadeIn(1000); 
        }, index * 500); // Staggered animation
      });
    });
  
    // Fetch Club Association Data (Now the second dynamic section in HTML)
    $.getJSON("data/club-association.json", function (data) {
      const clubSection = $("#club-association");
      clubSection.append('<h1>Club Association</h1>');
  
      // Get the number of cards already loaded by the Management section and Hierarchy
      const offset = $(".card").length; 

      data.forEach((member, index) => {
        const card = `
          <div class="card" style="display: none;">
            <img src="${member.image}" alt="${member.name}" class="card-img" />
            <div class="card-body">
              <h5>${member.name}</h5>
              <h3>${member.position}</h3>
              <h4>${member.description}</h4>
            </div>
          </div>
        `;
        clubSection.append(card);
  
        // Animate each card, offset by the cards already present in the DOM
        setTimeout(() => {
          $(".card").eq(offset + index).fadeIn(1000);
        }, (offset + index) * 500); // Staggered animation using total index
      });
    });
  });