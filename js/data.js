$(document).ready(function () {
    // Fetch Club Association Data
    $.getJSON("data/club-association.json", function (data) {
      const clubSection = $("#club-association");
      clubSection.append('<h1>Club Association</h1>');
  
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
  
        // Animate each card after appending
        setTimeout(() => {
          $(".card").eq(index).fadeIn(1000);
        }, index * 500); // Staggered animation
      });
    });
  
    // Fetch Management Data
    $.getJSON("data/management.json", function (data) {
      const managementSection = $("#management");
      managementSection.append('<h1>Our Management</h1>');
  
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
        managementSection.append(card);
  
        // Animate each card after appending
        setTimeout(() => {
          $(".card").eq(index + 3).fadeIn(1000); // Offset by club association cards
        }, index * 500); // Staggered animation
      });
    });
  });