let blogs = [];
let pagenumber = 1

var postlist = document.querySelector(".cards");
let button = document.querySelector(".button");

const getblogs = async (pagecounting) => {
  const res = await fetch(
    `https://www.wp-course.site/wp-json/youthink/posts?page=${pagecounting}`
  );
  const data = await res.json();
  var leo = data.data;
  blogs.push(...leo);
  console.log(leo)
};


const singleblog = (leo) => {
  postlist.innerHTML = "";
  leo.map((item) => {
    postlist.innerHTML += `
    <li class="card">
    <div class=oneblog>
    <img
    src="${item.thumbnail}"
    alt="${item.slug}"/>    
          <div class="card-info">
            <h1>
              ${item.title}
              
            </h1>
            <p>${item.excerpt}</p>
            <div class="icons">
            <div class ="eye"><span class="material-symbols-outlined">
visibility
</  span> <label>${item.views} /</label></div>
<div class="date"><span class="material-symbols-outlined">
calendar_month
</span> <label>${item.date} /</label></div>
<div class="tag"><span class="material-symbols-outlined">
sell
</span> <label> ${item.tags}</label></div>
            </div>
          </div>
          </div>
         
        </li>
        `;
  });
};


await getblogs(pagenumber)
 singleblog(blogs)
  
button.addEventListener('click', async () => {
  if(pagenumber <= 3){
  pagenumber += 1 
  await getblogs(pagenumber)
  singleblog(blogs)
  }
  else button.remove()


  
}) 





postlist.addEventListener("click", (e) => {
  console.log(e.composedPath() )
 e.path.map((el) => {
   if (el.tagName == "IMG") {window.location.href =`http://127.0.0.1:5500/singleblog.html?slug=${el.alt}`;
   }
 });
});