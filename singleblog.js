let queryString = new URLSearchParams(window.location.href.split("?")[1]);
var singleblog = [];
var slug = queryString.get("slug");
var selectedblog = document.querySelector(".single-blog");

console.log(slug);


const getSingleblog = async () => {
  const res = await fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`);
  const data = await res.json();
  var kblog = data.data
  singleblog.push(kblog) ;
  console.log(singleblog)
  
};

await getSingleblog();
const showblogss = (kblog) => {
  selectedblog.innerHTML = "";
  kblog.map((singleblog) => {
    selectedblog.innerHTML += 
`<div class="greynav">
<h1>${singleblog.title}</h1>
</div>
<div class="oneblog">

<img class="image"
  src="${singleblog.thumbnail}"
  alt="${singleblog.slug}"
/>
<div class="product-info">
  <h2>${singleblog.title}</h2>
  <p><strong>Category:</strong> ${singleblog.excerpt}</p>
  <div class="icons">
  <div class ="eye"><span class="material-symbols-outlined">
visibility
</span><label>${singleblog.views} /</label></div>
<div class="date"><span class="material-symbols-outlined">
calendar_month
</span> <label>${singleblog.date} /</label></div>
<div class="tag"><span class="material-symbols-outlined">
sell
</span> <label> ${singleblog.tags}</label></div>
  </div>
</div>
`;
  });
}
showblogss(singleblog)


