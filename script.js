const projects = [
  {
    name: "base-apparel-coming-soon-master"
  },
  {
    name: "intro-component-with-signup-form-master"
  },
  { name: "single-price-grid-component-master" }
];

const container = document.querySelector(".flex");

projects.forEach(project => {
  const div = document.createElement("div");

  const website = `./${project.name}/index.html`;

  const item = `
        <div>
            <a
              target="_blank"
              href=${website}
              ><img src="./${
                project.name
              }/design/desktop-preview.jpg" alt="clipboard"
            /></a>
          </div>
          <div>
            <h4>${project.name.split("-").join(" ")}</h4>
            <p>
              <a
                target="_blank"
                href=${website}
                ><i class="fa fa-eye"></i
              ></a>
            </p>
          </div>
    `;

  div.innerHTML = item;

  container.appendChild(div);
});
