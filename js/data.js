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
        $(".card").eq(index).fadeIn(100);
      }, index * 100); // Staggered animation
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
        $(".card").eq(index).fadeIn(100);
      }, index * 100); // Staggered animation
    });
  });

  $(document).ready(function () {
    // Fetch Club Association Data
    $.getJSON("data/club-association.json", function (data) {

      // --- Helper Function to generate Card HTML ---
      function createCardHtml(member) {
        return `
        <div class="card" style="display: none;">
          <img src="${member.image}" alt="${member.name}" class="card-img" />
          <div class="card-body">
            <h5>${member.name}</h5>
            <h3>${member.position}</h3>
            <h4>${member.description}</h4>
          </div>
        </div>`;
      }

      // --- Process Members Section ---
      const $clubSection = $("#club-association");
      $clubSection.append("<h1>Club Association</h1>");

      // Calculate initial delay based on existing cards (optional, usually 0 is better for UX)
      // If you want the animation to start immediately for this section, set startDelay to 0.
      let startOffset = $(".card").length;

      if (data.members) {
        data.members.forEach((member, index) => {
          const $card = $(createCardHtml(member)); // Create jQuery object
          $clubSection.append($card); // Append to DOM

          // Animate specific element
          setTimeout(() => {
            $card.fadeIn(100);
          }, (startOffset + index) * 100);
        });
      }

      // --- Process Alumni Section ---
      const $alumniSection = $("#club-alumni");
      $alumniSection.append("<h1>Previous Members</h1>");

      // Recalculate offset including the newly added members above
      // Note: We add data.members.length to the previous offset
      let alumniOffset = startOffset + (data.members ? data.members.length : 0);

      if (data.alumni) {
        data.alumni.forEach((member, index) => {
          const $card = $(createCardHtml(member));
          $alumniSection.append($card);

          setTimeout(() => {
            $card.fadeIn(100);
          }, (alumniOffset + index) * 100);
        });
      }
    });
  });

});