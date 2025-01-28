const accessKey = "FgZd7nQtSaGjS4aYW3UvI3mU-oUA6ykjOR49ScwRk5A";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);

    // HTTP hata kodlarını kontrol et
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (page === 1) {
      searchResult.innerHTML = "";
    }

    const results = data.results;

    if (!results || results.length === 0) {
      searchResult.innerHTML = `<p>No results found for "${keyword}".</p>`;
      showMoreBtn.style.display = "none";
      return;
    }

    results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    // Eğer daha fazla sonuç yoksa butonu gizle
    if (results.length < 12) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    searchResult.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    showMoreBtn.style.display = "none";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
