### Daily JavaScript App - Day 30: Image Search Engine 🖼️  
A feature-rich **Image Search Engine** application, built as part of my **Daily JavaScript Coding Challenge**, enabling users to search and explore images dynamically using the Unsplash API.  

---

### ✨ Features  
- **Dynamic Image Search**: Fetches images based on user-entered keywords.  
- **Load More Functionality**: Seamlessly loads additional images without refreshing the page.  
- **Error Handling**: Ensures a smooth user experience with clear messages for empty results or API issues.  
- **Responsive Design**: Delivers an optimal user experience on any device.  

---

### 📂 File Structure  
```
├── index.html          # Main HTML file  
├── style.css           # CSS file for styling  
└── app.js              # JavaScript file for dynamic functionality  
```  

---

### 📋 Technologies Used  
- **HTML5 🏗️**: For the application's structure.  
- **CSS3 🎨**: For styling and responsive design.  
- **JavaScript ⚡**: For implementing the core search functionality using the Unsplash API.  

---

### 🚀 How It Works  
1. **User Input**: Enter a keyword into the search box and hit the search button.  
2. **API Integration**: Fetches image data from Unsplash based on the entered keyword and page number.  
3. **Dynamic Rendering**: Displays the images dynamically on the page.  
4. **Pagination**: The "Show More" button loads additional images incrementally.  

---

### 🔧 How to Use  
1. Clone or download the project files to your local machine:  
   ```bash  
   git clone https://github.com/enesatacan/Image-Search-Engine  
   ```  
2. Replace `YOUR-ACCESS-KEY` in `app.js` with your [Unsplash API Access Key](https://unsplash.com/developers).  
3. Open the `index.html` file in any modern web browser.  
4. Type your desired keyword in the search box, hit "Search," and explore the results.  

---

### 💻 Code Highlights  
#### **HTML**  
A minimal and semantic structure:  
```html  
<form id="search-form">  
  <input id="search-box" placeholder="Search Anything Here..." type="text" />  
  <button>Search</button>  
</form>  
<div id="search-result"></div>  
<button id="show-more-btn">Show More</button>  
```

#### **JavaScript**  
Core functionality using `fetch` and Unsplash API:  
```javascript  
async function searchImages() {  
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;  
  try {  
    const response = await fetch(url);  
    if (!response.ok) throw new Error(`Error: ${response.status}`);  
    const data = await response.json();  
    // Dynamically render images here  
  } catch (error) {  
    console.error("Error fetching images:", error);  
  }  
}  
```  
### 💻 Screenshot  

![image](https://github.com/user-attachments/assets/fa23d3fa-6680-4475-bff8-7c6168476356)
